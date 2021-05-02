define('app/views/default', ['magix', 'app/exts/helper'], function (i, a, e) {
	var v = i('magix'),
		t = v.Router,
		n = i('app/exts/helper')
	e.exports = v.View.extend({
		tmpl:
			'<div class="block-switch-loading" data-spm="1998910417"></div><div mx-view="app/views/common/car" id="magix_vf_car" data-spm="1998910418"></div><div class="top-tip" mx-view="app/exts/toptip/index" id="magix_vf_tip" data-spm="1998910420"></div><div class="wrapper" data-spm="1998910419"><div mx-view="app/views/common/header" id="magix_vf_header"></div><div mx-view="app/views/common/sidebar" id="magix_vf_sidebar"></div><div class="main"><div id="inmain" class="inmain inmain-padding"><div id="magix_vf_main" mx-view="{{mainView}}"><div class="spinner"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div></div></div></div><div class="footer" id="magix_vf_footer" mx-view="app/views/common/footer"></div></div>',
		ctor: function () {
			this.observe(null, !0)
		},
		render: function () {
			var i = this,
				a = t.parse(),
				e = v.config('user'),
				d = a.path.replace('/plus', '')
			;('' !== d && '/' !== d) || (d = '/home/index')
			var s = window.location,
				a = s.href.match(/collections\/show\/(\d+)/)
			a && a[1]
				? this.to('/collections/detail?cid=' + a[1])
				: ('/collections' === s.pathname && (d = '/collections/index'),
				  '/search' === s.pathname && (d = '/search/index'),
				  (i.data = {
						mainView: 'app/views' + d,
				  }),
				  i.setView().then(function () {
						i.animateLoading()
				  }),
				  e && e.id && 1 !== e.status && n.showLegal())
		},
	})
})
