import os
from datetime import datetime as dt
import json
import requests
import validators
from ICS.models import *

path = "C:/Users/HongYi/Desktop/论文/毕设"
users = [10000, 10001, 10002]
default_tags = {
    "tags": [{"name": "填充", "ename": "filling"}, {"name": "线性", "ename": "linear"}, {"name": "扁平", "ename": "flat"},
             {"name": "手绘", "ename": "freehand"}, {"name": "单色", "ename": "solid color"},
             {"name": "多色", "ename": "multicolor"}, {"name": "简约", "ename": "simple"},
             {"name": "精美", "ename": "delicate"}, {"name": "可爱", "ename": "cute"}, {"name": "商务", "ename": "businese"},
             {"name": "圆润", "ename": "round"}, {"name": "方正", "ename": "square"}]
}



# static\out = open(os.path.join(path, 'out.txt'), mode='w')

def get_arg(arg_str: str) -> list:
    return arg_str.split('/')


def get_default_tag() -> str:
    print(type(default_tags))
    return default_tags





def check_qq(qq: str) -> bool:
    if len(qq) < 5 or len(qq) > 10:
        return False
    for _ in qq:
        if _.isdigit():
            continue
        else:
            return False
    return True


def check_email(email: str) -> bool:
    return validators.email(email)


def get_svg(show_svg: str) -> str:
    show_svg = show_svg.replace(" ", "-")
    res = []
    for i in show_svg:
        res.append(i)
    show_svg = res
    svg = []
    while 'M' in show_svg:
        i = show_svg.index('M')
        a = 1
        while i < len(show_svg) and show_svg[i] not in ['z', 'Z']:
            svg.append(show_svg[i])
            if a == 1 and show_svg[i] == "-":
                i += 1
                x = ""
                while show_svg[i].isdigit() or show_svg[i] == '.':
                    x += show_svg[i]
                    i += 1
                x = float(x)
                x = max(896, float('%.1f' % x)) - min(896, float('%.1f' % x))
                x = str(float('%.1f' % x))
                if x[-1] == '0':
                    x = x[:-2]
                for _ in x:
                    svg.append(_)
                svg.append(show_svg[i])
                a = 0
            i += 1
        if i >= len(show_svg):
            break
        svg.append(show_svg[i])
        show_svg = show_svg[i:]
    svg = "".join(svg)
    return svg


def get_o_f(show_svg: str) -> str:
    return show_svg


def run():
    files = os.listdir(path)
    i = 0
    j = 0
    for file in files:
        if file.find('txt') == -1:
            continue
        s = ""
        with open(file=os.path.join(path, file), mode='r', encoding='utf-8') as f:
            for line in f.readlines():
                s += line
        datas: dict = json.loads(s)
        if file[0] == 'i':
            rep_name = file[1:file.find('.')]
            datas = datas["data"]["icons"]
            rep_id = datas[0]["repositorie_id"]
            results = iconLibs.objects.filter(icon_libs_id=rep_id)
            print(results)
            if len(results) == 0:
                print("new libs")
                new_lib = iconLibs()
                new_lib.icon_libs_id = rep_id
                new_lib.name = rep_name
                new_lib.all_count = len(datas)
                new_lib.created_user = users[i]
                new_lib.slugs = rep_name
                new_lib.likes_count = 0
                new_lib.is_private = False
                new_lib.save()
                print(len(iconLibs.objects.all()))
            for icon in datas:
                new_icon = data()
                new_icon.height = icon["height"]
                new_icon.width = icon["width"]
                new_icon.data_id = icon["id"]
                new_icon.name = icon["name"]
                new_icon.font_class = icon["name"]
                new_icon.slug = icon["name"]
                show_svg = icon["show_svg"]
                new_icon.show_svg = icon["show_svg"]
                new_icon.created_user = users[i]
                new_icon.svg = get_svg(show_svg)
                new_icon.origin_file = get_o_f(show_svg)
                new_icon.is_private = False
                new_icon.libs_belongs_to = iconLibs.objects.filter(icon_libs_id=rep_id).first()
                new_icon.save()
            i += 1

        else:
            for icon in datas["data"]["icons"]:
                new_ill = data()
                new_ill.created_user = users[j]
                new_ill.data_id = icon["id"]
                new_ill.name = icon["name"]
                new_ill.height = icon["height"]
                new_ill.width = icon["width"]
                new_ill.data_file = icon["file"]
                new_ill.origin_file = icon["origin_file"]
                new_ill.data_type = "illustration"
                new_ill.save()
            j += 1
        pass


def getAccessToken(url: str):
    header = {"accept": "application/json"}
    resp_dict: dict = json.loads(requests.get(url=url, headers=header).text)
    return resp_dict.get("access_token", None)


def getUserInfo(url: str, token: str):
    header = {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": "token %s" % token,
    }
    resp_dict: dict = json.loads(requests.get(url, headers=header).text)
    return resp_dict


def add_user(user_info_dict: dict):
    print("到了")
    new_user = user()
    new_user.user_id = user_info_dict["id"]
    new_user.password = user_info_dict.get("node_id")
    new_user.token = "no_token"
    new_user.save()
    new_user_profile = userProfile()
    new_user_profile.user_id = user_info_dict["id"]
    new_user_profile.avatar = user_info_dict.get("avatar_url", None)
    new_user_profile.email = user_info_dict.get("email", None)
    new_user_profile.nickname = user_info_dict.get("login", "null")
    new_user_profile.save()
    print(new_user_profile)
