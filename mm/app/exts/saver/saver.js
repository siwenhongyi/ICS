define('app/exts/saver/saver', function (e, t, o) {
	var n, a
	;(n = this),
		(a = function () {
			'use strict'
			var s =
				'object' == typeof window && window.window === window
					? window
					: 'object' == typeof self && self.self === self
					? self
					: 'object' == typeof global && global.global === global
					? global
					: void 0
			function l(e, t, o) {
				var n = new XMLHttpRequest()
				n.open('GET', e),
					(n.responseType = 'blob'),
					(n.onload = function () {
						a(n.response, t, o)
					}),
					(n.onerror = function () {
						console.error('could not download file')
					}),
					n.send()
			}
			function i(e) {
				var t = new XMLHttpRequest()
				t.open('HEAD', e, !1)
				try {
					t.send()
				} catch (e) {}
				return 200 <= t.status && t.status <= 299
			}
			function r(t) {
				try {
					t.dispatchEvent(new MouseEvent('click'))
				} catch (e) {
					var o = document.createEvent('MouseEvents')
					o.initMouseEvent(
						'click',
						!0,
						!0,
						window,
						0,
						0,
						0,
						80,
						20,
						!1,
						!1,
						!1,
						!1,
						0,
						null
					),
						t.dispatchEvent(o)
				}
			}
			var d =
					/Macintosh/.test(navigator.userAgent) &&
					/AppleWebKit/.test(navigator.userAgent) &&
					!/Safari/.test(navigator.userAgent),
				a =
					s.saveAs ||
					('object' != typeof window || window !== s
						? function () {}
						: 'download' in HTMLAnchorElement.prototype && !d
						? function (e, t, o) {
								var n = s.URL || s.webkitURL,
									a = document.createElement('a')
								;(t = t || e.name || 'download'),
									(a.download = t),
									(a.rel = 'noopener'),
									'string' == typeof e
										? ((a.href = e),
										  a.origin !== location.origin
												? i(a.href)
													? l(e, t, o)
													: r(a, (a.target = '_blank'))
												: r(a))
										: ((a.href = n.createObjectURL(e)),
										  setTimeout(function () {
												n.revokeObjectURL(a.href)
										  }, 4e4),
										  setTimeout(function () {
												r(a)
										  }, 0))
						  }
						: 'msSaveOrOpenBlob' in navigator
						? function (e, t, o) {
								var n
								;(t = t || e.name || 'download'),
									'string' == typeof e
										? i(e)
											? l(e, t, o)
											: (((n = document.createElement('a')).href = e),
											  (n.target = '_blank'),
											  setTimeout(function () {
													r(n)
											  }))
										: navigator.msSaveOrOpenBlob(
												((e = e),
												void 0 === (o = o)
													? (o = { autoBom: !1 })
													: 'object' != typeof o &&
													  (console.warn(
															'Deprecated: Expected third argument to be a object'
													  ),
													  (o = { autoBom: !o })),
												o.autoBom &&
												/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
													e.type
												)
													? new Blob([String.fromCharCode(65279), e], {
															type: e.type,
													  })
													: e),
												t
										  )
						  }
						: function (e, t, o, n) {
								if (
									((n = n || open('', '_blank')) &&
										(n.document.title = n.document.body.innerText =
											'downloading...'),
									'string' == typeof e)
								)
									return l(e, t, o)
								var a,
									i,
									r,
									t = 'application/octet-stream' === e.type,
									o = /constructor/i.test(s.HTMLElement) || s.safari,
									c = /CriOS\/[\d]+/.test(navigator.userAgent)
								;(c || (t && o) || d) && 'undefined' != typeof FileReader
									? (((a = new FileReader()).onloadend = function () {
											var e = a.result,
												e = c
													? e
													: e.replace(/^data:[^;]*;/, 'data:attachment/file;')
											n ? (n.location.href = e) : (location = e), (n = null)
									  }),
									  a.readAsDataURL(e))
									: ((i = s.URL || s.webkitURL),
									  (r = i.createObjectURL(e)),
									  n ? (n.location = r) : (location.href = r),
									  (n = null),
									  setTimeout(function () {
											i.revokeObjectURL(r)
									  }, 4e4))
						  })
			;(s.saveAs = a.saveAs = a), void 0 !== o && (o.exports = a)
		}),
		'function' == typeof define && define.amd
			? define([], a)
			: void 0 !== t
			? a()
			: (a(), (n.FileSaver = {}))
})
