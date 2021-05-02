define('app/login', ['magix', 'jquery', 'app/exts/helper'], function (e, i, n) {
	var o = e('magix'),
		a = e('jquery'),
		p = e('app/exts/helper')
	a('body').on('click', '[data-login]', function (e) {
		o.config().isLogin ||
			(p.showLogin(),
			e && e.preventDefault(),
			e && e.stopImmediatePropagation())
	})
})
