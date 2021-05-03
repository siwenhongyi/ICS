define('app/exts/pagination/index', ['magix', 'jquery'], function (e, t, a) {
	var p,
		g,
		s = e('magix'),
		n = e('jquery')
	;(p = n).fn.pagination ||
		((g = {
			init: function (e) {
				var t = p.extend(
						{
							items: 1,
							itemsOnPage: 1,
							pages: 0,
							displayedPages: 5,
							edges: 2,
							currentPage: 0,
							hrefTextPrefix: '#page-',
							hrefTextSuffix: '',
							prevText: '&#xe621;',
							nextText: '&#xe620;',
							ellipseText: '&hellip;',
							ellipsePageSet: !0,
							cssStyle: 'light-theme',
							listStyle: '',
							labelMap: [],
							selectOnClick: !0,
							nextAtFront: !1,
							invertPageOrder: !1,
							useStartEdge: !0,
							useEndEdge: !0,
							onPageClick: function (e, t) {},
							onInit: function () {},
						},
						e || {}
					),
					a = this
				return (
					(t.pages =
						t.pages ||
						(Math.ceil(t.items / t.itemsOnPage)
							? Math.ceil(t.items / t.itemsOnPage)
							: 1)),
					t.currentPage
						? (t.currentPage = t.currentPage - 1)
						: (t.currentPage = t.invertPageOrder ? t.pages - 1 : 0),
					(t.halfDisplayed = t.displayedPages / 2),
					this.each(function () {
						a.addClass(t.cssStyle + ' simple-pagination').data('pagination', t),
							g._draw.call(a)
					}),
					t.onInit(),
					this
				)
			},
			selectPage: function (e) {
				return g._selectPage.call(this, e - 1), this
			},
			prevPage: function () {
				var e = this.data('pagination')
				return (
					e.invertPageOrder
						? e.currentPage < e.pages - 1 &&
						  g._selectPage.call(this, e.currentPage + 1)
						: 0 < e.currentPage && g._selectPage.call(this, e.currentPage - 1),
					this
				)
			},
			nextPage: function () {
				var e = this.data('pagination')
				return (
					e.invertPageOrder
						? 0 < e.currentPage && g._selectPage.call(this, e.currentPage - 1)
						: e.currentPage < e.pages - 1 &&
						  g._selectPage.call(this, e.currentPage + 1),
					this
				)
			},
			getPagesCount: function () {
				return this.data('pagination').pages
			},
			setPagesCount: function (e) {
				this.data('pagination').pages = e
			},
			getCurrentPage: function () {
				return this.data('pagination').currentPage + 1
			},
			destroy: function () {
				return this.empty(), this
			},
			drawPage: function (e) {
				var t = this.data('pagination')
				return (
					(t.currentPage = e - 1),
					this.data('pagination', t),
					g._draw.call(this),
					this
				)
			},
			redraw: function () {
				return g._draw.call(this), this
			},
			disable: function () {
				var e = this.data('pagination')
				return (
					(e.disabled = !0),
					this.data('pagination', e),
					g._draw.call(this),
					this
				)
			},
			enable: function () {
				var e = this.data('pagination')
				return (
					(e.disabled = !1),
					this.data('pagination', e),
					g._draw.call(this),
					this
				)
			},
			updateItems: function (e) {
				var t = this.data('pagination')
				;(t.items = e),
					(t.pages = g._getPages(t)),
					this.data('pagination', t),
					g._draw.call(this)
			},
			updateItemsOnPage: function (e) {
				var t = this.data('pagination')
				return (
					(t.itemsOnPage = e),
					(t.pages = g._getPages(t)),
					this.data('pagination', t),
					g._selectPage.call(this, 0),
					this
				)
			},
			getItemsOnPage: function () {
				return this.data('pagination').itemsOnPage
			},
			_draw: function () {
				var e = this.data('pagination'),
					t = g._getInterval(e)
				g.destroy.call(this),
					(a =
						'function' == typeof this.prop
							? this.prop('tagName')
							: this.attr('tagName')),
					p(
						'<span class="total">\u5171 ' + e.pages + ' \u9875</span>'
					).appendTo(this)
				var a =
					'UL' === a
						? this
						: p(
								'<ul' +
									(e.listStyle ? ' class="' + e.listStyle + '"' : '') +
									'></ul>'
						  ).appendTo(this)
				if (
					(e.prevText &&
						g._appendItem.call(
							this,
							e.invertPageOrder ? e.currentPage + 1 : e.currentPage - 1,
							{ text: e.prevText, classes: 'prev' }
						),
					e.nextText &&
						e.nextAtFront &&
						g._appendItem.call(
							this,
							e.invertPageOrder ? e.currentPage - 1 : e.currentPage + 1,
							{ text: e.nextText, classes: 'next' }
						),
					e.invertPageOrder)
				) {
					if (t.end < e.pages && 0 < e.edges) {
						if (e.useStartEdge) {
							var s = Math.max(e.pages - e.edges, t.end)
							for (i = e.pages - 1; s <= i; i--) g._appendItem.call(this, i)
						}
						e.pages - e.edges > t.end && e.pages - e.edges - t.end != 1
							? a.append(
									'<li class="disabled"><span class="ellipse">' +
										e.ellipseText +
										'</span></li>'
							  )
							: e.pages - e.edges - t.end == 1 &&
							  g._appendItem.call(this, t.end)
					}
				} else if (0 < t.start && 0 < e.edges) {
					if (e.useStartEdge)
						for (var n = Math.min(e.edges, t.start), i = 0; i < n; i++)
							g._appendItem.call(this, i)
					e.edges < t.start && t.start - e.edges != 1
						? a.append(
								'<li class="disabled"><span class="ellipse">' +
									e.ellipseText +
									'</span></li>'
						  )
						: t.start - e.edges == 1 && g._appendItem.call(this, e.edges)
				}
				if (e.invertPageOrder)
					for (i = t.end - 1; i >= t.start; i--) g._appendItem.call(this, i)
				else for (i = t.start; i < t.end; i++) g._appendItem.call(this, i)
				if (e.invertPageOrder) {
					if (
						0 < t.start &&
						0 < e.edges &&
						(e.edges < t.start && t.start - e.edges != 1
							? a.append(
									'<li class="disabled"><span class="ellipse">' +
										e.ellipseText +
										'</span></li>'
							  )
							: t.start - e.edges == 1 && g._appendItem.call(this, e.edges),
						e.useEndEdge)
					)
						for (i = (n = Math.min(e.edges, t.start)) - 1; 0 <= i; i--)
							g._appendItem.call(this, i)
				} else if (
					t.end < e.pages &&
					0 < e.edges &&
					(e.pages - e.edges > t.end && e.pages - e.edges - t.end != 1
						? a.append(
								'<li class="disabled"><span class="ellipse">' +
									e.ellipseText +
									'</span></li>'
						  )
						: e.pages - e.edges - t.end == 1 && g._appendItem.call(this, t.end),
					e.useEndEdge)
				)
					for (i = s = Math.max(e.pages - e.edges, t.end); i < e.pages; i++)
						g._appendItem.call(this, i)
				e.nextText &&
					!e.nextAtFront &&
					g._appendItem.call(
						this,
						e.invertPageOrder ? e.currentPage - 1 : e.currentPage + 1,
						{ text: e.nextText, classes: 'next' }
					),
					e.ellipsePageSet && !e.disabled && g._ellipseClick.call(this, a)
			},
			_getPages: function (e) {
				return Math.ceil(e.items / e.itemsOnPage) || 1
			},
			_getInterval: function (e) {
				return {
					start: Math.ceil(
						e.currentPage > e.halfDisplayed
							? Math.max(
									Math.min(
										e.currentPage - e.halfDisplayed,
										e.pages - e.displayedPages
									),
									0
							  )
							: 0
					),
					end: Math.ceil(
						e.currentPage > e.halfDisplayed
							? Math.min(e.currentPage + e.halfDisplayed, e.pages)
							: Math.min(e.displayedPages, e.pages)
					),
				}
			},
			_appendItem: function (t, e) {
				var a,
					s = this,
					n = s.data('pagination'),
					i = p('<li></li>'),
					r = s.find('ul'),
					l = {
						text: (t = t < 0 ? 0 : t < n.pages ? t : n.pages - 1) + 1,
						classes: '',
					}
				n.labelMap.length && n.labelMap[t] && (l.text = n.labelMap[t]),
					(l = p.extend(l, e || {})),
					t == n.currentPage || n.disabled
						? (n.disabled || 'prev' === l.classes || 'next' === l.classes
								? i.addClass('disabled')
								: i.addClass('active'),
						  (a = p('<span class="current">' + l.text + '</span>')))
						: (a = p(
								'<a href="' +
									n.hrefTextPrefix +
									(t + 1) +
									n.hrefTextSuffix +
									'" class="page-link">' +
									l.text +
									'</a>'
						  )).click(function (e) {
								return g._selectPage.call(s, t, e)
						  }),
					l.classes && a.addClass(l.classes),
					i.append(a),
					(r.length ? r : s).append(i)
			},
			_selectPage: function (e, t) {
				var a = this.data('pagination')
				return (
					(a.currentPage = e),
					a.selectOnClick && g._draw.call(this),
					a.onPageClick(e + 1, t)
				)
			},
			_ellipseClick: function (e) {
				var s = this,
					n = this.data('pagination'),
					i = e.find('.ellipse')
				i.addClass('clickable').parent().removeClass('disabled'),
					i.click(function (e) {
						var t, a
						return (
							n.disable ||
								((t = p(this)),
								(a = (parseInt(t.parent().prev().text(), 10) || 0) + 1),
								t
									.html(
										'<input type="number" min="1" max="' +
											n.pages +
											'" step="1" value="' +
											a +
											'">'
									)
									.find('input')
									.focus()
									.click(function (e) {
										e.stopPropagation()
									})
									.keyup(function (e) {
										var t = p(this).val()
										13 === e.which && '' !== t
											? 0 < t && t <= n.pages && g._selectPage.call(s, t - 1)
											: 27 === e.which && i.empty().html(n.ellipseText)
									})
									.bind('blur', function (e) {
										var t = p(this).val()
										return (
											'' !== t && g._selectPage.call(s, t - 1),
											i.empty().html(n.ellipseText),
											!1
										)
									})),
							!1
						)
					})
			},
		}),
		(p.fn.pagination = function (e) {
			return g[e] && '_' != e.charAt(0)
				? g[e].apply(this, Array.prototype.slice.call(arguments, 1))
				: 'object' != typeof e && e
				? void p.error('Method ' + e + ' does not exist on jQuery.pagination')
				: g.init.apply(this, arguments)
		}))
	var i = 'keyup'
	a.exports = s.View.extend({
		ctor: function (e) {
			var t = this
			n(document)
				.off(i)
				.on(i, function (e) {
					37 === parseInt(e.keyCode) && t.pg && t.pg.pagination('prevPage'),
						39 === parseInt(e.keyCode) && t.pg && t.pg.pagination('nextPage')
				}),
				t.on('destroy', function () {
					n(document).off(i)
				})
		},
		render: function () {
			var e = '#' + this.id,
				t = n(e)
			this.$options = {
				items: t.attr('data-items'),
				currentPage: t.attr('data-currentPage'),
				itemsOnPage: t.attr('data-itemsOnPage'),
			}
			e = n.extend(
				{
					items: 100,
					itemsOnPage: 10,
					currentPage: 1,
					cssStyle: 'light-theme',
					onPageClick: function (e, t) {
						t && t.preventDefault(),
							n(window).scrollTop(0),
							s.Router.to({ page: e })
					},
				},
				this.$options
			)
			this.pg = t.pagination(e)
		},
	})
})
