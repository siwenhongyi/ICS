define('app/views/common/radius_btns', [
	'magix',
	'jquery',
	'app/exts/helper',
	'app/i18n/index',
	'mojs',
], function (a, c, s) {
	var i = a('magix'),
		n = a('jquery'),
		t = a('app/exts/helper'),
		e = a('app/i18n/index'),
		r = a('mojs')
	s.exports = i.View.extend({
		tmpl:
			'<div class="block-radius-btn-group clearfix">{{#if(!hidesearch)}} <span title="" id="J_radius_search_wrap" mx-mouseover="showSearch()" mx-mouseout="hideSearch()" class="radius-btn radius-btn-search" t-class:radius-btn-search-in="keyword"><input id="J_radius_search_input" class="inner-search-input" placeholder="{{placeholder}}" type="text" mx-focusout="hideSearch()" mx-keydown="listenKey()" value="{{keyword}}"> <em class="iconfont" mx-click="search()">&#xe645;</em> </span>{{/if}} {{#if(type === \'collection\')}} <span title="sort" class="iconfont radius-btn radius-btn-sort">&#xe61b;<div class="drop-wrap"><span class="drop-item" t-class:current="sortType == \'time\'" mx-click="sort(\'time\')" data-spm-click="gostr=/alimama.30;locaid=da38eeae4">**COLLECTION_SORT_TIME**</span> <span class="drop-item" t-class:current="sortType == \'like\'" mx-click="sort(\'like\')" data-spm-click="gostr=/alimama.30;locaid=d08b160f8">**COLLECTION_SORT_LIKE**</span> <span class="drop-item" t-class:current="sortType == \'favorite\'" mx-click="sort(\'favorite\')">\u6536\u85cf\u6570</span> <span class="drop-item" t-class:current="sortType == \'icon\'" mx-click="sort(\'icon\')" data-spm-click="gostr=/alimama.30;locaid=d2d8c0901">**COLLECTION_SORT_ICON**</span> <span class="drop-item" t-class:current="sortType == \'visit\'" mx-click="sort(\'visit\')" data-spm-click="gostr=/alimama.30;locaid=d4e96ac48">**COLLECTION_SORT_VISIT**</span></div></span>{{/if}} {{#if(type === \'manage-myicons-uploads\' || type === \'manage-myicons-histories\' || type === \'manage-myicons-collections\')}} <a title="**TITLE_UPLOAD_ICON**" href="/icons/upload" data-spm-click="gostr=/alimama.30;locaid=d1baf4ee7" class="iconfont radius-btn radius-btn-upload">&#xe640;</a> <a href="/manage/index?manage_type=myicons&icontype=collections_handle" data-spm-click="gostr=/alimama.30;locaid=d24296505" title="**MANAGE_ICONS_COLLECTIONS_NEW**" class="iconfont radius-btn radius-btn-new">&#xe616;</a> {{#if(type === \'manage-myicons-uploads\')}} <span title="sort" class="iconfont radius-btn radius-btn-sort">&#xe61b;<div class="drop-wrap drop-wrap-two"><span class="drop-item" t-class:current="sortType == \'id\'" mx-click="sort(\'id\')" data-spm-click="gostr=/alimama.30;locaid=d8f385a87">**COMMON_SORT_TIME**</span> <span class="drop-item" t-class:current="sortType == \'name\'" mx-click="sort(\'name\')" data-spm-click="gostr=/alimama.30;locaid=d2270cf50">**COMMON_SORT_NAME**</span></div></span>{{/if}} {{/if}} {{#if(type === \'manage-myicons-upload_svgs\' || type === \'manage-myicons-illustrations\')}} <a title="**TITLE_UPLOAD_ICON**" href="/icons/upload?type=illustration" data-spm-click="gostr=/alimama.30;locaid=8ubaf4ee7" class="iconfont radius-btn radius-btn-upload">&#xe640;</a> <a href="/manage/index?manage_type=myicons&icontype=illustration_handle" data-spm-click="gostr=/alimama.30;locaid=d24296505" title="**COLLECTIONS_ILLUSTRATION_UPLOAD_NEW**" class="iconfont radius-btn radius-btn-new">&#xe616;</a> {{/if}} {{#if(type === \'manage-myprojects\')}} <span mx-click="newProject()" data-spm-click="gostr=/alimama.30;locaid=d86a8d51b" title="**MANAGE_PROJECTS_DIALOG_TITLE_NEW**" class="iconfont radius-btn radius-btn-new">&#xe639;</span> <span title="sort" class="iconfont radius-btn radius-btn-sort">&#xe61b;<div class="drop-wrap"><span class="drop-item" t-class:current="sortType == \'\'" mx-click="sort(\'\')" data-spm-click="gostr=/alimama.30;locaid=dc193e603">**COMMON_SORT_TIME**</span> <span class="drop-item" t-class:current="sortType == \'name\'" mx-click="sort(\'name\')" data-spm-click="gostr=/alimama.30;locaid=dca74c5c7">**COMMON_SORT_NAME**</span> <span class="drop-item" t-class:current="sortType == \'unicode\'" mx-click="sort(\'unicode\')" data-spm-click="gostr=/alimama.30;locaid=d3b5b0cf9">**COMMON_SORT_UINCODE**</span> <span class="drop-item" t-class:current="sortType == \'font_class\'" mx-click="sort(\'font_class\')" data-spm-click="gostr=/alimama.30;locaid=d97bc781b">**COMMON_SORT_FONTCLASS**</span></div></span>{{/if}} {{#if(type === \'user\')}} {{#if(isLike !== undefined)}} <span class="radius-btn radius-btn-dianzan" title="\u70b9\u8d5e" mx-click="changeLikeCollection()"><span class="icon-dianzan iconfont"></span> <img src="https://img.alicdn.com/tfs/TB1WBKfH4naK1RjSZFtXXbC2VXa-120-140.gif" alt="" class="animation" t-if="showAnimation"> </span>{{/if}} {{#if(type === \'user\')}} {{#if(isFavorite !== undefined)}} <span class="radius-btn radius-btn-like" title="\u6536\u85cf\u56fe\u6807\u5e93" mx-click="changeFavoriteCollection()"><span class="icon-favorite {{activeClass}} iconfont"></span> </span>{{/if}} <span class="radius-btn radius-btn-share"><span class="iconfont radius-btn-inner">&#xe632;</span><div class="drop-wrap"><a target="_blank" href="http://service.weibo.com/share/share.php?url={{{url}}}&type=button&language=zh_cn&title=%E8%BF%99%E4%B8%AA%E5%9B%BE%E6%A0%87%E4%B8%8D%E9%94%99%E5%93%A6%E3%80%82%E3%80%82&searchPic=false&style=number" class="drop-item share-weibo"><svg version="1.1" id="\u56fe\u5c42_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve"><g><path fill="#D33F42" d="M164.851,111.386c-1.581-2.804-3.631-5.279-6.144-7.434c-2.513-2.155-4.884-3.743-7.114-4.75\n    c-2.23-1.007-4.205-1.655-5.928-1.939v0.015c-2.155-0.432-3.557-1.081-4.198-1.939c-0.641-0.858-0.753-1.648-0.328-2.371\n    l0.649-1.074c0.142-0.142,0.283-0.358,0.433-0.649c0.149-0.291,0.433-0.902,0.865-1.834c0.425-0.932,0.753-1.864,0.969-2.804\n    c0.224-0.932,0.403-2.088,0.537-3.452c0.142-1.365,0.104-2.662-0.112-3.885c-0.209-1.223-0.641-2.55-1.298-3.989\n    c-0.656-1.439-1.551-2.729-2.699-3.885c-2.013-2.013-4.638-3.311-7.874-3.885c-3.229-0.574-6.465-0.611-9.701-0.112\n    c-3.229,0.5-6.286,1.148-9.157,1.939s-5.242,1.544-7.114,2.259l-2.804,1.297c-1.439,0.432-2.625,0.723-3.557,0.865\n    c-0.932,0.142-1.655,0.104-2.162-0.112c-0.507-0.216-0.902-0.432-1.186-0.649c-0.283-0.216-0.395-0.723-0.328-1.514\n    c0.067-0.79,0.142-1.476,0.216-2.051c0.075-0.574,0.253-1.476,0.537-2.699c0.283-1.223,0.499-2.192,0.649-2.908\n    c0-1.722-0.112-3.341-0.328-4.847s-0.686-3.199-1.402-5.063c-0.716-1.864-1.76-3.37-3.124-4.526\n    c-1.365-1.148-3.087-2.088-5.175-2.804c-2.08-0.716-4.78-0.932-8.083-0.649c-3.311,0.283-7.039,1.148-11.207,2.587\n    c-5.033,1.722-10.133,4.273-15.308,7.65c-5.175,3.37-9.664,6.897-13.474,10.558c-3.81,3.669-7.292,7.225-10.462,10.67\n    c-3.169,3.445-5.607,6.249-7.33,8.411l-2.371,3.452c-4.742,6.181-8.262,12.363-10.558,18.544\n    c-2.304,6.181-3.378,10.849-3.236,14.011v4.526c0.865,6.897,2.983,13.079,6.36,18.544c3.37,5.466,7.404,9.88,12.072,13.258\n    c4.675,3.37,10.171,6.249,16.494,8.627c6.323,2.371,12.393,4.101,18.216,5.175s11.968,1.834,18.432,2.259\n    c10.633,0.865,21.669,0.037,33.092-2.476c11.423-2.513,22.056-6.867,31.906-13.049c9.85-6.181,16.785-13.586,20.804-22.206\n    c2.446-5.033,3.698-9.776,3.773-14.234C167.192,117.821,166.439,114.189,164.851,111.386z"/><path fill="#FFFFFF" d="M119.269,150.845c-10.998,8.269-24.107,12.751-39.341,13.474l-0.008,0.007\n    c-15.524,0.716-28.708-2.304-39.557-9.06c-10.849-6.756-16.27-15.308-16.27-25.658c0-10.208,5.391-19.007,16.173-26.411\n    c10.775-7.404,24.002-11.461,39.669-12.184s28.887,1.864,39.669,7.762c10.775,5.898,16.173,13.944,16.173,24.144\n    C135.763,133.278,130.268,142.584,119.269,150.845z"/><path d="M104.379,123.033c-0.932-3.661-2.55-7.002-4.847-10.022c-2.297-3.02-5.712-5.361-10.238-7.009\n    c-4.526-1.648-9.738-2.118-15.629-1.402l0.008,0.007c-4.168,0.432-7.904,1.402-11.207,2.908c-3.311,1.506-5.898,3.229-7.762,5.175\n    c-1.864,1.946-3.452,4.027-4.75,6.249c-1.298,2.229-2.192,4.422-2.699,6.577c-0.507,2.155-0.828,4.131-0.969,5.928\n    c-0.149,1.79-0.216,3.191-0.216,4.198l0.216,1.722v0.865c0,0.432,0.142,1.297,0.433,2.587c0.291,1.29,0.686,2.476,1.186,3.557\n    c0.499,1.081,1.327,2.267,2.476,3.564c1.148,1.29,2.513,2.371,4.101,3.236c9.492,4.601,18.328,5.995,26.515,4.198\n    s14.801-5.928,19.834-12.393c2.013-2.446,3.34-5.458,3.989-9.06C105.46,130.318,105.318,126.694,104.379,123.033z M74.866,139.959\n    c-0.932,1.439-2.192,2.655-3.773,3.661c-1.581,1.007-3.311,1.581-5.175,1.722l-0.008,0.015c-0.865,0.142-1.693,0.179-2.476,0.112\n    c-0.783-0.067-1.506-0.216-2.162-0.432c-0.656-0.216-1.298-0.47-1.939-0.753c-0.641-0.283-1.178-0.671-1.618-1.186\n    c-0.44-0.507-0.828-1.014-1.186-1.514c-0.358-0.5-0.641-1.066-0.865-1.722c-0.224-0.656-0.328-1.335-0.328-2.051\n    c0-1.581,0.433-3.124,1.298-4.638c0.865-1.506,2.05-2.804,3.564-3.885c1.506-1.081,3.199-1.693,5.063-1.834\n    c1.29-0.142,2.55-0.104,3.773,0.112c1.223,0.216,2.267,0.574,3.124,1.074c0.858,0.5,1.618,1.074,2.259,1.722\n    c0.649,0.649,1.111,1.402,1.402,2.259c0.283,0.865,0.433,1.797,0.433,2.804C76.268,137.014,75.798,138.52,74.866,139.959z\n     M85.633,127.999c-0.358,0.649-0.828,1.26-1.402,1.834l0,0c-1.007,0.716-2.05,1.044-3.124,0.969\n    c-1.074-0.067-1.834-0.537-2.259-1.402l-0.433-0.865c-0.142-0.291-0.216-0.574-0.216-0.865v-0.865c0-0.432,0.075-0.79,0.216-1.074\n    l0.433-0.865c0.142-0.291,0.358-0.507,0.649-0.649l0.649-0.865c1.148-0.865,2.259-1.223,3.341-1.074\n    c1.074,0.149,1.834,0.723,2.259,1.722c0.433,0.574,0.611,1.223,0.537,1.939C86.207,126.671,85.991,127.35,85.633,127.999z"/><path fill="#F29C48" d="M160.758,84.773c0.865,0,1.655-0.216,2.371-0.649c0.716-0.432,1.29-0.969,1.722-1.618\n    c0.433-0.641,0.723-1.327,0.865-2.051c0.142-0.142,0.216-0.358,0.216-0.649c1.722-16.389-4.027-25.725-17.247-28.029\n    c-3.885-0.716-7.479-0.79-10.782-0.216c-1.007,0-1.872,0.254-2.587,0.753c-0.716,0.5-1.327,1.148-1.834,1.939\n    c-0.507,0.79-0.753,1.618-0.753,2.476c0,1.439,0.499,2.662,1.514,3.661c1.007,1.007,2.23,1.506,3.661,1.514\n    c11.215-2.587,17.247,1.007,18.112,10.782c0.291,2.446,0.142,4.742-0.433,6.897c0,1.439,0.499,2.662,1.514,3.661\n    C158.103,84.266,159.326,84.766,160.758,84.773L160.758,84.773z"/><path fill="#F29C48" d="M157.104,23.988c-6.323-1.439-14.809-1.156-25.442,0.865c-0.142,0-0.283,0.075-0.433,0.216l-0.216,0.432\n    l-0.216,0.216c-1.581,0.432-2.878,1.335-3.885,2.699c-1.007,1.365-1.514,2.841-1.514,4.422c0,2.155,0.723,3.952,2.162,5.391\n    c1.439,1.439,3.162,2.155,5.175,2.162h0.649c0.142,0,0.47-0.075,0.969-0.216c0.507-0.142,1.044-0.254,1.618-0.328\n    c0.567-0.075,1.178-0.216,1.834-0.432c0.656-0.216,1.23-0.432,1.722-0.649c0.499-0.216,1.469-0.328,2.908-0.328\n    s3.206,0.112,5.287,0.328c2.08,0.216,4.377,0.753,6.897,1.618c2.52,0.865,5.033,1.939,7.546,3.236\n    c2.513,1.297,5.026,3.087,7.546,5.391c2.52,2.297,4.712,4.959,6.577,7.971c3.736,8.478,4.459,16.673,2.162,24.577\n    c0,0.142-0.037,0.283-0.112,0.432c-0.075,0.149-0.179,0.507-0.328,1.074c-0.142,0.567-0.283,1.111-0.433,1.618\n    c-0.149,0.507-0.291,1.156-0.433,1.939c-0.142,0.783-0.216,1.469-0.216,2.051c0,1.29,0.358,2.371,1.074,3.236\n    c0.716,0.865,1.618,1.476,2.699,1.834c1.081,0.358,2.334,0.537,3.773,0.537c4.027,0,6.398-2.446,7.114-7.337\n    c1.722-5.607,2.699-10.961,2.908-16.061c0.209-5.1-0.142-9.589-1.074-13.474c-0.932-3.877-2.334-7.509-4.198-10.887\n    c-1.864-3.37-4.019-6.249-6.472-8.627c-2.446-2.371-5.175-4.534-8.195-6.472c-3.012-1.946-5.928-3.49-8.732-4.638\n    C163.024,25.636,160.116,24.703,157.104,23.988L157.104,23.988L157.104,23.988z"/></g></svg></a><a target="_blank" href="https://www.facebook.com/sharer.php?u={{{url}}}" class="drop-item share-facebook"><svg version="1.1" id="\u56fe\u5c42_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve"><path fill="#3A5897" d="M189.155,152.411c0,19.86-16.098,35.962-35.962,35.962H45.662c-19.86,0-35.962-16.098-35.962-35.962V44.88\n  c0-19.86,16.098-35.962,35.962-35.962h107.53c19.86,0,35.962,16.098,35.962,35.962V152.411z"/><path fill="#FFFFFF" d="M99.328,188.373h28.128v-69.718h23.341l3.583-27.205h-26.93V74.078c0-4.409,0.917-7.718,2.758-9.925\n  c1.835-2.207,5.393-3.308,10.659-3.308h14.431V36.582c-4.965-0.734-11.948-1.101-20.956-1.101c-10.603,0-19.09,3.14-25.462,9.42\n  c-6.367,6.285-9.558,15.124-9.558,26.522v20.033H75.885v27.205h23.438v69.712H99.328z"/></svg></a><a target="_blank" href="https://twitter.com/intent/tweet?url={{{url}}}" class="drop-item share-twitter"><svg version="1.1" id="\u56fe\u5c42_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve"><path fill="#37A5ED" d="M189.052,151.974c0,19.721-15.986,35.712-35.712,35.712H46.559c-19.721,0-35.712-15.986-35.712-35.712\n  V45.193c0-19.721,15.986-35.712,35.712-35.712H153.34c19.721,0,35.712,15.986,35.712,35.712V151.974z"/><path fill="#FFFFFF" d="M150.141,72.846c-0.587,44.53-29.076,75.043-71.581,76.967c-17.534,0.795-30.235-4.865-41.295-11.89\n  c12.964,2.075,29.025-3.113,37.625-10.473c-12.705-1.245-20.212-7.699-23.746-18.101c3.67,0.643,7.527,0.466,11.025-0.278\n  c-11.455-3.842-19.645-10.919-20.076-25.77c3.219,1.473,6.575,2.84,11.025,3.113c-8.585-4.88-14.917-22.708-7.648-34.512\n  c12.736,13.966,28.053,25.355,53.201,26.894c-6.317-26.98,29.455-41.624,44.408-23.487c6.333-1.23,11.475-3.619,16.426-6.231\n  c-2.04,6.267-5.973,10.645-10.746,14.158c5.259-0.709,9.901-1.989,13.88-3.963C160.179,64.383,154.783,68.984,150.141,72.846z"/></svg></a></div></span><span title="**COMMON_PAY**" mx-click="pay()" data-spm-click="gostr=/alimama.30;locaid=d9a41bbdc" class="radius-btn radius-btn-money"><span class="iconfont radius-btn-inner">&#xe622;</span> </span>{{/if}}</div>',
		ctor: function (a) {
			;(this.timeline = null),
				this.observe(['keyword', 'sortType']),
				(this.extra = a || {})
		},
		render: function () {
			var s = this,
				a = this.param('sortType') || 'time'
			;(this.data = {
				keyword: this.param('keyword'),
				type: this.extra.type || '',
				sortType: a,
				isFavorite: this.extra.is_favorite,
				isLike: this.extra.is_like,
				activeClass: this.extra.is_favorite ? 'actived' : '',
				hidesearch: this.extra.hidesearch,
				url: window.location.href,
				placeholder: this.extra.placeholder || '',
			}),
				this.setView().done(function () {
					var a, c
					e.isZh ||
						(n('.radius-btn-share').addClass('radius-btn-share-en'),
						n('.radius-btn-money').addClass('radius-btn-money-en'),
						n('.radius-btn-like').addClass('radius-btn-like-en')),
						void 0 !== s.extra.is_favorite &&
							((a = n('.radius-btn-like')),
							(c = n('.radius-btn-like .iconfont')),
							(s.timeline = new r.Timeline()),
							s.tweens(s.timeline, a, c))
				})
		},
		'newProject<click>': function (a) {
			var c = i.config().user
			t.showDialog('app/views/common/edit_project', {
				hasclose: !1,
				width: 590,
				height: 590,
				viewOptions: {
					type: 1,
					owner: c,
					project: {
						id: '',
						name: 'no name',
						description: '',
						prefix: 'icon',
						font_family: 'iconfont',
						font_format: 'woff2,woff,ttf',
					},
					users: [c],
				},
			})
		},
		'showSearch<mouseover>': function (a) {
			n('#J_radius_search_wrap').addClass('radius-btn-search-in'),
				setTimeout(function () {
					document.getElementById('J_radius_search_input').focus()
				}, 200)
		},
		'hideSearch<mouseout>': function (a) {
			n(a.target).val() ||
				n('#J_radius_search_wrap').removeClass('radius-btn-search-in')
		},
		'pay<click>': function (a) {
			var c = this.extra.code,
				s = this.extra.avatar
			t.showAlipay({ code: c, avatar: s })
		},
		'sort<click>': function (a) {
			a = a.params
			n.isEmptyObject(a) && (a = ''), this.to({ sortType: a })
		},
		'listenKey<keydown>': function (a) {
			13 === a.originalEvent.keyCode &&
				((a = n(a.target).val()), this.to({ keyword: a, page: '' }))
		},
		'search<click>': function (a) {
			a = n(a.target).siblings('#J_radius_search_input').val()
			this.to({ keyword: a, page: '' })
		},
		'changeLikeCollection<click>': function (s) {
			var i = this,
				a = i.param('cid')
			i.request().all(
				[{ name: 'collection_like', params: { cid: a } }],
				function (a, c) {
					n(s.currentTarget).find('.iconfont').addClass('actived'),
						(i.data.showAnimation = !0),
						i.setView(),
						setTimeout(function () {
							;(i.data.showAnimation = !1), i.setView()
						}, 600)
				}
			)
		},
		'changeFavoriteCollection<click>': function (a) {
			var i = this,
				t = i.param('cid'),
				e = n('.radius-btn-like .iconfont')
			i.extra.is_favorite
				? i
						.request()
						.all(
							[{ name: 'del_collection_favorite', params: { cid: t } }],
							function (a, c) {
								c = c.get('data')
								c.type && 1 === c.type && e.removeClass('actived')
							}
						)
				: !1 === i.extra.is_favorite &&
				  i
						.request()
						.all(
							[{ name: 'add_collection_favorite', params: { cid: t } }],
							function (a, c) {
								var s = c.get('data')
								s.type && 1 === s.type
									? i.request().all(
											[
												{
													name: 'del_collection_favorite',
													params: { cid: t },
												},
											],
											function (a, c) {
												s.type && 1 === s.type && e.removeClass('actived')
											}
									  )
									: (i.timeline.replay(), e.addClass('actived'))
							}
						),
				i.setView()
		},
		tweens: function (a, c, s) {
			var i = new r.Burst({
					parent: c,
					count: 6,
					radius: { 40: 90 },
					children: {
						fill: [
							'#988ADE',
							'#DE8AA0',
							'#8AAEDE',
							'#8ADEAD',
							'#DEC58A',
							'#8AD1DE',
						],
						opacity: 0.6,
						scale: 1,
						radius: { 7: 0 },
						duration: 1500,
						delay: 300,
						easing: r.easing.bezier(0.1, 1, 0.3, 1),
					},
				}),
				t = new r.Transit({
					parent: c,
					type: 'circle',
					scale: { 0: 1 },
					radius: 50,
					fill: 'transparent',
					stroke: '#988ADE',
					strokeWidth: { 30: 0 },
					opacity: 0.6,
					duration: 750,
					easing: r.easing.bezier(0, 1, 0.5, 1),
				}),
				c = new r.Tween({
					duration: 1e3,
					onUpdate: function (a) {
						0.3 < a
							? ((a = r.easing.elastic.out(1.43 * a - 0.43)),
							  s.css({ transform: 'scale3d(' + a + ',' + a + ', 1)' }))
							: s.css({ transform: 'scale3d(0, 0, 1)' })
					},
				})
			a.add(i, t, c)
		},
	})
})
