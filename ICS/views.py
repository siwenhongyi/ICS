import json
import os

from django.http import HttpRequest, HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render

import ICS.tools as my_tools
from ICS.models import *
from ICS.api_search import ApiSearch
from ICS.api_user import ApiUser
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

    pass


def search_index(req: HttpRequest):
    return render(
        req,
        template_name='index.html',
        content_type="text/html",
    )


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
    # 我上传的icon 我上传的插画
    elif path.find("user/myuploads.json") != -1 or path.find('user/myUploadSvgs.json') != -1:
        m = {"icons": []}
        resp = {
            "code": 200,
            "data": m,
        }
        return HttpResponse(json.dumps(resp), content_type="application/json")
    # 我的图标库
    elif path.find('user/mycollections.json') != -1:
        m = {"collections": []}
        resp = {
            "code": 200,
            "data": m,
        }
        return HttpResponse(json.dumps(resp), content_type="application/json")
    # 我收藏的图标
    elif path.find('user/myfavorites.json') != -1:
        m = {"favorites": []}
        resp = {
            "code": 200,
            "data": m,
        }
        return HttpResponse(json.dumps(resp), content_type="application/json")
    # 我收藏的图标库
    elif path.find('user/myCollectionFavorite.json') != -1:
        m = {"lists": []}
        resp = {
            "code": 200,
            "data": m,
        }
        return HttpResponse(json.dumps(resp), content_type="application/json")
    # 个人中心
    elif path.find('user/detail.json') != -1:
        m = dict()
        m["alipay_code"] = ""
        m["avatar"] = ""
        m["bio"] = ""
        m["id"]: 7187121
        m["isXiaoer"] = False
        m["nickname"] = "siwenhongyi"
        m["qq"] = ""
        m["show_email"] = "zmlhongyi@qq.com"
        m["weixin_code"] = "//iconfont.alicdn.com/tfscom/TB1NcQ6GXXXXXcoXFXXwu0bFXXX.png"
        resp = {
            "code": 200,
            "data": m,
        }
        return HttpResponse(json.dumps(resp), content_type="application/json")
    elif path.find('logout') != -1:
        resp = HttpResponseRedirect('/')
        resp.delete_cookie("u")
        return resp


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
