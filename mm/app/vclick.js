define('app/vclick', ['magix', 'jquery'], function (t, e, r) {
	var a = t('magix'),
		c = t('jquery')
	c('body').on('click', 'a', function (t) {
		var e = c(t.currentTarget),
			r = e.attr('href'),
			e = e.attr('vclick-ignore')
		r && /^\/[^\/]/.test(r) && !e && (t.preventDefault(), a.Router.to(r))
	})
})
