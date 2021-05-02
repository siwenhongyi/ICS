define('app/exts/suggest/index', [
	'magix',
	'jquery',
	'app/i18n/index',
	'app/exts/helper',
], function (e, i, t) {
	var r = e('magix'),
		o = e('jquery'),
		a = e('app/i18n/index'),
		c = e('app/exts/helper'),
		s = '.suggest'
	t.exports = r.View.extend({
		tmpl:
			'<% if(icons.length > 0) { %> <ul class="dropdown-menu icons-box"><li class="all"><a href="/search/index?searchType=icon&q=" class="item">**COMMON_SUGGEST_ICON**</a></li> <% for(var i = 0; i < icons.length; i++) { %> <li data-value="<%- icons[i].name %>"><a href="/search/index?searchType=icon&q=<%- icons[i].name %>" class="item"><%- icons[i].name %></a></li> <% } %> </ul> <% } %> <% if(svgs.length > 0) { %> <ul class="dropdown-menu icons-box"><li class="all"><a href="/search/index?searchType=illustration&q=" class="item">**COMMON_SUGGEST_ILLUSTRATION**</a></li> <% for(var i = 0; i < svgs.length; i++) { %> <li data-value="<%- svgs[i].name %>"><a href="/search/index?searchType=illustration&q=<%- svgs[i].name %>" class="item"><%- svgs[i].name %></a></li> <% } %> </ul> <% } %> <% if(users.length > 0) { %> <ul class="dropdown-menu users-box"><li class="all"><a href="/search/index?searchType=user&q=" class="item">**COMMON_SUGGEST_USER**</a></li> <% for(var j = 0; j < users.length; j++) { %> <li data-value="<%- users[j].nickname %>"><dl><dt><a vclick-ignore href="/user/detail?uid=<%= users[j].id %>"><img src="<%- users[j]._avatar %>"></a></dt><dd><a vclick-ignore href="/user/detail?uid=<%= users[j].id %>"><%- users[j].nickname %></a></dd></dl></li> <% } %> </ul> <% } %>',
		ctor: function (e) {
			this.$options = e
		},
		render: function () {
			;(this.$input = o('#' + this.$options.target)),
				(this.$element = o('#' + this.id)),
				this.update({}, !0)
		},
		update: function (e, i) {
			var t = this
			;(e.users = e.users || []),
				o.each(e.users, function (e, i) {
					i._avatar = t.adaptImg(
						i.avatar,
						1 < window.devicePixelRatio ? '60' : '30'
					)
				}),
				(t.tmpl = a.i18nReplace(t.tmpl))
			e = o.tmpl(this.tmpl)({
				icons: e.icons || [],
				users: e.users || [],
				svgs: e.svgs || [],
				searchType: e.searchType,
			})
			this.setHTML(this.id, e)
			var s = this.$input.val()
			i ||
				(o('.suggest-box .all').attr('data-value', s).find('em').html(s),
				o('.suggest-box .all > a').each(function (e, i) {
					var t = o(i).attr('href')
					o(i).attr('href', t + s)
				}),
				this.$element.show()),
				(this.$menu = this.$element.find('.dropdown-menu')),
				this._bindEvent()
		},
		_bindEvent: function () {
			var i = this,
				e = this.$menu.find('> li')
			this.$input
				.off('keyup' + s)
				.on('keyup' + s, function (e) {
					i._handlerHooks[e.which]
						? i._handler(e)
						: i._inputValue(e.target.value.trim())
				})
				.on('focus' + s, function (e) {
					e.target.value && i._inputValue(e.target.value.trim())
				}),
				this.$element
					.off('mouseover' + s)
					.on('mouseover' + s, '.dropdown-menu > li', function (e) {
						e = o(e.currentTarget)
						o('.dropdown-menu>li').removeClass('active'), e.addClass('active')
					}),
				e.off('click' + s).on('click' + s, function (e) {
					i.close()
				})
			e = 'click' + s + '_' + this.id
			o(document.body)
				.off(e)
				.on(e, function (e) {
					i.$input[0] !== e.target &&
						(i.$element.has(e.target).length || i.close())
				})
		},
		_handler: function (e) {
			var i = this._items()
			this._handlerHooks[e.which].call(this, e, i.all, i.active, i.index)
		},
		_items: function () {
			var e = this.$menu.find('> li'),
				i = e.filter('.active'),
				t = e.index(i)
			return {
				all: e,
				active: i,
				index: t,
			}
		},
		_inputValue: function (e) {
			var i = this
			e
				? ((i.Handlevalue = e),
				  i.inTriggerValue ||
						((i.inTriggerValue = !0),
						(i.delayChange = setTimeout(function () {
							o('#' + i.id).trigger({
								type: 'changeValue',
								value: i.Handlevalue,
							}),
								(i.inTriggerValue = !1),
								i.close()
						}, 800))))
				: this.close()
		},
		_moveTo: function (e, i, t) {
			var s
			if (this.$element.is(':visible'))
				return (
					i || t || ((t = e), (e = (s = this._items()).all), (i = s.active)),
					(t = (t + e.length) % e.length),
					i.removeClass('active'),
					e.eq(t).addClass('active'),
					this.$input.val(o(e[t]).attr('data-value')),
					this
				)
		},
		_handlerHooks: {
			38: function (e, i, t, s) {
				this._moveTo(i, t, --s)
			},
			40: function (e, i, t, s) {
				this._moveTo(i, t, ++s)
			},
			13: function (e, i, t, s) {
				this.delayChange &&
					(clearTimeout(this.delayChange), (this.inTriggerValue = !1))
				var a = this.$input.val(),
					n = r.config().searchType || 'icon',
					l = r.Router.parse().path
				'icon' === n && '/search/index' === l
					? r.Router.to({
							q: a,
							page: 1,
							searchType: n,
							fromCollection: c.getItem('fromCollection') || '1',
							fills: '',
							tag: '',
					  })
					: -1 === s
					? this.to('/search/index?searchType=' + n + '&q=' + a)
					: this.to(o(t).find('a').attr('href')),
					this.close()
			},
			27: function (e, i, t, s) {
				this.close()
			},
		},
		open: function () {
			this.$element.show()
		},
		close: function () {
			this.$element.hide()
		},
		destroy: function () {
			this.$element.remove()
			var e = 'click' + s + '_' + this.id
			o(document.body).off(e)
		},
	})
})
