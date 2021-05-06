define('app/views/common/header', [
	'magix',
	'jquery',
	'app/exts/helper',
	'app/models/common/index',
	'app/i18n/index',
], function (e, a, i) {
	var s = e('magix'),
		c = e('jquery'),
		o = s.Router,
		r = e('app/exts/helper'),
		t = e('app/models/common/index'),
		u = e('app/i18n/index'),
		d = [
			{
				path: '/home/index',
				text: u.NAV_INDEX,
			},
			/*	{
				path: '/illustrations/index',
				text: u.NAV_ILLUSTRATION,
			},
			{
				path: '/collections/index',
				text: u.NAV_COLLECTION,
				subMenu: [
					{
						url: '/collections/index?type=1',
						title: u.NAV_OFFCIAL_COLLECTION,
					},
					{
						url: '/collections/index?type=2',
						title: u.NAV_COLOR_COLLECTION,
					},
					{
						url: '/collections/index?type=4',
						title: u.NAV_SINGLE_COLLECTION,
					},
					{
						url: '/collections/index?type=3',
						title: u.NAV_ALL_COLLECTION,
					},
				],
			},*/
			{
				path: '/manage/index',
				text: u.NAV_MANAGE,
				login: !0,
				subMenu: [
					{
						url: '/manage/index?manage_type=myicons',
						title: u.NAV_MY_ICONS,
					},
					{
						url: '/manage/index?manage_type=mylikes',
						title: u.NAV_MY_LIKES,
					},
					/*{
						url: '/manage/index?manage_type=myprojects',
						title: u.NAV_MY_PROJECTS,
					},*/
					{
						url: '/manage/index?manage_type=myicons&icontype=upload_svgs',
						title: u.NAV_MY_ILLUSTRATION,
					},
				],
			},
			/*{
				path: '/help/index',
				text: u.NAV_HELP,
				subMenu: [
					{
						url: '/help/detail?helptype=about',
						title: u.HELP_FUNCTION_INR,
					},
					{
						url: '/help/detail?helptype=draw',
						title: u.HELP_ICON_DRAW,
					},
					{
						url: '/help/detail?helptype=code',
						title: u.HELP_CODE_APPLY,
					},
					{
						url: '/help/detail?helptype=article',
						title: u.HELP_ABOUT_ARTS,
					},
					{
						url: '/help/index',
						title: u.HELP_ABOUT,
					},
				],
			},*/
			{
				path: '/activity/lists',
				text: u.NAV_ACTIVITY,
			},
		]
	i.exports = s.View.extend({
		tmpl:
			'<header><div class="site-nav clearfix wrap"><div class="logo"><a href="/" data-spm-click="gostr=/alimama.30;locaid=d4d0a486a"><img src="//img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg" alt="iconfont Logo"></a></div><nav><ul class="clearfix">{{#for(menu in menuList)}}<li class="nav-item" t-class:current="menu.current"><a class="nav-item-link" href="{{menu.path}}" data-login="{{menu.login}}" vclick-ignore="true" target="{{menu.blank ? \'_blank\' : \'\'}}">{{menu.text}}</a> {{#if(menu.subMenu)}}<ul class="head-dropdown">{{#for(sub in menu.subMenu)}}<li><a href="{{sub.url}}" data-login="{{menu.login}}" vclick-ignore="true">{{sub.title}}</a></li>{{/for}}</ul>{{/if}}</li>{{/for}}</ul></nav><div class="quick-menu"><ul class="clearfix"><li class="head-search"><div class="form_search search-box"><div class="dropdown-search" mx-change="setFilter()" mx-view="app/exts/dropdown/index" mx-options="{searchbox: 0, selected:\'{{searchType}}\', list:\'{{dropdown}}\'}"></div><input type="text" class="s_input input_enter_placeholder" placeholder="**NAV_SEARCH_PLACE_HOLDER**" value="{{query}}" id="J_suggest_input" autocomplete="off"> <span class="input_enter_icon iconfont" mx-click="search()" data-spm-click="gostr=/alimama.30;locaid=d81551fea">&#xe645;</span><div id="J_suggest_box" mx-options="{target:\'J_suggest_input\'}" class="suggest-box" mx-view="app/exts/suggest/index" mx-changevalue="suggest()"></div></div></li><li>{{#unless(user.id)}} <a href="javascript:;" mx-click="login()" data-spm-click="gostr=/alimama.30;locaid=dc68fa794" class="signin"><i class="iconfont">&#xe637;</i> </a>{{/unless}} {{#if(user.id)}}<div class="cp"><span class="avatar avatar-min"><img src="{{user.avatar|adaptImg100}}"></span></div><ul class="head-dropdown"><li><a href="/user/center" data-spm-click="gostr=/alimama.30;locaid=de91a75a0" vclick-ignore="true">**NAV_SETTING**</a></li><li><a href="/api/logout" data-spm-click="gostr=/alimama.30;locaid=ded9b439d" vclick-ignore="true">**NAV_LOGOUT**</a></li></ul>{{/if}}</li><li><a vclick-ignore="true" href="/icons/upload" data-spm-click="gostr=/alimama.30;locaid=d059fa781" class="upload"><i class="iconfont">&#xe640;</i></a></li><li>{{^if(language === \'en-US\' || language === \'en-us\')}} <span class="lang-btn iconfont" mx-click="changeLanguage(\'en-us\')" data-spm-click="gostr=/alimama.30;locaid=db1b1e3c3">&#xe641;</span> {{/if}} {{#if(language === \'en-US\' || language === \'en-us\')}} <span class="lang-btn iconfont" mx-click="changeLanguage(\'zh-cn\')" data-spm-click="gostr=/alimama.30;locaid=d2260e3a2">&#xe63f;</span> {{/if}}</li><li mx-click="toggleCar()" data-spm-click="gostr=/alimama.30;locaid=d8f68128f"><span class="icon-car"><i class="iconfont">&#xe63c;</i> <span id="J_icon_car_count" class="icon-car-count">{{*iconsCount}}</span></span></li></ul></div></div></header>',
		//'<header><div class="site-nav clearfix wrap"><div class="logo"><a href="/" data-spm-click="gostr=/alimama.30;locaid=d4d0a486a"><img src="//img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg" alt="iconfont Logo"></a></div><nav><ul class="clearfix">{{#for(menu in menuList)}}<li class="nav-item" t-class:current="menu.current"><a class="nav-item-link" href="{{menu.path}}" data-login="{{menu.login}}" vclick-ignore="true" target="{{menu.blank ? \'_blank\' : \'\'}}">{{menu.text}}</a> {{#if(menu.subMenu)}}<ul class="head-dropdown">{{#for(sub in menu.subMenu)}}<li><a href="{{sub.url}}" data-login="{{menu.login}}" vclick-ignore="true">{{sub.title}}</a></li>{{/for}}</ul>{{/if}}</li>{{/for}}<li class="nav-item nav-item-more"><span class="nav-item-link" target="_blank"><em></em> <em></em> <em></em></span><ul class="head-dropdown"><li><a href="/webfont" data-spm-click="gostr=/alimama.30;locaid=d81ec59f2" vclick-ignore="true">**NAV_WEBFONT**</a></li><li><a href="//github.com/thx/iconfont-plus/issues" target="_blank" data-spm-click="gostr=/alimama.30;locaid=d61a57bce" vclick-ignore="true">**NAV_ISSUES**</a></li><li><a href="/webfont?puhui=1#!/webfont/index" target="_blank" data-spm-click="" vclick-ignore="true">**NAV_PUHUI**</a></li></ul></li></ul></nav><div class="quick-menu"><ul class="clearfix"><li class="head-search"><div class="form_search search-box"><div class="dropdown-search" mx-change="setFilter()" mx-view="app/exts/dropdown/index" mx-options="{searchbox: 0, selected:\'{{searchType}}\', list:\'{{dropdown}}\'}"></div><input type="text" class="s_input input_enter_placeholder" placeholder="**NAV_SEARCH_PLACE_HOLDER**" value="{{query}}" id="J_suggest_input" autocomplete="off"> <span class="input_enter_icon iconfont" mx-click="search()" data-spm-click="gostr=/alimama.30;locaid=d81551fea">&#xe645;</span><div id="J_suggest_box" mx-options="{target:\'J_suggest_input\'}" class="suggest-box" mx-view="app/exts/suggest/index" mx-changevalue="suggest()"></div></div></li><li>{{#unless(user.id)}} <a href="javascript:;" mx-click="login()" data-spm-click="gostr=/alimama.30;locaid=dc68fa794" class="signin"><i class="iconfont">&#xe637;</i> </a>{{/unless}} {{#if(user.id)}}<div class="cp"><span class="avatar avatar-min"><img src="{{user.avatar|adaptImg100}}"></span></div><ul class="head-dropdown"><li><a href="/user/center" data-spm-click="gostr=/alimama.30;locaid=de91a75a0" vclick-ignore="true">**NAV_SETTING**</a></li><li><a href="/api/logout" data-spm-click="gostr=/alimama.30;locaid=ded9b439d" vclick-ignore="true">**NAV_LOGOUT**</a></li></ul>{{/if}}</li><li><a vclick-ignore="true" href="/icons/upload" data-spm-click="gostr=/alimama.30;locaid=d059fa781" class="upload"><i class="iconfont">&#xe640;</i></a></li><li>{{^if(language === \'en-US\' || language === \'en-us\')}} <span class="lang-btn iconfont" mx-click="changeLanguage(\'en-us\')" data-spm-click="gostr=/alimama.30;locaid=db1b1e3c3">&#xe641;</span> {{/if}} {{#if(language === \'en-US\' || language === \'en-us\')}} <span class="lang-btn iconfont" mx-click="changeLanguage(\'zh-cn\')" data-spm-click="gostr=/alimama.30;locaid=d2260e3a2">&#xe63f;</span> {{/if}}</li><li mx-click="toggleCar()" data-spm-click="gostr=/alimama.30;locaid=d8f68128f"><span class="icon-car"><i class="iconfont">&#xe63c;</i> <span id="J_icon_car_count" class="icon-car-count">{{*iconsCount}}</span></span></li></ul></div></div></header>',
		ctor: function () {
			this.observe(['q', 'login', 'searchType'], !0)
		},
		render: function () {
			var e = this,
				a = s.config().user,
				i = o.parse().path,
				t = r.getItem(r.CAR_ICON_KEY) || [],
				n = !1,
				l = e.param('searchType') || 'icon'
			'/home/index' === (i = '' === i || '/' === i ? '/home/index' : i) &&
				(n = !0),
				'/help/index' === i
					? c('body').addClass('help')
					: c('body').removeClass('help'),
				n ? c('body').addClass('home') : c('body').removeClass('home'),
				(e.data = {
					user: a,
					isIndex: n,
					menuList: e.wrapMenu(d, i),
					iconsCount: t.length,
					query: e.param('q'),
					language: r.readCookie(r.I18N_KEY) || 'zh-cn',
					searchType: l,
					dropdown: JSON.stringify([
						{
							name: u.SEARCH_SELECT_ICON,
							id: 'icon',
							type: 'icon',
						},
						{
							name: u.SEARCH_SELECT_ILLUSTRATION,
							id: 'illustration',
							type: 'illustration',
						},
						{
							name: u.SEARCH_SELECT_USER,
							id: 'user',
							type: 'user',
						},
					]),
				}),
				e.setView().then(function () {
					'1' !== e.param('login') || a.id || r.showLogin()
				})
		},
		wrapMenu: function (e, i) {
			return (
				c.each(e, function (e, a) {
					;-1 !== a.path.indexOf(i) ? (a.current = !0) : (a.current = !1)
				}),
				e
			)
		},
		'changeLanguage<click>': function (e) {
			e = e.params
			r.createCookie(r.I18N_KEY, e, 100), window.location.reload()
		},
		'login<click>': function (e) {
			r.showLogin()
		},
		'showVideo<click>': function (e) {
			e.preventDefault(), this.showVideo()
		},
		'leave<mouseout>': function (e) {
			c(e.current).removeClass('hover')
		},
		'toggleCar<click>': function (e) {
			s.Vframe.get('magix_vf_car').invoke('toggleShow')
		},
		'suggest<changeValue>': function (e) {
			var e = e.value,
				a = this.data.searchType || ''
			this.wrapModel(t).getSuggest(
				{
					q: e,
					type: a,
				},
				function (e) {
					;(e.searchType = a), s.Vframe.get('J_suggest_box').invoke('update', e)
				}
			)
		},
		'search<click>': function (e) {
			var a = c(e.originalEvent.target).siblings('input').val(),
				i = this.data.searchType
			s.config({
				searchType: i,
			})
			e = s.Router.parse().path
			'icon' === i && '/search/index' === e
				? s.Router.to({
						q: a,
						page: 1,
						searchType: i,
						fromCollection: r.getItem('fromCollection') || '1',
						fills: '',
						tag: '',
				  })
				: a && this.to('/search/index?searchType=' + i + '&q=' + a)
		},
		'setFilter<change>': function (e) {
			var a = c(e.target).siblings('input').val(),
				e = e.value
			;(this.data.searchType = e),
				s.config({
					searchType: e,
				}),
				'icon' === e
					? s.Router.to({
							searchType: e,
					  })
					: a && this.to('/search/index?searchType=' + e + '&q=' + a)
		},
	})
})
