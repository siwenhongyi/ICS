from django.http import HttpRequest
from ICS.models import *
import random


class ApiLibsInfo:
    def __init__(self, req: HttpRequest, path: str):
        self.req = req
        self.path = path

    def run(self):
        if self.path == 'detail.json':
            return self.get_libs_detail()
        else:
            return None

    def get_libs_detail(self):
        id: str = self.req.GET.get('id', "None")
        if not id.isdigit():
            return None
        lib = iconLibs.objects.filter(icon_libs_id=id)
        if len(lib) != 1:
            return {}
        lib: iconLibs = lib.first()
        res = {"is_private": False, "role_in_collection": None, "type": 1, }
        m = list()
        icons = data.objects.filter(libs_belongs_to_id=id)
        fav_count = 0
        icons_count = 0
        for icon in icons:
            m.append(
                {
                    "id": icon.data_id,
                    "height": icon.height,
                    "width": icon.width,
                    "name": icon.name,
                    "show_svg": icon.show_svg,
                    "user_id": icon.created_user
                }
            )
            fav_count += len(favorites.objects.filter(data_id=icon))
            if not icon.is_private:
                icons_count += 1
        res["icons"] = m
        u: userProfile = userProfile.objects.filter(user_id=lib.created_user).first()
        res["creater"] = {
            "alipay_code": "",
            "avatar": u.avatar,
            "bio": u.bio,
            "id": u.user_id,
            "nickname": u.nickname,
            "weixin_code": u.weixin_code,
        }
        res["collection"] = {
            "all_count": len(icons),
            "created_user_id": lib.created_user,
            "created_at": lib.created_at.strftime("%Y-%m-%dT%H:%M:%S"),
            "updated_at": lib.updated_at.strftime("%Y-%m-%dT%H:%M:%S"),
            "favorite_count": fav_count,
            "has_secret": lib.has_secret,
            "icons_count": icons_count,
            "id": lib.icon_libs_id,
            "likes_count": len(likes.objects.filter(libs_id_id=lib.icon_libs_id)),
            "name": lib.name,
            "show": 1,
            "slug": lib.slugs,
            "type": lib.libs_type,
            "visited_count": random.randint(100, 10000),
        }
        return res
