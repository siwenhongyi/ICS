import json
import os
from typing import Dict, List

from django.http import HttpRequest, HttpResponse, HttpResponseRedirect, Http404, FileResponse
from django.shortcuts import render
from django.core.files.uploadedfile import InMemoryUploadedFile
import ICS.tools as my_tools
from ICS.models import *
from ICS.api_search import ApiSearch
from ICS.api_user import ApiUser
from ICS.api_data_info import ApiDataInfo
from ICS.api_libs_info import ApiLibsInfo
from djangoProject.settings import SOCIAL_AUTH_GITHUB_KEY, SOCIAL_AUTH_GITHUB_SECRET

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
URL = 'http://127.0.0.1:8000/complete/github/'


# Create your views here.

def index_config(req: HttpRequest):
    fp = BASE_DIR[:BASE_DIR.find('\\')]
    file = open(file=fp + 'static/common/indexConfig.json', mode='r', encoding='utf-8')
    resp = eval(file.read())
    file.close()
    return HttpResponse(json.dumps(resp), content_type="application/json")
    pass


def pub_info(req: HttpRequest):
    """
    :param req:
    :return: userinfo json
    """
    resp = {
        "code": 200,
        "data": {},
    }
    uid = req.COOKIES.get('u', None)
    token = req.COOKIES.get('ctoken', None)
    if uid is None or uid == 'None':
        return HttpResponse(json.dumps(resp), content_type="application/json")
    uid = int(uid)
    u_token = user.objects.filter(user_id=uid)
    if len(u_token) < 1:
        return HttpResponse(json.dumps(resp), content_type="application/json")
    u = userProfile.objects.filter(user_id=u_token.first().user_id).first()
    # u = userProfile()
    res = dict()
    if u:
        res["avatar"] = u.avatar
        res["email"] = u.email
        res["created_at"] = u.created_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
        res["id"] = u.user_id
        res["last_login"] = u.last_login_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
        res["nickname"] = u.nickname
        res["qq"] = u.qq
        res["updated_at"] = u.updated_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
        res["weixin_code"] = str(u.weixin_code)
        res["status"] = 1
        res["role"] = 0
        res["alipay_code"] = u.pay_code
    resp["data"]["csrf"] = "W3kShn9G-eUNG01Ep8vomSVX2P0swV-zfqus"
    resp["data"]["env"] = "prod"
    resp["data"]["iconCount"] = 12694244
    resp["data"]["user"] = res

    return HttpResponse(json.dumps(resp), content_type="application/json")


def index(req: HttpRequest):
    resp = render(
        req,
        template_name='index.html',
        content_type="text/html"
    )
    return resp


