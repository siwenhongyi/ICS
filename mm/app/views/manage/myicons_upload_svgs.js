define('app/views/manage/myicons_upload_svgs', [
	'magix',
	'app/models/manage/index',
	'app/models/common/index',
	'app/exts/helper',
	'app/i18n/index',
	'jquery',
], function (a, e, c) {
	var i = a('magix'),
		n = a('app/models/manage/index'),
		s = a('app/models/common/index'),
		t = a('app/exts/helper'),
		o = a('app/i18n/index'),
		l = a('jquery')
	c.exports = i.View.extend({
		tmpl:
			'<div class="manage-right-top uploads-top"><span class="top-title">**MANAGE_ILLUSTRATION_UPLOADS**</span> <span class="top-text">{{count}} **MANAGE_ILLUSTRATION_TITLE_UNIT**</span> <span class="top-text" mx-click="banchSelect()" data-spm-click="gostr=/alimama.30;locaid=d89e60a8f" t-class:hide="showBanchSelect"><em class="iconfont">&#xe64c;</em> **MANAGE_ICONS_UPLOADS_BATCH**</span><div class="upload-manage-bar" t-class:hide="!showBanchSelect"><span class="btn btn-normal mr10" mx-click="banchSelect()" data-spm-click="gostr=/alimama.30;locaid=d9eee4358">**MANAGE_ICONS_BATCH_CANCEL**</span> <span class="btn btn-normal mr10" mx-click="banchDel()" data-spm-click="gostr=/alimama.30;locaid=d79c5b6e9">**MANAGE_ICONS_BATCH_DEL**</span> <span class="ml10 vm"><input type="checkbox" class="mr5" mx-click="banchAll()" data-spm-click="gostr=/alimama.30;locaid=dd6ff0a5e" id="J_banch_all_check"/><label for="J_banch_all_check">**MANAGE_ICONS_BATCH_CHECK_ALL**</label></span></div></div><div class="uploads-iconlist">{{^if(icons.length === 0)}}<ul class="block-icon-list block-svg-list clearfix" t-class:select-model="showBanchSelect">{{#for(icon in icons)}}<li class="J_icon_id_{{icon.id}}"><div class="icon-twrap" t-class:tbackground="icon.file | tbackground"><img src="{{icon.file}}" loading="lazy" alt="{{icon.name}}"></div><span class="icon-name" title="{{*icon.name}}">{{*icon.name}}</span> {{#if(icon.is_private === 1)}} <span class="icon-tag"><span class="iconfont icon-yincang"></span></span> {{/if}}<div class="icon-cover"><span title="**COMMON_DEL_ICON**" mx-click="delIcon({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=d5ebba5df" class="cover-item iconfont icon-shanchu"></span> <span title="**COMMON_DOWN_ICON**" mx-click="downloadIcon({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=dbf7ec7d7" class="cover-item iconfont icon-xiazai"></span></div><div class="icon-select-cover" mx-click="addSelected({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=d69514a88"></div></li>{{/for}}</ul>{{/if}} {{#if(icons.length === 0)}}<div class="block-no-results"><img src="//img.alicdn.com/tfs/TB1PhV7uoY1gK0jSZFMXXaWcVXa-164-142.svg" alt=""><div class="message">**COMMON_NO_RESULT**</div></div>{{/if}}<div t-class:hidden="icons.length === 0" data-itemsonpage="{{pageSize}}" class="block-pagination mt20 pr40" mx-view="app/exts/pagination/index" data-items="{{count}}" data-currentpage="{{page}}"></div></div>',
		ctor: function () {
			this.observe(['keyword', 'sortType', 'page'])
		},
		render: function () {
			var e = this,
				c = e.param('page') || 1,
				i = e.param('pageSize') || 15
			e.wrapModel(n).getUploadSvgsList({ limit: i, page: c }, function (a) {
				l.extend(a, { page: c, pageSize: i }), e._render(a)
			})
		},
		_render: function (a) {
			var e = this
			a.icons = t.filter(a.icons, function (a) {
				return new RegExp(e.param('keyword')).test(a.name)
			})
			var c = e.param('sortType')
			;(a.icons = t.sortIcons(a.icons, c)),
				(e.icons = a.icons),
				(e.data = {
					icons: a.icons,
					count: a.count,
					banchSelectedIcons: [],
					showBanchSelect: !1,
					type: 'all',
					pageSize: a.pageSize,
					page: a.page,
				}),
				e.setView().then(function () {
					i.Vframe.get('magix_vf_car').invoke('domSelected')
				})
		},
		'car<click>': function (a) {
			var e = a.params.index,
				e = this.data.icons[e],
				a = l(a.target).parents('li')
			a.hasClass('selected')
				? (i.Vframe.get('magix_vf_car').invoke('removeIcon', e),
				  a.removeClass('selected'))
				: (i.Vframe.get('magix_vf_car').invoke('addIcon', e),
				  a.addClass('selected'))
		},
		'editIcon<click>': function (a) {
			a = a.params.id
			t.showEditDialog({ iconId: a })
		},
		'downloadIcon<click>': function (a) {
			a = a.params.id
			t.showDownloadDialog({ iconId: a, isIllustration: !0 })
		},
		'banchSelect<click>': function (a) {
			var e = this
			;(e.banchSelectedIcons = []),
				e.data.showBanchSelect
					? ((e.data.showBanchSelect = !1),
					  l('.icon-select-cover').removeClass('selected'))
					: (e.data.showBanchSelect = !0),
				e.setView()
		},
		'banchDel<click>': function (a) {
			var e = this,
				c = l.map(e.banchSelectedIcons, function (a) {
					return a.id
				})
			c && 0 !== c.length
				? t.showConfirm(
						'\u4f60\u786e\u5b9a\u5220\u9664\u8fd9\u4e9b\u63d2\u753b\u5417\uff1f',
						function () {
							e.wrapModel(s).delSvg({ ids: c.join(',') }, function (a) {
								e.render()
							})
						}
				  )
				: t.showGlobalTip(o.TIPS_NEED_ICON)
		},
		'banchCar<click>': function (a) {
			var e = this
			e.banchSelectedIcons && 0 !== e.banchSelectedIcons.length
				? (i.Vframe.get('magix_vf_car').invoke('banchAddIcons', {
						icons: e.banchSelectedIcons,
				  }),
				  l('.icon-select-cover').removeClass('selected'),
				  (e.data.banchSelectedIcons = []),
				  (e.data.showBanchSelect = !1),
				  e.setView().then(function () {
						i.Vframe.get('magix_vf_car').invoke('domSelected')
				  }))
				: t.showGlobalTip(o.TIPS_NEED_ICON)
		},
		'banchAll<click>': function (a) {
			var c = this
			c.data.showBanchSelect &&
				'input' === a.target.tagName.toLowerCase() &&
				((c.banchSelectedIcons = []),
				l('#J_banch_all_check')[0].checked
					? l.each(c.data.icons, function (a, e) {
							1 !== parseInt(e.freeze) &&
								(l('.J_icon_id_' + e.id)
									.find('.icon-select-cover')
									.addClass('selected'),
								c.banchSelectedIcons.push(e))
					  })
					: l('.icon-select-cover').removeClass('selected'),
				c.setView())
		},
		'addSelected<click>': function (a) {
			var e = a.params.index,
				c = this.data.icons[e],
				e = l(a.target),
				a = this.banchSelectedIcons
			e.hasClass('selected')
				? (e.removeClass('selected'), t.findAndRemove(a, c))
				: (e.addClass('selected'), a.push(c))
		},
		'delIcon<click>': function (a) {
			var e = this,
				c = a.params.index,
				i = a.params.id
			t.showConfirm(
				'\u4f60\u786e\u5b9a\u5220\u9664\u8fd9\u4e2a\u63d2\u753b\u5417\uff1f',
				function () {
					e.wrapModel(s).delSvg({ ids: i }, function (a) {
						;(e.icons = t.filter(e.icons, function (a) {
							return a.id !== i
						})),
							e.data.icons.splice(c, 1),
							e.setView()
					})
				}
			)
		},
		'changeType<click>': function (e) {
			var a = this
			;(a.data.type = e.params),
				(a.data.icons = t.filter(a.icons, function (a) {
					return 'public' === e.params
						? 1 !== a.is_private
						: 'hide' !== e.params || 1 === a.is_private
				})),
				a.setView()
		},
		resetIcons: function (e, c, a) {
			var i = this
			;(i.icons = l.map(i.icons, function (a) {
				return -1 < e.indexOf(a.id) && (a.is_private = c ? 1 : 0), a
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
		'banchHide<click>': function (e) {
			var c = this,
				i = l.map(c.banchSelectedIcons, function (a) {
					return a.id
				})
			i && 0 !== i.length
				? t.showConfirm(o.MANAGE_ICONS_PRIVATE_CONFIRM, function () {
						c.wrapModel(s).privateIcon(
							{ ids: i.join(','), hide: !0 },
							function (a) {
								c.resetIcons(i, !0, e)
							}
						)
				  })
				: t.showGlobalTip(o.TIPS_NEED_ICON)
		},
		'banchPublic<click>': function (e) {
			var c = this,
				i = l.map(c.banchSelectedIcons, function (a) {
					return a.id
				})
			i && 0 !== i.length
				? t.showConfirm(o.MANAGE_ICONS_PUBLIC_CONFIRM, function () {
						c.wrapModel(s).privateIcon(
							{ ids: i.join(','), hide: !1 },
							function (a) {
								c.resetIcons(i, !1, e)
							}
						)
				  })
				: t.showGlobalTip(o.TIPS_NEED_ICON)
		},
	})
})
