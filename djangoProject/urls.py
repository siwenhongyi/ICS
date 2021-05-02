"""djangoProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.views.static import serve
from django.conf import settings
from django.contrib import admin
from django.contrib.staticfiles import views
from django.urls import path
from ICS.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('home/index', index),
    path('search/index', index),
    url(r'^api/(?P<path>.*)$', api),
    url(r'^mm/(?P<path>.*)$', serve, {"document_root": settings.STATIC_ROOT}),

]
