from django.http import HttpRequest
from ICS.models import *
from datetime import datetime

class ApiDataInfo:
    def __init__(self, req: HttpRequest, info_type: str = 'icon'):
        self.req = req
        self.info_type = info_type

    def run(self) -> dict:
        if self.info_type == 'icon':
            return self.get_icon_info()
        elif self.info_type == 'illustration':
            return self.get_ill_info()
        else:
            return None

    def get_icon_info(self) -> dict:
        pid: str = self.req.GET.get('id')
        if not pid.isdigit():
            return None
        pid = int(pid)
        icon = data.objects.filter(data_id=pid)
        if len(icon) != 1:
            return None
        icon: data = icon.first()
        res = dict()
        res["fills"] = True
        res["status"] = 1
        res["favorCount"] = len(favorites.objects.filter(data_id_id=pid))
        res["updated_at"] = icon.updated_at.strftime("%Y-%m-%dT%H:%M:%S")
        res["category_id"] = icon.category_id
        if icon.created_at is None:
            icon.created_at = datetime.now()
            icon.save()
        res["created_at"] = icon.created_at.strftime("%Y-%m-%dT%H:%M:%S")
        res["font_class"] = icon.font_class
        res["height"] = icon.height
        res["width"] = icon.width
        res["id"] = pid
        res["is_private"] = icon.is_private
        res["name"] = icon.name
        res["file"] = icon.data_file
        res["origin_file"] = icon.origin_file
        res["user_id"] = icon.created_user
        res["svg"] = icon.svg
        res["show_svg"] = icon.show_svg
        res["slug"] = icon.slug
        u: userProfile = userProfile.objects.filter(user_id=icon.created_user).first()
        res["creater"] = {
            "alipay_code": "",
            "avatar": u.avatar,
            "bio": u.bio,
            "id": u.user_id,
            "nickname": u.nickname,
            "weixin_code": str(u.weixin_code),
        }
        lib = icon.libs_belongs_to
        if lib is None:
            return res
        res["collections"] = [
            {
                "id": lib.icon_libs_id,
                "all_count": len(data.objects.filter(libs_belongs_to_id=lib.icon_libs_id)),
                "create_user_id": lib.created_user,
                "created_at": lib.created_at.strftime("%Y-%m-%dT%H:%M:%S"),
                "description": lib.name,
                "name": lib.name,
                "likes_count": len(likes.objects.filter(libs_id_id=lib.icon_libs_id)),
                "slug": lib.slugs,
                "type": lib.libs_type,
                "IconCollection": {
                    "category_id": icon.category_id,
                    "collection_id": lib.icon_libs_id,
                    "id": lib.icon_libs_id,
                    "created_at": lib.created_at.strftime("%Y-%m-%dT%H:%M:%S"),
                    "icon_id": pid,
                    "status": 1,
                    "updated_at": icon.updated_at.strftime("%Y-%m-%dT%H:%M:%S"),
                }
            }
        ]
        res["collections"][0]["icons_count"] = res["collections"][0]["all_count"]
        return res

    def get_ill_info(self) -> dict:
        res = self.get_icon_info()
        return res
