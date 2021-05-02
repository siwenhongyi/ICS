define('app/views/search/index', [
	'magix',
	'jquery',
	'app/exts/helper',
	'app/i18n/index',
], function (e, a, i) {
	var s = e('magix'),
		o = e('jquery'),
		c = e('app/exts/helper'),
		r = e('app/i18n/index'),
		d = [
			{
				name: '\u6240\u6709\u56fe\u6807',
				id: -1,
				ename: 'All Icon',
			},
			{
				name: '\u7cbe\u9009\u56fe\u6807',
				id: 1,
				ename: 'Select Icon',
			},
		],
		m = [
			{
				name: '\u6240\u6709\u989c\u8272',
				id: '',
				ename: 'All Color',
			},
			{
				name: '\u591a\u8272\u56fe\u6807',
				id: '1',
				ename: 'Mono Color',
			},
			{
				name: '\u5355\u8272\u56fe\u6807',
				id: '0',
				ename: 'Multi Color',
			},
		],
		p = [
			{
				name: '\u5168\u90e8',
				id: '',
				ename: 'All',
			},
			{
				name: '\u7ebf\u6027',
				id: 'line',
				ename: 'Linear',
			},
			{
				name: '\u9762\u6027',
				id: 'fill',
				ename: 'Filling',
			},
			{
				name: '\u6241\u5e73',
				id: 'flat',
				ename: 'Flat',
			},
			{
				name: '\u624b\u7ed8',
				id: 'hand',
				ename: 'Freehand',
			},
			{
				name: '\u7b80\u7ea6',
				id: 'simple',
				ename: 'Simple',
			},
			{
				name: '\u7cbe\u7f8e',
				id: 'complex',
				ename: 'Delicate',
			},
		]
	i.exports = s.View.extend({
		tmpl:
			'<div class="block-sub-banner"><div class="block-sub-banner-bg"><div class="planet-wrap wrap"><div class="planet planet-9"></div><div class="planet planet-10"></div><div class="planet planet-11"></div><div class="planet planet-12"></div></div></div><div class="block-sub-banner-min-container wrap"><span class="title">"{{q}}"</span> <span class="count" id="J_search_count">{{count}}</span> {{#if(manageViewType===\'icon\' )}} <span class="content">icons</span> {{/if}} {{#if(manageViewType===\'user\' )}} <span class="content">users</span> {{/if}} {{#if(manageViewType===\'illustration\' )}} <span class="content">illustrations</span> {{/if}} {{#if(manageViewType===\'icon\' )}} {{/if}}</div></div><div t-if="manageViewType===\'icon\'" class="block-search-filter"><div class="block-search-filter-content wrap clearfix"><div mx-change="setFilter({tag:\'fromCollection\'})" class="mr20 fl" style="width:160px;border-radius: 20px" mx-view="app/exts/dropdown/index" mx-options="{searchbox:0,selected:\'{{fromCollection}}\',list:\'{{fromCollectionList}}\'}"></div><div mx-change="setFilter({tag:\'fills\'})" class="fl" style="width:160px;border-radius: 20px" mx-view="app/exts/dropdown/index" mx-options="{searchbox:0,selected:\'{{fills}}\',list:\'{{fillsList}}\'}"></div><div class="block-tag-filter clearfix fl" style="margin-left: 90px">{{#for(aiTag in aiTagList)}}<div class="fl tag-item" mx-click="setTag({tag:\'{{aiTag.id}}\'})" t-class:current="aiTag.id == tag">{{aiTag.name}}</div>{{/for}}</div></div></div><div class="page-manage-container" mx-view="{{subView}}"><div class="spinner"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div></div>',
		ctor: function () {
			this.observe(['q', 'searchType', 'fromCollection', 'fills', 'tag'])
		},
		render: function () {
			var e = this,
				a = e.param('searchType') || 'icon',
				i = e.param('q') || 'iconfont',
				n = e.param('fromCollection') || '',
				t = e.param('fills') || '',
				l = e.param('tag') || ''
			n
				? c.setItem('fromCollection', n + '')
				: ((n = c.getItem('fromCollection') || '1'), (n += '')),
				-1 !== window.location.href.indexOf('fills=')
					? c.setItem('fills', t + '')
					: null !== (t = c.getItem('fills'))
					? (t += '')
					: (t = ''),
				r.isZh ||
					(o.each(d, function (e, a) {
						a.name = a.ename
					}),
					o.each(m, function (e, a) {
						a.name = a.ename
					}),
					o.each(p, function (e, a) {
						a.name = a.ename
					})),
				(e.data = {
					manageViewType: a,
					subView: 'app/views/search/' + a + '/index',
					count: '?',
					q: i,
					fromCollection: n,
					fills: t,
					fromCollectionList: JSON.stringify(d),
					fillsList: JSON.stringify(m),
					aiTagList: p,
					tag: l,
				}),
				s.config({
					fromCollection: n,
					fills: t,
				}),
				e.setView().then(function () {
					e.animateLoading()
				})
		},
		'setFilter<change>': function (e) {
			var a = {
				page: 1,
			}
			;(a[e.params.tag] = e.value), s.Router.to(a)
		},
		'setTag<click>': function (e) {
			var a = {
				page: 1,
			}
			;(a.tag = e.params.tag), s.Router.to(a)
		},
		setCount: function (e) {
			;(this.data.count = e), o('#J_search_count').html(e)
		},
		'filter<click>': function (e) {
			var a = {
				page: 1,
			}
			s.mix(a, e.params), s.Router.to(a)
		},
	})
})
