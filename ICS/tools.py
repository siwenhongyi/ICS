import os
from datetime import datetime as dt
import json
from typing import Dict

import requests
from bs4 import BeautifulSoup
import validators
from ICS.models import *
style = 'style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"'


# static\out = open(os.path.join(path, 'out.txt'), mode='w')

def get_arg(arg_str: str) -> list:
    return arg_str.split('/')


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


class UploadFileGetSvg:
    def __init__(self):
        self.origin_file = ''
        return

    def run(self, temp_svg: str) -> Dict[str, str]:
        index = temp_svg.find('<svg')
        temp_svg = temp_svg[index:]
        show_svg = ""
        flag = True
        index = temp_svg.find('>')
        for i in range(len(temp_svg)):
            show_svg += temp_svg[i]
            if flag and temp_svg[i] == 'g':
                flag = False
                show_svg += ' '
                for _ in style:
                    show_svg += _
            if i == index:
                break
        self.origin_file = temp_svg
        soup = BeautifulSoup(self.origin_file, 'html.parser')
        obj_svg = soup.find('svg')
        prototype_svg = ""
        path_attributes = ""
        for tag in obj_svg.children:
            if tag.name != 'path':
                continue
            atts: dict = tag.attrs
            d = atts.get('d', None)
            fills = atts.get('fill', None)
            if tag.name == 'path':
                show_svg += '<path d="'
                show_svg += atts.get('d')
                show_svg += '" '
                if atts.get('fill', False):
                    show_svg += 'fill="'
                    show_svg += atts.get('fill')
                    show_svg += '" '
                show_svg += '></path>'
            if not d:
                prototype_svg += d
                prototype_svg += '|'
            if not fills:
                path_attributes += fills
                path_attributes += '|'
        show_svg += '</svg>'
        svg = self.get_svg(show_svg)
        return {
            "svg": svg,
            "origin_file": self.origin_file,
            "show_svg": show_svg,
            "path_attributes": path_attributes,
            "prototype_svg": prototype_svg
        }

    def get_svg(self, show_svg: str) -> str:
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
