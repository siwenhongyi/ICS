define('app/libs/tmpl', ['jquery'], function (n, e, t) {
	!(function (r) {
		function i(n) {
			return '\\' + e[n]
		}
		var u = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g,
			},
			p = /(.)^/,
			e = {
				"'": "'",
				'\\': '\\',
				'\r': 'r',
				'\n': 'n',
				'\u2028': 'u2028',
				'\u2029': 'u2029',
			},
			l = /\\|'|\r|\n|\u2028|\u2029/g
		r.keys = function (n) {
			var e,
				t = []
			for (e in n) n.hasOwnProperty(e) && t.push(e)
			return t
		}
		var t, n, a, o
		function c(n) {
			return t[n]
		}
		r.escape =
			((t = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#x27;',
				'`': '&#x60;',
			}),
			(n = '(?:' + r.keys(t).join('|') + ')'),
			(a = RegExp(n)),
			(o = RegExp(n, 'g')),
			function (n) {
				return a.test((n = null == n ? '' : '' + n))
					? n.replace(o, c)
					: n
			})
		r.tmpl = function (a, n, e) {
			n = r.extend((n = (n = !n && e ? e : n) || {}), u)
			var t,
				e = RegExp(
					[
						(n.escape || p).source,
						(n.interpolate || p).source,
						(n.evaluate || p).source,
					].join('|') + '|$',
					'g'
				),
				o = 0,
				c = "__p+='"
			a.replace(e, function (n, e, t, r, u) {
				return (
					(c += a.slice(o, u).replace(l, i)),
					(o = u + n.length),
					e
						? (c +=
								"'+\n((__t=(" +
								e +
								"))==null?'':$.escape(__t))+\n'")
						: t
						? (c += "'+\n((__t=(" + t + "))==null?'':__t)+\n'")
						: r && (c += "';\n" + r + "\n__p+='"),
					n
				)
			}),
				(c += "';\n"),
				(c =
					"var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
					(c = !n.variable ? 'with(obj||{}){\n' + c + '}\n' : c) +
					'return __p;\n')
			try {
				t = new Function(n.variable || 'obj', '$', c)
			} catch (n) {
				throw ((n.source = c), n)
			}
			;(e = function (n) {
				return t.call(this, n, r)
			}),
				(n = n.variable || 'obj')
			return (e.source = 'function(' + n + '){\n' + c + '}'), e
		}
	})(n('jquery'))
})