def api(req: HttpRequest, **kwargs):
    path = my_tools.get_arg(kwargs['path'])
    print(path)
    resp = {"code": 200, }
    if path[0] == 'pubinfo.json':
        return pub_info(req)
    elif path[-1] == 'indexConfig.json':
        return index_config(req)
    elif path[-1] == 'search.json':
        m = {
            "icon": "icons",
            "illustration": "icons",
            "user": "users",
        }
        icons = ApiSearch(key=req.POST.get("q"), mode=path[0]).get_res()
        icons_count = len(icons)
        resp["data"] = {
            "count": icons_count,
            m[path[0]]: icons,
        }
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path[0] == 'user':

        client = ApiUser(request=req, path=path[-1])
        m = client.run()
        if m is None:
            resp["code"] = 300
        resp["data"] = m
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path[0] == 'logout':
        resp = HttpResponseRedirect('/')
        resp.delete_cookie("u")
        return resp
    elif path[0] == 'getUploadings.json' or path[0] == "getUploadingSvgs.json":
        uid = int(req.COOKIES.get('u', "0"))
        icons = data.objects.filter(created_user=uid).filter(category_id=0)
        m = list()
        for icon in icons:
            res = dict()
            aitag: dict = eval(icon.aiTagInfo)
            res["id"] = aitag["id"] = aitag["icon_id"] = icon.data_id
            res["aiTagInfo"] = aitag
            res["category_id"] = 1
            res["created_at"] = icon.created_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            res["updated_at"] = icon.updated_at.strftime("%Y-%m-%dT%H:%M:%S.%f%z")
            res['fills'] = True
            res["font_class"] = res["name"] = icon.name
            res["height"] = icon.height
            res["width"] = icon.width
            res["is_private"] = icon.is_private
            res["origin_file"] = icon.origin_file
            res["path_attributes"] = icon.path_attributes
            res["prototype_svg"] = icon.prototype_svg
            res["show_svg"] = icon.show_svg
            res["svg"] = icon.svg
            res["user_id"] = icon.created_user
            res["slug"] = icon.slug
            res["status"] = icon.category_id
            res["repositorie"] = icon.libs_belongs_to
            m.append(res)
        resp["data"] = {"icons": m}
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path[0] == 'svg' or path[0] == 'icon':
        info = ApiDataInfo(req, info_type=path[-1]).run()
        if info is None:
            resp["code"] = 300
        resp["data"] = info
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path[0] == 'collection':
        detail = ApiLibsInfo(req=req, path=path[-1]).run()
        if detail is None:
            resp["code"] = 300
        resp["data"] = detail
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path[0] == 'uploadIcons.json':
        f: InMemoryUploadedFile = req.FILES.get('icons[]', None)
        if f is None:
            resp["code"] = 300
        res = dict()
        svgs = my_tools.UploadFileGetSvg().run(str(f.read(), encoding='utf-8'))
        icon = data()
        res["slug"] = res["name"] = icon.name = icon.slug = f.name[:f.name.find(".svg")]
        res["show_svg"] = icon.show_svg = svgs.get("show_svg", "")
        icon.svg = svgs.get("svg", "")
        icon.path_attributes = svgs.get("path_attributes", "")
        icon.prototype_svg = svgs.get("prototype_svg", "")
        icon.origin_file = svgs.get("origin_file", "")
        icon.category_id = 0
        icon.created_user = int(req.COOKIES.get("u", "0"))
        icon.data_type = 'icon'
        icon.save()
        res["id"] = icon.data_id
        resp["data"] = res
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path[0] == 'updateIconAiTag.json':
        did = int(req.POST.get('id', "0"))
        if did == 1:
            resp["data"] = {"success": False}
            return HttpResponse(json.dumps(resp), content_type="application/json")
        # did: int = did[0]
        aitag = req.POST.get("aiTagInfo", None)
        d: data = data.objects.filter(data_id=did).first()
        d.aiTagInfo = aitag
        d.save()
        dt: dict = eval(req.POST.get('aiTagInfo'))
        res = {"aiTagInfo": dt, "success": True, "id": did}
        resp["data"] = res
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path[0] == 'deleteUploadingIcon.json':
        did = int(req.POST.get('id'))
        d = data.objects.filter(data_id=did)
        if len(d) != 1:
            resp["code"] = 300
            resp["data"] = False
        else:
            d = d.first()
            d.delete()
            resp["data"] = True
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path[0] == 'updateUploadIcons.json':
        icons: List[Dict] = eval(req.POST.get('updateIcons', "[]").replace('true', 'True'))
        if len(icons) < 1:
            resp["code"] = 300
        else:
            for icon in icons:
                did = icon["id"]
                d = data.objects.filter(data_id=did)
                if len(d) != 1:
                    continue
                d: data = d.first()
                d.category_id = 1
                d.save()
        return HttpResponse(json.dumps(resp), content_type="application/json")

    else:
        raise Http404


def complete(req):
    code = req.GET.get('code', '')
    state = req.GET.get('state')
    url = "https://github.com/login/oauth/access_token?" + "client_id=" + SOCIAL_AUTH_GITHUB_KEY + "&client_secret=" + SOCIAL_AUTH_GITHUB_SECRET + "&redirect_uri=" + URL + "&code=" + code + "&state=" + state;
    accessToken = my_tools.getAccessToken(url)
    if accessToken is None:
        return HttpResponseRedirect('/')
    url = "https://api.github.com/user"
    userInfoDict = my_tools.getUserInfo(url, accessToken)
    if userInfoDict is None or userInfoDict.get('message', "None") != "None":
        return HttpResponseRedirect('/')
    u_id = userInfoDict.get("id")
    if len(user.objects.filter(user_id=u_id)) == 0:
        my_tools.add_user(userInfoDict)
    resp = HttpResponseRedirect('/')
    resp.set_cookie("u", u_id)
    return resp


def cnm(req: HttpRequest):
    callback = ""
    with open('D:/Projects/djangoProject/mm/t/icons_default_tags.js', mode='r', encoding='utf-8') as f:
        callback = f.read().replace('\n', '').replace(' ', '')
    resp = HttpResponse(callback, content_type="application/javascript", charset='utf-8')
    return resp


def cnmm(req: HttpRequest):
    resp = HttpResponse()
    resp.set_cookie(key='xlly_s', value=1, secure=True)
    return resp
