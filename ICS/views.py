import json
import os

from django.http import HttpRequest, HttpResponse, HttpResponseRedirect, Http404, FileResponse
from django.shortcuts import render

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
    path = kwargs['path']
    print(path)
    if path.find('pubinfo') != -1:
        return pub_info(req)
    elif path.find('indexConfig') != -1:
        return index_config(req)
    elif path.find('search') != -1:
        m = {
            "icon": "icons",
            "illustration": "icons",
            "user": "users",
        }
        resp = {
            "code": 200,
        }
        path = path.split('/')
        icons = ApiSearch(key=req.POST.get("q"), mode=path[0]).get_res()
        icons_count = len(icons)
        resp["data"] = {
            "count": icons_count,
            m[path[0]]: icons,
        }
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path.find('user') != -1:
        resp = {"code": 200}

        client = ApiUser(request=req, path=my_tools.get_arg(path)[-1])
        m = client.run()
        if m is None:
            resp["code"] = 300
        resp["data"] = m
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path.find('logout') != -1:
        resp = HttpResponseRedirect('/')
        resp.delete_cookie("u")
        return resp
    elif path.find('getUploadings.json') != -1 or path.find("getUploadingSvgs.json") != -1:
        resp = {
            "code": 200,
            "data": {"icons": []}
        }
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path.find('svg/svgInfo.json') != -1:
        resp = {"code": 200}
        info = ApiDataInfo(req, info_type='illustration').run()
        if info is None:
            resp["code"] = 300
        resp["data"] = info
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path.find('icon/iconInfo.json') != -1:
        resp = {"code": 200}
        info = ApiDataInfo(req, info_type='icon').run()
        if info is None:
            resp["code"] = 300
        resp["data"] = info
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path.find('collection/detail.json') != -1:
        resp = {"code": 200}
        path = my_tools.get_arg(path)
        detail = ApiLibsInfo(req=req, path=path[-1]).run()
        if detail is None:
            resp["code"] = 300
        resp["data"] = detail
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
        callback = f.read().replace('\n', '').replace(' ','')
    resp = HttpResponse(callback, content_type="application/javascript", charset='utf-8')
    return resp


def cnmm(req: HttpRequest):
    resp = HttpResponse()
    resp.set_cookie(key='xlly_s', value=1, secure=True)
    return resp
