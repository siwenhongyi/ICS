define('app/exts/saver/index', function (e, t, n) {
	!(function () {
		var r = (void 0 !== t && t) || ('undefined' != typeof define && {}) || this
		function c() {
			0
		}
		function e(e, t) {
			c()
			function a() {
				0 === l && t()
			}
			var n = e.querySelectorAll('image'),
				l = n.length
			a()
			for (var r = 0; r < n.length; r++)
				!(function (e) {
					var t,
						n,
						r,
						o,
						i = e.getAttributeNS('http://www.w3.org/1999/xlink', 'href')
					i &&
					(t = i.value) &&
					0 == t.lastIndexOf('http', 0) &&
					-1 == t.lastIndexOf(window.location.host)
						? console.warn(
								'Cannot render embedded images linking to external hosts: ' +
									i.value
						  )
						: ((n = document.createElement('canvas')),
						  (r = n.getContext('2d')),
						  (o = new Image()),
						  (i = i || e.getAttribute('href'))
								? ((o.src = i),
								  (o.onload = function () {
										;(n.width = o.width),
											(n.height = o.height),
											r.drawImage(o, 0, 0),
											e.setAttributeNS(
												'http://www.w3.org/1999/xlink',
												'href',
												n.toDataURL('image/png')
											),
											l--,
											a()
								  }),
								  (o.onerror = function () {
										console.log('Could not load ' + i), l--, a()
								  }))
								: (l--, a()))
				})(n[r])
		}
		function d(e, t, n) {
			n =
				(e.viewBox && e.viewBox.baseVal && e.viewBox.baseVal[n]) ||
				(null !== t.getAttribute(n) &&
					!t.getAttribute(n).match(/%$/) &&
					parseInt(t.getAttribute(n))) ||
				e.getBoundingClientRect()[n] ||
				parseInt(t.style[n]) ||
				parseInt(window.getComputedStyle(e).getPropertyValue(n))
			return null == n || isNaN(parseFloat(n)) ? 0 : n
		}
		function o(e, t) {
			var n = document.createElement('a')
			;(n.download = e),
				(n.href = t),
				document.body.appendChild(n),
				n.addEventListener('click', function (e) {
					n.parentNode.removeChild(n)
				}),
				n.click()
		}
		;(r.svgAsDataUri = function (i, a, l) {
			c(), ((a = a || {}).scale = a.scale || 1)
			var s = 'http://www.w3.org/2000/xmlns/'
			e(i, function () {
				var e = document.createElement('div'),
					t = i.cloneNode(!0)
				if ('svg' == i.tagName)
					(r = a.width || d(i, t, 'width')), (o = a.height || d(i, t, 'height'))
				else {
					if (!i.getBBox)
						return void console.error('Attempted to render non-SVG element', i)
					var n = i.getBBox(),
						r = n.x + n.width,
						o = n.y + n.height
					t.setAttribute(
						'transform',
						t.getAttribute('transform').replace(/translate\(.*?\)/, '')
					),
						(n = document.createElementNS(
							'http://www.w3.org/2000/svg',
							'svg'
						)).appendChild(t),
						(t = n)
				}
				t.setAttribute('version', '1.1'),
					t.getAttribute('xmlns') ||
						t.setAttributeNS(s, 'xmlns', 'http://www.w3.org/2000/svg'),
					t.getAttribute('xmlns:xlink') ||
						t.setAttributeNS(s, 'xmlns:xlink', 'http://www.w3.org/1999/xlink'),
					t.setAttribute('width', r * a.scale),
					t.setAttribute('height', o * a.scale),
					t.setAttribute('viewBox', [a.left || 0, a.top || 0, r, o].join(' ')),
					e.appendChild(t)
				;(r = (function (e, t) {
					for (var n = '', r = document.styleSheets, o = 0; o < r.length; o++) {
						try {
							var i = r[o].cssRules
						} catch (e) {
							console.warn('Stylesheet could not be loaded: ' + r[o].href)
							continue
						}
						if (null != i)
							for (var a = 0; a < i.length; a++) {
								var l,
									s,
									c = i[a]
								if (void 0 !== c.style) {
									try {
										s = c.selectorText
									} catch (e) {
										console.warn(
											'The following CSS rule has an invalid selector: "' +
												c +
												'"',
											e
										)
									}
									try {
										s && (l = e.querySelector(s))
									} catch (e) {
										console.warn('Invalid CSS selector "' + s + '"', e)
									}
									l
										? (n +=
												(t ? t(c.selectorText) : c.selectorText) +
												' { ' +
												c.style.cssText +
												' }\n')
										: c.cssText.match(/^@font-face/) && (n += c.cssText + '\n')
								}
							}
					}
					return n
				})(i, a.selectorRemap)),
					(o = document.createElement('style'))
				o.setAttribute('type', 'text/css'), (o.innerHTML = r)
				r = document.createElement('defs')
				r.appendChild(o), t.insertBefore(r, t.firstChild)
				;(n =
					'<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
					e.innerHTML),
					(n =
						'data:image/svg+xml;base64,' +
						window.btoa(
							((n = n),
							(n = (n = encodeURIComponent(n)).replace(
								/%([0-9A-F]{2})/g,
								function (e, t) {
									t = String.fromCharCode('0x' + t)
									return '%' === t ? '%25' : t
								}
							)),
							decodeURIComponent(n))
						))
				l && l(n)
			})
		}),
			(r.svgAsPngUri = function (e, o, i) {
				c(),
					r.svgAsDataUri(e, o, function (e) {
						var r = new Image()
						;(r.onload = function () {
							var e = document.createElement('canvas')
							;(e.width = r.width), (e.height = r.height)
							var t = e.getContext('2d')
							o &&
								o.backgroundColor &&
								((t.fillStyle = o.backgroundColor),
								t.fillRect(0, 0, e.width, e.height)),
								t.drawImage(r, 0, 0)
							var n
							document.createElement('a')
							try {
								n = e.toDataURL('image/png')
							} catch (e) {
								if (
									('undefined' != typeof SecurityError &&
										e instanceof SecurityError) ||
									'SecurityError' == e.name
								)
									return void console.error(
										'Rendered SVG images cannot be downloaded in this browser.'
									)
								throw e
							}
							i(n)
						}),
							(r.onerror = function (e) {
								console.error(
									'There was an error loading the data URI as an image',
									e
								)
							}),
							(r.src = e)
					})
			}),
			(r.saveSvg = function (e, t, n) {
				c(),
					r.svgAsDataUri(e, (n = n || {}), function (e) {
						o(t, e)
					})
			}),
			(r.saveSvgAsPng = function (e, t, n) {
				c(),
					r.svgAsPngUri(e, (n = n || {}), function (e) {
						o(t, e)
					})
			}),
			'undefined' != typeof define &&
				define(function () {
					return r
				})
	})()
})
