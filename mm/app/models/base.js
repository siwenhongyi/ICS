define('app/models/base', function (t, i, e) {
	var o
	function n() {}
	var r = ((n.extend = o = function () {
		this.initPrototype = !0
		var t = new this()
		this.initPrototype = !1
		for (
			var i = Array.prototype.slice.call(arguments) || [], e = i.shift();
			e;

		)
			!(function (t, i) {
				for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e])
			})(t, e.prototype || e),
				(e = i.shift())
		function n() {
			!n.initPrototype && this.init && this.init.apply(this, arguments)
		}
		return (((n.prototype = t).constructor = n).extend = o), n
	}),
	n).extend({
		init: function (t) {
			;(this._view = t), (this._request = t.request())
		},
		fetchAll: function (t, i) {
			this._request.all(t, i)
		},
		save: function (t, i) {
			this._request.save(t, i)
		},
		wrapIcon: function (t) {
			if (t) {
				var i = t.width,
					e = t.height,
					n = t.width / 1024,
					o = t.height / 1024,
					r = t.prototype_svg.split('|'),
					s = t.fills ? t.fills.split('|') : [],
					l = ''
				l +=
					'<svg class="icon" style="width: ' +
					n +
					'em; height: ' +
					o +
					'em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 ' +
					i +
					' ' +
					e +
					'" version="1.1" xmlns="http://www.w3.org/2000/svg">'
				for (var h = 0; h < r.length; h++)
					l += '<path d="' + r[h] + '" fill="' + (s[h] || '#737383') + '"/>'
				return (l += '</svg>')
			}
		},
	})
	e.exports = r
})
