define('app/filters', ['jquery'], function (t, i, r) {
	var n = t('jquery')
	r.exports = {
		adaptImg100: function (t) {
			return this.adaptImg(t, 1 < window.devicePixelRatio ? '200' : '100')
		},
		adaptImg200: function (t) {
			return this.adaptImg(t, 1 < window.devicePixelRatio ? '400' : '200')
		},
		tbackground: function (t) {
			for (var i = n(t).find('path'), r = 0; r < i.length; r++) {
				var a = n(i[r])
				if ('#FFFFFF' !== a.attr('fill') && '#ffffff' !== a.attr('fill'))
					return !1
			}
			return !0
		},
	}
})
