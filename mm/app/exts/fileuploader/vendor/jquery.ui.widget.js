define('app/exts/fileuploader/vendor/jquery.ui.widget', ['jquery'], function (
	t,
	e,
	i
) {
	var n
	;(n = function (d) {
		var s,
			i = 0,
			a = Array.prototype.slice
		;(d.cleanData =
			((s = d.cleanData),
			function (t) {
				for (var e, i, n = 0; null != (i = t[n]); n++)
					try {
						;(e = d._data(i, 'events')) &&
							e.remove &&
							d(i).triggerHandler('remove')
					} catch (t) {}
				s(t)
			})),
			(d.widget = function (t, i, e) {
				var n,
					s,
					o,
					r,
					a = {},
					u = t.split('.')[0]
				return (
					(t = t.split('.')[1]),
					e || ((e = i), (i = d.Widget)),
					(d.expr[':'][(n = u + '-' + t).toLowerCase()] = function (t) {
						return !!d.data(t, n)
					}),
					(d[u] = d[u] || {}),
					(s = d[u][t]),
					(o = d[u][t] = function (t, e) {
						if (!this._createWidget) return new o(t, e)
						arguments.length && this._createWidget(t, e)
					}),
					d.extend(o, s, {
						version: e.version,
						_proto: d.extend({}, e),
						_childConstructors: [],
					}),
					((r = new i()).options = d.widget.extend({}, r.options)),
					d.each(e, function (e, n) {
						function s() {
							return i.prototype[e].apply(this, arguments)
						}
						function o(t) {
							return i.prototype[e].apply(this, t)
						}
						d.isFunction(n)
							? (a[e] = function () {
									var t,
										e = this._super,
										i = this._superApply
									return (
										(this._super = s),
										(this._superApply = o),
										(t = n.apply(this, arguments)),
										(this._super = e),
										(this._superApply = i),
										t
									)
							  })
							: (a[e] = n)
					}),
					(o.prototype = d.widget.extend(
						r,
						{ widgetEventPrefix: (s && r.widgetEventPrefix) || t },
						a,
						{ constructor: o, namespace: u, widgetName: t, widgetFullName: n }
					)),
					s
						? (d.each(s._childConstructors, function (t, e) {
								var i = e.prototype
								d.widget(i.namespace + '.' + i.widgetName, o, e._proto)
						  }),
						  delete s._childConstructors)
						: i._childConstructors.push(o),
					d.widget.bridge(t, o),
					o
				)
			}),
			(d.widget.extend = function (t) {
				for (
					var e, i, n = a.call(arguments, 1), s = 0, o = n.length;
					s < o;
					s++
				)
					for (e in n[s])
						(i = n[s][e]),
							n[s].hasOwnProperty(e) &&
								void 0 !== i &&
								(d.isPlainObject(i)
									? (t[e] = d.isPlainObject(t[e])
											? d.widget.extend({}, t[e], i)
											: d.widget.extend({}, i))
									: (t[e] = i))
				return t
			}),
			(d.widget.bridge = function (o, e) {
				var r = e.prototype.widgetFullName || o
				d.fn[o] = function (i) {
					var t = 'string' == typeof i,
						n = a.call(arguments, 1),
						s = this
					return (
						t
							? this.each(function () {
									var t,
										e = d.data(this, r)
									return 'instance' === i
										? ((s = e), !1)
										: e
										? d.isFunction(e[i]) && '_' !== i.charAt(0)
											? (t = e[i].apply(e, n)) !== e && void 0 !== t
												? ((s = t && t.jquery ? s.pushStack(t.get()) : t), !1)
												: void 0
											: d.error(
													"no such method '" +
														i +
														"' for " +
														o +
														' widget instance'
											  )
										: d.error(
												'cannot call methods on ' +
													o +
													" prior to initialization; attempted to call method '" +
													i +
													"'"
										  )
							  })
							: (n.length && (i = d.widget.extend.apply(null, [i].concat(n))),
							  this.each(function () {
									var t = d.data(this, r)
									t
										? (t.option(i || {}), t._init && t._init())
										: d.data(this, r, new e(i, this))
							  })),
						s
					)
				}
			}),
			(d.Widget = function () {}),
			(d.Widget._childConstructors = []),
			(d.Widget.prototype = {
				widgetName: 'widget',
				widgetEventPrefix: '',
				defaultElement: '<div>',
				options: { disabled: !1, create: null },
				_createWidget: function (t, e) {
					;(e = d(e || this.defaultElement || this)[0]),
						(this.element = d(e)),
						(this.uuid = i++),
						(this.eventNamespace = '.' + this.widgetName + this.uuid),
						(this.bindings = d()),
						(this.hoverable = d()),
						(this.focusable = d()),
						e !== this &&
							(d.data(e, this.widgetFullName, this),
							this._on(!0, this.element, {
								remove: function (t) {
									t.target === e && this.destroy()
								},
							}),
							(this.document = d(e.style ? e.ownerDocument : e.document || e)),
							(this.window = d(
								this.document[0].defaultView || this.document[0].parentWindow
							))),
						(this.options = d.widget.extend(
							{},
							this.options,
							this._getCreateOptions(),
							t
						)),
						this._create(),
						this._trigger('create', null, this._getCreateEventData()),
						this._init()
				},
				_getCreateOptions: d.noop,
				_getCreateEventData: d.noop,
				_create: d.noop,
				_init: d.noop,
				destroy: function () {
					this._destroy(),
						this.element
							.unbind(this.eventNamespace)
							.removeData(this.widgetFullName)
							.removeData(d.camelCase(this.widgetFullName)),
						this.widget()
							.unbind(this.eventNamespace)
							.removeAttr('aria-disabled')
							.removeClass(this.widgetFullName + '-disabled ui-state-disabled'),
						this.bindings.unbind(this.eventNamespace),
						this.hoverable.removeClass('ui-state-hover'),
						this.focusable.removeClass('ui-state-focus')
				},
				_destroy: d.noop,
				widget: function () {
					return this.element
				},
				option: function (t, e) {
					var i,
						n,
						s,
						o = t
					if (0 === arguments.length) return d.widget.extend({}, this.options)
					if ('string' == typeof t)
						if (((o = {}), (t = (i = t.split('.')).shift()), i.length)) {
							for (
								n = o[t] = d.widget.extend({}, this.options[t]), s = 0;
								s < i.length - 1;
								s++
							)
								(n[i[s]] = n[i[s]] || {}), (n = n[i[s]])
							if (((t = i.pop()), 1 === arguments.length))
								return void 0 === n[t] ? null : n[t]
							n[t] = e
						} else {
							if (1 === arguments.length)
								return void 0 === this.options[t] ? null : this.options[t]
							o[t] = e
						}
					return this._setOptions(o), this
				},
				_setOptions: function (t) {
					for (var e in t) this._setOption(e, t[e])
					return this
				},
				_setOption: function (t, e) {
					return (
						(this.options[t] = e),
						'disabled' === t &&
							(this.widget().toggleClass(
								this.widgetFullName + '-disabled',
								!!e
							),
							e &&
								(this.hoverable.removeClass('ui-state-hover'),
								this.focusable.removeClass('ui-state-focus'))),
						this
					)
				},
				enable: function () {
					return this._setOptions({ disabled: !1 })
				},
				disable: function () {
					return this._setOptions({ disabled: !0 })
				},
				_on: function (s, o, t) {
					var r,
						a = this
					'boolean' != typeof s && ((t = o), (o = s), (s = !1)),
						t
							? ((o = r = d(o)), (this.bindings = this.bindings.add(o)))
							: ((t = o), (o = this.element), (r = this.widget())),
						d.each(t, function (t, e) {
							function i() {
								if (
									s ||
									(!0 !== a.options.disabled &&
										!d(this).hasClass('ui-state-disabled'))
								)
									return ('string' == typeof e ? a[e] : e).apply(a, arguments)
							}
							'string' != typeof e &&
								(i.guid = e.guid = e.guid || i.guid || d.guid++)
							var n = t.match(/^([\w:-]*)\s*(.*)$/),
								t = n[1] + a.eventNamespace,
								n = n[2]
							n ? r.delegate(n, t, i) : o.bind(t, i)
						})
				},
				_off: function (t, e) {
					;(e =
						(e || '').split(' ').join(this.eventNamespace + ' ') +
						this.eventNamespace),
						t.unbind(e).undelegate(e),
						(this.bindings = d(this.bindings.not(t).get())),
						(this.focusable = d(this.focusable.not(t).get())),
						(this.hoverable = d(this.hoverable.not(t).get()))
				},
				_delay: function (t, e) {
					var i = this
					return setTimeout(function () {
						return ('string' == typeof t ? i[t] : t).apply(i, arguments)
					}, e || 0)
				},
				_hoverable: function (t) {
					;(this.hoverable = this.hoverable.add(t)),
						this._on(t, {
							mouseenter: function (t) {
								d(t.currentTarget).addClass('ui-state-hover')
							},
							mouseleave: function (t) {
								d(t.currentTarget).removeClass('ui-state-hover')
							},
						})
				},
				_focusable: function (t) {
					;(this.focusable = this.focusable.add(t)),
						this._on(t, {
							focusin: function (t) {
								d(t.currentTarget).addClass('ui-state-focus')
							},
							focusout: function (t) {
								d(t.currentTarget).removeClass('ui-state-focus')
							},
						})
				},
				_trigger: function (t, e, i) {
					var n,
						s,
						o = this.options[t]
					if (
						((i = i || {}),
						((e = d.Event(e)).type = (t === this.widgetEventPrefix
							? t
							: this.widgetEventPrefix + t
						).toLowerCase()),
						(e.target = this.element[0]),
						(s = e.originalEvent))
					)
						for (n in s) n in e || (e[n] = s[n])
					return (
						this.element.trigger(e, i),
						!(
							(d.isFunction(o) &&
								!1 === o.apply(this.element[0], [e].concat(i))) ||
							e.isDefaultPrevented()
						)
					)
				},
			}),
			d.each({ show: 'fadeIn', hide: 'fadeOut' }, function (o, r) {
				d.Widget.prototype['_' + o] = function (e, t, i) {
					var n = (t = 'string' == typeof t ? { effect: t } : t)
							? (!0 !== t && 'number' != typeof t && t.effect) || r
							: o,
						s = !d.isEmptyObject(
							(t = 'number' == typeof (t = t || {}) ? { duration: t } : t)
						)
					;(t.complete = i),
						t.delay && e.delay(t.delay),
						s && d.effects && d.effects.effect[n]
							? e[o](t)
							: n !== o && e[n]
							? e[n](t.duration, t.easing, i)
							: e.queue(function (t) {
									d(this)[o](), i && i.call(e[0]), t()
							  })
				}
			})
		d.widget
	}),
		'function' == typeof define && define.amd
			? define(['jquery'], n)
			: n('object' == typeof e ? t('jquery') : jQuery)
})
