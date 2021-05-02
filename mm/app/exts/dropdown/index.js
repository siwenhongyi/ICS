define('app/exts/dropdown/index', ['magix', '$'], function (e, i, t) {
	var s = e('magix'),
		d = e('$')
	t.exports = s.View.extend({
		tmpl:
			'<div class="dropdown-wrapper"><div class="dropdown-toggle" mx-click="toggle()" title="{{selected}}"><span class="dropdown-toggle-label">{{listMap[selected].name}} </span><span class="iconfont dropdown-arrow">&#xe607;</span></div><div class="dropdown-menu-wrapper">{{#if(searchbox)}}<div class="searchbox"><label class="searchbox-wrapper"><span class="iconfont search-icon">&#xe645;</span> <input type="text" placeholder="\u641c\u7d22\u5173\u952e\u8bcd" mx-keyup="search()" class="input search-input"/></label></div>{{/if}}<ul class="dropdown-menu" id="list_<%=viewId%>">{{#for(item in list)}}<li title="{{name}}" class="dropdown-item" t-class:hidden="item.hidden"><a href="javascript:;" class="item-link ellipsis" t-class:active="item.id == selected" mx-click="select({index:{{__INDEX__}}})">{{item.name}}</a></li>{{/for}}</ul></div></div>',
		ctor: function (e) {
			var i = this,
				t = d('#' + this.id)
			;(i.data = {
				selected: e.selected,
				list: JSON.parse(e.list),
				viewId: i.id,
				searchbox: 0 != e.searchbox,
			}),
				0 == i.data.list.length &&
					((i.data.list = [
						{
							name: '\u8bf7\u9009\u62e9',
							id: 'none',
						},
					]),
					(i.data.selected = 'none')),
				(i.data.listMap = s.toMap(i.data.list, 'id')),
				t.addClass('dropdown'),
				i.on('destroy', function () {
					d(document).off('click.dropdown')
				})
		},
		render: function () {
			var i = this
			i.setView()
			var e = d('#list_' + i.id),
				t = e.find('.active').position(),
				s = e.height(),
				a = e.prop('scrollTop')
			t &&
				(t.top < 0 || t.top > s) &&
				((s = t.top - s + a + s / 2), e.prop('scrollTop', s)),
				d(document).on('click.dropdown', function (e) {
					0 < d(e.target).closest('#' + i.id).length ||
						d('#' + i.id).removeClass('dropdown-open')
				})
		},
		'search<keyup>': function (e) {
			for (
				var i = d.trim(e.target.value), t = this.data.list, s = 0;
				s < t.length;
				s++
			)
				-1 !== t[s].name.indexOf(i) ? (t[s].hidden = !1) : (t[s].hidden = !0)
			this.setView()
		},
		'toggle<click>': function () {
			d('#' + this.id).toggleClass('dropdown-open')
		},
		'select<click>': function (e) {
			var i = this,
				e = e.params.index,
				e = this.data.list[e].id
			;(this.data.selected = e),
				d('#' + this.id).trigger({
					type: 'change',
					value: e,
				}),
				this.setView().done(function () {
					d('#' + i.id).removeClass('dropdown-open')
				})
		},
	})
})
