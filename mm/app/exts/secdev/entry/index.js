;(function (m, p, a, e, r, o, t) {
	if (m.__sec_entry_loaded || p.__no_sec_entry) {
		return
	}
	m.__sec_entry_loaded = true
	var i = e.userAgent
	var n = t('%58%75%65%58%69')
	var l = n.toLowerCase()
	if (
		i.indexOf(n) >= 0 ||
		r.host.indexOf(l) >= 0 ||
		(top !== self && p.referrer.indexOf(l) >= 0)
	) {
		return
	}
	var c = p.getElementsByTagName('head')[0]
	function u(a) {
		var e = p.createElement('script')
		e.src = a
		return c.appendChild(e)
	}
	var s = '//127.0.0.1:8000/mm/app/exts'
	var f = self.goldlog
	if (f && f.getCdnPath) {
		//s = f.getCdnPath()
		s = '//127.0.0.1:8000/mm/app/exts'
	}
	s += '/secdev/'
	var v = i.match(/Chrome\/(\d*)/)
	if (v) {
		v = +v[1]
	}
	// g.alicdn.com/sufei_data/3.9.9/index.js
	if (!p._sufei_data2) {
		var d = '3.9.9'
		//var h = u(s + 'sufei_data/' + d + '/index.js')
		var h = u(s + 'sufei_data/' + '/index.js')
		h.async = p.cookie.indexOf('isg=') < 0
		h.id = 'aplus-sufei'
	}
	function g(a, e) {
		var r = []
		for (var t in a) {
			r.push(t + '=' + o(a[t]))
		}
		new Image().src = e + r.join('&')
	}
	var y = 0.001
	if (a() < y) {
		p._linkstat_sample = y
		u(s + 'linkstat/index.js?v=1201')
	}
	m.nsrprtrt = 1e-4
	var _ = 0
	var x = [
		'taobao',
		'alibaba.com',
		'alipay.com',
		'tmall.com',
		'lazada',
		'aliexpress',
		'1688.com',
		'alimama.com',
		'tb.cn',
		'xiami.com',
		'amap.com',
		'cainiao.com',
		'aliyun.com',
		'etao.com',
		'fliggy.com',
		'liangxinyao.com',
		'damai.cn',
		'daraz',
		'tmall.hk',
		'jiyoujia.com',
		'taopiaopiao.com',
		'alitrip.com',
		'fliggy.hk',
		'alihealth.cn',
		'alitrip.hk',
		'ele.me',
		'gaode',
		'mp.dfkhgj.com',
		'mp.bcvbw.com',
		'm.dfkhgj.com',
		'pailitao.com',
		'youku.com',
		'jiaoyimao',
		'sm.cn',
		'dingtalk.com',
		'alibaba-inc',
		'guoguo-app',
		'kaola',
		'alicdn',
		'soku',
	]
	for (var b = 0; b < x.length; b++) {
		if (~r.host.indexOf(x[b])) {
			_ = 1
			break
		}
	}
	if (_) {
		var j = ['1.0.78', 'e', 88]
		var k = ['1.0.85', 'f', 94]
		var C = 0
		var M = j
		if (r.host == 'sycm.taobao.com' || r.host == 'liveplatform.taobao.com') {
			m.nslog = 0.01
			C = 1e4
		}
		if (((a() * 1e4) | 0) < C) {
			M = k
		}
		if (!M) {
			return
		}
		var E = s
		var S = true
		if (
			r.hostname.indexOf('buyertrade.taobao.com') > -1 ||
			(/refund2\.taobao\.com$|refund2\.tmall\.com$/.test(r.hostname) &&
				r.pathname === '/dispute/apply.htm')
		) {
			if (!S) {
				E = E.replace('/secdev/', '??xlly/spl/index.js,secdev/')
			} else {
				E = E.replace('/secdev/', '??xlly/spl/index.js,xlly/spl/rp.js,secdev/')
			}
		} else if (S) {
			E = E.replace('/secdev/', '??xlly/spl/rp.js,secdev/')
		}
		var w = E + 'nsv/' + M[0] + '/'
		var I = w + 'ns_' + M[1] + '_' + M[2] + '_3_f.js?v=1'
		var L = w + 'ns_' + M[1] + '_' + M[2] + '_3_n.js?v=1'
		function O() {
			var a = 'function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D'
			if ('WebkitAppearance' in p.documentElement.style) {
				if (escape(e.javaEnabled.toString()) === a) {
					return true
				}
			}
			return false
		}
		var A = i.match(/Edge\/([\d]*)/)
		var D = i.match(/Safari\/([\d]*)/)
		var T = i.match(/Firefox\/([\d]*)/)
		var W = i.match(/MSIE|Trident/)
		if (A) {
			u(I)
		} else if (v) {
			u(I)
		} else if (D || T || W) {
			u(L)
		} else {
			if (O()) {
				u(I)
			} else {
				u(L)
			}
		}
	} else {
		u(s.replace('/secdev/', '/xlly/spl/rp.js'))
	}
	function B() {
		var a = m.atob
		if (!a) {
			return
		}
		var e = 0
		var r = ''
		function t() {
			if (++e == 3) {
				clearInterval(s)
			}
			n()
		}
		var o
		var i = (Math.random() * 1e8) | 0
		function n() {
			var a = o.getUA({ MaxMTLog: 500, MTInterval: 3 })
			a = i + '|' + a
			var e = { token: a, cna: r, ext: 7 }
			g(e, 'https://fourier.taobao.com/ts?')
		}
		var l = +localStorage._xlly
		if (!l && /xlly=1/.test(p.cookie)) {
			l = +new Date()
			localStorage._xlly = l
		}
		if (l) {
			var c = new Date() - l
			if (c > 1e3 * 3600 * 24) {
				c = 0
				delete localStorage._xlly
			}
			if (c < 1e3 * 60 * 20) {
				var s = setInterval(t, 1e3 * 60)
				if (m.addEventListener) {
					m.addEventListener('unload', n)
				}
				var f = p.cookie.match(/cna=([^;]+)/)
				if (f) {
					r = f[1]
				}
				var v = u(a('aHR0cHM6Ly9nLmFsaWNkbi5jb20vQVdTQy9BV1NDL2F3c2MuanM='))
				var d = unescape('%75%61%62')
				v.onload = function () {
					m.AWSC &&
						AWSC.use(d, function (a, e) {
							if (a === 'loaded') {
								o = e
							}
						})
				}
			}
		}
	}
	try {
		B()
	} catch (a) {}
	try {
		m.etrprtrt = 0.01
		var F = 0
		for (var b = 0; b < x.length; b++) {
			if (r.host && ~r.host.indexOf(x[b])) {
				F = 1
				break
			}
		}
		if (F) {
			var N = '1.61.1'
			var R = '1.62.1'
			var U = 1
			var z = N
			if (Math.random() < U) {
				z = R
			}
			if (!z) {
				return
			}
			var H = '//g.alicdn.com/AWSC/et/' + z + '/'
			var P = H + 'et_f.js'
			var Q = H + 'et_n.js'
			if (A) {
				u(P)
			} else if (v) {
				u(P)
			} else if (D || T || W) {
				u(Q)
			} else {
				if (O()) {
					u(P)
				} else {
					u(Q)
				}
			}
		}
	} catch (a) {}
})(
	window,
	document,
	Math.random,
	navigator,
	location,
	encodeURIComponent,
	decodeURIComponent
)
