from ICS.models import *
from django.db.models import Q
import datetime


class ApiSearch:
    def __init__(self, key: str, mode='icon'):
        self.key = key
        self.mode = mode
        # run()

    def get_res(self) -> list:
        if self.mode == 'icon':
            return self.get_icon()
        elif self.mode == 'illustration':
            return self.get_illustration()
        elif self.mode == 'user':
            return self.get_user()
        else:
            return []

    def get_icon(self):
        res = list()
        icons = data.objects.filter(data_type='icon').filter(category_id=1).filter(Q(slug__icontains=self.key) |
                                                             Q(name__icontains=self.key) |
                                                             Q(font_class__icontains=self.key))
        for icon in icons:
            t = dict()
            flag = False
            if icon.created_at is None:
                flag = True
                icon.created_at = datetime.datetime.now()
            if icon.updated_at is None:
                flag = True
                icon.updated_at = datetime.datetime.now()
            t["created_at"] = icon.created_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            t["updated_at"] = icon.updated_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            t["height"] = icon.height
            t["width"] = icon.width
            t["category_id"] = icon.category_id
            t["status"] = 1
            t["font_class"] = icon.font_class
            t["id"] = icon.data_id
            t["is_private"] = icon.is_private
            t["name"] = icon.name
            t["slug"] = icon.slug
            t["user_id"] = icon.created_user
            t["repositorie_id"] = icon.libs_belongs_to.icon_libs_id
            t["origin_file"] = icon.origin_file
            t["show_svg"] = icon.show_svg
            t["svg"] = icon.svg
            t["prototype_svg"] = icon.svg
            if flag:
                icon.save()
            res.append(t)
        return res

    def get_illustration(self):
        res = list()
        ills = data.objects.filter(data_type='illustration').filter(category_id=1).filter(
            Q(slug__icontains=self.key) | Q(name__icontains=self.key))
        for ill in ills:
            t = dict()
            flag = False
            if ill.created_at is None:
                ill.created_at = datetime.datetime.now()
                flag = True
            t["id"] = ill.data_id
            t["created_at"] = ill.created_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            t["ext"] = "svg"
            t["file"] = ill.data_file
            t["height"] = ill.height
            t["width"] = ill.width
            t["origin_file"] = ill.origin_file
            t["status"] = 1
            t["type"] = ill.data_type
            if ill.updated_at is None:
                ill.updated_at = datetime.datetime.now()
                flag = True
            t["updated_at"] = ill.updated_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            t["user_id"] = ill.created_user
            res.append(t)
            if flag:
                ill.save()
        return res

    pass

    def get_user(self):
        users = userProfile.objects.filter(nickname__icontains=self.key)
        res = []
        for u in users:
            item = dict()
            item['avatar'] = str(u.avatar)
            item['created_at'] = u.created_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            item['show_email'] = u.email
            item['id'] = u.user_id
            item['qq'] = u.qq
            item['nickname'] = u.nickname
            item['updated_at'] = u.updated_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            item['weixin_code'] = str(u.weixin_code)
            item['last_login_at'] = u.last_login_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            item['collectionCount'] = 0
            item['collections'] = []

            item['iconsCount'] = 0
            res.append(item)

        return res

        pass
