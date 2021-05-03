define('app/views/manage/myicons_uploads', [
	'magix',
	'app/models/manage/index',
	'app/models/common/index',
	'app/exts/helper',
	'app/i18n/index',
	'jquery',
], function (a, c, e) {
	var i = a('magix'),
		n = a('app/models/manage/index'),
		s = a('app/models/common/index'),
		t = a('app/exts/helper'),
		o = a('app/i18n/index'),
		l = a('jquery')
	e.exports = i.View.extend({
		tmpl:
			'<div class="manage-right-top uploads-top"><span class="top-title">**MANAGE_ICONS_UPLOADS**</span> <span class="top-text">{{count}} **NAV_ICONS**</span> <span class="top-text" mx-click="banchSelect()" data-spm-click="gostr=/alimama.30;locaid=d89e60a8f" t-class:hide="showBanchSelect"><em class="iconfont">&#xe64c;</em> **MANAGE_ICONS_UPLOADS_BATCH**</span><div class="upload-manage-bar" t-class:hide="!showBanchSelect"><span class="btn btn-normal mr10" mx-click="banchSelect()" data-spm-click="gostr=/alimama.30;locaid=d9eee4358">**MANAGE_ICONS_BATCH_CANCEL**</span> <span class="btn btn-normal mr10" mx-click="banchDel()" data-spm-click="gostr=/alimama.30;locaid=d79c5b6e9">**MANAGE_ICONS_BATCH_DEL**</span> <span class="btn btn-normal mr10" mx-click="banchCar()" data-spm-click="gostr=/alimama.30;locaid=d400df9cd">**MANAGE_ICONS_BATCH_CAR**</span> {{#if(iconPageType == \'public\' || iconPageType == \'all\')}} <span class="btn btn-normal mr10" mx-click="banchHide()">**MANAGE_ICONS_BATCH_PRIVATE**</span> {{/if}} {{#if(iconPageType == \'private\' || iconPageType == \'all\')}} <span class="btn btn-normal mr10" mx-click="banchPublic()">**MANAGE_ICONS_BATCH_PUBLIC**</span> {{/if}} <span class="ml10 vm"><input type="checkbox" class="mr5" mx-click="banchAll()" data-spm-click="gostr=/alimama.30;locaid=dd6ff0a5e" id="J_banch_all_check"/><label for="J_banch_all_check">**MANAGE_ICONS_BATCH_CHECK_ALL**</label></span></div></div><div class="uploads-iconlist"><div class="uploads-bar"><ul class="type-select clearfix"><li t-class:current="type == \'all\'" mx-click="changeType(\'all\')">**MANAGE_ICONS_ALL_TAB**</li><li t-class:current="type == \'public\'" mx-click="changeType(\'public\')">**MANAGE_ICONS_PUBLIC_TAB**</li><li class="uploads-tab-hide" t-class:current="type == \'private\'" mx-click="changeType(\'private\')">**MANAGE_ICONS_PRIVATE_TAB** <i class="iconfont icon-jieshi tips"><span class="cover-btn-tips">**PRIVATE_ICON_DETAIL**</span></i></li><li class="cover cover-{{type}}"></li></ul></div>{{^if(icons.length === 0)}}<ul class="block-icon-list clearfix" t-class:select-model="showBanchSelect">{{#for(icon in icons)}}<li class="J_icon_id_{{icon.id}}"><div class="icon-twrap" t-class:tbackground="icon.show_svg | tbackground">{{{icon.show_svg}}}</div><span class="icon-name" title="{{*icon.name}}">{{*icon.name}}</span> {{#if(icon.is_private === 1)}} <span class="icon-tag"><span class="iconfont icon-yincang"></span></span> {{/if}}<div class="icon-cover"><span title="**COMMON_ADD_TO_CAR**" mx-click="car({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=d8ecf2275" class="cover-item iconfont icon-gouwuche1"></span> <span title="**COMMON_EDIT_ICON**" mx-click="editIcon({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=dc37a0174" class="cover-item iconfont icon-bianji"></span> <span title="**COMMON_DEL_ICON**" mx-click="delIcon({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=d5ebba5df" class="cover-item iconfont icon-shanchu"></span> <span title="**COMMON_DOWN_ICON**" mx-click="downloadIcon({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=dbf7ec7d7" class="cover-item iconfont icon-xiazai"></span></div><div class="icon-select-cover" mx-click="addSelected({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=d69514a88"></div></li>{{/for}}</ul>{{/if}} {{#if(icons.length === 0)}}<div class="block-no-results"><img src="//img.alicdn.com/tfs/TB1PhV7uoY1gK0jSZFMXXaWcVXa-164-142.svg" alt=""><div class="message">**COMMON_NO_RESULT**</div></div>{{/if}}<div t-class:hidden="icons.length === 0" data-itemsonpage="{{pageSize}}" class="block-pagination mt20 pr40" mx-view="app/exts/pagination/index" data-items="{{count}}" data-currentpage="{{page}}"></div></div>',
		ctor: function () {
			this.observe(['keyword', 'sortType', 'page', 'icon_page_type'])
		},
		render: function () {
			var a = this,
				c = a.param('icon_page_type') || 'all',
				e = a.param('page') || 1
			a.getUploadsList({ limit: 40, page: e, type: c })
		},
		getUploadsList: function (c) {
			var e = this
			e.wrapModel(n).getUploadsList(c, function (a) {
				l.extend(a, { page: c.page, pageSize: c.limit, type: c.type }),
					e._render(a)
			})
		},
		_render: function (a) {
			var c = this,
				e = c.param('sortType')
			;(a.icons = t.sortIcons(a.icons, e)),
				(c.icons = a.icons),
				(c.data = {
					icons: a.icons,
					count: a.count,
					banchSelectedIcons: [],
					showBanchSelect: !1,
					type: a.type,
					pageSize: a.pageSize,
					page: a.page,
				}),
				c.setView().then(function () {
					i.Vframe.get('magix_vf_car').invoke('domSelected')
				})
		},
		'car<click>': function (a) {
			var c = a.params.index,
				c = this.data.icons[c],
				a = l(a.target).parents('li')
			a.hasClass('selected')
				? (i.Vframe.get('magix_vf_car').invoke('removeIcon', c),
				  a.removeClass('selected'))
				: (i.Vframe.get('magix_vf_car').invoke('addIcon', c),
				  a.addClass('selected'))
		},
		'editIcon<click>': function (a) {
			a = a.params.id
			t.showEditDialog({ iconId: a })
		},
		'downloadIcon<click>': function (a) {
			a = a.params.id
			t.showDownloadDialog({ iconId: a })
		},
		'banchSelect<click>': function (a) {
			var c = this
			;(c.banchSelectedIcons = []),
				c.data.showBanchSelect
					? ((c.data.showBanchSelect = !1),
					  l('.icon-select-cover').removeClass('selected'))
					: (c.data.showBanchSelect = !0),
				c.setView()
		},
		'banchDel<click>': function (a) {
			var c = this,
				e = l.map(c.banchSelectedIcons, function (a) {
					return a.id
				})
			e && 0 !== e.length
				? t.showConfirm(o.MANAGE_ICONS_DELETE_CONFIRM, function () {
						c.wrapModel(s).delIcon({ ids: e.join(',') }, function (a) {
							c.render()
						})
				  })
				: t.showGlobalTip(o.TIPS_NEED_ICON)
		},
		'banchCar<click>': function (a) {
			var c = this
			c.banchSelectedIcons && 0 !== c.banchSelectedIcons.length
				? (i.Vframe.get('magix_vf_car').invoke('banchAddIcons', {
						icons: c.banchSelectedIcons,
				  }),
				  l('.icon-select-cover').removeClass('selected'),
				  (c.data.banchSelectedIcons = []),
				  (c.data.showBanchSelect = !1),
				  c.setView().then(function () {
						i.Vframe.get('magix_vf_car').invoke('domSelected')
				  }))
				: t.showGlobalTip(o.TIPS_NEED_ICON)
		},
		'banchAll<click>': function (a) {
			var e = this
			e.data.showBanchSelect &&
				'input' === a.target.tagName.toLowerCase() &&
				((e.banchSelectedIcons = []),
				l('#J_banch_all_check')[0].checked
					? l.each(e.data.icons, function (a, c) {
							1 !== parseInt(c.freeze) &&
								(l('.J_icon_id_' + c.id)
									.find('.icon-select-cover')
									.addClass('selected'),
								e.banchSelectedIcons.push(c))
					  })
					: l('.icon-select-cover').removeClass('selected'),
				e.setView())
		},
		'addSelected<click>': function (a) {
			var c = a.params.index,
				e = this.data.icons[c],
				c = l(a.target),
				a = this.banchSelectedIcons
			c.hasClass('selected')
				? (c.removeClass('selected'), t.findAndRemove(a, e))
				: (c.addClass('selected'), a.push(e))
		},
		'delIcon<click>': function (a) {
			var c = this,
				e = a.params.index,
				i = a.params.id
			t.showConfirm(o.MANAGE_ICONS_UPLOADS_DEL_CONFIRM, function () {
				c.wrapModel(s).delIcon({ ids: i }, function (a) {
					;(c.icons = t.filter(c.icons, function (a) {
						return a.id !== i
					})),
						c.data.icons.splice(e, 1),
						c.setView()
				})
			})
		},
		'changeType<click>': function (a) {
			a = a.params
			;(this.data.iconPageType = a), this.to({ icon_page_type: a, page: 1 })
		},
		resetIcons: function (c, e, a) {
			var i = this
			;(i.icons = l.map(i.icons, function (a) {
				return -1 < c.indexOf(a.id) && (a.is_private = e ? 1 : 0), a
			})),
				(i.data.icons = t.filter(i.icons, function (a) {
					return 'public' === i.data.type
						? 1 !== a.is_private
						: 'hide' !== i.data.type || 1 === a.is_private
				})),
				t.showTip({
					target: a.trigger,
					msg:
						'<span class="iconfont mr10">&#xe611;</span>' +
						o.MANAGE_ICONS_PRIVATE_SUCCESS,
				}),
				(i.data.banchSelectedIcons = []),
				(i.data.showBanchSelect = !1),
				i.setView()
		},
		'banchHide<click>': function (c) {
			var e = this,
				i = l.map(e.banchSelectedIcons, function (a) {
					return a.id
				})
			i && 0 !== i.length
				? t.showConfirm(o.MANAGE_ICONS_PRIVATE_CONFIRM, function () {
						e.wrapModel(s).privateIcon(
							{ ids: i.join(','), hide: !0 },
							function (a) {
								e.resetIcons(i, !0, c)
							}
						)
				  })
				: t.showGlobalTip(o.TIPS_NEED_ICON)
		},
		'banchPublic<click>': function (c) {
			var e = this,
				i = l.map(e.banchSelectedIcons, function (a) {
					return a.id
				})
			i && 0 !== i.length
				? t.showConfirm(o.MANAGE_ICONS_PUBLIC_CONFIRM, function () {
						e.wrapModel(s).privateIcon(
							{ ids: i.join(','), hide: !1 },
							function (a) {
								e.resetIcons(i, !1, c)
							}
						)
				  })
				: t.showGlobalTip(o.TIPS_NEED_ICON)
		},
	})
})
