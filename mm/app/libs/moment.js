define('app/libs/moment', function (Ue, t, Ce) {
	var e, n
	;(e = this),
		(n = function () {
			'use strict'
			var t
			function c() {
				return t.apply(null, arguments)
			}
			function s(t) {
				return '[object Array]' === Object.prototype.toString.call(t)
			}
			function i(t) {
				return (
					t instanceof Date ||
					'[object Date]' === Object.prototype.toString.call(t)
				)
			}
			function h(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}
			function a(t, e) {
				for (var n in e) h(e, n) && (t[n] = e[n])
				return (
					h(e, 'toString') && (t.toString = e.toString),
					h(e, 'valueOf') && (t.valueOf = e.valueOf),
					t
				)
			}
			function r(t, e, n, i) {
				return Lt(t, e, n, i, !0).utc()
			}
			function f(t) {
				return (
					null == t._pf &&
						(t._pf = {
							empty: !1,
							unusedTokens: [],
							unusedInput: [],
							overflow: -2,
							charsLeftOver: 0,
							nullInput: !1,
							invalidMonth: null,
							invalidFormat: !1,
							userInvalidated: !1,
							iso: !1,
						}),
					t._pf
				)
			}
			function o(t) {
				var e
				return (
					null == t._isValid &&
						((e = f(t)),
						(t._isValid =
							!isNaN(t._d.getTime()) &&
							e.overflow < 0 &&
							!e.empty &&
							!e.invalidMonth &&
							!e.nullInput &&
							!e.invalidFormat &&
							!e.userInvalidated),
						t._strict &&
							(t._isValid =
								t._isValid &&
								0 === e.charsLeftOver &&
								0 === e.unusedTokens.length &&
								void 0 === e.bigHour)),
					t._isValid
				)
			}
			function u(t) {
				var e = r(NaN)
				return null != t ? a(f(e), t) : (f(e).userInvalidated = !0), e
			}
			var d = (c.momentProperties = [])
			function l(t, e) {
				var n, i, s
				if (
					(void 0 !== e._isAMomentObject &&
						(t._isAMomentObject = e._isAMomentObject),
					void 0 !== e._i && (t._i = e._i),
					void 0 !== e._f && (t._f = e._f),
					void 0 !== e._l && (t._l = e._l),
					void 0 !== e._strict && (t._strict = e._strict),
					void 0 !== e._tzm && (t._tzm = e._tzm),
					void 0 !== e._isUTC && (t._isUTC = e._isUTC),
					void 0 !== e._offset && (t._offset = e._offset),
					void 0 !== e._pf && (t._pf = f(e)),
					void 0 !== e._locale && (t._locale = e._locale),
					0 < d.length)
				)
					for (n in d) void 0 !== (s = e[(i = d[n])]) && (t[i] = s)
				return t
			}
			var e = !1
			function m(t) {
				l(this, t),
					(this._d = new Date(+t._d)),
					!1 === e && ((e = !0), c.updateOffset(this), (e = !1))
			}
			function _(t) {
				return t instanceof m || (null != t && null != t._isAMomentObject)
			}
			function y(t) {
				var e = +t,
					t = 0
				return (t =
					0 != e && isFinite(e) ? (0 <= e ? Math.floor(e) : Math.ceil(e)) : t)
			}
			function p(t, e, n) {
				for (
					var i = Math.min(t.length, e.length),
						s = Math.abs(t.length - e.length),
						r = 0,
						a = 0;
					a < i;
					a++
				)
					((n && t[a] !== e[a]) || (!n && y(t[a]) !== y(e[a]))) && r++
				return r + s
			}
			function n() {}
			var g,
				D = {}
			function v(t) {
				return t && t.toLowerCase().replace('_', '-')
			}
			function M(t) {
				var e
				if (!D[t] && void 0 !== Ce && Ce && Ce.exports)
					try {
						;(e = g._abbr), Ue('./locale/' + t), Y(e)
					} catch (t) {}
				return D[t]
			}
			function Y(t, e) {
				var n
				return (g = t && (n = void 0 === e ? k(t) : w(t, e)) ? n : g)._abbr
			}
			function w(t, e) {
				return null !== e
					? ((e.abbr = t), D[t] || (D[t] = new n()), D[t].set(e), Y(t), D[t])
					: (delete D[t], null)
			}
			function k(t) {
				var e
				if (!(t = t && t._locale && t._locale._abbr ? t._locale._abbr : t))
					return g
				if (!s(t)) {
					if ((e = M(t))) return e
					t = [t]
				}
				return (function (t) {
					for (var e, n, i, s, r = 0; r < t.length; ) {
						for (
							e = (s = v(t[r]).split('-')).length,
								n = (n = v(t[r + 1])) ? n.split('-') : null;
							0 < e;

						) {
							if ((i = M(s.slice(0, e).join('-')))) return i
							if (n && n.length >= e && p(s, n, !0) >= e - 1) break
							e--
						}
						r++
					}
					return null
				})(t)
			}
			var T = {}
			function S(t, e) {
				var n = t.toLowerCase()
				T[n] = T[n + 's'] = T[e] = t
			}
			function b(t) {
				return 'string' == typeof t ? T[t] || T[t.toLowerCase()] : void 0
			}
			function O(t) {
				var e,
					n,
					i = {}
				for (n in t) h(t, n) && (e = b(n)) && (i[e] = t[n])
				return i
			}
			function U(e, n) {
				return function (t) {
					return null != t
						? (W(this, e, t), c.updateOffset(this, n), this)
						: C(this, e)
				}
			}
			function C(t, e) {
				return t._d['get' + (t._isUTC ? 'UTC' : '') + e]()
			}
			function W(t, e, n) {
				return t._d['set' + (t._isUTC ? 'UTC' : '') + e](n)
			}
			function G(t, e) {
				if ('object' == typeof t) for (var n in t) this.set(n, t[n])
				else if ('function' == typeof this[(t = b(t))]) return this[t](e)
				return this
			}
			function F(t, e, n) {
				for (var i = '' + Math.abs(t), t = 0 <= t; i.length < e; ) i = '0' + i
				return (t ? (n ? '+' : '') : '-') + i
			}
			var P = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
				L = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
				H = {},
				x = {}
			function I(t, e, n, i) {
				var s =
					'string' == typeof i
						? function () {
								return this[i]()
						  }
						: i
				t && (x[t] = s),
					e &&
						(x[e[0]] = function () {
							return F(s.apply(this, arguments), e[1], e[2])
						}),
					n &&
						(x[n] = function () {
							return this.localeData().ordinal(s.apply(this, arguments), t)
						})
			}
			function A(t, e) {
				return t.isValid()
					? ((e = z(e, t.localeData())),
					  H[e] ||
							(H[e] = (function (n) {
								for (var t, i = n.match(P), s = 0, r = i.length; s < r; s++)
									x[i[s]]
										? (i[s] = x[i[s]])
										: (i[s] = (t = i[s]).match(/\[[\s\S]/)
												? t.replace(/^\[|\]$/g, '')
												: t.replace(/\\/g, ''))
								return function (t) {
									var e = ''
									for (s = 0; s < r; s++)
										e += i[s] instanceof Function ? i[s].call(t, n) : i[s]
									return e
								}
							})(e)),
					  H[e](t))
					: t.localeData().invalidDate()
			}
			function z(t, e) {
				var n = 5
				function i(t) {
					return e.longDateFormat(t) || t
				}
				for (L.lastIndex = 0; 0 <= n && L.test(t); )
					(t = t.replace(L, i)), (L.lastIndex = 0), --n
				return t
			}
			var Z = /\d/,
				E = /\d\d/,
				N = /\d{3}/,
				j = /\d{4}/,
				V = /[+-]?\d{6}/,
				q = /\d\d?/,
				J = /\d{1,3}/,
				$ = /\d{1,4}/,
				R = /[+-]?\d{1,6}/,
				B = /[+-]?\d+/,
				Q = /Z|[+-]\d\d:?\d\d/gi,
				X = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
				K = {}
			function tt(t, e, n) {
				K[t] =
					'function' == typeof e
						? e
						: function (t) {
								return t && n ? n : e
						  }
			}
			var et = {}
			function nt(t, n) {
				var e,
					i = n
				for (
					'string' == typeof t && (t = [t]),
						'number' == typeof n &&
							(i = function (t, e) {
								e[n] = y(t)
							}),
						e = 0;
					e < t.length;
					e++
				)
					et[t[e]] = i
			}
			function it(t, s) {
				nt(t, function (t, e, n, i) {
					;(n._w = n._w || {}), s(t, n._w, n, i)
				})
			}
			var st = 0,
				rt = 1,
				at = 2,
				ot = 3,
				ut = 4,
				dt = 5,
				lt = 6
			function ct(t, e) {
				return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
			}
			I('M', ['MM', 2], 'Mo', function () {
				return this.month() + 1
			}),
				I('MMM', 0, 0, function (t) {
					return this.localeData().monthsShort(this, t)
				}),
				I('MMMM', 0, 0, function (t) {
					return this.localeData().months(this, t)
				}),
				S('month', 'M'),
				tt('M', q),
				tt('MM', q, E),
				tt('MMM', X),
				tt('MMMM', X),
				nt(['M', 'MM'], function (t, e) {
					e[rt] = y(t) - 1
				}),
				nt(['MMM', 'MMMM'], function (t, e, n, i) {
					i = n._locale.monthsParse(t, i, n._strict)
					null != i ? (e[rt] = i) : (f(n).invalidMonth = t)
				})
			var ht = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
				'_'
			)
			var ft = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_')
			function mt(t, e) {
				var n
				return (
					('string' == typeof e &&
						'number' != typeof (e = t.localeData().monthsParse(e))) ||
						((n = Math.min(t.date(), ct(t.year(), e))),
						t._d['set' + (t._isUTC ? 'UTC' : '') + 'Month'](e, n)),
					t
				)
			}
			function _t(t) {
				return null != t
					? (mt(this, t), c.updateOffset(this, !0), this)
					: C(this, 'Month')
			}
			function yt(t) {
				var e = t._a
				return (
					e &&
						-2 === f(t).overflow &&
						((e =
							e[rt] < 0 || 11 < e[rt]
								? rt
								: e[at] < 1 || e[at] > ct(e[st], e[rt])
								? at
								: e[ot] < 0 ||
								  24 < e[ot] ||
								  (24 === e[ot] && (0 !== e[ut] || 0 !== e[dt] || 0 !== e[lt]))
								? ot
								: e[ut] < 0 || 59 < e[ut]
								? ut
								: e[dt] < 0 || 59 < e[dt]
								? dt
								: e[lt] < 0 || 999 < e[lt]
								? lt
								: -1),
						f(t)._overflowDayOfYear && (e < st || at < e) && (e = at),
						(f(t).overflow = e)),
					t
				)
			}
			function pt(t) {
				!1 === c.suppressDeprecationWarnings &&
					'undefined' != typeof console &&
					console.warn &&
					console.warn('Deprecation warning: ' + t)
			}
			function gt(t, e) {
				var n = !0,
					i = t + '\n' + new Error().stack
				return a(function () {
					return n && (pt(i), (n = !1)), e.apply(this, arguments)
				}, e)
			}
			var Dt = {}
			c.suppressDeprecationWarnings = !1
			var vt = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
				Mt = [
					['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
					['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
					['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
					['GGGG-[W]WW', /\d{4}-W\d{2}/],
					['YYYY-DDD', /\d{4}-\d{3}/],
				],
				Yt = [
					['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
					['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
					['HH:mm', /(T| )\d\d:\d\d/],
					['HH', /(T| )\d\d/],
				],
				wt = /^\/?Date\((\-?\d+)/i
			function kt(t) {
				var e,
					n,
					i = t._i,
					s = vt.exec(i)
				if (s) {
					for (f(t).iso = !0, e = 0, n = Mt.length; e < n; e++)
						if (Mt[e][1].exec(i)) {
							t._f = Mt[e][0] + (s[6] || ' ')
							break
						}
					for (e = 0, n = Yt.length; e < n; e++)
						if (Yt[e][1].exec(i)) {
							t._f += Yt[e][0]
							break
						}
					i.match(Q) && (t._f += 'Z'), Ft(t)
				} else t._isValid = !1
			}
			function Tt(t, e, n, i, s, r, a) {
				a = new Date(t, e, n, i, s, r, a)
				return t < 1970 && a.setFullYear(t), a
			}
			function St(t) {
				var e = new Date(Date.UTC.apply(null, arguments))
				return t < 1970 && e.setUTCFullYear(t), e
			}
			function bt(t) {
				return Ot(t) ? 366 : 365
			}
			function Ot(t) {
				return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0
			}
			;(c.createFromInputFallback = gt(
				'moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.',
				function (t) {
					t._d = new Date(t._i + (t._useUTC ? ' UTC' : ''))
				}
			)),
				I(0, ['YY', 2], 0, function () {
					return this.year() % 100
				}),
				I(0, ['YYYY', 4], 0, 'year'),
				I(0, ['YYYYY', 5], 0, 'year'),
				I(0, ['YYYYYY', 6, !0], 0, 'year'),
				S('year', 'y'),
				tt('Y', B),
				tt('YY', q, E),
				tt('YYYY', $, j),
				tt('YYYYY', R, V),
				tt('YYYYYY', R, V),
				nt(['YYYY', 'YYYYY', 'YYYYYY'], st),
				nt('YY', function (t, e) {
					e[st] = c.parseTwoDigitYear(t)
				})
			var Ut = U(
				'FullYear',
				!(c.parseTwoDigitYear = function (t) {
					return y(t) + (68 < y(t) ? 1900 : 2e3)
				})
			)
			function Ct(t, e, n) {
				;(e = n - e), (n -= t.day())
				return (
					e < n && (n -= 7),
					n < e - 7 && (n += 7),
					(n = Ht(t).add(n, 'd')),
					{
						week: Math.ceil(n.dayOfYear() / 7),
						year: n.year(),
					}
				)
			}
			I('w', ['ww', 2], 'wo', 'week'),
				I('W', ['WW', 2], 'Wo', 'isoWeek'),
				S('week', 'w'),
				S('isoWeek', 'W'),
				tt('w', q),
				tt('ww', q, E),
				tt('W', q),
				tt('WW', q, E),
				it(['w', 'ww', 'W', 'WW'], function (t, e, n, i) {
					e[i.substr(0, 1)] = y(t)
				})
			function Wt(t, e, n) {
				return null != t ? t : null != e ? e : n
			}
			function Gt(t) {
				var e,
					n,
					i,
					s,
					r = []
				if (!t._d) {
					for (
						i = t,
							s = new Date(),
							n = i._useUTC
								? [s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()]
								: [s.getFullYear(), s.getMonth(), s.getDate()],
							t._w &&
								null == t._a[at] &&
								null == t._a[rt] &&
								(function (t) {
									var e, n, i, s, r, a
									null != (e = t._w).GG || null != e.W || null != e.E
										? ((a = 1),
										  (r = 4),
										  (n = Wt(e.GG, t._a[st], Ct(Ht(), 1, 4).year)),
										  (i = Wt(e.W, 1)),
										  (s = Wt(e.E, 1)))
										: ((a = t._locale._week.dow),
										  (r = t._locale._week.doy),
										  (n = Wt(e.gg, t._a[st], Ct(Ht(), a, r).year)),
										  (i = Wt(e.w, 1)),
										  null != e.d
												? (s = e.d) < a && ++i
												: (s = null != e.e ? e.e + a : a))
									;(a = (function (t, e, n, i, s) {
										var r = St(t, 0, 1).getUTCDay()
										return {
											year:
												0 <
												(s =
													7 * (e - 1) +
													((n = null != n ? n : s) - s) +
													(s -
														(r = 0 === r ? 7 : r) +
														(i < r ? 7 : 0) -
														(r < s ? 7 : 0)) +
													1)
													? t
													: t - 1,
											dayOfYear: 0 < s ? s : bt(t - 1) + s,
										}
									})(n, i, s, r, a)),
										(t._a[st] = a.year),
										(t._dayOfYear = a.dayOfYear)
								})(t),
							t._dayOfYear &&
								((s = Wt(t._a[st], n[st])),
								t._dayOfYear > bt(s) && (f(t)._overflowDayOfYear = !0),
								(s = St(s, 0, t._dayOfYear)),
								(t._a[rt] = s.getUTCMonth()),
								(t._a[at] = s.getUTCDate())),
							e = 0;
						e < 3 && null == t._a[e];
						++e
					)
						t._a[e] = r[e] = n[e]
					for (; e < 7; e++)
						t._a[e] = r[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e]
					24 === t._a[ot] &&
						0 === t._a[ut] &&
						0 === t._a[dt] &&
						0 === t._a[lt] &&
						((t._nextDay = !0), (t._a[ot] = 0)),
						(t._d = (t._useUTC ? St : Tt).apply(null, r)),
						null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
						t._nextDay && (t._a[ot] = 24)
				}
			}
			function Ft(t) {
				if (t._f !== c.ISO_8601) {
					;(t._a = []), (f(t).empty = !0)
					for (
						var e,
							n,
							i,
							s,
							r,
							a = '' + t._i,
							o = a.length,
							u = 0,
							d = z(t._f, t._locale).match(P) || [],
							l = 0;
						l < d.length;
						l++
					)
						(n = d[l]),
							(e = (a.match(
								((r = t),
								h(K, (s = n))
									? K[s](r._strict, r._locale)
									: new RegExp(
											s
												.replace('\\', '')
												.replace(
													/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
													function (t, e, n, i, s) {
														return e || n || i || s
													}
												)
												.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
									  ))
							) || [])[0]) &&
								(0 < (i = a.substr(0, a.indexOf(e))).length &&
									f(t).unusedInput.push(i),
								(a = a.slice(a.indexOf(e) + e.length)),
								(u += e.length)),
							x[n]
								? (e ? (f(t).empty = !1) : f(t).unusedTokens.push(n),
								  (r = n),
								  (s = t),
								  null != (i = e) && h(et, r) && et[r](i, s._a, s, r))
								: t._strict && !e && f(t).unusedTokens.push(n)
					;(f(t).charsLeftOver = o - u),
						0 < a.length && f(t).unusedInput.push(a),
						!0 === f(t).bigHour &&
							t._a[ot] <= 12 &&
							0 < t._a[ot] &&
							(f(t).bigHour = void 0),
						(t._a[ot] = (function (t, e, n) {
							if (null == n) return e
							return null != t.meridiemHour
								? t.meridiemHour(e, n)
								: null != t.isPM
								? ((n = t.isPM(n)) && e < 12 && (e += 12),
								  (e = n || 12 !== e ? e : 0))
								: e
						})(t._locale, t._a[ot], t._meridiem)),
						Gt(t),
						yt(t)
				} else kt(t)
			}
			function Pt(t) {
				var e = t._i,
					n = t._f
				return (
					(t._locale = t._locale || k(t._l)),
					null === e || (void 0 === n && '' === e)
						? u({
								nullInput: !0,
						  })
						: ('string' == typeof e && (t._i = e = t._locale.preparse(e)),
						  _(e)
								? new m(yt(e))
								: (s(n)
										? (function (t) {
												var e, n, i, s, r
												if (0 === t._f.length)
													return (
														(f(t).invalidFormat = !0), (t._d = new Date(NaN))
													)
												for (s = 0; s < t._f.length; s++)
													(r = 0),
														(e = l({}, t)),
														null != t._useUTC && (e._useUTC = t._useUTC),
														(e._f = t._f[s]),
														Ft(e),
														o(e) &&
															((r += f(e).charsLeftOver),
															(r += 10 * f(e).unusedTokens.length),
															(f(e).score = r),
															(null == i || r < i) && ((i = r), (n = e)))
												a(t, n || e)
										  })(t)
										: n
										? Ft(t)
										: i(e)
										? (t._d = e)
										: void 0 === (e = (n = t)._i)
										? (n._d = new Date())
										: i(e)
										? (n._d = new Date(+e))
										: 'string' == typeof e
										? (function (t) {
												var e = wt.exec(t._i)
												null === e
													? (kt(t),
													  !1 === t._isValid &&
															(delete t._isValid, c.createFromInputFallback(t)))
													: (t._d = new Date(+e[1]))
										  })(n)
										: s(e)
										? ((n._a = (function (t, e) {
												for (var n = [], i = 0; i < t.length; ++i)
													n.push(e(t[i], i))
												return n
										  })(e.slice(0), function (t) {
												return parseInt(t, 10)
										  })),
										  Gt(n))
										: 'object' == typeof e
										? (function (t) {
												var e
												t._d ||
													((e = O(t._i)),
													(t._a = [
														e.year,
														e.month,
														e.day || e.date,
														e.hour,
														e.minute,
														e.second,
														e.millisecond,
													]),
													Gt(t))
										  })(n)
										: 'number' == typeof e
										? (n._d = new Date(e))
										: c.createFromInputFallback(n),
								  (t = new m(yt(t)))._nextDay &&
										(t.add(1, 'd'), (t._nextDay = void 0)),
								  t))
				)
			}
			function Lt(t, e, n, i, s) {
				var r = {}
				return (
					'boolean' == typeof n && ((i = n), (n = void 0)),
					(r._isAMomentObject = !0),
					(r._useUTC = r._isUTC = s),
					(r._l = n),
					(r._i = t),
					(r._f = e),
					(r._strict = i),
					Pt(r)
				)
			}
			function Ht(t, e, n, i) {
				return Lt(t, e, n, i, !1)
			}
			I('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
				S('dayOfYear', 'DDD'),
				tt('DDD', J),
				tt('DDDD', N),
				nt(['DDD', 'DDDD'], function (t, e, n) {
					n._dayOfYear = y(t)
				}),
				(c.ISO_8601 = function () {})
			var xt = gt(
					'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
					function () {
						var t = Ht.apply(null, arguments)
						return t < this ? this : t
					}
				),
				It = gt(
					'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
					function () {
						var t = Ht.apply(null, arguments)
						return this < t ? this : t
					}
				)
			function At(t, e) {
				var n, i
				if (!(e = 1 === e.length && s(e[0]) ? e[0] : e).length) return Ht()
				for (n = e[0], i = 1; i < e.length; ++i) e[i][t](n) && (n = e[i])
				return n
			}
			function zt(t) {
				var e = O(t),
					n = e.year || 0,
					i = e.quarter || 0,
					s = e.month || 0,
					r = e.week || 0,
					a = e.day || 0,
					o = e.hour || 0,
					u = e.minute || 0,
					t = e.second || 0,
					e = e.millisecond || 0
				;(this._milliseconds = +e + 1e3 * t + 6e4 * u + 36e5 * o),
					(this._days = +a + 7 * r),
					(this._months = +s + 3 * i + 12 * n),
					(this._data = {}),
					(this._locale = k()),
					this._bubble()
			}
			function Zt(t) {
				return t instanceof zt
			}
			function Et(t, n) {
				I(t, 0, 0, function () {
					var t = this.utcOffset(),
						e = '+'
					return (
						t < 0 && ((t = -t), (e = '-')),
						e + F(~~(t / 60), 2) + n + F(~~t % 60, 2)
					)
				})
			}
			Et('Z', ':'),
				Et('ZZ', ''),
				tt('Z', Q),
				tt('ZZ', Q),
				nt(['Z', 'ZZ'], function (t, e, n) {
					;(n._useUTC = !0), (n._tzm = jt(t))
				})
			var Nt = /([\+\-]|\d\d)/gi
			function jt(t) {
				var e = (t || '').match(Q) || [],
					t = ((e[e.length - 1] || []) + '').match(Nt) || ['-', 0, 0],
					e = 60 * t[1] + y(t[2])
				return '+' === t[0] ? e : -e
			}
			function Vt(t, e) {
				var n
				return e._isUTC
					? ((n = e.clone()),
					  (e = (_(t) || i(t) ? +t : +Ht(t)) - +n),
					  n._d.setTime(+n._d + e),
					  c.updateOffset(n, !1),
					  n)
					: Ht(t).local()
			}
			function qt(t) {
				return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
			}
			function Jt() {
				return this._isUTC && 0 === this._offset
			}
			c.updateOffset = function () {}
			var $t = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
				Rt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/
			function Bt(t, e) {
				var n,
					i = t,
					s = null
				return (
					Zt(t)
						? (i = {
								ms: t._milliseconds,
								d: t._days,
								M: t._months,
						  })
						: 'number' == typeof t
						? ((i = {}), e ? (i[e] = t) : (i.milliseconds = t))
						: (s = $t.exec(t))
						? ((n = '-' === s[1] ? -1 : 1),
						  (i = {
								y: 0,
								d: y(s[at]) * n,
								h: y(s[ot]) * n,
								m: y(s[ut]) * n,
								s: y(s[dt]) * n,
								ms: y(s[lt]) * n,
						  }))
						: (s = Rt.exec(t))
						? ((n = '-' === s[1] ? -1 : 1),
						  (i = {
								y: Qt(s[2], n),
								M: Qt(s[3], n),
								d: Qt(s[4], n),
								h: Qt(s[5], n),
								m: Qt(s[6], n),
								s: Qt(s[7], n),
								w: Qt(s[8], n),
						  }))
						: null == i
						? (i = {})
						: 'object' == typeof i &&
						  ('from' in i || 'to' in i) &&
						  ((n = (function (t, e) {
								var n
								;(e = Vt(e, t)),
									t.isBefore(e)
										? (n = Xt(t, e))
										: (((n = Xt(e, t)).milliseconds = -n.milliseconds),
										  (n.months = -n.months))
								return n
						  })(Ht(i.from), Ht(i.to))),
						  ((i = {}).ms = n.milliseconds),
						  (i.M = n.months)),
					(i = new zt(i)),
					Zt(t) && h(t, '_locale') && (i._locale = t._locale),
					i
				)
			}
			function Qt(t, e) {
				t = t && parseFloat(t.replace(',', '.'))
				return (isNaN(t) ? 0 : t) * e
			}
			function Xt(t, e) {
				var n = {
					milliseconds: 0,
					months: 0,
				}
				return (
					(n.months = e.month() - t.month() + 12 * (e.year() - t.year())),
					t.clone().add(n.months, 'M').isAfter(e) && --n.months,
					(n.milliseconds = +e - +t.clone().add(n.months, 'M')),
					n
				)
			}
			function Kt(s, r) {
				return function (t, e) {
					var n, i
					return (
						null === e ||
							isNaN(+e) ||
							((i =
								'moment().' +
								(n = r) +
								'(period, number) is deprecated. Please use moment().' +
								r +
								'(number, period).'),
							Dt[n] || (pt(i), (Dt[n] = !0)),
							(n = t),
							(t = e),
							(e = n)),
						te(this, Bt((t = 'string' == typeof t ? +t : t), e), s),
						this
					)
				}
			}
			function te(t, e, n, i) {
				var s = e._milliseconds,
					r = e._days,
					e = e._months
				;(i = null == i || i),
					s && t._d.setTime(+t._d + s * n),
					r && W(t, 'Date', C(t, 'Date') + r * n),
					e && mt(t, C(t, 'Month') + e * n),
					i && c.updateOffset(t, r || e)
			}
			Bt.fn = zt.prototype
			var ee = Kt(1, 'add'),
				ne = Kt(-1, 'subtract')
			function ie(t) {
				return t < 0 ? Math.ceil(t) : Math.floor(t)
			}
			function se() {
				var t = this.clone().utc()
				return 0 < t.year() && t.year() <= 9999
					? 'function' == typeof Date.prototype.toISOString
						? this.toDate().toISOString()
						: A(t, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
					: A(t, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
			}
			function re(t) {
				return void 0 === t
					? this._locale._abbr
					: (null != (t = k(t)) && (this._locale = t), this)
			}
			c.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'
			var ae = gt(
				'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
				function (t) {
					return void 0 === t ? this.localeData() : this.locale(t)
				}
			)
			function oe() {
				return this._locale
			}
			function ue(t, e) {
				I(0, [t, t.length], 0, e)
			}
			function de(t, e, n) {
				return Ct(Ht([t, 11, 31 + e - n]), e, n).week
			}
			I(0, ['gg', 2], 0, function () {
				return this.weekYear() % 100
			}),
				I(0, ['GG', 2], 0, function () {
					return this.isoWeekYear() % 100
				}),
				ue('gggg', 'weekYear'),
				ue('ggggg', 'weekYear'),
				ue('GGGG', 'isoWeekYear'),
				ue('GGGGG', 'isoWeekYear'),
				S('weekYear', 'gg'),
				S('isoWeekYear', 'GG'),
				tt('G', B),
				tt('g', B),
				tt('GG', q, E),
				tt('gg', q, E),
				tt('GGGG', $, j),
				tt('gggg', $, j),
				tt('GGGGG', R, V),
				tt('ggggg', R, V),
				it(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (t, e, n, i) {
					e[i.substr(0, 2)] = y(t)
				}),
				it(['gg', 'GG'], function (t, e, n, i) {
					e[i] = c.parseTwoDigitYear(t)
				}),
				I('Q', 0, 0, 'quarter'),
				S('quarter', 'Q'),
				tt('Q', Z),
				nt('Q', function (t, e) {
					e[rt] = 3 * (y(t) - 1)
				}),
				I('D', ['DD', 2], 'Do', 'date'),
				S('date', 'D'),
				tt('D', q),
				tt('DD', q, E),
				tt('Do', function (t, e) {
					return t ? e._ordinalParse : e._ordinalParseLenient
				}),
				nt(['D', 'DD'], at),
				nt('Do', function (t, e) {
					e[at] = y(t.match(q)[0])
				})
			var le = U('Date', !0)
			I('d', 0, 'do', 'day'),
				I('dd', 0, 0, function (t) {
					return this.localeData().weekdaysMin(this, t)
				}),
				I('ddd', 0, 0, function (t) {
					return this.localeData().weekdaysShort(this, t)
				}),
				I('dddd', 0, 0, function (t) {
					return this.localeData().weekdays(this, t)
				}),
				I('e', 0, 0, 'weekday'),
				I('E', 0, 0, 'isoWeekday'),
				S('day', 'd'),
				S('weekday', 'e'),
				S('isoWeekday', 'E'),
				tt('d', q),
				tt('e', q),
				tt('E', q),
				tt('dd', X),
				tt('ddd', X),
				tt('dddd', X),
				it(['dd', 'ddd', 'dddd'], function (t, e, n) {
					var i = n._locale.weekdaysParse(t)
					null != i ? (e.d = i) : (f(n).invalidWeekday = t)
				}),
				it(['d', 'e', 'E'], function (t, e, n, i) {
					e[i] = y(t)
				})
			var ce = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
				'_'
			)
			$ = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_')
			j = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_')
			function he(t, e) {
				I(t, 0, 0, function () {
					return this.localeData().meridiem(this.hours(), this.minutes(), e)
				})
			}
			function fe(t, e) {
				return e._meridiemParse
			}
			I('H', ['HH', 2], 0, 'hour'),
				I('h', ['hh', 2], 0, function () {
					return this.hours() % 12 || 12
				}),
				he('a', !0),
				he('A', !1),
				S('hour', 'h'),
				tt('a', fe),
				tt('A', fe),
				tt('H', q),
				tt('h', q),
				tt('HH', q, E),
				tt('hh', q, E),
				nt(['H', 'HH'], ot),
				nt(['a', 'A'], function (t, e, n) {
					;(n._isPm = n._locale.isPM(t)), (n._meridiem = t)
				}),
				nt(['h', 'hh'], function (t, e, n) {
					;(e[ot] = y(t)), (f(n).bigHour = !0)
				})
			R = U('Hours', !0)
			I('m', ['mm', 2], 0, 'minute'),
				S('minute', 'm'),
				tt('m', q),
				tt('mm', q, E),
				nt(['m', 'mm'], ut)
			V = U('Minutes', !1)
			I('s', ['ss', 2], 0, 'second'),
				S('second', 's'),
				tt('s', q),
				tt('ss', q, E),
				nt(['s', 'ss'], dt)
			X = U('Seconds', !1)
			function me(t) {
				I(0, [t, 3], 0, 'millisecond')
			}
			I('S', 0, 0, function () {
				return ~~(this.millisecond() / 100)
			}),
				I(0, ['SS', 2], 0, function () {
					return ~~(this.millisecond() / 10)
				}),
				me('SSS'),
				me('SSSS'),
				S('millisecond', 'ms'),
				tt('S', J, Z),
				tt('SS', J, E),
				tt('SSS', J, N),
				tt('SSSS', /\d+/),
				nt(['S', 'SS', 'SSS', 'SSSS'], function (t, e) {
					e[lt] = y(1e3 * ('0.' + t))
				})
			E = U('Milliseconds', !1)
			I('z', 0, 0, 'zoneAbbr'), I('zz', 0, 0, 'zoneName')
			J = m.prototype
			;(J.add = ee),
				(J.calendar = function (t) {
					var e = t || Ht(),
						t = Vt(e, this).startOf('day'),
						t =
							(t = this.diff(t, 'days', !0)) < -6
								? 'sameElse'
								: t < -1
								? 'lastWeek'
								: t < 0
								? 'lastDay'
								: t < 1
								? 'sameDay'
								: t < 2
								? 'nextDay'
								: t < 7
								? 'nextWeek'
								: 'sameElse'
					return this.format(this.localeData().calendar(t, this, Ht(e)))
				}),
				(J.clone = function () {
					return new m(this)
				}),
				(J.diff = function (t, e, n) {
					var i,
						s = Vt(t, this),
						t = 6e4 * (s.utcOffset() - this.utcOffset())
					return (
						'year' === (e = b(e)) || 'month' === e || 'quarter' === e
							? ((i = (function (t, e) {
									var n,
										i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
										s = t.clone().add(i, 'months')
									s =
										e - s < 0
											? ((n = t.clone().add(i - 1, 'months')),
											  (e - s) / (s - n))
											: ((n = t.clone().add(1 + i, 'months')),
											  (e - s) / (n - s))
									return -(i + s)
							  })(this, s)),
							  'quarter' === e ? (i /= 3) : 'year' === e && (i /= 12))
							: ((s = this - s),
							  (i =
									'second' === e
										? s / 1e3
										: 'minute' === e
										? s / 6e4
										: 'hour' === e
										? s / 36e5
										: 'day' === e
										? (s - t) / 864e5
										: 'week' === e
										? (s - t) / 6048e5
										: s)),
						n ? i : ie(i)
					)
				}),
				(J.endOf = function (t) {
					return void 0 === (t = b(t)) || 'millisecond' === t
						? this
						: this.startOf(t)
								.add(1, 'isoWeek' === t ? 'week' : t)
								.subtract(1, 'ms')
				}),
				(J.format = function (t) {
					return (
						(t = A(this, t || c.defaultFormat)), this.localeData().postformat(t)
					)
				}),
				(J.from = function (t, e) {
					return this.isValid()
						? Bt({
								to: this,
								from: t,
						  })
								.locale(this.locale())
								.humanize(!e)
						: this.localeData().invalidDate()
				}),
				(J.fromNow = function (t) {
					return this.from(Ht(), t)
				}),
				(J.to = function (t, e) {
					return this.isValid()
						? Bt({
								from: this,
								to: t,
						  })
								.locale(this.locale())
								.humanize(!e)
						: this.localeData().invalidDate()
				}),
				(J.toNow = function (t) {
					return this.to(Ht(), t)
				}),
				(J.get = G),
				(J.invalidAt = function () {
					return f(this).overflow
				}),
				(J.isAfter = function (t, e) {
					return 'millisecond' === (e = b(void 0 !== e ? e : 'millisecond'))
						? +(t = _(t) ? t : Ht(t)) < +this
						: (_(t) ? +t : +Ht(t)) < +this.clone().startOf(e)
				}),
				(J.isBefore = function (t, e) {
					return 'millisecond' === (e = b(void 0 !== e ? e : 'millisecond'))
						? +this < +(t = _(t) ? t : Ht(t))
						: ((t = _(t) ? +t : +Ht(t)), +this.clone().endOf(e) < t)
				}),
				(J.isBetween = function (t, e, n) {
					return this.isAfter(t, n) && this.isBefore(e, n)
				}),
				(J.isSame = function (t, e) {
					return 'millisecond' === (e = b(e || 'millisecond'))
						? +this == +(t = _(t) ? t : Ht(t))
						: ((t = +Ht(t)),
						  +this.clone().startOf(e) <= t && t <= +this.clone().endOf(e))
				}),
				(J.isValid = function () {
					return o(this)
				}),
				(J.lang = ae),
				(J.locale = re),
				(J.localeData = oe),
				(J.max = It),
				(J.min = xt),
				(J.parsingFlags = function () {
					return a({}, f(this))
				}),
				(J.set = G),
				(J.startOf = function (t) {
					switch ((t = b(t))) {
						case 'year':
							this.month(0)
						case 'quarter':
						case 'month':
							this.date(1)
						case 'week':
						case 'isoWeek':
						case 'day':
							this.hours(0)
						case 'hour':
							this.minutes(0)
						case 'minute':
							this.seconds(0)
						case 'second':
							this.milliseconds(0)
					}
					return (
						'week' === t && this.weekday(0),
						'isoWeek' === t && this.isoWeekday(1),
						'quarter' === t && this.month(3 * Math.floor(this.month() / 3)),
						this
					)
				}),
				(J.subtract = ne),
				(J.toArray = function () {
					var t = this
					return [
						t.year(),
						t.month(),
						t.date(),
						t.hour(),
						t.minute(),
						t.second(),
						t.millisecond(),
					]
				}),
				(J.toDate = function () {
					return this._offset ? new Date(+this) : this._d
				}),
				(J.toISOString = se),
				(J.toJSON = se),
				(J.toString = function () {
					return this.clone()
						.locale('en')
						.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
				}),
				(J.unix = function () {
					return Math.floor(+this / 1e3)
				}),
				(J.valueOf = function () {
					return +this._d - 6e4 * (this._offset || 0)
				}),
				(J.year = Ut),
				(J.isLeapYear = function () {
					return Ot(this.year())
				}),
				(J.weekYear = function (t) {
					var e = Ct(
						this,
						this.localeData()._week.dow,
						this.localeData()._week.doy
					).year
					return null == t ? e : this.add(t - e, 'y')
				}),
				(J.isoWeekYear = function (t) {
					var e = Ct(this, 1, 4).year
					return null == t ? e : this.add(t - e, 'y')
				}),
				(J.quarter = J.quarters = function (t) {
					return null == t
						? Math.ceil((this.month() + 1) / 3)
						: this.month(3 * (t - 1) + (this.month() % 3))
				}),
				(J.month = _t),
				(J.daysInMonth = function () {
					return ct(this.year(), this.month())
				}),
				(J.week = J.weeks = function (t) {
					var e = this.localeData().week(this)
					return null == t ? e : this.add(7 * (t - e), 'd')
				}),
				(J.isoWeek = J.isoWeeks = function (t) {
					var e = Ct(this, 1, 4).week
					return null == t ? e : this.add(7 * (t - e), 'd')
				}),
				(J.weeksInYear = function () {
					var t = this.localeData()._week
					return de(this.year(), t.dow, t.doy)
				}),
				(J.isoWeeksInYear = function () {
					return de(this.year(), 1, 4)
				}),
				(J.date = le),
				(J.day = J.days = function (t) {
					var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay()
					return null != t
						? ((t = (function (t, e) {
								if ('string' == typeof t)
									if (isNaN(t)) {
										if ('number' != typeof (t = e.weekdaysParse(t))) return null
									} else t = parseInt(t, 10)
								return t
						  })(t, this.localeData())),
						  this.add(t - e, 'd'))
						: e
				}),
				(J.weekday = function (t) {
					var e = (this.day() + 7 - this.localeData()._week.dow) % 7
					return null == t ? e : this.add(t - e, 'd')
				}),
				(J.isoWeekday = function (t) {
					return null == t
						? this.day() || 7
						: this.day(this.day() % 7 ? t : t - 7)
				}),
				(J.dayOfYear = function (t) {
					var e =
						Math.round(
							(this.clone().startOf('day') - this.clone().startOf('year')) /
								864e5
						) + 1
					return null == t ? e : this.add(t - e, 'd')
				}),
				(J.hour = J.hours = R),
				(J.minute = J.minutes = V),
				(J.second = J.seconds = X),
				(J.millisecond = J.milliseconds = E),
				(J.utcOffset = function (t, e) {
					var n,
						i = this._offset || 0
					return null != t
						? ('string' == typeof t && (t = jt(t)),
						  Math.abs(t) < 16 && (t *= 60),
						  !this._isUTC && e && (n = qt(this)),
						  (this._offset = t),
						  (this._isUTC = !0),
						  null != n && this.add(n, 'm'),
						  i !== t &&
								(!e || this._changeInProgress
									? te(this, Bt(t - i, 'm'), 1, !1)
									: this._changeInProgress ||
									  ((this._changeInProgress = !0),
									  c.updateOffset(this, !0),
									  (this._changeInProgress = null))),
						  this)
						: this._isUTC
						? i
						: qt(this)
				}),
				(J.utc = function (t) {
					return this.utcOffset(0, t)
				}),
				(J.local = function (t) {
					return (
						this._isUTC &&
							(this.utcOffset(0, t),
							(this._isUTC = !1),
							t && this.subtract(qt(this), 'm')),
						this
					)
				}),
				(J.parseZone = function () {
					return (
						this._tzm
							? this.utcOffset(this._tzm)
							: 'string' == typeof this._i && this.utcOffset(jt(this._i)),
						this
					)
				}),
				(J.hasAlignedHourOffset = function (t) {
					return (
						(t = t ? Ht(t).utcOffset() : 0), (this.utcOffset() - t) % 60 == 0
					)
				}),
				(J.isDST = function () {
					return (
						this.utcOffset() > this.clone().month(0).utcOffset() ||
						this.utcOffset() > this.clone().month(5).utcOffset()
					)
				}),
				(J.isDSTShifted = function () {
					if (this._a) {
						var t = (this._isUTC ? r : Ht)(this._a)
						return this.isValid() && 0 < p(this._a, t.toArray())
					}
					return !1
				}),
				(J.isLocal = function () {
					return !this._isUTC
				}),
				(J.isUtcOffset = function () {
					return this._isUTC
				}),
				(J.isUtc = Jt),
				(J.isUTC = Jt),
				(J.zoneAbbr = function () {
					return this._isUTC ? 'UTC' : ''
				}),
				(J.zoneName = function () {
					return this._isUTC ? 'Coordinated Universal Time' : ''
				}),
				(J.dates = gt('dates accessor is deprecated. Use date instead.', le)),
				(J.months = gt('months accessor is deprecated. Use month instead', _t)),
				(J.years = gt('years accessor is deprecated. Use year instead', Ut)),
				(J.zone = gt(
					'moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779',
					function (t, e) {
						return null != t
							? (this.utcOffset((t = 'string' != typeof t ? -t : t), e), this)
							: -this.utcOffset()
					}
				))
			N = J
			function _e(t) {
				return t
			}
			ee = n.prototype
			function ye(t, e, n, i) {
				var s = k(),
					e = r().set(i, e)
				return s[n](e, t)
			}
			function pe(t, e, n, i, s) {
				if (
					('number' == typeof t && ((e = t), (t = void 0)),
					(t = t || ''),
					null != e)
				)
					return ye(t, e, n, s)
				for (var r = [], a = 0; a < i; a++) r[a] = ye(t, a, n, s)
				return r
			}
			;(ee._calendar = {
				sameDay: '[Today at] LT',
				nextDay: '[Tomorrow at] LT',
				nextWeek: 'dddd [at] LT',
				lastDay: '[Yesterday at] LT',
				lastWeek: '[Last] dddd [at] LT',
				sameElse: 'L',
			}),
				(ee.calendar = function (t, e, n) {
					return 'function' == typeof (t = this._calendar[t]) ? t.call(e, n) : t
				}),
				(ee._longDateFormat = {
					LTS: 'h:mm:ss A',
					LT: 'h:mm A',
					L: 'MM/DD/YYYY',
					LL: 'MMMM D, YYYY',
					LLL: 'MMMM D, YYYY LT',
					LLLL: 'dddd, MMMM D, YYYY LT',
				}),
				(ee.longDateFormat = function (t) {
					var e = this._longDateFormat[t]
					return (
						!e &&
							this._longDateFormat[t.toUpperCase()] &&
							((e = this._longDateFormat[t.toUpperCase()].replace(
								/MMMM|MM|DD|dddd/g,
								function (t) {
									return t.slice(1)
								}
							)),
							(this._longDateFormat[t] = e)),
						e
					)
				}),
				(ee._invalidDate = 'Invalid date'),
				(ee.invalidDate = function () {
					return this._invalidDate
				}),
				(ee._ordinal = '%d'),
				(ee.ordinal = function (t) {
					return this._ordinal.replace('%d', t)
				}),
				(ee._ordinalParse = /\d{1,2}/),
				(ee.preparse = _e),
				(ee.postformat = _e),
				(ee._relativeTime = {
					future: 'in %s',
					past: '%s ago',
					s: 'a few seconds',
					m: 'a minute',
					mm: '%d minutes',
					h: 'an hour',
					hh: '%d hours',
					d: 'a day',
					dd: '%d days',
					M: 'a month',
					MM: '%d months',
					y: 'a year',
					yy: '%d years',
				}),
				(ee.relativeTime = function (t, e, n, i) {
					var s = this._relativeTime[n]
					return 'function' == typeof s ? s(t, e, n, i) : s.replace(/%d/i, t)
				}),
				(ee.pastFuture = function (t, e) {
					return 'function' ==
						typeof (t = this._relativeTime[0 < t ? 'future' : 'past'])
						? t(e)
						: t.replace(/%s/i, e)
				}),
				(ee.set = function (t) {
					var e, n
					for (n in t)
						'function' == typeof (e = t[n])
							? (this[n] = e)
							: (this['_' + n] = e)
					this._ordinalParseLenient = new RegExp(
						this._ordinalParse.source + '|' + /\d{1,2}/.source
					)
				}),
				(ee.months = function (t) {
					return this._months[t.month()]
				}),
				(ee._months = ht),
				(ee.monthsShort = function (t) {
					return this._monthsShort[t.month()]
				}),
				(ee._monthsShort = ft),
				(ee.monthsParse = function (t, e, n) {
					var i, s
					for (
						this._monthsParse ||
							((this._monthsParse = []),
							(this._longMonthsParse = []),
							(this._shortMonthsParse = [])),
							i = 0;
						i < 12;
						i++
					) {
						if (
							((s = r([2e3, i])),
							n &&
								!this._longMonthsParse[i] &&
								((this._longMonthsParse[i] = new RegExp(
									'^' + this.months(s, '').replace('.', '') + '$',
									'i'
								)),
								(this._shortMonthsParse[i] = new RegExp(
									'^' + this.monthsShort(s, '').replace('.', '') + '$',
									'i'
								))),
							n ||
								this._monthsParse[i] ||
								((s =
									'^' + this.months(s, '') + '|^' + this.monthsShort(s, '')),
								(this._monthsParse[i] = new RegExp(s.replace('.', ''), 'i'))),
							n && 'MMMM' === e && this._longMonthsParse[i].test(t))
						)
							return i
						if (n && 'MMM' === e && this._shortMonthsParse[i].test(t)) return i
						if (!n && this._monthsParse[i].test(t)) return i
					}
				}),
				(ee.week = function (t) {
					return Ct(t, this._week.dow, this._week.doy).week
				}),
				(ee._week = {
					dow: 0,
					doy: 6,
				}),
				(ee.firstDayOfYear = function () {
					return this._week.doy
				}),
				(ee.firstDayOfWeek = function () {
					return this._week.dow
				}),
				(ee.weekdays = function (t) {
					return this._weekdays[t.day()]
				}),
				(ee._weekdays = ce),
				(ee.weekdaysMin = function (t) {
					return this._weekdaysMin[t.day()]
				}),
				(ee._weekdaysMin = j),
				(ee.weekdaysShort = function (t) {
					return this._weekdaysShort[t.day()]
				}),
				(ee._weekdaysShort = $),
				(ee.weekdaysParse = function (t) {
					var e, n
					for (
						this._weekdaysParse || (this._weekdaysParse = []), e = 0;
						e < 7;
						e++
					)
						if (
							(this._weekdaysParse[e] ||
								((n = Ht([2e3, 1]).day(e)),
								(n =
									'^' +
									this.weekdays(n, '') +
									'|^' +
									this.weekdaysShort(n, '') +
									'|^' +
									this.weekdaysMin(n, '')),
								(this._weekdaysParse[e] = new RegExp(n.replace('.', ''), 'i'))),
							this._weekdaysParse[e].test(t))
						)
							return e
				}),
				(ee.isPM = function (t) {
					return 'p' === (t + '').toLowerCase().charAt(0)
				}),
				(ee._meridiemParse = /[ap]\.?m?\.?/i),
				(ee.meridiem = function (t, e, n) {
					return 11 < t ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM'
				}),
				Y('en', {
					ordinalParse: /\d{1,2}(th|st|nd|rd)/,
					ordinal: function (t) {
						var e = t % 10
						return (
							t +
							(1 === y((t % 100) / 10)
								? 'th'
								: 1 == e
								? 'st'
								: 2 == e
								? 'nd'
								: 3 == e
								? 'rd'
								: 'th')
						)
					},
				}),
				(c.lang = gt(
					'moment.lang is deprecated. Use moment.locale instead.',
					Y
				)),
				(c.langData = gt(
					'moment.langData is deprecated. Use moment.localeData instead.',
					k
				))
			var ge = Math.abs
			function De(t, e, n, i) {
				n = Bt(e, n)
				return (
					(t._milliseconds += i * n._milliseconds),
					(t._days += i * n._days),
					(t._months += i * n._months),
					t._bubble()
				)
			}
			function ve(t) {
				return (400 * t) / 146097
			}
			function Me(t) {
				return (146097 * t) / 400
			}
			function Ye(t) {
				return function () {
					return this.as(t)
				}
			}
			;(It = Ye('ms')),
				(xt = Ye('s')),
				(ne = Ye('m')),
				(R = Ye('h')),
				(V = Ye('d')),
				(X = Ye('w')),
				(E = Ye('M')),
				(le = Ye('y'))
			function we(t) {
				return function () {
					return this._data[t]
				}
			}
			;(Ut = we('milliseconds')),
				(J = we('seconds')),
				(ht = we('minutes')),
				(ft = we('hours')),
				(ce = we('days')),
				(j = we('months')),
				($ = we('years'))
			var ke = Math.round,
				Te = {
					s: 45,
					m: 45,
					h: 22,
					d: 26,
					M: 11,
				}
			function Se(t, e, n) {
				var i = Bt(t).abs(),
					s = ke(i.as('s')),
					r = ke(i.as('m')),
					a = ke(i.as('h')),
					o = ke(i.as('d')),
					u = ke(i.as('M')),
					i = ke(i.as('y')),
					i = (s < Te.s ? ['s', s] : 1 === r && ['m']) ||
						(r < Te.m && ['mm', r]) ||
						(1 === a && ['h']) ||
						(a < Te.h && ['hh', a]) ||
						(1 === o && ['d']) ||
						(o < Te.d && ['dd', o]) ||
						(1 === u && ['M']) ||
						(u < Te.M && ['MM', u]) ||
						(1 === i && ['y']) || ['yy', i]
				return (
					(i[2] = e),
					(i[3] = 0 < +t),
					(i[4] = n),
					function (t, e, n, i, s) {
						return s.relativeTime(e || 1, !!n, t, i)
					}.apply(null, i)
				)
			}
			var be = Math.abs
			function Oe() {
				var t = be(this.years()),
					e = be(this.months()),
					n = be(this.days()),
					i = be(this.hours()),
					s = be(this.minutes()),
					r = be(this.seconds() + this.milliseconds() / 1e3),
					a = this.asSeconds()
				return a
					? (a < 0 ? '-' : '') +
							'P' +
							(t ? t + 'Y' : '') +
							(e ? e + 'M' : '') +
							(n ? n + 'D' : '') +
							(i || s || r ? 'T' : '') +
							(i ? i + 'H' : '') +
							(s ? s + 'M' : '') +
							(r ? r + 'S' : '')
					: 'P0D'
			}
			ee = zt.prototype
			return (
				(ee.abs = function () {
					var t = this._data
					return (
						(this._milliseconds = ge(this._milliseconds)),
						(this._days = ge(this._days)),
						(this._months = ge(this._months)),
						(t.milliseconds = ge(t.milliseconds)),
						(t.seconds = ge(t.seconds)),
						(t.minutes = ge(t.minutes)),
						(t.hours = ge(t.hours)),
						(t.months = ge(t.months)),
						(t.years = ge(t.years)),
						this
					)
				}),
				(ee.add = function (t, e) {
					return De(this, t, e, 1)
				}),
				(ee.subtract = function (t, e) {
					return De(this, t, e, -1)
				}),
				(ee.as = function (t) {
					var e,
						n,
						i = this._milliseconds
					if ('month' === (t = b(t)) || 'year' === t)
						return (
							(e = this._days + i / 864e5),
							(n = this._months + 12 * ve(e)),
							'month' === t ? n : n / 12
						)
					switch (((e = this._days + Math.round(Me(this._months / 12))), t)) {
						case 'week':
							return e / 7 + i / 6048e5
						case 'day':
							return e + i / 864e5
						case 'hour':
							return 24 * e + i / 36e5
						case 'minute':
							return 1440 * e + i / 6e4
						case 'second':
							return 86400 * e + i / 1e3
						case 'millisecond':
							return Math.floor(864e5 * e) + i
						default:
							throw new Error('Unknown unit ' + t)
					}
				}),
				(ee.asMilliseconds = It),
				(ee.asSeconds = xt),
				(ee.asMinutes = ne),
				(ee.asHours = R),
				(ee.asDays = V),
				(ee.asWeeks = X),
				(ee.asMonths = E),
				(ee.asYears = le),
				(ee.valueOf = function () {
					return (
						this._milliseconds +
						864e5 * this._days +
						(this._months % 12) * 2592e6 +
						31536e6 * y(this._months / 12)
					)
				}),
				(ee._bubble = function () {
					var t = this._milliseconds,
						e = this._days,
						n = this._months,
						i = this._data
					return (
						(i.milliseconds = t % 1e3),
						(t = ie(t / 1e3)),
						(i.seconds = t % 60),
						(t = ie(t / 60)),
						(i.minutes = t % 60),
						(t = ie(t / 60)),
						(i.hours = t % 24),
						(e += ie(t / 24)),
						(t = ie(ve(e))),
						(e -= ie(Me(t))),
						(n += ie(e / 30)),
						(e %= 30),
						(t += ie(n / 12)),
						(n %= 12),
						(i.days = e),
						(i.months = n),
						(i.years = t),
						this
					)
				}),
				(ee.get = function (t) {
					return this[(t = b(t)) + 's']()
				}),
				(ee.milliseconds = Ut),
				(ee.seconds = J),
				(ee.minutes = ht),
				(ee.hours = ft),
				(ee.days = ce),
				(ee.weeks = function () {
					return ie(this.days() / 7)
				}),
				(ee.months = j),
				(ee.years = $),
				(ee.humanize = function (t) {
					var e = this.localeData(),
						n = Se(this, !t, e)
					return t && (n = e.pastFuture(+this, n)), e.postformat(n)
				}),
				(ee.toISOString = Oe),
				(ee.toString = Oe),
				(ee.toJSON = Oe),
				(ee.locale = re),
				(ee.localeData = oe),
				(ee.toIsoString = gt(
					'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
					Oe
				)),
				(ee.lang = ae),
				I('X', 0, 0, 'unix'),
				I('x', 0, 0, 'valueOf'),
				tt('x', B),
				tt('X', /[+-]?\d+(\.\d{1,3})?/),
				nt('X', function (t, e, n) {
					n._d = new Date(1e3 * parseFloat(t, 10))
				}),
				nt('x', function (t, e, n) {
					n._d = new Date(y(t))
				}),
				(c.version = '2.10.3'),
				(t = Ht),
				(c.fn = N),
				(c.min = function () {
					return At('isBefore', [].slice.call(arguments, 0))
				}),
				(c.max = function () {
					return At('isAfter', [].slice.call(arguments, 0))
				}),
				(c.utc = r),
				(c.unix = function (t) {
					return Ht(1e3 * t)
				}),
				(c.months = function (t, e) {
					return pe(t, e, 'months', 12, 'month')
				}),
				(c.isDate = i),
				(c.locale = Y),
				(c.invalid = u),
				(c.duration = Bt),
				(c.isMoment = _),
				(c.weekdays = function (t, e) {
					return pe(t, e, 'weekdays', 7, 'day')
				}),
				(c.parseZone = function () {
					return Ht.apply(null, arguments).parseZone()
				}),
				(c.localeData = k),
				(c.isDuration = Zt),
				(c.monthsShort = function (t, e) {
					return pe(t, e, 'monthsShort', 12, 'month')
				}),
				(c.weekdaysMin = function (t, e) {
					return pe(t, e, 'weekdaysMin', 7, 'day')
				}),
				(c.defineLocale = w),
				(c.weekdaysShort = function (t, e) {
					return pe(t, e, 'weekdaysShort', 7, 'day')
				}),
				(c.normalizeUnits = b),
				(c.relativeTimeThreshold = function (t, e) {
					return void 0 !== Te[t] && (void 0 === e ? Te[t] : ((Te[t] = e), !0))
				}),
				c
			)
		}),
		'object' == typeof t && void 0 !== Ce
			? (Ce.exports = n())
			: 'function' == typeof define && define.amd
			? define(n)
			: (e.moment = n())
})
