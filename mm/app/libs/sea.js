!(function (a, o) {
	var c,
		f,
		i,
		u,
		l,
		d,
		h,
		s,
		v,
		p,
		t,
		n,
		g,
		E,
		m,
		y,
		b,
		A,
		_,
		e,
		r,
		T,
		D,
		w,
		S,
		U,
		x,
		N,
		O,
		q,
		C,
		I,
		j,
		G,
		R,
		L,
		$,
		k
	function X(t) {
		return function (e) {
			return {}.toString.call(e) == '[object ' + t + ']'
		}
	}
	function B() {
		return s++
	}
	function F(e) {
		return e.match(t)[0]
	}
	function V(e, t) {
		var r = e.charAt(0)
		return (e =
			0 ===
			(e = b.test(e)
				? e
				: '.' === r
				? (function (e) {
						for (e = e.replace(n, '/'); e.match(g); ) e = e.replace(g, '/')
						return (e = e.replace(E, '$1/'))
				  })((t ? F(t) : f.cwd) + e)
				: '/' === r
				? (r = f.cwd.match(A))
					? r[0] + e.substring(1)
					: e
				: f.base + e).indexOf('//')
				? location.protocol + e
				: e)
	}
	function H(e, t) {
		;(this.uri = e),
			(this.dependencies = t || []),
			(this.exports = null),
			(this.status = 0),
			(this._waitings = {}),
			(this._remain = 0)
	}
	a.seajs ||
		((c = a.seajs = {
			version: '2.2.3',
		}),
		(f = c.data = {}),
		(i = X('Object')),
		(u = X('String')),
		(l = Array.isArray || X('Array')),
		(d = X('Function')),
		(h = X('Undefined')),
		(s = 0),
		(v = f.events = {}),
		(c.on = function (e, t) {
			return (v[e] || (v[e] = [])).push(t), c
		}),
		(c.off = function (e, t) {
			if (!e && !t) return (v = f.events = {}), c
			var r = v[e]
			if (r)
				if (t)
					for (var n = r.length - 1; 0 <= n; n--) r[n] === t && r.splice(n, 1)
				else delete v[e]
			return c
		}),
		(p = c.emit = function (e, t) {
			var r,
				n = v[e]
			if (n) for (n = n.slice(); (r = n.shift()); ) r(t)
			return c
		}),
		(t = /[^?#]*\//),
		(n = /\/\.\//g),
		(g = /\/[^/]+\/\.\.\//),
		(E = /([^:/])\/\//g),
		(m = /^([^/:]+)(\/.+)$/),
		(y = /{([^{]+)}/g),
		(b = /^\/\/.|:\//),
		(A = /^.*?\/\/.*?\//),
		(k = F((_ = document).URL)),
		(r = _.scripts),
		(e = _.getElementById('seajsnode') || r[r.length - 1]),
		(r = F(((T = e).hasAttribute ? T.src : T.getAttribute('src', 4)) || k)),
		(c.resolve = function (e, t) {
			return e
				? ((i = e),
				  (s = e = (s = f.alias) && u(s[i]) ? s[i] : i),
				  (i = f.paths),
				  (e = s = i && (n = s.match(m)) && u(i[n[1]]) ? i[n[1]] + n[2] : s),
				  (i = e),
				  (r = f.vars),
				  (e = i =
						r && -1 < i.indexOf('{')
							? i.replace(y, function (e, t) {
									return u(r[t]) ? r[t] : e
							  })
							: i),
				  (s = (n = e).length - 1),
				  (function (e) {
						var t = f.map,
							r = e
						if (t)
							for (var n = 0, s = t.length; n < s; n++) {
								var i = t[n]
								if ((r = d(i) ? i(e) || e : e.replace(i[0], i[1])) !== e) break
							}
						return r
				  })(
						V(
							(e =
								'#' === (i = n.charAt(s))
									? n.substring(0, s)
									: '.js' === n.substring(s - 2) ||
									  0 < n.indexOf('?') ||
									  '.css' === n.substring(s - 3) ||
									  '/' === i
									? n
									: n + '.js'),
							t
						)
				  ))
				: ''
			var r, n, s, i
		}),
		(D = _.head || _.getElementsByTagName('head')[0] || _.documentElement),
		(w = D.getElementsByTagName('base')[0]),
		(S = /\.css(?:\?|$)/i),
		(N =
			+navigator.userAgent.replace(
				/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/,
				'$1'
			) < 536),
		(c.request = function (e, t, r, n) {
			var s,
				i,
				a,
				o,
				c = S.test(e),
				u = _.createElement(c ? 'link' : 'script')
			function l() {
				;(s.onload = s.onerror = s.onreadystatechange = null),
					a || f.debug || D.removeChild(s),
					(s = null),
					i()
			}
			r && (u.charset = r),
				h(n) || u.setAttribute('crossorigin', n),
				(i = t),
				(a = c),
				(o = e),
				(t = 'onload' in (s = u)),
				!a || (!N && t)
					? t
						? ((s.onload = l),
						  (s.onerror = function () {
								p('error', {
									uri: o,
									node: s,
								}),
									l()
						  }))
						: (s.onreadystatechange = function () {
								;/loaded|complete/.test(s.readyState) && l()
						  })
					: setTimeout(function () {
							!(function e(t, r) {
								var n = t.sheet
								var s
								if (N) n && (s = !0)
								else if (n)
									try {
										n.cssRules && (s = !0)
									} catch (e) {
										'NS_ERROR_DOM_SECURITY_ERR' === e.name && (s = !0)
									}
								setTimeout(function () {
									s ? r() : e(t, r)
								}, 20)
							})(s, i)
					  }, 1),
				c
					? ((u.rel = 'stylesheet'), (u.href = e))
					: ((u.async = !0), (u.src = e)),
				(U = u),
				w ? D.insertBefore(u, w) : D.appendChild(u),
				(U = null)
		}),
		(O = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g),
		(q = /\\\\/g),
		(C = c.cache = {}),
		(j = {}),
		(G = {}),
		(R = {}),
		(L = H.STATUS = {
			FETCHING: 1,
			SAVED: 2,
			LOADING: 3,
			LOADED: 4,
			EXECUTING: 5,
			EXECUTED: 6,
		}),
		(H.prototype.resolve = function () {
			for (var e = this.dependencies, t = [], r = 0, n = e.length; r < n; r++)
				t[r] = H.resolve(e[r], this.uri)
			return t
		}),
		(H.prototype.load = function () {
			var e = this
			if (!(e.status >= L.LOADING)) {
				e.status = L.LOADING
				var t = e.resolve()
				p('load', t)
				for (var r, n = (e._remain = t.length), s = 0; s < n; s++)
					(r = H.get(t[s])).status < L.LOADED
						? (r._waitings[e.uri] = (r._waitings[e.uri] || 0) + 1)
						: e._remain--
				if (0 !== e._remain) {
					for (var i, a = {}, s = 0; s < n; s++)
						(r = C[t[s]]).status < L.FETCHING
							? r.fetch(a)
							: r.status === L.SAVED && r.load()
					for (i in a) a.hasOwnProperty(i) && a[i]()
				} else e.onload()
			}
		}),
		(H.prototype.onload = function () {
			var e = this
			;(e.status = L.LOADED), e.callback && e.callback()
			var t,
				r,
				n = e._waitings
			for (t in n)
				n.hasOwnProperty(t) &&
					(((r = C[t])._remain -= n[t]), 0 === r._remain && r.onload())
			delete e._waitings, delete e._remain
		}),
		(H.prototype.fetch = function (e) {
			var t = this,
				r = t.uri
			t.status = L.FETCHING
			var n = {
				uri: r,
			}
			p('fetch', n)
			var s = n.requestUri || r
			function i() {
				c.request(n.requestUri, n.onRequest, n.charset, n.crossorigin)
			}
			s && !G[s]
				? j[s]
					? R[s].push(t)
					: ((j[s] = !0),
					  (R[s] = [t]),
					  p(
							'request',
							(n = {
								uri: r,
								requestUri: s,
								onRequest: function () {
									delete j[s], (G[s] = !0), I && (H.save(r, I), (I = null))
									var e,
										t = R[s]
									delete R[s]
									for (; (e = t.shift()); ) e.load()
								},
								charset: d(f.charset) ? f.charset(s) : f.charset,
								crossorigin: d(f.crossorigin)
									? f.crossorigin(s)
									: f.crossorigin,
							})
					  ),
					  n.requested || (e ? (e[n.requestUri] = i) : i()))
				: t.load()
		}),
		(H.prototype.exec = function () {
			var e = this
			if (e.status >= L.EXECUTING) return e.exports
			e.status = L.EXECUTING
			var r = e.uri
			function n(e) {
				return H.get(n.resolve(e)).exec()
			}
			;(n.resolve = function (e) {
				return H.resolve(e, r)
			}),
				(n.async = function (e, t) {
					return H.use(e, t, r + '_async_' + s++), n
				})
			var t = e.factory,
				t = d(t) ? t(n, (e.exports = {}), e) : t
			return (
				t === o && (t = e.exports),
				delete e.factory,
				(e.exports = t),
				(e.status = L.EXECUTED),
				p('exec', e),
				t
			)
		}),
		(H.resolve = function (e, t) {
			e = {
				id: e,
				refUri: t,
			}
			return p('resolve', e), e.uri || c.resolve(e.id, t)
		}),
		(H.define = function (e, t, r) {
			var n,
				s = arguments.length
			1 === s
				? ((r = e), (e = o))
				: 2 === s && ((r = t), l(e) ? ((t = e), (e = o)) : (t = o)),
				!l(t) &&
					d(r) &&
					((i = r.toString()),
					(n = []),
					i.replace(q, '').replace(O, function (e, t, r) {
						r && n.push(r)
					}),
					(t = n))
			var i,
				s = {
					id: e,
					uri: H.resolve(e),
					deps: t,
					factory: r,
				}
			s.uri ||
				!_.attachEvent ||
				((i = (function () {
					if (U) return U
					if (x && 'interactive' === x.readyState) return x
					for (
						var e = D.getElementsByTagName('script'), t = e.length - 1;
						0 <= t;
						t--
					) {
						var r = e[t]
						if ('interactive' === r.readyState) return (x = r)
					}
				})()) &&
					(s.uri = i.src)),
				p('define', s),
				s.uri ? H.save(s.uri, s) : (I = s)
		}),
		(H.save = function (e, t) {
			var r = H.get(e)
			r.status < L.SAVED &&
				((r.id = t.id || e),
				(r.dependencies = t.deps || []),
				(r.factory = t.factory),
				(r.status = L.SAVED))
		}),
		(H.get = function (e, t) {
			return C[e] || (C[e] = new H(e, t))
		}),
		(H.use = function (e, s, t) {
			var i = H.get(t, l(e) ? e : [e])
			;(i.callback = function () {
				for (var e = [], t = i.resolve(), r = 0, n = t.length; r < n; r++)
					e[r] = C[t[r]].exec()
				s && s.apply(a, e), delete i.callback
			}),
				i.load()
		}),
		(H.preload = function (e) {
			var t = f.preload,
				r = t.length
			r
				? H.use(
						t,
						function () {
							t.splice(0, r), H.preload(e)
						},
						f.cwd + '_preload_' + s++
				  )
				: e()
		}),
		(c.use = function (e, t) {
			return (
				H.preload(function () {
					H.use(e, t, f.cwd + '_use_' + s++)
				}),
				c
			)
		}),
		(H.define.cmd = {}),
		(a.define = H.define),
		(c.Module = H),
		(f.fetchedList = G),
		(f.cid = B),
		(c.require = function (e) {
			e = H.get(H.resolve(e))
			return e.status < L.EXECUTING && (e.onload(), e.exec()), e.exports
		}),
		(f.base = (r.match(/^(.+?\/)(\?\?)?(seajs\/)+/) || ['', r])[1]),
		(f.dir = r),
		(f.cwd = k),
		(f.charset = 'utf-8'),
		(f.preload =
			(($ = []),
			(k = location.search.replace(/(seajs-\w+)(&|$)/g, '$1=1$2')),
			(k += ' ' + _.cookie).replace(/(seajs-\w+)=1/g, function (e, t) {
				$.push(t)
			}),
			$)),
		(c.config = function (e) {
			for (var t in e) {
				var r = e[t],
					n = f[t]
				if (n && i(n)) for (var s in r) n[s] = r[s]
				else
					l(n)
						? (r = n.concat(r))
						: 'base' === t && ('/' !== r.slice(-1) && (r += '/'), (r = V(r))),
						(f[t] = r)
			}
			return p('config', e), c
		}))
})(this)
