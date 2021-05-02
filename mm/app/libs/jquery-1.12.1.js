define('app/libs/jquery-1.12.1', function (e, t, n) {
	var r, i
	;(r = 'undefined' != typeof window ? window : this),
		(i = function (w, e) {
			function t(e, t) {
				return t.toUpperCase()
			}
			var f = [],
				h = w.document,
				c = f.slice,
				m = f.concat,
				s = f.push,
				i = f.indexOf,
				n = {},
				r = n.toString,
				g = n.hasOwnProperty,
				y = {},
				o = '1.12.1',
				T = function (e, t) {
					return new T.fn.init(e, t)
				},
				a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
				u = /^-ms-/,
				l = /-([\da-z])/gi
			function d(e) {
				var t = !!e && 'length' in e && e.length,
					n = T.type(e)
				return (
					'function' !== n &&
					!T.isWindow(e) &&
					('array' === n ||
						0 === t ||
						('number' == typeof t && 0 < t && t - 1 in e))
				)
			}
			;(T.fn = T.prototype = {
				jquery: o,
				constructor: T,
				selector: '',
				length: 0,
				toArray: function () {
					return c.call(this)
				},
				get: function (e) {
					return null != e
						? e < 0
							? this[e + this.length]
							: this[e]
						: c.call(this)
				},
				pushStack: function (e) {
					e = T.merge(this.constructor(), e)
					return (e.prevObject = this), (e.context = this.context), e
				},
				each: function (e) {
					return T.each(this, e)
				},
				map: function (n) {
					return this.pushStack(
						T.map(this, function (e, t) {
							return n.call(e, t, e)
						})
					)
				},
				slice: function () {
					return this.pushStack(c.apply(this, arguments))
				},
				first: function () {
					return this.eq(0)
				},
				last: function () {
					return this.eq(-1)
				},
				eq: function (e) {
					var t = this.length,
						e = +e + (e < 0 ? t : 0)
					return this.pushStack(0 <= e && e < t ? [this[e]] : [])
				},
				end: function () {
					return this.prevObject || this.constructor()
				},
				push: s,
				sort: f.sort,
				splice: f.splice,
			}),
				(T.extend = T.fn.extend = function () {
					var e,
						t,
						n,
						r,
						i,
						o = arguments[0] || {},
						a = 1,
						s = arguments.length,
						u = !1
					for (
						'boolean' == typeof o &&
							((u = o), (o = arguments[a] || {}), a++),
							'object' == typeof o || T.isFunction(o) || (o = {}),
							a === s && ((o = this), a--);
						a < s;
						a++
					)
						if (null != (r = arguments[a]))
							for (n in r)
								(i = o[n]),
									o !== (t = r[n]) &&
										(u &&
										t &&
										(T.isPlainObject(t) ||
											(e = T.isArray(t)))
											? ((i = e
													? ((e = !1),
													  i && T.isArray(i)
															? i
															: [])
													: i && T.isPlainObject(i)
													? i
													: {}),
											  (o[n] = T.extend(u, i, t)))
											: void 0 !== t && (o[n] = t))
					return o
				}),
				T.extend({
					expando: 'jQuery' + (o + Math.random()).replace(/\D/g, ''),
					isReady: !0,
					error: function (e) {
						throw new Error(e)
					},
					noop: function () {},
					isFunction: function (e) {
						return 'function' === T.type(e)
					},
					isArray:
						Array.isArray ||
						function (e) {
							return 'array' === T.type(e)
						},
					isWindow: function (e) {
						return null != e && e == e.window
					},
					isNumeric: function (e) {
						var t = e && e.toString()
						return !T.isArray(e) && 0 <= t - parseFloat(t) + 1
					},
					isEmptyObject: function (e) {
						for (var t in e) return !1
						return !0
					},
					isPlainObject: function (e) {
						if (
							!e ||
							'object' !== T.type(e) ||
							e.nodeType ||
							T.isWindow(e)
						)
							return !1
						try {
							if (
								e.constructor &&
								!g.call(e, 'constructor') &&
								!g.call(
									e.constructor.prototype,
									'isPrototypeOf'
								)
							)
								return !1
						} catch (e) {
							return !1
						}
						if (!y.ownFirst) for (var t in e) return g.call(e, t)
						for (t in e);
						return void 0 === t || g.call(e, t)
					},
					type: function (e) {
						return null == e
							? e + ''
							: 'object' == typeof e || 'function' == typeof e
							? n[r.call(e)] || 'object'
							: typeof e
					},
					globalEval: function (e) {
						e &&
							T.trim(e) &&
							(
								w.execScript ||
								function (e) {
									w.eval.call(w, e)
								}
							)(e)
					},
					camelCase: function (e) {
						return e.replace(u, 'ms-').replace(l, t)
					},
					nodeName: function (e, t) {
						return (
							e.nodeName &&
							e.nodeName.toLowerCase() === t.toLowerCase()
						)
					},
					each: function (e, t) {
						var n,
							r = 0
						if (d(e))
							for (
								n = e.length;
								r < n && !1 !== t.call(e[r], r, e[r]);
								r++
							);
						else
							for (r in e) if (!1 === t.call(e[r], r, e[r])) break
						return e
					},
					trim: function (e) {
						return null == e ? '' : (e + '').replace(a, '')
					},
					makeArray: function (e, t) {
						t = t || []
						return (
							null != e &&
								(d(Object(e))
									? T.merge(t, 'string' == typeof e ? [e] : e)
									: s.call(t, e)),
							t
						)
					},
					inArray: function (e, t, n) {
						var r
						if (t) {
							if (i) return i.call(t, e, n)
							for (
								r = t.length,
									n = n
										? n < 0
											? Math.max(0, r + n)
											: n
										: 0;
								n < r;
								n++
							)
								if (n in t && t[n] === e) return n
						}
						return -1
					},
					merge: function (e, t) {
						for (var n = +t.length, r = 0, i = e.length; r < n; )
							e[i++] = t[r++]
						if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++]
						return (e.length = i), e
					},
					grep: function (e, t, n) {
						for (
							var r = [], i = 0, o = e.length, a = !n;
							i < o;
							i++
						)
							!t(e[i], i) != a && r.push(e[i])
						return r
					},
					map: function (e, t, n) {
						var r,
							i,
							o = 0,
							a = []
						if (d(e))
							for (r = e.length; o < r; o++)
								null != (i = t(e[o], o, n)) && a.push(i)
						else
							for (o in e)
								null != (i = t(e[o], o, n)) && a.push(i)
						return m.apply([], a)
					},
					guid: 1,
					proxy: function (e, t) {
						var n, r
						if (
							('string' == typeof t &&
								((r = e[t]), (t = e), (e = r)),
							T.isFunction(e))
						)
							return (
								(n = c.call(arguments, 2)),
								((r = function () {
									return e.apply(
										t || this,
										n.concat(c.call(arguments))
									)
								}).guid = e.guid = e.guid || T.guid++),
								r
							)
					},
					now: function () {
						return +new Date()
					},
					support: y,
				}),
				'function' == typeof Symbol &&
					(T.fn[Symbol.iterator] = f[Symbol.iterator]),
				T.each(
					'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
						' '
					),
					function (e, t) {
						n['[object ' + t + ']'] = t.toLowerCase()
					}
				)
			var p = (function (n) {
				function f(e, t, n) {
					var r = '0x' + t - 65536
					return r != r || n
						? t
						: r < 0
						? String.fromCharCode(65536 + r)
						: String.fromCharCode(
								(r >> 10) | 55296,
								(1023 & r) | 56320
						  )
				}
				function t() {
					T()
				}
				var e,
					h,
					b,
					o,
					r,
					m,
					d,
					g,
					w,
					u,
					l,
					T,
					C,
					i,
					E,
					y,
					a,
					s,
					v,
					N = 'sizzle' + +new Date(),
					x = n.document,
					k = 0,
					c = 0,
					p = ie(),
					S = ie(),
					A = ie(),
					D = function (e, t) {
						return e === t && (l = !0), 0
					},
					j = {}.hasOwnProperty,
					L = [],
					H = L.pop,
					q = L.push,
					M = L.push,
					_ = L.slice,
					F = function (e, t) {
						for (var n = 0, r = e.length; n < r; n++)
							if (e[n] === t) return n
						return -1
					},
					O =
						'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
					R = '[\\x20\\t\\r\\n\\f]',
					P = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
					B =
						'\\[' +
						R +
						'*(' +
						P +
						')(?:' +
						R +
						'*([*^$|!~]?=)' +
						R +
						'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
						P +
						'))|)' +
						R +
						'*\\]',
					W =
						':(' +
						P +
						')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
						B +
						')*)|.*)\\)|)',
					I = new RegExp(R + '+', 'g'),
					$ = new RegExp(
						'^' + R + '+|((?:^|[^\\\\])(?:\\\\.)*)' + R + '+$',
						'g'
					),
					z = new RegExp('^' + R + '*,' + R + '*'),
					X = new RegExp('^' + R + '*([>+~]|' + R + ')' + R + '*'),
					U = new RegExp(
						'=' + R + '*([^\\]\'"]*?)' + R + '*\\]',
						'g'
					),
					V = new RegExp(W),
					Y = new RegExp('^' + P + '$'),
					J = {
						ID: new RegExp('^#(' + P + ')'),
						CLASS: new RegExp('^\\.(' + P + ')'),
						TAG: new RegExp('^(' + P + '|[*])'),
						ATTR: new RegExp('^' + B),
						PSEUDO: new RegExp('^' + W),
						CHILD: new RegExp(
							'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
								R +
								'*(even|odd|(([+-]|)(\\d*)n|)' +
								R +
								'*(?:([+-]|)' +
								R +
								'*(\\d+)|))' +
								R +
								'*\\)|)',
							'i'
						),
						bool: new RegExp('^(?:' + O + ')$', 'i'),
						needsContext: new RegExp(
							'^' +
								R +
								'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
								R +
								'*((?:-\\d)?\\d*)' +
								R +
								'*\\)|)(?=[^-]|$)',
							'i'
						),
					},
					G = /^(?:input|select|textarea|button)$/i,
					Q = /^h\d$/i,
					K = /^[^{]+\{\s*\[native \w/,
					Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					ee = /[+~]/,
					te = /'|\\/g,
					ne = new RegExp(
						'\\\\([\\da-f]{1,6}' + R + '?|(' + R + ')|.)',
						'ig'
					)
				try {
					M.apply((L = _.call(x.childNodes)), x.childNodes),
						L[x.childNodes.length].nodeType
				} catch (e) {
					M = {
						apply: L.length
							? function (e, t) {
									q.apply(e, _.call(t))
							  }
							: function (e, t) {
									for (
										var n = e.length, r = 0;
										(e[n++] = t[r++]);

									);
									e.length = n - 1
							  },
					}
				}
				function re(e, t, n, r) {
					var i,
						o,
						a,
						s,
						u,
						l,
						c,
						f,
						d = t && t.ownerDocument,
						p = t ? t.nodeType : 9
					if (
						((n = n || []),
						'string' != typeof e ||
							!e ||
							(1 !== p && 9 !== p && 11 !== p))
					)
						return n
					if (
						!r &&
						((t ? t.ownerDocument || t : x) !== C && T(t),
						(t = t || C),
						E)
					) {
						if (11 !== p && (l = Z.exec(e)))
							if ((i = l[1])) {
								if (9 === p) {
									if (!(a = t.getElementById(i))) return n
									if (a.id === i) return n.push(a), n
								} else if (
									d &&
									(a = d.getElementById(i)) &&
									v(t, a) &&
									a.id === i
								)
									return n.push(a), n
							} else {
								if (l[2])
									return (
										M.apply(n, t.getElementsByTagName(e)), n
									)
								if (
									(i = l[3]) &&
									h.getElementsByClassName &&
									t.getElementsByClassName
								)
									return (
										M.apply(n, t.getElementsByClassName(i)),
										n
									)
							}
						if (h.qsa && !A[e + ' '] && (!y || !y.test(e))) {
							if (1 !== p) (d = t), (f = e)
							else if ('object' !== t.nodeName.toLowerCase()) {
								for (
									(s = t.getAttribute('id'))
										? (s = s.replace(te, '\\$&'))
										: t.setAttribute('id', (s = N)),
										o = (c = m(e)).length,
										u = Y.test(s)
											? '#' + s
											: "[id='" + s + "']";
									o--;

								)
									c[o] = u + ' ' + de(c[o])
								;(f = c.join(',')),
									(d = (ee.test(e) && ce(t.parentNode)) || t)
							}
							if (f)
								try {
									return M.apply(n, d.querySelectorAll(f)), n
								} catch (e) {
								} finally {
									s === N && t.removeAttribute('id')
								}
						}
					}
					return g(e.replace($, '$1'), t, n, r)
				}
				function ie() {
					var n = []
					function r(e, t) {
						return (
							n.push(e + ' ') > b.cacheLength &&
								delete r[n.shift()],
							(r[e + ' '] = t)
						)
					}
					return r
				}
				function oe(e) {
					return (e[N] = !0), e
				}
				function ae(e) {
					var t = C.createElement('div')
					try {
						return !!e(t)
					} catch (e) {
						return !1
					} finally {
						t.parentNode && t.parentNode.removeChild(t), (t = null)
					}
				}
				function se(e, t) {
					for (var n = e.split('|'), r = n.length; r--; )
						b.attrHandle[n[r]] = t
				}
				function ue(e, t) {
					var n = t && e,
						r =
							n &&
							1 === e.nodeType &&
							1 === t.nodeType &&
							(~t.sourceIndex || 1 << 31) -
								(~e.sourceIndex || 1 << 31)
					if (r) return r
					if (n) for (; (n = n.nextSibling); ) if (n === t) return -1
					return e ? 1 : -1
				}
				function le(a) {
					return oe(function (o) {
						return (
							(o = +o),
							oe(function (e, t) {
								for (
									var n, r = a([], e.length, o), i = r.length;
									i--;

								)
									e[(n = r[i])] && (e[n] = !(t[n] = e[n]))
							})
						)
					})
				}
				function ce(e) {
					return e && void 0 !== e.getElementsByTagName && e
				}
				for (e in ((h = re.support = {}),
				(r = re.isXML = function (e) {
					e = e && (e.ownerDocument || e).documentElement
					return !!e && 'HTML' !== e.nodeName
				}),
				(T = re.setDocument = function (e) {
					var e = e ? e.ownerDocument || e : x
					return (
						e !== C &&
							9 === e.nodeType &&
							e.documentElement &&
							((i = (C = e).documentElement),
							(E = !r(C)),
							(e = C.defaultView) &&
								e.top !== e &&
								(e.addEventListener
									? e.addEventListener('unload', t, !1)
									: e.attachEvent &&
									  e.attachEvent('onunload', t)),
							(h.attributes = ae(function (e) {
								return (
									(e.className = 'i'),
									!e.getAttribute('className')
								)
							})),
							(h.getElementsByTagName = ae(function (e) {
								return (
									e.appendChild(C.createComment('')),
									!e.getElementsByTagName('*').length
								)
							})),
							(h.getElementsByClassName = K.test(
								C.getElementsByClassName
							)),
							(h.getById = ae(function (e) {
								return (
									(i.appendChild(e).id = N),
									!C.getElementsByName ||
										!C.getElementsByName(N).length
								)
							})),
							h.getById
								? ((b.find.ID = function (e, t) {
										if (void 0 !== t.getElementById && E) {
											e = t.getElementById(e)
											return e ? [e] : []
										}
								  }),
								  (b.filter.ID = function (e) {
										var t = e.replace(ne, f)
										return function (e) {
											return e.getAttribute('id') === t
										}
								  }))
								: (delete b.find.ID,
								  (b.filter.ID = function (e) {
										var t = e.replace(ne, f)
										return function (e) {
											e =
												void 0 !== e.getAttributeNode &&
												e.getAttributeNode('id')
											return e && e.value === t
										}
								  })),
							(b.find.TAG = h.getElementsByTagName
								? function (e, t) {
										return void 0 !== t.getElementsByTagName
											? t.getElementsByTagName(e)
											: h.qsa
											? t.querySelectorAll(e)
											: void 0
								  }
								: function (e, t) {
										var n,
											r = [],
											i = 0,
											o = t.getElementsByTagName(e)
										if ('*' !== e) return o
										for (; (n = o[i++]); )
											1 === n.nodeType && r.push(n)
										return r
								  }),
							(b.find.CLASS =
								h.getElementsByClassName &&
								function (e, t) {
									if (
										void 0 !== t.getElementsByClassName &&
										E
									)
										return t.getElementsByClassName(e)
								}),
							(a = []),
							(y = []),
							(h.qsa = K.test(C.querySelectorAll)) &&
								(ae(function (e) {
									;(i.appendChild(e).innerHTML =
										"<a id='" +
										N +
										"'></a><select id='" +
										N +
										"-\r\\' msallowcapture=''><option selected=''></option></select>"),
										e.querySelectorAll(
											"[msallowcapture^='']"
										).length &&
											y.push(
												'[*^$]=' + R + '*(?:\'\'|"")'
											),
										e.querySelectorAll('[selected]')
											.length ||
											y.push(
												'\\[' +
													R +
													'*(?:value|' +
													O +
													')'
											),
										e.querySelectorAll('[id~=' + N + '-]')
											.length || y.push('~='),
										e.querySelectorAll(':checked').length ||
											y.push(':checked'),
										e.querySelectorAll('a#' + N + '+*')
											.length || y.push('.#.+[+~]')
								}),
								ae(function (e) {
									var t = C.createElement('input')
									t.setAttribute('type', 'hidden'),
										e
											.appendChild(t)
											.setAttribute('name', 'D'),
										e.querySelectorAll('[name=d]').length &&
											y.push('name' + R + '*[*^$|!~]?='),
										e.querySelectorAll(':enabled').length ||
											y.push(':enabled', ':disabled'),
										e.querySelectorAll('*,:x'),
										y.push(',.*:')
								})),
							(h.matchesSelector = K.test(
								(s =
									i.matches ||
									i.webkitMatchesSelector ||
									i.mozMatchesSelector ||
									i.oMatchesSelector ||
									i.msMatchesSelector)
							)) &&
								ae(function (e) {
									;(h.disconnectedMatch = s.call(e, 'div')),
										s.call(e, "[s!='']:x"),
										a.push('!=', W)
								}),
							(y = y.length && new RegExp(y.join('|'))),
							(a = a.length && new RegExp(a.join('|'))),
							(e = K.test(i.compareDocumentPosition)),
							(v =
								e || K.test(i.contains)
									? function (e, t) {
											var n =
													9 === e.nodeType
														? e.documentElement
														: e,
												t = t && t.parentNode
											return (
												e === t ||
												!(
													!t ||
													1 !== t.nodeType ||
													!(n.contains
														? n.contains(t)
														: e.compareDocumentPosition &&
														  16 &
																e.compareDocumentPosition(
																	t
																))
												)
											)
									  }
									: function (e, t) {
											if (t)
												for (; (t = t.parentNode); )
													if (t === e) return !0
											return !1
									  }),
							(D = e
								? function (e, t) {
										if (e === t) return (l = !0), 0
										var n =
											!e.compareDocumentPosition -
											!t.compareDocumentPosition
										return (
											n ||
											(1 &
												(n =
													(e.ownerDocument || e) ===
													(t.ownerDocument || t)
														? e.compareDocumentPosition(
																t
														  )
														: 1) ||
											(!h.sortDetached &&
												t.compareDocumentPosition(e) ===
													n)
												? e === C ||
												  (e.ownerDocument === x &&
														v(x, e))
													? -1
													: t === C ||
													  (t.ownerDocument === x &&
															v(x, t))
													? 1
													: u
													? F(u, e) - F(u, t)
													: 0
												: 4 & n
												? -1
												: 1)
										)
								  }
								: function (e, t) {
										if (e === t) return (l = !0), 0
										var n,
											r = 0,
											i = e.parentNode,
											o = t.parentNode,
											a = [e],
											s = [t]
										if (!i || !o)
											return e === C
												? -1
												: t === C
												? 1
												: i
												? -1
												: o
												? 1
												: u
												? F(u, e) - F(u, t)
												: 0
										if (i === o) return ue(e, t)
										for (n = e; (n = n.parentNode); )
											a.unshift(n)
										for (n = t; (n = n.parentNode); )
											s.unshift(n)
										for (; a[r] === s[r]; ) r++
										return r
											? ue(a[r], s[r])
											: a[r] === x
											? -1
											: s[r] === x
											? 1
											: 0
								  })),
						C
					)
				}),
				(re.matches = function (e, t) {
					return re(e, null, null, t)
				}),
				(re.matchesSelector = function (e, t) {
					if (
						((e.ownerDocument || e) !== C && T(e),
						(t = t.replace(U, "='$1']")),
						h.matchesSelector &&
							E &&
							!A[t + ' '] &&
							(!a || !a.test(t)) &&
							(!y || !y.test(t)))
					)
						try {
							var n = s.call(e, t)
							if (
								n ||
								h.disconnectedMatch ||
								(e.document && 11 !== e.document.nodeType)
							)
								return n
						} catch (e) {}
					return 0 < re(t, C, null, [e]).length
				}),
				(re.contains = function (e, t) {
					return (e.ownerDocument || e) !== C && T(e), v(e, t)
				}),
				(re.attr = function (e, t) {
					;(e.ownerDocument || e) !== C && T(e)
					var n = b.attrHandle[t.toLowerCase()],
						n =
							n && j.call(b.attrHandle, t.toLowerCase())
								? n(e, t, !E)
								: void 0
					return void 0 !== n
						? n
						: h.attributes || !E
						? e.getAttribute(t)
						: (n = e.getAttributeNode(t)) && n.specified
						? n.value
						: null
				}),
				(re.error = function (e) {
					throw new Error(
						'Syntax error, unrecognized expression: ' + e
					)
				}),
				(re.uniqueSort = function (e) {
					var t,
						n = [],
						r = 0,
						i = 0
					if (
						((l = !h.detectDuplicates),
						(u = !h.sortStable && e.slice(0)),
						e.sort(D),
						l)
					) {
						for (; (t = e[i++]); ) t === e[i] && (r = n.push(i))
						for (; r--; ) e.splice(n[r], 1)
					}
					return (u = null), e
				}),
				(o = re.getText = function (e) {
					var t,
						n = '',
						r = 0,
						i = e.nodeType
					if (i) {
						if (1 === i || 9 === i || 11 === i) {
							if ('string' == typeof e.textContent)
								return e.textContent
							for (e = e.firstChild; e; e = e.nextSibling)
								n += o(e)
						} else if (3 === i || 4 === i) return e.nodeValue
					} else for (; (t = e[r++]); ) n += o(t)
					return n
				}),
				((b = re.selectors = {
					cacheLength: 50,
					createPseudo: oe,
					match: J,
					attrHandle: {},
					find: {},
					relative: {
						'>': { dir: 'parentNode', first: !0 },
						' ': { dir: 'parentNode' },
						'+': { dir: 'previousSibling', first: !0 },
						'~': { dir: 'previousSibling' },
					},
					preFilter: {
						ATTR: function (e) {
							return (
								(e[1] = e[1].replace(ne, f)),
								(e[3] = (e[3] || e[4] || e[5] || '').replace(
									ne,
									f
								)),
								'~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
								e.slice(0, 4)
							)
						},
						CHILD: function (e) {
							return (
								(e[1] = e[1].toLowerCase()),
								'nth' === e[1].slice(0, 3)
									? (e[3] || re.error(e[0]),
									  (e[4] = +(e[4]
											? e[5] + (e[6] || 1)
											: 2 *
											  ('even' === e[3] ||
													'odd' === e[3]))),
									  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
									: e[3] && re.error(e[0]),
								e
							)
						},
						PSEUDO: function (e) {
							var t,
								n = !e[6] && e[2]
							return J.CHILD.test(e[0])
								? null
								: (e[3]
										? (e[2] = e[4] || e[5] || '')
										: n &&
										  V.test(n) &&
										  (t = m(n, !0)) &&
										  (t =
												n.indexOf(')', n.length - t) -
												n.length) &&
										  ((e[0] = e[0].slice(0, t)),
										  (e[2] = n.slice(0, t))),
								  e.slice(0, 3))
						},
					},
					filter: {
						TAG: function (e) {
							var t = e.replace(ne, f).toLowerCase()
							return '*' === e
								? function () {
										return !0
								  }
								: function (e) {
										return (
											e.nodeName &&
											e.nodeName.toLowerCase() === t
										)
								  }
						},
						CLASS: function (e) {
							var t = p[e + ' ']
							return (
								t ||
								((t = new RegExp(
									'(^|' + R + ')' + e + '(' + R + '|$)'
								)) &&
									p(e, function (e) {
										return t.test(
											('string' == typeof e.className &&
												e.className) ||
												(void 0 !== e.getAttribute &&
													e.getAttribute('class')) ||
												''
										)
									}))
							)
						},
						ATTR: function (t, n, r) {
							return function (e) {
								e = re.attr(e, t)
								return null == e
									? '!=' === n
									: !n ||
											((e += ''),
											'=' === n
												? e === r
												: '!=' === n
												? e !== r
												: '^=' === n
												? r && 0 === e.indexOf(r)
												: '*=' === n
												? r && -1 < e.indexOf(r)
												: '$=' === n
												? r && e.slice(-r.length) === r
												: '~=' === n
												? -1 <
												  (
														' ' +
														e.replace(I, ' ') +
														' '
												  ).indexOf(r)
												: '|=' === n &&
												  (e === r ||
														e.slice(
															0,
															r.length + 1
														) ===
															r + '-'))
							}
						},
						CHILD: function (h, e, t, m, g) {
							var y = 'nth' !== h.slice(0, 3),
								v = 'last' !== h.slice(-4),
								x = 'of-type' === e
							return 1 === m && 0 === g
								? function (e) {
										return !!e.parentNode
								  }
								: function (e, t, n) {
										var r,
											i,
											o,
											a,
											s,
											u,
											l =
												y != v
													? 'nextSibling'
													: 'previousSibling',
											c = e.parentNode,
											f = x && e.nodeName.toLowerCase(),
											d = !n && !x,
											p = !1
										if (c) {
											if (y) {
												for (; l; ) {
													for (a = e; (a = a[l]); )
														if (
															x
																? a.nodeName.toLowerCase() ===
																  f
																: 1 ===
																  a.nodeType
														)
															return !1
													u = l =
														'only' === h &&
														!u &&
														'nextSibling'
												}
												return !0
											}
											if (
												((u = [
													v
														? c.firstChild
														: c.lastChild,
												]),
												v && d)
											) {
												for (
													p =
														(s =
															(r =
																(i =
																	(o =
																		(a = c)[
																			N
																		] ||
																		(a[
																			N
																		] = {}))[
																		a
																			.uniqueID
																	] ||
																	(o[
																		a.uniqueID
																	] = {}))[
																	h
																] || [])[0] ===
																k && r[1]) &&
														r[2],
														a =
															s &&
															c.childNodes[s];
													(a =
														(++s && a && a[l]) ||
														(p = s = 0) ||
														u.pop());

												)
													if (
														1 === a.nodeType &&
														++p &&
														a === e
													) {
														i[h] = [k, s, p]
														break
													}
											} else if (
												!1 ===
												(p = d
													? (s =
															(r =
																(i =
																	(o =
																		(a = e)[
																			N
																		] ||
																		(a[
																			N
																		] = {}))[
																		a
																			.uniqueID
																	] ||
																	(o[
																		a.uniqueID
																	] = {}))[
																	h
																] || [])[0] ===
																k && r[1])
													: p)
											)
												for (
													;
													(a =
														(++s && a && a[l]) ||
														(p = s = 0) ||
														u.pop()) &&
													((x
														? a.nodeName.toLowerCase() !==
														  f
														: 1 !== a.nodeType) ||
														!++p ||
														(d &&
															((i =
																(o =
																	a[N] ||
																	(a[
																		N
																	] = {}))[
																	a.uniqueID
																] ||
																(o[
																	a.uniqueID
																] = {}))[h] = [
																k,
																p,
															]),
														a !== e));

												);
											return (
												(p -= g) === m ||
												(p % m == 0 && 0 <= p / m)
											)
										}
								  }
						},
						PSEUDO: function (e, o) {
							var t,
								a =
									b.pseudos[e] ||
									b.setFilters[e.toLowerCase()] ||
									re.error('unsupported pseudo: ' + e)
							return a[N]
								? a(o)
								: 1 < a.length
								? ((t = [e, e, '', o]),
								  b.setFilters.hasOwnProperty(e.toLowerCase())
										? oe(function (e, t) {
												for (
													var n,
														r = a(e, o),
														i = r.length;
													i--;

												)
													e[(n = F(e, r[i]))] = !(t[
														n
													] = r[i])
										  })
										: function (e) {
												return a(e, 0, t)
										  })
								: a
						},
					},
					pseudos: {
						not: oe(function (e) {
							var r = [],
								i = [],
								s = d(e.replace($, '$1'))
							return s[N]
								? oe(function (e, t, n, r) {
										for (
											var i,
												o = s(e, null, r, []),
												a = e.length;
											a--;

										)
											(i = o[a]) && (e[a] = !(t[a] = i))
								  })
								: function (e, t, n) {
										return (
											(r[0] = e),
											s(r, null, n, i),
											(r[0] = null),
											!i.pop()
										)
								  }
						}),
						has: oe(function (t) {
							return function (e) {
								return 0 < re(t, e).length
							}
						}),
						contains: oe(function (t) {
							return (
								(t = t.replace(ne, f)),
								function (e) {
									return (
										-1 <
										(
											e.textContent ||
											e.innerText ||
											o(e)
										).indexOf(t)
									)
								}
							)
						}),
						lang: oe(function (n) {
							return (
								Y.test(n || '') ||
									re.error('unsupported lang: ' + n),
								(n = n.replace(ne, f).toLowerCase()),
								function (e) {
									var t
									do {
										if (
											(t = E
												? e.lang
												: e.getAttribute('xml:lang') ||
												  e.getAttribute('lang'))
										)
											return (
												(t = t.toLowerCase()) === n ||
												0 === t.indexOf(n + '-')
											)
									} while (
										(e = e.parentNode) &&
										1 === e.nodeType
									)
									return !1
								}
							)
						}),
						target: function (e) {
							var t = n.location && n.location.hash
							return t && t.slice(1) === e.id
						},
						root: function (e) {
							return e === i
						},
						focus: function (e) {
							return (
								e === C.activeElement &&
								(!C.hasFocus || C.hasFocus()) &&
								!!(e.type || e.href || ~e.tabIndex)
							)
						},
						enabled: function (e) {
							return !1 === e.disabled
						},
						disabled: function (e) {
							return !0 === e.disabled
						},
						checked: function (e) {
							var t = e.nodeName.toLowerCase()
							return (
								('input' === t && !!e.checked) ||
								('option' === t && !!e.selected)
							)
						},
						selected: function (e) {
							return (
								e.parentNode && e.parentNode.selectedIndex,
								!0 === e.selected
							)
						},
						empty: function (e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1
							return !0
						},
						parent: function (e) {
							return !b.pseudos.empty(e)
						},
						header: function (e) {
							return Q.test(e.nodeName)
						},
						input: function (e) {
							return G.test(e.nodeName)
						},
						button: function (e) {
							var t = e.nodeName.toLowerCase()
							return (
								('input' === t && 'button' === e.type) ||
								'button' === t
							)
						},
						text: function (e) {
							return (
								'input' === e.nodeName.toLowerCase() &&
								'text' === e.type &&
								(null == (e = e.getAttribute('type')) ||
									'text' === e.toLowerCase())
							)
						},
						first: le(function () {
							return [0]
						}),
						last: le(function (e, t) {
							return [t - 1]
						}),
						eq: le(function (e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						even: le(function (e, t) {
							for (var n = 0; n < t; n += 2) e.push(n)
							return e
						}),
						odd: le(function (e, t) {
							for (var n = 1; n < t; n += 2) e.push(n)
							return e
						}),
						lt: le(function (e, t, n) {
							for (var r = n < 0 ? n + t : n; 0 <= --r; )
								e.push(r)
							return e
						}),
						gt: le(function (e, t, n) {
							for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
							return e
						}),
					},
				}).pseudos.nth = b.pseudos.eq),
				{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
					b.pseudos[e] = (function (t) {
						return function (e) {
							return (
								'input' === e.nodeName.toLowerCase() &&
								e.type === t
							)
						}
					})(e)
				for (e in { submit: !0, reset: !0 })
					b.pseudos[e] = (function (n) {
						return function (e) {
							var t = e.nodeName.toLowerCase()
							return (
								('input' === t || 'button' === t) &&
								e.type === n
							)
						}
					})(e)
				function fe() {}
				function de(e) {
					for (var t = 0, n = e.length, r = ''; t < n; t++)
						r += e[t].value
					return r
				}
				function pe(a, e, t) {
					var s = e.dir,
						u = t && 'parentNode' === s,
						l = c++
					return e.first
						? function (e, t, n) {
								for (; (e = e[s]); )
									if (1 === e.nodeType || u) return a(e, t, n)
						  }
						: function (e, t, n) {
								var r,
									i,
									o = [k, l]
								if (n) {
									for (; (e = e[s]); )
										if (
											(1 === e.nodeType || u) &&
											a(e, t, n)
										)
											return !0
								} else
									for (; (e = e[s]); )
										if (1 === e.nodeType || u) {
											if (
												(i = (r =
													(i = e[N] || (e[N] = {}))[
														e.uniqueID
													] || (i[e.uniqueID] = {}))[
													s
												]) &&
												i[0] === k &&
												i[1] === l
											)
												return (o[2] = i[2])
											if (((r[s] = o)[2] = a(e, t, n)))
												return !0
										}
						  }
				}
				function he(i) {
					return 1 < i.length
						? function (e, t, n) {
								for (var r = i.length; r--; )
									if (!i[r](e, t, n)) return !1
								return !0
						  }
						: i[0]
				}
				function me(e, t, n, r, i) {
					for (
						var o, a = [], s = 0, u = e.length, l = null != t;
						s < u;
						s++
					)
						(o = e[s]) &&
							((n && !n(o, r, i)) || (a.push(o), l && t.push(s)))
					return a
				}
				function ge(p, h, m, g, y, e) {
					return (
						g && !g[N] && (g = ge(g)),
						y && !y[N] && (y = ge(y, e)),
						oe(function (e, t, n, r) {
							var i,
								o,
								a,
								s = [],
								u = [],
								l = t.length,
								c =
									e ||
									(function (e, t, n) {
										for (
											var r = 0, i = t.length;
											r < i;
											r++
										)
											re(e, t[r], n)
										return n
									})(h || '*', n.nodeType ? [n] : n, []),
								f = !p || (!e && h) ? c : me(c, s, p, n, r),
								d = m ? (y || (e ? p : l || g) ? [] : t) : f
							if ((m && m(f, d, n, r), g))
								for (
									i = me(d, u), g(i, [], n, r), o = i.length;
									o--;

								)
									(a = i[o]) && (d[u[o]] = !(f[u[o]] = a))
							if (e) {
								if (y || p) {
									if (y) {
										for (i = [], o = d.length; o--; )
											(a = d[o]) && i.push((f[o] = a))
										y(null, (d = []), i, r)
									}
									for (o = d.length; o--; )
										(a = d[o]) &&
											-1 < (i = y ? F(e, a) : s[o]) &&
											(e[i] = !(t[i] = a))
								}
							} else (d = me(d === t ? d.splice(l, d.length) : d)), y ? y(null, t, d, r) : M.apply(t, d)
						})
					)
				}
				function ye(g, y) {
					function e(e, t, n, r, i) {
						var o,
							a,
							s,
							u = 0,
							l = '0',
							c = e && [],
							f = [],
							d = w,
							p = e || (x && b.find.TAG('*', i)),
							h = (k += null == d ? 1 : Math.random() || 0.1),
							m = p.length
						for (
							i && (w = t === C || t || i);
							l !== m && null != (o = p[l]);
							l++
						) {
							if (x && o) {
								for (
									a = 0,
										t ||
											o.ownerDocument === C ||
											(T(o), (n = !E));
									(s = g[a++]);

								)
									if (s(o, t || C, n)) {
										r.push(o)
										break
									}
								i && (k = h)
							}
							v && ((o = !s && o) && u--, e && c.push(o))
						}
						if (((u += l), v && l !== u)) {
							for (a = 0; (s = y[a++]); ) s(c, f, t, n)
							if (e) {
								if (0 < u)
									for (; l--; )
										c[l] || f[l] || (f[l] = H.call(r))
								f = me(f)
							}
							M.apply(r, f),
								i &&
									!e &&
									0 < f.length &&
									1 < u + y.length &&
									re.uniqueSort(r)
						}
						return i && ((k = h), (w = d)), c
					}
					var v = 0 < y.length,
						x = 0 < g.length
					return v ? oe(e) : e
				}
				return (
					(fe.prototype = b.filters = b.pseudos),
					(b.setFilters = new fe()),
					(m = re.tokenize = function (e, t) {
						var n,
							r,
							i,
							o,
							a,
							s,
							u,
							l = S[e + ' ']
						if (l) return t ? 0 : l.slice(0)
						for (a = e, s = [], u = b.preFilter; a; ) {
							for (o in ((n && !(r = z.exec(a))) ||
								(r && (a = a.slice(r[0].length) || a),
								s.push((i = []))),
							(n = !1),
							(r = X.exec(a)) &&
								((n = r.shift()),
								i.push({
									value: n,
									type: r[0].replace($, ' '),
								}),
								(a = a.slice(n.length))),
							b.filter))
								!(r = J[o].exec(a)) ||
									(u[o] && !(r = u[o](r))) ||
									((n = r.shift()),
									i.push({ value: n, type: o, matches: r }),
									(a = a.slice(n.length)))
							if (!n) break
						}
						return t ? a.length : a ? re.error(e) : S(e, s).slice(0)
					}),
					(d = re.compile = function (e, t) {
						var n,
							r = [],
							i = [],
							o = A[e + ' ']
						if (!o) {
							for (n = (t = t || m(e)).length; n--; )
								((o = (function e(t) {
									for (
										var r,
											n,
											i,
											o = t.length,
											a = b.relative[t[0].type],
											s = a || b.relative[' '],
											u = a ? 1 : 0,
											l = pe(
												function (e) {
													return e === r
												},
												s,
												!0
											),
											c = pe(
												function (e) {
													return -1 < F(r, e)
												},
												s,
												!0
											),
											f = [
												function (e, t, n) {
													return (
														(n =
															(!a &&
																(n ||
																	t !== w)) ||
															((r = t).nodeType
																? l
																: c)(e, t, n)),
														(r = null),
														n
													)
												},
											];
										u < o;
										u++
									)
										if ((n = b.relative[t[u].type]))
											f = [pe(he(f), n)]
										else {
											if (
												(n = b.filter[t[u].type].apply(
													null,
													t[u].matches
												))[N]
											) {
												for (
													i = ++u;
													i < o &&
													!b.relative[t[i].type];
													i++
												);
												return ge(
													1 < u && he(f),
													1 < u &&
														de(
															t
																.slice(0, u - 1)
																.concat({
																	value:
																		' ' ===
																		t[u - 2]
																			.type
																			? '*'
																			: '',
																})
														).replace($, '$1'),
													n,
													u < i && e(t.slice(u, i)),
													i < o &&
														e((t = t.slice(i))),
													i < o && de(t)
												)
											}
											f.push(n)
										}
									return he(f)
								})(t[n]))[N]
									? r
									: i
								).push(o)
							;(o = A(e, ye(i, r))).selector = e
						}
						return o
					}),
					(g = re.select = function (e, t, n, r) {
						var i,
							o,
							a,
							s,
							u,
							l = 'function' == typeof e && e,
							c = !r && m((e = l.selector || e))
						if (((n = n || []), 1 === c.length)) {
							if (
								2 < (o = c[0] = c[0].slice(0)).length &&
								'ID' === (a = o[0]).type &&
								h.getById &&
								9 === t.nodeType &&
								E &&
								b.relative[o[1].type]
							) {
								if (
									!(t = (b.find.ID(
										a.matches[0].replace(ne, f),
										t
									) || [])[0])
								)
									return n
								l && (t = t.parentNode),
									(e = e.slice(o.shift().value.length))
							}
							for (
								i = J.needsContext.test(e) ? 0 : o.length;
								i-- && ((a = o[i]), !b.relative[(s = a.type)]);

							)
								if (
									(u = b.find[s]) &&
									(r = u(
										a.matches[0].replace(ne, f),
										(ee.test(o[0].type) &&
											ce(t.parentNode)) ||
											t
									))
								) {
									if (
										(o.splice(i, 1),
										!(e = r.length && de(o)))
									)
										return M.apply(n, r), n
									break
								}
						}
						return (
							(l || d(e, c))(
								r,
								t,
								!E,
								n,
								!t || (ee.test(e) && ce(t.parentNode)) || t
							),
							n
						)
					}),
					(h.sortStable = N.split('').sort(D).join('') === N),
					(h.detectDuplicates = !!l),
					T(),
					(h.sortDetached = ae(function (e) {
						return (
							1 &
							e.compareDocumentPosition(C.createElement('div'))
						)
					})),
					ae(function (e) {
						return (
							(e.innerHTML = "<a href='#'></a>"),
							'#' === e.firstChild.getAttribute('href')
						)
					}) ||
						se('type|href|height|width', function (e, t, n) {
							if (!n)
								return e.getAttribute(
									t,
									'type' === t.toLowerCase() ? 1 : 2
								)
						}),
					(h.attributes &&
						ae(function (e) {
							return (
								(e.innerHTML = '<input/>'),
								e.firstChild.setAttribute('value', ''),
								'' === e.firstChild.getAttribute('value')
							)
						})) ||
						se('value', function (e, t, n) {
							if (!n && 'input' === e.nodeName.toLowerCase())
								return e.defaultValue
						}),
					ae(function (e) {
						return null == e.getAttribute('disabled')
					}) ||
						se(O, function (e, t, n) {
							if (!n)
								return !0 === e[t]
									? t.toLowerCase()
									: (t = e.getAttributeNode(t)) && t.specified
									? t.value
									: null
						}),
					re
				)
			})(w)
			;(T.find = p),
				(T.expr = p.selectors),
				(T.expr[':'] = T.expr.pseudos),
				(T.uniqueSort = T.unique = p.uniqueSort),
				(T.text = p.getText),
				(T.isXMLDoc = p.isXML),
				(T.contains = p.contains)
			function v(e, t, n) {
				for (
					var r = [], i = void 0 !== n;
					(e = e[t]) && 9 !== e.nodeType;

				)
					if (1 === e.nodeType) {
						if (i && T(e).is(n)) break
						r.push(e)
					}
				return r
			}
			function x(e, t) {
				for (var n = []; e; e = e.nextSibling)
					1 === e.nodeType && e !== t && n.push(e)
				return n
			}
			var b = T.expr.match.needsContext,
				C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
				E = /^.[^:#\[\.,]*$/
			function N(e, n, r) {
				if (T.isFunction(n))
					return T.grep(e, function (e, t) {
						return !!n.call(e, t, e) !== r
					})
				if (n.nodeType)
					return T.grep(e, function (e) {
						return (e === n) !== r
					})
				if ('string' == typeof n) {
					if (E.test(n)) return T.filter(n, e, r)
					n = T.filter(n, e)
				}
				return T.grep(e, function (e) {
					return -1 < T.inArray(e, n) !== r
				})
			}
			;(T.filter = function (e, t, n) {
				var r = t[0]
				return (
					n && (e = ':not(' + e + ')'),
					1 === t.length && 1 === r.nodeType
						? T.find.matchesSelector(r, e)
							? [r]
							: []
						: T.find.matches(
								e,
								T.grep(t, function (e) {
									return 1 === e.nodeType
								})
						  )
				)
			}),
				T.fn.extend({
					find: function (e) {
						var t,
							n = [],
							r = this,
							i = r.length
						if ('string' != typeof e)
							return this.pushStack(
								T(e).filter(function () {
									for (t = 0; t < i; t++)
										if (T.contains(r[t], this)) return !0
								})
							)
						for (t = 0; t < i; t++) T.find(e, r[t], n)
						return (
							((n = this.pushStack(
								1 < i ? T.unique(n) : n
							)).selector = this.selector
								? this.selector + ' ' + e
								: e),
							n
						)
					},
					filter: function (e) {
						return this.pushStack(N(this, e || [], !1))
					},
					not: function (e) {
						return this.pushStack(N(this, e || [], !0))
					},
					is: function (e) {
						return !!N(
							this,
							'string' == typeof e && b.test(e) ? T(e) : e || [],
							!1
						).length
					},
				})
			var k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
			;(T.fn.init = function (e, t, n) {
				if (!e) return this
				if (((n = n || S), 'string' != typeof e))
					return e.nodeType
						? ((this.context = this[0] = e),
						  (this.length = 1),
						  this)
						: T.isFunction(e)
						? void 0 !== n.ready
							? n.ready(e)
							: e(T)
						: (void 0 !== e.selector &&
								((this.selector = e.selector),
								(this.context = e.context)),
						  T.makeArray(e, this))
				if (
					!(r =
						'<' === e.charAt(0) &&
						'>' === e.charAt(e.length - 1) &&
						3 <= e.length
							? [null, e, null]
							: k.exec(e)) ||
					(!r[1] && t)
				)
					return (!t || t.jquery ? t || n : this.constructor(t)).find(
						e
					)
				if (r[1]) {
					if (
						((t = t instanceof T ? t[0] : t),
						T.merge(
							this,
							T.parseHTML(
								r[1],
								t && t.nodeType ? t.ownerDocument || t : h,
								!0
							)
						),
						C.test(r[1]) && T.isPlainObject(t))
					)
						for (var r in t)
							T.isFunction(this[r])
								? this[r](t[r])
								: this.attr(r, t[r])
					return this
				}
				if ((n = h.getElementById(r[2])) && n.parentNode) {
					if (n.id !== r[2]) return S.find(e)
					;(this.length = 1), (this[0] = n)
				}
				return (this.context = h), (this.selector = e), this
			}).prototype = T.fn
			var S = T(h),
				A = /^(?:parents|prev(?:Until|All))/,
				D = { children: !0, contents: !0, next: !0, prev: !0 }
			function j(e, t) {
				for (; (e = e[t]) && 1 !== e.nodeType; );
				return e
			}
			T.fn.extend({
				has: function (e) {
					var t,
						n = T(e, this),
						r = n.length
					return this.filter(function () {
						for (t = 0; t < r; t++)
							if (T.contains(this, n[t])) return !0
					})
				},
				closest: function (e, t) {
					for (
						var n,
							r = 0,
							i = this.length,
							o = [],
							a =
								b.test(e) || 'string' != typeof e
									? T(e, t || this.context)
									: 0;
						r < i;
						r++
					)
						for (n = this[r]; n && n !== t; n = n.parentNode)
							if (
								n.nodeType < 11 &&
								(a
									? -1 < a.index(n)
									: 1 === n.nodeType &&
									  T.find.matchesSelector(n, e))
							) {
								o.push(n)
								break
							}
					return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
				},
				index: function (e) {
					return e
						? 'string' == typeof e
							? T.inArray(this[0], T(e))
							: T.inArray(e.jquery ? e[0] : e, this)
						: this[0] && this[0].parentNode
						? this.first().prevAll().length
						: -1
				},
				add: function (e, t) {
					return this.pushStack(
						T.uniqueSort(T.merge(this.get(), T(e, t)))
					)
				},
				addBack: function (e) {
					return this.add(
						null == e ? this.prevObject : this.prevObject.filter(e)
					)
				},
			}),
				T.each(
					{
						parent: function (e) {
							e = e.parentNode
							return e && 11 !== e.nodeType ? e : null
						},
						parents: function (e) {
							return v(e, 'parentNode')
						},
						parentsUntil: function (e, t, n) {
							return v(e, 'parentNode', n)
						},
						next: function (e) {
							return j(e, 'nextSibling')
						},
						prev: function (e) {
							return j(e, 'previousSibling')
						},
						nextAll: function (e) {
							return v(e, 'nextSibling')
						},
						prevAll: function (e) {
							return v(e, 'previousSibling')
						},
						nextUntil: function (e, t, n) {
							return v(e, 'nextSibling', n)
						},
						prevUntil: function (e, t, n) {
							return v(e, 'previousSibling', n)
						},
						siblings: function (e) {
							return x((e.parentNode || {}).firstChild, e)
						},
						children: function (e) {
							return x(e.firstChild)
						},
						contents: function (e) {
							return T.nodeName(e, 'iframe')
								? e.contentDocument || e.contentWindow.document
								: T.merge([], e.childNodes)
						},
					},
					function (r, i) {
						T.fn[r] = function (e, t) {
							var n = T.map(this, i, e)
							return (
								(t = 'Until' !== r.slice(-5) ? e : t) &&
									'string' == typeof t &&
									(n = T.filter(t, n)),
								1 < this.length &&
									(D[r] || (n = T.uniqueSort(n)),
									A.test(r) && (n = n.reverse())),
								this.pushStack(n)
							)
						}
					}
				)
			var L,
				H,
				q = /\S+/g
			function M() {
				h.addEventListener
					? (h.removeEventListener('DOMContentLoaded', _),
					  w.removeEventListener('load', _))
					: (h.detachEvent('onreadystatechange', _),
					  w.detachEvent('onload', _))
			}
			function _() {
				;(!h.addEventListener &&
					'load' !== w.event.type &&
					'complete' !== h.readyState) ||
					(M(), T.ready())
			}
			for (H in ((T.Callbacks = function (r) {
				var e, n
				r =
					'string' == typeof r
						? ((e = r),
						  (n = {}),
						  T.each(e.match(q) || [], function (e, t) {
								n[t] = !0
						  }),
						  n)
						: T.extend({}, r)
				function i() {
					for (s = r.once, a = o = !0; l.length; c = -1)
						for (t = l.shift(); ++c < u.length; )
							!1 === u[c].apply(t[0], t[1]) &&
								r.stopOnFalse &&
								((c = u.length), (t = !1))
					r.memory || (t = !1), (o = !1), s && (u = t ? [] : '')
				}
				var o,
					t,
					a,
					s,
					u = [],
					l = [],
					c = -1,
					f = {
						add: function () {
							return (
								u &&
									(t && !o && ((c = u.length - 1), l.push(t)),
									(function n(e) {
										T.each(e, function (e, t) {
											T.isFunction(t)
												? (r.unique && f.has(t)) ||
												  u.push(t)
												: t &&
												  t.length &&
												  'string' !== T.type(t) &&
												  n(t)
										})
									})(arguments),
									t && !o && i()),
								this
							)
						},
						remove: function () {
							return (
								T.each(arguments, function (e, t) {
									for (var n; -1 < (n = T.inArray(t, u, n)); )
										u.splice(n, 1), n <= c && c--
								}),
								this
							)
						},
						has: function (e) {
							return e ? -1 < T.inArray(e, u) : 0 < u.length
						},
						empty: function () {
							return (u = u && []), this
						},
						disable: function () {
							return (s = l = []), (u = t = ''), this
						},
						disabled: function () {
							return !u
						},
						lock: function () {
							return (s = !0), t || f.disable(), this
						},
						locked: function () {
							return !!s
						},
						fireWith: function (e, t) {
							return (
								s ||
									((t = [
										e,
										(t = t || []).slice ? t.slice() : t,
									]),
									l.push(t),
									o || i()),
								this
							)
						},
						fire: function () {
							return f.fireWith(this, arguments), this
						},
						fired: function () {
							return !!a
						},
					}
				return f
			}),
			T.extend({
				Deferred: function (e) {
					var o = [
							[
								'resolve',
								'done',
								T.Callbacks('once memory'),
								'resolved',
							],
							[
								'reject',
								'fail',
								T.Callbacks('once memory'),
								'rejected',
							],
							['notify', 'progress', T.Callbacks('memory')],
						],
						i = 'pending',
						a = {
							state: function () {
								return i
							},
							always: function () {
								return s.done(arguments).fail(arguments), this
							},
							then: function () {
								var i = arguments
								return T.Deferred(function (r) {
									T.each(o, function (e, t) {
										var n = T.isFunction(i[e]) && i[e]
										s[t[1]](function () {
											var e =
												n && n.apply(this, arguments)
											e && T.isFunction(e.promise)
												? e
														.promise()
														.progress(r.notify)
														.done(r.resolve)
														.fail(r.reject)
												: r[t[0] + 'With'](
														this === a
															? r.promise()
															: this,
														n ? [e] : arguments
												  )
										})
									}),
										(i = null)
								}).promise()
							},
							promise: function (e) {
								return null != e ? T.extend(e, a) : a
							},
						},
						s = {}
					return (
						(a.pipe = a.then),
						T.each(o, function (e, t) {
							var n = t[2],
								r = t[3]
							;(a[t[1]] = n.add),
								r &&
									n.add(
										function () {
											i = r
										},
										o[1 ^ e][2].disable,
										o[2][2].lock
									),
								(s[t[0]] = function () {
									return (
										s[t[0] + 'With'](
											this === s ? a : this,
											arguments
										),
										this
									)
								}),
								(s[t[0] + 'With'] = n.fireWith)
						}),
						a.promise(s),
						e && e.call(s, s),
						s
					)
				},
				when: function (e) {
					function t(t, n, r) {
						return function (e) {
							;(n[t] = this),
								(r[t] =
									1 < arguments.length
										? c.call(arguments)
										: e),
								r === i
									? l.notifyWith(n, r)
									: --u || l.resolveWith(n, r)
						}
					}
					var i,
						n,
						r,
						o = 0,
						a = c.call(arguments),
						s = a.length,
						u = 1 !== s || (e && T.isFunction(e.promise)) ? s : 0,
						l = 1 === u ? e : T.Deferred()
					if (1 < s)
						for (
							i = new Array(s),
								n = new Array(s),
								r = new Array(s);
							o < s;
							o++
						)
							a[o] && T.isFunction(a[o].promise)
								? a[o]
										.promise()
										.progress(t(o, n, i))
										.done(t(o, r, a))
										.fail(l.reject)
								: --u
					return u || l.resolveWith(r, a), l.promise()
				},
			}),
			(T.fn.ready = function (e) {
				return T.ready.promise().done(e), this
			}),
			T.extend({
				isReady: !1,
				readyWait: 1,
				holdReady: function (e) {
					e ? T.readyWait++ : T.ready(!0)
				},
				ready: function (e) {
					;(!0 === e ? --T.readyWait : T.isReady) ||
						((T.isReady = !0) !== e && 0 < --T.readyWait) ||
						(L.resolveWith(h, [T]),
						T.fn.triggerHandler &&
							(T(h).triggerHandler('ready'), T(h).off('ready')))
				},
			}),
			(T.ready.promise = function (e) {
				if (!L)
					if (
						((L = T.Deferred()),
						'complete' === h.readyState ||
							('loading' !== h.readyState &&
								!h.documentElement.doScroll))
					)
						w.setTimeout(T.ready)
					else if (h.addEventListener)
						h.addEventListener('DOMContentLoaded', _),
							w.addEventListener('load', _)
					else {
						h.attachEvent('onreadystatechange', _),
							w.attachEvent('onload', _)
						var n = !1
						try {
							n = null == w.frameElement && h.documentElement
						} catch (e) {}
						n &&
							n.doScroll &&
							!(function t() {
								if (!T.isReady) {
									try {
										n.doScroll('left')
									} catch (e) {
										return w.setTimeout(t, 50)
									}
									M(), T.ready()
								}
							})()
					}
				return L.promise(e)
			}),
			T.ready.promise(),
			T(y)))
				break
			;(y.ownFirst = '0' === H),
				(y.inlineBlockNeedsLayout = !1),
				T(function () {
					var e,
						t,
						n = h.getElementsByTagName('body')[0]
					n &&
						n.style &&
						((e = h.createElement('div')),
						((t = h.createElement('div')).style.cssText =
							'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
						n.appendChild(t).appendChild(e),
						void 0 !== e.style.zoom &&
							((e.style.cssText =
								'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1'),
							(y.inlineBlockNeedsLayout = e =
								3 === e.offsetWidth),
							e && (n.style.zoom = 1)),
						n.removeChild(t))
				}),
				(function () {
					var e = h.createElement('div')
					y.deleteExpando = !0
					try {
						delete e.test
					} catch (e) {
						y.deleteExpando = !1
					}
					e = null
				})()
			function F(e) {
				var t = T.noData[(e.nodeName + ' ').toLowerCase()],
					n = +e.nodeType || 1
				return (
					(1 === n || 9 === n) &&
					(!t || (!0 !== t && e.getAttribute('classid') === t))
				)
			}
			var O,
				R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				P = /([A-Z])/g
			function B(e, t, n) {
				if (void 0 === n && 1 === e.nodeType) {
					var r = 'data-' + t.replace(P, '-$1').toLowerCase()
					if ('string' == typeof (n = e.getAttribute(r))) {
						try {
							n =
								'true' === n ||
								('false' !== n &&
									('null' === n
										? null
										: +n + '' === n
										? +n
										: R.test(n)
										? T.parseJSON(n)
										: n))
						} catch (e) {}
						T.data(e, t, n)
					} else n = void 0
				}
				return n
			}
			function W(e) {
				for (var t in e)
					if (
						('data' !== t || !T.isEmptyObject(e[t])) &&
						'toJSON' !== t
					)
						return
				return 1
			}
			function I(e, t, n, r) {
				if (F(e)) {
					var i,
						o = T.expando,
						a = e.nodeType,
						s = a ? T.cache : e,
						u = a ? e[o] : e[o] && o
					if (
						(u && s[u] && (r || s[u].data)) ||
						void 0 !== n ||
						'string' != typeof t
					)
						return (
							s[
								(u =
									u || (a ? (e[o] = f.pop() || T.guid++) : o))
							] || (s[u] = a ? {} : { toJSON: T.noop }),
							('object' != typeof t && 'function' != typeof t) ||
								(r
									? (s[u] = T.extend(s[u], t))
									: (s[u].data = T.extend(s[u].data, t))),
							(u = s[u]),
							r || (u.data || (u.data = {}), (u = u.data)),
							void 0 !== n && (u[T.camelCase(t)] = n),
							'string' == typeof t
								? null == (i = u[t]) && (i = u[T.camelCase(t)])
								: (i = u),
							i
						)
				}
			}
			function $(e, t, n) {
				if (F(e)) {
					var r,
						i,
						o = e.nodeType,
						a = o ? T.cache : e,
						s = o ? e[T.expando] : T.expando
					if (a[s]) {
						if (t && (r = n ? a[s] : a[s].data)) {
							i = (t = T.isArray(t)
								? t.concat(T.map(t, T.camelCase))
								: t in r || (t = T.camelCase(t)) in r
								? [t]
								: t.split(' ')).length
							for (; i--; ) delete r[t[i]]
							if (n ? !W(r) : !T.isEmptyObject(r)) return
						}
						;(n || (delete a[s].data, W(a[s]))) &&
							(o
								? T.cleanData([e], !0)
								: y.deleteExpando || a != a.window
								? delete a[s]
								: (a[s] = void 0))
					}
				}
			}
			T.extend({
				cache: {},
				noData: {
					'applet ': !0,
					'embed ': !0,
					'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
				},
				hasData: function (e) {
					return (
						!!(e = e.nodeType
							? T.cache[e[T.expando]]
							: e[T.expando]) && !W(e)
					)
				},
				data: function (e, t, n) {
					return I(e, t, n)
				},
				removeData: function (e, t) {
					return $(e, t)
				},
				_data: function (e, t, n) {
					return I(e, t, n, !0)
				},
				_removeData: function (e, t) {
					return $(e, t, !0)
				},
			}),
				T.fn.extend({
					data: function (e, t) {
						var n,
							r,
							i,
							o = this[0],
							a = o && o.attributes
						if (void 0 !== e)
							return 'object' == typeof e
								? this.each(function () {
										T.data(this, e)
								  })
								: 1 < arguments.length
								? this.each(function () {
										T.data(this, e, t)
								  })
								: o
								? B(o, e, T.data(o, e))
								: void 0
						if (
							this.length &&
							((i = T.data(o)),
							1 === o.nodeType && !T._data(o, 'parsedAttrs'))
						) {
							for (n = a.length; n--; )
								a[n] &&
									0 === (r = a[n].name).indexOf('data-') &&
									B(o, (r = T.camelCase(r.slice(5))), i[r])
							T._data(o, 'parsedAttrs', !0)
						}
						return i
					},
					removeData: function (e) {
						return this.each(function () {
							T.removeData(this, e)
						})
					},
				}),
				T.extend({
					queue: function (e, t, n) {
						var r
						if (e)
							return (
								(r = T._data(e, (t = (t || 'fx') + 'queue'))),
								n &&
									(!r || T.isArray(n)
										? (r = T._data(e, t, T.makeArray(n)))
										: r.push(n)),
								r || []
							)
					},
					dequeue: function (e, t) {
						var n = T.queue(e, (t = t || 'fx')),
							r = n.length,
							i = n.shift(),
							o = T._queueHooks(e, t)
						'inprogress' === i && ((i = n.shift()), r--),
							i &&
								('fx' === t && n.unshift('inprogress'),
								delete o.stop,
								i.call(
									e,
									function () {
										T.dequeue(e, t)
									},
									o
								)),
							!r && o && o.empty.fire()
					},
					_queueHooks: function (e, t) {
						var n = t + 'queueHooks'
						return (
							T._data(e, n) ||
							T._data(e, n, {
								empty: T.Callbacks('once memory').add(
									function () {
										T._removeData(e, t + 'queue'),
											T._removeData(e, n)
									}
								),
							})
						)
					},
				}),
				T.fn.extend({
					queue: function (t, n) {
						var e = 2
						return (
							'string' != typeof t && ((n = t), (t = 'fx'), e--),
							arguments.length < e
								? T.queue(this[0], t)
								: void 0 === n
								? this
								: this.each(function () {
										var e = T.queue(this, t, n)
										T._queueHooks(this, t),
											'fx' === t &&
												'inprogress' !== e[0] &&
												T.dequeue(this, t)
								  })
						)
					},
					dequeue: function (e) {
						return this.each(function () {
							T.dequeue(this, e)
						})
					},
					clearQueue: function (e) {
						return this.queue(e || 'fx', [])
					},
					promise: function (e, t) {
						function n() {
							--i || o.resolveWith(a, [a])
						}
						var r,
							i = 1,
							o = T.Deferred(),
							a = this,
							s = this.length
						for (
							'string' != typeof e && ((t = e), (e = void 0)),
								e = e || 'fx';
							s--;

						)
							(r = T._data(a[s], e + 'queueHooks')) &&
								r.empty &&
								(i++, r.empty.add(n))
						return n(), o.promise(t)
					},
				}),
				(y.shrinkWrapBlocks = function () {
					return null != O
						? O
						: ((O = !1),
						  (t = h.getElementsByTagName('body')[0]) && t.style
								? ((e = h.createElement('div')),
								  ((n = h.createElement('div')).style.cssText =
										'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
								  t.appendChild(n).appendChild(e),
								  void 0 !== e.style.zoom &&
										((e.style.cssText =
											'-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1'),
										(e.appendChild(
											h.createElement('div')
										).style.width = '5px'),
										(O = 3 !== e.offsetWidth)),
								  t.removeChild(n),
								  O)
								: void 0)
					var e, t, n
				})
			function z(e, t) {
				return (
					'none' === T.css((e = t || e), 'display') ||
					!T.contains(e.ownerDocument, e)
				)
			}
			var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				U = new RegExp('^(?:([+-])=|)(' + X + ')([a-z%]*)$', 'i'),
				V = ['Top', 'Right', 'Bottom', 'Left']
			function Y(e, t, n, r) {
				var i,
					o = 1,
					a = 20,
					s = r
						? function () {
								return r.cur()
						  }
						: function () {
								return T.css(e, t, '')
						  },
					u = s(),
					l = (n && n[3]) || (T.cssNumber[t] ? '' : 'px'),
					c =
						(T.cssNumber[t] || ('px' !== l && +u)) &&
						U.exec(T.css(e, t))
				if (c && c[3] !== l)
					for (
						l = l || c[3], n = n || [], c = +u || 1;
						(c /= o = o || '.5'),
							T.style(e, t, c + l),
							o !== (o = s() / u) && 1 !== o && --a;

					);
				return (
					n &&
						((c = +c || +u || 0),
						(i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
						r && ((r.unit = l), (r.start = c), (r.end = i))),
					i
				)
			}
			var J = function (e, t, n, r, i, o, a) {
					var s = 0,
						u = e.length,
						l = null == n
					if ('object' === T.type(n))
						for (s in ((i = !0), n)) J(e, t, s, n[s], !0, o, a)
					else if (
						void 0 !== r &&
						((i = !0),
						T.isFunction(r) || (a = !0),
						(t = l
							? a
								? (t.call(e, r), null)
								: ((l = t),
								  function (e, t, n) {
										return l.call(T(e), n)
								  })
							: t))
					)
						for (; s < u; s++)
							t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
					return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
				},
				G = /^(?:checkbox|radio)$/i,
				Q = /<([\w:-]+)/,
				K = /^$|\/(?:java|ecma)script/i,
				Z = /^\s+/,
				ee =
					'abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video'
			function te(e) {
				var t = ee.split('|'),
					n = e.createDocumentFragment()
				if (n.createElement) for (; t.length; ) n.createElement(t.pop())
				return n
			}
			;(gt = h.createElement('div')),
				(mt = h.createDocumentFragment()),
				(o = h.createElement('input')),
				(gt.innerHTML =
					"  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
				(y.leadingWhitespace = 3 === gt.firstChild.nodeType),
				(y.tbody = !gt.getElementsByTagName('tbody').length),
				(y.htmlSerialize = !!gt.getElementsByTagName('link').length),
				(y.html5Clone =
					'<:nav></:nav>' !==
					h.createElement('nav').cloneNode(!0).outerHTML),
				(o.type = 'checkbox'),
				(o.checked = !0),
				mt.appendChild(o),
				(y.appendChecked = o.checked),
				(gt.innerHTML = '<textarea>x</textarea>'),
				(y.noCloneChecked = !!gt.cloneNode(!0).lastChild.defaultValue),
				mt.appendChild(gt),
				(o = h.createElement('input')).setAttribute('type', 'radio'),
				o.setAttribute('checked', 'checked'),
				o.setAttribute('name', 't'),
				gt.appendChild(o),
				(y.checkClone = gt
					.cloneNode(!0)
					.cloneNode(!0).lastChild.checked),
				(y.noCloneEvent = !!gt.addEventListener),
				(gt[T.expando] = 1),
				(y.attributes = !gt.getAttribute(T.expando))
			var ne = {
				option: [1, "<select multiple='multiple'>", '</select>'],
				legend: [1, '<fieldset>', '</fieldset>'],
				area: [1, '<map>', '</map>'],
				param: [1, '<object>', '</object>'],
				thead: [1, '<table>', '</table>'],
				tr: [2, '<table><tbody>', '</tbody></table>'],
				col: [
					2,
					'<table><tbody></tbody><colgroup>',
					'</colgroup></table>',
				],
				td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
				_default: y.htmlSerialize
					? [0, '', '']
					: [1, 'X<div>', '</div>'],
			}
			function re(e, t) {
				var n,
					r,
					i = 0,
					o =
						void 0 !== e.getElementsByTagName
							? e.getElementsByTagName(t || '*')
							: void 0 !== e.querySelectorAll
							? e.querySelectorAll(t || '*')
							: void 0
				if (!o)
					for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
						!t || T.nodeName(r, t)
							? o.push(r)
							: T.merge(o, re(r, t))
				return void 0 === t || (t && T.nodeName(e, t))
					? T.merge([e], o)
					: o
			}
			function ie(e, t) {
				for (var n, r = 0; null != (n = e[r]); r++)
					T._data(n, 'globalEval', !t || T._data(t[r], 'globalEval'))
			}
			;(ne.optgroup = ne.option),
				(ne.tbody = ne.tfoot = ne.colgroup = ne.caption = ne.thead),
				(ne.th = ne.td)
			var oe = /<|&#?\w+;/,
				ae = /<tbody/i
			function se(e) {
				G.test(e.type) && (e.defaultChecked = e.checked)
			}
			function ue(e, t, n, r, i) {
				for (
					var o,
						a,
						s,
						u,
						l,
						c,
						f,
						d = e.length,
						p = te(t),
						h = [],
						m = 0;
					m < d;
					m++
				)
					if ((a = e[m]) || 0 === a)
						if ('object' === T.type(a))
							T.merge(h, a.nodeType ? [a] : a)
						else if (oe.test(a)) {
							for (
								u = u || p.appendChild(t.createElement('div')),
									l = (Q.exec(a) || [
										'',
										'',
									])[1].toLowerCase(),
									f = ne[l] || ne._default,
									u.innerHTML =
										f[1] + T.htmlPrefilter(a) + f[2],
									o = f[0];
								o--;

							)
								u = u.lastChild
							if (
								(!y.leadingWhitespace &&
									Z.test(a) &&
									h.push(t.createTextNode(Z.exec(a)[0])),
								!y.tbody)
							)
								for (
									o =
										(a =
											'table' !== l || ae.test(a)
												? '<table>' !== f[1] ||
												  ae.test(a)
													? 0
													: u
												: u.firstChild) &&
										a.childNodes.length;
									o--;

								)
									T.nodeName(
										(c = a.childNodes[o]),
										'tbody'
									) &&
										!c.childNodes.length &&
										a.removeChild(c)
							for (
								T.merge(h, u.childNodes), u.textContent = '';
								u.firstChild;

							)
								u.removeChild(u.firstChild)
							u = p.lastChild
						} else h.push(t.createTextNode(a))
				for (
					u && p.removeChild(u),
						y.appendChecked || T.grep(re(h, 'input'), se),
						m = 0;
					(a = h[m++]);

				)
					if (r && -1 < T.inArray(a, r)) i && i.push(a)
					else if (
						((s = T.contains(a.ownerDocument, a)),
						(u = re(p.appendChild(a), 'script')),
						s && ie(u),
						n)
					)
						for (o = 0; (a = u[o++]); )
							K.test(a.type || '') && n.push(a)
				return (u = null), p
			}
			!(function () {
				var e,
					t,
					n = h.createElement('div')
				for (e in { submit: !0, change: !0, focusin: !0 })
					(y[e] = (t = 'on' + e) in w) ||
						(n.setAttribute(t, 't'),
						(y[e] = !1 === n.attributes[t].expando))
				n = null
			})()
			var le = /^(?:input|select|textarea)$/i,
				ce = /^key/,
				fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
				de = /^(?:focusinfocus|focusoutblur)$/,
				pe = /^([^.]*)(?:\.(.+)|)/
			function he() {
				return !0
			}
			function me() {
				return !1
			}
			function ge() {
				try {
					return h.activeElement
				} catch (e) {}
			}
			function ye(e, t, n, r, i, o) {
				var a, s
				if ('object' == typeof t) {
					for (s in ('string' != typeof n &&
						((r = r || n), (n = void 0)),
					t))
						ye(e, s, n, r, t[s], o)
					return e
				}
				if (
					(null == r && null == i
						? ((i = n), (r = n = void 0))
						: null == i &&
						  ('string' == typeof n
								? ((i = r), (r = void 0))
								: ((i = r), (r = n), (n = void 0))),
					!1 === i)
				)
					i = me
				else if (!i) return e
				return (
					1 === o &&
						((a = i),
						((i = function (e) {
							return T().off(e), a.apply(this, arguments)
						}).guid = a.guid || (a.guid = T.guid++))),
					e.each(function () {
						T.event.add(this, t, i, r, n)
					})
				)
			}
			;(T.event = {
				global: {},
				add: function (e, t, n, r, i) {
					var o,
						a,
						s,
						u,
						l,
						c,
						f,
						d,
						p,
						h = T._data(e)
					if (h) {
						for (
							n.handler &&
								((n = (s = n).handler), (i = s.selector)),
								n.guid || (n.guid = T.guid++),
								(o = h.events) || (o = h.events = {}),
								(l = h.handle) ||
									((l = h.handle = function (e) {
										return void 0 === T ||
											(e && T.event.triggered === e.type)
											? void 0
											: T.event.dispatch.apply(
													l.elem,
													arguments
											  )
									}).elem = e),
								a = (t = (t || '').match(q) || ['']).length;
							a--;

						)
							(f = p = (c = pe.exec(t[a]) || [])[1]),
								(d = (c[2] || '').split('.').sort()),
								f &&
									((u = T.event.special[f] || {}),
									(f =
										(i ? u.delegateType : u.bindType) || f),
									(u = T.event.special[f] || {}),
									(c = T.extend(
										{
											type: f,
											origType: p,
											data: r,
											handler: n,
											guid: n.guid,
											selector: i,
											needsContext:
												i &&
												T.expr.match.needsContext.test(
													i
												),
											namespace: d.join('.'),
										},
										s
									)),
									(p = o[f]) ||
										(((p = o[f] = []).delegateCount = 0),
										(u.setup &&
											!1 !== u.setup.call(e, r, d, l)) ||
											(e.addEventListener
												? e.addEventListener(f, l, !1)
												: e.attachEvent &&
												  e.attachEvent('on' + f, l))),
									u.add &&
										(u.add.call(e, c),
										c.handler.guid ||
											(c.handler.guid = n.guid)),
									i
										? p.splice(p.delegateCount++, 0, c)
										: p.push(c),
									(T.event.global[f] = !0))
						e = null
					}
				},
				remove: function (e, t, n, r, i) {
					var o,
						a,
						s,
						u,
						l,
						c,
						f,
						d,
						p,
						h,
						m,
						g = T.hasData(e) && T._data(e)
					if (g && (c = g.events)) {
						for (l = (t = (t || '').match(q) || ['']).length; l--; )
							if (
								((p = m = (s = pe.exec(t[l]) || [])[1]),
								(h = (s[2] || '').split('.').sort()),
								p)
							) {
								for (
									f = T.event.special[p] || {},
										d =
											c[
												(p =
													(r
														? f.delegateType
														: f.bindType) || p)
											] || [],
										s =
											s[2] &&
											new RegExp(
												'(^|\\.)' +
													h.join('\\.(?:.*\\.|)') +
													'(\\.|$)'
											),
										u = o = d.length;
									o--;

								)
									(a = d[o]),
										(!i && m !== a.origType) ||
											(n && n.guid !== a.guid) ||
											(s && !s.test(a.namespace)) ||
											(r &&
												r !== a.selector &&
												('**' !== r || !a.selector)) ||
											(d.splice(o, 1),
											a.selector && d.delegateCount--,
											f.remove && f.remove.call(e, a))
								u &&
									!d.length &&
									((f.teardown &&
										!1 !==
											f.teardown.call(e, h, g.handle)) ||
										T.removeEvent(e, p, g.handle),
									delete c[p])
							} else
								for (p in c)
									T.event.remove(e, p + t[l], n, r, !0)
						T.isEmptyObject(c) &&
							(delete g.handle, T._removeData(e, 'events'))
					}
				},
				trigger: function (e, t, n, r) {
					var i,
						o,
						a,
						s,
						u,
						l,
						c = [n || h],
						f = g.call(e, 'type') ? e.type : e,
						d = g.call(e, 'namespace')
							? e.namespace.split('.')
							: [],
						p = (u = n = n || h)
					if (
						3 !== n.nodeType &&
						8 !== n.nodeType &&
						!de.test(f + T.event.triggered) &&
						(-1 < f.indexOf('.') &&
							((f = (d = f.split('.')).shift()), d.sort()),
						(o = f.indexOf(':') < 0 && 'on' + f),
						((e = e[T.expando]
							? e
							: new T.Event(
									f,
									'object' == typeof e && e
							  )).isTrigger = r ? 2 : 3),
						(e.namespace = d.join('.')),
						(e.rnamespace = e.namespace
							? new RegExp(
									'(^|\\.)' +
										d.join('\\.(?:.*\\.|)') +
										'(\\.|$)'
							  )
							: null),
						(e.result = void 0),
						e.target || (e.target = n),
						(t = null == t ? [e] : T.makeArray(t, [e])),
						(s = T.event.special[f] || {}),
						r || !s.trigger || !1 !== s.trigger.apply(n, t))
					) {
						if (!r && !s.noBubble && !T.isWindow(n)) {
							for (
								a = s.delegateType || f,
									de.test(a + f) || (p = p.parentNode);
								p;
								p = p.parentNode
							)
								c.push(p), (u = p)
							u === (n.ownerDocument || h) &&
								c.push(u.defaultView || u.parentWindow || w)
						}
						for (l = 0; (p = c[l++]) && !e.isPropagationStopped(); )
							(e.type = 1 < l ? a : s.bindType || f),
								(i =
									(T._data(p, 'events') || {})[e.type] &&
									T._data(p, 'handle')) && i.apply(p, t),
								(i = o && p[o]) &&
									i.apply &&
									F(p) &&
									((e.result = i.apply(p, t)),
									!1 === e.result && e.preventDefault())
						if (
							((e.type = f),
							!r &&
								!e.isDefaultPrevented() &&
								(!s._default ||
									!1 === s._default.apply(c.pop(), t)) &&
								F(n) &&
								o &&
								n[f] &&
								!T.isWindow(n))
						) {
							;(u = n[o]) && (n[o] = null),
								(T.event.triggered = f)
							try {
								n[f]()
							} catch (e) {}
							;(T.event.triggered = void 0), u && (n[o] = u)
						}
						return e.result
					}
				},
				dispatch: function (e) {
					e = T.event.fix(e)
					var t,
						n,
						r,
						i,
						o,
						a = c.call(arguments),
						s = (T._data(this, 'events') || {})[e.type] || [],
						u = T.event.special[e.type] || {}
					if (
						(((a[0] = e).delegateTarget = this),
						!u.preDispatch || !1 !== u.preDispatch.call(this, e))
					) {
						for (
							o = T.event.handlers.call(this, e, s), t = 0;
							(r = o[t++]) && !e.isPropagationStopped();

						)
							for (
								e.currentTarget = r.elem, n = 0;
								(i = r.handlers[n++]) &&
								!e.isImmediatePropagationStopped();

							)
								(e.rnamespace &&
									!e.rnamespace.test(i.namespace)) ||
									((e.handleObj = i),
									(e.data = i.data),
									void 0 !==
										(i = (
											(T.event.special[i.origType] || {})
												.handle || i.handler
										).apply(r.elem, a)) &&
										!1 === (e.result = i) &&
										(e.preventDefault(),
										e.stopPropagation()))
						return (
							u.postDispatch && u.postDispatch.call(this, e),
							e.result
						)
					}
				},
				handlers: function (e, t) {
					var n,
						r,
						i,
						o,
						a = [],
						s = t.delegateCount,
						u = e.target
					if (
						s &&
						u.nodeType &&
						('click' !== e.type || isNaN(e.button) || e.button < 1)
					)
						for (; u != this; u = u.parentNode || this)
							if (
								1 === u.nodeType &&
								(!0 !== u.disabled || 'click' !== e.type)
							) {
								for (r = [], n = 0; n < s; n++)
									void 0 ===
										r[(i = (o = t[n]).selector + ' ')] &&
										(r[i] = o.needsContext
											? -1 < T(i, this).index(u)
											: T.find(i, this, null, [u])
													.length),
										r[i] && r.push(o)
								r.length && a.push({ elem: u, handlers: r })
							}
					return (
						s < t.length &&
							a.push({ elem: this, handlers: t.slice(s) }),
						a
					)
				},
				fix: function (e) {
					if (e[T.expando]) return e
					var t,
						n,
						r,
						i = e.type,
						o = e,
						a = this.fixHooks[i]
					for (
						a ||
							(this.fixHooks[i] = a = fe.test(i)
								? this.mouseHooks
								: ce.test(i)
								? this.keyHooks
								: {}),
							r = a.props
								? this.props.concat(a.props)
								: this.props,
							e = new T.Event(o),
							t = r.length;
						t--;

					)
						e[(n = r[t])] = o[n]
					return (
						e.target || (e.target = o.srcElement || h),
						3 === e.target.nodeType &&
							(e.target = e.target.parentNode),
						(e.metaKey = !!e.metaKey),
						a.filter ? a.filter(e, o) : e
					)
				},
				props: 'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
					' '
				),
				fixHooks: {},
				keyHooks: {
					props: 'char charCode key keyCode'.split(' '),
					filter: function (e, t) {
						return (
							null == e.which &&
								(e.which =
									null != t.charCode
										? t.charCode
										: t.keyCode),
							e
						)
					},
				},
				mouseHooks: {
					props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
						' '
					),
					filter: function (e, t) {
						var n,
							r,
							i = t.button,
							o = t.fromElement
						return (
							null == e.pageX &&
								null != t.clientX &&
								((r = (n = e.target.ownerDocument || h)
									.documentElement),
								(n = n.body),
								(e.pageX =
									t.clientX +
									((r && r.scrollLeft) ||
										(n && n.scrollLeft) ||
										0) -
									((r && r.clientLeft) ||
										(n && n.clientLeft) ||
										0)),
								(e.pageY =
									t.clientY +
									((r && r.scrollTop) ||
										(n && n.scrollTop) ||
										0) -
									((r && r.clientTop) ||
										(n && n.clientTop) ||
										0))),
							!e.relatedTarget &&
								o &&
								(e.relatedTarget =
									o === e.target ? t.toElement : o),
							e.which ||
								void 0 === i ||
								(e.which =
									1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
							e
						)
					},
				},
				special: {
					load: { noBubble: !0 },
					focus: {
						trigger: function () {
							if (this !== ge() && this.focus)
								try {
									return this.focus(), !1
								} catch (e) {}
						},
						delegateType: 'focusin',
					},
					blur: {
						trigger: function () {
							if (this === ge() && this.blur)
								return this.blur(), !1
						},
						delegateType: 'focusout',
					},
					click: {
						trigger: function () {
							if (
								T.nodeName(this, 'input') &&
								'checkbox' === this.type &&
								this.click
							)
								return this.click(), !1
						},
						_default: function (e) {
							return T.nodeName(e.target, 'a')
						},
					},
					beforeunload: {
						postDispatch: function (e) {
							void 0 !== e.result &&
								e.originalEvent &&
								(e.originalEvent.returnValue = e.result)
						},
					},
				},
				simulate: function (e, t, n) {
					e = T.extend(new T.Event(), n, { type: e, isSimulated: !0 })
					T.event.trigger(e, null, t),
						e.isDefaultPrevented() && n.preventDefault()
				},
			}),
				(T.removeEvent = h.removeEventListener
					? function (e, t, n) {
							e.removeEventListener && e.removeEventListener(t, n)
					  }
					: function (e, t, n) {
							t = 'on' + t
							e.detachEvent &&
								(void 0 === e[t] && (e[t] = null),
								e.detachEvent(t, n))
					  }),
				(T.Event = function (e, t) {
					if (!(this instanceof T.Event)) return new T.Event(e, t)
					e && e.type
						? ((this.originalEvent = e),
						  (this.type = e.type),
						  (this.isDefaultPrevented =
								e.defaultPrevented ||
								(void 0 === e.defaultPrevented &&
									!1 === e.returnValue)
									? he
									: me))
						: (this.type = e),
						t && T.extend(this, t),
						(this.timeStamp = (e && e.timeStamp) || T.now()),
						(this[T.expando] = !0)
				}),
				(T.Event.prototype = {
					constructor: T.Event,
					isDefaultPrevented: me,
					isPropagationStopped: me,
					isImmediatePropagationStopped: me,
					preventDefault: function () {
						var e = this.originalEvent
						;(this.isDefaultPrevented = he),
							e &&
								(e.preventDefault
									? e.preventDefault()
									: (e.returnValue = !1))
					},
					stopPropagation: function () {
						var e = this.originalEvent
						;(this.isPropagationStopped = he),
							e &&
								!this.isSimulated &&
								(e.stopPropagation && e.stopPropagation(),
								(e.cancelBubble = !0))
					},
					stopImmediatePropagation: function () {
						var e = this.originalEvent
						;(this.isImmediatePropagationStopped = he),
							e &&
								e.stopImmediatePropagation &&
								e.stopImmediatePropagation(),
							this.stopPropagation()
					},
				}),
				T.each(
					{
						mouseenter: 'mouseover',
						mouseleave: 'mouseout',
						pointerenter: 'pointerover',
						pointerleave: 'pointerout',
					},
					function (e, i) {
						T.event.special[e] = {
							delegateType: i,
							bindType: i,
							handle: function (e) {
								var t,
									n = e.relatedTarget,
									r = e.handleObj
								return (
									(n &&
										(n === this || T.contains(this, n))) ||
										((e.type = r.origType),
										(t = r.handler.apply(this, arguments)),
										(e.type = i)),
									t
								)
							},
						}
					}
				),
				y.submit ||
					(T.event.special.submit = {
						setup: function () {
							if (T.nodeName(this, 'form')) return !1
							T.event.add(
								this,
								'click._submit keypress._submit',
								function (e) {
									;(e = e.target),
										(e =
											T.nodeName(e, 'input') ||
											T.nodeName(e, 'button')
												? T.prop(e, 'form')
												: void 0)
									e &&
										!T._data(e, 'submit') &&
										(T.event.add(
											e,
											'submit._submit',
											function (e) {
												e._submitBubble = !0
											}
										),
										T._data(e, 'submit', !0))
								}
							)
						},
						postDispatch: function (e) {
							e._submitBubble &&
								(delete e._submitBubble,
								this.parentNode &&
									!e.isTrigger &&
									T.event.simulate(
										'submit',
										this.parentNode,
										e
									))
						},
						teardown: function () {
							if (T.nodeName(this, 'form')) return !1
							T.event.remove(this, '._submit')
						},
					}),
				y.change ||
					(T.event.special.change = {
						setup: function () {
							if (le.test(this.nodeName))
								return (
									('checkbox' !== this.type &&
										'radio' !== this.type) ||
										(T.event.add(
											this,
											'propertychange._change',
											function (e) {
												'checked' ===
													e.originalEvent
														.propertyName &&
													(this._justChanged = !0)
											}
										),
										T.event.add(
											this,
											'click._change',
											function (e) {
												this._justChanged &&
													!e.isTrigger &&
													(this._justChanged = !1),
													T.event.simulate(
														'change',
														this,
														e
													)
											}
										)),
									!1
								)
							T.event.add(
								this,
								'beforeactivate._change',
								function (e) {
									e = e.target
									le.test(e.nodeName) &&
										!T._data(e, 'change') &&
										(T.event.add(
											e,
											'change._change',
											function (e) {
												!this.parentNode ||
													e.isSimulated ||
													e.isTrigger ||
													T.event.simulate(
														'change',
														this.parentNode,
														e
													)
											}
										),
										T._data(e, 'change', !0))
								}
							)
						},
						handle: function (e) {
							var t = e.target
							if (
								this !== t ||
								e.isSimulated ||
								e.isTrigger ||
								('radio' !== t.type && 'checkbox' !== t.type)
							)
								return e.handleObj.handler.apply(
									this,
									arguments
								)
						},
						teardown: function () {
							return (
								T.event.remove(this, '._change'),
								!le.test(this.nodeName)
							)
						},
					}),
				y.focusin ||
					T.each(
						{ focus: 'focusin', blur: 'focusout' },
						function (n, r) {
							function i(e) {
								T.event.simulate(r, e.target, T.event.fix(e))
							}
							T.event.special[r] = {
								setup: function () {
									var e = this.ownerDocument || this,
										t = T._data(e, r)
									t || e.addEventListener(n, i, !0),
										T._data(e, r, (t || 0) + 1)
								},
								teardown: function () {
									var e = this.ownerDocument || this,
										t = T._data(e, r) - 1
									t
										? T._data(e, r, t)
										: (e.removeEventListener(n, i, !0),
										  T._removeData(e, r))
								},
							}
						}
					),
				T.fn.extend({
					on: function (e, t, n, r) {
						return ye(this, e, t, n, r)
					},
					one: function (e, t, n, r) {
						return ye(this, e, t, n, r, 1)
					},
					off: function (e, t, n) {
						var r, i
						if (e && e.preventDefault && e.handleObj)
							return (
								(r = e.handleObj),
								T(e.delegateTarget).off(
									r.namespace
										? r.origType + '.' + r.namespace
										: r.origType,
									r.selector,
									r.handler
								),
								this
							)
						if ('object' != typeof e)
							return (
								(!1 !== t && 'function' != typeof t) ||
									((n = t), (t = void 0)),
								!1 === n && (n = me),
								this.each(function () {
									T.event.remove(this, e, n, t)
								})
							)
						for (i in e) this.off(i, t, e[i])
						return this
					},
					trigger: function (e, t) {
						return this.each(function () {
							T.event.trigger(e, t, this)
						})
					},
					triggerHandler: function (e, t) {
						var n = this[0]
						if (n) return T.event.trigger(e, t, n, !0)
					},
				})
			var ve = / jQuery\d+="(?:null|\d+)"/g,
				xe = new RegExp('<(?:' + ee + ')[\\s/>]', 'i'),
				be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
				we = /<script|<style|<link/i,
				Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Ce = /^true\/(.*)/,
				Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
				Ne = te(h).appendChild(h.createElement('div'))
			function ke(e, t) {
				return T.nodeName(e, 'table') &&
					T.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr')
					? e.getElementsByTagName('tbody')[0] ||
							e.appendChild(
								e.ownerDocument.createElement('tbody')
							)
					: e
			}
			function Se(e) {
				return (
					(e.type = (null !== T.find.attr(e, 'type')) + '/' + e.type),
					e
				)
			}
			function Ae(e) {
				var t = Ce.exec(e.type)
				return t ? (e.type = t[1]) : e.removeAttribute('type'), e
			}
			function De(e, t) {
				if (1 === t.nodeType && T.hasData(e)) {
					var n,
						r,
						i,
						o = T._data(e),
						e = T._data(t, o),
						a = o.events
					if (a)
						for (n in (delete e.handle, (e.events = {}), a))
							for (r = 0, i = a[n].length; r < i; r++)
								T.event.add(t, n, a[n][r])
					e.data && (e.data = T.extend({}, e.data))
				}
			}
			function je(n, r, i, o) {
				r = m.apply([], r)
				var e,
					t,
					a,
					s,
					u,
					l,
					c = 0,
					f = n.length,
					d = f - 1,
					p = r[0],
					h = T.isFunction(p)
				if (
					h ||
					(1 < f &&
						'string' == typeof p &&
						!y.checkClone &&
						Te.test(p))
				)
					return n.each(function (e) {
						var t = n.eq(e)
						h && (r[0] = p.call(this, e, t.html())), je(t, r, i, o)
					})
				if (
					f &&
					((e = (l = ue(r, n[0].ownerDocument, !1, n, o)).firstChild),
					1 === l.childNodes.length && (l = e),
					e || o)
				) {
					for (
						a = (s = T.map(re(l, 'script'), Se)).length;
						c < f;
						c++
					)
						(t = l),
							c !== d &&
								((t = T.clone(t, !0, !0)),
								a && T.merge(s, re(t, 'script'))),
							i.call(n[c], t, c)
					if (a)
						for (
							u = s[s.length - 1].ownerDocument,
								T.map(s, Ae),
								c = 0;
							c < a;
							c++
						)
							(t = s[c]),
								K.test(t.type || '') &&
									!T._data(t, 'globalEval') &&
									T.contains(u, t) &&
									(t.src
										? T._evalUrl && T._evalUrl(t.src)
										: T.globalEval(
												(
													t.text ||
													t.textContent ||
													t.innerHTML ||
													''
												).replace(Ee, '')
										  ))
					l = e = null
				}
				return n
			}
			function Le(e, t, n) {
				for (
					var r, i = t ? T.filter(t, e) : e, o = 0;
					null != (r = i[o]);
					o++
				)
					n || 1 !== r.nodeType || T.cleanData(re(r)),
						r.parentNode &&
							(n &&
								T.contains(r.ownerDocument, r) &&
								ie(re(r, 'script')),
							r.parentNode.removeChild(r))
				return e
			}
			T.extend({
				htmlPrefilter: function (e) {
					return e.replace(be, '<$1></$2>')
				},
				clone: function (e, t, n) {
					var r,
						i,
						o,
						a,
						s,
						u = T.contains(e.ownerDocument, e)
					if (
						(y.html5Clone ||
						T.isXMLDoc(e) ||
						!xe.test('<' + e.nodeName + '>')
							? (o = e.cloneNode(!0))
							: ((Ne.innerHTML = e.outerHTML),
							  Ne.removeChild((o = Ne.firstChild))),
						!(
							(y.noCloneEvent && y.noCloneChecked) ||
							(1 !== e.nodeType && 11 !== e.nodeType) ||
							T.isXMLDoc(e)
						))
					)
						for (
							r = re(o), s = re(e), a = 0;
							null != (i = s[a]);
							++a
						)
							r[a] &&
								(function (e, t) {
									var n, r, i
									if (1 === t.nodeType) {
										if (
											((n = t.nodeName.toLowerCase()),
											!y.noCloneEvent && t[T.expando])
										) {
											for (r in (i = T._data(t)).events)
												T.removeEvent(t, r, i.handle)
											t.removeAttribute(T.expando)
										}
										'script' === n && t.text !== e.text
											? ((Se(t).text = e.text), Ae(t))
											: 'object' === n
											? (t.parentNode &&
													(t.outerHTML = e.outerHTML),
											  y.html5Clone &&
													e.innerHTML &&
													!T.trim(t.innerHTML) &&
													(t.innerHTML = e.innerHTML))
											: 'input' === n && G.test(e.type)
											? ((t.defaultChecked = t.checked =
													e.checked),
											  t.value !== e.value &&
													(t.value = e.value))
											: 'option' === n
											? (t.defaultSelected = t.selected =
													e.defaultSelected)
											: ('input' !== n &&
													'textarea' !== n) ||
											  (t.defaultValue = e.defaultValue)
									}
								})(i, r[a])
					if (t)
						if (n)
							for (
								s = s || re(e), r = r || re(o), a = 0;
								null != (i = s[a]);
								a++
							)
								De(i, r[a])
						else De(e, o)
					return (
						0 < (r = re(o, 'script')).length &&
							ie(r, !u && re(e, 'script')),
						(r = s = i = null),
						o
					)
				},
				cleanData: function (e, t) {
					for (
						var n,
							r,
							i,
							o,
							a = 0,
							s = T.expando,
							u = T.cache,
							l = y.attributes,
							c = T.event.special;
						null != (n = e[a]);
						a++
					)
						if ((t || F(n)) && (o = (i = n[s]) && u[i])) {
							if (o.events)
								for (r in o.events)
									c[r]
										? T.event.remove(n, r)
										: T.removeEvent(n, r, o.handle)
							u[i] &&
								(delete u[i],
								l || void 0 === n.removeAttribute
									? (n[s] = void 0)
									: n.removeAttribute(s),
								f.push(i))
						}
				},
			}),
				T.fn.extend({
					domManip: je,
					detach: function (e) {
						return Le(this, e, !0)
					},
					remove: function (e) {
						return Le(this, e)
					},
					text: function (e) {
						return J(
							this,
							function (e) {
								return void 0 === e
									? T.text(this)
									: this.empty().append(
											(
												(this[0] &&
													this[0].ownerDocument) ||
												h
											).createTextNode(e)
									  )
							},
							null,
							e,
							arguments.length
						)
					},
					append: function () {
						return je(this, arguments, function (e) {
							;(1 !== this.nodeType &&
								11 !== this.nodeType &&
								9 !== this.nodeType) ||
								ke(this, e).appendChild(e)
						})
					},
					prepend: function () {
						return je(this, arguments, function (e) {
							var t
							;(1 !== this.nodeType &&
								11 !== this.nodeType &&
								9 !== this.nodeType) ||
								(t = ke(this, e)).insertBefore(e, t.firstChild)
						})
					},
					before: function () {
						return je(this, arguments, function (e) {
							this.parentNode &&
								this.parentNode.insertBefore(e, this)
						})
					},
					after: function () {
						return je(this, arguments, function (e) {
							this.parentNode &&
								this.parentNode.insertBefore(
									e,
									this.nextSibling
								)
						})
					},
					empty: function () {
						for (var e, t = 0; null != (e = this[t]); t++) {
							for (
								1 === e.nodeType && T.cleanData(re(e, !1));
								e.firstChild;

							)
								e.removeChild(e.firstChild)
							e.options &&
								T.nodeName(e, 'select') &&
								(e.options.length = 0)
						}
						return this
					},
					clone: function (e, t) {
						return (
							(e = null != e && e),
							(t = null == t ? e : t),
							this.map(function () {
								return T.clone(this, e, t)
							})
						)
					},
					html: function (e) {
						return J(
							this,
							function (e) {
								var t = this[0] || {},
									n = 0,
									r = this.length
								if (void 0 === e)
									return 1 === t.nodeType
										? t.innerHTML.replace(ve, '')
										: void 0
								if (
									'string' == typeof e &&
									!we.test(e) &&
									(y.htmlSerialize || !xe.test(e)) &&
									(y.leadingWhitespace || !Z.test(e)) &&
									!ne[
										(Q.exec(e) || ['', ''])[1].toLowerCase()
									]
								) {
									e = T.htmlPrefilter(e)
									try {
										for (; n < r; n++)
											1 ===
												(t = this[n] || {}).nodeType &&
												(T.cleanData(re(t, !1)),
												(t.innerHTML = e))
										t = 0
									} catch (e) {}
								}
								t && this.empty().append(e)
							},
							null,
							e,
							arguments.length
						)
					},
					replaceWith: function () {
						var n = []
						return je(
							this,
							arguments,
							function (e) {
								var t = this.parentNode
								T.inArray(this, n) < 0 &&
									(T.cleanData(re(this)),
									t && t.replaceChild(e, this))
							},
							n
						)
					},
				}),
				T.each(
					{
						appendTo: 'append',
						prependTo: 'prepend',
						insertBefore: 'before',
						insertAfter: 'after',
						replaceAll: 'replaceWith',
					},
					function (e, a) {
						T.fn[e] = function (e) {
							for (
								var t,
									n = 0,
									r = [],
									i = T(e),
									o = i.length - 1;
								n <= o;
								n++
							)
								(t = n === o ? this : this.clone(!0)),
									T(i[n])[a](t),
									s.apply(r, t.get())
							return this.pushStack(r)
						}
					}
				)
			var He,
				qe = { HTML: 'block', BODY: 'block' }
			function Me(e, t) {
				;(e = T(t.createElement(e)).appendTo(t.body)),
					(t = T.css(e[0], 'display'))
				return e.detach(), t
			}
			function _e(e) {
				var t = h,
					n = qe[e]
				return (
					n ||
						(('none' !== (n = Me(e, t)) && n) ||
							((t = (
								(He = (
									He ||
									T(
										"<iframe frameborder='0' width='0' height='0'/>"
									)
								).appendTo(t.documentElement))[0]
									.contentWindow || He[0].contentDocument
							).document).write(),
							t.close(),
							(n = Me(e, t)),
							He.detach()),
						(qe[e] = n)),
					n
				)
			}
			function Fe(e, t, n, r) {
				var i,
					o = {}
				for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i])
				for (i in ((r = n.apply(e, r || [])), t)) e.style[i] = o[i]
				return r
			}
			var Oe,
				Re,
				Pe,
				Be,
				We,
				Ie,
				$e,
				ze,
				Xe = /^margin/,
				Ue = new RegExp('^(' + X + ')(?!px)[a-z%]+$', 'i'),
				Ve = h.documentElement
			function Ye() {
				var e,
					t = h.documentElement
				t.appendChild($e),
					(ze.style.cssText =
						'-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
					(Oe = Pe = Ie = !1),
					(Re = We = !0),
					w.getComputedStyle &&
						((e = w.getComputedStyle(ze)),
						(Oe = '1%' !== (e || {}).top),
						(Ie = '2px' === (e || {}).marginLeft),
						(Pe = '4px' === (e || { width: '4px' }).width),
						(ze.style.marginRight = '50%'),
						(Re =
							'4px' ===
							(e || { marginRight: '4px' }).marginRight),
						((e = ze.appendChild(
							h.createElement('div')
						)).style.cssText = ze.style.cssText =
							'-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
						(e.style.marginRight = e.style.width = '0'),
						(ze.style.width = '1px'),
						(We = !parseFloat(
							(w.getComputedStyle(e) || {}).marginRight
						)),
						ze.removeChild(e)),
					(ze.style.display = 'none'),
					(Be = 0 === ze.getClientRects().length) &&
						((ze.style.display = ''),
						(ze.innerHTML =
							'<table><tr><td></td><td>t</td></tr></table>'),
						((e = ze.getElementsByTagName('td'))[0].style.cssText =
							'margin:0;border:0;padding:0;display:none'),
						(Be = 0 === e[0].offsetHeight) &&
							((e[0].style.display = ''),
							(e[1].style.display = 'none'),
							(Be = 0 === e[0].offsetHeight))),
					t.removeChild($e)
			}
			;($e = h.createElement('div')),
				(ze = h.createElement('div')).style &&
					((ze.style.cssText = 'float:left;opacity:.5'),
					(y.opacity = '0.5' === ze.style.opacity),
					(y.cssFloat = !!ze.style.cssFloat),
					(ze.style.backgroundClip = 'content-box'),
					(ze.cloneNode(!0).style.backgroundClip = ''),
					(y.clearCloneStyle =
						'content-box' === ze.style.backgroundClip),
					(($e = h.createElement('div')).style.cssText =
						'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
					(ze.innerHTML = ''),
					$e.appendChild(ze),
					(y.boxSizing =
						'' === ze.style.boxSizing ||
						'' === ze.style.MozBoxSizing ||
						'' === ze.style.WebkitBoxSizing),
					T.extend(y, {
						reliableHiddenOffsets: function () {
							return null == Oe && Ye(), Be
						},
						boxSizingReliable: function () {
							return null == Oe && Ye(), Pe
						},
						pixelMarginRight: function () {
							return null == Oe && Ye(), Re
						},
						pixelPosition: function () {
							return null == Oe && Ye(), Oe
						},
						reliableMarginRight: function () {
							return null == Oe && Ye(), We
						},
						reliableMarginLeft: function () {
							return null == Oe && Ye(), Ie
						},
					}))
			var Je,
				Ge,
				Qe = /^(top|right|bottom|left)$/
			function Ke(e, t) {
				return {
					get: function () {
						if (!e()) return (this.get = t).apply(this, arguments)
						delete this.get
					},
				}
			}
			w.getComputedStyle
				? ((Je = function (e) {
						var t = e.ownerDocument.defaultView
						return (t = !t || !t.opener ? w : t).getComputedStyle(e)
				  }),
				  (Ge = function (e, t, n) {
						var r,
							i,
							o = e.style
						return (
							('' !==
								(i = (n = n || Je(e))
									? n.getPropertyValue(t) || n[t]
									: void 0) &&
								void 0 !== i) ||
								T.contains(e.ownerDocument, e) ||
								(i = T.style(e, t)),
							n &&
								!y.pixelMarginRight() &&
								Ue.test(i) &&
								Xe.test(t) &&
								((r = o.width),
								(e = o.minWidth),
								(t = o.maxWidth),
								(o.minWidth = o.maxWidth = o.width = i),
								(i = n.width),
								(o.width = r),
								(o.minWidth = e),
								(o.maxWidth = t)),
							void 0 === i ? i : i + ''
						)
				  }))
				: Ve.currentStyle &&
				  ((Je = function (e) {
						return e.currentStyle
				  }),
				  (Ge = function (e, t, n) {
						var r,
							i,
							o,
							a = e.style
						return (
							null == (o = (n = n || Je(e)) ? n[t] : void 0) &&
								a &&
								a[t] &&
								(o = a[t]),
							Ue.test(o) &&
								!Qe.test(t) &&
								((r = a.left),
								(n = (i = e.runtimeStyle) && i.left) &&
									(i.left = e.currentStyle.left),
								(a.left = 'fontSize' === t ? '1em' : o),
								(o = a.pixelLeft + 'px'),
								(a.left = r),
								n && (i.left = n)),
							void 0 === o ? o : o + '' || 'auto'
						)
				  }))
			var Ze = /alpha\([^)]*\)/i,
				et = /opacity\s*=\s*([^)]*)/i,
				tt = /^(none|table(?!-c[ea]).+)/,
				nt = new RegExp('^(' + X + ')(.*)$', 'i'),
				rt = {
					position: 'absolute',
					visibility: 'hidden',
					display: 'block',
				},
				it = { letterSpacing: '0', fontWeight: '400' },
				ot = ['Webkit', 'O', 'Moz', 'ms'],
				at = h.createElement('div').style
			function st(e) {
				if (e in at) return e
				for (
					var t = e.charAt(0).toUpperCase() + e.slice(1),
						n = ot.length;
					n--;

				)
					if ((e = ot[n] + t) in at) return e
			}
			function ut(e, t) {
				for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
					(r = e[a]).style &&
						((o[a] = T._data(r, 'olddisplay')),
						(n = r.style.display),
						t
							? (o[a] || 'none' !== n || (r.style.display = ''),
							  '' === r.style.display &&
									z(r) &&
									(o[a] = T._data(
										r,
										'olddisplay',
										_e(r.nodeName)
									)))
							: ((i = z(r)),
							  ((n && 'none' !== n) || !i) &&
									T._data(
										r,
										'olddisplay',
										i ? n : T.css(r, 'display')
									)))
				for (a = 0; a < s; a++)
					(r = e[a]).style &&
						((t &&
							'none' !== r.style.display &&
							'' !== r.style.display) ||
							(r.style.display = t ? o[a] || '' : 'none'))
				return e
			}
			function lt(e, t, n) {
				var r = nt.exec(t)
				return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t
			}
			function ct(e, t, n, r, i) {
				for (
					var o =
							n === (r ? 'border' : 'content')
								? 4
								: 'width' === t
								? 1
								: 0,
						a = 0;
					o < 4;
					o += 2
				)
					'margin' === n && (a += T.css(e, n + V[o], !0, i)),
						r
							? ('content' === n &&
									(a -= T.css(e, 'padding' + V[o], !0, i)),
							  'margin' !== n &&
									(a -= T.css(
										e,
										'border' + V[o] + 'Width',
										!0,
										i
									)))
							: ((a += T.css(e, 'padding' + V[o], !0, i)),
							  'padding' !== n &&
									(a += T.css(
										e,
										'border' + V[o] + 'Width',
										!0,
										i
									)))
				return a
			}
			function ft(e, t, n) {
				var r = !0,
					i = 'width' === t ? e.offsetWidth : e.offsetHeight,
					o = Je(e),
					a =
						y.boxSizing &&
						'border-box' === T.css(e, 'boxSizing', !1, o)
				if (
					(i =
						h.msFullscreenElement &&
						w.top !== w &&
						e.getClientRects().length
							? Math.round(100 * e.getBoundingClientRect()[t])
							: i) <= 0 ||
					null == i
				) {
					if (
						(((i = Ge(e, t, o)) < 0 || null == i) &&
							(i = e.style[t]),
						Ue.test(i))
					)
						return i
					;(r = a && (y.boxSizingReliable() || i === e.style[t])),
						(i = parseFloat(i) || 0)
				}
				return (
					i + ct(e, t, n || (a ? 'border' : 'content'), r, o) + 'px'
				)
			}
			function dt(e, t, n, r, i) {
				return new dt.prototype.init(e, t, n, r, i)
			}
			T.extend({
				cssHooks: {
					opacity: {
						get: function (e, t) {
							if (t) {
								e = Ge(e, 'opacity')
								return '' === e ? '1' : e
							}
						},
					},
				},
				cssNumber: {
					animationIterationCount: !0,
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0,
				},
				cssProps: { float: y.cssFloat ? 'cssFloat' : 'styleFloat' },
				style: function (e, t, n, r) {
					if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var i,
							o,
							a,
							s = T.camelCase(t),
							u = e.style
						if (
							((t =
								T.cssProps[s] || (T.cssProps[s] = st(s) || s)),
							(a = T.cssHooks[t] || T.cssHooks[s]),
							void 0 === n)
						)
							return a &&
								'get' in a &&
								void 0 !== (i = a.get(e, !1, r))
								? i
								: u[t]
						if (
							('string' === (o = typeof n) &&
								(i = U.exec(n)) &&
								i[1] &&
								((n = Y(e, t, i)), (o = 'number')),
							null != n &&
								n == n &&
								('number' === o &&
									(n +=
										(i && i[3]) ||
										(T.cssNumber[s] ? '' : 'px')),
								y.clearCloneStyle ||
									'' !== n ||
									0 !== t.indexOf('background') ||
									(u[t] = 'inherit'),
								!(
									a &&
									'set' in a &&
									void 0 === (n = a.set(e, n, r))
								)))
						)
							try {
								u[t] = n
							} catch (e) {}
					}
				},
				css: function (e, t, n, r) {
					var i,
						o = T.camelCase(t)
					return (
						(t = T.cssProps[o] || (T.cssProps[o] = st(o) || o)),
						'normal' ===
							(i =
								void 0 ===
								(i =
									(o = T.cssHooks[t] || T.cssHooks[o]) &&
									'get' in o
										? o.get(e, !0, n)
										: i)
									? Ge(e, t, r)
									: i) &&
							t in it &&
							(i = it[t]),
						'' === n || n
							? ((t = parseFloat(i)),
							  !0 === n || isFinite(t) ? t || 0 : i)
							: i
					)
				},
			}),
				T.each(['height', 'width'], function (e, i) {
					T.cssHooks[i] = {
						get: function (e, t, n) {
							if (t)
								return tt.test(T.css(e, 'display')) &&
									0 === e.offsetWidth
									? Fe(e, rt, function () {
											return ft(e, i, n)
									  })
									: ft(e, i, n)
						},
						set: function (e, t, n) {
							var r = n && Je(e)
							return lt(
								0,
								t,
								n
									? ct(
											e,
											i,
											n,
											y.boxSizing &&
												'border-box' ===
													T.css(
														e,
														'boxSizing',
														!1,
														r
													),
											r
									  )
									: 0
							)
						},
					}
				}),
				y.opacity ||
					(T.cssHooks.opacity = {
						get: function (e, t) {
							return et.test(
								(t && e.currentStyle ? e.currentStyle : e.style)
									.filter || ''
							)
								? 0.01 * parseFloat(RegExp.$1) + ''
								: t
								? '1'
								: ''
						},
						set: function (e, t) {
							var n = e.style,
								r = e.currentStyle,
								i = T.isNumeric(t)
									? 'alpha(opacity=' + 100 * t + ')'
									: '',
								e = (r && r.filter) || n.filter || ''
							;(((n.zoom = 1) <= t || '' === t) &&
								'' === T.trim(e.replace(Ze, '')) &&
								n.removeAttribute &&
								(n.removeAttribute('filter'),
								'' === t || (r && !r.filter))) ||
								(n.filter = Ze.test(e)
									? e.replace(Ze, i)
									: e + ' ' + i)
						},
					}),
				(T.cssHooks.marginRight = Ke(
					y.reliableMarginRight,
					function (e, t) {
						if (t)
							return Fe(e, { display: 'inline-block' }, Ge, [
								e,
								'marginRight',
							])
					}
				)),
				(T.cssHooks.marginLeft = Ke(
					y.reliableMarginLeft,
					function (e, t) {
						if (t)
							return (
								(parseFloat(Ge(e, 'marginLeft')) ||
									(T.contains(e.ownerDocument, e)
										? e.getBoundingClientRect().left -
										  Fe(e, { marginLeft: 0 }, function () {
												return e.getBoundingClientRect().left
										  })
										: 0)) + 'px'
							)
					}
				)),
				T.each(
					{ margin: '', padding: '', border: 'Width' },
					function (i, o) {
						;(T.cssHooks[i + o] = {
							expand: function (e) {
								for (
									var t = 0,
										n = {},
										r =
											'string' == typeof e
												? e.split(' ')
												: [e];
									t < 4;
									t++
								)
									n[i + V[t] + o] = r[t] || r[t - 2] || r[0]
								return n
							},
						}),
							Xe.test(i) || (T.cssHooks[i + o].set = lt)
					}
				),
				T.fn.extend({
					css: function (e, t) {
						return J(
							this,
							function (e, t, n) {
								var r,
									i,
									o = {},
									a = 0
								if (T.isArray(t)) {
									for (r = Je(e), i = t.length; a < i; a++)
										o[t[a]] = T.css(e, t[a], !1, r)
									return o
								}
								return void 0 !== n
									? T.style(e, t, n)
									: T.css(e, t)
							},
							e,
							t,
							1 < arguments.length
						)
					},
					show: function () {
						return ut(this, !0)
					},
					hide: function () {
						return ut(this)
					},
					toggle: function (e) {
						return 'boolean' == typeof e
							? e
								? this.show()
								: this.hide()
							: this.each(function () {
									z(this) ? T(this).show() : T(this).hide()
							  })
					},
				}),
				((T.Tween = dt).prototype = {
					constructor: dt,
					init: function (e, t, n, r, i, o) {
						;(this.elem = e),
							(this.prop = n),
							(this.easing = i || T.easing._default),
							(this.options = t),
							(this.start = this.now = this.cur()),
							(this.end = r),
							(this.unit = o || (T.cssNumber[n] ? '' : 'px'))
					},
					cur: function () {
						var e = dt.propHooks[this.prop]
						return (e && e.get ? e : dt.propHooks._default).get(
							this
						)
					},
					run: function (e) {
						var t,
							n = dt.propHooks[this.prop]
						return (
							this.options.duration
								? (this.pos = t = T.easing[this.easing](
										e,
										this.options.duration * e,
										0,
										1,
										this.options.duration
								  ))
								: (this.pos = t = e),
							(this.now =
								(this.end - this.start) * t + this.start),
							this.options.step &&
								this.options.step.call(
									this.elem,
									this.now,
									this
								),
							(n && n.set ? n : dt.propHooks._default).set(this),
							this
						)
					},
				}),
				(dt.prototype.init.prototype = dt.prototype),
				(dt.propHooks = {
					_default: {
						get: function (e) {
							return 1 !== e.elem.nodeType ||
								(null != e.elem[e.prop] &&
									null == e.elem.style[e.prop])
								? e.elem[e.prop]
								: (e = T.css(e.elem, e.prop, '')) &&
								  'auto' !== e
								? e
								: 0
						},
						set: function (e) {
							T.fx.step[e.prop]
								? T.fx.step[e.prop](e)
								: 1 !== e.elem.nodeType ||
								  (null == e.elem.style[T.cssProps[e.prop]] &&
										!T.cssHooks[e.prop])
								? (e.elem[e.prop] = e.now)
								: T.style(e.elem, e.prop, e.now + e.unit)
						},
					},
				}),
				(dt.propHooks.scrollTop = dt.propHooks.scrollLeft = {
					set: function (e) {
						e.elem.nodeType &&
							e.elem.parentNode &&
							(e.elem[e.prop] = e.now)
					},
				}),
				(T.easing = {
					linear: function (e) {
						return e
					},
					swing: function (e) {
						return 0.5 - Math.cos(e * Math.PI) / 2
					},
					_default: 'swing',
				}),
				(T.fx = dt.prototype.init),
				(T.fx.step = {})
			var pt,
				ht,
				mt,
				gt,
				yt = /^(?:toggle|show|hide)$/,
				vt = /queueHooks$/
			function xt() {
				return (
					w.setTimeout(function () {
						pt = void 0
					}),
					(pt = T.now())
				)
			}
			function bt(e, t) {
				var n,
					r = { height: e },
					i = 0
				for (t = t ? 1 : 0; i < 4; i += 2 - t)
					r['margin' + (n = V[i])] = r['padding' + n] = e
				return t && (r.opacity = r.width = e), r
			}
			function wt(e, t, n) {
				for (
					var r,
						i = (Tt.tweeners[t] || []).concat(Tt.tweeners['*']),
						o = 0,
						a = i.length;
					o < a;
					o++
				)
					if ((r = i[o].call(n, t, e))) return r
			}
			function Tt(i, e, t) {
				var n,
					o,
					r = 0,
					a = Tt.prefilters.length,
					s = T.Deferred().always(function () {
						delete u.elem
					}),
					u = function () {
						if (o) return !1
						for (
							var e = pt || xt(),
								e = Math.max(0, l.startTime + l.duration - e),
								t = 1 - (e / l.duration || 0),
								n = 0,
								r = l.tweens.length;
							n < r;
							n++
						)
							l.tweens[n].run(t)
						return (
							s.notifyWith(i, [l, t, e]),
							t < 1 && r ? e : (s.resolveWith(i, [l]), !1)
						)
					},
					l = s.promise({
						elem: i,
						props: T.extend({}, e),
						opts: T.extend(
							!0,
							{ specialEasing: {}, easing: T.easing._default },
							t
						),
						originalProperties: e,
						originalOptions: t,
						startTime: pt || xt(),
						duration: t.duration,
						tweens: [],
						createTween: function (e, t) {
							e = T.Tween(
								i,
								l.opts,
								e,
								t,
								l.opts.specialEasing[e] || l.opts.easing
							)
							return l.tweens.push(e), e
						},
						stop: function (e) {
							var t = 0,
								n = e ? l.tweens.length : 0
							if (o) return this
							for (o = !0; t < n; t++) l.tweens[t].run(1)
							return (
								e
									? (s.notifyWith(i, [l, 1, 0]),
									  s.resolveWith(i, [l, e]))
									: s.rejectWith(i, [l, e]),
								this
							)
						},
					}),
					c = l.props
				for (
					!(function (e, t) {
						var n, r, i, o, a
						for (n in e)
							if (
								((i = t[(r = T.camelCase(n))]),
								(o = e[n]),
								T.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
								n !== r && ((e[r] = o), delete e[n]),
								(a = T.cssHooks[r]) && ('expand' in a))
							)
								for (n in ((o = a.expand(o)), delete e[r], o))
									(n in e) || ((e[n] = o[n]), (t[n] = i))
							else t[r] = i
					})(c, l.opts.specialEasing);
					r < a;
					r++
				)
					if ((n = Tt.prefilters[r].call(l, i, c, l.opts)))
						return (
							T.isFunction(n.stop) &&
								(T._queueHooks(
									l.elem,
									l.opts.queue
								).stop = T.proxy(n.stop, n)),
							n
						)
				return (
					T.map(c, wt, l),
					T.isFunction(l.opts.start) && l.opts.start.call(i, l),
					T.fx.timer(
						T.extend(u, { elem: i, anim: l, queue: l.opts.queue })
					),
					l
						.progress(l.opts.progress)
						.done(l.opts.done, l.opts.complete)
						.fail(l.opts.fail)
						.always(l.opts.always)
				)
			}
			;(T.Animation = T.extend(Tt, {
				tweeners: {
					'*': [
						function (e, t) {
							var n = this.createTween(e, t)
							return Y(n.elem, e, U.exec(t), n), n
						},
					],
				},
				tweener: function (e, t) {
					for (
						var n,
							r = 0,
							i = (e = T.isFunction(e)
								? ((t = e), ['*'])
								: e.match(q)).length;
						r < i;
						r++
					)
						(n = e[r]),
							(Tt.tweeners[n] = Tt.tweeners[n] || []),
							Tt.tweeners[n].unshift(t)
				},
				prefilters: [
					function (t, e, n) {
						var r,
							i,
							o,
							a,
							s,
							u,
							l,
							c = this,
							f = {},
							d = t.style,
							p = t.nodeType && z(t),
							h = T._data(t, 'fxshow')
						for (r in (n.queue ||
							(null == (s = T._queueHooks(t, 'fx')).unqueued &&
								((s.unqueued = 0),
								(u = s.empty.fire),
								(s.empty.fire = function () {
									s.unqueued || u()
								})),
							s.unqueued++,
							c.always(function () {
								c.always(function () {
									s.unqueued--,
										T.queue(t, 'fx').length ||
											s.empty.fire()
								})
							})),
						1 === t.nodeType &&
							('height' in e || 'width' in e) &&
							((n.overflow = [
								d.overflow,
								d.overflowX,
								d.overflowY,
							]),
							'inline' ===
								('none' === (l = T.css(t, 'display'))
									? T._data(t, 'olddisplay') || _e(t.nodeName)
									: l) &&
								'none' === T.css(t, 'float') &&
								(y.inlineBlockNeedsLayout &&
								'inline' !== _e(t.nodeName)
									? (d.zoom = 1)
									: (d.display = 'inline-block'))),
						n.overflow &&
							((d.overflow = 'hidden'),
							y.shrinkWrapBlocks() ||
								c.always(function () {
									;(d.overflow = n.overflow[0]),
										(d.overflowX = n.overflow[1]),
										(d.overflowY = n.overflow[2])
								})),
						e))
							if (((i = e[r]), yt.exec(i))) {
								if (
									(delete e[r],
									(o = o || 'toggle' === i),
									i === (p ? 'hide' : 'show'))
								) {
									if ('show' !== i || !h || void 0 === h[r])
										continue
									p = !0
								}
								f[r] = (h && h[r]) || T.style(t, r)
							} else l = void 0
						if (T.isEmptyObject(f))
							'inline' === ('none' === l ? _e(t.nodeName) : l) &&
								(d.display = l)
						else
							for (r in (h
								? 'hidden' in h && (p = h.hidden)
								: (h = T._data(t, 'fxshow', {})),
							o && (h.hidden = !p),
							p
								? T(t).show()
								: c.done(function () {
										T(t).hide()
								  }),
							c.done(function () {
								for (var e in (T._removeData(t, 'fxshow'), f))
									T.style(t, e, f[e])
							}),
							f))
								(a = wt(p ? h[r] : 0, r, c)),
									r in h ||
										((h[r] = a.start),
										p &&
											((a.end = a.start),
											(a.start =
												'width' === r || 'height' === r
													? 1
													: 0)))
					},
				],
				prefilter: function (e, t) {
					t ? Tt.prefilters.unshift(e) : Tt.prefilters.push(e)
				},
			})),
				(T.speed = function (e, t, n) {
					var r =
						e && 'object' == typeof e
							? T.extend({}, e)
							: {
									complete:
										n ||
										(!n && t) ||
										(T.isFunction(e) && e),
									duration: e,
									easing:
										(n && t) ||
										(t && !T.isFunction(t) && t),
							  }
					return (
						(r.duration = T.fx.off
							? 0
							: 'number' == typeof r.duration
							? r.duration
							: r.duration in T.fx.speeds
							? T.fx.speeds[r.duration]
							: T.fx.speeds._default),
						(null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
						(r.old = r.complete),
						(r.complete = function () {
							T.isFunction(r.old) && r.old.call(this),
								r.queue && T.dequeue(this, r.queue)
						}),
						r
					)
				}),
				T.fn.extend({
					fadeTo: function (e, t, n, r) {
						return this.filter(z)
							.css('opacity', 0)
							.show()
							.end()
							.animate({ opacity: t }, e, n, r)
					},
					animate: function (t, e, n, r) {
						var i = T.isEmptyObject(t),
							o = T.speed(e, n, r),
							r = function () {
								var e = Tt(this, T.extend({}, t), o)
								;(i || T._data(this, 'finish')) && e.stop(!0)
							}
						return (
							(r.finish = r),
							i || !1 === o.queue
								? this.each(r)
								: this.queue(o.queue, r)
						)
					},
					stop: function (i, e, o) {
						function a(e) {
							var t = e.stop
							delete e.stop, t(o)
						}
						return (
							'string' != typeof i &&
								((o = e), (e = i), (i = void 0)),
							e && !1 !== i && this.queue(i || 'fx', []),
							this.each(function () {
								var e = !0,
									t = null != i && i + 'queueHooks',
									n = T.timers,
									r = T._data(this)
								if (t) r[t] && r[t].stop && a(r[t])
								else
									for (t in r)
										r[t] &&
											r[t].stop &&
											vt.test(t) &&
											a(r[t])
								for (t = n.length; t--; )
									n[t].elem !== this ||
										(null != i && n[t].queue !== i) ||
										(n[t].anim.stop(o),
										(e = !1),
										n.splice(t, 1))
								;(!e && o) || T.dequeue(this, i)
							})
						)
					},
					finish: function (a) {
						return (
							!1 !== a && (a = a || 'fx'),
							this.each(function () {
								var e,
									t = T._data(this),
									n = t[a + 'queue'],
									r = t[a + 'queueHooks'],
									i = T.timers,
									o = n ? n.length : 0
								for (
									t.finish = !0,
										T.queue(this, a, []),
										r && r.stop && r.stop.call(this, !0),
										e = i.length;
									e--;

								)
									i[e].elem === this &&
										i[e].queue === a &&
										(i[e].anim.stop(!0), i.splice(e, 1))
								for (e = 0; e < o; e++)
									n[e] &&
										n[e].finish &&
										n[e].finish.call(this)
								delete t.finish
							})
						)
					},
				}),
				T.each(['toggle', 'show', 'hide'], function (e, r) {
					var i = T.fn[r]
					T.fn[r] = function (e, t, n) {
						return null == e || 'boolean' == typeof e
							? i.apply(this, arguments)
							: this.animate(bt(r, !0), e, t, n)
					}
				}),
				T.each(
					{
						slideDown: bt('show'),
						slideUp: bt('hide'),
						slideToggle: bt('toggle'),
						fadeIn: { opacity: 'show' },
						fadeOut: { opacity: 'hide' },
						fadeToggle: { opacity: 'toggle' },
					},
					function (e, r) {
						T.fn[e] = function (e, t, n) {
							return this.animate(r, e, t, n)
						}
					}
				),
				(T.timers = []),
				(T.fx.tick = function () {
					var e,
						t = T.timers,
						n = 0
					for (pt = T.now(); n < t.length; n++)
						(e = t[n])() || t[n] !== e || t.splice(n--, 1)
					t.length || T.fx.stop(), (pt = void 0)
				}),
				(T.fx.timer = function (e) {
					T.timers.push(e), e() ? T.fx.start() : T.timers.pop()
				}),
				(T.fx.interval = 13),
				(T.fx.start = function () {
					ht = ht || w.setInterval(T.fx.tick, T.fx.interval)
				}),
				(T.fx.stop = function () {
					w.clearInterval(ht), (ht = null)
				}),
				(T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
				(T.fn.delay = function (r, e) {
					return (
						(r = (T.fx && T.fx.speeds[r]) || r),
						this.queue((e = e || 'fx'), function (e, t) {
							var n = w.setTimeout(e, r)
							t.stop = function () {
								w.clearTimeout(n)
							}
						})
					)
				}),
				(p = h.createElement('input')),
				(mt = h.createElement('div')),
				(o = h.createElement('select')),
				(gt = o.appendChild(h.createElement('option'))),
				(mt = h.createElement('div')).setAttribute('className', 't'),
				(mt.innerHTML =
					"  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
				(X = mt.getElementsByTagName('a')[0]),
				p.setAttribute('type', 'checkbox'),
				mt.appendChild(p),
				((X = mt.getElementsByTagName('a')[0]).style.cssText =
					'top:1px'),
				(y.getSetAttribute = 't' !== mt.className),
				(y.style = /top/.test(X.getAttribute('style'))),
				(y.hrefNormalized = '/a' === X.getAttribute('href')),
				(y.checkOn = !!p.value),
				(y.optSelected = gt.selected),
				(y.enctype = !!h.createElement('form').enctype),
				(o.disabled = !0),
				(y.optDisabled = !gt.disabled),
				(p = h.createElement('input')).setAttribute('value', ''),
				(y.input = '' === p.getAttribute('value')),
				(p.value = 't'),
				p.setAttribute('type', 'radio'),
				(y.radioValue = 't' === p.value)
			var Ct = /\r/g
			T.fn.extend({
				val: function (t) {
					var n,
						e,
						r,
						i = this[0]
					return arguments.length
						? ((r = T.isFunction(t)),
						  this.each(function (e) {
								1 === this.nodeType &&
									(null ==
									(e = r ? t.call(this, e, T(this).val()) : t)
										? (e = '')
										: 'number' == typeof e
										? (e += '')
										: T.isArray(e) &&
										  (e = T.map(e, function (e) {
												return null == e ? '' : e + ''
										  })),
									((n =
										T.valHooks[this.type] ||
										T.valHooks[
											this.nodeName.toLowerCase()
										]) &&
										'set' in n &&
										void 0 !== n.set(this, e, 'value')) ||
										(this.value = e))
						  }))
						: i
						? (n =
								T.valHooks[i.type] ||
								T.valHooks[i.nodeName.toLowerCase()]) &&
						  'get' in n &&
						  void 0 !== (e = n.get(i, 'value'))
							? e
							: 'string' == typeof (e = i.value)
							? e.replace(Ct, '')
							: null == e
							? ''
							: e
						: void 0
				},
			}),
				T.extend({
					valHooks: {
						option: {
							get: function (e) {
								var t = T.find.attr(e, 'value')
								return null != t ? t : T.trim(T.text(e))
							},
						},
						select: {
							get: function (e) {
								for (
									var t,
										n = e.options,
										r = e.selectedIndex,
										i = 'select-one' === e.type || r < 0,
										o = i ? null : [],
										a = i ? r + 1 : n.length,
										s = r < 0 ? a : i ? r : 0;
									s < a;
									s++
								)
									if (
										((t = n[s]).selected || s === r) &&
										(y.optDisabled
											? !t.disabled
											: null ===
											  t.getAttribute('disabled')) &&
										(!t.parentNode.disabled ||
											!T.nodeName(
												t.parentNode,
												'optgroup'
											))
									) {
										if (((t = T(t).val()), i)) return t
										o.push(t)
									}
								return o
							},
							set: function (e, t) {
								for (
									var n,
										r,
										i = e.options,
										o = T.makeArray(t),
										a = i.length;
									a--;

								)
									if (
										((r = i[a]),
										0 <=
											T.inArray(
												T.valHooks.option.get(r),
												o
											))
									)
										try {
											r.selected = n = !0
										} catch (e) {
											r.scrollHeight
										}
									else r.selected = !1
								return n || (e.selectedIndex = -1), i
							},
						},
					},
				}),
				T.each(['radio', 'checkbox'], function () {
					;(T.valHooks[this] = {
						set: function (e, t) {
							if (T.isArray(t))
								return (e.checked =
									-1 < T.inArray(T(e).val(), t))
						},
					}),
						y.checkOn ||
							(T.valHooks[this].get = function (e) {
								return null === e.getAttribute('value')
									? 'on'
									: e.value
							})
				})
			var Et,
				Nt,
				kt = T.expr.attrHandle,
				St = /^(?:checked|selected)$/i,
				At = y.getSetAttribute,
				Dt = y.input
			T.fn.extend({
				attr: function (e, t) {
					return J(this, T.attr, e, t, 1 < arguments.length)
				},
				removeAttr: function (e) {
					return this.each(function () {
						T.removeAttr(this, e)
					})
				},
			}),
				T.extend({
					attr: function (e, t, n) {
						var r,
							i,
							o = e.nodeType
						if (3 !== o && 8 !== o && 2 !== o)
							return void 0 === e.getAttribute
								? T.prop(e, t, n)
								: ((1 === o && T.isXMLDoc(e)) ||
										((t = t.toLowerCase()),
										(i =
											T.attrHooks[t] ||
											(T.expr.match.bool.test(t)
												? Nt
												: Et))),
								  void 0 !== n
										? null === n
											? void T.removeAttr(e, t)
											: i &&
											  'set' in i &&
											  void 0 !== (r = i.set(e, n, t))
											? r
											: (e.setAttribute(t, n + ''), n)
										: !(
												i &&
												'get' in i &&
												null !== (r = i.get(e, t))
										  ) && null == (r = T.find.attr(e, t))
										? void 0
										: r)
					},
					attrHooks: {
						type: {
							set: function (e, t) {
								if (
									!y.radioValue &&
									'radio' === t &&
									T.nodeName(e, 'input')
								) {
									var n = e.value
									return (
										e.setAttribute('type', t),
										n && (e.value = n),
										t
									)
								}
							},
						},
					},
					removeAttr: function (e, t) {
						var n,
							r,
							i = 0,
							o = t && t.match(q)
						if (o && 1 === e.nodeType)
							for (; (n = o[i++]); )
								(r = T.propFix[n] || n),
									T.expr.match.bool.test(n)
										? (Dt && At) || !St.test(n)
											? (e[r] = !1)
											: (e[
													T.camelCase('default-' + n)
											  ] = e[r] = !1)
										: T.attr(e, n, ''),
									e.removeAttribute(At ? n : r)
					},
				}),
				(Nt = {
					set: function (e, t, n) {
						return (
							!1 === t
								? T.removeAttr(e, n)
								: (Dt && At) || !St.test(n)
								? e.setAttribute((!At && T.propFix[n]) || n, n)
								: (e[T.camelCase('default-' + n)] = e[n] = !0),
							n
						)
					},
				}),
				T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
					var o = kt[t] || T.find.attr
					;(Dt && At) || !St.test(t)
						? (kt[t] = function (e, t, n) {
								var r, i
								return (
									n ||
										((i = kt[t]),
										(kt[t] = r),
										(r =
											null != o(e, t, n)
												? t.toLowerCase()
												: null),
										(kt[t] = i)),
									r
								)
						  })
						: (kt[t] = function (e, t, n) {
								if (!n)
									return e[T.camelCase('default-' + t)]
										? t.toLowerCase()
										: null
						  })
				}),
				(Dt && At) ||
					(T.attrHooks.value = {
						set: function (e, t, n) {
							if (!T.nodeName(e, 'input'))
								return Et && Et.set(e, t, n)
							e.defaultValue = t
						},
					}),
				At ||
					((Et = {
						set: function (e, t, n) {
							var r = e.getAttributeNode(n)
							if (
								(r ||
									e.setAttributeNode(
										(r = e.ownerDocument.createAttribute(n))
									),
								(r.value = t += ''),
								'value' === n || t === e.getAttribute(n))
							)
								return t
						},
					}),
					(kt.id = kt.name = kt.coords = function (e, t, n) {
						if (!n)
							return (t = e.getAttributeNode(t)) && '' !== t.value
								? t.value
								: null
					}),
					(T.valHooks.button = {
						get: function (e, t) {
							t = e.getAttributeNode(t)
							if (t && t.specified) return t.value
						},
						set: Et.set,
					}),
					(T.attrHooks.contenteditable = {
						set: function (e, t, n) {
							Et.set(e, '' !== t && t, n)
						},
					}),
					T.each(['width', 'height'], function (e, n) {
						T.attrHooks[n] = {
							set: function (e, t) {
								if ('' === t)
									return e.setAttribute(n, 'auto'), t
							},
						}
					})),
				y.style ||
					(T.attrHooks.style = {
						get: function (e) {
							return e.style.cssText || void 0
						},
						set: function (e, t) {
							return (e.style.cssText = t + '')
						},
					})
			var jt = /^(?:input|select|textarea|button|object)$/i,
				Lt = /^(?:a|area)$/i
			T.fn.extend({
				prop: function (e, t) {
					return J(this, T.prop, e, t, 1 < arguments.length)
				},
				removeProp: function (e) {
					return (
						(e = T.propFix[e] || e),
						this.each(function () {
							try {
								;(this[e] = void 0), delete this[e]
							} catch (e) {}
						})
					)
				},
			}),
				T.extend({
					prop: function (e, t, n) {
						var r,
							i,
							o = e.nodeType
						if (3 !== o && 8 !== o && 2 !== o)
							return (
								(1 === o && T.isXMLDoc(e)) ||
									((t = T.propFix[t] || t),
									(i = T.propHooks[t])),
								void 0 !== n
									? i &&
									  'set' in i &&
									  void 0 !== (r = i.set(e, n, t))
										? r
										: (e[t] = n)
									: i &&
									  'get' in i &&
									  null !== (r = i.get(e, t))
									? r
									: e[t]
							)
					},
					propHooks: {
						tabIndex: {
							get: function (e) {
								var t = T.find.attr(e, 'tabindex')
								return t
									? parseInt(t, 10)
									: jt.test(e.nodeName) ||
									  (Lt.test(e.nodeName) && e.href)
									? 0
									: -1
							},
						},
					},
					propFix: { for: 'htmlFor', class: 'className' },
				}),
				y.hrefNormalized ||
					T.each(['href', 'src'], function (e, t) {
						T.propHooks[t] = {
							get: function (e) {
								return e.getAttribute(t, 4)
							},
						}
					}),
				y.optSelected ||
					(T.propHooks.selected = {
						get: function (e) {
							e = e.parentNode
							return (
								e &&
									(e.selectedIndex,
									e.parentNode && e.parentNode.selectedIndex),
								null
							)
						},
					}),
				T.each(
					[
						'tabIndex',
						'readOnly',
						'maxLength',
						'cellSpacing',
						'cellPadding',
						'rowSpan',
						'colSpan',
						'useMap',
						'frameBorder',
						'contentEditable',
					],
					function () {
						T.propFix[this.toLowerCase()] = this
					}
				),
				y.enctype || (T.propFix.enctype = 'encoding')
			var Ht = /[\t\r\n\f]/g
			function qt(e) {
				return T.attr(e, 'class') || ''
			}
			T.fn.extend({
				addClass: function (t) {
					var e,
						n,
						r,
						i,
						o,
						a,
						s = 0
					if (T.isFunction(t))
						return this.each(function (e) {
							T(this).addClass(t.call(this, e, qt(this)))
						})
					if ('string' == typeof t && t)
						for (e = t.match(q) || []; (n = this[s++]); )
							if (
								((a = qt(n)),
								(r =
									1 === n.nodeType &&
									(' ' + a + ' ').replace(Ht, ' ')))
							) {
								for (o = 0; (i = e[o++]); )
									r.indexOf(' ' + i + ' ') < 0 &&
										(r += i + ' ')
								a !== (a = T.trim(r)) && T.attr(n, 'class', a)
							}
					return this
				},
				removeClass: function (t) {
					var e,
						n,
						r,
						i,
						o,
						a,
						s = 0
					if (T.isFunction(t))
						return this.each(function (e) {
							T(this).removeClass(t.call(this, e, qt(this)))
						})
					if (!arguments.length) return this.attr('class', '')
					if ('string' == typeof t && t)
						for (e = t.match(q) || []; (n = this[s++]); )
							if (
								((a = qt(n)),
								(r =
									1 === n.nodeType &&
									(' ' + a + ' ').replace(Ht, ' ')))
							) {
								for (o = 0; (i = e[o++]); )
									for (; -1 < r.indexOf(' ' + i + ' '); )
										r = r.replace(' ' + i + ' ', ' ')
								a !== (a = T.trim(r)) && T.attr(n, 'class', a)
							}
					return this
				},
				toggleClass: function (i, t) {
					var o = typeof i
					return 'boolean' == typeof t && 'string' == o
						? t
							? this.addClass(i)
							: this.removeClass(i)
						: T.isFunction(i)
						? this.each(function (e) {
								T(this).toggleClass(
									i.call(this, e, qt(this), t),
									t
								)
						  })
						: this.each(function () {
								var e, t, n, r
								if ('string' == o)
									for (
										t = 0,
											n = T(this),
											r = i.match(q) || [];
										(e = r[t++]);

									)
										n.hasClass(e)
											? n.removeClass(e)
											: n.addClass(e)
								else
									(void 0 !== i && 'boolean' != o) ||
										((e = qt(this)) &&
											T._data(this, '__className__', e),
										T.attr(
											this,
											'class',
											(!e &&
												!1 !== i &&
												T._data(
													this,
													'__className__'
												)) ||
												''
										))
						  })
				},
				hasClass: function (e) {
					for (var t, n = 0, r = ' ' + e + ' '; (t = this[n++]); )
						if (
							1 === t.nodeType &&
							-1 < (' ' + qt(t) + ' ').replace(Ht, ' ').indexOf(r)
						)
							return !0
					return !1
				},
			}),
				T.each(
					'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
						' '
					),
					function (e, n) {
						T.fn[n] = function (e, t) {
							return 0 < arguments.length
								? this.on(n, null, e, t)
								: this.trigger(n)
						}
					}
				),
				T.fn.extend({
					hover: function (e, t) {
						return this.mouseenter(e).mouseleave(t || e)
					},
				})
			var p = w.location,
				Mt = T.now(),
				_t = /\?/,
				Ft = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g
			;(T.parseJSON = function (e) {
				if (w.JSON && w.JSON.parse) return w.JSON.parse(e + '')
				var i,
					o = null,
					t = T.trim(e + '')
				return t &&
					!T.trim(
						t.replace(Ft, function (e, t, n, r) {
							return 0 === (o = i && t ? 0 : o)
								? e
								: ((i = n || t), (o += !r - !n), '')
						})
					)
					? Function('return ' + t)()
					: T.error('Invalid JSON: ' + e)
			}),
				(T.parseXML = function (e) {
					var t
					if (!e || 'string' != typeof e) return null
					try {
						w.DOMParser
							? (t = new w.DOMParser().parseFromString(
									e,
									'text/xml'
							  ))
							: (((t = new w.ActiveXObject(
									'Microsoft.XMLDOM'
							  )).async = 'false'),
							  t.loadXML(e))
					} catch (e) {
						t = void 0
					}
					return (
						(t &&
							t.documentElement &&
							!t.getElementsByTagName('parsererror').length) ||
							T.error('Invalid XML: ' + e),
						t
					)
				})
			var Ot = /#.*$/,
				Rt = /([?&])_=[^&]*/,
				Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
				Bt = /^(?:GET|HEAD)$/,
				Wt = /^\/\//,
				It = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
				$t = {},
				zt = {},
				Xt = '*/'.concat('*'),
				Ut = p.href,
				Vt = It.exec(Ut.toLowerCase()) || []
			function Yt(o) {
				return function (e, t) {
					'string' != typeof e && ((t = e), (e = '*'))
					var n,
						r = 0,
						i = e.toLowerCase().match(q) || []
					if (T.isFunction(t))
						for (; (n = i[r++]); )
							'+' === n.charAt(0)
								? ((n = n.slice(1) || '*'),
								  (o[n] = o[n] || []).unshift(t))
								: (o[n] = o[n] || []).push(t)
				}
			}
			function Jt(t, r, i, o) {
				var a = {},
					s = t === zt
				function u(e) {
					var n
					return (
						(a[e] = !0),
						T.each(t[e] || [], function (e, t) {
							t = t(r, i, o)
							return 'string' != typeof t || s || a[t]
								? s
									? !(n = t)
									: void 0
								: (r.dataTypes.unshift(t), u(t), !1)
						}),
						n
					)
				}
				return u(r.dataTypes[0]) || (!a['*'] && u('*'))
			}
			function Gt(e, t) {
				var n,
					r,
					i = T.ajaxSettings.flatOptions || {}
				for (r in t)
					void 0 !== t[r] && ((i[r] ? e : (n = n || {}))[r] = t[r])
				return n && T.extend(!0, e, n), e
			}
			function Qt(e) {
				for (; e && 1 === e.nodeType; ) {
					if (
						'none' ===
							(((t = e).style && t.style.display) ||
								T.css(t, 'display')) ||
						'hidden' === e.type
					)
						return !0
					e = e.parentNode
				}
				var t
				return !1
			}
			T.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: Ut,
					type: 'GET',
					isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
						Vt[1]
					),
					global: !0,
					processData: !0,
					async: !0,
					contentType:
						'application/x-www-form-urlencoded; charset=UTF-8',
					accepts: {
						'*': Xt,
						text: 'text/plain',
						html: 'text/html',
						xml: 'application/xml, text/xml',
						json: 'application/json, text/javascript',
					},
					contents: {
						xml: /\bxml\b/,
						html: /\bhtml/,
						json: /\bjson\b/,
					},
					responseFields: {
						xml: 'responseXML',
						text: 'responseText',
						json: 'responseJSON',
					},
					converters: {
						'* text': String,
						'text html': !0,
						'text json': T.parseJSON,
						'text xml': T.parseXML,
					},
					flatOptions: { url: !0, context: !0 },
				},
				ajaxSetup: function (e, t) {
					return t
						? Gt(Gt(e, T.ajaxSettings), t)
						: Gt(T.ajaxSettings, e)
				},
				ajaxPrefilter: Yt($t),
				ajaxTransport: Yt(zt),
				ajax: function (e, t) {
					'object' == typeof e && ((t = e), (e = void 0))
					var n,
						u,
						l,
						c,
						f,
						d,
						r,
						p = T.ajaxSetup({}, (t = t || {})),
						h = p.context || p,
						m =
							p.context && (h.nodeType || h.jquery)
								? T(h)
								: T.event,
						g = T.Deferred(),
						y = T.Callbacks('once memory'),
						v = p.statusCode || {},
						i = {},
						o = {},
						x = 0,
						a = 'canceled',
						b = {
							readyState: 0,
							getResponseHeader: function (e) {
								var t
								if (2 === x) {
									if (!r)
										for (r = {}; (t = Pt.exec(l)); )
											r[t[1].toLowerCase()] = t[2]
									t = r[e.toLowerCase()]
								}
								return null == t ? null : t
							},
							getAllResponseHeaders: function () {
								return 2 === x ? l : null
							},
							setRequestHeader: function (e, t) {
								var n = e.toLowerCase()
								return (
									x || ((e = o[n] = o[n] || e), (i[e] = t)),
									this
								)
							},
							overrideMimeType: function (e) {
								return x || (p.mimeType = e), this
							},
							statusCode: function (e) {
								if (e)
									if (x < 2)
										for (var t in e) v[t] = [v[t], e[t]]
									else b.always(e[b.status])
								return this
							},
							abort: function (e) {
								e = e || a
								return d && d.abort(e), s(0, e), this
							},
						}
					if (
						((g.promise(b).complete = y.add),
						(b.success = b.done),
						(b.error = b.fail),
						(p.url = ((e || p.url || Ut) + '')
							.replace(Ot, '')
							.replace(Wt, Vt[1] + '//')),
						(p.type = t.method || t.type || p.method || p.type),
						(p.dataTypes = T.trim(p.dataType || '*')
							.toLowerCase()
							.match(q) || ['']),
						null == p.crossDomain &&
							((e = It.exec(p.url.toLowerCase())),
							(p.crossDomain = !(
								!e ||
								(e[1] === Vt[1] &&
									e[2] === Vt[2] &&
									(e[3] ||
										('http:' === e[1] ? '80' : '443')) ===
										(Vt[3] ||
											('http:' === Vt[1] ? '80' : '443')))
							))),
						p.data &&
							p.processData &&
							'string' != typeof p.data &&
							(p.data = T.param(p.data, p.traditional)),
						Jt($t, p, t, b),
						2 === x)
					)
						return b
					for (n in ((f = T.event && p.global) &&
						0 == T.active++ &&
						T.event.trigger('ajaxStart'),
					(p.type = p.type.toUpperCase()),
					(p.hasContent = !Bt.test(p.type)),
					(u = p.url),
					p.hasContent ||
						(p.data &&
							((u = p.url += (_t.test(u) ? '&' : '?') + p.data),
							delete p.data),
						!1 === p.cache &&
							(p.url = Rt.test(u)
								? u.replace(Rt, '$1_=' + Mt++)
								: u + (_t.test(u) ? '&' : '?') + '_=' + Mt++)),
					p.ifModified &&
						(T.lastModified[u] &&
							b.setRequestHeader(
								'If-Modified-Since',
								T.lastModified[u]
							),
						T.etag[u] &&
							b.setRequestHeader('If-None-Match', T.etag[u])),
					((p.data && p.hasContent && !1 !== p.contentType) ||
						t.contentType) &&
						b.setRequestHeader('Content-Type', p.contentType),
					b.setRequestHeader(
						'Accept',
						p.dataTypes[0] && p.accepts[p.dataTypes[0]]
							? p.accepts[p.dataTypes[0]] +
									('*' !== p.dataTypes[0]
										? ', ' + Xt + '; q=0.01'
										: '')
							: p.accepts['*']
					),
					p.headers))
						b.setRequestHeader(n, p.headers[n])
					if (
						p.beforeSend &&
						(!1 === p.beforeSend.call(h, b, p) || 2 === x)
					)
						return b.abort()
					for (n in ((a = 'abort'),
					{ success: 1, error: 1, complete: 1 }))
						b[n](p[n])
					if ((d = Jt(zt, p, t, b))) {
						if (
							((b.readyState = 1),
							f && m.trigger('ajaxSend', [b, p]),
							2 === x)
						)
							return b
						p.async &&
							0 < p.timeout &&
							(c = w.setTimeout(function () {
								b.abort('timeout')
							}, p.timeout))
						try {
							;(x = 1), d.send(i, s)
						} catch (e) {
							if (!(x < 2)) throw e
							s(-1, e)
						}
					} else s(-1, 'No Transport')
					function s(e, t, n, r) {
						var i,
							o,
							a,
							s = t
						2 !== x &&
							((x = 2),
							c && w.clearTimeout(c),
							(d = void 0),
							(l = r || ''),
							(b.readyState = 0 < e ? 4 : 0),
							(r = (200 <= e && e < 300) || 304 === e),
							n &&
								(a = (function (e, t, n) {
									for (
										var r,
											i,
											o,
											a,
											s = e.contents,
											u = e.dataTypes;
										'*' === u[0];

									)
										u.shift(),
											void 0 === i &&
												(i =
													e.mimeType ||
													t.getResponseHeader(
														'Content-Type'
													))
									if (i)
										for (a in s)
											if (s[a] && s[a].test(i)) {
												u.unshift(a)
												break
											}
									if (u[0] in n) o = u[0]
									else {
										for (a in n) {
											if (
												!u[0] ||
												e.converters[a + ' ' + u[0]]
											) {
												o = a
												break
											}
											r = r || a
										}
										o = o || r
									}
									if (o)
										return o !== u[0] && u.unshift(o), n[o]
								})(p, b, n)),
							(a = (function (e, t, n, r) {
								var i,
									o,
									a,
									s,
									u,
									l = {},
									c = e.dataTypes.slice()
								if (c[1])
									for (a in e.converters)
										l[a.toLowerCase()] = e.converters[a]
								for (o = c.shift(); o; )
									if (
										(e.responseFields[o] &&
											(n[e.responseFields[o]] = t),
										!u &&
											r &&
											e.dataFilter &&
											(t = e.dataFilter(t, e.dataType)),
										(u = o),
										(o = c.shift()))
									)
										if ('*' === o) o = u
										else if ('*' !== u && u !== o) {
											if (
												!(a =
													l[u + ' ' + o] ||
													l['* ' + o])
											)
												for (i in l)
													if (
														(s = i.split(
															' '
														))[1] === o &&
														(a =
															l[u + ' ' + s[0]] ||
															l['* ' + s[0]])
													) {
														!0 === a
															? (a = l[i])
															: !0 !== l[i] &&
															  ((o = s[0]),
															  c.unshift(s[1]))
														break
													}
											if (!0 !== a)
												if (a && e.throws) t = a(t)
												else
													try {
														t = a(t)
													} catch (e) {
														return {
															state:
																'parsererror',
															error: a
																? e
																: 'No conversion from ' +
																  u +
																  ' to ' +
																  o,
														}
													}
										}
								return { state: 'success', data: t }
							})(p, a, b, r)),
							r
								? (p.ifModified &&
										((n = b.getResponseHeader(
											'Last-Modified'
										)) && (T.lastModified[u] = n),
										(n = b.getResponseHeader('etag')) &&
											(T.etag[u] = n)),
								  204 === e || 'HEAD' === p.type
										? (s = 'nocontent')
										: 304 === e
										? (s = 'notmodified')
										: ((s = a.state),
										  (i = a.data),
										  (r = !(o = a.error))))
								: ((o = s),
								  (!e && s) ||
										((s = 'error'), e < 0 && (e = 0))),
							(b.status = e),
							(b.statusText = (t || s) + ''),
							r
								? g.resolveWith(h, [i, s, b])
								: g.rejectWith(h, [b, s, o]),
							b.statusCode(v),
							(v = void 0),
							f &&
								m.trigger(r ? 'ajaxSuccess' : 'ajaxError', [
									b,
									p,
									r ? i : o,
								]),
							y.fireWith(h, [b, s]),
							f &&
								(m.trigger('ajaxComplete', [b, p]),
								--T.active || T.event.trigger('ajaxStop')))
					}
					return b
				},
				getJSON: function (e, t, n) {
					return T.get(e, t, n, 'json')
				},
				getScript: function (e, t) {
					return T.get(e, void 0, t, 'script')
				},
			}),
				T.each(['get', 'post'], function (e, i) {
					T[i] = function (e, t, n, r) {
						return (
							T.isFunction(t) &&
								((r = r || n), (n = t), (t = void 0)),
							T.ajax(
								T.extend(
									{
										url: e,
										type: i,
										dataType: r,
										data: t,
										success: n,
									},
									T.isPlainObject(e) && e
								)
							)
						)
					}
				}),
				(T._evalUrl = function (e) {
					return T.ajax({
						url: e,
						type: 'GET',
						dataType: 'script',
						cache: !0,
						async: !1,
						global: !1,
						throws: !0,
					})
				}),
				T.fn.extend({
					wrapAll: function (t) {
						return T.isFunction(t)
							? this.each(function (e) {
									T(this).wrapAll(t.call(this, e))
							  })
							: (this[0] &&
									((e = T(t, this[0].ownerDocument)
										.eq(0)
										.clone(!0)),
									this[0].parentNode &&
										e.insertBefore(this[0]),
									e
										.map(function () {
											for (
												var e = this;
												e.firstChild &&
												1 === e.firstChild.nodeType;

											)
												e = e.firstChild
											return e
										})
										.append(this)),
							  this)
						var e
					},
					wrapInner: function (n) {
						return T.isFunction(n)
							? this.each(function (e) {
									T(this).wrapInner(n.call(this, e))
							  })
							: this.each(function () {
									var e = T(this),
										t = e.contents()
									t.length ? t.wrapAll(n) : e.append(n)
							  })
					},
					wrap: function (t) {
						var n = T.isFunction(t)
						return this.each(function (e) {
							T(this).wrapAll(n ? t.call(this, e) : t)
						})
					},
					unwrap: function () {
						return this.parent()
							.each(function () {
								T.nodeName(this, 'body') ||
									T(this).replaceWith(this.childNodes)
							})
							.end()
					},
				}),
				(T.expr.filters.hidden = function (e) {
					return y.reliableHiddenOffsets()
						? e.offsetWidth <= 0 &&
								e.offsetHeight <= 0 &&
								!e.getClientRects().length
						: Qt(e)
				}),
				(T.expr.filters.visible = function (e) {
					return !T.expr.filters.hidden(e)
				})
			var Kt = /%20/g,
				Zt = /\[\]$/,
				en = /\r?\n/g,
				tn = /^(?:submit|button|image|reset|file)$/i,
				nn = /^(?:input|select|textarea|keygen)/i
			;(T.param = function (e, t) {
				function n(e, t) {
					;(t = T.isFunction(t) ? t() : null == t ? '' : t),
						(i[i.length] =
							encodeURIComponent(e) + '=' + encodeURIComponent(t))
				}
				var r,
					i = []
				if (
					(void 0 === t &&
						(t = T.ajaxSettings && T.ajaxSettings.traditional),
					T.isArray(e) || (e.jquery && !T.isPlainObject(e)))
				)
					T.each(e, function () {
						n(this.name, this.value)
					})
				else
					for (r in e)
						!(function n(r, e, i, o) {
							if (T.isArray(e))
								T.each(e, function (e, t) {
									i || Zt.test(r)
										? o(r, t)
										: n(
												r +
													'[' +
													('object' == typeof t &&
													null != t
														? e
														: '') +
													']',
												t,
												i,
												o
										  )
								})
							else if (i || 'object' !== T.type(e)) o(r, e)
							else
								for (var t in e)
									n(r + '[' + t + ']', e[t], i, o)
						})(r, e[r], t, n)
				return i.join('&').replace(Kt, '+')
			}),
				T.fn.extend({
					serialize: function () {
						return T.param(this.serializeArray())
					},
					serializeArray: function () {
						return this.map(function () {
							var e = T.prop(this, 'elements')
							return e ? T.makeArray(e) : this
						})
							.filter(function () {
								var e = this.type
								return (
									this.name &&
									!T(this).is(':disabled') &&
									nn.test(this.nodeName) &&
									!tn.test(e) &&
									(this.checked || !G.test(e))
								)
							})
							.map(function (e, t) {
								var n = T(this).val()
								return null == n
									? null
									: T.isArray(n)
									? T.map(n, function (e) {
											return {
												name: t.name,
												value: e.replace(en, '\r\n'),
											}
									  })
									: {
											name: t.name,
											value: n.replace(en, '\r\n'),
									  }
							})
							.get()
					},
				}),
				(T.ajaxSettings.xhr =
					void 0 !== w.ActiveXObject
						? function () {
								return this.isLocal
									? sn()
									: 8 < h.documentMode
									? an()
									: (/^(get|post|head|put|delete|options)$/i.test(
											this.type
									  ) &&
											an()) ||
									  sn()
						  }
						: an)
			var rn = 0,
				on = {},
				p = T.ajaxSettings.xhr()
			function an() {
				try {
					return new w.XMLHttpRequest()
				} catch (e) {}
			}
			function sn() {
				try {
					return new w.ActiveXObject('Microsoft.XMLHTTP')
				} catch (e) {}
			}
			w.attachEvent &&
				w.attachEvent('onunload', function () {
					for (var e in on) on[e](void 0, !0)
				}),
				(y.cors = !!p && 'withCredentials' in p),
				(p = y.ajax = !!p) &&
					T.ajaxTransport(function (u) {
						var l
						if (!u.crossDomain || y.cors)
							return {
								send: function (e, o) {
									var t,
										a = u.xhr(),
										s = ++rn
									if (
										(a.open(
											u.type,
											u.url,
											u.async,
											u.username,
											u.password
										),
										u.xhrFields)
									)
										for (t in u.xhrFields)
											a[t] = u.xhrFields[t]
									for (t in (u.mimeType &&
										a.overrideMimeType &&
										a.overrideMimeType(u.mimeType),
									u.crossDomain ||
										e['X-Requested-With'] ||
										(e['X-Requested-With'] =
											'XMLHttpRequest'),
									e))
										void 0 !== e[t] &&
											a.setRequestHeader(t, e[t] + '')
									a.send((u.hasContent && u.data) || null),
										(l = function (e, t) {
											var n, r, i
											if (l && (t || 4 === a.readyState))
												if (
													(delete on[s],
													(l = void 0),
													(a.onreadystatechange =
														T.noop),
													t)
												)
													4 !== a.readyState &&
														a.abort()
												else {
													;(i = {}),
														(n = a.status),
														'string' ==
															typeof a.responseText &&
															(i.text =
																a.responseText)
													try {
														r = a.statusText
													} catch (e) {
														r = ''
													}
													n ||
													!u.isLocal ||
													u.crossDomain
														? 1223 === n &&
														  (n = 204)
														: (n = i.text
																? 200
																: 404)
												}
											i &&
												o(
													n,
													r,
													i,
													a.getAllResponseHeaders()
												)
										}),
										u.async
											? 4 === a.readyState
												? w.setTimeout(l)
												: (a.onreadystatechange = on[
														s
												  ] = l)
											: l()
								},
								abort: function () {
									l && l(void 0, !0)
								},
							}
					}),
				T.ajaxPrefilter(function (e) {
					e.crossDomain && (e.contents.script = !1)
				}),
				T.ajaxSetup({
					accepts: {
						script:
							'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
					},
					contents: { script: /\b(?:java|ecma)script\b/ },
					converters: {
						'text script': function (e) {
							return T.globalEval(e), e
						},
					},
				}),
				T.ajaxPrefilter('script', function (e) {
					void 0 === e.cache && (e.cache = !1),
						e.crossDomain && ((e.type = 'GET'), (e.global = !1))
				}),
				T.ajaxTransport('script', function (t) {
					if (t.crossDomain) {
						var r,
							i = h.head || T('head')[0] || h.documentElement
						return {
							send: function (e, n) {
								;((r = h.createElement('script')).async = !0),
									t.scriptCharset &&
										(r.charset = t.scriptCharset),
									(r.src = t.url),
									(r.onload = r.onreadystatechange = function (
										e,
										t
									) {
										;(!t &&
											r.readyState &&
											!/loaded|complete/.test(
												r.readyState
											)) ||
											((r.onload = r.onreadystatechange = null),
											r.parentNode &&
												r.parentNode.removeChild(r),
											(r = null),
											t || n(200, 'success'))
									}),
									i.insertBefore(r, i.firstChild)
							},
							abort: function () {
								r && r.onload(void 0, !0)
							},
						}
					}
				})
			var un = [],
				ln = /(=)\?(?=&|$)|\?\?/
			T.ajaxSetup({
				jsonp: 'callback',
				jsonpCallback: function () {
					var e = un.pop() || T.expando + '_' + Mt++
					return (this[e] = !0), e
				},
			}),
				T.ajaxPrefilter('json jsonp', function (e, t, n) {
					var r,
						i,
						o,
						a =
							!1 !== e.jsonp &&
							(ln.test(e.url)
								? 'url'
								: 'string' == typeof e.data &&
								  0 ===
										(e.contentType || '').indexOf(
											'application/x-www-form-urlencoded'
										) &&
								  ln.test(e.data) &&
								  'data')
					if (a || 'jsonp' === e.dataTypes[0])
						return (
							(r = e.jsonpCallback = T.isFunction(e.jsonpCallback)
								? e.jsonpCallback()
								: e.jsonpCallback),
							a
								? (e[a] = e[a].replace(ln, '$1' + r))
								: !1 !== e.jsonp &&
								  (e.url +=
										(_t.test(e.url) ? '&' : '?') +
										e.jsonp +
										'=' +
										r),
							(e.converters['script json'] = function () {
								return o || T.error(r + ' was not called'), o[0]
							}),
							(e.dataTypes[0] = 'json'),
							(i = w[r]),
							(w[r] = function () {
								o = arguments
							}),
							n.always(function () {
								void 0 === i ? T(w).removeProp(r) : (w[r] = i),
									e[r] &&
										((e.jsonpCallback = t.jsonpCallback),
										un.push(r)),
									o && T.isFunction(i) && i(o[0]),
									(o = i = void 0)
							}),
							'script'
						)
				}),
				(y.createHTMLDocument = (function () {
					if (!h.implementation.createHTMLDocument) return !1
					var e = h.implementation.createHTMLDocument('')
					return (
						(e.body.innerHTML = '<form></form><form></form>'),
						2 === e.body.childNodes.length
					)
				})()),
				(T.parseHTML = function (e, t, n) {
					if (!e || 'string' != typeof e) return null
					'boolean' == typeof t && ((n = t), (t = !1)),
						(t =
							t ||
							(y.createHTMLDocument
								? h.implementation.createHTMLDocument('')
								: h))
					var r = C.exec(e),
						n = !n && []
					return r
						? [t.createElement(r[1])]
						: ((r = ue([e], t, n)),
						  n && n.length && T(n).remove(),
						  T.merge([], r.childNodes))
				})
			var cn = T.fn.load
			function fn(e) {
				return T.isWindow(e)
					? e
					: 9 === e.nodeType && (e.defaultView || e.parentWindow)
			}
			;(T.fn.load = function (e, t, n) {
				if ('string' != typeof e && cn) return cn.apply(this, arguments)
				var r,
					i,
					o,
					a = this,
					s = e.indexOf(' ')
				return (
					-1 < s &&
						((r = T.trim(e.slice(s, e.length))),
						(e = e.slice(0, s))),
					T.isFunction(t)
						? ((n = t), (t = void 0))
						: t && 'object' == typeof t && (i = 'POST'),
					0 < a.length &&
						T.ajax({
							url: e,
							type: i || 'GET',
							dataType: 'html',
							data: t,
						})
							.done(function (e) {
								;(o = arguments),
									a.html(
										r
											? T('<div>')
													.append(T.parseHTML(e))
													.find(r)
											: e
									)
							})
							.always(
								n &&
									function (e, t) {
										a.each(function () {
											n.apply(
												a,
												o || [e.responseText, t, e]
											)
										})
									}
							),
					this
				)
			}),
				T.each(
					[
						'ajaxStart',
						'ajaxStop',
						'ajaxComplete',
						'ajaxError',
						'ajaxSuccess',
						'ajaxSend',
					],
					function (e, t) {
						T.fn[t] = function (e) {
							return this.on(t, e)
						}
					}
				),
				(T.expr.filters.animated = function (t) {
					return T.grep(T.timers, function (e) {
						return t === e.elem
					}).length
				}),
				(T.offset = {
					setOffset: function (e, t, n) {
						var r,
							i,
							o,
							a,
							s = T.css(e, 'position'),
							u = T(e),
							l = {}
						'static' === s && (e.style.position = 'relative'),
							(o = u.offset()),
							(r = T.css(e, 'top')),
							(a = T.css(e, 'left')),
							(a =
								('absolute' === s || 'fixed' === s) &&
								-1 < T.inArray('auto', [r, a])
									? ((i = (s = u.position()).top), s.left)
									: ((i = parseFloat(r) || 0),
									  parseFloat(a) || 0)),
							null !=
								(t = T.isFunction(t)
									? t.call(e, n, T.extend({}, o))
									: t).top && (l.top = t.top - o.top + i),
							null != t.left && (l.left = t.left - o.left + a),
							'using' in t ? t.using.call(e, l) : u.css(l)
					},
				}),
				T.fn.extend({
					offset: function (t) {
						if (arguments.length)
							return void 0 === t
								? this
								: this.each(function (e) {
										T.offset.setOffset(this, t, e)
								  })
						var e,
							n = { top: 0, left: 0 },
							r = this[0],
							i = r && r.ownerDocument
						return i
							? ((e = i.documentElement),
							  T.contains(e, r)
									? (void 0 !== r.getBoundingClientRect &&
											(n = r.getBoundingClientRect()),
									  (i = fn(i)),
									  {
											top:
												n.top +
												(i.pageYOffset || e.scrollTop) -
												(e.clientTop || 0),
											left:
												n.left +
												(i.pageXOffset ||
													e.scrollLeft) -
												(e.clientLeft || 0),
									  })
									: n)
							: void 0
					},
					position: function () {
						if (this[0]) {
							var e,
								t,
								n = { top: 0, left: 0 },
								r = this[0]
							return (
								'fixed' === T.css(r, 'position')
									? (t = r.getBoundingClientRect())
									: ((e = this.offsetParent()),
									  (t = this.offset()),
									  ((n = !T.nodeName(e[0], 'html')
											? e.offset()
											: n).top += T.css(
											e[0],
											'borderTopWidth',
											!0
									  )),
									  (n.left += T.css(
											e[0],
											'borderLeftWidth',
											!0
									  ))),
								{
									top:
										t.top -
										n.top -
										T.css(r, 'marginTop', !0),
									left:
										t.left -
										n.left -
										T.css(r, 'marginLeft', !0),
								}
							)
						}
					},
					offsetParent: function () {
						return this.map(function () {
							for (
								var e = this.offsetParent;
								e &&
								!T.nodeName(e, 'html') &&
								'static' === T.css(e, 'position');

							)
								e = e.offsetParent
							return e || Ve
						})
					},
				}),
				T.each(
					{ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
					function (t, i) {
						var o = /Y/.test(i)
						T.fn[t] = function (e) {
							return J(
								this,
								function (e, t, n) {
									var r = fn(e)
									if (void 0 === n)
										return r
											? i in r
												? r[i]
												: r.document.documentElement[t]
											: e[t]
									r
										? r.scrollTo(
												o ? T(r).scrollLeft() : n,
												o ? n : T(r).scrollTop()
										  )
										: (e[t] = n)
								},
								t,
								e,
								arguments.length,
								null
							)
						}
					}
				),
				T.each(['top', 'left'], function (e, n) {
					T.cssHooks[n] = Ke(y.pixelPosition, function (e, t) {
						if (t)
							return (
								(t = Ge(e, n)),
								Ue.test(t) ? T(e).position()[n] + 'px' : t
							)
					})
				}),
				T.each({ Height: 'height', Width: 'width' }, function (o, a) {
					T.each(
						{ padding: 'inner' + o, content: a, '': 'outer' + o },
						function (r, e) {
							T.fn[e] = function (e, t) {
								var n =
										arguments.length &&
										(r || 'boolean' != typeof e),
									i =
										r ||
										(!0 === e || !0 === t
											? 'margin'
											: 'border')
								return J(
									this,
									function (e, t, n) {
										var r
										return T.isWindow(e)
											? e.document.documentElement[
													'client' + o
											  ]
											: 9 === e.nodeType
											? ((r = e.documentElement),
											  Math.max(
													e.body['scroll' + o],
													r['scroll' + o],
													e.body['offset' + o],
													r['offset' + o],
													r['client' + o]
											  ))
											: void 0 === n
											? T.css(e, t, i)
											: T.style(e, t, n, i)
									},
									a,
									n ? e : void 0,
									n,
									null
								)
							}
						}
					)
				}),
				T.fn.extend({
					bind: function (e, t, n) {
						return this.on(e, null, t, n)
					},
					unbind: function (e, t) {
						return this.off(e, null, t)
					},
					delegate: function (e, t, n, r) {
						return this.on(t, e, n, r)
					},
					undelegate: function (e, t, n) {
						return 1 === arguments.length
							? this.off(e, '**')
							: this.off(t, e || '**', n)
					},
				}),
				(T.fn.size = function () {
					return this.length
				}),
				(T.fn.andSelf = T.fn.addBack),
				'function' == typeof define &&
					define.amd &&
					define('jquery', [], function () {
						return T
					})
			var dn = w.jQuery,
				pn = w.$
			return (
				(T.noConflict = function (e) {
					return (
						w.$ === T && (w.$ = pn),
						e && w.jQuery === T && (w.jQuery = dn),
						T
					)
				}),
				e || (w.jQuery = w.$ = T),
				T
			)
		}),
		'object' == typeof n && 'object' == typeof n.exports
			? (n.exports = r.document
					? i(r, !0)
					: function (e) {
							if (!e.document)
								throw new Error(
									'jQuery requires a window with a document'
								)
							return i(e)
					  })
			: i(r)
})
