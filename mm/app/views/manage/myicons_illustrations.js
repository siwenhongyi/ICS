define('app/views/manage/myicons_illustrations', [
	'magix',
	'app/models/manage/index',
	'app/exts/helper',
	'app/i18n/index',
], function (i, l, a) {
	var c = i('magix'),
		e = i('app/models/manage/index'),
		t = c.Router,
		o = i('app/exts/helper')
	i('app/i18n/index')
	a.exports = c.View.extend({
		tmpl:
			'<div class="page-manage-project"><div class="project-manage-bar" style="margin-top:-33px"><ul class="type-select clearfix"><li class="bigli" t-class:current="type == \'0\'" mx-click="changeType(\'0\')" data-spm-click="gostr=/alimama.30;locaid=dalfcd733d8">**MANAGE_COLLECTIONS_ILLUSTRATION_CREATED**</li><li class="bigli" t-class:current="type == \'1\'" mx-click="changeType(\'1\')" data-spm-click="gostr=/alimama.30;locaid=d786ff62f">**MANAGE_COLLECTIONS_ILLUSTRATION_JOINED**</li><li class="cover bigli cover-{{type}}"></li></ul></div></div>{{^if(collections.length === 0)}}<div class="collection-list mod-illustrations-wrap small">{{#for(collection in collections)}}<div class="block-collection" mx-click="detail({{collection.id}})" data-spm-click="gostr=/alimama.30;locaid=d8d89fddd">{{#if(collection.has_temp == 1)}} <span mx-click="editCollection({{collection.id}})" data-spm-click="gostr=/alimama.30;locaid=daiebc0d7b3" class="collection-tip collection-tip-pending">\u5ba1\u6838\u4e2d </span>{{/if}} {{#if(collection.has_secret == 0)}} <span class="secret-tip">**MANAGE_COLLECTIONS_TYPE_PUBLIC**</span> {{/if}} {{#if(collection.has_secret != 0)}} <span class="secret-tip secret-true">**MANAGE_COLLECTIONS_TYPE_PRIVATE**</span> {{/if}}<div class="svgs-container"><ul class="block-illustration-list">{{#for(icon in collection.icons)}}<li class="icon-wrap">{{#if(icon.file)}} <img src="{{icon.file}}" loading="lazy" alt="{{icon.name}}"> {{/if}}</li>{{/for}}</ul></div><div class="collection-info mt10 clearfix"><span class="info-item"><i class="iconfont">&#xe617;</i>{{collection.name}}</span> <span class="info-item fr">**MANAGE_COLLECTIONS_NUMBER** {{collection.all_count}}</span></div><div class="collection-info clearfix">{{#if(type == 0)}} <span class="info-item"><i class="iconfont">&#xe64d;</i>{{collection.lastTime}} </span>{{/if}} {{^if(type == 0)}} <a href="/user/detail?uid={{collection.User.id}}" title="**MANAGE_COLLECTIONS_CREATOR**" data-spm-click="gostr=/alimama.30;locaid=d562d1f9f" vclick-ignore="true" target="_blank" class="info-item color-333i cur"><span class="avatar avatar-min mr10"><img src="{{collection.User.avatar|adaptImg100}}"> </span><span style="display: inline-block;overflow: hidden;max-width: 100px;height: 30px;vertical-align: middle;text-overflow: ellipsis;white-space: nowrap">{{*collection.User.nickname}}</span> </a>{{/if}} <span mx-click="editCollection({{collection.id}})" data-spm-click="gostr=/alimama.30;locaid=dai7492989f" class="info-item fr cur" t-class:hide="collection.user_role === 3"><i class="iconfont">&#xe636;</i>**MANAGE_ICONS_COLLECTION_EDIT** </span><span mx-click="delCollection({{collection.id}})" data-spm-click="gostr=/alimama.30;locaid=dac3b7c769" class="info-item fr cur" t-class:hide="type !== \'0\'"><i class="iconfont">&#xe643;</i>**MANAGE_ICONS_COLLECTION_DEL**</span></div></div>{{/for}}</div>{{/if}} {{#if(collections.length === 0)}}<div class="block-no-results"><img src="//img.alicdn.com/tfs/TB1PhV7uoY1gK0jSZFMXXaWcVXa-164-142.svg" alt=""><div class="message">**COMMON_NO_RESULT**</div></div>{{/if}}',
		ctor: function () {
			this.observe(['keyword']), (this.data = { type: '0' })
		},
		render: function () {
			this.getDate()
		},
		getDate: function () {
			var l = this
			function i(i) {
				;(i.collections = o.filter(i.collections, function (i) {
					return new RegExp(l.param('keyword')).test(i.name)
				})),
					(l.data.collections = i.collections),
					l.setView()
			}
			l.wrapModel(e),
				'0' === l.data.type
					? l.wrapModel(e).getMyCollections({ type: 'illustration' }, i)
					: l
							.wrapModel(e)
							.getMyJoinedSvgCollections({ type: 'illustration' }, i)
		},
		'detail<click>': function (i) {
			i = i.params
			t.to('/illustrations/detail', { cid: i })
		},
		'editCollection<click>': function (i) {
			t.to('/manage/index?manage_type=myicons&icontype=illustration_handle', {
				collectionId: i.params,
			}),
				i.stopPropagation()
		},
		'delCollection<click>': function (i) {
			var l = this
			o.showConfirm(
				'\u786e\u8ba4\u5220\u9664\u8be5\u63d2\u753b\u5e93\u5417\uff1f',
				function () {
					l.wrapModel(e).delCollection(i.params, function () {
						l.render()
					})
				}
			),
				i.stopPropagation()
		},
		'changeType<click>': function (i) {
			;(this.data = { type: i.params }), this.getDate()
		},
	})
})
