define('app/views/user/detail', [
	'magix',
	'jquery',
	'app/models/common/index',
], function (a, s, i) {
	var e = a('magix'),
		c = e.Router,
		l = a('jquery'),
		r = a('app/models/common/index')
	i.exports = e.View.extend({
		tmpl:
			'<div class="block-sub-banner"><div class="block-sub-banner-bg"><div class="planet-wrap wrap"><div class="planet planet-9"></div><div class="planet planet-10"></div><div class="planet planet-11"></div><div class="planet planet-12"></div></div></div><div class="block-sub-banner-container wrap"><div class="avatar-special">{{#if(user.avatar)}} <img class="avatar-special-inner" src="{{user.avatar|adaptImg100}}"> {{/if}} <img class="avatar-special-cover" src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png"></div><div class="right-content"><span class="title ml10">{{user.nickname}} </span><span class="content ml10">{{user.bio}}</span></div></div><div class="block-bar"><div class="block-bar-container wrap"><div class="block-bar-left"><ul class="block-bar-tab ml180 clearfix"><li t-class:current="subType == \'icon\'"><a href="/user/detail?userViewType=collections&uid={{user.id}}" data-spm-click="gostr=/alimama.30;locaid=dcc7d6115">**USER_DETAIL_SETS**</a></li><li t-class:current="subType == \'illustration\'"><a href="/user/detail?userViewType=collections_illustration&uid={{user.id}}">**USER_DETAIL_ILLUSTRATION**</a></li><li t-class:current="subType == \'likes\'"><a href="/user/detail?userViewType=likes&uid={{user.id}}" data-spm-click="gostr=/alimama.30;locaid=d402eebd7">**USER_DETAIL_LIKES**</a></li></ul></div><div class="block-bar-right mr15"><div mx-view="app/views/common/radius_btns" mx-options="{type:\'user\',code:\'{{user.alipay_code}}\',avatar: \'{{user.avatar}}\'}"></div></div></div></div></div><div class="page-userdetail-container"><div class="wrap" mx-view="{{subView}}"><div class="spinner"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div></div></div>',
		ctor: function () {
			this.observe(['userViewType', 'uid'])
		},
		render: function () {
			var i = this,
				a = c.parse(),
				s = 'collections_illustration' === a.params.userViewType,
				e = (!s && a.params.userViewType) || 'collections',
				l = a.params.uid || 1,
				r =
					'likes' === a.params.userViewType
						? 'likes'
						: s
						? 'illustration'
						: 'icon'
			i.request().all(
				[{ name: 'user_info', params: { uid: l } }],
				function (a, s) {
					s = s.get('data')
					;(i.data = {
						userViewType: e,
						subView: 'app/views/user/user_' + e,
						user: s,
						subType: r,
					}),
						i.setView()
				}
			)
		},
		'toggleFavor<click>': function (a) {
			var s = a.params.id,
				i = l(a.target).parents('li')
			i.hasClass('favor')
				? this.wrapModel(r).cancelFavor(s, function (a) {
						i.removeClass('favor')
				  })
				: this.wrapModel(r).addFavor(s, function (a) {
						i.addClass('favor')
				  })
		},
	})
})
