define('magix', ['jquery'], function (t) {
	function e(t, n) {
		t ? seajs.use(t, n) : n && n()
	}
	function o() {}
	function c(t, n, e, r, i) {
		return (
			(o[U] = n[U]),
			(i = new o()),
			E(i, e),
			E(t, r),
			((i.constructor = t)[U] = i),
			t
		)
	}
	function r(t, n) {
		h(t).html(n)
	}
	function n() {}
	function u(t) {
		return (t || 'mx_') + v++
	}
	function a(t) {
		return 'object' == typeof t ? t : x.getElementById(t)
	}
	function i(t, n, e) {
		if (((t = a(t)), (n = a(n)), t && n && !(e = t == n)))
			try {
				e = n.contains
					? n.contains(t)
					: 16 & n.compareDocumentPosition(t)
			} catch (t) {}
		return e
	}
	function k(t, n, e, r, i, o) {
		for (V(t) || (t = [t]), V(n) || (n = [n]), r = 0; (o = t[r]); r++)
			try {
				i = o && o.apply(e, n)
			} catch (t) {
				O.error(t)
			}
		return i
	}
	function d(t, n) {
		return t && C.call(t, n)
	}
	function f(t, n) {
		return n.f - t.f || n.t - t.t
	}
	function s(t, n, e, r) {
		;((r = this).c = []),
			(r.b = 0 | n || 5),
			(r.x = r.b + (t || 20)),
			(r.r = e)
	}
	var p,
		h = t('jquery'),
		$ = h.isPlainObject,
		V = h.isArray,
		l = function (t, n, e, r) {
			n &&
				!l[t] &&
				((l[t] = 1),
				(e = h(I + Z)).length
					? (r = e.prop('styleSheet'))
						? (r.cssText += n)
						: e.append(n)
					: h('head').append(
							'<style id="' + Z + '">' + n + '</style>'
					  ))
		},
		v = 0,
		m = '',
		g = [],
		y = g.slice,
		w = ',',
		q = null,
		b = window,
		x = document,
		I = '#',
		S = '\x1f',
		U = 'prototype',
		j = /[#?].*$/,
		P = /([^=&?\/#]+)=?([^&#?]*)/g,
		T = /(?!^)=|&/,
		Z = u(),
		A = u(),
		O = {
			rootId: u(),
			defaultView: A,
			error: function (t) {
				throw t
			},
		},
		C = O.hasOwnProperty,
		E = function (t, n, e) {
			for (e in n) t[e] = n[e]
			return t
		}
	E(s[U], {
		get: function (t) {
			t = this.c[S + t]
			return t && (t.f++, (t.t = v++), (t = t.v)), t
		},
		each: function (t, n, e, r, i) {
			for (i = (r = (e = this).c).length - 1; -1 < i; i--) t(r[i].v, n, e)
		},
		set: function (t, n) {
			var e = this.c,
				r = S + t,
				i = e[r],
				o = this.b
			if (!i) {
				if (e.length >= this.x)
					for (e.sort(f); o--; ) 0 < (i = e.pop()).f && this.del(i.o)
				e.push((i = { o: t })), (e[r] = i)
			}
			;(i.v = n), (i.f = 1), (i.t = v++)
		},
		del: function (t) {
			var n = this.c,
				e = n[(t = S + t)],
				r = this.r
			e && ((e.f = -1), (e.v = m), delete n[t], r && k(r, e.o, e))
		},
		has: function (t) {
			return d(this.c, S + t)
		},
	})
	function R(t, n, e) {
		try {
			e = decodeURIComponent(e)
		} catch (t) {}
		D[n] = e
	}
	function H(t) {
		var n,
			e = F.get(t)
		return (
			e ||
				((D = {}),
				(n = t.replace(j, m)),
				t == n && T.test(n) && (n = m),
				t.replace(n, m).replace(P, R),
				F.set(t, (e = { a: n, b: D }))),
			{ path: e.a, params: E({}, e.b) }
		)
	}
	function M(t, n, e) {
		var r,
			i,
			o,
			c = []
		for (i in n)
			(r = n[i] + m),
				(e && !r && !d(e, i)) ||
					((r = encodeURIComponent(r)), c.push((o = i + '=' + r)))
		return o && (t += (t && (~t.indexOf('?') ? '&' : '?')) + c.join('&')), t
	}
	function B(t, n) {
		var e,
			r,
			i,
			o = {}
		if (t && (i = t.length))
			for (e = 0; e < i; e++)
				(r = t[e]), (o[n && r ? r[n] : r] = n ? r : 1 + (0 | o[r]))
		return o
	}
	var D,
		F = new s(),
		L =
			Object.keys ||
			function (t, n, e) {
				for (e in ((n = []), t)) d(t, e) && n.push(e)
				return n
			},
		N = {
			config: function (t, n) {
				return (n = O), (n = t ? ($(t) ? E(n, t) : n[t]) : n)
			},
			boot: function (n) {
				E(O, n),
					e(O.ini, function (t) {
						E(O, t),
							E(O, n),
							e(O.exts, function () {
								$t.on('changed', gt), $t.bind()
							})
					})
			},
			toMap: B,
			toTry: k,
			toUrl: M,
			parseUrl: H,
			mix: E,
			has: d,
			keys: L,
			inside: i,
			node: a,
			applyStyle: l,
			guid: u,
			Cache: s,
		},
		Q = {
			fire: function (t, n, e, r) {
				var i,
					o,
					c,
					u,
					f = this,
					a = f[S + t]
				if (((n = n || {}).type || (n.type = t), a))
					for (o = (i = a.length) - 1; i--; )
						(u = a[(c = r ? i : o - i)]).d
							? (a.splice(c, 1), o--)
							: k(u.f, n, f)
				;(a = f['on' + t]) && k(a, n, f), e && f.off(t)
			},
			on: function (t, n) {
				t = S + t
				;(this[t] || (this[t] = [])).push({ f: n })
			},
			off: function (t, n) {
				var e,
					r,
					i = S + t,
					o = this[i]
				if (n) {
					if (o)
						for (e = o.length; e--; )
							if ((r = o[e]).f == n && !r.d) {
								r.d = 1
								break
							}
				} else delete this[i], delete this['on' + t]
			},
		}
	N.Event = Q
	function J(t, n, e) {
		if (t) {
			;(e = this[ot]), (t = (t + m).split(w))
			for (var r = 0; r < t.length && !(n = d(e, t[r])); r++);
		}
		return n
	}
	var _,
		z,
		G,
		K,
		W,
		X,
		Y,
		tt,
		nt,
		et = b.history,
		rt = 'path',
		it = 'view',
		ot = 'params',
		ct = new s(),
		ut = new s(),
		ft = b.location,
		at = { params: {}, href: m },
		st = /(?:^.+\/\/[^\/]+|#.*$)/gi,
		ht = /^[^#]*#?!?/,
		$t = E(
			{
				bind: function () {
					var n = ft.href
					h(b).on('popstate', function () {
						var t = ft.href == n
						;(!_ && t) || ((_ = 1), $t.diff())
					}),
						$t.diff()
				},
				update: function (t, n, e, r) {
					;(t = M(t, n)) != e.srcQuery &&
						(et[r ? 'replaceState' : 'pushState'](q, q, t),
						$t.diff(),
						(_ = 1))
				},
				parse: function (t) {
					t = t || ft.href
					var n,
						e,
						r,
						i,
						o,
						c = ct.get(t)
					return (
						c ||
							((n = t.replace(st, m)),
							(e = t.replace(ht, m)),
							(r = H(n)),
							(i = H(e)),
							(o = E({}, r[ot])),
							(i = c = {
								href: t,
								srcQuery: n,
								srcHash: e,
								query: r,
								hash: i,
								params: o,
							}),
							K ||
								((W = O.unmatchView),
								(X = O.defaultView),
								(K = O.routes || {})[
									(Y = O.defaultPath || '/')
								] || (K[Y] = X)),
							i[it] ||
								((o = i.query[rt] || Y),
								(i[rt] = o),
								(i[it] = K[o] || W || X)),
							ct.set(t, c)),
						c
					)
				},
				diff: function () {
					var t = $t.parse(),
						t = (function (t, n) {
							var e,
								r,
								i,
								o,
								c = t.href,
								u = n.href,
								u = c + S + u,
								f = ut.get(u)
							if (!f) {
								;(f = { isParam: J, force: !t.href })[
									ot
								] = o = {}
								for (
									var a,
										s = t[ot],
										h = n[ot],
										$ = [rt, it].concat(L(s), L(h)),
										d = $.length - 1;
									0 <= d;
									d--
								)
									1 == d && ((s = t), (h = n), (o = f)),
										(r = s[(a = $[d])]) != (i = h[a]) &&
											((o[a] = { from: r, to: i }),
											(e = 1))
								ut.set(u, (f = { a: e, b: f }))
							}
							return f
						})(at, (at = t))
					return (
						t.a && ((G = at[ot]), $t.fire('changed', (z = t.b))), z
					)
				},
				to: function (t, n, e) {
					!n && $(t) && ((n = t), (t = m))
					var r = H(t),
						i = r[ot],
						t = r[rt],
						r = at[rt]
					E(i, n),
						t || (G && ((t = r), (i = E(E({}, G), i)))),
						$t.update(t, (G = i), at, e)
				},
			},
			Q
		)
	N.Router = $t
	function dt(t, n) {
		return (
			tt ||
				((p = x.body),
				a((t = O.rootId)) || (p.id = t),
				(tt = new yt(t))),
			tt
		)
	}
	var pt = function (t, n, e) {
			t.$d ||
				t.$h ||
				t.$cc != t.$rc ||
				(t.$cr || ((t.$cr = 1), (t.$ca = 0), t.fire('created')),
				(n = t.id),
				(e = vt[t.pId]) &&
					!d(e.$r, n) &&
					((e.$r[n] = 1), e.$rc++, pt(e)))
		},
		lt = function (t, n, e, r) {
			;(n = n || {}),
				!t.$ca &&
					t.$cr &&
					((t.$cr = 0),
					(t.$ca = 1),
					t.fire('alter', n),
					(e = t.id),
					(r = vt[t.pId]) &&
						d(r.$r, e) &&
						(r.$rc--, delete r.$r[e], lt(r, n)))
		},
		vt = {},
		mt = function (t, n) {
			if (t && (n = t.$v) && 0 < n.$s) {
				Ct(n) && n.render()
				for (var e = t.children(), r = e.length, i = 0; i < r; )
					mt(vt[e[i++]])
			}
		},
		gt = function (t) {
			var n = dt()
			;(t = t.view) ? n.mountView(t.to) : mt(n)
		},
		yt = function (t, n, e) {
			;((e = this).id = t),
				(e.$c = {}),
				(e.$cc = 0),
				(e.$rc = 0),
				(e.$s = 1),
				(e.$r = {}),
				(e.$il = []),
				(e.pId = n),
				(e = e),
				d(vt, (t = t)) || ((vt[t] = e), yt.fire('add', { vframe: e }))
		}
	E(
		yt,
		E(
			{
				root: dt,
				all: function () {
					return vt
				},
				get: function (t) {
					return vt[t]
				},
			},
			Q
		)
	),
		E(E(yt[U], Q), {
			mountView: function (t, r) {
				var i,
					o,
					c,
					u = this,
					f = a(u.id)
				!u.$a && f && ((u.$a = 1), (u.$t = f.innerHTML)),
					u.unmountView(),
					(u.$d = 0),
					f &&
						t &&
						((u.path = t),
						(i = H(t)),
						(o = ++u.$s),
						e(i.path, function (t) {
							var n, e
							o == u.$s &&
								(Ot(t),
								(e = i.params),
								(n = E(e, r)),
								(e = decodeURIComponent(
									f.getAttribute('mx-options')
								)) &&
									((e = k(Function('return ' + e))), E(n, e)),
								(c = new t({ owner: u, id: u.id }, n)),
								(u.$v = c),
								Tt(c),
								c.init(n),
								c.render(),
								c.tmpl || c.$p || c.endUpdate())
						}))
			},
			unmountView: function () {
				var t,
					n = this,
					e = n.$v
				;(n.$il = []),
					e &&
						(nt || ((t = 1), (nt = { id: n.id })),
						(n.$d = 1),
						n.unmountZone(0, 1),
						lt(n, nt),
						(n.$v = 0),
						Et(e),
						(e = a(n.id)) && n.$a && r(e, n.$t),
						t && (nt = 0)),
					n.$s++
			},
			mountVframe: function (t, n, e) {
				var r,
					i = this
				return (
					lt(i),
					(r = vt[t]) ||
						(d(i.$c, t) || ((i.$cl = m), i.$cc++),
						(i.$c[t] = t),
						(r = new yt(t, i.id))),
					r.mountView(n, e),
					r
				)
			},
			mountZone: function (t, n) {
				var e,
					r,
					i,
					o = this
				t = t || o.id
				var c = h(I + t + ' [mx-view]')
				for (
					o.$h = 1, o.unmountZone(t, 1), e = c.length - 1;
					0 <= e;
					e--
				)
					(i = (r = c[e]).id || (r.id = u())),
						o.mountVframe(i, r.getAttribute('mx-view'), n)
				;(o.$h = 0), pt(o)
			},
			unmountVframe: function (t, n) {
				var e, r, i, o, c
				;(t = t ? this.$c[t] : this.id),
					(e = vt[t]) &&
						((c = e.$cr),
						(r = e.pId),
						e.unmountView(),
						(o = c),
						(c = vt[(i = t)]) &&
							(delete vt[i],
							yt.fire('remove', { vframe: c, fcc: o })),
						(e.id = e.pId = m),
						(e = vt[r]) &&
							d(e.$c, t) &&
							(delete e.$c[t], (e.$cl = m), e.$cc--, n || pt(e)))
			},
			unmountZone: function (t, n) {
				for (var e in this.$c)
					(!t || (e != t && i(e, t))) && this.unmountVframe(e, 1)
				n || pt(this)
			},
			parent: function (t, n) {
				for (n = this, t = t >>> 0 || 1; n && t--; ) n = vt[n.pId]
				return n
			},
			children: function (t) {
				return (t = this).$cl || (t.$cl = L(t.$c))
			},
			invoke: function (t, n) {
				var e, r, i, o
				return (
					(r = this.$v) && r.$p
						? (e = (o = r[t]) && k(o, n, r))
						: ((r = (i = this.$il)[(o = S + t)]) && (r.r = 1),
						  i.push((r = { n: t, a: n, k: o })),
						  (i[o] = r)),
					e
				)
			},
		}),
		(N.Vframe = yt)
	function wt(t, n) {
		;(n = t.data), k(n.f, t, n.v)
	}
	function bt(t, n, e, r, i, o) {
		r ? h(t).off(n, i, e) : h(t).on(n, i, o, e)
	}
	function xt(t) {
		for (
			var n,
				e,
				r,
				i,
				o,
				c,
				u,
				f,
				a = t.target,
				s = t.type,
				h = 'mx-' + s,
				$ = [];
			a != p && 1 == a.nodeType;

		) {
			if ((n = a.getAttribute(h))) {
				if ((($ = []), !(i = a.$f)))
					for (o = a; (o = o[qt]); )
						if (d(vt, (c = o.id))) {
							a.$f = i = c
							break
						}
				i
					? (r = (f = vt[i]) && f.$v) &&
					  0 < r.$s &&
					  ((u = It.get(n)) ||
							(((u = {
								n: (u = n.match(St) || g)[1],
								i: u[2],
							}).p = (u.i && k(Function('return ' + u.i))) || {}),
							It.set(n, u)),
					  (f = r[u.n + S + s]) &&
							((t.current = a),
							(t.currentTarget = a),
							(t.params = u.p),
							k(f, t, r)))
					: O.error(Error('bad:' + n))
			}
			if (((e = a.$) && e[s]) || t.mxStop || t.isPropagationStopped())
				break
			$.push(a), (a = a[qt] || p)
		}
		for (; (a = $.pop()); ) (e = a.$ || (a.$ = {}))[s] = 1
	}
	function kt(t, n) {
		var e,
			r,
			i = t.$r
		for (e in i) (r = i[e]), (n || r.x) && Pt(i, e, 1)
	}
	function Vt(t, n) {
		E((n = this), t),
			(n.$l = { k: [] }),
			(n.$r = {}),
			(n.$s = 1),
			k(Zt, t, n)
	}
	var qt = 'parentNode',
		It = new s(30, 10),
		St = /([^\(]+)\(([\s\S]*)?\)/,
		Ut = {},
		jt = /^(\$?)([^<]+)<([^>]+)>$/,
		Pt = function (t, n, e) {
			var r,
				i = t[n]
			return (
				i && ((i = (r = i.e).destroy) && e && k(i, g, r), delete t[n]),
				r
			)
		},
		Tt = function (t, n) {
			var e,
				r,
				i,
				o,
				c,
				u,
				f = t.$eo
			for (e in f)
				(o = n),
					(u = c = void 0),
					(c = 0 | Ut[(i = e)]),
					(u = 0 < c ? 1 : 0),
					(c += o ? -u : u) || (bt(p, i, xt, o), o || (c = 1)),
					(Ut[i] = c)
			for (e = (f = t.$el).length; e--; )
				(r = f[e]),
					bt(r.e || I + t.id, r.n, wt, n, r.s, { v: t, f: r.f })
		},
		Zt = [],
		At = { win: b, doc: x },
		Ot = function (t) {
			if (!t[S]) {
				t[S] = 1
				var n,
					e,
					r,
					i,
					o,
					c,
					u,
					f,
					a = t[U],
					s = {},
					h = []
				for (u in a)
					if (((n = a[u]), (e = u.match(jt))))
						for (
							c = e[1], r = e[2], i = e[3].split(w);
							(f = i.pop());

						)
							c
								? h.push({
										f: n,
										s: (o = At[r]) ? q : r,
										n: f,
										e: o,
								  })
								: ((s[f] = 1), (a[r + S + f] = n))
				;($ = (t = a).render),
					(t.render = function () {
						0 < (d = this).$s &&
							(d.$s++,
							d.fire('rendercall'),
							kt(d),
							k($, y.call(arguments), d))
					}),
					(a.$eo = s),
					(a.$el = h)
			}
			var $, d
		},
		Ct = function (t) {
			var n,
				t = t.$l
			return (n = t.f ? (n = t.p ? z.path : n) || z.isParam(t.k) : n)
		},
		Et = function (t) {
			0 < t.$s &&
				((t.$s = 0), t.fire('destroy', 0, 1, 1), kt(t, 1), Tt(t, 1)),
				t.$s--
		},
		Rt = Vt[U]
	E(Vt, {
		merge: function (t, n) {
			;(n = t && t.ctor) && Zt.push(n), E(Rt, t)
		},
		extend: function (t, n) {
			function e(t, n) {
				r.call(this, t, n), i && i.call(this, n)
			}
			var r = this,
				i = (t = t || {}).ctor
			return (e.extend = r.extend), c(e, r, t, n)
		},
	}),
		E(E(Rt, Q), {
			render: n,
			init: n,
			beginUpdate: function (t, n) {
				0 < (n = this).$s && n.$p && n.owner.unmountZone(t, 1)
			},
			endUpdate: function (t, n, e, r) {
				0 < (n = this).$s &&
					((r = n.$p),
					(n.$p = 1),
					(e = n.owner).mountZone(t),
					r ||
						(function (t, n, e) {
							for (n = t.$il; n.length; )
								(e = n.shift()).r || t.invoke(e.n, e.a),
									delete n[e.k]
						})(e))
			},
			wrapAsync: function (t, n) {
				var e = this,
					r = e.$s
				return function () {
					0 < r && r == e.$s && t && t.apply(n || e, arguments)
				}
			},
			observe: function (t, n) {
				var e,
					r = this.$l
				;(r.f = 1),
					(e = r.k),
					n && (r.p = n),
					t && (r.k = e.concat((t + m).split(w)))
			},
			capture: function (t, n, e, r, i) {
				return (r = this.$r), Pt(r, t, 1), (r[t] = { e: n, x: e }), n
			},
			release: function (t, n) {
				return Pt(this.$r, t, n)
			},
			share: function (t, n) {
				this.$sd || (this.$sd = {}), (this.$sd[t] = n)
			},
			getShared: function (t) {
				var n = this.$sd
				if (n && d(n, t)) return n[t]
				n = this.owner.parent()
				return n ? n.invoke('getShared', t) : void 0
			},
			setHTML: function (t, n) {
				var e
				this.beginUpdate(t),
					0 < this.$s && (e = a(t)) && r(e, n),
					this.endUpdate(t)
			},
		}),
		(N.View = Vt)
	function Ht() {
		;(this.id = u('b')), (this.$ = {})
	}
	var Mt = h.type,
		Bt = h.proxy,
		Dt = h.now || Date.now,
		Ft = JSON.stringify
	E(Ht[U], {
		get: function (t, n, e) {
			var r = arguments.length,
				i = 2 <= r,
				o = this.$,
				c = o
			if (r) {
				for (
					var u, f = V(t) ? y.call(t) : (t + m).split('.');
					(u = f.shift()) && c;

				)
					c = c[u]
				u && (c = e)
			}
			return (
				i &&
					Mt(n) != Mt(c) &&
					(O.error(Error('type neq:' + t + '\n' + Ft(o))), (c = n)),
				c
			)
		},
		set: function (t, n) {
			var e
			$(t) || (((e = {})[t] = n), (t = e)), E(this.$, t)
		},
	})
	function Lt(t, n, e) {
		;(e = this[t]), delete this[t], k(e, n, e.e)
	}
	var Nt = function (t, n, e, r, i) {
			if (t.$o) return t
			if (t.$b)
				return t.enqueue(function () {
					Nt(this, n, e, r, i)
				})
			t.$b = 1
			for (
				var u,
					f,
					a,
					s,
					h,
					$,
					d,
					p,
					l,
					o,
					c,
					v,
					m,
					g = t.constructor,
					y = g.$r,
					w = (n = !V(n) ? [n] : n).length,
					b =
						((u = e),
						(a = t),
						(s = w),
						(h = r),
						($ = (f = g).$c),
						(d = []),
						(p = q),
						function (t, n) {
							var e,
								r = this
							l++
							var i = r.$m,
								o = i.k,
								c = { bag: (d[t + 1] = r), error: n }
							n
								? ((p = n), f.fire('fail', c), (e = 1))
								: $.has(o) ||
								  (o && $.set(o, r),
								  (i.t = Dt()),
								  (o = i.a) && k(o, r, r),
								  i.x && f.clear(i.x),
								  f.fire('done', c),
								  (e = 1)),
								a.$o ||
									((i = l == s) &&
										((a.$b = 0),
										2 == h && ((d[0] = p), k(u, d, a))),
									1 == h && k(u, [n || q, r, i, t], a)),
								e && f.fire('end', c)
						}),
					x = (l = 0);
				x < w;
				x++
			)
				(m = n[x]) &&
					((c = (o = (v = g.get(m, i)).e).$m.k),
					(m = Bt(b, o, x)),
					c && y[c]
						? y[c].push(m)
						: v.u
						? (c &&
								(((v = [m]).e = o),
								(y[c] = v),
								(m = Bt(Lt, y, c))),
						  g.$s(o, m))
						: m())
			return t
		},
		t = function () {
			;(this.id = u('s')), (this.$q = [])
		}
	E(t[U], {
		all: function (t, n) {
			return Nt(this, t, n, 2)
		},
		save: function (t, n) {
			return Nt(this, t, n, 2, 1)
		},
		one: function (t, n) {
			return Nt(this, t, n, 1)
		},
		enqueue: function (t) {
			var n = this
			return n.$o || (n.$q.push(t), n.dequeue(n.$a)), n
		},
		dequeue: function () {
			var n = this,
				e = y.call(arguments)
			n.$b ||
				n.$o ||
				((n.$b = 1),
				setTimeout(function () {
					var t
					;(n.$b = 0),
						n.$o || ((t = n.$q.shift()) && k(t, (n.$a = e), n))
				}, 0))
		},
		destroy: function (t) {
			;((t = this).$o = 1), (t.$q = 0)
		},
	})
	function Qt(t, n, e) {
		return [Ft(n), Ft(t)].join(S)
	}
	function Jt(t, n, e, r) {
		;(r = t && t.$m) && n[r.n] && e.del(r.k)
	}
	var _t = E(
		{
			add: function (t) {
				for (
					var n, e, r = this.$m, i = (t = !V(t) ? [t] : t).length - 1;
					-1 < i;
					i--
				)
					(n = t[i]) &&
						((e = n.name), (n.cache = 0 | n.cache), (r[e] = n))
			},
			create: function (t) {
				var n = this.meta(t),
					e = n.cache,
					r = new Ht()
				r.set(n),
					(r.$m = {
						n: n.name,
						a: n.after,
						x: n.cleans,
						k: e && Qt(n, t),
					}),
					$(t) && r.set(t)
				n = n.before
				return n && k(n, r, r), this.fire('begin', { bag: r }), r
			},
			meta: function (t) {
				return this.$m[t.name || t] || t
			},
			get: function (t, n) {
				var e, r
				return (
					(e = !n ? this.cached(t) : e) ||
						((e = this.create(t)), (r = 1)),
					{ e: e, u: r }
				)
			},
			clear: function (t) {
				this.$c.each(Jt, B((t + m).split(w)))
			},
			cached: function (t) {
				var n,
					e,
					r = this.$c,
					i = this.meta(t),
					o = i.cache
				return (
					(e = o ? Qt(i, t) : e) &&
						((t = this.$r[e])
							? (n = t.e)
							: (n = r.get(e)) &&
							  0 < o &&
							  Dt() - n.$m.t > o &&
							  (n = 0)),
					n
				)
			},
		},
		Q
	)
	;(t.extend = function (t, n, e) {
		function r() {
			i.call(this)
		}
		var i = this
		return (
			(r.$s = t),
			(r.$c = new s(n, e)),
			(r.$r = {}),
			(r.$m = {}),
			c(r, i, q, _t)
		)
	}),
		(N.Service = t)
	var zt = function (t, n) {
		function e() {
			var t = arguments
			r.apply(this, t), i && i.apply(this, t)
		}
		var r = this,
			i = t && t.ctor
		return (e.extend = zt), c(e, r, t, n)
	}
	return (
		E(n[U], Q),
		(n.extend = zt),
		(N.Base = n),
		define(A, function () {
			return Vt.extend()
		}),
		N
	)
})
