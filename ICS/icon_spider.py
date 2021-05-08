from typing import Dict, List

from ICS.models import *
import requests
import pytz
import urllib3
import json
import random
from datetime import datetime
import time


class GetDataBySpider:
    def __init__(self):
        self.all_libs = [12345]
        self.users = [10000, 10001, 10002, 55451093]
        self.icon_count = 0
        self.ill_count = 0
        self.headers = {
            "accept": "application/json",
            "authority": "www.iconfont.cn",
            "scheme": "https",
            "accept": "application/json",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "cookie": "trace=AQAAABlnK1pkDwgAjFG3PeokQOKTwtai; ctoken=Tr4RKL5crBI5pXHnTP0F8msV; cna=YKAcGYo5PAcCAT23UYzKdp/C; xlly_s=1; isg=BMzMm09IwIqRO9S2sFsmKjoPnSr-BXCv4nQ2xiaNEHcasWy7ThXYP8NAUbGJ-agH",
            "origin": "https://www.iconfont.cn",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
            "x-csrf-token": "Tr4RKL5crBI5pXHnTP0F8msV",
            "x-requested-with": "XMLHttpRequest",
        }

        self.icon_keys = ['word', 'pdf', 'ppt', 'pptx', 'office', 'mp3', 'mp4', 'img', 'jpg', 'gif', 'excel', 'py',
                          'java', 'linux', '蝴蝶', '聊天框', '虎', 'email', '信', 'ios', 'iPad', '天空', '蓝', '猫', '狗', '羽', '毛',
                          '鸟', '统计', '扁平', '填充', '线性', '手绘', '可爱', '简约', 'qq','精美','圆润','iphone','糖','jpg','txt','zip','7z','rar']
        self.data_dict = {
            "sortType": "updated_at",
            "page": 1,
            "pageSize": 2000,
            "fromCollection": 1,
            "fills": 1,
            't': time.time(),
            "ctoken": "Tr4RKL5crBI5pXHnTP0F8msV"
        }
        self.http = urllib3.PoolManager(num_pools=10, headers=self.headers)
        self.add_def_libs()
        return

    def run(self):
        self.get_icon()
        self.get_ill()

    def get_icon(self):
        url = 'https://www.iconfont.cn/api/icon/search.json'
        for key in self.icon_keys:
            self.data_dict['referer'] = 'https://www.iconfont.cn/search/index?searchType=icon&q=%s&page=%s&pageSize' \
                                        '=%sfills=' % (key, 1, 1000)
            self.data_dict["q"] = key
            resp = self.http.request(method='POST', url=url, body=json.dumps(self.data_dict), timeout=5, retries=5)
            resp_str = str(resp.data, encoding='utf-8').replace('null', 'None')
            ds = eval(resp_str)['data']
            icons: List[Dict] = ds['icons']
            if len(icons) == 0:
                break
            print('icons' + str(len(icons)))
            for icon in icons:
                if len(data.objects.filter(data_id=icon['id'])) != 0:
                    continue
                libs_id = int(icon.get('repositorie_id', '12345'))
                if libs_id not in self.all_libs:
                    libs_id = self.add_libs(libs_id, key, 'icon')
                libs: iconLibs = iconLibs.objects.filter(icon_libs_id=libs_id).first()
                user_id: int = libs.created_user
                d = data()
                d.created_at = d.updated_at = datetime.now()
                d.created_user = user_id
                d.data_id = icon['id']
                d.libs_belongs_to = libs
                d.category_id = 1
                d.data_type = 'icon'
                d.font_class = icon.get('font_class', "null")
                d.height = icon.get('height', 1024)
                d.width = icon.get('width', 1024)
                d.is_private = False
                d.name = icon.get('name', key)
                d.origin_file = icon.get('origin_file', "")
                d.path_attributes = icon.get('path_attributes', "")
                d.prototype_svg = icon.get('prototype_svg', "")
                d.show_svg = icon.get('show_svg', "")
                d.slug = icon.get("slug", key)
                d.svg = icon.get('svg', key)
                d.save()
                self.icon_count += 1
                print('icon = ' + str(self.icon_count))
            time.sleep(0.3)

    def get_ill(self):
        url = 'https://www.iconfont.cn/api/illustration/search.json'
        self.data_dict.pop('fromCollection')
        self.data_dict.pop('fills')
        self.data_dict['pageSize'] = 40
        for key in self.icon_keys:
            self.data_dict["q"] = key
            self.data_dict['referer'] = 'https://www.iconfont.cn/search/index?searchType=illustration&q=%s' % key
            resp = self.http.request(method='POST', url=url, body=json.dumps(self.data_dict), timeout=5, retries=5)
            resp_str = str(resp.data, encoding='utf-8').replace('null', 'None')
            icons: List[Dict] = eval(resp_str)['data']['icons']
            for ill in icons:
                lib_id = 12345
                while lib_id in self.all_libs:
                    lib_id = random.randint(5000, 100000)
                lib = self.add_libs(lib_id, key, 'illustration')
                lib: iconLibs = iconLibs.objects.filter(icon_libs_id=lib_id).first()
                uid: int = lib.created_user
                d = data()
                d.created_at = d.updated_at = datetime.now()
                d.created_user = uid
                d.libs_belongs_to = lib
                d.is_private = False
                d.data_type = 'illustration'
                d.data_file = ill.get('file')
                d.origin_file = ill.get('origin_file', "")
                d.slug = d.name = ill.get('name', key)
                d.save()
                self.ill_count += 1
                print('ill = ' + str(self.ill_count))
            time.sleep(2)

    def add_def_libs(self):
        lib = iconLibs()
        lib.icon_libs_id = 12345
        lib.name = lib.slugs = "默认"
        lib.created_user = 55451093
        lib.libs_type = 'icon'
        lib.has_secret = 0
        lib.created_at = lib.updated_at = datetime.now()
        lib.save()
        pass

    def add_libs(self, libs_id: int, key: str, dtype: str) -> int:
        created_user = self.users[random.randint(0, 3)]
        lib = iconLibs()
        lib.created_at = lib.updated_at = datetime.now()
        lib.icon_libs_id = libs_id
        lib.created_user = created_user
        lib.name = key
        lib.slugs = key
        lib.libs_type = dtype
        lib.has_secret = 0
        lib.save()
        return libs_id
        url = 'https://www.iconfont.cn/api/collection/detail.json?id=%s' % str(libs_id)
        resp = self.http.request(method='GET', url=url, timeout=5, retries=5)
        resp_str = str(resp.data, encoding='utf-8').replace('null', 'None')
        lib_info: dict = eval(resp_str)['data']['collection']

        created_user = self.users[random.randint(0, 4)]
        lib = iconLibs()
        lib.icon_libs_id = lib_info['id']
        lib.created_user = created_user
        lib.name = lib_info['name']
        lib.slugs = lib_info['slug']
        lib.libs_type = lib_info['type']
        lib.has_secret = 0
        lib.save()
        self.all_libs.append(libs_id)
        return lib.icon_libs_id
