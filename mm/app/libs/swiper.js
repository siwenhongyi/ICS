define('app/libs/swiper', function (e, t, a) {
	var i, s
	;(i = this),
		(s = function () {
			'use strict'
			var c =
					'undefined' == typeof document
						? {
								body: {},
								addEventListener: function () {},
								removeEventListener: function () {},
								activeElement: {
									blur: function () {},
									nodeName: '',
								},
								querySelector: function () {
									return null
								},
								querySelectorAll: function () {
									return []
								},
								getElementById: function () {
									return null
								},
								createEvent: function () {
									return {
										initEvent: function () {},
									}
								},
								createElement: function () {
									return {
										children: [],
										childNodes: [],
										style: {},
										setAttribute: function () {},
										getElementsByTagName: function () {
											return []
										},
									}
								},
								location: {
									hash: '',
								},
						  }
						: document,
				F =
					'undefined' == typeof window
						? {
								document: c,
								navigator: {
									userAgent: '',
								},
								location: {},
								history: {},
								CustomEvent: function () {
									return this
								},
								addEventListener: function () {},
								removeEventListener: function () {},
								getComputedStyle: function () {
									return {
										getPropertyValue: function () {
											return ''
										},
									}
								},
								Image: function () {},
								Date: function () {},
								screen: {},
								setTimeout: function () {},
								clearTimeout: function () {},
						  }
						: window,
				l = function (e) {
					for (var t = 0; t < e.length; t += 1) this[t] = e[t]
					return (this.length = e.length), this
				}
			function E(e, t) {
				var a = [],
					i = 0
				if (e && !t && e instanceof l) return e
				if (e)
					if ('string' == typeof e) {
						var s,
							r,
							n = e.trim()
						if (0 <= n.indexOf('<') && 0 <= n.indexOf('>')) {
							var o = 'div'
							for (
								0 === n.indexOf('<li') && (o = 'ul'),
									0 === n.indexOf('<tr') && (o = 'tbody'),
									(0 !== n.indexOf('<td') && 0 !== n.indexOf('<th')) ||
										(o = 'tr'),
									0 === n.indexOf('<tbody') && (o = 'table'),
									0 === n.indexOf('<option') && (o = 'select'),
									(r = c.createElement(o)).innerHTML = n,
									i = 0;
								i < r.childNodes.length;
								i += 1
							)
								a.push(r.childNodes[i])
						} else
							for (
								s =
									t || '#' !== e[0] || e.match(/[ .<>:~]/)
										? (t || c).querySelectorAll(e.trim())
										: [c.getElementById(e.trim().split('#')[1])],
									i = 0;
								i < s.length;
								i += 1
							)
								s[i] && a.push(s[i])
					} else if (e.nodeType || e === F || e === c) a.push(e)
					else if (0 < e.length && e[0].nodeType)
						for (i = 0; i < e.length; i += 1) a.push(e[i])
				return new l(a)
			}
			function r(e) {
				for (var t = [], a = 0; a < e.length; a += 1)
					-1 === t.indexOf(e[a]) && t.push(e[a])
				return t
			}
			;(E.fn = l.prototype), (E.Class = l), (E.Dom7 = l)
			var t = {
				addClass: function (e) {
					if (void 0 === e) return this
					for (var t = e.split(' '), a = 0; a < t.length; a += 1)
						for (var i = 0; i < this.length; i += 1)
							void 0 !== this[i] &&
								void 0 !== this[i].classList &&
								this[i].classList.add(t[a])
					return this
				},
				removeClass: function (e) {
					for (var t = e.split(' '), a = 0; a < t.length; a += 1)
						for (var i = 0; i < this.length; i += 1)
							void 0 !== this[i] &&
								void 0 !== this[i].classList &&
								this[i].classList.remove(t[a])
					return this
				},
				hasClass: function (e) {
					return !!this[0] && this[0].classList.contains(e)
				},
				toggleClass: function (e) {
					for (var t = e.split(' '), a = 0; a < t.length; a += 1)
						for (var i = 0; i < this.length; i += 1)
							void 0 !== this[i] &&
								void 0 !== this[i].classList &&
								this[i].classList.toggle(t[a])
					return this
				},
				attr: function (e, t) {
					var a = arguments
					if (1 === arguments.length && 'string' == typeof e)
						return this[0] ? this[0].getAttribute(e) : void 0
					for (var i = 0; i < this.length; i += 1)
						if (2 === a.length) this[i].setAttribute(e, t)
						else
							for (var s in e)
								(this[i][s] = e[s]), this[i].setAttribute(s, e[s])
					return this
				},
				removeAttr: function (e) {
					for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e)
					return this
				},
				data: function (e, t) {
					var a
					if (void 0 !== t) {
						for (var i = 0; i < this.length; i += 1)
							(a = this[i]).dom7ElementDataStorage ||
								(a.dom7ElementDataStorage = {}),
								(a.dom7ElementDataStorage[e] = t)
						return this
					}
					if ((a = this[0]))
						return a.dom7ElementDataStorage && e in a.dom7ElementDataStorage
							? a.dom7ElementDataStorage[e]
							: a.getAttribute('data-' + e) || void 0
				},
				transform: function (e) {
					for (var t = 0; t < this.length; t += 1) {
						var a = this[t].style
						;(a.webkitTransform = e), (a.transform = e)
					}
					return this
				},
				transition: function (e) {
					'string' != typeof e && (e += 'ms')
					for (var t = 0; t < this.length; t += 1) {
						var a = this[t].style
						;(a.webkitTransitionDuration = e), (a.transitionDuration = e)
					}
					return this
				},
				on: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
					var a = e[0],
						r = e[1],
						n = e[2],
						i = e[3]
					function s(e) {
						var t = e.target
						if (t) {
							var a = e.target.dom7EventData || []
							if ((a.indexOf(e) < 0 && a.unshift(e), E(t).is(r))) n.apply(t, a)
							else
								for (var i = E(t).parents(), s = 0; s < i.length; s += 1)
									E(i[s]).is(r) && n.apply(i[s], a)
						}
					}
					function o(e) {
						var t = (e && e.target && e.target.dom7EventData) || []
						t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
					}
					'function' == typeof e[1] &&
						((a = e[0]), (n = e[1]), (i = e[2]), (r = void 0))
					for (
						var l, i = i || !1, d = a.split(' '), p = 0;
						p < this.length;
						p += 1
					) {
						var c = this[p]
						if (r)
							for (l = 0; l < d.length; l += 1) {
								var u = d[l]
								c.dom7LiveListeners || (c.dom7LiveListeners = {}),
									c.dom7LiveListeners[u] || (c.dom7LiveListeners[u] = []),
									c.dom7LiveListeners[u].push({
										listener: n,
										proxyListener: s,
									}),
									c.addEventListener(u, s, i)
							}
						else
							for (l = 0; l < d.length; l += 1) {
								var h = d[l]
								c.dom7Listeners || (c.dom7Listeners = {}),
									c.dom7Listeners[h] || (c.dom7Listeners[h] = []),
									c.dom7Listeners[h].push({
										listener: n,
										proxyListener: o,
									}),
									c.addEventListener(h, o, i)
							}
					}
					return this
				},
				off: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
					var a = e[0],
						i = e[1],
						s = e[2],
						r = e[3]
					'function' == typeof e[1] &&
						((a = e[0]), (s = e[1]), (r = e[2]), (i = void 0))
					for (var r = r || !1, n = a.split(' '), o = 0; o < n.length; o += 1)
						for (var l = n[o], d = 0; d < this.length; d += 1) {
							var p = this[d],
								c = void 0
							if (
								(!i && p.dom7Listeners
									? (c = p.dom7Listeners[l])
									: i && p.dom7LiveListeners && (c = p.dom7LiveListeners[l]),
								c && c.length)
							)
								for (var u = c.length - 1; 0 <= u; --u) {
									var h = c[u]
									;((s && h.listener === s) ||
										(s &&
											h.listener &&
											h.listener.dom7proxy &&
											h.listener.dom7proxy === s) ||
										!s) &&
										(p.removeEventListener(l, h.proxyListener, r),
										c.splice(u, 1))
								}
						}
					return this
				},
				trigger: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
					for (var a = e[0].split(' '), i = e[1], s = 0; s < a.length; s += 1)
						for (var r = a[s], n = 0; n < this.length; n += 1) {
							var o = this[n],
								l = void 0
							try {
								l = new F.CustomEvent(r, {
									detail: i,
									bubbles: !0,
									cancelable: !0,
								})
							} catch (e) {
								;(l = c.createEvent('Event')).initEvent(r, !0, !0),
									(l.detail = i)
							}
							;(o.dom7EventData = e.filter(function (e, t) {
								return 0 < t
							})),
								o.dispatchEvent(l),
								(o.dom7EventData = []),
								delete o.dom7EventData
						}
					return this
				},
				transitionEnd: function (t) {
					var a,
						i = ['webkitTransitionEnd', 'transitionend'],
						s = this
					function r(e) {
						if (e.target === this)
							for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
					}
					if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r)
					return this
				},
				outerWidth: function (e) {
					if (0 < this.length) {
						if (e) {
							e = this.styles()
							return (
								this[0].offsetWidth +
								parseFloat(e.getPropertyValue('margin-right')) +
								parseFloat(e.getPropertyValue('margin-left'))
							)
						}
						return this[0].offsetWidth
					}
					return null
				},
				outerHeight: function (e) {
					if (0 < this.length) {
						if (e) {
							e = this.styles()
							return (
								this[0].offsetHeight +
								parseFloat(e.getPropertyValue('margin-top')) +
								parseFloat(e.getPropertyValue('margin-bottom'))
							)
						}
						return this[0].offsetHeight
					}
					return null
				},
				offset: function () {
					if (0 < this.length) {
						var e = this[0],
							t = e.getBoundingClientRect(),
							a = c.body,
							i = e.clientTop || a.clientTop || 0,
							s = e.clientLeft || a.clientLeft || 0,
							a = e === F ? F.scrollY : e.scrollTop,
							e = e === F ? F.scrollX : e.scrollLeft
						return {
							top: t.top + a - i,
							left: t.left + e - s,
						}
					}
					return null
				},
				css: function (e, t) {
					var a
					if (1 === arguments.length) {
						if ('string' != typeof e) {
							for (a = 0; a < this.length; a += 1)
								for (var i in e) this[a].style[i] = e[i]
							return this
						}
						if (this[0])
							return F.getComputedStyle(this[0], null).getPropertyValue(e)
					}
					if (2 !== arguments.length || 'string' != typeof e) return this
					for (a = 0; a < this.length; a += 1) this[a].style[e] = t
					return this
				},
				each: function (e) {
					if (!e) return this
					for (var t = 0; t < this.length; t += 1)
						if (!1 === e.call(this[t], t, this[t])) return this
					return this
				},
				html: function (e) {
					if (void 0 === e) return this[0] ? this[0].innerHTML : void 0
					for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e
					return this
				},
				text: function (e) {
					if (void 0 === e) return this[0] ? this[0].textContent.trim() : null
					for (var t = 0; t < this.length; t += 1) this[t].textContent = e
					return this
				},
				is: function (e) {
					var t,
						a,
						i = this[0]
					if (!i || void 0 === e) return !1
					if ('string' == typeof e) {
						if (i.matches) return i.matches(e)
						if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e)
						if (i.msMatchesSelector) return i.msMatchesSelector(e)
						for (t = E(e), a = 0; a < t.length; a += 1)
							if (t[a] === i) return !0
						return !1
					}
					if (e === c) return i === c
					if (e === F) return i === F
					if (e.nodeType || e instanceof l) {
						for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
							if (t[a] === i) return !0
						return !1
					}
					return !1
				},
				index: function () {
					var e,
						t = this[0]
					if (t) {
						for (e = 0; null !== (t = t.previousSibling); )
							1 === t.nodeType && (e += 1)
						return e
					}
				},
				eq: function (e) {
					if (void 0 === e) return this
					var t = this.length
					return new l(
						t - 1 < e
							? []
							: e < 0
							? (t = t + e) < 0
								? []
								: [this[t]]
							: [this[e]]
					)
				},
				append: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
					for (var a = 0; a < e.length; a += 1)
						for (var i = e[a], s = 0; s < this.length; s += 1)
							if ('string' == typeof i) {
								var r = c.createElement('div')
								for (r.innerHTML = i; r.firstChild; )
									this[s].appendChild(r.firstChild)
							} else if (i instanceof l)
								for (var n = 0; n < i.length; n += 1) this[s].appendChild(i[n])
							else this[s].appendChild(i)
					return this
				},
				prepend: function (e) {
					for (var t, a = 0; a < this.length; a += 1)
						if ('string' == typeof e) {
							var i = c.createElement('div')
							for (i.innerHTML = e, t = i.childNodes.length - 1; 0 <= t; --t)
								this[a].insertBefore(i.childNodes[t], this[a].childNodes[0])
						} else if (e instanceof l)
							for (t = 0; t < e.length; t += 1)
								this[a].insertBefore(e[t], this[a].childNodes[0])
						else this[a].insertBefore(e, this[a].childNodes[0])
					return this
				},
				next: function (e) {
					return 0 < this.length
						? e
							? this[0].nextElementSibling &&
							  E(this[0].nextElementSibling).is(e)
								? new l([this[0].nextElementSibling])
								: new l([])
							: this[0].nextElementSibling
							? new l([this[0].nextElementSibling])
							: new l([])
						: new l([])
				},
				nextAll: function (e) {
					var t = [],
						a = this[0]
					if (!a) return new l([])
					for (; a.nextElementSibling; ) {
						var i = a.nextElementSibling
						;(e && !E(i).is(e)) || t.push(i), (a = i)
					}
					return new l(t)
				},
				prev: function (e) {
					if (0 < this.length) {
						var t = this[0]
						return e
							? t.previousElementSibling && E(t.previousElementSibling).is(e)
								? new l([t.previousElementSibling])
								: new l([])
							: t.previousElementSibling
							? new l([t.previousElementSibling])
							: new l([])
					}
					return new l([])
				},
				prevAll: function (e) {
					var t = [],
						a = this[0]
					if (!a) return new l([])
					for (; a.previousElementSibling; ) {
						var i = a.previousElementSibling
						;(e && !E(i).is(e)) || t.push(i), (a = i)
					}
					return new l(t)
				},
				parent: function (e) {
					for (var t = [], a = 0; a < this.length; a += 1)
						null === this[a].parentNode ||
							(e && !E(this[a].parentNode).is(e)) ||
							t.push(this[a].parentNode)
					return E(r(t))
				},
				parents: function (e) {
					for (var t = [], a = 0; a < this.length; a += 1)
						for (var i = this[a].parentNode; i; )
							(e && !E(i).is(e)) || t.push(i), (i = i.parentNode)
					return E(r(t))
				},
				closest: function (e) {
					var t = this
					return void 0 === e
						? new l([])
						: (t = !t.is(e) ? t.parents(e).eq(0) : t)
				},
				find: function (e) {
					for (var t = [], a = 0; a < this.length; a += 1)
						for (
							var i = this[a].querySelectorAll(e), s = 0;
							s < i.length;
							s += 1
						)
							t.push(i[s])
					return new l(t)
				},
				children: function (e) {
					for (var t = [], a = 0; a < this.length; a += 1)
						for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)
							e
								? 1 === i[s].nodeType && E(i[s]).is(e) && t.push(i[s])
								: 1 === i[s].nodeType && t.push(i[s])
					return new l(r(t))
				},
				remove: function () {
					for (var e = 0; e < this.length; e += 1)
						this[e].parentNode && this[e].parentNode.removeChild(this[e])
					return this
				},
				add: function () {
					for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a]
					for (e = 0; e < t.length; e += 1)
						for (var i = E(t[e]), s = 0; s < i.length; s += 1)
							(this[this.length] = i[s]), (this.length += 1)
					return this
				},
				styles: function () {
					return this[0] ? F.getComputedStyle(this[0], null) : {}
				},
			}
			function e(e) {
				var t = this
				;(t.params = e = void 0 === e ? {} : e),
					(t.eventsListeners = {}),
					t.params &&
						t.params.on &&
						Object.keys(t.params.on).forEach(function (e) {
							t.on(e, t.params.on[e])
						})
			}
			Object.keys(t).forEach(function (e) {
				E.fn[e] = E.fn[e] || t[e]
			})
			var i,
				R = {
					deleteProps: function (e) {
						var t = e
						Object.keys(t).forEach(function (e) {
							try {
								t[e] = null
							} catch (e) {}
							try {
								delete t[e]
							} catch (e) {}
						})
					},
					nextTick: function (e, t) {
						return void 0 === t && (t = 0), setTimeout(e, t)
					},
					now: function () {
						return Date.now()
					},
					getTranslate: function (e, t) {
						var a, i, s
						void 0 === t && (t = 'x')
						e = F.getComputedStyle(e, null)
						return (
							F.WebKitCSSMatrix
								? (6 <
										(i = e.transform || e.webkitTransform).split(',').length &&
										(i = i
											.split(', ')
											.map(function (e) {
												return e.replace(',', '.')
											})
											.join(', ')),
								  (s = new F.WebKitCSSMatrix('none' === i ? '' : i)))
								: (a = (s =
										e.MozTransform ||
										e.OTransform ||
										e.MsTransform ||
										e.msTransform ||
										e.transform ||
										e
											.getPropertyValue('transform')
											.replace('translate(', 'matrix(1, 0, 0, 1,'))
										.toString()
										.split(',')),
							'x' === t &&
								(i = F.WebKitCSSMatrix
									? s.m41
									: 16 === a.length
									? parseFloat(a[12])
									: parseFloat(a[4])),
							(i =
								'y' === t
									? F.WebKitCSSMatrix
										? s.m42
										: 16 === a.length
										? parseFloat(a[13])
										: parseFloat(a[5])
									: i) || 0
						)
					},
					parseUrlQuery: function (e) {
						var t,
							a,
							i,
							s,
							r = {},
							e = e || F.location.href
						if ('string' == typeof e && e.length)
							for (
								s = (a = (e = -1 < e.indexOf('?') ? e.replace(/\S*\?/, '') : '')
									.split('&')
									.filter(function (e) {
										return '' !== e
									})).length,
									t = 0;
								t < s;
								t += 1
							)
								(i = a[t].replace(/#\S+/g, '').split('=')),
									(r[decodeURIComponent(i[0])] =
										void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || '')
						return r
					},
					isObject: function (e) {
						return (
							'object' == typeof e &&
							null !== e &&
							e.constructor &&
							e.constructor === Object
						)
					},
					extend: function () {
						for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
						for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
							var s = e[i]
							if (null != s)
								for (
									var r = Object.keys(Object(s)), n = 0, o = r.length;
									n < o;
									n += 1
								) {
									var l = r[n],
										d = Object.getOwnPropertyDescriptor(s, l)
									void 0 !== d &&
										d.enumerable &&
										(R.isObject(a[l]) && R.isObject(s[l])
											? R.extend(a[l], s[l])
											: !R.isObject(a[l]) && R.isObject(s[l])
											? ((a[l] = {}), R.extend(a[l], s[l]))
											: (a[l] = s[l]))
								}
						}
						return a
					},
				},
				q =
					((i = c.createElement('div')),
					{
						touch:
							(F.Modernizr && !0 === F.Modernizr.touch) ||
							!!(
								0 < F.navigator.maxTouchPoints ||
								'ontouchstart' in F ||
								(F.DocumentTouch && c instanceof F.DocumentTouch)
							),
						pointerEvents: !!(
							F.navigator.pointerEnabled ||
							F.PointerEvent ||
							('maxTouchPoints' in F.navigator &&
								0 < F.navigator.maxTouchPoints)
						),
						prefixedPointerEvents: !!F.navigator.msPointerEnabled,
						transition:
							'transition' in (n = i.style) ||
							'webkitTransition' in n ||
							'MozTransition' in n,
						transforms3d:
							(F.Modernizr && !0 === F.Modernizr.csstransforms3d) ||
							'webkitPerspective' in (C = i.style) ||
							'MozPerspective' in C ||
							'OPerspective' in C ||
							'MsPerspective' in C ||
							'perspective' in C,
						flexbox: (function () {
							for (
								var e = i.style,
									t = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(
										' '
									),
									a = 0;
								a < t.length;
								a += 1
							)
								if (t[a] in e) return !0
							return !1
						})(),
						observer: 'MutationObserver' in F || 'WebkitMutationObserver' in F,
						passiveListener: (function () {
							var e = !1
							try {
								var t = Object.defineProperty({}, 'passive', {
									get: function () {
										e = !0
									},
								})
								F.addEventListener('testPassiveListener', null, t)
							} catch (e) {}
							return e
						})(),
						gestures: 'ongesturestart' in F,
					}),
				W = {
					isIE:
						!!F.navigator.userAgent.match(/Trident/g) ||
						!!F.navigator.userAgent.match(/MSIE/g),
					isEdge: !!F.navigator.userAgent.match(/Edge/g),
					isSafari:
						0 <= (o = F.navigator.userAgent.toLowerCase()).indexOf('safari') &&
						o.indexOf('chrome') < 0 &&
						o.indexOf('android') < 0,
					isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
						F.navigator.userAgent
					),
				},
				a = {
					components: {
						configurable: !0,
					},
				}
			;(e.prototype.on = function (e, t, a) {
				var i = this
				if ('function' != typeof t) return i
				var s = a ? 'unshift' : 'push'
				return (
					e.split(' ').forEach(function (e) {
						i.eventsListeners[e] || (i.eventsListeners[e] = []),
							i.eventsListeners[e][s](t)
					}),
					i
				)
			}),
				(e.prototype.once = function (a, i, e) {
					var s = this
					return 'function' != typeof i ? s : ((r.f7proxy = i), s.on(a, r, e))
					function r() {
						for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
						i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy
					}
				}),
				(e.prototype.off = function (e, i) {
					var s = this
					return (
						s.eventsListeners &&
							e.split(' ').forEach(function (a) {
								void 0 === i
									? (s.eventsListeners[a] = [])
									: s.eventsListeners[a] &&
									  s.eventsListeners[a].length &&
									  s.eventsListeners[a].forEach(function (e, t) {
											;(e === i || (e.f7proxy && e.f7proxy === i)) &&
												s.eventsListeners[a].splice(t, 1)
									  })
							}),
						s
					)
				}),
				(e.prototype.emit = function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
					var a,
						i,
						s,
						r = this
					return (
						r.eventsListeners &&
							((s =
								'string' == typeof e[0] || Array.isArray(e[0])
									? ((a = e[0]), (i = e.slice(1, e.length)), r)
									: ((a = e[0].events), (i = e[0].data), e[0].context || r)),
							(Array.isArray(a) ? a : a.split(' ')).forEach(function (e) {
								var t
								r.eventsListeners &&
									r.eventsListeners[e] &&
									((t = []),
									r.eventsListeners[e].forEach(function (e) {
										t.push(e)
									}),
									t.forEach(function (e) {
										e.apply(s, i)
									}))
							})),
						r
					)
				}),
				(e.prototype.useModulesParams = function (t) {
					var a = this
					a.modules &&
						Object.keys(a.modules).forEach(function (e) {
							e = a.modules[e]
							e.params && R.extend(t, e.params)
						})
				}),
				(e.prototype.useModules = function (t) {
					void 0 === t && (t = {})
					var i = this
					i.modules &&
						Object.keys(i.modules).forEach(function (e) {
							var a = i.modules[e],
								e = t[e] || {}
							a.instance &&
								Object.keys(a.instance).forEach(function (e) {
									var t = a.instance[e]
									i[e] = 'function' == typeof t ? t.bind(i) : t
								}),
								a.on &&
									i.on &&
									Object.keys(a.on).forEach(function (e) {
										i.on(e, a.on[e])
									}),
								a.create && a.create.bind(i)(e)
						})
				}),
				(a.components.set = function (e) {
					this.use && this.use(e)
				}),
				(e.installModule = function (t) {
					for (var e = [], a = arguments.length - 1; 0 < a--; )
						e[a] = arguments[a + 1]
					var i = this
					i.prototype.modules || (i.prototype.modules = {})
					var s =
						t.name || Object.keys(i.prototype.modules).length + '_' + R.now()
					return (
						(i.prototype.modules[s] = t).proto &&
							Object.keys(t.proto).forEach(function (e) {
								i.prototype[e] = t.proto[e]
							}),
						t.static &&
							Object.keys(t.static).forEach(function (e) {
								i[e] = t.static[e]
							}),
						t.install && t.install.apply(i, e),
						i
					)
				}),
				(e.use = function (e) {
					for (var t = [], a = arguments.length - 1; 0 < a--; )
						t[a] = arguments[a + 1]
					var i = this
					return Array.isArray(e)
						? (e.forEach(function (e) {
								return i.installModule(e)
						  }),
						  i)
						: i.installModule.apply(i, [e].concat(t))
				}),
				Object.defineProperties(e, a)
			var s,
				n,
				o,
				d = {
					updateSize: function () {
						var e = this,
							t = e.$el,
							a = void 0 !== e.params.width ? e.params.width : t[0].clientWidth,
							i =
								void 0 !== e.params.height ? e.params.height : t[0].clientHeight
						;(0 === a && e.isHorizontal()) ||
							(0 === i && e.isVertical()) ||
							((a =
								a -
								parseInt(t.css('padding-left'), 10) -
								parseInt(t.css('padding-right'), 10)),
							(i =
								i -
								parseInt(t.css('padding-top'), 10) -
								parseInt(t.css('padding-bottom'), 10)),
							R.extend(e, {
								width: a,
								height: i,
								size: e.isHorizontal() ? a : i,
							}))
					},
					updateSlides: function () {
						var e = this,
							t = e.params,
							a = e.$wrapperEl,
							i = e.size,
							s = e.rtlTranslate,
							r = e.wrongRTL,
							n = e.virtual && t.virtual.enabled,
							o = (n ? e.virtual : e).slides.length,
							l = a.children('.' + e.params.slideClass),
							d = (n ? e.virtual.slides : l).length,
							p = [],
							c = [],
							u = [],
							h = t.slidesOffsetBefore
						'function' == typeof h && (h = t.slidesOffsetBefore.call(e))
						var v = t.slidesOffsetAfter
						'function' == typeof v && (v = t.slidesOffsetAfter.call(e))
						var m,
							f = e.snapGrid.length,
							n = e.snapGrid.length,
							g = t.spaceBetween,
							b = -h,
							w = 0,
							y = 0
						if (void 0 !== i) {
							'string' == typeof g &&
								0 <= g.indexOf('%') &&
								(g = (parseFloat(g.replace('%', '')) / 100) * i),
								(e.virtualSize = -g),
								s
									? l.css({
											marginLeft: '',
											marginTop: '',
									  })
									: l.css({
											marginRight: '',
											marginBottom: '',
									  }),
								1 < t.slidesPerColumn &&
									((m =
										Math.floor(d / t.slidesPerColumn) ===
										d / e.params.slidesPerColumn
											? d
											: Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn),
									'auto' !== t.slidesPerView &&
										'row' === t.slidesPerColumnFill &&
										(m = Math.max(m, t.slidesPerView * t.slidesPerColumn)))
							for (
								var x,
									T,
									E = t.slidesPerColumn,
									S = m / E,
									C = Math.floor(d / t.slidesPerColumn),
									M = 0;
								M < d;
								M += 1
							) {
								$ = 0
								var P,
									k,
									z,
									$,
									I,
									L,
									D,
									O,
									A,
									H,
									G = l.eq(M)
								1 < t.slidesPerColumn &&
									((z = k = P = void 0),
									'column' === t.slidesPerColumnFill ||
									('row' === t.slidesPerColumnFill && 1 < t.slidesPerGroup)
										? ('column' === t.slidesPerColumnFill
												? ((z = M - (k = Math.floor(M / E)) * E),
												  (C < k || (k === C && z === E - 1)) &&
														E <= (z += 1) &&
														((z = 0), (k += 1)))
												: ((H = Math.floor(M / t.slidesPerGroup)),
												  (k =
														M -
														(z =
															Math.floor(M / t.slidesPerView) -
															H * t.slidesPerColumn) *
															t.slidesPerView -
														H * t.slidesPerView)),
										  G.css({
												'-webkit-box-ordinal-group': (P = k + (z * m) / E),
												'-moz-box-ordinal-group': P,
												'-ms-flex-order': P,
												'-webkit-order': P,
												order: P,
										  }))
										: (k = M - (z = Math.floor(M / S)) * S),
									G.css(
										'margin-' + (e.isHorizontal() ? 'top' : 'left'),
										0 !== z && t.spaceBetween && t.spaceBetween + 'px'
									)
										.attr('data-swiper-column', k)
										.attr('data-swiper-row', z)),
									'none' !== G.css('display') &&
										('auto' === t.slidesPerView
											? ((H = F.getComputedStyle(G[0], null)),
											  (P = G[0].style.transform),
											  (k = G[0].style.webkitTransform),
											  P && (G[0].style.transform = 'none'),
											  k && (G[0].style.webkitTransform = 'none'),
											  ($ = t.roundLengths
													? e.isHorizontal()
														? G.outerWidth(!0)
														: G.outerHeight(!0)
													: e.isHorizontal()
													? ((I = parseFloat(H.getPropertyValue('width'))),
													  (L = parseFloat(
															H.getPropertyValue('padding-left')
													  )),
													  (D = parseFloat(
															H.getPropertyValue('padding-right')
													  )),
													  (O = parseFloat(H.getPropertyValue('margin-left'))),
													  (A = parseFloat(
															H.getPropertyValue('margin-right')
													  )),
													  (z = H.getPropertyValue('box-sizing')) &&
													  'border-box' === z &&
													  !W.isIE
															? I + O + A
															: I + L + D + O + A)
													: ((I = parseFloat(H.getPropertyValue('height'))),
													  (L = parseFloat(H.getPropertyValue('padding-top'))),
													  (D = parseFloat(
															H.getPropertyValue('padding-bottom')
													  )),
													  (O = parseFloat(H.getPropertyValue('margin-top'))),
													  (A = parseFloat(
															H.getPropertyValue('margin-bottom')
													  )),
													  (H = H.getPropertyValue('box-sizing')) &&
													  'border-box' === H &&
													  !W.isIE
															? I + O + A
															: I + L + D + O + A)),
											  P && (G[0].style.transform = P),
											  k && (G[0].style.webkitTransform = k),
											  t.roundLengths && ($ = Math.floor($)))
											: (($ =
													(i - (t.slidesPerView - 1) * g) / t.slidesPerView),
											  t.roundLengths && ($ = Math.floor($)),
											  l[M] &&
													(e.isHorizontal()
														? (l[M].style.width = $ + 'px')
														: (l[M].style.height = $ + 'px'))),
										l[M] && (l[M].swiperSlideSize = $),
										u.push($),
										t.centeredSlides
											? ((b = b + $ / 2 + w / 2 + g),
											  0 === w && 0 !== M && (b = b - i / 2 - g),
											  0 === M && (b = b - i / 2 - g),
											  Math.abs(b) < 0.001 && (b = 0),
											  t.roundLengths && (b = Math.floor(b)),
											  y % t.slidesPerGroup == 0 && p.push(b),
											  c.push(b))
											: (t.roundLengths && (b = Math.floor(b)),
											  y % t.slidesPerGroup == 0 && p.push(b),
											  c.push(b),
											  (b = b + $ + g)),
										(e.virtualSize += $ + g),
										(w = $),
										(y += 1))
							}
							if (
								((e.virtualSize = Math.max(e.virtualSize, i) + v),
								s &&
									r &&
									('slide' === t.effect || 'coverflow' === t.effect) &&
									a.css({
										width: e.virtualSize + t.spaceBetween + 'px',
									}),
								(q.flexbox && !t.setWrapperSize) ||
									(e.isHorizontal()
										? a.css({
												width: e.virtualSize + t.spaceBetween + 'px',
										  })
										: a.css({
												height: e.virtualSize + t.spaceBetween + 'px',
										  })),
								1 < t.slidesPerColumn &&
									((e.virtualSize = ($ + t.spaceBetween) * m),
									(e.virtualSize =
										Math.ceil(e.virtualSize / t.slidesPerColumn) -
										t.spaceBetween),
									e.isHorizontal()
										? a.css({
												width: e.virtualSize + t.spaceBetween + 'px',
										  })
										: a.css({
												height: e.virtualSize + t.spaceBetween + 'px',
										  }),
									t.centeredSlides))
							) {
								for (var N = [], B = 0; B < p.length; B += 1) {
									var V = p[B]
									t.roundLengths && (V = Math.floor(V)),
										p[B] < e.virtualSize + p[0] && N.push(V)
								}
								p = N
							}
							if (!t.centeredSlides) {
								N = []
								for (var X = 0; X < p.length; X += 1) {
									var Y = p[X]
									t.roundLengths && (Y = Math.floor(Y)),
										p[X] <= e.virtualSize - i && N.push(Y)
								}
								;(p = N),
									1 <
										Math.floor(e.virtualSize - i) -
											Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
							}
							0 === p.length && (p = [0]),
								0 !== t.spaceBetween &&
									(e.isHorizontal()
										? s
											? l.css({
													marginLeft: g + 'px',
											  })
											: l.css({
													marginRight: g + 'px',
											  })
										: l.css({
												marginBottom: g + 'px',
										  })),
								t.centerInsufficientSlides &&
									((x = 0),
									u.forEach(function (e) {
										x += e + (t.spaceBetween || 0)
									}),
									(x -= t.spaceBetween) < i &&
										((T = (i - x) / 2),
										p.forEach(function (e, t) {
											p[t] = e - T
										}),
										c.forEach(function (e, t) {
											c[t] = e + T
										}))),
								R.extend(e, {
									slides: l,
									snapGrid: p,
									slidesGrid: c,
									slidesSizesGrid: u,
								}),
								d !== o && e.emit('slidesLengthChange'),
								p.length !== f &&
									(e.params.watchOverflow && e.checkOverflow(),
									e.emit('snapGridLengthChange')),
								c.length !== n && e.emit('slidesGridLengthChange'),
								(t.watchSlidesProgress || t.watchSlidesVisibility) &&
									e.updateSlidesOffset()
						}
					},
					updateAutoHeight: function (e) {
						var t,
							a,
							i = this,
							s = [],
							r = 0
						if (
							('number' == typeof e
								? i.setTransition(e)
								: !0 === e && i.setTransition(i.params.speed),
							'auto' !== i.params.slidesPerView && 1 < i.params.slidesPerView)
						)
							for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
								var n = i.activeIndex + t
								if (n > i.slides.length) break
								s.push(i.slides.eq(n)[0])
							}
						else s.push(i.slides.eq(i.activeIndex)[0])
						for (t = 0; t < s.length; t += 1)
							void 0 !== s[t] && (r = r < (a = s[t].offsetHeight) ? a : r)
						r && i.$wrapperEl.css('height', r + 'px')
					},
					updateSlidesOffset: function () {
						for (var e = this.slides, t = 0; t < e.length; t += 1)
							e[t].swiperSlideOffset = this.isHorizontal()
								? e[t].offsetLeft
								: e[t].offsetTop
					},
					updateSlidesProgress: function (e) {
						var t = this,
							a = t.params
						void 0 === e && (e = (t && t.translate) || 0)
						var i = t.slides,
							s = t.rtlTranslate
						if (0 !== i.length) {
							void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset()
							var r = s ? e : -e
							i.removeClass(a.slideVisibleClass),
								(t.visibleSlidesIndexes = []),
								(t.visibleSlides = [])
							for (var n = 0; n < i.length; n += 1) {
								var o,
									l,
									d = i[n],
									p =
										(r +
											(a.centeredSlides ? t.minTranslate() : 0) -
											d.swiperSlideOffset) /
										(d.swiperSlideSize + a.spaceBetween)
								a.watchSlidesVisibility &&
									((l =
										(o = -(r - d.swiperSlideOffset)) + t.slidesSizesGrid[n]),
									((0 <= o && o < t.size - 1) ||
										(1 < l && l <= t.size) ||
										(o <= 0 && l >= t.size)) &&
										(t.visibleSlides.push(d),
										t.visibleSlidesIndexes.push(n),
										i.eq(n).addClass(a.slideVisibleClass))),
									(d.progress = s ? -p : p)
							}
							t.visibleSlides = E(t.visibleSlides)
						}
					},
					updateProgress: function (e) {
						var t = this,
							a = t.params
						void 0 === e &&
							((o = t.rtlTranslate ? -1 : 1),
							(e = (t && t.translate && t.translate * o) || 0))
						var i = t.maxTranslate() - t.minTranslate(),
							s = t.progress,
							r = t.isBeginning,
							n = r,
							o = (l = t.isEnd),
							l =
								0 == i
									? (r = !(s = 0))
									: ((r = (s = (e - t.minTranslate()) / i) <= 0), 1 <= s)
						R.extend(t, {
							progress: s,
							isBeginning: r,
							isEnd: l,
						}),
							(a.watchSlidesProgress || a.watchSlidesVisibility) &&
								t.updateSlidesProgress(e),
							r && !n && t.emit('reachBeginning toEdge'),
							l && !o && t.emit('reachEnd toEdge'),
							((n && !r) || (o && !l)) && t.emit('fromEdge'),
							t.emit('progress', s)
					},
					updateSlidesClasses: function () {
						var e = this,
							t = e.slides,
							a = e.params,
							i = e.$wrapperEl,
							s = e.activeIndex,
							r = e.realIndex,
							n = e.virtual && a.virtual.enabled
						t.removeClass(
							a.slideActiveClass +
								' ' +
								a.slideNextClass +
								' ' +
								a.slidePrevClass +
								' ' +
								a.slideDuplicateActiveClass +
								' ' +
								a.slideDuplicateNextClass +
								' ' +
								a.slideDuplicatePrevClass
						),
							(s = n
								? e.$wrapperEl.find(
										'.' + a.slideClass + '[data-swiper-slide-index="' + s + '"]'
								  )
								: t.eq(s)).addClass(a.slideActiveClass),
							a.loop &&
								(s.hasClass(a.slideDuplicateClass)
									? i.children(
											'.' +
												a.slideClass +
												':not(.' +
												a.slideDuplicateClass +
												')[data-swiper-slide-index="' +
												r +
												'"]'
									  )
									: i.children(
											'.' +
												a.slideClass +
												'.' +
												a.slideDuplicateClass +
												'[data-swiper-slide-index="' +
												r +
												'"]'
									  )
								).addClass(a.slideDuplicateActiveClass)
						r = s
							.nextAll('.' + a.slideClass)
							.eq(0)
							.addClass(a.slideNextClass)
						a.loop && 0 === r.length && (r = t.eq(0)).addClass(a.slideNextClass)
						s = s
							.prevAll('.' + a.slideClass)
							.eq(0)
							.addClass(a.slidePrevClass)
						a.loop &&
							0 === s.length &&
							(s = t.eq(-1)).addClass(a.slidePrevClass),
							a.loop &&
								((r.hasClass(a.slideDuplicateClass)
									? i.children(
											'.' +
												a.slideClass +
												':not(.' +
												a.slideDuplicateClass +
												')[data-swiper-slide-index="' +
												r.attr('data-swiper-slide-index') +
												'"]'
									  )
									: i.children(
											'.' +
												a.slideClass +
												'.' +
												a.slideDuplicateClass +
												'[data-swiper-slide-index="' +
												r.attr('data-swiper-slide-index') +
												'"]'
									  )
								).addClass(a.slideDuplicateNextClass),
								(s.hasClass(a.slideDuplicateClass)
									? i.children(
											'.' +
												a.slideClass +
												':not(.' +
												a.slideDuplicateClass +
												')[data-swiper-slide-index="' +
												s.attr('data-swiper-slide-index') +
												'"]'
									  )
									: i.children(
											'.' +
												a.slideClass +
												'.' +
												a.slideDuplicateClass +
												'[data-swiper-slide-index="' +
												s.attr('data-swiper-slide-index') +
												'"]'
									  )
								).addClass(a.slideDuplicatePrevClass))
					},
					updateActiveIndex: function (e) {
						var t = this,
							a = t.rtlTranslate ? t.translate : -t.translate,
							i = t.slidesGrid,
							s = t.snapGrid,
							r = t.params,
							n = t.activeIndex,
							o = t.realIndex,
							l = t.snapIndex,
							d = e
						if (void 0 === d) {
							for (var p = 0; p < i.length; p += 1)
								void 0 !== i[p + 1]
									? a >= i[p] && a < i[p + 1] - (i[p + 1] - i[p]) / 2
										? (d = p)
										: a >= i[p] && a < i[p + 1] && (d = p + 1)
									: a >= i[p] && (d = p)
							r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
						}
						;(r =
							0 <= s.indexOf(a)
								? s.indexOf(a)
								: Math.floor(d / r.slidesPerGroup)) >= s.length &&
							(r = s.length - 1),
							d !== n
								? ((s = parseInt(
										t.slides.eq(d).attr('data-swiper-slide-index') || d,
										10
								  )),
								  R.extend(t, {
										snapIndex: r,
										realIndex: s,
										previousIndex: n,
										activeIndex: d,
								  }),
								  t.emit('activeIndexChange'),
								  t.emit('snapIndexChange'),
								  o !== s && t.emit('realIndexChange'),
								  (t.initialized || t.runCallbacksOnInit) &&
										t.emit('slideChange'))
								: r !== l && ((t.snapIndex = r), t.emit('snapIndexChange'))
					},
					updateClickedSlide: function (e) {
						var t = this,
							a = t.params,
							i = E(e.target).closest('.' + a.slideClass)[0],
							s = !1
						if (i)
							for (var r = 0; r < t.slides.length; r += 1)
								t.slides[r] === i && (s = !0)
						if (!i || !s)
							return (t.clickedSlide = void 0), void (t.clickedIndex = void 0)
						;(t.clickedSlide = i),
							t.virtual && t.params.virtual.enabled
								? (t.clickedIndex = parseInt(
										E(i).attr('data-swiper-slide-index'),
										10
								  ))
								: (t.clickedIndex = E(i).index()),
							a.slideToClickedSlide &&
								void 0 !== t.clickedIndex &&
								t.clickedIndex !== t.activeIndex &&
								t.slideToClickedSlide()
					},
				},
				p = {
					getTranslate: function (e) {
						void 0 === e && (e = this.isHorizontal() ? 'x' : 'y')
						var t = this.params,
							a = this.rtlTranslate,
							i = this.translate,
							s = this.$wrapperEl
						if (t.virtualTranslate) return a ? -i : i
						e = R.getTranslate(s[0], e)
						return (e = a ? -e : e) || 0
					},
					setTranslate: function (e, t) {
						var a = this,
							i = a.rtlTranslate,
							s = a.params,
							r = a.$wrapperEl,
							n = a.progress,
							o = 0,
							l = 0
						a.isHorizontal() ? (o = i ? -e : e) : (l = e),
							s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
							s.virtualTranslate ||
								(q.transforms3d
									? r.transform('translate3d(' + o + 'px, ' + l + 'px, 0px)')
									: r.transform('translate(' + o + 'px, ' + l + 'px)')),
							(a.previousTranslate = a.translate),
							(a.translate = a.isHorizontal() ? o : l)
						l = a.maxTranslate() - a.minTranslate()
						;(0 == l ? 0 : (e - a.minTranslate()) / l) !== n &&
							a.updateProgress(e),
							a.emit('setTranslate', a.translate, t)
					},
					minTranslate: function () {
						return -this.snapGrid[0]
					},
					maxTranslate: function () {
						return -this.snapGrid[this.snapGrid.length - 1]
					},
				},
				u = {
					slideTo: function (e, t, a, i) {
						void 0 === t && (t = this.params.speed), void 0 === a && (a = !0)
						var s = this,
							r = (e = void 0 === e ? 0 : e)
						r < 0 && (r = 0)
						var n = s.params,
							o = s.snapGrid,
							l = s.slidesGrid,
							d = s.previousIndex,
							p = s.activeIndex,
							c = s.rtlTranslate
						if (s.animating && n.preventInteractionOnTransition) return !1
						e = Math.floor(r / n.slidesPerGroup)
						e >= o.length && (e = o.length - 1),
							(p || n.initialSlide || 0) === (d || 0) &&
								a &&
								s.emit('beforeSlideChangeStart')
						var u,
							h = -o[e]
						if ((s.updateProgress(h), n.normalizeSlideIndex))
							for (var v = 0; v < l.length; v += 1)
								-Math.floor(100 * h) >= Math.floor(100 * l[v]) && (r = v)
						if (s.initialized && r !== p) {
							if (!s.allowSlideNext && h < s.translate && h < s.minTranslate())
								return !1
							if (
								!s.allowSlidePrev &&
								h > s.translate &&
								h > s.maxTranslate() &&
								(p || 0) !== r
							)
								return !1
						}
						return (
							(u = p < r ? 'next' : r < p ? 'prev' : 'reset'),
							(c && -h === s.translate) || (!c && h === s.translate)
								? (s.updateActiveIndex(r),
								  n.autoHeight && s.updateAutoHeight(),
								  s.updateSlidesClasses(),
								  'slide' !== n.effect && s.setTranslate(h),
								  'reset' != u &&
										(s.transitionStart(a, u), s.transitionEnd(a, u)),
								  !1)
								: (0 !== t && q.transition
										? (s.setTransition(t),
										  s.setTranslate(h),
										  s.updateActiveIndex(r),
										  s.updateSlidesClasses(),
										  s.emit('beforeTransitionStart', t, i),
										  s.transitionStart(a, u),
										  s.animating ||
												((s.animating = !0),
												s.onSlideToWrapperTransitionEnd ||
													(s.onSlideToWrapperTransitionEnd = function (e) {
														s &&
															!s.destroyed &&
															e.target === this &&
															(s.$wrapperEl[0].removeEventListener(
																'transitionend',
																s.onSlideToWrapperTransitionEnd
															),
															s.$wrapperEl[0].removeEventListener(
																'webkitTransitionEnd',
																s.onSlideToWrapperTransitionEnd
															),
															(s.onSlideToWrapperTransitionEnd = null),
															delete s.onSlideToWrapperTransitionEnd,
															s.transitionEnd(a, u))
													}),
												s.$wrapperEl[0].addEventListener(
													'transitionend',
													s.onSlideToWrapperTransitionEnd
												),
												s.$wrapperEl[0].addEventListener(
													'webkitTransitionEnd',
													s.onSlideToWrapperTransitionEnd
												)))
										: (s.setTransition(0),
										  s.setTranslate(h),
										  s.updateActiveIndex(r),
										  s.updateSlidesClasses(),
										  s.emit('beforeTransitionStart', t, i),
										  s.transitionStart(a, u),
										  s.transitionEnd(a, u)),
								  !0)
						)
					},
					slideToLoop: function (e, t, a, i) {
						void 0 === t && (t = this.params.speed)
						e = void 0 === e ? 0 : e
						return (
							this.params.loop && (e += this.loopedSlides),
							this.slideTo(e, t, (a = void 0 === a ? !0 : a), i)
						)
					},
					slideNext: function (e, t, a) {
						void 0 === e && (e = this.params.speed), void 0 === t && (t = !0)
						var i = this,
							s = i.params,
							r = i.animating
						return s.loop
							? !r &&
									(i.loopFix(),
									(i._clientLeft = i.$wrapperEl[0].clientLeft),
									i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a))
							: i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
					},
					slidePrev: function (e, t, a) {
						void 0 === e && (e = this.params.speed), void 0 === t && (t = !0)
						var i = this,
							s = i.params,
							r = i.animating,
							n = i.snapGrid,
							o = i.slidesGrid,
							l = i.rtlTranslate
						if (s.loop) {
							if (r) return !1
							i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft)
						}
						function d(e) {
							return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
						}
						var p,
							r = d(l ? i.translate : -i.translate),
							l = n.map(d),
							r = (o.map(d), n[l.indexOf(r)], n[l.indexOf(r) - 1])
						return (
							void 0 !== r && (p = o.indexOf(r)) < 0 && (p = i.activeIndex - 1),
							i.slideTo(p, e, t, a)
						)
					},
					slideReset: function (e, t, a) {
						return (
							void 0 === e && (e = this.params.speed),
							this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), a)
						)
					},
					slideToClosest: function (e, t, a) {
						void 0 === e && (e = this.params.speed), void 0 === t && (t = !0)
						var i,
							s,
							r = this,
							n = r.activeIndex,
							o = Math.floor(n / r.params.slidesPerGroup)
						return (
							o < r.snapGrid.length - 1 &&
								((i = r.rtlTranslate ? r.translate : -r.translate),
								(s = r.snapGrid[o]),
								(r.snapGrid[o + 1] - s) / 2 < i - s &&
									(n = r.params.slidesPerGroup)),
							r.slideTo(n, e, t, a)
						)
					},
					slideToClickedSlide: function () {
						var e,
							t = this,
							a = t.params,
							i = t.$wrapperEl,
							s =
								'auto' === a.slidesPerView
									? t.slidesPerViewDynamic()
									: a.slidesPerView,
							r = t.clickedIndex
						a.loop
							? t.animating ||
							  ((e = parseInt(
									E(t.clickedSlide).attr('data-swiper-slide-index'),
									10
							  )),
							  a.centeredSlides
									? r < t.loopedSlides - s / 2 ||
									  r > t.slides.length - t.loopedSlides + s / 2
										? (t.loopFix(),
										  (r = i
												.children(
													'.' +
														a.slideClass +
														'[data-swiper-slide-index="' +
														e +
														'"]:not(.' +
														a.slideDuplicateClass +
														')'
												)
												.eq(0)
												.index()),
										  R.nextTick(function () {
												t.slideTo(r)
										  }))
										: t.slideTo(r)
									: r > t.slides.length - s
									? (t.loopFix(),
									  (r = i
											.children(
												'.' +
													a.slideClass +
													'[data-swiper-slide-index="' +
													e +
													'"]:not(.' +
													a.slideDuplicateClass +
													')'
											)
											.eq(0)
											.index()),
									  R.nextTick(function () {
											t.slideTo(r)
									  }))
									: t.slideTo(r))
							: t.slideTo(r)
					},
				},
				h = {
					loopCreate: function () {
						var i = this,
							e = i.params,
							t = i.$wrapperEl
						t.children(
							'.' + e.slideClass + '.' + e.slideDuplicateClass
						).remove()
						var s = t.children('.' + e.slideClass)
						if (e.loopFillGroupWithBlank) {
							var a = e.slidesPerGroup - (s.length % e.slidesPerGroup)
							if (a !== e.slidesPerGroup) {
								for (var r = 0; r < a; r += 1) {
									var n = E(c.createElement('div')).addClass(
										e.slideClass + ' ' + e.slideBlankClass
									)
									t.append(n)
								}
								s = t.children('.' + e.slideClass)
							}
						}
						'auto' !== e.slidesPerView ||
							e.loopedSlides ||
							(e.loopedSlides = s.length),
							(i.loopedSlides = parseInt(
								e.loopedSlides || e.slidesPerView,
								10
							)),
							(i.loopedSlides += e.loopAdditionalSlides),
							i.loopedSlides > s.length && (i.loopedSlides = s.length)
						var o = [],
							l = []
						s.each(function (e, t) {
							var a = E(t)
							e < i.loopedSlides && l.push(t),
								e < s.length && e >= s.length - i.loopedSlides && o.push(t),
								a.attr('data-swiper-slide-index', e)
						})
						for (var d = 0; d < l.length; d += 1)
							t.append(E(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass))
						for (var p = o.length - 1; 0 <= p; --p)
							t.prepend(E(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
					},
					loopFix: function () {
						var e,
							t = this,
							a = t.params,
							i = t.activeIndex,
							s = t.slides,
							r = t.loopedSlides,
							n = t.allowSlidePrev,
							o = t.allowSlideNext,
							l = t.snapGrid,
							d = t.rtlTranslate
						;(t.allowSlidePrev = !0), (t.allowSlideNext = !0)
						l = -l[i] - t.getTranslate()
						i < r
							? ((e = s.length - 3 * r + i),
							  t.slideTo((e += r), 0, !1, !0) &&
									0 != l &&
									t.setTranslate((d ? -t.translate : t.translate) - l))
							: (('auto' === a.slidesPerView && 2 * r <= i) ||
									i >= s.length - r) &&
							  ((e = -s.length + i + r),
							  t.slideTo((e += r), 0, !1, !0) &&
									0 != l &&
									t.setTranslate((d ? -t.translate : t.translate) - l)),
							(t.allowSlidePrev = n),
							(t.allowSlideNext = o)
					},
					loopDestroy: function () {
						var e = this.$wrapperEl,
							t = this.params,
							a = this.slides
						e
							.children(
								'.' +
									t.slideClass +
									'.' +
									t.slideDuplicateClass +
									',.' +
									t.slideClass +
									'.' +
									t.slideBlankClass
							)
							.remove(),
							a.removeAttr('data-swiper-slide-index')
					},
				},
				v = {
					setGrabCursor: function (e) {
						var t
						q.touch ||
							!this.params.simulateTouch ||
							(this.params.watchOverflow && this.isLocked) ||
							(((t = this.el).style.cursor = 'move'),
							(t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
							(t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
							(t.style.cursor = e ? 'grabbing' : 'grab'))
					},
					unsetGrabCursor: function () {
						q.touch ||
							(this.params.watchOverflow && this.isLocked) ||
							(this.el.style.cursor = '')
					},
				},
				m = {
					appendSlide: function (e) {
						var t = this,
							a = t.$wrapperEl,
							i = t.params
						if (
							(i.loop && t.loopDestroy(), 'object' == typeof e && 'length' in e)
						)
							for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s])
						else a.append(e)
						i.loop && t.loopCreate(), (i.observer && q.observer) || t.update()
					},
					prependSlide: function (e) {
						var t = this,
							a = t.params,
							i = t.$wrapperEl,
							s = t.activeIndex
						a.loop && t.loopDestroy()
						var r = s + 1
						if ('object' == typeof e && 'length' in e) {
							for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n])
							r = s + e.length
						} else i.prepend(e)
						a.loop && t.loopCreate(),
							(a.observer && q.observer) || t.update(),
							t.slideTo(r, 0, !1)
					},
					addSlide: function (e, t) {
						var a = this,
							i = a.$wrapperEl,
							s = a.params,
							r = a.activeIndex
						s.loop &&
							((r -= a.loopedSlides),
							a.loopDestroy(),
							(a.slides = i.children('.' + s.slideClass)))
						var n = a.slides.length
						if (e <= 0) a.prependSlide(t)
						else if (n <= e) a.appendSlide(t)
						else {
							for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; --d) {
								var p = a.slides.eq(d)
								p.remove(), l.unshift(p)
							}
							if ('object' == typeof t && 'length' in t) {
								for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c])
								o = e < r ? r + t.length : r
							} else i.append(t)
							for (var u = 0; u < l.length; u += 1) i.append(l[u])
							s.loop && a.loopCreate(),
								(s.observer && q.observer) || a.update(),
								s.loop
									? a.slideTo(o + a.loopedSlides, 0, !1)
									: a.slideTo(o, 0, !1)
						}
					},
					removeSlide: function (e) {
						var t = this,
							a = t.params,
							i = t.$wrapperEl,
							s = t.activeIndex
						a.loop &&
							((s -= t.loopedSlides),
							t.loopDestroy(),
							(t.slides = i.children('.' + a.slideClass)))
						var r,
							n = s
						if ('object' == typeof e && 'length' in e) {
							for (var o = 0; o < e.length; o += 1)
								(r = e[o]), t.slides[r] && t.slides.eq(r).remove(), r < n && --n
							n = Math.max(n, 0)
						} else
							t.slides[(r = e)] && t.slides.eq(r).remove(),
								r < n && --n,
								(n = Math.max(n, 0))
						a.loop && t.loopCreate(),
							(a.observer && q.observer) || t.update(),
							a.loop
								? t.slideTo(n + t.loopedSlides, 0, !1)
								: t.slideTo(n, 0, !1)
					},
					removeAllSlides: function () {
						for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t)
						this.removeSlide(e)
					},
				},
				f =
					((M = F.navigator.userAgent),
					(P = {
						ios: !1,
						android: !1,
						androidChrome: !1,
						desktop: !1,
						windows: !1,
						iphone: !1,
						ipod: !1,
						ipad: !1,
						cordova: F.cordova || F.phonegap,
						phonegap: F.cordova || F.phonegap,
					}),
					(s = M.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)),
					(n = M.match(/(Android);?[\s\/]+([\d.]+)?/)),
					(C = M.match(/(iPad).*OS\s([\d_]+)/)),
					(o = M.match(/(iPod)(.*OS\s([\d_]+))?/)),
					(a = !C && M.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
					s && ((P.os = 'windows'), (P.osVersion = s[2]), (P.windows = !0)),
					n &&
						!s &&
						((P.os = 'android'),
						(P.osVersion = n[2]),
						(P.android = !0),
						(P.androidChrome = 0 <= M.toLowerCase().indexOf('chrome'))),
					(C || a || o) && ((P.os = 'ios'), (P.ios = !0)),
					a && !o && ((P.osVersion = a[2].replace(/_/g, '.')), (P.iphone = !0)),
					C && ((P.osVersion = C[2].replace(/_/g, '.')), (P.ipad = !0)),
					o &&
						((P.osVersion = o[3] ? o[3].replace(/_/g, '.') : null),
						(P.iphone = !0)),
					P.ios &&
						P.osVersion &&
						0 <= M.indexOf('Version/') &&
						'10' === P.osVersion.split('.')[0] &&
						(P.osVersion = M.toLowerCase().split('version/')[1].split(' ')[0]),
					(P.desktop = !(P.os || P.android || P.webView)),
					(P.webView = (a || C || o) && M.match(/.*AppleWebKit(?!.*Safari)/i)),
					P.os &&
						'ios' === P.os &&
						((C = P.osVersion.split('.')),
						(M = c.querySelector('meta[name="viewport"]')),
						(P.minimalUi =
							!P.webView &&
							(o || a) &&
							(7 == +C[0] ? 1 <= +C[1] : 7 < +C[0]) &&
							M &&
							0 <= M.getAttribute('content').indexOf('minimal-ui'))),
					(P.pixelRatio = F.devicePixelRatio || 1),
					P)
			function g() {
				var e,
					t,
					a,
					i = this,
					s = i.params,
					r = i.el
				;(r && 0 === r.offsetWidth) ||
					(s.breakpoints && i.setBreakpoint(),
					(e = i.allowSlideNext),
					(t = i.allowSlidePrev),
					(a = i.snapGrid),
					(i.allowSlideNext = !0),
					(i.allowSlidePrev = !0),
					i.updateSize(),
					i.updateSlides(),
					s.freeMode
						? ((r = Math.min(
								Math.max(i.translate, i.maxTranslate()),
								i.minTranslate()
						  )),
						  i.setTranslate(r),
						  i.updateActiveIndex(),
						  i.updateSlidesClasses(),
						  s.autoHeight && i.updateAutoHeight())
						: (i.updateSlidesClasses(),
						  ('auto' === s.slidesPerView || 1 < s.slidesPerView) &&
						  i.isEnd &&
						  !i.params.centeredSlides
								? i.slideTo(i.slides.length - 1, 0, !1, !0)
								: i.slideTo(i.activeIndex, 0, !1, !0)),
					i.autoplay &&
						i.autoplay.running &&
						i.autoplay.paused &&
						i.autoplay.run(),
					(i.allowSlidePrev = t),
					(i.allowSlideNext = e),
					i.params.watchOverflow && a !== i.snapGrid && i.checkOverflow())
			}
			var b = !1
			function w() {}
			var y = {
					init: !0,
					direction: 'horizontal',
					touchEventsTarget: 'container',
					initialSlide: 0,
					speed: 300,
					preventInteractionOnTransition: !1,
					edgeSwipeDetection: !1,
					edgeSwipeThreshold: 20,
					freeMode: !1,
					freeModeMomentum: !0,
					freeModeMomentumRatio: 1,
					freeModeMomentumBounce: !0,
					freeModeMomentumBounceRatio: 1,
					freeModeMomentumVelocityRatio: 1,
					freeModeSticky: !1,
					freeModeMinimumVelocity: 0.02,
					autoHeight: !1,
					setWrapperSize: !1,
					virtualTranslate: !1,
					effect: 'slide',
					breakpoints: void 0,
					breakpointsInverse: !1,
					spaceBetween: 0,
					slidesPerView: 1,
					slidesPerColumn: 1,
					slidesPerColumnFill: 'column',
					slidesPerGroup: 1,
					centeredSlides: !1,
					slidesOffsetBefore: 0,
					slidesOffsetAfter: 0,
					normalizeSlideIndex: !0,
					centerInsufficientSlides: !1,
					watchOverflow: !1,
					roundLengths: !1,
					touchRatio: 1,
					touchAngle: 45,
					simulateTouch: !0,
					shortSwipes: !0,
					longSwipes: !0,
					longSwipesRatio: 0.5,
					longSwipesMs: 300,
					followFinger: !0,
					allowTouchMove: !0,
					threshold: 0,
					touchMoveStopPropagation: !0,
					touchStartPreventDefault: !0,
					touchStartForcePreventDefault: !1,
					touchReleaseOnEdges: !1,
					uniqueNavElements: !0,
					resistance: !0,
					resistanceRatio: 0.85,
					watchSlidesProgress: !1,
					watchSlidesVisibility: !1,
					grabCursor: !1,
					preventClicks: !0,
					preventClicksPropagation: !0,
					slideToClickedSlide: !1,
					preloadImages: !0,
					updateOnImagesReady: !0,
					loop: !1,
					loopAdditionalSlides: 0,
					loopedSlides: null,
					loopFillGroupWithBlank: !1,
					allowSlidePrev: !0,
					allowSlideNext: !0,
					swipeHandler: null,
					noSwiping: !0,
					noSwipingClass: 'swiper-no-swiping',
					noSwipingSelector: null,
					passiveListeners: !0,
					containerModifierClass: 'swiper-container-',
					slideClass: 'swiper-slide',
					slideBlankClass: 'swiper-slide-invisible-blank',
					slideActiveClass: 'swiper-slide-active',
					slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
					slideVisibleClass: 'swiper-slide-visible',
					slideDuplicateClass: 'swiper-slide-duplicate',
					slideNextClass: 'swiper-slide-next',
					slideDuplicateNextClass: 'swiper-slide-duplicate-next',
					slidePrevClass: 'swiper-slide-prev',
					slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
					wrapperClass: 'swiper-wrapper',
					runCallbacksOnInit: !0,
				},
				x = {
					update: d,
					translate: p,
					transition: {
						setTransition: function (e, t) {
							this.$wrapperEl.transition(e), this.emit('setTransition', e, t)
						},
						transitionStart: function (e, t) {
							void 0 === e && (e = !0)
							var a = this,
								i = a.activeIndex,
								s = a.params,
								r = a.previousIndex
							s.autoHeight && a.updateAutoHeight()
							t = (t = t) || (r < i ? 'next' : i < r ? 'prev' : 'reset')
							a.emit('transitionStart'),
								e &&
									i !== r &&
									('reset' !== t
										? (a.emit('slideChangeTransitionStart'),
										  'next' === t
												? a.emit('slideNextTransitionStart')
												: a.emit('slidePrevTransitionStart'))
										: a.emit('slideResetTransitionStart'))
						},
						transitionEnd: function (e, t) {
							void 0 === e && (e = !0)
							var a = this,
								i = a.activeIndex,
								s = a.previousIndex
							;(a.animating = !1), a.setTransition(0)
							t = (t = t) || (s < i ? 'next' : i < s ? 'prev' : 'reset')
							a.emit('transitionEnd'),
								e &&
									i !== s &&
									('reset' !== t
										? (a.emit('slideChangeTransitionEnd'),
										  'next' === t
												? a.emit('slideNextTransitionEnd')
												: a.emit('slidePrevTransitionEnd'))
										: a.emit('slideResetTransitionEnd'))
						},
					},
					slide: u,
					loop: h,
					grabCursor: v,
					manipulation: m,
					events: {
						attachEvents: function () {
							var e = this,
								t = e.params,
								a = e.touchEvents,
								i = e.el,
								s = e.wrapperEl
							;(e.onTouchStart = function (e) {
								var t,
									a,
									i,
									s,
									r = this,
									n = r.touchEventsData,
									o = r.params,
									l = r.touches
								;(r.animating && o.preventInteractionOnTransition) ||
									((t = e).originalEvent && (t = t.originalEvent),
									(n.isTouchEvent = 'touchstart' === t.type),
									(!n.isTouchEvent && 'which' in t && 3 === t.which) ||
										(!n.isTouchEvent && 'button' in t && 0 < t.button) ||
										(n.isTouched && n.isMoved) ||
										(o.noSwiping &&
										E(t.target).closest(
											o.noSwipingSelector || '.' + o.noSwipingClass
										)[0]
											? (r.allowClick = !0)
											: (o.swipeHandler && !E(t).closest(o.swipeHandler)[0]) ||
											  ((l.currentX = ('touchstart' === t.type
													? t.targetTouches[0]
													: t
											  ).pageX),
											  (l.currentY = ('touchstart' === t.type
													? t.targetTouches[0]
													: t
											  ).pageY),
											  (a = l.currentX),
											  (s = l.currentY),
											  (i = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection),
											  (e = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold),
											  (i && (a <= e || a >= F.screen.width - e)) ||
													(R.extend(n, {
														isTouched: !0,
														isMoved: !1,
														allowTouchCallbacks: !0,
														isScrolling: void 0,
														startMoving: void 0,
													}),
													(l.startX = a),
													(l.startY = s),
													(n.touchStartTime = R.now()),
													(r.allowClick = !0),
													r.updateSize(),
													(r.swipeDirection = void 0),
													0 < o.threshold && (n.allowThresholdMove = !1),
													'touchstart' !== t.type &&
														((s = !0),
														E(t.target).is(n.formElements) && (s = !1),
														c.activeElement &&
															E(c.activeElement).is(n.formElements) &&
															c.activeElement !== t.target &&
															c.activeElement.blur(),
														(s =
															s &&
															r.allowTouchMove &&
															o.touchStartPreventDefault),
														(o.touchStartForcePreventDefault || s) &&
															t.preventDefault()),
													r.emit('touchStart', t)))))
							}.bind(e)),
								(e.onTouchMove = function (e) {
									var t = this,
										a = t.touchEventsData,
										i = t.params,
										s = t.touches,
										r = t.rtlTranslate,
										n = e
									if ((n.originalEvent && (n = n.originalEvent), a.isTouched)) {
										if (!a.isTouchEvent || 'mousemove' !== n.type) {
											var o =
													'touchmove' === n.type &&
													n.targetTouches &&
													(n.targetTouches[0] || n.changedTouches[0]),
												l = ('touchmove' === n.type ? o : n).pageX,
												e = ('touchmove' === n.type ? o : n).pageY
											if (n.preventedByNestedSwiper)
												return (s.startX = l), void (s.startY = e)
											if (!t.allowTouchMove)
												return (
													(t.allowClick = !1),
													void (
														a.isTouched &&
														(R.extend(s, {
															startX: l,
															startY: e,
															currentX: l,
															currentY: e,
														}),
														(a.touchStartTime = R.now()))
													)
												)
											if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
												if (t.isVertical()) {
													if (
														(e < s.startY && t.translate <= t.maxTranslate()) ||
														(e > s.startY && t.translate >= t.minTranslate())
													)
														return (a.isTouched = !1), void (a.isMoved = !1)
												} else if (
													(l < s.startX && t.translate <= t.maxTranslate()) ||
													(l > s.startX && t.translate >= t.minTranslate())
												)
													return
											if (
												a.isTouchEvent &&
												c.activeElement &&
												n.target === c.activeElement &&
												E(n.target).is(a.formElements)
											)
												return (a.isMoved = !0), void (t.allowClick = !1)
											if (
												(a.allowTouchCallbacks && t.emit('touchMove', n),
												!(n.targetTouches && 1 < n.targetTouches.length))
											) {
												;(s.currentX = l), (s.currentY = e)
												;(o = s.currentX - s.startX),
													(l = s.currentY - s.startY)
												if (
													!(
														t.params.threshold &&
														Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2)) <
															t.params.threshold
													)
												)
													if (
														(void 0 === a.isScrolling &&
															((t.isHorizontal() && s.currentY === s.startY) ||
															(t.isVertical() && s.currentX === s.startX)
																? (a.isScrolling = !1)
																: 25 <= o * o + l * l &&
																  ((e =
																		(180 *
																			Math.atan2(Math.abs(l), Math.abs(o))) /
																		Math.PI),
																  (a.isScrolling = t.isHorizontal()
																		? e > i.touchAngle
																		: 90 - e > i.touchAngle))),
														a.isScrolling && t.emit('touchMoveOpposite', n),
														void 0 === a.startMoving &&
															((s.currentX === s.startX &&
																s.currentY === s.startY) ||
																(a.startMoving = !0)),
														a.isScrolling)
													)
														a.isTouched = !1
													else if (a.startMoving) {
														;(t.allowClick = !1),
															n.preventDefault(),
															i.touchMoveStopPropagation &&
																!i.nested &&
																n.stopPropagation(),
															a.isMoved ||
																(i.loop && t.loopFix(),
																(a.startTranslate = t.getTranslate()),
																t.setTransition(0),
																t.animating &&
																	t.$wrapperEl.trigger(
																		'webkitTransitionEnd transitionend'
																	),
																(a.allowMomentumBounce = !1),
																!i.grabCursor ||
																	(!0 !== t.allowSlideNext &&
																		!0 !== t.allowSlidePrev) ||
																	t.setGrabCursor(!0),
																t.emit('sliderFirstMove', n)),
															t.emit('sliderMove', n),
															(a.isMoved = !0)
														o = t.isHorizontal() ? o : l
														;(s.diff = o),
															(o *= i.touchRatio),
															(t.swipeDirection =
																0 < (o = r ? -o : o) ? 'prev' : 'next'),
															(a.currentTranslate = o + a.startTranslate)
														;(l = !0), (r = i.resistanceRatio)
														if (
															(i.touchReleaseOnEdges && (r = 0),
															0 < o && a.currentTranslate > t.minTranslate()
																? ((l = !1),
																  i.resistance &&
																		(a.currentTranslate =
																			t.minTranslate() -
																			1 +
																			Math.pow(
																				-t.minTranslate() +
																					a.startTranslate +
																					o,
																				r
																			)))
																: o < 0 &&
																  a.currentTranslate < t.maxTranslate() &&
																  ((l = !1),
																  i.resistance &&
																		(a.currentTranslate =
																			t.maxTranslate() +
																			1 -
																			Math.pow(
																				t.maxTranslate() - a.startTranslate - o,
																				r
																			))),
															l && (n.preventedByNestedSwiper = !0),
															!t.allowSlideNext &&
																'next' === t.swipeDirection &&
																a.currentTranslate < a.startTranslate &&
																(a.currentTranslate = a.startTranslate),
															!t.allowSlidePrev &&
																'prev' === t.swipeDirection &&
																a.currentTranslate > a.startTranslate &&
																(a.currentTranslate = a.startTranslate),
															0 < i.threshold)
														) {
															if (
																!(
																	Math.abs(o) > i.threshold ||
																	a.allowThresholdMove
																)
															)
																return void (a.currentTranslate =
																	a.startTranslate)
															if (!a.allowThresholdMove)
																return (
																	(a.allowThresholdMove = !0),
																	(s.startX = s.currentX),
																	(s.startY = s.currentY),
																	(a.currentTranslate = a.startTranslate),
																	void (s.diff = t.isHorizontal()
																		? s.currentX - s.startX
																		: s.currentY - s.startY)
																)
														}
														i.followFinger &&
															((i.freeMode ||
																i.watchSlidesProgress ||
																i.watchSlidesVisibility) &&
																(t.updateActiveIndex(),
																t.updateSlidesClasses()),
															i.freeMode &&
																(0 === a.velocities.length &&
																	a.velocities.push({
																		position:
																			s[t.isHorizontal() ? 'startX' : 'startY'],
																		time: a.touchStartTime,
																	}),
																a.velocities.push({
																	position:
																		s[
																			t.isHorizontal() ? 'currentX' : 'currentY'
																		],
																	time: R.now(),
																})),
															t.updateProgress(a.currentTranslate),
															t.setTranslate(a.currentTranslate))
													}
											}
										}
									} else
										a.startMoving &&
											a.isScrolling &&
											t.emit('touchMoveOpposite', n)
								}.bind(e)),
								(e.onTouchEnd = function (e) {
									var t = this,
										a = t.touchEventsData,
										i = t.params,
										s = t.touches,
										r = t.rtlTranslate,
										n = t.$wrapperEl,
										o = t.slidesGrid,
										l = t.snapGrid,
										d = e
									if (
										(d.originalEvent && (d = d.originalEvent),
										a.allowTouchCallbacks && t.emit('touchEnd', d),
										(a.allowTouchCallbacks = !1),
										!a.isTouched)
									)
										return (
											a.isMoved && i.grabCursor && t.setGrabCursor(!1),
											(a.isMoved = !1),
											void (a.startMoving = !1)
										)
									i.grabCursor &&
										a.isMoved &&
										a.isTouched &&
										(!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
										t.setGrabCursor(!1)
									var p,
										c = R.now(),
										e = c - a.touchStartTime
									if (
										(t.allowClick &&
											(t.updateClickedSlide(d),
											t.emit('tap', d),
											e < 300 &&
												300 < c - a.lastClickTime &&
												(a.clickTimeout && clearTimeout(a.clickTimeout),
												(a.clickTimeout = R.nextTick(function () {
													t && !t.destroyed && t.emit('click', d)
												}, 300))),
											e < 300 &&
												c - a.lastClickTime < 300 &&
												(a.clickTimeout && clearTimeout(a.clickTimeout),
												t.emit('doubleTap', d))),
										(a.lastClickTime = R.now()),
										R.nextTick(function () {
											t.destroyed || (t.allowClick = !0)
										}),
										!a.isTouched ||
											!a.isMoved ||
											!t.swipeDirection ||
											0 === s.diff ||
											a.currentTranslate === a.startTranslate)
									)
										return (
											(a.isTouched = !1),
											(a.isMoved = !1),
											void (a.startMoving = !1)
										)
									if (
										((a.isTouched = !1),
										(a.isMoved = !1),
										(a.startMoving = !1),
										(p = i.followFinger
											? r
												? t.translate
												: -t.translate
											: -a.currentTranslate),
										i.freeMode)
									)
										if (p < -t.minTranslate()) t.slideTo(t.activeIndex)
										else if (p > -t.maxTranslate())
											t.slides.length < l.length
												? t.slideTo(l.length - 1)
												: t.slideTo(t.slides.length - 1)
										else {
											if (i.freeModeMomentum) {
												1 < a.velocities.length
													? ((g = a.velocities.pop()),
													  (h = a.velocities.pop()),
													  (u = g.position - h.position),
													  (h = g.time - h.time),
													  (t.velocity = u / h),
													  (t.velocity /= 2),
													  Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
															(t.velocity = 0),
													  (150 < h || 300 < R.now() - g.time) &&
															(t.velocity = 0))
													: (t.velocity = 0),
													(t.velocity *= i.freeModeMomentumVelocityRatio),
													(a.velocities.length = 0)
												var u = 1e3 * i.freeModeMomentumRatio,
													h = t.velocity * u,
													v = t.translate + h
												r && (v = -v)
												var m,
													f,
													g = !1,
													h =
														20 *
														Math.abs(t.velocity) *
														i.freeModeMomentumBounceRatio
												if (v < t.maxTranslate())
													i.freeModeMomentumBounce
														? (v + t.maxTranslate() < -h &&
																(v = t.maxTranslate() - h),
														  (m = t.maxTranslate()),
														  (a.allowMomentumBounce = g = !0))
														: (v = t.maxTranslate()),
														i.loop && i.centeredSlides && (f = !0)
												else if (v > t.minTranslate())
													i.freeModeMomentumBounce
														? (v - t.minTranslate() > h &&
																(v = t.minTranslate() + h),
														  (m = t.minTranslate()),
														  (a.allowMomentumBounce = g = !0))
														: (v = t.minTranslate()),
														i.loop && i.centeredSlides && (f = !0)
												else if (i.freeModeSticky) {
													for (var b, w = 0; w < l.length; w += 1)
														if (l[w] > -v) {
															b = w
															break
														}
													v = -(Math.abs(l[b] - v) < Math.abs(l[b - 1] - v) ||
													'next' === t.swipeDirection
														? l[b]
														: l[b - 1])
												}
												if (
													(f &&
														t.once('transitionEnd', function () {
															t.loopFix()
														}),
													0 !== t.velocity)
												)
													u = r
														? Math.abs((-v - t.translate) / t.velocity)
														: Math.abs((v - t.translate) / t.velocity)
												else if (i.freeModeSticky)
													return void t.slideToClosest()
												i.freeModeMomentumBounce && g
													? (t.updateProgress(m),
													  t.setTransition(u),
													  t.setTranslate(v),
													  t.transitionStart(!0, t.swipeDirection),
													  (t.animating = !0),
													  n.transitionEnd(function () {
															t &&
																!t.destroyed &&
																a.allowMomentumBounce &&
																(t.emit('momentumBounce'),
																t.setTransition(i.speed),
																t.setTranslate(m),
																n.transitionEnd(function () {
																	t && !t.destroyed && t.transitionEnd()
																}))
													  }))
													: t.velocity
													? (t.updateProgress(v),
													  t.setTransition(u),
													  t.setTranslate(v),
													  t.transitionStart(!0, t.swipeDirection),
													  t.animating ||
															((t.animating = !0),
															n.transitionEnd(function () {
																t && !t.destroyed && t.transitionEnd()
															})))
													: t.updateProgress(v),
													t.updateActiveIndex(),
													t.updateSlidesClasses()
											} else if (i.freeModeSticky)
												return void t.slideToClosest()
											;(!i.freeModeMomentum || e >= i.longSwipesMs) &&
												(t.updateProgress(),
												t.updateActiveIndex(),
												t.updateSlidesClasses())
										}
									else {
										for (
											var y = 0, x = t.slidesSizesGrid[0], T = 0;
											T < o.length;
											T += i.slidesPerGroup
										)
											void 0 !== o[T + i.slidesPerGroup]
												? p >= o[T] &&
												  p < o[T + i.slidesPerGroup] &&
												  (x = o[(y = T) + i.slidesPerGroup] - o[T])
												: p >= o[T] &&
												  ((y = T), (x = o[o.length - 1] - o[o.length - 2]))
										u = (p - o[y]) / x
										e > i.longSwipesMs
											? i.longSwipes
												? ('next' === t.swipeDirection &&
														(u >= i.longSwipesRatio
															? t.slideTo(y + i.slidesPerGroup)
															: t.slideTo(y)),
												  'prev' === t.swipeDirection &&
														(u > 1 - i.longSwipesRatio
															? t.slideTo(y + i.slidesPerGroup)
															: t.slideTo(y)))
												: t.slideTo(t.activeIndex)
											: i.shortSwipes
											? ('next' === t.swipeDirection &&
													t.slideTo(y + i.slidesPerGroup),
											  'prev' === t.swipeDirection && t.slideTo(y))
											: t.slideTo(t.activeIndex)
									}
								}.bind(e)),
								(e.onClick = function (e) {
									this.allowClick ||
										(this.params.preventClicks && e.preventDefault(),
										this.params.preventClicksPropagation &&
											this.animating &&
											(e.stopPropagation(), e.stopImmediatePropagation()))
								}.bind(e))
							var r = 'container' === t.touchEventsTarget ? i : s,
								i = !!t.nested
							q.touch || (!q.pointerEvents && !q.prefixedPointerEvents)
								? (q.touch &&
										((s = !(
											'touchstart' !== a.start ||
											!q.passiveListener ||
											!t.passiveListeners
										) && {
											passive: !0,
											capture: !1,
										}),
										r.addEventListener(a.start, e.onTouchStart, s),
										r.addEventListener(
											a.move,
											e.onTouchMove,
											q.passiveListener
												? {
														passive: !1,
														capture: i,
												  }
												: i
										),
										r.addEventListener(a.end, e.onTouchEnd, s),
										b || (c.addEventListener('touchstart', w), (b = !0))),
								  ((t.simulateTouch && !f.ios && !f.android) ||
										(t.simulateTouch && !q.touch && f.ios)) &&
										(r.addEventListener('mousedown', e.onTouchStart, !1),
										c.addEventListener('mousemove', e.onTouchMove, i),
										c.addEventListener('mouseup', e.onTouchEnd, !1)))
								: (r.addEventListener(a.start, e.onTouchStart, !1),
								  c.addEventListener(a.move, e.onTouchMove, i),
								  c.addEventListener(a.end, e.onTouchEnd, !1)),
								(t.preventClicks || t.preventClicksPropagation) &&
									r.addEventListener('click', e.onClick, !0),
								e.on(
									f.ios || f.android
										? 'resize orientationchange observerUpdate'
										: 'resize observerUpdate',
									g,
									!0
								)
						},
						detachEvents: function () {
							var e = this,
								t = e.params,
								a = e.touchEvents,
								i = e.el,
								s = e.wrapperEl,
								r = 'container' === t.touchEventsTarget ? i : s,
								i = !!t.nested
							q.touch || (!q.pointerEvents && !q.prefixedPointerEvents)
								? (q.touch &&
										((s = !(
											'onTouchStart' !== a.start ||
											!q.passiveListener ||
											!t.passiveListeners
										) && {
											passive: !0,
											capture: !1,
										}),
										r.removeEventListener(a.start, e.onTouchStart, s),
										r.removeEventListener(a.move, e.onTouchMove, i),
										r.removeEventListener(a.end, e.onTouchEnd, s)),
								  ((t.simulateTouch && !f.ios && !f.android) ||
										(t.simulateTouch && !q.touch && f.ios)) &&
										(r.removeEventListener('mousedown', e.onTouchStart, !1),
										c.removeEventListener('mousemove', e.onTouchMove, i),
										c.removeEventListener('mouseup', e.onTouchEnd, !1)))
								: (r.removeEventListener(a.start, e.onTouchStart, !1),
								  c.removeEventListener(a.move, e.onTouchMove, i),
								  c.removeEventListener(a.end, e.onTouchEnd, !1)),
								(t.preventClicks || t.preventClicksPropagation) &&
									r.removeEventListener('click', e.onClick, !0),
								e.off(
									f.ios || f.android
										? 'resize orientationchange observerUpdate'
										: 'resize observerUpdate',
									g
								)
						},
					},
					breakpoints: {
						setBreakpoint: function () {
							var e = this,
								t = e.activeIndex,
								a = e.initialized,
								i = e.loopedSlides
							void 0 === i && (i = 0)
							var s,
								r,
								n,
								o = e.params,
								l = o.breakpoints
							!l ||
								(l && 0 === Object.keys(l).length) ||
								((s = e.getBreakpoint(l)) &&
									e.currentBreakpoint !== s &&
									((r = s in l ? l[s] : void 0) &&
										['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(
											function (e) {
												var t = r[e]
												void 0 !== t &&
													(r[e] =
														'slidesPerView' !== e ||
														('AUTO' !== t && 'auto' !== t)
															? 'slidesPerView' === e
																? parseFloat(t)
																: parseInt(t, 10)
															: 'auto')
											}
										),
									(l =
										(n = r || e.originalParams).direction &&
										n.direction !== o.direction),
									(o = o.loop && (n.slidesPerView !== o.slidesPerView || l)),
									l && a && e.changeDirection(),
									R.extend(e.params, n),
									R.extend(e, {
										allowTouchMove: e.params.allowTouchMove,
										allowSlideNext: e.params.allowSlideNext,
										allowSlidePrev: e.params.allowSlidePrev,
									}),
									(e.currentBreakpoint = s),
									o &&
										a &&
										(e.loopDestroy(),
										e.loopCreate(),
										e.updateSlides(),
										e.slideTo(t - i + e.loopedSlides, 0, !1)),
									e.emit('breakpoint', n)))
						},
						getBreakpoint: function (e) {
							if (e) {
								var t = !1,
									a = []
								Object.keys(e).forEach(function (e) {
									a.push(e)
								}),
									a.sort(function (e, t) {
										return parseInt(e, 10) - parseInt(t, 10)
									})
								for (var i = 0; i < a.length; i += 1) {
									var s = a[i]
									this.params.breakpointsInverse
										? s <= F.innerWidth && (t = s)
										: s >= F.innerWidth && !t && (t = s)
								}
								return t || 'max'
							}
						},
					},
					checkOverflow: {
						checkOverflow: function () {
							var e = this,
								t = e.isLocked
							;(e.isLocked = 1 === e.snapGrid.length),
								(e.allowSlideNext = !e.isLocked),
								(e.allowSlidePrev = !e.isLocked),
								t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'),
								t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update())
						},
					},
					classes: {
						addClasses: function () {
							var t = this.classNames,
								a = this.params,
								e = this.rtl,
								i = this.$el,
								s = []
							s.push('initialized'),
								s.push(a.direction),
								a.freeMode && s.push('free-mode'),
								q.flexbox || s.push('no-flexbox'),
								a.autoHeight && s.push('autoheight'),
								e && s.push('rtl'),
								1 < a.slidesPerColumn && s.push('multirow'),
								f.android && s.push('android'),
								f.ios && s.push('ios'),
								(W.isIE || W.isEdge) &&
									(q.pointerEvents || q.prefixedPointerEvents) &&
									s.push('wp8-' + a.direction),
								s.forEach(function (e) {
									t.push(a.containerModifierClass + e)
								}),
								i.addClass(t.join(' '))
						},
						removeClasses: function () {
							var e = this.$el,
								t = this.classNames
							e.removeClass(t.join(' '))
						},
					},
					images: {
						loadImage: function (e, t, a, i, s, r) {
							function n() {
								r && r()
							}
							;(!e.complete || !s) && t
								? (((s = new F.Image()).onload = n),
								  (s.onerror = n),
								  i && (s.sizes = i),
								  a && (s.srcset = a),
								  t && (s.src = t))
								: n()
						},
						preloadImages: function () {
							var e = this
							function t() {
								null != e &&
									e &&
									!e.destroyed &&
									(void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
									e.imagesLoaded === e.imagesToLoad.length &&
										(e.params.updateOnImagesReady && e.update(),
										e.emit('imagesReady')))
							}
							e.imagesToLoad = e.$el.find('img')
							for (var a = 0; a < e.imagesToLoad.length; a += 1) {
								var i = e.imagesToLoad[a]
								e.loadImage(
									i,
									i.currentSrc || i.getAttribute('src'),
									i.srcset || i.getAttribute('srcset'),
									i.sizes || i.getAttribute('sizes'),
									!0,
									t
								)
							}
						},
					},
				},
				T = {},
				S = (function (l) {
					function d() {
						for (var e, a, t = [], i = arguments.length; i--; )
							t[i] = arguments[i]
						;(a =
							(a =
								1 === t.length &&
								t[0].constructor &&
								t[0].constructor === Object
									? t[0]
									: ((e = t[0]), t[1])) || {}),
							(a = R.extend({}, a)),
							e && !a.el && (a.el = e),
							l.call(this, a),
							Object.keys(x).forEach(function (t) {
								Object.keys(x[t]).forEach(function (e) {
									d.prototype[e] || (d.prototype[e] = x[t][e])
								})
							})
						var s = this
						void 0 === s.modules && (s.modules = {}),
							Object.keys(s.modules).forEach(function (e) {
								var t = s.modules[e]
								t.params &&
									((e = Object.keys(t.params)[0]),
									'object' == typeof (t = t.params[e]) &&
										null !== t &&
										e in a &&
										'enabled' in t &&
										(!0 === a[e] &&
											(a[e] = {
												enabled: !0,
											}),
										'object' != typeof a[e] ||
											'enabled' in a[e] ||
											(a[e].enabled = !0),
										a[e] ||
											(a[e] = {
												enabled: !1,
											})))
							})
						var r = R.extend({}, y)
						s.useModulesParams(r),
							(s.params = R.extend({}, r, T, a)),
							(s.originalParams = R.extend({}, s.params)),
							(s.passedParams = R.extend({}, a))
						var n = (s.$ = E)(s.params.el)
						if ((e = n[0])) {
							if (1 < n.length) {
								var o = []
								return (
									n.each(function (e, t) {
										t = R.extend({}, a, {
											el: t,
										})
										o.push(new d(t))
									}),
									o
								)
							}
							;(e.swiper = s), n.data('swiper', s)
							var r = n.children('.' + s.params.wrapperClass)
							return (
								R.extend(s, {
									$el: n,
									el: e,
									$wrapperEl: r,
									wrapperEl: r[0],
									classNames: [],
									slides: E(),
									slidesGrid: [],
									snapGrid: [],
									slidesSizesGrid: [],
									isHorizontal: function () {
										return 'horizontal' === s.params.direction
									},
									isVertical: function () {
										return 'vertical' === s.params.direction
									},
									rtl:
										'rtl' === e.dir.toLowerCase() ||
										'rtl' === n.css('direction'),
									rtlTranslate:
										'horizontal' === s.params.direction &&
										('rtl' === e.dir.toLowerCase() ||
											'rtl' === n.css('direction')),
									wrongRTL: '-webkit-box' === r.css('display'),
									activeIndex: 0,
									realIndex: 0,
									isBeginning: !0,
									isEnd: !1,
									translate: 0,
									previousTranslate: 0,
									progress: 0,
									velocity: 0,
									animating: !1,
									allowSlideNext: s.params.allowSlideNext,
									allowSlidePrev: s.params.allowSlidePrev,
									touchEvents:
										((n = ['mousedown', 'mousemove', 'mouseup']),
										q.pointerEvents
											? (n = ['pointerdown', 'pointermove', 'pointerup'])
											: q.prefixedPointerEvents &&
											  (n = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp']),
										(s.touchEventsTouch = {
											start: (r = ['touchstart', 'touchmove', 'touchend'])[0],
											move: r[1],
											end: r[2],
										}),
										(s.touchEventsDesktop = {
											start: n[0],
											move: n[1],
											end: n[2],
										}),
										q.touch || !s.params.simulateTouch
											? s.touchEventsTouch
											: s.touchEventsDesktop),
									touchEventsData: {
										isTouched: void 0,
										isMoved: void 0,
										allowTouchCallbacks: void 0,
										touchStartTime: void 0,
										isScrolling: void 0,
										currentTranslate: void 0,
										startTranslate: void 0,
										allowThresholdMove: void 0,
										formElements:
											'input, select, option, textarea, button, video',
										lastClickTime: R.now(),
										clickTimeout: void 0,
										velocities: [],
										allowMomentumBounce: void 0,
										isTouchEvent: void 0,
										startMoving: void 0,
									},
									allowClick: !0,
									allowTouchMove: s.params.allowTouchMove,
									touches: {
										startX: 0,
										startY: 0,
										currentX: 0,
										currentY: 0,
										diff: 0,
									},
									imagesToLoad: [],
									imagesLoaded: 0,
								}),
								s.useModules(),
								s.params.init && s.init(),
								s
							)
						}
					}
					l && (d.__proto__ = l)
					var e = {
						extendedDefaults: {
							configurable: !0,
						},
						defaults: {
							configurable: !0,
						},
						Class: {
							configurable: !0,
						},
						$: {
							configurable: !0,
						},
					}
					return (
						(((d.prototype = Object.create(
							l && l.prototype
						)).constructor = d).prototype.slidesPerViewDynamic = function () {
							var e = this,
								t = e.params,
								a = e.slides,
								i = e.slidesGrid,
								s = e.size,
								r = e.activeIndex,
								n = 1
							if (t.centeredSlides) {
								for (
									var o, l = a[r].swiperSlideSize, d = r + 1;
									d < a.length;
									d += 1
								)
									a[d] &&
										!o &&
										((n += 1), s < (l += a[d].swiperSlideSize) && (o = !0))
								for (var p = r - 1; 0 <= p; --p)
									a[p] &&
										!o &&
										((n += 1), s < (l += a[p].swiperSlideSize) && (o = !0))
							} else
								for (var c = r + 1; c < a.length; c += 1)
									i[c] - i[r] < s && (n += 1)
							return n
						}),
						(d.prototype.update = function () {
							var e,
								t,
								a = this
							function i() {
								var e = a.rtlTranslate ? -1 * a.translate : a.translate,
									e = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate())
								a.setTranslate(e),
									a.updateActiveIndex(),
									a.updateSlidesClasses()
							}
							a &&
								!a.destroyed &&
								((e = a.snapGrid),
								(t = a.params).breakpoints && a.setBreakpoint(),
								a.updateSize(),
								a.updateSlides(),
								a.updateProgress(),
								a.updateSlidesClasses(),
								a.params.freeMode
									? (i(), a.params.autoHeight && a.updateAutoHeight())
									: (('auto' === a.params.slidesPerView ||
											1 < a.params.slidesPerView) &&
									  a.isEnd &&
									  !a.params.centeredSlides
											? a.slideTo(a.slides.length - 1, 0, !1, !0)
											: a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
								t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
								a.emit('update'))
						}),
						(d.prototype.changeDirection = function (a, e) {
							void 0 === e && (e = !0)
							var t = this,
								i = t.params.direction
							return (
								(a = a || ('horizontal' === i ? 'vertical' : 'horizontal')) ===
									i ||
									('horizontal' !== a && 'vertical' !== a) ||
									(t.$el
										.removeClass(
											'' + t.params.containerModifierClass + i + ' wp8-' + i
										)
										.addClass('' + t.params.containerModifierClass + a),
									(W.isIE || W.isEdge) &&
										(q.pointerEvents || q.prefixedPointerEvents) &&
										t.$el.addClass(
											t.params.containerModifierClass + 'wp8-' + a
										),
									(t.params.direction = a),
									t.slides.each(function (e, t) {
										'vertical' === a
											? (t.style.width = '')
											: (t.style.height = '')
									}),
									t.emit('changeDirection'),
									e && t.update()),
								t
							)
						}),
						(d.prototype.init = function () {
							var e = this
							e.initialized ||
								(e.emit('beforeInit'),
								e.params.breakpoints && e.setBreakpoint(),
								e.addClasses(),
								e.params.loop && e.loopCreate(),
								e.updateSize(),
								e.updateSlides(),
								e.params.watchOverflow && e.checkOverflow(),
								e.params.grabCursor && e.setGrabCursor(),
								e.params.preloadImages && e.preloadImages(),
								e.params.loop
									? e.slideTo(
											e.params.initialSlide + e.loopedSlides,
											0,
											e.params.runCallbacksOnInit
									  )
									: e.slideTo(
											e.params.initialSlide,
											0,
											e.params.runCallbacksOnInit
									  ),
								e.attachEvents(),
								(e.initialized = !0),
								e.emit('init'))
						}),
						(d.prototype.destroy = function (e, t) {
							void 0 === e && (e = !0), void 0 === t && (t = !0)
							var a = this,
								i = a.params,
								s = a.$el,
								r = a.$wrapperEl,
								n = a.slides
							return (
								void 0 === a.params ||
									a.destroyed ||
									(a.emit('beforeDestroy'),
									(a.initialized = !1),
									a.detachEvents(),
									i.loop && a.loopDestroy(),
									t &&
										(a.removeClasses(),
										s.removeAttr('style'),
										r.removeAttr('style'),
										n &&
											n.length &&
											n
												.removeClass(
													[
														i.slideVisibleClass,
														i.slideActiveClass,
														i.slideNextClass,
														i.slidePrevClass,
													].join(' ')
												)
												.removeAttr('style')
												.removeAttr('data-swiper-slide-index')
												.removeAttr('data-swiper-column')
												.removeAttr('data-swiper-row')),
									a.emit('destroy'),
									Object.keys(a.eventsListeners).forEach(function (e) {
										a.off(e)
									}),
									!1 !== e &&
										((a.$el[0].swiper = null),
										a.$el.data('swiper', null),
										R.deleteProps(a)),
									(a.destroyed = !0)),
								null
							)
						}),
						(d.extendDefaults = function (e) {
							R.extend(T, e)
						}),
						(e.extendedDefaults.get = function () {
							return T
						}),
						(e.defaults.get = function () {
							return y
						}),
						(e.Class.get = function () {
							return l
						}),
						(e.$.get = function () {
							return E
						}),
						Object.defineProperties(d, e),
						d
					)
				})(e),
				a = {
					name: 'device',
					proto: {
						device: f,
					},
					static: {
						device: f,
					},
				},
				C = {
					name: 'support',
					proto: {
						support: q,
					},
					static: {
						support: q,
					},
				},
				M = {
					name: 'browser',
					proto: {
						browser: W,
					},
					static: {
						browser: W,
					},
				},
				P = {
					name: 'resize',
					create: function () {
						var e = this
						R.extend(e, {
							resize: {
								resizeHandler: function () {
									e &&
										!e.destroyed &&
										e.initialized &&
										(e.emit('beforeResize'), e.emit('resize'))
								},
								orientationChangeHandler: function () {
									e &&
										!e.destroyed &&
										e.initialized &&
										e.emit('orientationchange')
								},
							},
						})
					},
					on: {
						init: function () {
							F.addEventListener('resize', this.resize.resizeHandler),
								F.addEventListener(
									'orientationchange',
									this.resize.orientationChangeHandler
								)
						},
						destroy: function () {
							F.removeEventListener('resize', this.resize.resizeHandler),
								F.removeEventListener(
									'orientationchange',
									this.resize.orientationChangeHandler
								)
						},
					},
				},
				k = {
					func: F.MutationObserver || F.WebkitMutationObserver,
					attach: function (e, t) {
						void 0 === t && (t = {})
						var a = this,
							i = new k.func(function (e) {
								var t
								1 !== e.length
									? ((t = function () {
											a.emit('observerUpdate', e[0])
									  }),
									  F.requestAnimationFrame
											? F.requestAnimationFrame(t)
											: F.setTimeout(t, 0))
									: a.emit('observerUpdate', e[0])
							})
						i.observe(e, {
							attributes: void 0 === t.attributes || t.attributes,
							childList: void 0 === t.childList || t.childList,
							characterData: void 0 === t.characterData || t.characterData,
						}),
							a.observer.observers.push(i)
					},
					init: function () {
						var e = this
						if (q.observer && e.params.observer) {
							if (e.params.observeParents)
								for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
									e.observer.attach(t[a])
							e.observer.attach(e.$el[0], {
								childList: e.params.observeSlideChildren,
							}),
								e.observer.attach(e.$wrapperEl[0], {
									attributes: !1,
								})
						}
					},
					destroy: function () {
						this.observer.observers.forEach(function (e) {
							e.disconnect()
						}),
							(this.observer.observers = [])
					},
				},
				d = {
					name: 'observer',
					params: {
						observer: !1,
						observeParents: !1,
						observeSlideChildren: !1,
					},
					create: function () {
						R.extend(this, {
							observer: {
								init: k.init.bind(this),
								attach: k.attach.bind(this),
								destroy: k.destroy.bind(this),
								observers: [],
							},
						})
					},
					on: {
						init: function () {
							this.observer.init()
						},
						destroy: function () {
							this.observer.destroy()
						},
					},
				},
				z = {
					update: function (e) {
						var t = this,
							a = t.params,
							i = a.slidesPerView,
							s = a.slidesPerGroup,
							r = a.centeredSlides,
							n = t.params.virtual,
							o = n.addSlidesBefore,
							l = n.addSlidesAfter,
							d = t.virtual,
							p = d.from,
							c = d.to,
							u = d.slides,
							h = d.slidesGrid,
							v = d.renderSlide,
							a = d.offset
						t.updateActiveIndex()
						var n = t.activeIndex || 0,
							d = t.rtlTranslate ? 'right' : t.isHorizontal() ? 'left' : 'top',
							l = r
								? ((g = Math.floor(i / 2) + s + o), Math.floor(i / 2) + s + l)
								: ((g = i + (s - 1) + o), s + l),
							m = Math.max((n || 0) - l, 0),
							f = Math.min((n || 0) + g, u.length - 1),
							g = (t.slidesGrid[m] || 0) - (t.slidesGrid[0] || 0)
						function b() {
							t.updateSlides(),
								t.updateProgress(),
								t.updateSlidesClasses(),
								t.lazy && t.params.lazy.enabled && t.lazy.load()
						}
						if (
							(R.extend(t.virtual, {
								from: m,
								to: f,
								offset: g,
								slidesGrid: t.slidesGrid,
							}),
							p === m && c === f && !e)
						)
							return (
								t.slidesGrid !== h && g !== a && t.slides.css(d, g + 'px'),
								void t.updateProgress()
							)
						if (t.params.virtual.renderExternal)
							return (
								t.params.virtual.renderExternal.call(t, {
									offset: g,
									from: m,
									to: f,
									slides: (function () {
										for (var e = [], t = m; t <= f; t += 1) e.push(u[t])
										return e
									})(),
								}),
								void b()
							)
						var w = [],
							y = []
						if (e) t.$wrapperEl.find('.' + t.params.slideClass).remove()
						else
							for (var x = p; x <= c; x += 1)
								(x < m || f < x) &&
									t.$wrapperEl
										.find(
											'.' +
												t.params.slideClass +
												'[data-swiper-slide-index="' +
												x +
												'"]'
										)
										.remove()
						for (var T = 0; T < u.length; T += 1)
							m <= T &&
								T <= f &&
								(void 0 === c || e
									? y.push(T)
									: (c < T && y.push(T), T < p && w.push(T)))
						y.forEach(function (e) {
							t.$wrapperEl.append(v(u[e], e))
						}),
							w
								.sort(function (e, t) {
									return t - e
								})
								.forEach(function (e) {
									t.$wrapperEl.prepend(v(u[e], e))
								}),
							t.$wrapperEl.children('.swiper-slide').css(d, g + 'px'),
							b()
					},
					renderSlide: function (e, t) {
						var a = this,
							i = a.params.virtual
						if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t]
						e = i.renderSlide
							? E(i.renderSlide.call(a, e, t))
							: E(
									'<div class="' +
										a.params.slideClass +
										'" data-swiper-slide-index="' +
										t +
										'">' +
										e +
										'</div>'
							  )
						return (
							e.attr('data-swiper-slide-index') ||
								e.attr('data-swiper-slide-index', t),
							i.cache && (a.virtual.cache[t] = e),
							e
						)
					},
					appendSlide: function (e) {
						if ('object' == typeof e && 'length' in e)
							for (var t = 0; t < e.length; t += 1)
								e[t] && this.virtual.slides.push(e[t])
						else this.virtual.slides.push(e)
						this.virtual.update(!0)
					},
					prependSlide: function (e) {
						var t,
							a,
							i = this,
							s = i.activeIndex,
							r = s + 1,
							n = 1
						if (Array.isArray(e)) {
							for (var o = 0; o < e.length; o += 1)
								e[o] && i.virtual.slides.unshift(e[o])
							;(r = s + e.length), (n = e.length)
						} else i.virtual.slides.unshift(e)
						i.params.virtual.cache &&
							((t = i.virtual.cache),
							(a = {}),
							Object.keys(t).forEach(function (e) {
								a[parseInt(e, 10) + n] = t[e]
							}),
							(i.virtual.cache = a)),
							i.virtual.update(!0),
							i.slideTo(r, 0)
					},
					removeSlide: function (e) {
						var t = this
						if (null != e) {
							var a = t.activeIndex
							if (Array.isArray(e))
								for (var i = e.length - 1; 0 <= i; --i)
									t.virtual.slides.splice(e[i], 1),
										t.params.virtual.cache && delete t.virtual.cache[e[i]],
										e[i] < a && --a,
										(a = Math.max(a, 0))
							else
								t.virtual.slides.splice(e, 1),
									t.params.virtual.cache && delete t.virtual.cache[e],
									e < a && --a,
									(a = Math.max(a, 0))
							t.virtual.update(!0), t.slideTo(a, 0)
						}
					},
					removeAllSlides: function () {
						var e = this
						;(e.virtual.slides = []),
							e.params.virtual.cache && (e.virtual.cache = {}),
							e.virtual.update(!0),
							e.slideTo(0, 0)
					},
				},
				p = {
					name: 'virtual',
					params: {
						virtual: {
							enabled: !1,
							slides: [],
							cache: !0,
							renderSlide: null,
							renderExternal: null,
							addSlidesBefore: 0,
							addSlidesAfter: 0,
						},
					},
					create: function () {
						var e = this
						R.extend(e, {
							virtual: {
								update: z.update.bind(e),
								appendSlide: z.appendSlide.bind(e),
								prependSlide: z.prependSlide.bind(e),
								removeSlide: z.removeSlide.bind(e),
								removeAllSlides: z.removeAllSlides.bind(e),
								renderSlide: z.renderSlide.bind(e),
								slides: e.params.virtual.slides,
								cache: {},
							},
						})
					},
					on: {
						beforeInit: function () {
							var e,
								t = this
							t.params.virtual.enabled &&
								(t.classNames.push(t.params.containerModifierClass + 'virtual'),
								R.extend(
									t.params,
									(e = {
										watchSlidesProgress: !0,
									})
								),
								R.extend(t.originalParams, e),
								t.params.initialSlide || t.virtual.update())
						},
						setTranslate: function () {
							this.params.virtual.enabled && this.virtual.update()
						},
					},
				},
				$ = {
					handle: function (e) {
						var t = this,
							a = t.rtlTranslate,
							i = e,
							s =
								(i = i.originalEvent ? i.originalEvent : i).keyCode ||
								i.charCode
						if (
							!t.allowSlideNext &&
							((t.isHorizontal() && 39 === s) ||
								(t.isVertical() && 40 === s) ||
								34 === s)
						)
							return !1
						if (
							!t.allowSlidePrev &&
							((t.isHorizontal() && 37 === s) ||
								(t.isVertical() && 38 === s) ||
								33 === s)
						)
							return !1
						if (
							!(
								i.shiftKey ||
								i.altKey ||
								i.ctrlKey ||
								i.metaKey ||
								(c.activeElement &&
									c.activeElement.nodeName &&
									('input' === c.activeElement.nodeName.toLowerCase() ||
										'textarea' === c.activeElement.nodeName.toLowerCase()))
							)
						) {
							if (
								t.params.keyboard.onlyInViewport &&
								(33 === s ||
									34 === s ||
									37 === s ||
									39 === s ||
									38 === s ||
									40 === s)
							) {
								var r = !1
								if (
									0 < t.$el.parents('.' + t.params.slideClass).length &&
									0 === t.$el.parents('.' + t.params.slideActiveClass).length
								)
									return
								var n = F.innerWidth,
									o = F.innerHeight,
									e = t.$el.offset()
								a && (e.left -= t.$el[0].scrollLeft)
								for (
									var l = [
											[e.left, e.top],
											[e.left + t.width, e.top],
											[e.left, e.top + t.height],
											[e.left + t.width, e.top + t.height],
										],
										d = 0;
									d < l.length;
									d += 1
								) {
									var p = l[d]
									0 <= p[0] && p[0] <= n && 0 <= p[1] && p[1] <= o && (r = !0)
								}
								if (!r) return
							}
							t.isHorizontal()
								? ((33 !== s && 34 !== s && 37 !== s && 39 !== s) ||
										(i.preventDefault
											? i.preventDefault()
											: (i.returnValue = !1)),
								  (((34 !== s && 39 !== s) || a) &&
										((33 !== s && 37 !== s) || !a)) ||
										t.slideNext(),
								  (((33 !== s && 37 !== s) || a) &&
										((34 !== s && 39 !== s) || !a)) ||
										t.slidePrev())
								: ((33 !== s && 34 !== s && 38 !== s && 40 !== s) ||
										(i.preventDefault
											? i.preventDefault()
											: (i.returnValue = !1)),
								  (34 !== s && 40 !== s) || t.slideNext(),
								  (33 !== s && 38 !== s) || t.slidePrev()),
								t.emit('keyPress', s)
						}
					},
					enable: function () {
						this.keyboard.enabled ||
							(E(c).on('keydown', this.keyboard.handle),
							(this.keyboard.enabled = !0))
					},
					disable: function () {
						this.keyboard.enabled &&
							(E(c).off('keydown', this.keyboard.handle),
							(this.keyboard.enabled = !1))
					},
				},
				u = {
					name: 'keyboard',
					params: {
						keyboard: {
							enabled: !1,
							onlyInViewport: !0,
						},
					},
					create: function () {
						R.extend(this, {
							keyboard: {
								enabled: !1,
								enable: $.enable.bind(this),
								disable: $.disable.bind(this),
								handle: $.handle.bind(this),
							},
						})
					},
					on: {
						init: function () {
							this.params.keyboard.enabled && this.keyboard.enable()
						},
						destroy: function () {
							this.keyboard.enabled && this.keyboard.disable()
						},
					},
				},
				I = {
					lastScrollTime: R.now(),
					event:
						-1 < F.navigator.userAgent.indexOf('firefox')
							? 'DOMMouseScroll'
							: ((v = (h = 'onwheel') in c) ||
									((m = c.createElement('div')).setAttribute(h, 'return;'),
									(v = 'function' == typeof m[h])),
							  (v =
									!v &&
									c.implementation &&
									c.implementation.hasFeature &&
									!0 !== c.implementation.hasFeature('', '')
										? c.implementation.hasFeature('Events.wheel', '3.0')
										: v)
									? 'wheel'
									: 'mousewheel'),
					normalize: function (e) {
						var t = 0,
							a = 0,
							i = 0,
							s = 0
						return (
							'detail' in e && (a = e.detail),
							'wheelDelta' in e && (a = -e.wheelDelta / 120),
							'wheelDeltaY' in e && (a = -e.wheelDeltaY / 120),
							'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
							'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
							(i = 10 * t),
							(s = 10 * a),
							'deltaY' in e && (s = e.deltaY),
							((i = 'deltaX' in e ? e.deltaX : i) || s) &&
								e.deltaMode &&
								(1 === e.deltaMode
									? ((i *= 40), (s *= 40))
									: ((i *= 800), (s *= 800))),
							{
								spinX: (t = i && !t ? (i < 1 ? -1 : 1) : t),
								spinY: (a = s && !a ? (s < 1 ? -1 : 1) : a),
								pixelX: i,
								pixelY: s,
							}
						)
					},
					handleMouseEnter: function () {
						this.mouseEntered = !0
					},
					handleMouseLeave: function () {
						this.mouseEntered = !1
					},
					handle: function (e) {
						var t = e,
							a = this,
							i = a.params.mousewheel
						if (!a.mouseEntered && !i.releaseOnEdges) return !0
						t.originalEvent && (t = t.originalEvent)
						var s = 0,
							r = a.rtlTranslate ? -1 : 1,
							n = I.normalize(t)
						if (i.forceToAxis)
							if (a.isHorizontal()) {
								if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0
								s = n.pixelX * r
							} else {
								if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0
								s = n.pixelY
							}
						else
							s =
								Math.abs(n.pixelX) > Math.abs(n.pixelY)
									? -n.pixelX * r
									: -n.pixelY
						if (0 === s) return !0
						if ((i.invert && (s = -s), a.params.freeMode)) {
							a.params.loop && a.loopFix()
							;(e = a.getTranslate() + s * i.sensitivity),
								(r = a.isBeginning),
								(n = a.isEnd)
							if (
								((e = e >= a.minTranslate() ? a.minTranslate() : e) <=
									a.maxTranslate() && (e = a.maxTranslate()),
								a.setTransition(0),
								a.setTranslate(e),
								a.updateProgress(),
								a.updateActiveIndex(),
								a.updateSlidesClasses(),
								((!r && a.isBeginning) || (!n && a.isEnd)) &&
									a.updateSlidesClasses(),
								a.params.freeModeSticky &&
									(clearTimeout(a.mousewheel.timeout),
									(a.mousewheel.timeout = R.nextTick(function () {
										a.slideToClosest()
									}, 300))),
								a.emit('scroll', t),
								a.params.autoplay &&
									a.params.autoplayDisableOnInteraction &&
									a.autoplay.stop(),
								e === a.minTranslate() || e === a.maxTranslate())
							)
								return !0
						} else {
							if (60 < R.now() - a.mousewheel.lastScrollTime)
								if (s < 0)
									if ((a.isEnd && !a.params.loop) || a.animating) {
										if (i.releaseOnEdges) return !0
									} else a.slideNext(), a.emit('scroll', t)
								else if ((a.isBeginning && !a.params.loop) || a.animating) {
									if (i.releaseOnEdges) return !0
								} else a.slidePrev(), a.emit('scroll', t)
							a.mousewheel.lastScrollTime = new F.Date().getTime()
						}
						return (
							t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
						)
					},
					enable: function () {
						var e = this
						if (!I.event) return !1
						if (e.mousewheel.enabled) return !1
						var t = e.$el
						return (
							(t =
								'container' !== e.params.mousewheel.eventsTarged
									? E(e.params.mousewheel.eventsTarged)
									: t).on('mouseenter', e.mousewheel.handleMouseEnter),
							t.on('mouseleave', e.mousewheel.handleMouseLeave),
							t.on(I.event, e.mousewheel.handle),
							(e.mousewheel.enabled = !0)
						)
					},
					disable: function () {
						var e = this
						if (!I.event) return !1
						if (!e.mousewheel.enabled) return !1
						var t = e.$el
						return (
							(t =
								'container' !== e.params.mousewheel.eventsTarged
									? E(e.params.mousewheel.eventsTarged)
									: t).off(I.event, e.mousewheel.handle),
							!(e.mousewheel.enabled = !1)
						)
					},
				},
				L = {
					update: function () {
						var e,
							t,
							a = this,
							i = a.params.navigation
						a.params.loop ||
							((e = (t = a.navigation).$nextEl),
							(t = t.$prevEl) &&
								0 < t.length &&
								(a.isBeginning
									? t.addClass(i.disabledClass)
									: t.removeClass(i.disabledClass),
								t[
									a.params.watchOverflow && a.isLocked
										? 'addClass'
										: 'removeClass'
								](i.lockClass)),
							e &&
								0 < e.length &&
								(a.isEnd
									? e.addClass(i.disabledClass)
									: e.removeClass(i.disabledClass),
								e[
									a.params.watchOverflow && a.isLocked
										? 'addClass'
										: 'removeClass'
								](i.lockClass)))
					},
					onPrevClick: function (e) {
						e.preventDefault(),
							(this.isBeginning && !this.params.loop) || this.slidePrev()
					},
					onNextClick: function (e) {
						e.preventDefault(),
							(this.isEnd && !this.params.loop) || this.slideNext()
					},
					init: function () {
						var e,
							t,
							a = this,
							i = a.params.navigation
						;(i.nextEl || i.prevEl) &&
							(i.nextEl &&
								((e = E(i.nextEl)),
								a.params.uniqueNavElements &&
									'string' == typeof i.nextEl &&
									1 < e.length &&
									1 === a.$el.find(i.nextEl).length &&
									(e = a.$el.find(i.nextEl))),
							i.prevEl &&
								((t = E(i.prevEl)),
								a.params.uniqueNavElements &&
									'string' == typeof i.prevEl &&
									1 < t.length &&
									1 === a.$el.find(i.prevEl).length &&
									(t = a.$el.find(i.prevEl))),
							e && 0 < e.length && e.on('click', a.navigation.onNextClick),
							t && 0 < t.length && t.on('click', a.navigation.onPrevClick),
							R.extend(a.navigation, {
								$nextEl: e,
								nextEl: e && e[0],
								$prevEl: t,
								prevEl: t && t[0],
							}))
					},
					destroy: function () {
						var e = this,
							t = e.navigation,
							a = t.$nextEl,
							t = t.$prevEl
						a &&
							a.length &&
							(a.off('click', e.navigation.onNextClick),
							a.removeClass(e.params.navigation.disabledClass)),
							t &&
								t.length &&
								(t.off('click', e.navigation.onPrevClick),
								t.removeClass(e.params.navigation.disabledClass))
					},
				},
				D = {
					update: function () {
						var e = this,
							t = e.rtl,
							i = e.params.pagination
						if (
							i.el &&
							e.pagination.el &&
							e.pagination.$el &&
							0 !== e.pagination.$el.length
						) {
							var s,
								a = (e.virtual && e.params.virtual.enabled ? e.virtual : e)
									.slides.length,
								r = e.pagination.$el,
								n = e.params.loop
									? Math.ceil(
											(a - 2 * e.loopedSlides) / e.params.slidesPerGroup
									  )
									: e.snapGrid.length
							if (
								(e.params.loop
									? ((s = Math.ceil(
											(e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
									  )) >
											a - 1 - 2 * e.loopedSlides &&
											(s -= a - 2 * e.loopedSlides),
									  n - 1 < s && (s -= n),
									  s < 0 &&
											'bullets' !== e.params.paginationType &&
											(s = n + s))
									: (s =
											void 0 !== e.snapIndex
												? e.snapIndex
												: e.activeIndex || 0),
								'bullets' === i.type &&
									e.pagination.bullets &&
									0 < e.pagination.bullets.length)
							) {
								var o,
									l,
									d,
									p,
									c,
									u = e.pagination.bullets
								if (
									(i.dynamicBullets &&
										((e.pagination.bulletSize = u
											.eq(0)
											[e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
										r.css(
											e.isHorizontal() ? 'width' : 'height',
											e.pagination.bulletSize * (i.dynamicMainBullets + 4) +
												'px'
										),
										1 < i.dynamicMainBullets &&
											void 0 !== e.previousIndex &&
											((e.pagination.dynamicBulletIndex += s - e.previousIndex),
											e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1
												? (e.pagination.dynamicBulletIndex =
														i.dynamicMainBullets - 1)
												: e.pagination.dynamicBulletIndex < 0 &&
												  (e.pagination.dynamicBulletIndex = 0)),
										(o = s - e.pagination.dynamicBulletIndex),
										(d =
											((l =
												o + (Math.min(u.length, i.dynamicMainBullets) - 1)) +
												o) /
											2)),
									u.removeClass(
										i.bulletActiveClass +
											' ' +
											i.bulletActiveClass +
											'-next ' +
											i.bulletActiveClass +
											'-next-next ' +
											i.bulletActiveClass +
											'-prev ' +
											i.bulletActiveClass +
											'-prev-prev ' +
											i.bulletActiveClass +
											'-main'
									),
									1 < r.length)
								)
									u.each(function (e, t) {
										var a = E(t),
											t = a.index()
										t === s && a.addClass(i.bulletActiveClass),
											i.dynamicBullets &&
												(o <= t &&
													t <= l &&
													a.addClass(i.bulletActiveClass + '-main'),
												t === o &&
													a
														.prev()
														.addClass(i.bulletActiveClass + '-prev')
														.prev()
														.addClass(i.bulletActiveClass + '-prev-prev'),
												t === l &&
													a
														.next()
														.addClass(i.bulletActiveClass + '-next')
														.next()
														.addClass(i.bulletActiveClass + '-next-next'))
									})
								else if (
									(u.eq(s).addClass(i.bulletActiveClass), i.dynamicBullets)
								) {
									for (var h = u.eq(o), a = u.eq(l), v = o; v <= l; v += 1)
										u.eq(v).addClass(i.bulletActiveClass + '-main')
									h
										.prev()
										.addClass(i.bulletActiveClass + '-prev')
										.prev()
										.addClass(i.bulletActiveClass + '-prev-prev'),
										a
											.next()
											.addClass(i.bulletActiveClass + '-next')
											.next()
											.addClass(i.bulletActiveClass + '-next-next')
								}
								i.dynamicBullets &&
									((c = Math.min(u.length, i.dynamicMainBullets + 4)),
									(p =
										(e.pagination.bulletSize * c - e.pagination.bulletSize) /
											2 -
										d * e.pagination.bulletSize),
									(c = t ? 'right' : 'left'),
									u.css(e.isHorizontal() ? c : 'top', p + 'px'))
							}
							'fraction' === i.type &&
								(r
									.find('.' + i.currentClass)
									.text(i.formatFractionCurrent(s + 1)),
								r.find('.' + i.totalClass).text(i.formatFractionTotal(n))),
								'progressbar' === i.type &&
									((d = i.progressbarOpposite
										? e.isHorizontal()
											? 'vertical'
											: 'horizontal'
										: e.isHorizontal()
										? 'horizontal'
										: 'vertical'),
									(t = (s + 1) / n),
									(p = c = 1),
									'horizontal' == d ? (c = t) : (p = t),
									r
										.find('.' + i.progressbarFillClass)
										.transform(
											'translate3d(0,0,0) scaleX(' + c + ') scaleY(' + p + ')'
										)
										.transition(e.params.speed)),
								'custom' === i.type && i.renderCustom
									? (r.html(i.renderCustom(e, s + 1, n)),
									  e.emit('paginationRender', e, r[0]))
									: e.emit('paginationUpdate', e, r[0]),
								r[
									e.params.watchOverflow && e.isLocked
										? 'addClass'
										: 'removeClass'
								](i.lockClass)
						}
					},
					render: function () {
						var e = this,
							t = e.params.pagination
						if (
							t.el &&
							e.pagination.el &&
							e.pagination.$el &&
							0 !== e.pagination.$el.length
						) {
							var a = (e.virtual && e.params.virtual.enabled ? e.virtual : e)
									.slides.length,
								i = e.pagination.$el,
								s = ''
							if ('bullets' === t.type) {
								for (
									var r = e.params.loop
											? Math.ceil(
													(a - 2 * e.loopedSlides) / e.params.slidesPerGroup
											  )
											: e.snapGrid.length,
										n = 0;
									n < r;
									n += 1
								)
									t.renderBullet
										? (s += t.renderBullet.call(e, n, t.bulletClass))
										: (s +=
												'<' +
												t.bulletElement +
												' class="' +
												t.bulletClass +
												'"></' +
												t.bulletElement +
												'>')
								i.html(s), (e.pagination.bullets = i.find('.' + t.bulletClass))
							}
							'fraction' === t.type &&
								((s = t.renderFraction
									? t.renderFraction.call(e, t.currentClass, t.totalClass)
									: '<span class="' +
									  t.currentClass +
									  '"></span> / <span class="' +
									  t.totalClass +
									  '"></span>'),
								i.html(s)),
								'progressbar' === t.type &&
									((s = t.renderProgressbar
										? t.renderProgressbar.call(e, t.progressbarFillClass)
										: '<span class="' + t.progressbarFillClass + '"></span>'),
									i.html(s)),
								'custom' !== t.type &&
									e.emit('paginationRender', e.pagination.$el[0])
						}
					},
					init: function () {
						var e,
							t = this,
							a = t.params.pagination
						!a.el ||
							(0 !== (e = E(a.el)).length &&
								(t.params.uniqueNavElements &&
									'string' == typeof a.el &&
									1 < e.length &&
									1 === t.$el.find(a.el).length &&
									(e = t.$el.find(a.el)),
								'bullets' === a.type &&
									a.clickable &&
									e.addClass(a.clickableClass),
								e.addClass(a.modifierClass + a.type),
								'bullets' === a.type &&
									a.dynamicBullets &&
									(e.addClass('' + a.modifierClass + a.type + '-dynamic'),
									(t.pagination.dynamicBulletIndex = 0),
									a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)),
								'progressbar' === a.type &&
									a.progressbarOpposite &&
									e.addClass(a.progressbarOppositeClass),
								a.clickable &&
									e.on('click', '.' + a.bulletClass, function (e) {
										e.preventDefault()
										e = E(this).index() * t.params.slidesPerGroup
										t.params.loop && (e += t.loopedSlides), t.slideTo(e)
									}),
								R.extend(t.pagination, {
									$el: e,
									el: e[0],
								})))
					},
					destroy: function () {
						var e,
							t = this,
							a = t.params.pagination
						a.el &&
							t.pagination.el &&
							t.pagination.$el &&
							0 !== t.pagination.$el.length &&
							((e = t.pagination.$el).removeClass(a.hiddenClass),
							e.removeClass(a.modifierClass + a.type),
							t.pagination.bullets &&
								t.pagination.bullets.removeClass(a.bulletActiveClass),
							a.clickable && e.off('click', '.' + a.bulletClass))
					},
				},
				O = {
					setTranslate: function () {
						var e,
							t,
							a,
							i,
							s,
							r,
							n,
							o,
							l = this
						l.params.scrollbar.el &&
							l.scrollbar.el &&
							((n = l.scrollbar),
							(e = l.rtlTranslate),
							(o = l.progress),
							(t = n.dragSize),
							(a = n.trackSize),
							(i = n.$dragEl),
							(s = n.$el),
							(r = l.params.scrollbar),
							(o = (a - (n = t)) * o),
							e
								? 0 < (o = -o)
									? ((n = t - o), (o = 0))
									: a < -o + t && (n = a + o)
								: o < 0
								? ((n = t + o), (o = 0))
								: a < o + t && (n = a - o),
							l.isHorizontal()
								? (q.transforms3d
										? i.transform('translate3d(' + o + 'px, 0, 0)')
										: i.transform('translateX(' + o + 'px)'),
								  (i[0].style.width = n + 'px'))
								: (q.transforms3d
										? i.transform('translate3d(0px, ' + o + 'px, 0)')
										: i.transform('translateY(' + o + 'px)'),
								  (i[0].style.height = n + 'px')),
							r.hide &&
								(clearTimeout(l.scrollbar.timeout),
								(s[0].style.opacity = 1),
								(l.scrollbar.timeout = setTimeout(function () {
									;(s[0].style.opacity = 0), s.transition(400)
								}, 1e3))))
					},
					setTransition: function (e) {
						this.params.scrollbar.el &&
							this.scrollbar.el &&
							this.scrollbar.$dragEl.transition(e)
					},
					updateSize: function () {
						var e,
							t,
							a,
							i,
							s,
							r,
							n,
							o = this
						o.params.scrollbar.el &&
							o.scrollbar.el &&
							((t = (e = o.scrollbar).$dragEl),
							(a = e.$el),
							(t[0].style.width = ''),
							(t[0].style.height = ''),
							(i = o.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
							(r = (s = o.size / o.virtualSize) * (i / o.size)),
							(n =
								'auto' === o.params.scrollbar.dragSize
									? i * s
									: parseInt(o.params.scrollbar.dragSize, 10)),
							o.isHorizontal()
								? (t[0].style.width = n + 'px')
								: (t[0].style.height = n + 'px'),
							(a[0].style.display = 1 <= s ? 'none' : ''),
							o.params.scrollbar.hide && (a[0].style.opacity = 0),
							R.extend(e, {
								trackSize: i,
								divider: s,
								moveDivider: r,
								dragSize: n,
							}),
							e.$el[
								o.params.watchOverflow && o.isLocked
									? 'addClass'
									: 'removeClass'
							](o.params.scrollbar.lockClass))
					},
					getPointerPosition: function (e) {
						return this.isHorizontal()
							? 'touchstart' === e.type || 'touchmove' === e.type
								? e.targetTouches[0].pageX
								: e.pageX || e.clientX
							: 'touchstart' === e.type || 'touchmove' === e.type
							? e.targetTouches[0].pageY
							: e.pageY || e.clientY
					},
					setDragPosition: function (e) {
						var t = this,
							a = t.scrollbar,
							i = t.rtlTranslate,
							s = a.$el,
							r = a.dragSize,
							n = a.trackSize,
							o = a.dragStartPos,
							r =
								(a.getPointerPosition(e) -
									s.offset()[t.isHorizontal() ? 'left' : 'top'] -
									(null !== o ? o : r / 2)) /
								(n - r)
						;(r = Math.max(Math.min(r, 1), 0)), i && (r = 1 - r)
						r = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r
						t.updateProgress(r),
							t.setTranslate(r),
							t.updateActiveIndex(),
							t.updateSlidesClasses()
					},
					onDragStart: function (e) {
						var t = this,
							a = t.params.scrollbar,
							i = t.scrollbar,
							s = t.$wrapperEl,
							r = i.$el,
							n = i.$dragEl
						;(t.scrollbar.isTouched = !0),
							(t.scrollbar.dragStartPos =
								e.target === n[0] || e.target === n
									? i.getPointerPosition(e) -
									  e.target.getBoundingClientRect()[
											t.isHorizontal() ? 'left' : 'top'
									  ]
									: null),
							e.preventDefault(),
							e.stopPropagation(),
							s.transition(100),
							n.transition(100),
							i.setDragPosition(e),
							clearTimeout(t.scrollbar.dragTimeout),
							r.transition(0),
							a.hide && r.css('opacity', 1),
							t.emit('scrollbarDragStart', e)
					},
					onDragMove: function (e) {
						var t = this.scrollbar,
							a = this.$wrapperEl,
							i = t.$el,
							s = t.$dragEl
						this.scrollbar.isTouched &&
							(e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
							t.setDragPosition(e),
							a.transition(0),
							i.transition(0),
							s.transition(0),
							this.emit('scrollbarDragMove', e))
					},
					onDragEnd: function (e) {
						var t = this,
							a = t.params.scrollbar,
							i = t.scrollbar.$el
						t.scrollbar.isTouched &&
							((t.scrollbar.isTouched = !1),
							a.hide &&
								(clearTimeout(t.scrollbar.dragTimeout),
								(t.scrollbar.dragTimeout = R.nextTick(function () {
									i.css('opacity', 0), i.transition(400)
								}, 1e3))),
							t.emit('scrollbarDragEnd', e),
							a.snapOnRelease && t.slideToClosest())
					},
					enableDraggable: function () {
						var e,
							t,
							a,
							i,
							s,
							r = this
						r.params.scrollbar.el &&
							((i = r.scrollbar),
							(e = r.touchEventsTouch),
							(t = r.touchEventsDesktop),
							(s = r.params),
							(a = i.$el[0]),
							(i = !(!q.passiveListener || !s.passiveListeners) && {
								passive: !1,
								capture: !1,
							}),
							(s = !(!q.passiveListener || !s.passiveListeners) && {
								passive: !0,
								capture: !1,
							}),
							q.touch
								? (a.addEventListener(e.start, r.scrollbar.onDragStart, i),
								  a.addEventListener(e.move, r.scrollbar.onDragMove, i),
								  a.addEventListener(e.end, r.scrollbar.onDragEnd, s))
								: (a.addEventListener(t.start, r.scrollbar.onDragStart, i),
								  c.addEventListener(t.move, r.scrollbar.onDragMove, i),
								  c.addEventListener(t.end, r.scrollbar.onDragEnd, s)))
					},
					disableDraggable: function () {
						var e,
							t,
							a,
							i,
							s,
							r = this
						r.params.scrollbar.el &&
							((i = r.scrollbar),
							(e = r.touchEventsTouch),
							(t = r.touchEventsDesktop),
							(s = r.params),
							(a = i.$el[0]),
							(i = !(!q.passiveListener || !s.passiveListeners) && {
								passive: !1,
								capture: !1,
							}),
							(s = !(!q.passiveListener || !s.passiveListeners) && {
								passive: !0,
								capture: !1,
							}),
							q.touch
								? (a.removeEventListener(e.start, r.scrollbar.onDragStart, i),
								  a.removeEventListener(e.move, r.scrollbar.onDragMove, i),
								  a.removeEventListener(e.end, r.scrollbar.onDragEnd, s))
								: (a.removeEventListener(t.start, r.scrollbar.onDragStart, i),
								  c.removeEventListener(t.move, r.scrollbar.onDragMove, i),
								  c.removeEventListener(t.end, r.scrollbar.onDragEnd, s)))
					},
					init: function () {
						var e,
							t,
							a,
							i,
							s = this
						s.params.scrollbar.el &&
							((e = s.scrollbar),
							(i = s.$el),
							(a = E((t = s.params.scrollbar).el)),
							0 ===
								(i = (a =
									s.params.uniqueNavElements &&
									'string' == typeof t.el &&
									1 < a.length &&
									1 === i.find(t.el).length
										? i.find(t.el)
										: a).find('.' + s.params.scrollbar.dragClass)).length &&
								((i = E(
									'<div class="' + s.params.scrollbar.dragClass + '"></div>'
								)),
								a.append(i)),
							R.extend(e, {
								$el: a,
								el: a[0],
								$dragEl: i,
								dragEl: i[0],
							}),
							t.draggable && e.enableDraggable())
					},
					destroy: function () {
						this.scrollbar.disableDraggable()
					},
				},
				A = {
					setTransform: function (e, t) {
						var a = this.rtl,
							i = E(e),
							s = a ? -1 : 1,
							r = i.attr('data-swiper-parallax') || '0',
							n = i.attr('data-swiper-parallax-x'),
							o = i.attr('data-swiper-parallax-y'),
							e = i.attr('data-swiper-parallax-scale'),
							a = i.attr('data-swiper-parallax-opacity')
						n || o
							? ((n = n || '0'), (o = o || '0'))
							: this.isHorizontal()
							? ((n = r), (o = '0'))
							: ((o = r), (n = '0')),
							(n =
								0 <= n.indexOf('%')
									? parseInt(n, 10) * t * s + '%'
									: n * t * s + 'px'),
							(o =
								0 <= o.indexOf('%') ? parseInt(o, 10) * t + '%' : o * t + 'px'),
							null != a &&
								((a = a - (a - 1) * (1 - Math.abs(t))),
								(i[0].style.opacity = a)),
							null == e
								? i.transform('translate3d(' + n + ', ' + o + ', 0px)')
								: ((t = e - (e - 1) * (1 - Math.abs(t))),
								  i.transform(
										'translate3d(' + n + ', ' + o + ', 0px) scale(' + t + ')'
								  ))
					},
					setTranslate: function () {
						var i = this,
							e = i.$el,
							t = i.slides,
							s = i.progress,
							r = i.snapGrid
						e
							.children(
								'[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
							)
							.each(function (e, t) {
								i.parallax.setTransform(t, s)
							}),
							t.each(function (e, t) {
								var a = t.progress
								1 < i.params.slidesPerGroup &&
									'auto' !== i.params.slidesPerView &&
									(a += Math.ceil(e / 2) - s * (r.length - 1)),
									(a = Math.min(Math.max(a, -1), 1)),
									E(t)
										.find(
											'[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
										)
										.each(function (e, t) {
											i.parallax.setTransform(t, a)
										})
							})
					},
					setTransition: function (i) {
						void 0 === i && (i = this.params.speed),
							this.$el
								.find(
									'[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
								)
								.each(function (e, t) {
									var a = E(t),
										t =
											parseInt(a.attr('data-swiper-parallax-duration'), 10) || i
									a.transition((t = 0 === i ? 0 : t))
								})
					},
				},
				H = {
					getDistanceBetweenTouches: function (e) {
						if (e.targetTouches.length < 2) return 1
						var t = e.targetTouches[0].pageX,
							a = e.targetTouches[0].pageY,
							i = e.targetTouches[1].pageX,
							e = e.targetTouches[1].pageY
						return Math.sqrt(Math.pow(i - t, 2) + Math.pow(e - a, 2))
					},
					onGestureStart: function (e) {
						var t = this,
							a = t.params.zoom,
							i = t.zoom,
							s = i.gesture
						if (
							((i.fakeGestureTouched = !1),
							(i.fakeGestureMoved = !1),
							!q.gestures)
						) {
							if (
								'touchstart' !== e.type ||
								('touchstart' === e.type && e.targetTouches.length < 2)
							)
								return
							;(i.fakeGestureTouched = !0),
								(s.scaleStart = H.getDistanceBetweenTouches(e))
						}
						;(s.$slideEl && s.$slideEl.length) ||
						((s.$slideEl = E(e.target).closest('.swiper-slide')),
						0 === s.$slideEl.length &&
							(s.$slideEl = t.slides.eq(t.activeIndex)),
						(s.$imageEl = s.$slideEl.find('img, svg, canvas')),
						(s.$imageWrapEl = s.$imageEl.parent('.' + a.containerClass)),
						(s.maxRatio =
							s.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
						0 !== s.$imageWrapEl.length)
							? (s.$imageEl.transition(0), (t.zoom.isScaling = !0))
							: (s.$imageEl = void 0)
					},
					onGestureChange: function (e) {
						var t = this.params.zoom,
							a = this.zoom,
							i = a.gesture
						if (!q.gestures) {
							if (
								'touchmove' !== e.type ||
								('touchmove' === e.type && e.targetTouches.length < 2)
							)
								return
							;(a.fakeGestureMoved = !0),
								(i.scaleMove = H.getDistanceBetweenTouches(e))
						}
						i.$imageEl &&
							0 !== i.$imageEl.length &&
							((a.scale = q.gestures
								? e.scale * a.currentScale
								: (i.scaleMove / i.scaleStart) * a.currentScale),
							a.scale > i.maxRatio &&
								(a.scale =
									i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, 0.5)),
							a.scale < t.minRatio &&
								(a.scale =
									t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, 0.5)),
							i.$imageEl.transform('translate3d(0,0,0) scale(' + a.scale + ')'))
					},
					onGestureEnd: function (e) {
						var t = this.params.zoom,
							a = this.zoom,
							i = a.gesture
						if (!q.gestures) {
							if (!a.fakeGestureTouched || !a.fakeGestureMoved) return
							if (
								'touchend' !== e.type ||
								('touchend' === e.type &&
									e.changedTouches.length < 2 &&
									!f.android)
							)
								return
							;(a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1)
						}
						i.$imageEl &&
							0 !== i.$imageEl.length &&
							((a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio)),
							i.$imageEl
								.transition(this.params.speed)
								.transform('translate3d(0,0,0) scale(' + a.scale + ')'),
							(a.currentScale = a.scale),
							(a.isScaling = !1),
							1 === a.scale && (i.$slideEl = void 0))
					},
					onTouchStart: function (e) {
						var t = this.zoom,
							a = t.gesture,
							t = t.image
						a.$imageEl &&
							0 !== a.$imageEl.length &&
							(t.isTouched ||
								(f.android && e.preventDefault(),
								(t.isTouched = !0),
								(t.touchesStart.x = ('touchstart' === e.type
									? e.targetTouches[0]
									: e
								).pageX),
								(t.touchesStart.y = ('touchstart' === e.type
									? e.targetTouches[0]
									: e
								).pageY)))
					},
					onTouchMove: function (e) {
						var t = this,
							a = t.zoom,
							i = a.gesture,
							s = a.image,
							r = a.velocity
						if (
							i.$imageEl &&
							0 !== i.$imageEl.length &&
							((t.allowClick = !1), s.isTouched && i.$slideEl)
						) {
							s.isMoved ||
								((s.width = i.$imageEl[0].offsetWidth),
								(s.height = i.$imageEl[0].offsetHeight),
								(s.startX = R.getTranslate(i.$imageWrapEl[0], 'x') || 0),
								(s.startY = R.getTranslate(i.$imageWrapEl[0], 'y') || 0),
								(i.slideWidth = i.$slideEl[0].offsetWidth),
								(i.slideHeight = i.$slideEl[0].offsetHeight),
								i.$imageWrapEl.transition(0),
								t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)))
							var n = s.width * a.scale,
								o = s.height * a.scale
							if (!(n < i.slideWidth && o < i.slideHeight)) {
								if (
									((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
									(s.maxX = -s.minX),
									(s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
									(s.maxY = -s.minY),
									(s.touchesCurrent.x = ('touchmove' === e.type
										? e.targetTouches[0]
										: e
									).pageX),
									(s.touchesCurrent.y = ('touchmove' === e.type
										? e.targetTouches[0]
										: e
									).pageY),
									!s.isMoved && !a.isScaling)
								) {
									if (
										t.isHorizontal() &&
										((Math.floor(s.minX) === Math.floor(s.startX) &&
											s.touchesCurrent.x < s.touchesStart.x) ||
											(Math.floor(s.maxX) === Math.floor(s.startX) &&
												s.touchesCurrent.x > s.touchesStart.x))
									)
										return void (s.isTouched = !1)
									if (
										!t.isHorizontal() &&
										((Math.floor(s.minY) === Math.floor(s.startY) &&
											s.touchesCurrent.y < s.touchesStart.y) ||
											(Math.floor(s.maxY) === Math.floor(s.startY) &&
												s.touchesCurrent.y > s.touchesStart.y))
									)
										return void (s.isTouched = !1)
								}
								e.preventDefault(),
									e.stopPropagation(),
									(s.isMoved = !0),
									(s.currentX =
										s.touchesCurrent.x - s.touchesStart.x + s.startX),
									(s.currentY =
										s.touchesCurrent.y - s.touchesStart.y + s.startY),
									s.currentX < s.minX &&
										(s.currentX =
											s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
									s.currentX > s.maxX &&
										(s.currentX =
											s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
									s.currentY < s.minY &&
										(s.currentY =
											s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
									s.currentY > s.maxY &&
										(s.currentY =
											s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
									r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
									r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
									r.prevTime || (r.prevTime = Date.now()),
									(r.x =
										(s.touchesCurrent.x - r.prevPositionX) /
										(Date.now() - r.prevTime) /
										2),
									(r.y =
										(s.touchesCurrent.y - r.prevPositionY) /
										(Date.now() - r.prevTime) /
										2),
									Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 &&
										(r.x = 0),
									Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 &&
										(r.y = 0),
									(r.prevPositionX = s.touchesCurrent.x),
									(r.prevPositionY = s.touchesCurrent.y),
									(r.prevTime = Date.now()),
									i.$imageWrapEl.transform(
										'translate3d(' + s.currentX + 'px, ' + s.currentY + 'px,0)'
									)
							}
						}
					},
					onTouchEnd: function () {
						var e = this.zoom,
							t = e.gesture,
							a = e.image,
							i = e.velocity
						if (t.$imageEl && 0 !== t.$imageEl.length) {
							if (!a.isTouched || !a.isMoved)
								return (a.isTouched = !1), void (a.isMoved = !1)
							;(a.isTouched = !1), (a.isMoved = !1)
							var s = 300,
								r = 300,
								n = i.x * s,
								o = a.currentX + n,
								n = i.y * r,
								n = a.currentY + n
							0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
								0 !== i.y && (r = Math.abs((n - a.currentY) / i.y))
							r = Math.max(s, r)
							;(a.currentX = o), (a.currentY = n)
							;(n = a.width * e.scale), (e = a.height * e.scale)
							;(a.minX = Math.min(t.slideWidth / 2 - n / 2, 0)),
								(a.maxX = -a.minX),
								(a.minY = Math.min(t.slideHeight / 2 - e / 2, 0)),
								(a.maxY = -a.minY),
								(a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
								(a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
								t.$imageWrapEl
									.transition(r)
									.transform(
										'translate3d(' + a.currentX + 'px, ' + a.currentY + 'px,0)'
									)
						}
					},
					onTransitionEnd: function () {
						var e = this.zoom,
							t = e.gesture
						t.$slideEl &&
							this.previousIndex !== this.activeIndex &&
							(t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
							t.$imageWrapEl.transform('translate3d(0,0,0)'),
							(e.scale = 1),
							(e.currentScale = 1),
							(t.$slideEl = void 0),
							(t.$imageEl = void 0),
							(t.$imageWrapEl = void 0))
					},
					toggle: function (e) {
						var t = this.zoom
						t.scale && 1 !== t.scale ? t.out() : t.in(e)
					},
					in: function (e) {
						var t,
							a,
							i,
							s = this,
							r = s.zoom,
							n = s.params.zoom,
							o = r.gesture,
							l = r.image
						o.$slideEl ||
							((o.$slideEl = s.clickedSlide
								? E(s.clickedSlide)
								: s.slides.eq(s.activeIndex)),
							(o.$imageEl = o.$slideEl.find('img, svg, canvas')),
							(o.$imageWrapEl = o.$imageEl.parent('.' + n.containerClass))),
							o.$imageEl &&
								0 !== o.$imageEl.length &&
								(o.$slideEl.addClass('' + n.zoomedSlideClass),
								(l =
									void 0 === l.touchesStart.x && e
										? ((i = ('touchend' === e.type ? e.changedTouches[0] : e)
												.pageX),
										  ('touchend' === e.type ? e.changedTouches[0] : e).pageY)
										: ((i = l.touchesStart.x), l.touchesStart.y)),
								(r.scale =
									o.$imageWrapEl.attr('data-swiper-zoom') || n.maxRatio),
								(r.currentScale =
									o.$imageWrapEl.attr('data-swiper-zoom') || n.maxRatio),
								e
									? ((n = o.$slideEl[0].offsetWidth),
									  (e = o.$slideEl[0].offsetHeight),
									  (t = o.$slideEl.offset().left + n / 2 - i),
									  (a = o.$slideEl.offset().top + e / 2 - l),
									  (i = o.$imageEl[0].offsetWidth),
									  (l = o.$imageEl[0].offsetHeight),
									  (i = i * r.scale),
									  (l = l * r.scale),
									  (i = -(n = Math.min(n / 2 - i / 2, 0))),
									  (l = -(e = Math.min(e / 2 - l / 2, 0))),
									  i < (t = (t = t * r.scale) < n ? n : t) && (t = i),
									  l < (a = (a = a * r.scale) < e ? e : a) && (a = l))
									: (a = t = 0),
								o.$imageWrapEl
									.transition(300)
									.transform('translate3d(' + t + 'px, ' + a + 'px,0)'),
								o.$imageEl
									.transition(300)
									.transform('translate3d(0,0,0) scale(' + r.scale + ')'))
					},
					out: function () {
						var e = this,
							t = e.zoom,
							a = e.params.zoom,
							i = t.gesture
						i.$slideEl ||
							((i.$slideEl = e.clickedSlide
								? E(e.clickedSlide)
								: e.slides.eq(e.activeIndex)),
							(i.$imageEl = i.$slideEl.find('img, svg, canvas')),
							(i.$imageWrapEl = i.$imageEl.parent('.' + a.containerClass))),
							i.$imageEl &&
								0 !== i.$imageEl.length &&
								((t.scale = 1),
								(t.currentScale = 1),
								i.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
								i.$imageEl
									.transition(300)
									.transform('translate3d(0,0,0) scale(1)'),
								i.$slideEl.removeClass('' + a.zoomedSlideClass),
								(i.$slideEl = void 0))
					},
					enable: function () {
						var e,
							t = this,
							a = t.zoom
						a.enabled ||
							((a.enabled = !0),
							(e = !(
								'touchstart' !== t.touchEvents.start ||
								!q.passiveListener ||
								!t.params.passiveListeners
							) && {
								passive: !0,
								capture: !1,
							}),
							q.gestures
								? (t.$wrapperEl.on(
										'gesturestart',
										'.swiper-slide',
										a.onGestureStart,
										e
								  ),
								  t.$wrapperEl.on(
										'gesturechange',
										'.swiper-slide',
										a.onGestureChange,
										e
								  ),
								  t.$wrapperEl.on(
										'gestureend',
										'.swiper-slide',
										a.onGestureEnd,
										e
								  ))
								: 'touchstart' === t.touchEvents.start &&
								  (t.$wrapperEl.on(
										t.touchEvents.start,
										'.swiper-slide',
										a.onGestureStart,
										e
								  ),
								  t.$wrapperEl.on(
										t.touchEvents.move,
										'.swiper-slide',
										a.onGestureChange,
										e
								  ),
								  t.$wrapperEl.on(
										t.touchEvents.end,
										'.swiper-slide',
										a.onGestureEnd,
										e
								  )),
							t.$wrapperEl.on(
								t.touchEvents.move,
								'.' + t.params.zoom.containerClass,
								a.onTouchMove
							))
					},
					disable: function () {
						var e,
							t = this,
							a = t.zoom
						a.enabled &&
							((t.zoom.enabled = !1),
							(e = !(
								'touchstart' !== t.touchEvents.start ||
								!q.passiveListener ||
								!t.params.passiveListeners
							) && {
								passive: !0,
								capture: !1,
							}),
							q.gestures
								? (t.$wrapperEl.off(
										'gesturestart',
										'.swiper-slide',
										a.onGestureStart,
										e
								  ),
								  t.$wrapperEl.off(
										'gesturechange',
										'.swiper-slide',
										a.onGestureChange,
										e
								  ),
								  t.$wrapperEl.off(
										'gestureend',
										'.swiper-slide',
										a.onGestureEnd,
										e
								  ))
								: 'touchstart' === t.touchEvents.start &&
								  (t.$wrapperEl.off(
										t.touchEvents.start,
										'.swiper-slide',
										a.onGestureStart,
										e
								  ),
								  t.$wrapperEl.off(
										t.touchEvents.move,
										'.swiper-slide',
										a.onGestureChange,
										e
								  ),
								  t.$wrapperEl.off(
										t.touchEvents.end,
										'.swiper-slide',
										a.onGestureEnd,
										e
								  )),
							t.$wrapperEl.off(
								t.touchEvents.move,
								'.' + t.params.zoom.containerClass,
								a.onTouchMove
							))
					},
				},
				G = {
					loadInSlide: function (e, o) {
						void 0 === o && (o = !0)
						var l,
							d = this,
							p = d.params.lazy
						void 0 !== e &&
							0 !== d.slides.length &&
							((e = (l =
								d.virtual && d.params.virtual.enabled
									? d.$wrapperEl.children(
											'.' +
												d.params.slideClass +
												'[data-swiper-slide-index="' +
												e +
												'"]'
									  )
									: d.slides.eq(e)).find(
								'.' +
									p.elementClass +
									':not(.' +
									p.loadedClass +
									'):not(.' +
									p.loadingClass +
									')'
							)),
							0 !==
								(e =
									l.hasClass(p.elementClass) &&
									!l.hasClass(p.loadedClass) &&
									!l.hasClass(p.loadingClass)
										? e.add(l[0])
										: e).length &&
								e.each(function (e, t) {
									var a = E(t)
									a.addClass(p.loadingClass)
									var i = a.attr('data-background'),
										s = a.attr('data-src'),
										r = a.attr('data-srcset'),
										n = a.attr('data-sizes')
									d.loadImage(a[0], s || i, r, n, !1, function () {
										var e, t
										null == d ||
											!d ||
											(d && !d.params) ||
											d.destroyed ||
											(i
												? (a.css('background-image', 'url("' + i + '")'),
												  a.removeAttr('data-background'))
												: (r &&
														(a.attr('srcset', r), a.removeAttr('data-srcset')),
												  n && (a.attr('sizes', n), a.removeAttr('data-sizes')),
												  s && (a.attr('src', s), a.removeAttr('data-src'))),
											a.addClass(p.loadedClass).removeClass(p.loadingClass),
											l.find('.' + p.preloaderClass).remove(),
											d.params.loop &&
												o &&
												((t = l.attr('data-swiper-slide-index')),
												l.hasClass(d.params.slideDuplicateClass)
													? ((e = d.$wrapperEl.children(
															'[data-swiper-slide-index="' +
																t +
																'"]:not(.' +
																d.params.slideDuplicateClass +
																')'
													  )),
													  d.lazy.loadInSlide(e.index(), !1))
													: ((t = d.$wrapperEl.children(
															'.' +
																d.params.slideDuplicateClass +
																'[data-swiper-slide-index="' +
																t +
																'"]'
													  )),
													  d.lazy.loadInSlide(t.index(), !1))),
											d.emit('lazyImageReady', l[0], a[0]))
									}),
										d.emit('lazyImageLoad', l[0], a[0])
								}))
					},
					load: function () {
						var a = this,
							t = a.$wrapperEl,
							i = a.params,
							s = a.slides,
							e = a.activeIndex,
							r = a.virtual && i.virtual.enabled,
							n = i.lazy,
							o = i.slidesPerView
						function l(e) {
							if (r) {
								if (
									t.children(
										'.' + i.slideClass + '[data-swiper-slide-index="' + e + '"]'
									).length
								)
									return 1
							} else if (s[e]) return 1
						}
						function d(e) {
							return r ? E(e).attr('data-swiper-slide-index') : E(e).index()
						}
						if (
							('auto' === o && (o = 0),
							a.lazy.initialImageLoaded || (a.lazy.initialImageLoaded = !0),
							a.params.watchSlidesVisibility)
						)
							t.children('.' + i.slideVisibleClass).each(function (e, t) {
								t = r ? E(t).attr('data-swiper-slide-index') : E(t).index()
								a.lazy.loadInSlide(t)
							})
						else if (1 < o)
							for (var p = e; p < e + o; p += 1) l(p) && a.lazy.loadInSlide(p)
						else a.lazy.loadInSlide(e)
						if (n.loadPrevNext)
							if (1 < o || (n.loadPrevNextAmount && 1 < n.loadPrevNextAmount)) {
								for (
									var c = n.loadPrevNextAmount,
										n = o,
										u = Math.min(e + n + Math.max(c, n), s.length),
										c = Math.max(e - Math.max(n, c), 0),
										h = e + o;
									h < u;
									h += 1
								)
									l(h) && a.lazy.loadInSlide(h)
								for (var v = c; v < e; v += 1) l(v) && a.lazy.loadInSlide(v)
							} else {
								c = t.children('.' + i.slideNextClass)
								0 < c.length && a.lazy.loadInSlide(d(c))
								c = t.children('.' + i.slidePrevClass)
								0 < c.length && a.lazy.loadInSlide(d(c))
							}
					},
				},
				N = {
					LinearSpline: function (e, t) {
						var a, i, s, r, n
						return (
							(this.x = e),
							(this.y = t),
							(this.lastIndex = e.length - 1),
							(this.interpolate = function (e) {
								return e
									? ((n = (function (e, t) {
											for (i = -1, a = e.length; 1 < a - i; )
												e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s)
											return a
									  })(this.x, e)),
									  (r = n - 1),
									  ((e - this.x[r]) * (this.y[n] - this.y[r])) /
											(this.x[n] - this.x[r]) +
											this.y[r])
									: 0
							}),
							this
						)
					},
					getInterpolateFunction: function (e) {
						var t = this
						t.controller.spline ||
							(t.controller.spline = t.params.loop
								? new N.LinearSpline(t.slidesGrid, e.slidesGrid)
								: new N.LinearSpline(t.snapGrid, e.snapGrid))
					},
					setTranslate: function (e, t) {
						var a,
							i,
							s = this,
							r = s.controller.control
						function n(e) {
							var t = s.rtlTranslate ? -s.translate : s.translate
							'slide' === s.params.controller.by &&
								(s.controller.getInterpolateFunction(e),
								(i = -s.controller.spline.interpolate(-t))),
								(i && 'container' !== s.params.controller.by) ||
									((a =
										(e.maxTranslate() - e.minTranslate()) /
										(s.maxTranslate() - s.minTranslate())),
									(i = (t - s.minTranslate()) * a + e.minTranslate())),
								s.params.controller.inverse && (i = e.maxTranslate() - i),
								e.updateProgress(i),
								e.setTranslate(i, s),
								e.updateActiveIndex(),
								e.updateSlidesClasses()
						}
						if (Array.isArray(r))
							for (var o = 0; o < r.length; o += 1)
								r[o] !== t && r[o] instanceof S && n(r[o])
						else r instanceof S && t !== r && n(r)
					},
					setTransition: function (t, e) {
						var a,
							i = this,
							s = i.controller.control
						function r(e) {
							e.setTransition(t, i),
								0 !== t &&
									(e.transitionStart(),
									e.params.autoHeight &&
										R.nextTick(function () {
											e.updateAutoHeight()
										}),
									e.$wrapperEl.transitionEnd(function () {
										s &&
											(e.params.loop &&
												'slide' === i.params.controller.by &&
												e.loopFix(),
											e.transitionEnd())
									}))
						}
						if (Array.isArray(s))
							for (a = 0; a < s.length; a += 1)
								s[a] !== e && s[a] instanceof S && r(s[a])
						else s instanceof S && e !== s && r(s)
					},
				},
				B = {
					makeElFocusable: function (e) {
						return e.attr('tabIndex', '0'), e
					},
					addElRole: function (e, t) {
						return e.attr('role', t), e
					},
					addElLabel: function (e, t) {
						return e.attr('aria-label', t), e
					},
					disableEl: function (e) {
						return e.attr('aria-disabled', !0), e
					},
					enableEl: function (e) {
						return e.attr('aria-disabled', !1), e
					},
					onEnterKey: function (e) {
						var t = this,
							a = t.params.a11y
						13 === e.keyCode &&
							((e = E(e.target)),
							t.navigation &&
								t.navigation.$nextEl &&
								e.is(t.navigation.$nextEl) &&
								((t.isEnd && !t.params.loop) || t.slideNext(),
								t.isEnd
									? t.a11y.notify(a.lastSlideMessage)
									: t.a11y.notify(a.nextSlideMessage)),
							t.navigation &&
								t.navigation.$prevEl &&
								e.is(t.navigation.$prevEl) &&
								((t.isBeginning && !t.params.loop) || t.slidePrev(),
								t.isBeginning
									? t.a11y.notify(a.firstSlideMessage)
									: t.a11y.notify(a.prevSlideMessage)),
							t.pagination &&
								e.is('.' + t.params.pagination.bulletClass) &&
								e[0].click())
					},
					notify: function (e) {
						var t = this.a11y.liveRegion
						0 !== t.length && (t.html(''), t.html(e))
					},
					updateNavigation: function () {
						var e,
							t,
							a = this
						a.params.loop ||
							((e = (t = a.navigation).$nextEl),
							(t = t.$prevEl) &&
								0 < t.length &&
								(a.isBeginning ? a.a11y.disableEl(t) : a.a11y.enableEl(t)),
							e &&
								0 < e.length &&
								(a.isEnd ? a.a11y.disableEl(e) : a.a11y.enableEl(e)))
					},
					updatePagination: function () {
						var a = this,
							i = a.params.a11y
						a.pagination &&
							a.params.pagination.clickable &&
							a.pagination.bullets &&
							a.pagination.bullets.length &&
							a.pagination.bullets.each(function (e, t) {
								t = E(t)
								a.a11y.makeElFocusable(t),
									a.a11y.addElRole(t, 'button'),
									a.a11y.addElLabel(
										t,
										i.paginationBulletMessage.replace(
											/{{index}}/,
											t.index() + 1
										)
									)
							})
					},
					init: function () {
						var e = this
						e.$el.append(e.a11y.liveRegion)
						var t,
							a,
							i = e.params.a11y
						e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
							e.navigation &&
								e.navigation.$prevEl &&
								(a = e.navigation.$prevEl),
							t &&
								(e.a11y.makeElFocusable(t),
								e.a11y.addElRole(t, 'button'),
								e.a11y.addElLabel(t, i.nextSlideMessage),
								t.on('keydown', e.a11y.onEnterKey)),
							a &&
								(e.a11y.makeElFocusable(a),
								e.a11y.addElRole(a, 'button'),
								e.a11y.addElLabel(a, i.prevSlideMessage),
								a.on('keydown', e.a11y.onEnterKey)),
							e.pagination &&
								e.params.pagination.clickable &&
								e.pagination.bullets &&
								e.pagination.bullets.length &&
								e.pagination.$el.on(
									'keydown',
									'.' + e.params.pagination.bulletClass,
									e.a11y.onEnterKey
								)
					},
					destroy: function () {
						var e,
							t,
							a = this
						a.a11y.liveRegion &&
							0 < a.a11y.liveRegion.length &&
							a.a11y.liveRegion.remove(),
							a.navigation &&
								a.navigation.$nextEl &&
								(e = a.navigation.$nextEl),
							a.navigation &&
								a.navigation.$prevEl &&
								(t = a.navigation.$prevEl),
							e && e.off('keydown', a.a11y.onEnterKey),
							t && t.off('keydown', a.a11y.onEnterKey),
							a.pagination &&
								a.params.pagination.clickable &&
								a.pagination.bullets &&
								a.pagination.bullets.length &&
								a.pagination.$el.off(
									'keydown',
									'.' + a.params.pagination.bulletClass,
									a.a11y.onEnterKey
								)
					},
				},
				V = {
					init: function () {
						var e = this
						if (e.params.history) {
							if (!F.history || !F.history.pushState)
								return (
									(e.params.history.enabled = !1),
									void (e.params.hashNavigation.enabled = !0)
								)
							var t = e.history
							;(t.initialized = !0),
								(t.paths = V.getPathValues()),
								(t.paths.key || t.paths.value) &&
									(t.scrollToSlide(
										0,
										t.paths.value,
										e.params.runCallbacksOnInit
									),
									e.params.history.replaceState ||
										F.addEventListener(
											'popstate',
											e.history.setHistoryPopState
										))
						}
					},
					destroy: function () {
						this.params.history.replaceState ||
							F.removeEventListener('popstate', this.history.setHistoryPopState)
					},
					setHistoryPopState: function () {
						;(this.history.paths = V.getPathValues()),
							this.history.scrollToSlide(
								this.params.speed,
								this.history.paths.value,
								!1
							)
					},
					getPathValues: function () {
						var e = F.location.pathname
								.slice(1)
								.split('/')
								.filter(function (e) {
									return '' !== e
								}),
							t = e.length
						return {
							key: e[t - 2],
							value: e[t - 1],
						}
					},
					setHistory: function (e, t) {
						this.history.initialized &&
							this.params.history.enabled &&
							((t = this.slides.eq(t)),
							(t = V.slugify(t.attr('data-history'))),
							F.location.pathname.includes(e) || (t = e + '/' + t),
							((e = F.history.state) && e.value === t) ||
								(this.params.history.replaceState
									? F.history.replaceState(
											{
												value: t,
											},
											null,
											t
									  )
									: F.history.pushState(
											{
												value: t,
											},
											null,
											t
									  )))
					},
					slugify: function (e) {
						return e
							.toString()
							.replace(/\s+/g, '-')
							.replace(/[^\w-]+/g, '')
							.replace(/--+/g, '-')
							.replace(/^-+/, '')
							.replace(/-+$/, '')
					},
					scrollToSlide: function (e, t, a) {
						var i = this
						if (t)
							for (var s = 0, r = i.slides.length; s < r; s += 1) {
								var n = i.slides.eq(s)
								V.slugify(n.attr('data-history')) !== t ||
									n.hasClass(i.params.slideDuplicateClass) ||
									((n = n.index()), i.slideTo(n, e, a))
							}
						else i.slideTo(0, e, a)
					},
				},
				X = {
					onHashCange: function () {
						var e = this,
							t = c.location.hash.replace('#', '')
						t === e.slides.eq(e.activeIndex).attr('data-hash') ||
							(void 0 !==
								(t = e.$wrapperEl
									.children(
										'.' + e.params.slideClass + '[data-hash="' + t + '"]'
									)
									.index()) &&
								e.slideTo(t))
					},
					setHash: function () {
						var e = this
						e.hashNavigation.initialized &&
							e.params.hashNavigation.enabled &&
							(e.params.hashNavigation.replaceState &&
							F.history &&
							F.history.replaceState
								? F.history.replaceState(
										null,
										null,
										'#' + e.slides.eq(e.activeIndex).attr('data-hash') || ''
								  )
								: ((e =
										(e = e.slides.eq(e.activeIndex)).attr('data-hash') ||
										e.attr('data-history')),
								  (c.location.hash = e || '')))
					},
					init: function () {
						var e = this
						if (
							!(
								!e.params.hashNavigation.enabled ||
								(e.params.history && e.params.history.enabled)
							)
						) {
							e.hashNavigation.initialized = !0
							var t = c.location.hash.replace('#', '')
							if (t)
								for (var a = 0, i = e.slides.length; a < i; a += 1) {
									var s = e.slides.eq(a)
									;(s.attr('data-hash') || s.attr('data-history')) !== t ||
										s.hasClass(e.params.slideDuplicateClass) ||
										((s = s.index()),
										e.slideTo(s, 0, e.params.runCallbacksOnInit, !0))
								}
							e.params.hashNavigation.watchState &&
								E(F).on('hashchange', e.hashNavigation.onHashCange)
						}
					},
					destroy: function () {
						this.params.hashNavigation.watchState &&
							E(F).off('hashchange', this.hashNavigation.onHashCange)
					},
				},
				Y = {
					run: function () {
						var e = this,
							t = e.slides.eq(e.activeIndex),
							a = e.params.autoplay.delay
						t.attr('data-swiper-autoplay') &&
							(a = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
							clearTimeout(e.autoplay.timeout),
							(e.autoplay.timeout = R.nextTick(function () {
								e.params.autoplay.reverseDirection
									? e.params.loop
										? (e.loopFix(),
										  e.slidePrev(e.params.speed, !0, !0),
										  e.emit('autoplay'))
										: e.isBeginning
										? e.params.autoplay.stopOnLastSlide
											? e.autoplay.stop()
											: (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
											  e.emit('autoplay'))
										: (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
									: e.params.loop
									? (e.loopFix(),
									  e.slideNext(e.params.speed, !0, !0),
									  e.emit('autoplay'))
									: e.isEnd
									? e.params.autoplay.stopOnLastSlide
										? e.autoplay.stop()
										: (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))
									: (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'))
							}, a))
					},
					start: function () {
						var e = this
						return (
							void 0 === e.autoplay.timeout &&
							!e.autoplay.running &&
							((e.autoplay.running = !0),
							e.emit('autoplayStart'),
							e.autoplay.run(),
							!0)
						)
					},
					stop: function () {
						var e = this
						return (
							!!e.autoplay.running &&
							void 0 !== e.autoplay.timeout &&
							(e.autoplay.timeout &&
								(clearTimeout(e.autoplay.timeout),
								(e.autoplay.timeout = void 0)),
							(e.autoplay.running = !1),
							e.emit('autoplayStop'),
							!0)
						)
					},
					pause: function (e) {
						var t = this
						t.autoplay.running &&
							(t.autoplay.paused ||
								(t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
								(t.autoplay.paused = !0),
								0 !== e && t.params.autoplay.waitForTransition
									? (t.$wrapperEl[0].addEventListener(
											'transitionend',
											t.autoplay.onTransitionEnd
									  ),
									  t.$wrapperEl[0].addEventListener(
											'webkitTransitionEnd',
											t.autoplay.onTransitionEnd
									  ))
									: ((t.autoplay.paused = !1), t.autoplay.run())))
					},
				},
				j = {
					setTranslate: function () {
						for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
							var i = e.slides.eq(a),
								s = -i[0].swiperSlideOffset
							e.params.virtualTranslate || (s -= e.translate)
							var r = 0
							e.isHorizontal() || ((r = s), (s = 0))
							var n = e.params.fadeEffect.crossFade
								? Math.max(1 - Math.abs(i[0].progress), 0)
								: 1 + Math.min(Math.max(i[0].progress, -1), 0)
							i.css({
								opacity: n,
							}).transform('translate3d(' + s + 'px, ' + r + 'px, 0px)')
						}
					},
					setTransition: function (e) {
						var a,
							i = this,
							t = i.slides,
							s = i.$wrapperEl
						t.transition(e),
							i.params.virtualTranslate &&
								0 !== e &&
								((a = !1),
								t.transitionEnd(function () {
									if (!a && i && !i.destroyed) {
										;(a = !0), (i.animating = !1)
										for (
											var e = ['webkitTransitionEnd', 'transitionend'], t = 0;
											t < e.length;
											t += 1
										)
											s.trigger(e[t])
									}
								}))
					},
				},
				U = {
					setTranslate: function () {
						var e,
							t = this,
							a = t.$el,
							i = t.$wrapperEl,
							s = t.slides,
							r = t.width,
							n = t.height,
							o = t.rtlTranslate,
							l = t.size,
							d = t.params.cubeEffect,
							p = t.isHorizontal(),
							c = t.virtual && t.params.virtual.enabled,
							u = 0
						d.shadow &&
							(p
								? (0 === (e = i.find('.swiper-cube-shadow')).length &&
										((e = E('<div class="swiper-cube-shadow"></div>')),
										i.append(e)),
								  e.css({
										height: r + 'px',
								  }))
								: 0 === (e = a.find('.swiper-cube-shadow')).length &&
								  ((e = E('<div class="swiper-cube-shadow"></div>')),
								  a.append(e)))
						for (var h, v = 0; v < s.length; v += 1) {
							var m = s.eq(v),
								f = v,
								g =
									90 *
									(f = c ? parseInt(m.attr('data-swiper-slide-index'), 10) : f),
								b = Math.floor(g / 360)
							o && ((g = -g), (b = Math.floor(-g / 360)))
							var w = Math.max(Math.min(m[0].progress, 1), -1),
								y = 0,
								x = 0,
								T = 0
							f % 4 == 0
								? ((y = 4 * -b * l), (T = 0))
								: (f - 1) % 4 == 0
								? ((y = 0), (T = 4 * -b * l))
								: (f - 2) % 4 == 0
								? ((y = l + 4 * b * l), (T = l))
								: (f - 3) % 4 == 0 && ((y = -l), (T = 3 * l + 4 * l * b)),
								o && (y = -y),
								p || ((x = y), (y = 0)),
								w <= 1 &&
									-1 < w &&
									(u = o ? 90 * -f - 90 * w : 90 * f + 90 * w),
								m.transform(
									'rotateX(' +
										(p ? 0 : -g) +
										'deg) rotateY(' +
										(p ? g : 0) +
										'deg) translate3d(' +
										y +
										'px, ' +
										x +
										'px, ' +
										T +
										'px)'
								),
								d.slideShadows &&
									((x = p
										? m.find('.swiper-slide-shadow-left')
										: m.find('.swiper-slide-shadow-top')),
									(T = p
										? m.find('.swiper-slide-shadow-right')
										: m.find('.swiper-slide-shadow-bottom')),
									0 === x.length &&
										((x = E(
											'<div class="swiper-slide-shadow-' +
												(p ? 'left' : 'top') +
												'"></div>'
										)),
										m.append(x)),
									0 === T.length &&
										((T = E(
											'<div class="swiper-slide-shadow-' +
												(p ? 'right' : 'bottom') +
												'"></div>'
										)),
										m.append(T)),
									x.length && (x[0].style.opacity = Math.max(-w, 0)),
									T.length && (T[0].style.opacity = Math.max(w, 0)))
						}
						i.css({
							'-webkit-transform-origin': '50% 50% -' + l / 2 + 'px',
							'-moz-transform-origin': '50% 50% -' + l / 2 + 'px',
							'-ms-transform-origin': '50% 50% -' + l / 2 + 'px',
							'transform-origin': '50% 50% -' + l / 2 + 'px',
						}),
							d.shadow &&
								(p
									? e.transform(
											'translate3d(0px, ' +
												(r / 2 + d.shadowOffset) +
												'px, ' +
												-r / 2 +
												'px) rotateX(90deg) rotateZ(0deg) scale(' +
												d.shadowScale +
												')'
									  )
									: ((h = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90)),
									  (a =
											1.5 -
											(Math.sin((2 * h * Math.PI) / 360) / 2 +
												Math.cos((2 * h * Math.PI) / 360) / 2)),
									  (r = d.shadowScale),
									  (h = d.shadowScale / a),
									  (a = d.shadowOffset),
									  e.transform(
											'scale3d(' +
												r +
												', 1, ' +
												h +
												') translate3d(0px, ' +
												(n / 2 + a) +
												'px, ' +
												-n / 2 / h +
												'px) rotateX(-90deg)'
									  ))),
							i.transform(
								'translate3d(0px,0,' +
									(W.isSafari || W.isUiWebView ? -l / 2 : 0) +
									'px) rotateX(' +
									(t.isHorizontal() ? 0 : u) +
									'deg) rotateY(' +
									(t.isHorizontal() ? -u : 0) +
									'deg)'
							)
					},
					setTransition: function (e) {
						var t = this.$el
						this.slides
							.transition(e)
							.find(
								'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
							)
							.transition(e),
							this.params.cubeEffect.shadow &&
								!this.isHorizontal() &&
								t.find('.swiper-cube-shadow').transition(e)
					},
				},
				K = {
					setTranslate: function () {
						for (
							var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
							i < t.length;
							i += 1
						) {
							var s,
								r,
								n = t.eq(i),
								o = n[0].progress,
								l =
									-180 *
									(o = e.params.flipEffect.limitRotation
										? Math.max(Math.min(n[0].progress, 1), -1)
										: o),
								d = 0,
								p = -n[0].swiperSlideOffset,
								c = 0
							e.isHorizontal()
								? a && (l = -l)
								: ((c = p), (d = -l), (l = p = 0)),
								(n[0].style.zIndex = -Math.abs(Math.round(o)) + t.length),
								e.params.flipEffect.slideShadows &&
									((s = e.isHorizontal()
										? n.find('.swiper-slide-shadow-left')
										: n.find('.swiper-slide-shadow-top')),
									(r = e.isHorizontal()
										? n.find('.swiper-slide-shadow-right')
										: n.find('.swiper-slide-shadow-bottom')),
									0 === s.length &&
										((s = E(
											'<div class="swiper-slide-shadow-' +
												(e.isHorizontal() ? 'left' : 'top') +
												'"></div>'
										)),
										n.append(s)),
									0 === r.length &&
										((r = E(
											'<div class="swiper-slide-shadow-' +
												(e.isHorizontal() ? 'right' : 'bottom') +
												'"></div>'
										)),
										n.append(r)),
									s.length && (s[0].style.opacity = Math.max(-o, 0)),
									r.length && (r[0].style.opacity = Math.max(o, 0))),
								n.transform(
									'translate3d(' +
										p +
										'px, ' +
										c +
										'px, 0px) rotateX(' +
										d +
										'deg) rotateY(' +
										l +
										'deg)'
								)
						}
					},
					setTransition: function (e) {
						var a,
							i = this,
							t = i.slides,
							s = i.activeIndex,
							r = i.$wrapperEl
						t
							.transition(e)
							.find(
								'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
							)
							.transition(e),
							i.params.virtualTranslate &&
								0 !== e &&
								((a = !1),
								t.eq(s).transitionEnd(function () {
									if (!a && i && !i.destroyed) {
										;(a = !0), (i.animating = !1)
										for (
											var e = ['webkitTransitionEnd', 'transitionend'], t = 0;
											t < e.length;
											t += 1
										)
											r.trigger(e[t])
									}
								}))
					},
				},
				_ = {
					setTranslate: function () {
						for (
							var e = this,
								t = e.width,
								a = e.height,
								i = e.slides,
								s = e.$wrapperEl,
								r = e.slidesSizesGrid,
								n = e.params.coverflowEffect,
								o = e.isHorizontal(),
								e = e.translate,
								l = o ? t / 2 - e : a / 2 - e,
								d = o ? n.rotate : -n.rotate,
								p = n.depth,
								c = 0,
								u = i.length;
							c < u;
							c += 1
						) {
							var h = i.eq(c),
								v = r[c],
								m = ((l - h[0].swiperSlideOffset - v / 2) / v) * n.modifier,
								f = o ? d * m : 0,
								g = o ? 0 : d * m,
								b = -p * Math.abs(m),
								w = o ? 0 : n.stretch * m,
								v = o ? n.stretch * m : 0
							Math.abs(v) < 0.001 && (v = 0),
								Math.abs(w) < 0.001 && (w = 0),
								Math.abs(b) < 0.001 && (b = 0),
								Math.abs(f) < 0.001 && (f = 0),
								Math.abs(g) < 0.001 && (g = 0),
								h.transform(
									'translate3d(' +
										v +
										'px,' +
										w +
										'px,' +
										b +
										'px)  rotateX(' +
										g +
										'deg) rotateY(' +
										f +
										'deg)'
								),
								(h[0].style.zIndex = 1 - Math.abs(Math.round(m))),
								n.slideShadows &&
									((g = o
										? h.find('.swiper-slide-shadow-left')
										: h.find('.swiper-slide-shadow-top')),
									(f = o
										? h.find('.swiper-slide-shadow-right')
										: h.find('.swiper-slide-shadow-bottom')),
									0 === g.length &&
										((g = E(
											'<div class="swiper-slide-shadow-' +
												(o ? 'left' : 'top') +
												'"></div>'
										)),
										h.append(g)),
									0 === f.length &&
										((f = E(
											'<div class="swiper-slide-shadow-' +
												(o ? 'right' : 'bottom') +
												'"></div>'
										)),
										h.append(f)),
									g.length && (g[0].style.opacity = 0 < m ? m : 0),
									f.length && (f[0].style.opacity = 0 < -m ? -m : 0))
						}
						;(q.pointerEvents || q.prefixedPointerEvents) &&
							(s[0].style.perspectiveOrigin = l + 'px 50%')
					},
					setTransition: function (e) {
						this.slides
							.transition(e)
							.find(
								'.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
							)
							.transition(e)
					},
				},
				Z = {
					init: function () {
						var e = this,
							t = e.params.thumbs,
							a = e.constructor
						t.swiper instanceof a
							? ((e.thumbs.swiper = t.swiper),
							  R.extend(e.thumbs.swiper.originalParams, {
									watchSlidesProgress: !0,
									slideToClickedSlide: !1,
							  }),
							  R.extend(e.thumbs.swiper.params, {
									watchSlidesProgress: !0,
									slideToClickedSlide: !1,
							  }))
							: R.isObject(t.swiper) &&
							  ((e.thumbs.swiper = new a(
									R.extend({}, t.swiper, {
										watchSlidesVisibility: !0,
										watchSlidesProgress: !0,
										slideToClickedSlide: !1,
									})
							  )),
							  (e.thumbs.swiperCreated = !0)),
							e.thumbs.swiper.$el.addClass(
								e.params.thumbs.thumbsContainerClass
							),
							e.thumbs.swiper.on('tap', e.thumbs.onThumbClick)
					},
					onThumbClick: function () {
						var e,
							t,
							a,
							i = this,
							s = i.thumbs.swiper
						s &&
							((t = s.clickedIndex),
							((e = s.clickedSlide) &&
								E(e).hasClass(i.params.thumbs.slideThumbActiveClass)) ||
								null == t ||
								((a = s.params.loop
									? parseInt(
											E(s.clickedSlide).attr('data-swiper-slide-index'),
											10
									  )
									: t),
								i.params.loop &&
									((e = i.activeIndex),
									i.slides.eq(e).hasClass(i.params.slideDuplicateClass) &&
										(i.loopFix(),
										(i._clientLeft = i.$wrapperEl[0].clientLeft),
										(e = i.activeIndex)),
									(s = i.slides
										.eq(e)
										.prevAll('[data-swiper-slide-index="' + a + '"]')
										.eq(0)
										.index()),
									(t = i.slides
										.eq(e)
										.nextAll('[data-swiper-slide-index="' + a + '"]')
										.eq(0)
										.index()),
									(a =
										void 0 === s || (void 0 !== t && t - e < e - s) ? t : s)),
								i.slideTo(a)))
					},
					update: function (e) {
						var t = this,
							a = t.thumbs.swiper
						if (a) {
							var i,
								s,
								r,
								n =
									'auto' === a.params.slidesPerView
										? a.slidesPerViewDynamic()
										: a.params.slidesPerView
							t.realIndex !== a.realIndex &&
								((i = a.activeIndex),
								(r = a.params.loop
									? (a.slides.eq(i).hasClass(a.params.slideDuplicateClass) &&
											(a.loopFix(),
											(a._clientLeft = a.$wrapperEl[0].clientLeft),
											(i = a.activeIndex)),
									  (r = a.slides
											.eq(i)
											.prevAll(
												'[data-swiper-slide-index="' + t.realIndex + '"]'
											)
											.eq(0)
											.index()),
									  (s = a.slides
											.eq(i)
											.nextAll(
												'[data-swiper-slide-index="' + t.realIndex + '"]'
											)
											.eq(0)
											.index()),
									  void 0 === r
											? s
											: void 0 === s
											? r
											: s - i == i - r
											? i
											: s - i < i - r
											? s
											: r)
									: t.realIndex),
								a.visibleSlidesIndexes &&
									a.visibleSlidesIndexes.indexOf(r) < 0 &&
									(a.params.centeredSlides
										? (r =
												i < r
													? r - Math.floor(n / 2) + 1
													: r + Math.floor(n / 2) - 1)
										: i < r && (r = r - n + 1),
									a.slideTo(r, e ? 0 : void 0)))
							var o = 1,
								l = t.params.thumbs.slideThumbActiveClass
							if (
								(1 < t.params.slidesPerView &&
									!t.params.centeredSlides &&
									(o = t.params.slidesPerView),
								a.slides.removeClass(l),
								a.params.loop || a.params.virtual)
							)
								for (var d = 0; d < o; d += 1)
									a.$wrapperEl
										.children(
											'[data-swiper-slide-index="' + (t.realIndex + d) + '"]'
										)
										.addClass(l)
							else
								for (var p = 0; p < o; p += 1)
									a.slides.eq(t.realIndex + p).addClass(l)
						}
					},
				},
				u = [
					a,
					C,
					M,
					P,
					d,
					p,
					u,
					{
						name: 'mousewheel',
						params: {
							mousewheel: {
								enabled: !1,
								releaseOnEdges: !1,
								invert: !1,
								forceToAxis: !1,
								sensitivity: 1,
								eventsTarged: 'container',
							},
						},
						create: function () {
							var e = this
							R.extend(e, {
								mousewheel: {
									enabled: !1,
									enable: I.enable.bind(e),
									disable: I.disable.bind(e),
									handle: I.handle.bind(e),
									handleMouseEnter: I.handleMouseEnter.bind(e),
									handleMouseLeave: I.handleMouseLeave.bind(e),
									lastScrollTime: R.now(),
								},
							})
						},
						on: {
							init: function () {
								this.params.mousewheel.enabled && this.mousewheel.enable()
							},
							destroy: function () {
								this.mousewheel.enabled && this.mousewheel.disable()
							},
						},
					},
					{
						name: 'navigation',
						params: {
							navigation: {
								nextEl: null,
								prevEl: null,
								hideOnClick: !1,
								disabledClass: 'swiper-button-disabled',
								hiddenClass: 'swiper-button-hidden',
								lockClass: 'swiper-button-lock',
							},
						},
						create: function () {
							var e = this
							R.extend(e, {
								navigation: {
									init: L.init.bind(e),
									update: L.update.bind(e),
									destroy: L.destroy.bind(e),
									onNextClick: L.onNextClick.bind(e),
									onPrevClick: L.onPrevClick.bind(e),
								},
							})
						},
						on: {
							init: function () {
								this.navigation.init(), this.navigation.update()
							},
							toEdge: function () {
								this.navigation.update()
							},
							fromEdge: function () {
								this.navigation.update()
							},
							destroy: function () {
								this.navigation.destroy()
							},
							click: function (e) {
								var t,
									a = this,
									i = a.navigation,
									s = i.$nextEl,
									i = i.$prevEl
								!a.params.navigation.hideOnClick ||
									E(e.target).is(i) ||
									E(e.target).is(s) ||
									(s
										? (t = s.hasClass(a.params.navigation.hiddenClass))
										: i && (t = i.hasClass(a.params.navigation.hiddenClass)),
									!0 === t
										? a.emit('navigationShow', a)
										: a.emit('navigationHide', a),
									s && s.toggleClass(a.params.navigation.hiddenClass),
									i && i.toggleClass(a.params.navigation.hiddenClass))
							},
						},
					},
					{
						name: 'pagination',
						params: {
							pagination: {
								el: null,
								bulletElement: 'span',
								clickable: !1,
								hideOnClick: !1,
								renderBullet: null,
								renderProgressbar: null,
								renderFraction: null,
								renderCustom: null,
								progressbarOpposite: !1,
								type: 'bullets',
								dynamicBullets: !1,
								dynamicMainBullets: 1,
								formatFractionCurrent: function (e) {
									return e
								},
								formatFractionTotal: function (e) {
									return e
								},
								bulletClass: 'swiper-pagination-bullet',
								bulletActiveClass: 'swiper-pagination-bullet-active',
								modifierClass: 'swiper-pagination-',
								currentClass: 'swiper-pagination-current',
								totalClass: 'swiper-pagination-total',
								hiddenClass: 'swiper-pagination-hidden',
								progressbarFillClass: 'swiper-pagination-progressbar-fill',
								progressbarOppositeClass:
									'swiper-pagination-progressbar-opposite',
								clickableClass: 'swiper-pagination-clickable',
								lockClass: 'swiper-pagination-lock',
							},
						},
						create: function () {
							var e = this
							R.extend(e, {
								pagination: {
									init: D.init.bind(e),
									render: D.render.bind(e),
									update: D.update.bind(e),
									destroy: D.destroy.bind(e),
									dynamicBulletIndex: 0,
								},
							})
						},
						on: {
							init: function () {
								this.pagination.init(),
									this.pagination.render(),
									this.pagination.update()
							},
							activeIndexChange: function () {
								;(!this.params.loop && void 0 !== this.snapIndex) ||
									this.pagination.update()
							},
							snapIndexChange: function () {
								this.params.loop || this.pagination.update()
							},
							slidesLengthChange: function () {
								this.params.loop &&
									(this.pagination.render(), this.pagination.update())
							},
							snapGridLengthChange: function () {
								this.params.loop ||
									(this.pagination.render(), this.pagination.update())
							},
							destroy: function () {
								this.pagination.destroy()
							},
							click: function (e) {
								var t = this
								t.params.pagination.el &&
									t.params.pagination.hideOnClick &&
									0 < t.pagination.$el.length &&
									!E(e.target).hasClass(t.params.pagination.bulletClass) &&
									(!0 ===
									t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
										? t.emit('paginationShow', t)
										: t.emit('paginationHide', t),
									t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
							},
						},
					},
					{
						name: 'scrollbar',
						params: {
							scrollbar: {
								el: null,
								dragSize: 'auto',
								hide: !1,
								draggable: !1,
								snapOnRelease: !0,
								lockClass: 'swiper-scrollbar-lock',
								dragClass: 'swiper-scrollbar-drag',
							},
						},
						create: function () {
							var e = this
							R.extend(e, {
								scrollbar: {
									init: O.init.bind(e),
									destroy: O.destroy.bind(e),
									updateSize: O.updateSize.bind(e),
									setTranslate: O.setTranslate.bind(e),
									setTransition: O.setTransition.bind(e),
									enableDraggable: O.enableDraggable.bind(e),
									disableDraggable: O.disableDraggable.bind(e),
									setDragPosition: O.setDragPosition.bind(e),
									getPointerPosition: O.getPointerPosition.bind(e),
									onDragStart: O.onDragStart.bind(e),
									onDragMove: O.onDragMove.bind(e),
									onDragEnd: O.onDragEnd.bind(e),
									isTouched: !1,
									timeout: null,
									dragTimeout: null,
								},
							})
						},
						on: {
							init: function () {
								this.scrollbar.init(),
									this.scrollbar.updateSize(),
									this.scrollbar.setTranslate()
							},
							update: function () {
								this.scrollbar.updateSize()
							},
							resize: function () {
								this.scrollbar.updateSize()
							},
							observerUpdate: function () {
								this.scrollbar.updateSize()
							},
							setTranslate: function () {
								this.scrollbar.setTranslate()
							},
							setTransition: function (e) {
								this.scrollbar.setTransition(e)
							},
							destroy: function () {
								this.scrollbar.destroy()
							},
						},
					},
					{
						name: 'parallax',
						params: {
							parallax: {
								enabled: !1,
							},
						},
						create: function () {
							R.extend(this, {
								parallax: {
									setTransform: A.setTransform.bind(this),
									setTranslate: A.setTranslate.bind(this),
									setTransition: A.setTransition.bind(this),
								},
							})
						},
						on: {
							beforeInit: function () {
								this.params.parallax.enabled &&
									((this.params.watchSlidesProgress = !0),
									(this.originalParams.watchSlidesProgress = !0))
							},
							init: function () {
								this.params.parallax.enabled && this.parallax.setTranslate()
							},
							setTranslate: function () {
								this.params.parallax.enabled && this.parallax.setTranslate()
							},
							setTransition: function (e) {
								this.params.parallax.enabled && this.parallax.setTransition(e)
							},
						},
					},
					{
						name: 'zoom',
						params: {
							zoom: {
								enabled: !1,
								maxRatio: 3,
								minRatio: 1,
								toggle: !0,
								containerClass: 'swiper-zoom-container',
								zoomedSlideClass: 'swiper-slide-zoomed',
							},
						},
						create: function () {
							var i = this,
								t = {
									enabled: !1,
									scale: 1,
									currentScale: 1,
									isScaling: !1,
									gesture: {
										$slideEl: void 0,
										slideWidth: void 0,
										slideHeight: void 0,
										$imageEl: void 0,
										$imageWrapEl: void 0,
										maxRatio: 3,
									},
									image: {
										isTouched: void 0,
										isMoved: void 0,
										currentX: void 0,
										currentY: void 0,
										minX: void 0,
										minY: void 0,
										maxX: void 0,
										maxY: void 0,
										width: void 0,
										height: void 0,
										startX: void 0,
										startY: void 0,
										touchesStart: {},
										touchesCurrent: {},
									},
									velocity: {
										x: void 0,
										y: void 0,
										prevPositionX: void 0,
										prevPositionY: void 0,
										prevTime: void 0,
									},
								}
							'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
								.split(' ')
								.forEach(function (e) {
									t[e] = H[e].bind(i)
								}),
								R.extend(i, {
									zoom: t,
								})
							var s = 1
							Object.defineProperty(i.zoom, 'scale', {
								get: function () {
									return s
								},
								set: function (e) {
									var t, a
									s !== e &&
										((t = i.zoom.gesture.$imageEl
											? i.zoom.gesture.$imageEl[0]
											: void 0),
										(a = i.zoom.gesture.$slideEl
											? i.zoom.gesture.$slideEl[0]
											: void 0),
										i.emit('zoomChange', e, t, a)),
										(s = e)
								},
							})
						},
						on: {
							init: function () {
								this.params.zoom.enabled && this.zoom.enable()
							},
							destroy: function () {
								this.zoom.disable()
							},
							touchStart: function (e) {
								this.zoom.enabled && this.zoom.onTouchStart(e)
							},
							touchEnd: function (e) {
								this.zoom.enabled && this.zoom.onTouchEnd(e)
							},
							doubleTap: function (e) {
								this.params.zoom.enabled &&
									this.zoom.enabled &&
									this.params.zoom.toggle &&
									this.zoom.toggle(e)
							},
							transitionEnd: function () {
								this.zoom.enabled &&
									this.params.zoom.enabled &&
									this.zoom.onTransitionEnd()
							},
						},
					},
					{
						name: 'lazy',
						params: {
							lazy: {
								enabled: !1,
								loadPrevNext: !1,
								loadPrevNextAmount: 1,
								loadOnTransitionStart: !1,
								elementClass: 'swiper-lazy',
								loadingClass: 'swiper-lazy-loading',
								loadedClass: 'swiper-lazy-loaded',
								preloaderClass: 'swiper-lazy-preloader',
							},
						},
						create: function () {
							R.extend(this, {
								lazy: {
									initialImageLoaded: !1,
									load: G.load.bind(this),
									loadInSlide: G.loadInSlide.bind(this),
								},
							})
						},
						on: {
							beforeInit: function () {
								this.params.lazy.enabled &&
									this.params.preloadImages &&
									(this.params.preloadImages = !1)
							},
							init: function () {
								this.params.lazy.enabled &&
									!this.params.loop &&
									0 === this.params.initialSlide &&
									this.lazy.load()
							},
							scroll: function () {
								this.params.freeMode &&
									!this.params.freeModeSticky &&
									this.lazy.load()
							},
							resize: function () {
								this.params.lazy.enabled && this.lazy.load()
							},
							scrollbarDragMove: function () {
								this.params.lazy.enabled && this.lazy.load()
							},
							transitionStart: function () {
								var e = this
								e.params.lazy.enabled &&
									((!e.params.lazy.loadOnTransitionStart &&
										(e.params.lazy.loadOnTransitionStart ||
											e.lazy.initialImageLoaded)) ||
										e.lazy.load())
							},
							transitionEnd: function () {
								this.params.lazy.enabled &&
									!this.params.lazy.loadOnTransitionStart &&
									this.lazy.load()
							},
						},
					},
					{
						name: 'controller',
						params: {
							controller: {
								control: void 0,
								inverse: !1,
								by: 'slide',
							},
						},
						create: function () {
							var e = this
							R.extend(e, {
								controller: {
									control: e.params.controller.control,
									getInterpolateFunction: N.getInterpolateFunction.bind(e),
									setTranslate: N.setTranslate.bind(e),
									setTransition: N.setTransition.bind(e),
								},
							})
						},
						on: {
							update: function () {
								this.controller.control &&
									this.controller.spline &&
									((this.controller.spline = void 0),
									delete this.controller.spline)
							},
							resize: function () {
								this.controller.control &&
									this.controller.spline &&
									((this.controller.spline = void 0),
									delete this.controller.spline)
							},
							observerUpdate: function () {
								this.controller.control &&
									this.controller.spline &&
									((this.controller.spline = void 0),
									delete this.controller.spline)
							},
							setTranslate: function (e, t) {
								this.controller.control && this.controller.setTranslate(e, t)
							},
							setTransition: function (e, t) {
								this.controller.control && this.controller.setTransition(e, t)
							},
						},
					},
					{
						name: 'a11y',
						params: {
							a11y: {
								enabled: !0,
								notificationClass: 'swiper-notification',
								prevSlideMessage: 'Previous slide',
								nextSlideMessage: 'Next slide',
								firstSlideMessage: 'This is the first slide',
								lastSlideMessage: 'This is the last slide',
								paginationBulletMessage: 'Go to slide {{index}}',
							},
						},
						create: function () {
							var t = this
							R.extend(t, {
								a11y: {
									liveRegion: E(
										'<span class="' +
											t.params.a11y.notificationClass +
											'" aria-live="assertive" aria-atomic="true"></span>'
									),
								},
							}),
								Object.keys(B).forEach(function (e) {
									t.a11y[e] = B[e].bind(t)
								})
						},
						on: {
							init: function () {
								this.params.a11y.enabled &&
									(this.a11y.init(), this.a11y.updateNavigation())
							},
							toEdge: function () {
								this.params.a11y.enabled && this.a11y.updateNavigation()
							},
							fromEdge: function () {
								this.params.a11y.enabled && this.a11y.updateNavigation()
							},
							paginationUpdate: function () {
								this.params.a11y.enabled && this.a11y.updatePagination()
							},
							destroy: function () {
								this.params.a11y.enabled && this.a11y.destroy()
							},
						},
					},
					{
						name: 'history',
						params: {
							history: {
								enabled: !1,
								replaceState: !1,
								key: 'slides',
							},
						},
						create: function () {
							var e = this
							R.extend(e, {
								history: {
									init: V.init.bind(e),
									setHistory: V.setHistory.bind(e),
									setHistoryPopState: V.setHistoryPopState.bind(e),
									scrollToSlide: V.scrollToSlide.bind(e),
									destroy: V.destroy.bind(e),
								},
							})
						},
						on: {
							init: function () {
								this.params.history.enabled && this.history.init()
							},
							destroy: function () {
								this.params.history.enabled && this.history.destroy()
							},
							transitionEnd: function () {
								this.history.initialized &&
									this.history.setHistory(
										this.params.history.key,
										this.activeIndex
									)
							},
						},
					},
					{
						name: 'hash-navigation',
						params: {
							hashNavigation: {
								enabled: !1,
								replaceState: !1,
								watchState: !1,
							},
						},
						create: function () {
							var e = this
							R.extend(e, {
								hashNavigation: {
									initialized: !1,
									init: X.init.bind(e),
									destroy: X.destroy.bind(e),
									setHash: X.setHash.bind(e),
									onHashCange: X.onHashCange.bind(e),
								},
							})
						},
						on: {
							init: function () {
								this.params.hashNavigation.enabled && this.hashNavigation.init()
							},
							destroy: function () {
								this.params.hashNavigation.enabled &&
									this.hashNavigation.destroy()
							},
							transitionEnd: function () {
								this.hashNavigation.initialized && this.hashNavigation.setHash()
							},
						},
					},
					{
						name: 'autoplay',
						params: {
							autoplay: {
								enabled: !1,
								delay: 3e3,
								waitForTransition: !0,
								disableOnInteraction: !0,
								stopOnLastSlide: !1,
								reverseDirection: !1,
							},
						},
						create: function () {
							var t = this
							R.extend(t, {
								autoplay: {
									running: !1,
									paused: !1,
									run: Y.run.bind(t),
									start: Y.start.bind(t),
									stop: Y.stop.bind(t),
									pause: Y.pause.bind(t),
									onTransitionEnd: function (e) {
										t &&
											!t.destroyed &&
											t.$wrapperEl &&
											e.target === this &&
											(t.$wrapperEl[0].removeEventListener(
												'transitionend',
												t.autoplay.onTransitionEnd
											),
											t.$wrapperEl[0].removeEventListener(
												'webkitTransitionEnd',
												t.autoplay.onTransitionEnd
											),
											(t.autoplay.paused = !1),
											t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
									},
								},
							})
						},
						on: {
							init: function () {
								this.params.autoplay.enabled && this.autoplay.start()
							},
							beforeTransitionStart: function (e, t) {
								this.autoplay.running &&
									(t || !this.params.autoplay.disableOnInteraction
										? this.autoplay.pause(e)
										: this.autoplay.stop())
							},
							sliderFirstMove: function () {
								this.autoplay.running &&
									(this.params.autoplay.disableOnInteraction
										? this.autoplay.stop()
										: this.autoplay.pause())
							},
							destroy: function () {
								this.autoplay.running && this.autoplay.stop()
							},
						},
					},
					{
						name: 'effect-fade',
						params: {
							fadeEffect: {
								crossFade: !1,
							},
						},
						create: function () {
							R.extend(this, {
								fadeEffect: {
									setTranslate: j.setTranslate.bind(this),
									setTransition: j.setTransition.bind(this),
								},
							})
						},
						on: {
							beforeInit: function () {
								var e,
									t = this
								'fade' === t.params.effect &&
									(t.classNames.push(t.params.containerModifierClass + 'fade'),
									R.extend(
										t.params,
										(e = {
											slidesPerView: 1,
											slidesPerColumn: 1,
											slidesPerGroup: 1,
											watchSlidesProgress: !0,
											spaceBetween: 0,
											virtualTranslate: !0,
										})
									),
									R.extend(t.originalParams, e))
							},
							setTranslate: function () {
								'fade' === this.params.effect && this.fadeEffect.setTranslate()
							},
							setTransition: function (e) {
								'fade' === this.params.effect &&
									this.fadeEffect.setTransition(e)
							},
						},
					},
					{
						name: 'effect-cube',
						params: {
							cubeEffect: {
								slideShadows: !0,
								shadow: !0,
								shadowOffset: 20,
								shadowScale: 0.94,
							},
						},
						create: function () {
							R.extend(this, {
								cubeEffect: {
									setTranslate: U.setTranslate.bind(this),
									setTransition: U.setTransition.bind(this),
								},
							})
						},
						on: {
							beforeInit: function () {
								var e,
									t = this
								'cube' === t.params.effect &&
									(t.classNames.push(t.params.containerModifierClass + 'cube'),
									t.classNames.push(t.params.containerModifierClass + '3d'),
									R.extend(
										t.params,
										(e = {
											slidesPerView: 1,
											slidesPerColumn: 1,
											slidesPerGroup: 1,
											watchSlidesProgress: !0,
											resistanceRatio: 0,
											spaceBetween: 0,
											centeredSlides: !1,
											virtualTranslate: !0,
										})
									),
									R.extend(t.originalParams, e))
							},
							setTranslate: function () {
								'cube' === this.params.effect && this.cubeEffect.setTranslate()
							},
							setTransition: function (e) {
								'cube' === this.params.effect &&
									this.cubeEffect.setTransition(e)
							},
						},
					},
					{
						name: 'effect-flip',
						params: {
							flipEffect: {
								slideShadows: !0,
								limitRotation: !0,
							},
						},
						create: function () {
							R.extend(this, {
								flipEffect: {
									setTranslate: K.setTranslate.bind(this),
									setTransition: K.setTransition.bind(this),
								},
							})
						},
						on: {
							beforeInit: function () {
								var e,
									t = this
								'flip' === t.params.effect &&
									(t.classNames.push(t.params.containerModifierClass + 'flip'),
									t.classNames.push(t.params.containerModifierClass + '3d'),
									R.extend(
										t.params,
										(e = {
											slidesPerView: 1,
											slidesPerColumn: 1,
											slidesPerGroup: 1,
											watchSlidesProgress: !0,
											spaceBetween: 0,
											virtualTranslate: !0,
										})
									),
									R.extend(t.originalParams, e))
							},
							setTranslate: function () {
								'flip' === this.params.effect && this.flipEffect.setTranslate()
							},
							setTransition: function (e) {
								'flip' === this.params.effect &&
									this.flipEffect.setTransition(e)
							},
						},
					},
					{
						name: 'effect-coverflow',
						params: {
							coverflowEffect: {
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: !0,
							},
						},
						create: function () {
							R.extend(this, {
								coverflowEffect: {
									setTranslate: _.setTranslate.bind(this),
									setTransition: _.setTransition.bind(this),
								},
							})
						},
						on: {
							beforeInit: function () {
								var e = this
								'coverflow' === e.params.effect &&
									(e.classNames.push(
										e.params.containerModifierClass + 'coverflow'
									),
									e.classNames.push(e.params.containerModifierClass + '3d'),
									(e.params.watchSlidesProgress = !0),
									(e.originalParams.watchSlidesProgress = !0))
							},
							setTranslate: function () {
								'coverflow' === this.params.effect &&
									this.coverflowEffect.setTranslate()
							},
							setTransition: function (e) {
								'coverflow' === this.params.effect &&
									this.coverflowEffect.setTransition(e)
							},
						},
					},
					{
						name: 'thumbs',
						params: {
							thumbs: {
								swiper: null,
								slideThumbActiveClass: 'swiper-slide-thumb-active',
								thumbsContainerClass: 'swiper-container-thumbs',
							},
						},
						create: function () {
							R.extend(this, {
								thumbs: {
									swiper: null,
									init: Z.init.bind(this),
									update: Z.update.bind(this),
									onThumbClick: Z.onThumbClick.bind(this),
								},
							})
						},
						on: {
							beforeInit: function () {
								var e = this.params.thumbs
								e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
							},
							slideChange: function () {
								this.thumbs.swiper && this.thumbs.update()
							},
							update: function () {
								this.thumbs.swiper && this.thumbs.update()
							},
							resize: function () {
								this.thumbs.swiper && this.thumbs.update()
							},
							observerUpdate: function () {
								this.thumbs.swiper && this.thumbs.update()
							},
							setTransition: function (e) {
								var t = this.thumbs.swiper
								t && t.setTransition(e)
							},
							beforeDestroy: function () {
								var e = this.thumbs.swiper
								e && this.thumbs.swiperCreated && e && e.destroy()
							},
						},
					},
				]
			return (
				void 0 === S.use &&
					((S.use = S.Class.use), (S.installModule = S.Class.installModule)),
				S.use(u),
				S
			)
		}),
		'object' == typeof t && void 0 !== a
			? (a.exports = s())
			: 'function' == typeof define && define.amd
			? define(s)
			: ((i = i || self).Swiper = s())
})
