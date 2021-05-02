define('app/exts/helper', [
	'app/exts/dialog/index',
	'app/exts/globaltip/index',
	'app/exts/tip/index',
	'jquery',
	'app/i18n/index',
], function (t, e, n) {
	var i = t('app/exts/dialog/index'),
		o = t('app/exts/globaltip/index'),
		a = t('app/exts/tip/index'),
		r = t('jquery'),
		s = t('app/i18n/index'),
		l = {
			CAR_ICON_KEY: '__iconfont_car_icons__',
			HISTORY_COLOR_KEY: '__iconfont_history_colors__',
			HISTORY_DOWNLOAD_KEY: '__iconfont_history_download__',
			LAST_COLOR_KEY: '__iconfont_last_color_key__',
			LAST_SIZE_KEY: '__iconfont_last_size_key__',
			MOST_USE_COLOR: [
				'd81e06',
				'f4ea2a',
				'1afa29',
				'1296db',
				'13227a',
				'd4237a',
				'ffffff',
				'e6e6e6',
				'dbdbdb',
				'cdcdcd',
				'bfbfbf',
				'8a8a8a',
				'707070',
				'515151',
				'2c2c2c',
			],
			globalDialog: null,
			showTip: function (t) {
				a.show(t)
			},
			showGlobalTip: function (t) {
				r.isPlainObject(t) || (t = { content: t }), o.show(t)
			},
			showDialog: function (t, e) {
				;((e = e || {}).title = e.title || ''),
					(e.closePrevious =
						null === e.closePrevious || e.closePrevious),
					(e.mask = !0),
					(e.view = t),
					this.globalDialog &&
						e.closePrevious &&
						(this.globalDialog.close(), (this.globalDialog = null)),
					(this.globalDialog = i.msgbox(e))
			},
			hideDialog: function () {
				this.globalDialog && this.globalDialog.close()
			},
			showLogin: function () {
				this.showDialog('app/views/common/login', {
					dockClass: 'block-login-wrap',
					width: 400,
					height: 550,
					viewOptions: {},
				})
			},
			showAlipay: function (t) {
				this.showDialog('app/views/common/alipay', {
					dockClass: 'block-alipay-wrap',
					width: 322,
					height: 400,
					viewOptions: t,
				})
			},
			showInfo: function (t) {
				this.globalDialog = i.msgbox({
					title: '',
					mask: !0,
					content: t,
					dockClass: 'block-info',
					width: 280,
					height: 80,
					hasclose: !1,
				})
			},
			showLegal: function (t) {
				var e = !1
				t && (e = t.hasclose || !1),
					this.showDialog('app/views/common/legal', {
						dockClass: 'block-legal',
						width: 800,
						height: 550,
						hasclose: e,
						maskClickClose: !e,
						viewOptions: t,
					})
			},
			showAlert: function (t, e) {
				this.globalDialog = i.msgbox({
					title: '',
					mask: !0,
					content: t,
					dockClass: 'block-alert',
					width: 280,
					height: 130,
					hasclose: !1,
					buttons: [
						{ text: s.COMMON_CONFIRM, fn: e, dock: 'btn-red' },
					],
				})
			},
			showConfirm: function (t, e, n, o) {
				this.globalDialog = i.msgbox(
					r.extend(
						{
							title: '',
							mask: !0,
							content: t,
							dockClass: 'block-confirm',
							width: 300,
							height: 150,
							hasclose: !1,
							maskClickClose: !0,
							buttons: [
								{
									text: s.COMMON_CONFIRM,
									dock: 'btn-red mr20',
									fn: e,
								},
								{
									text: s.COMMON_CANCEL,
									dock: 'btn-grayc',
									fn: n,
								},
							],
						},
						o || {}
					)
				)
			},
			injectIconHasAddcar: function (t) {
				var e = this.getItem(this.CAR_ICON_KEY),
					n = r.map(e, function (t) {
						return t.id
					})
				r.each(t, function (t, e) {
					;-1 !== r.inArray(e.id, n) && (e.isSelected = !0)
				})
			},
			addIconsToHistory: function (t) {
				r.isArray(t) || (t = [t])
				for (
					var e = r.map(t, function (t) {
							return {
								id: t.id,
								name: t.name,
								show_svg: t.show_svg,
								projectId: t.projectId || -1,
							}
						}),
						t = this.getItem(this.HISTORY_DOWNLOAD_KEY) || [],
						e = e.concat(t),
						n = [],
						o = {},
						i = 0;
					i < e.length;
					i++
				)
					o[e[i].id] || (n.push(e[i]), (o[e[i].id] = 1))
				this.setItem(this.HISTORY_DOWNLOAD_KEY, n.slice(0, 100))
			},
			setItem: function (t, e) {
				;(r.isPlainObject(e) || r.isArray(e)) &&
					(e = JSON.stringify(e)),
					window.localStorage.setItem(t, e)
			},
			getItem: function (e) {
				e = window.localStorage.getItem(e)
				try {
					return JSON.parse(e)
				} catch (t) {
					return e
				}
			},
			clear: function () {
				window.localStorage.clear()
			},
		},
		l = r.extend(l, {
			formateNumber: function (t) {
				return t
					? t.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
					: 0
			},
			hasKey: function (t, e) {
				for (var n in t) if (t.hasOwnProperty(n) && n == e) return !0
				return !1
			},
			filter: function (t, e) {
				for (var n = [], o = 0; o < t.length; o++)
					e(t[o], o) && n.push(t[o])
				return n
			},
			inArray: function (t, e) {
				return -1 !== this.indexOf(t, e)
			},
			_compare: function (t, e) {
				return t === e
			},
			indexOf: function (t, e, n) {
				if (null === t) return -1
				for (
					var o = 0, i = t.length, a = n || this._compare;
					o < i;
					o++
				)
					if (a(t[o], e)) return o
				return -1
			},
			findAndRemove: function (t, e) {
				e = l.indexOf(t, e)
				~e && t.splice(e, 1)
			},
			findAndReplace: function (t, e, n) {
				e = l.indexOf(t, e)
				~e && t.splice(e, 1, n)
			},
			findIndex: function (t, e) {
				var n,
					o = t.length
				if (0 == o) return -1
				for (n = 0; n < o; n++) if (!0 === e(t[n])) return n
			},
		})
	;(l = r.extend(l, {
		I18N_KEY: 'locale',
		createCookie: function (t, e, n) {
			var o = n
				? ((o = new Date()).setTime(
						o.getTime() + 24 * n * 60 * 60 * 1e3
				  ),
				  '; expires=' + o.toGMTString())
				: ''
			document.cookie =
				encodeURIComponent(t) +
				'=' +
				encodeURIComponent(e) +
				o +
				'; path=/'
		},
		readCookie: function (t) {
			for (
				var e = encodeURIComponent(t) + '=',
					n = document.cookie.split(';'),
					o = 0;
				o < n.length;
				o++
			) {
				for (var i = n[o]; ' ' === i.charAt(0); )
					i = i.substring(1, i.length)
				if (0 === i.indexOf(e))
					return decodeURIComponent(i.substring(e.length, i.length))
			}
			return null
		},
		eraseCookie: function (t) {
			createCookie(t, '', -1)
		},
	})),
		(l = r.extend(l, {
			renderDuoshuo: function (t, e) {
				var n = document.createElement('div')
				n.setAttribute('data-thread-key', e.key),
					n.setAttribute('data-url', window.location.href),
					n.setAttribute('data-title', e.title),
					window.DUOSHUO.EmbedThread(n),
					r('#' + t).append(n)
			},
			renderChangyan: function (i, a) {
				r.getScript('//changyan.sohu.com/upload/changyan.js').done(
					function (t, e) {
						var n = document.createElement('div')
						n.setAttribute('id', 'SOHUCS'),
							n.setAttribute('sid', a.key),
							r('#' + i).append(n),
							window.changyan.api.config({
								appid: 'cysXHh0HU',
								conf: 'prod_8132a1c60a3c63e5761ac5cd65fcf60d',
							})
						var o = function () {
							;(r('#MZAD_POP_PLACEHOLDER').length ||
								r('#pop_ad').length) &&
								(r('#MZAD_POP_PLACEHOLDER').remove(),
								r('#pop_ad').remove()),
								setTimeout(o, 2e3)
						}
						setTimeout(o, 2e3)
					}
				)
			},
		})),
		(l = r.extend(l, {
			getCpFn: function (p) {
				return 'name' === p || 'font_class' === p
					? function (t, e) {
							;(t = t[p].toString()), (e = e[p].toString())
							var n = /[0-9]+/g,
								o = t.match(n),
								i = e.match(n)
							if (!o || !i) return t.localeCompare(e)
							for (
								var a = 0, r = Math.min(o.length, i.length);
								a < r;
								a++
							) {
								var s = t.indexOf(o[a]),
									l = e.indexOf(i[a]),
									c = t.substring(0, s),
									d = t.substring(0, l),
									u = o[a],
									f = i[a],
									h = parseInt(u),
									g = parseInt(f)
								if (s != l || c != d) return t.localeCompare(e)
								if (u !== f)
									return h == g
										? f.lastIndexOf(g + '') -
												u.lastIndexOf(h + '')
										: h - g
								if (a == r - 1)
									return t
										.substring(s)
										.localeCompare(e.substring(l))
								;(t = t.substring(s + u.length)),
									(e = e.substring(s + u.length))
							}
					  }
					: function (t, e) {
							return t[p] < e[p] ? 1 : -1
					  }
			},
			sortIcons: function (t, e) {
				if (!e) return t
				if (!t || 0 === t.length) return []
				e = this.getCpFn(e)
				return t.sort(e), t
			},
		})),
		(l = r.extend(l, {
			showDownloadDialog: function (t) {
				l.showDialog('app/views/common/download_icon', {
					viewOptions: t,
					width: 910,
					height: 631,
					dockClass: 'download-dialog',
				})
			},
			showEditDialog: function (t) {
				l.showDialog('app/views/common/edit_icon', {
					viewOptions: t,
					width: 910,
					height: 685,
					dockClass: 'edit-dialog',
				})
			},
			showDownloadCopyright: function (t) {
				l.showDialog('app/views/common/download_copyright', {
					dockClass: 'block-download-copyright',
					mask: !0,
					title: '\u7d20\u6750\u7248\u6743\u8bf4\u660e',
					width: 550,
					height: 350,
					hasclose: !1,
					maskClickClose: !1,
					viewOptions: t,
					closePrevious: !1,
				})
			},
		})),
		(l = r.extend(l, {
			SIGN_ATTR: ['fill', 'fill-opacity'],
			ICON_ASCENT: 896,
			inSignAttr: function (t) {
				if (t) return l.inArray(l.SIGN_ATTR, t)
			},
			generateAttrs: function (t) {
				for (
					var e = t.attributes, n = [], o = 0, i = e.length;
					o < i;
					o++
				)
					l.inSignAttr(e[o].nodeName.toLowerCase()) &&
						n.push(
							e[o].nodeName.toLowerCase() +
								'="' +
								e[o].nodeValue +
								'"'
						)
				return n.join(';')
			},
		}))
	var c = -1 < navigator.userAgent.indexOf('Safari'),
		d = -1 < navigator.userAgent.indexOf('Chrome'),
		u = -1 < navigator.userAgent.indexOf('Firefox'),
		f = !!document.documentMode,
		h = !f && !!window.StyleMedia
	d && (c = !1),
		(l = r.extend(l, {
			isSafari: function () {
				return c
			},
			isChrome: function () {
				return d
			},
			isFirefox: function () {
				return u
			},
			isIE: function () {
				return !(!f && !h)
			},
		})),
		(n.exports = l)
})
