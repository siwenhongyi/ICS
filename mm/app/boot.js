var DEBUG = !!~location.search.indexOf('debug'),
	OFFLINE = !!window.__OFFLINE__,
	script = (function () {
		var e = document.getElementsByTagName('script')
		return e[e.length - 1]
	})(),
	base = (function () {
		var e = script.getAttribute('src')
		return /(.*\/)(.+\/.+)/.exec(e)[1]
	})()
seajs.config({
	debug: DEBUG,
	alias: {
		jquery: 'app/libs/jquery-1.12.1',
		$: 'app/libs/jquery-1.12.1',
		magix: 'app/libs/magix.js',
		pat: 'app/libs/pat.js',
		mojs: 'app/libs/mo.js',
		tmpl: 'app/libs/tmpl.js',
		swiper: 'app/libs/swiper.js',
	},
	base: base,
	charset: 'utf-8',
	map: [
		function (e) {
			if (DEBUG && /\/app\//.test(e) && !OFFLINE)
				return e.replace('app', 'app_debug')
		},
	],
}),
	seajs.use(
		['magix', 'jquery', 'pat', 'app/exts/helper', 'tmpl'],
		function (t, s, e, i) {
			e.config({ debug: !!DEBUG }),
				s
					.ajax({ url: '/api/pubinfo.json', dataType: 'json' })
					.then(function (e) {
						t.Router.edge = !0
						var a = {
							'/': 'app/views/default',
							'/home/index': 'app/views/default',
							'/collections/index': 'app/views/default',
							'/collections': 'app/views/default',
							'/collections/detail': 'app/views/default',
							'/illustrations/index': 'app/views/default',
							'/illustrations': 'app/views/default',
							'/illustrations/detail': 'app/views/default',
							'/manage/index': 'app/views/default',
							'/help/index': 'app/views/default',
							'/help/detail': 'app/views/default',
							'/help/article_detail': 'app/views/default',
							'/search/index': 'app/views/default',
							'/search': 'app/views/default',
							'/user/center': 'app/views/default',
							'/user/detail': 'app/views/default',
							'/icons/upload': 'app/views/default',
							'/plus': 'app/views/default',
							'/plus/home/index': 'app/views/default',
							'/plus/collections/index': 'app/views/default',
							'/plus/collections/detail': 'app/views/default',
							'/plus/manage/index': 'app/views/default',
							'/plus/help/index': 'app/views/default',
							'/plus/help/detail': 'app/views/default',
							'/plus/help/article_detail': 'app/views/default',
							'/plus/search/index': 'app/views/default',
							'/plus/user/center': 'app/views/default',
							'/plus/user/detail': 'app/views/default',
							'/plus/icons/upload': 'app/views/default',
							'/activity/lists': 'app/views/default',
						}
						;/collections\/show/.test(location.pathname) &&
							(a[location.pathname] = 'app/views/default'),
							t.boot({
								defaultPath: '/home/index',
								defaultView: 'app/views/default',
								unmatchView: 'app/views/common/404',
								edge: !0,
								routes: a,
								rootId: 'root',
								exts: ['app/exts', 'app/login', 'app/vclick'],
								error: function (e) {
									throw e
								},
							})
						e = e.data || {}
						t.config({ isLogin: !!e.user }), (e.user = e.user || {})
						var p = (e.ctoken = i.readCookie('ctoken'))
						s.ajaxSetup({
							beforeSend: function (e, a) {
								;/^(GET|HEAD|OPTIONS|TRACE)$/.test(a.type) ||
									this.crossDomain ||
									e.setRequestHeader('x-csrf-token', p)
							},
						}),
							t.config(e)
					})
		}
	)
