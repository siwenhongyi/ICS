!(function () {
	'use strict'
	var e = location,
		o = document
	var a = [
		'alires',
		'pha_pageheader',
		'pha_header',
		'/punish',
		'fourier.taobao.com/assist',
		'fourier.alibaba.com/assist',
		'market.m.taobao.com/app/tbhome/common/index.html',
		'.sm.cn',
		'.sm-tc.cn',
		'.alipay.com',
		'.aliyun.com',
		'error.taobao.com',
	]
	var r,
		t,
		n,
		c,
		m,
		i,
		s = (Math.random() + '').replace('0.', '')
	try {
		var h = document.cookie.match(/cna=([^;]+)/),
			d = location.href || '',
			p =
				'//fourier.taobao.com/rp?ext=51&data=jm_' +
				(h && h[1]) +
				'&random=' +
				s +
				'&href=' +
				encodeURIComponent(d) +
				'&protocol=' +
				location.protocol
		;(function () {
			for (var e = location.href || '', o = 0; a.length > o; o++)
				if (e.indexOf(a[o]) > -1) return !0
			return !1
		})() ||
			document.cookie.indexOf('xlly') > -1 ||
			((c = '//127.0.0.1:8000/mm/app/exts/rp.js'),
			(m = document.createElement('script')),
			(i = document.getElementsByTagName('head')[0]),
			(m.type = 'text/javascript'),
			(m.charset = 'UTF-8'),
			(m.src = c),
			i.appendChild(m))
	} catch (l) {
		;(r = l.message + 'random=' + s),
			void 0 === (t = 12) && (t = 1),
			void 0 === n && (n = 1),
			(0 >= n || Math.random() < n) &&
				(function (e, o) {
					var a = []
					for (var r in e) a.push(r + '=' + encodeURIComponent(e[r]))
					new Image().src = o + a.join('&')
				})(
					{
						code: t,
						msg: r + '',
						pid: 'spl',
						page: e.href.split(/[#?]/)[0],
						query: e.search.substr(1),
						hash: e.hash,
						referrer: o.referrer,
						title: o.title,
						ua: navigator.userAgent,
					},
					'//gm.mmstat.com/fsp.1.1?'
				)
	}
})()
