define('app/views/manage/mylikes_library', [
	'magix',
	'app/models/manage/index',
	'app/exts/helper',
	'jquery',
], function (i, l, s) {
	var t = i('magix'),
		o = i('app/models/manage/index'),
		a = t.Router,
		c = i('app/exts/helper'),
		e = i('jquery')
	s.exports = t.View.extend({
		tmpl:
			'<div class="manage-right-top uploads-top"><span class="top-title">{{#if(type === "icon")}} **MANAGE_ICONS_COLLECTIONS_FAVORITE** {{/if}} {{#if(type === "illustration")}} **MANAGE_ILLUSTRATION_COLLECTIONS_FAVORITE** {{/if}} </span><span class="top-text">{{lists.length}} &nbsp; {{#if(type === "icon")}} **MANAGE_ICONS_COLLECTIONS_UNIT** {{/if}} {{#if(type === "illustration")}} **MANAGE_ILLUSTRATION_COLLECTIONS_UNIT** {{/if}}</span></div><div class="collection-list small" t-class:mod-illustrations-wrap="type==\'illustration\'">{{^if(lists.length === 0)}} {{#for(collection in lists)}}<div class="block-collection"><div class="hd" mx-click="detail({{collection.id}})" data-spm-click="gostr=/alimama.30;locaid=d8d89fddd"><div class="{{type==\'illustration\' ? \'svgs-container\' : \'icons-container\'}}"><ul t-class:block-illustration-list="type==\'illustration\'" t-class:hide="collection.has_secret == 1">{{#if(type === "icon")}} {{#for(icon in collection.icons)}}<li class="icon-wrap" t-class:tbackground="icon.show_svg | tbackground">{{{icon.show_svg}}}</li>{{/for}} {{/if}} {{#if(type === "illustration")}} {{#for(icon in collection.icons)}}<li class="icon-wrap"><img src="{{icon.file}}" loading="lazy" alt="{{icon.name}}"></li>{{/for}} {{/if}}</ul><div class="secret-cover" t-class:hide="collection.has_secret != 1"><img src="//gw.alicdn.com/tfs/TB1fZ.BcZVl614jSZKPXXaGjpXa-189-149.svg" alt=""><div class="info">**MANAGE_ICONS_COLLECTION_PRIVATE**</div></div></div><div class="collection-info mt10 clearfix"><span class="info-item"><i class="iconfont">&#xe617;</i>{{collection.name}}</span> <span class="info-item fr">{{collection.all_count}} icons</span></div></div><div class="collection-info clearfix"><span class="info-item"><i class="iconfont">&#xe64d;</i>{{collection.lastTime}} </span><span style="position: relative; z-index: 10" mx-click="delFavoriteCollection({{collection.id}})" data-spm-click="gostr=/alimama.30;locaid=dc3b7c769" class="info-item fr cur"><i class="iconfont">&#xe643;</i>\u53d6\u6d88\u6536\u85cf</span></div></div>{{/for}} {{/if}}</div>{{#if(lists.length === 0)}}<div class="block-no-results"><img src="//gw.alicdn.com/tfs/TB1jzWDb5pE_u4jSZKbXXbCUVXa-164-142.svg" alt=""><div class="message">**COMMON_NO_RESULT**</div></div>{{/if}}',
		ctor: function (i) {
			this.observe(['keyword']),
				(this.type = 'library' === i.subType ? 'icon' : i.subType)
		},
		render: function () {
			var l = this
			l.wrapModel(o).getMyCollectionFavorite(l.type, function (i) {
				;(i.lists = c.filter(i.lists, function (i) {
					return new RegExp(l.param('keyword')).test(i.name)
				})),
					(l.data = { lists: i.lists, type: l.type }),
					l.setView()
			})
		},
		'detail<click>': function (i) {
			var l = i.params,
				i =
					'icon' === this.type ? '/collections/detail' : '/illustrations/detail'
			a.to(i, { cid: l })
		},
		'delFavoriteCollection<click>': function (s) {
			var t = this,
				i = s.params
			t.request().all(
				[{ name: 'del_collection_favorite', params: { cid: i } }],
				function (i, l) {
					e(s.currentTarget).find('.iconfont').removeClass('icon-favorited'),
						t.render()
				}
			)
		},
	})
})
