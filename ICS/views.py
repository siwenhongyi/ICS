import json
import os
from django.http import HttpRequest, HttpResponse, Http404
from django.shortcuts import render
from ICS.models import *
from ICS.search import search
import ICS.tools as my_tools

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


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
        "code": 300,
        "data": {},
    }
    uid = req.COOKIES.get('u', None)
    token = req.COOKIES.get('token', None)
    if uid is None or token is None:
        return HttpResponse(json.dumps(resp), content_type="application/json")
    uid = int(uid)
    u = user()
    u_token = u.objects.filter(user_id=uid)
    if len(u_token) < 1 or u_token.first().token != token:
        return HttpResponse(json.dumps(resp), content_type="application/json")
    u = userProfile().objects.filter(user_id=u_token.first().user_id).first()
    # u = userProfile()
    res = dict()

    res["avatar"] = u.avatar
    res["email"] = u.email
    res["created_at"] = u.created_at
    res["id"] = u.user_id
    res["last_login"] = u.last_login_at
    res["nickname"] = u.nickname
    res["qq"] = u.qq
    res["updated_at"] = u.updated_at
    res["weixin_code"] = u.weixin_code
    resp["data"] = res

    return HttpResponse(json.dumps(resp, cls=my_tools.DateEncoder), content_type="application/json")


def index(req: HttpRequest):
    return render(
        req,
        template_name='index.html',
        content_type="text/html",
    )
    pass


def search_index(req: HttpRequest):
    return render(
        req,
        template_name='index.html',
        content_type="text/html",
    )


def api(req: HttpRequest, **kwargs):
    path = kwargs['path']
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
        icons = search(key=req.POST.get("q"), mode=path[0]).get_res()
        icons_count = len(icons)
        resp["data"] = {
            "count": icons_count,
            m[path[0]]: icons,
        }
        return HttpResponse(json.dumps(resp), content_type="application/json")
    else:
        raise Http404
