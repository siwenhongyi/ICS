from ICS.models import *
from django.db.models import Q
from django.http import HttpRequest
import datetime


class ApiUser:
    def __init__(self, **kwargs):
        self.req: HttpRequest = kwargs.get("request", None)
        self.enum: str = kwargs.get("path", None)

    def run(self):
        enum = self.enum
        if enum is None or self.req is None:
            return None
        if enum == 'myuploads.json':
            return self.get_my_icons()
        elif enum == 'myUploadSvgs.json':
            return self.get_my_illustration()
        elif enum == 'mycollections.json':
            return self.get_my_libs()
        elif enum == 'myfavorites.json':
            return self.get_my_like_icons()
        elif enum == 'myCollectionFavorite.json':
            return self.get_my_like_libs()
        elif enum == 'detail.json':
            return self.get_my_center()
        elif enum == 'update.json':
            return self.update()
        else:
            return None

    def get_icons_or_ills(self, dt):
        """
        get all data by data_type
        :param dt: data_type
        :return: list of res
        """
        arg_dict = self.req.GET
        u_id = int(self.req.COOKIES.get("u", "0"))
        limit = int(arg_dict.get("limit", "15"))
        page = int(arg_dict.get("page", "1"))
        icon_start = (page - 1) * limit
        icon_end = page * limit
        icon_type = arg_dict.get("type", "all")
        icons = data.objects.filter(created_user=u_id).filter(data_type=dt)
        if icon_type == 'private':
            icons = icons.filter(is_private=True)
        elif icon_type == 'public':
            icons.filter(is_private=False)
        icons = icons[icon_start:icon_end]
        return icons
        pass

    def get_my_icons(self):
        """
        get all_my icons
        :return:
        """
        icons = self.get_icons_or_ills(dt='icon')
        limit = int(self.req.GET.get("limit", "15"))
        res = {
            "count": len(icons),
            "limit": limit,
            "page": len(icons) / limit + 1,
        }
        m = list()
        for icon in icons:
            one_icon = dict()
            one_icon["id"] = icon.data_id
            if icon.is_private:
                one_icon["is_private"] = 1
            else:
                one_icon["is_private"] = 0
            one_icon["name"] = icon.name
            one_icon["repositorie_id"] = icon.libs_belongs_to_id
            one_icon["show_svg"] = icon.show_svg
            one_icon["user_id"] = icon.created_user
            m.append(one_icon)
        res["icons"] = m
        return res

    def get_my_illustration(self):
        """
        get all my ills
        :return:
        """
        ills = self.get_icons_or_ills(dt='illustration')
        limit = int(self.req.GET.get("limit", "15"))
        res = {
            "count": len(ills),
            "limit": limit,
            "page": len(ills) / limit + 1,
        }
        m = list()
        for ill in ills:
            one_ill = dict()
            one_ill["ext"] = ".svg"
            one_ill["id"] = ill.data_id
            one_ill["file"] = str(ill.data_file)
            one_ill["height"] = ill.height
            one_ill["width"] = ill.width
            one_ill["name"] = ill.name
            one_ill["user_id"] = ill.created_user
            m.append(one_ill)
        res["icons"] = m
        return res

    def get_my_libs(self):
        """
        get all my libs  and data of this libs
        :return:
        """
        u_id = int(self.req.COOKIES.get("u", "0"))
        libs = iconLibs.objects.filter(created_user=u_id)
        res = dict()
        m = list()
        for lib in libs:
            one_lib = dict()
            one_lib["create_user_id"] = lib.created_user
            one_lib["id"] = lib.icon_libs_id
            one_lib["created_at"] = lib.created_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            one_lib["updated_at"] = lib.updated_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            one_lib["has_secret"] = lib.has_secret
            one_lib["name"] = lib.name
            one_lib["slug"] = lib.slugs
            one_lib["type"] = "icon"
            one_lib["likes_count"] = len(likes.objects.filter(libs_id_id=lib.icon_libs_id))
            all_icons = data.objects.filter(libs_belongs_to_id=lib.icon_libs_id)
            one_lib["all_count"] = len(all_icons)
            favorite_count = 0
            icons_count = 0
            icons = list()
            for icon in all_icons:
                one_icon = dict()
                one_icon["name"] = icon.name
                one_icon["show_svg"] = icon.show_svg
                if not icon.is_private:
                    icons_count += 1
                favorite_count += len(favorites.objects.filter(data_id=icon.data_id))
                icons.append(one_icon)
            one_lib["icons"] = icons
            one_lib["favorite_count"] = favorite_count
            one_lib["icons_count"] = icons_count
            m.append(one_lib)
        res["collections"] = m
        return res

    def get_my_like_icons(self):
        """
        get all my like icons
        :return:
        """
        u_id = int(self.req.COOKIES.get("u", "0"))
        all_favorites = favorites.objects.filter(user_id=u_id)
        res = dict()
        m = list()
        for fav in all_favorites:
            icon = fav.data_id
            one_like = dict()
            IconUser = {
                "icon_id": icon.data_id,
                "user_id": icon.created_user,
            }
            one_like["IconUser"] = IconUser
            one_like["category_id"] = 1
            one_like["created_at"] = icon.created_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            one_like["updated_at"] = icon.updated_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            one_like["fills"] = True
            one_like["font_class"] = icon.font_class
            one_like["height"] = icon.height
            one_like["width"] = icon.width
            one_like["id"] = icon.data_id
            one_like["is_private"] = icon.is_private
            one_like["name"] = icon.name
            one_like["origin_file"] = icon.origin_file
            one_like["prototype_svg"] = icon.svg
            one_like["svg"] = icon.svg
            one_like["show_svg"] = icon.show_svg
            one_like["repositorie_id"] = icon.libs_belongs_to_id
            one_like["slug"] = icon.slug
            one_like["status"] = 1
            one_like["user_id"] = icon.created_user
            m.append(one_like)
        res["favorites"] = m
        return res

    def get_my_like_libs(self):
        """
        get all my like libs
        :return:
        """
        u_id = int(self.req.COOKIES.get("u", "0"))
        all_likes = likes.objects.filter(user_id=u_id)
        res = dict()
        m = list()
        for like in all_likes:
            one_like = dict()
            lib = like.libs_id
            CollectionFavorite = {
                "collection_id": like.id,
                "created_at": lib.created_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z"),
                "updated_at": lib.updated_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z"),
                "id": lib.icon_libs_id,
                "user_id": lib.created_user,
            }
            one_like["CollectionFavorite"] = CollectionFavorite
            all_icons = data.objects.filter(libs_belongs_to=lib.icon_libs_id)
            one_like["all_count"] = len(all_icons)
            one_like["created_user_id"] = lib.created_user
            one_like["created_at"] = lib.created_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            one_like["updated_at"] = lib.updated_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            one_like["has_secret"] = lib.has_secret
            one_like["id"] = like.id
            one_like["likes_count"] = len(likes.objects.filter(libs_id=lib))
            one_like["name"] = lib.name
            one_like["show"] = 1
            one_like["slug"] = lib.slugs
            one_like["type"] = "icon"
            favorite_count = 0
            icons_count = 0
            icons = list()
            for icon in data.objects.filter(libs_belongs_to_id=lib.icon_libs_id):
                one_icon = dict()
                if not icon.is_private:
                    icons_count += 1
                favorite_count += len(favorites.objects.filter(data_id_id=icon.data_id))
                one_icon["height"] = icon.height
                one_icon["width"] = icon.width
                one_icon["name"] = icon.name
                one_icon["show_svg"] = icon.show_svg
                icons.append(one_icon)
            one_like["icons"] = icons
            one_like["icons_count"] = icons_count
            one_like["favorite_count"] = favorite_count
            m.append(one_like)
        res["lists"] = m
        return res

    def get_my_center(self):
        u_id = int(self.req.GET.get("uid", "0"))
        u = userProfile.objects.filter(user_id=u_id)
        if len(u) != 1:
            return None
        u: userProfile = u.first()
        res = {
            "alipay_code": "",
            "avatar": u.avatar,
            "bio": u.bio,
            "id": u.user_id,
            "isXiaoer": False,
            "nickname": u.nickname,
            "qq": u.qq,
            "show_email": u.email,
            "weixin_code": str(u.weixin_code),
        }
        return res

    def update(self):
        u_id = int(self.req.POST.get("id", "0"))
        u = userProfile.objects.filter(user_id=u_id)
        if len(u) != 1:
            return None
        u: userProfile = u.first()
        arg_dict = self.req.POST
        u.avatar = arg_dict.get("avatar", "")
        u.bio = arg_dict.get("bio", "")
        u.email = arg_dict.get("show_email", "")
        u.nickname = arg_dict.get("nickname", "")
        qq = arg_dict.get("qq", "0")
        if qq != "0" and qq != "":
            u.qq = int(qq)
        u.weixin_code = arg_dict.get("weixin_code", None)
        u.save()
        return []
