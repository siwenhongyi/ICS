define('app/exts', [
	'magix',
	'pat',
	'jquery',
	'app/models/manager',
	'app/i18n/index',
	'app/filters',
], function (t, e, n) {
	var d = t('magix'),
		u = t('pat'),
		f = t('jquery'),
		a = t('app/models/manager'),
		c = t('app/i18n/index'),
		m = t('app/filters'),
		i = d.Router
	d.View.merge({
		ctor: function () {
			;(this.$locker = {}),
				this.on('rendercall', function () {
					this.$locker = {}
				})
		},
		param: function (t) {
			return i.parse().params[t] || ''
		},
		changed: function (t) {
			return !!d.Router.diff().isParam(t)
		},
		I18N: c,
		to: function () {
			return i.to.apply(i, arguments)
		},
		request: function (t) {
			var e = new a()
			return this.capture(t || e.id, e, !0)
		},
		wrapModel: function (t) {
			return new t(this)
		},
		adaptImg: function (t, e) {
			return t
				? /tfscom/.test(t)
					? t + '_' + e + 'x' + e + '.jpg'
					: t + '@' + e + 'h_' + e + 'w.jpg'
				: '//img.alicdn.com/tps/TB1ld1GNFXXXXXLapXXXXXXXXXX-200-200.png'
		},
		animateLoading: function () {
			var t = f('.block-switch-loading')
			t.css({ opacity: 1, width: 0 }),
				t.stop().animate({ width: '100%' }, 200, 'linear', function () {
					setTimeout(function () {
						t.stop().animate({ opacity: 0 }, 250)
					}, 250)
				})
		},
		setView: function (t, e) {
			var n,
				a = this,
				i = f.Deferred(),
				r = f('#' + a.id),
				o = r[0],
				p = a.data
			return (
				a.rendered
					? (p.__inject__ ||
							(f.extend(a.__pat.$data, a.data),
							(a.data = a.__pat.$data)),
					  a.__pat.$apply(),
					  e && e(),
					  i.resolve())
					: (a.beginUpdate(a.id),
					  (a.tmpl = c.i18nReplace(a.tmpl)),
					  o &&
							((n = {
								el: r[0],
								data: p,
								template: a.tmpl,
								dataCheckType: 'dirtyCheck',
							}),
							(a.filters = a.filters || {}),
							(n.filters = f.extend(m, a.filters)),
							f.each(n.filters, function (t, e) {
								n.filters[t] = function () {
									return e.apply(a, arguments)
								}
							}),
							(a.__pat = new u(n)),
							a.__pat.on('beforeDeleteBlock', function (t) {
								f.each(t, function (t, e) {
									1 === e.nodeType &&
										a.owner.unmountZone &&
										a.owner.unmountZone(e)
								})
							}),
							a.__pat.on(
								'beforeUpdateAttribute',
								function (t, e, n) {
									if (/(mx-|data-)/.test(e))
										for (var a, i = 0; i < t.length; i++)
											!(a = t[i]).hasAttribute(
												'mx-view'
											) ||
												((a = d.Vframe.get(a.id)) &&
													a.unmountView())
								}
							),
							a.__pat.on(
								'afterUpdateAttribute',
								function (t, e, n) {
									if (/(mx-|data-)/.test(e))
										for (var a, i, r = 0; r < t.length; r++)
											!(i = t[r]).hasAttribute(
												'mx-view'
											) ||
												((a = d.Vframe.get(i.id)) &&
													a.mountView(
														i.getAttribute(
															'mx-view'
														)
													))
								}
							),
							a.__pat.on('afterAddBlock', function (t) {
								f.each(t, function (t, e) {
									1 === e.nodeType &&
										(e.getAttribute('mx-vframe')
											? (e.id ||
													(e.id =
														'mx_n_' +
														new Date().getTime()),
											  a.owner.mountVframe(
													e.id,
													e.getAttribute('mx-view')
											  ))
											: (e.id ||
													(e.id =
														'mx_n_' +
														new Date().getTime()),
											  a.owner.mountZone(e.id)))
								})
							}),
							(a.data = a.__pat.$data)),
					  a.endUpdate(a.id),
					  t && t.call(a),
					  i.resolve(),
					  a.on('destroy', function () {
							a.__pat && a.__pat.$destroy()
					  }),
					  (a.rendered = !0)),
				i.promise()
			)
		},
	}),
		(n.exports = d)
})
