define('app/views/manage/index', ['magix'], function(a, e, i) {
    var l = a('magix'),
        t = l.Router
    i.exports = l.View.extend({
        tmpl: '<div class="block-sub-banner"><div class="block-sub-banner-bg"><div class="planet-wrap wrap"><div class="planet planet-9"></div><div class="planet planet-10"></div><div class="planet planet-11"></div><div class="planet planet-12"></div></div></div><div class="block-sub-banner-container wrap"><div class="avatar-special">{{#if(user.avatar)}} <img class="avatar-special-inner" src="{{user.avatar|adaptImg100}}"> {{/if}} <img class="avatar-special-cover" src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png"></div><div class="right-content"><span class="title ml10">{{user.nickname}} </span><span class="content ml10">{{user.bio}}</span></div></div><div class="block-bar"><div class="block-bar-container wrap"><div class="block-bar-left"><ul class="block-bar-tab ml180 clearfix"><li t-class:current="manageViewType == \'myicons\'"><a href="/manage/index?manage_type=myicons" data-spm-click="gostr=/alimama.30;locaid=d15d5f6f4">**MANAGE_MY_ICONS**</a></li><li t-class:current="manageViewType == \'mylikes\'"><a href="/manage/index?manage_type=mylikes" data-spm-click="gostr=/alimama.30;locaid=df0a31819">**MANAGE_MY_LIKES**</a></li></ul></div><div class="block-bar-right" t-unless="isInProjectRecycle || isInIconRecycle"><div mx-view="app/views/common/radius_btns" mx-options="{type:\'{{btnType}}\'}"></div></div></div></div></div><div class="page-manage-container"><div class="wrap" mx-view="{{subView}}"><div class="spinner"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div></div></div>',
        //'<div class="block-sub-banner"><div class="block-sub-banner-bg"><div class="planet-wrap wrap"><div class="planet planet-9"></div><div class="planet planet-10"></div><div class="planet planet-11"></div><div class="planet planet-12"></div></div></div><div class="block-sub-banner-container wrap"><div class="avatar-special">{{#if(user.avatar)}} <img class="avatar-special-inner" src="{{user.avatar|adaptImg100}}"> {{/if}} <img class="avatar-special-cover" src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png"></div><div class="right-content"><span class="title ml10">{{user.nickname}} </span><span class="content ml10">{{user.bio}}</span></div></div><div class="block-bar"><div class="block-bar-container wrap"><div class="block-bar-left"><ul class="block-bar-tab ml180 clearfix"><li t-class:current="manageViewType == \'myicons\'"><a href="/manage/index?manage_type=myicons" data-spm-click="gostr=/alimama.30;locaid=d15d5f6f4">**MANAGE_MY_ICONS**</a></li><li t-class:current="manageViewType == \'mylikes\'"><a href="/manage/index?manage_type=mylikes" data-spm-click="gostr=/alimama.30;locaid=df0a31819">**MANAGE_MY_LIKES**</a></li><li t-class:current="manageViewType == \'myprojects\'"><a href="/manage/index?manage_type=myprojects" data-spm-click="gostr=/alimama.30;locaid=db775f1f3">**MANAGE_MY_PROJECTS**</a></li></ul></div><div class="block-bar-right" t-unless="isInProjectRecycle || isInIconRecycle"><div mx-view="app/views/common/radius_btns" mx-options="{type:\'{{btnType}}\'}"></div></div></div></div></div><div class="page-manage-container"><div class="wrap" mx-view="{{subView}}"><div class="spinner"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div></div></div>',
        ctor: function() {
            this.observe(['manage_type', 'icontype', 'project_type'])
        },
        render: function() {
            var a = l.config().user,
                e = t.parse(),
                i = e.params.manage_type || 'myicons',
                s = e.params.icontype || 'uploads',
                c = 'manage-' + i,
                n = 'icon_recycle' === e.params.project_type,
                e = 'project_recycle' === e.params.project_type;
            (this.data = {
                manageViewType: i,
                btnType: (c = 'myicons' === i && s ? c + '-' + s : c),
                subView: 'app/views/manage/' + i,
                user: a,
                isInProjectRecycle: e,
                isInIconRecycle: n,
            }),
            this.setView()
        },
    })
})