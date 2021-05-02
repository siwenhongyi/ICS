define('app/exts/globaltip/index', ['jquery'], function (e, n, t) {
	var c,
		l = e('jquery'),
		d = [l.expando, 'tips'].join('_'),
		s = {
			autoHide: !0,
			content: '',
			delay: 2e3,
			closeable: !0,
			type: 'error',
			zIndex: null,
		}
	function u() {
		var e = l('#' + d)
		e.fadeOut(100, function () {
			e.remove()
		}),
			clearTimeout(c)
	}
	return {
		show: function (e) {
			var n = l.extend({}, s, e),
				t = n.callback,
				i = n.delay,
				a = n.autoHide,
				e = n.closeable,
				o = l('#' + d)
			;(i = l.isNumeric(i) ? +i : n.delay),
				o.length ||
					(l('<div id="' + d + '" class="block-global-tip"></div>').appendTo(
						document.body
					),
					(o = l('#' + d))),
				c && clearTimeout(c),
				a &&
					(c = setTimeout(function () {
						u(), t && t()
					}, i)),
				e &&
					o.on('click', function (e) {
						u()
					}),
				(e = '<div class="tip-box <%= type %>"><span class="iconfont"></span><span class="text">{{CONTENT}}</span></div>'.replace(
					'{{CONTENT}}',
					n.content
				)),
				(e = l.tmpl(e)(n)),
				o.hide(),
				o.html(e),
				l.isNumeric(n.zIndex) && o.css('zIndex', +n.zIndex),
				o.fadeIn(150)
		},
		hide: u,
	}
})
