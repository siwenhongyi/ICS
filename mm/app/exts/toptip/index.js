define('app/exts/toptip/index', [
	'magix',
	'jquery',
	'app/exts/helper',
], function (e, t, i) {
	var n = e('magix'),
		o = e('jquery'),
		a = e('app/exts/helper'),
		s = 'iconfont_has_read_tip',
		c = 600,
		p = 5e3,
		r = !1
	i.exports = n.View.extend({
		ctor: function () {
			var e = this,
				t = o('#' + e.id)
			;(e.$el = t),
				a.readCookie(s) ||
					e.asyncLoad(function () {
						t.slideDown(c, null, 'easeOutStrong'), r && e.addHide()
					})
		},
		hide: function () {
			this.$el.slideUp(c, null, 'easeInStrong'), a.createCookie(s, '1', 7)
		},
		addHide: function () {
			var e = this
			S.later(function () {
				e.hide()
			}, p)
		},
		'close<click>': function (e) {
			e.stopPropagation(), this.hide()
		},
	})
})
