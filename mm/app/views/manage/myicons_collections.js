define('app/views/manage/myicons_collections', [
	'magix',
	'app/models/manage/index',
	'app/exts/helper',
	'app/i18n/index',
], function (c, l, i) {
	var n = c('magix'),
		o = c('app/models/manage/index'),
		t = n.Router,
		e = c('app/exts/helper'),
		s = c('app/i18n/index')
	i.exports = n.View.extend({
		tmpl:
			'<div class="manage-right-top uploads-top"><span class="top-title">**MANAGE_ICONS_COLLECTIONS**</span> <span class="top-text">{{collections.length}} **NAV_COLLECTION**</span></div><div class="collection-list">{{^if(collections.length === 0)}} {{#for(collection in collections)}}<div class="block-collection" mx-click="detail({{collection.id}})" data-spm-click="gostr=/alimama.30;locaid=d8d89fddd">{{#if(collection.has_temp == 1)}} <span mx-click="editCollection({{collection.id}})" data-spm-click="gostr=/alimama.30;locaid=debc0d7b3" class="collection-tip collection-tip-pending">\u5ba1\u6838\u4e2d </span>{{/if}}<div class="icons-container"><ul class="clearfix" t-class:hide="collection.has_secret == 1">{{#for(icon in collection.icons)}}<li class="icon-wrap" t-class:tbackground="icon.show_svg | tbackground">{{{icon.show_svg}}}</li>{{/for}}</ul><div class="secret-cover" t-class:hide="collection.has_secret != 1"><svg version="1.1" id="\u56fe\u5c42_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve"><circle fill="#EEEEEE" cx="99.665" cy="116.312" r="57.752"/><path fill="#EEEEEE" d="M15.817,55.61c0,0,0.556-0.062,0.864,0.309c0.309,0.37,0.679,5.557,2.037,6.977\n                  c1.358,1.42,6.853,0.617,6.853,2.47c0,1.482-5.107,1.641-6.835,3.061c-1.729,1.42-0.741,7.409-2.858,7.188\n                  c-1.658-0.173-0.494-4.939-2.531-6.853S6.37,67.217,6.37,65.488c0-1.729,5.063-0.679,6.791-2.655\n                  C14.89,60.858,14.15,55.61,15.817,55.61z"/><path fill="#B1AFAE" d="M19.499,109.15c0,0,0.335-0.037,0.522,0.186c0.186,0.224,0.41,3.354,1.23,4.211\n                  c0.82,0.857,4.136,0.373,4.136,1.491c0,0.894-3.082,0.991-4.126,1.848s-0.447,4.472-1.725,4.338\n                  c-1.001-0.105-0.298-2.981-1.528-4.136c-1.23-1.155-4.211-0.932-4.211-1.975c0-1.043,3.056-0.41,4.099-1.602\n                  C18.94,112.317,18.493,109.15,19.499,109.15z"/><path fill="#EEEEEE" d="M187.912,98.058c0,0,0.381-0.042,0.592,0.212c0.212,0.254,0.466,3.809,1.397,4.782\n                  c0.931,0.973,4.697,0.423,4.697,1.693c0,1.016-3.5,1.125-4.685,2.098c-1.185,0.973-0.508,5.078-1.959,4.927\n                  c-1.136-0.119-0.339-3.386-1.735-4.697c-1.397-1.312-4.782-1.058-4.782-2.243s3.47-0.466,4.655-1.82\n                  C187.277,101.655,186.769,98.058,187.912,98.058z"/><path fill="#B1AFAE" d="M159.756,43.291c0,0,0.381-0.042,0.592,0.212s0.466,3.809,1.397,4.782s4.697,0.423,4.697,1.693\n                  c0,1.016-3.5,1.125-4.685,2.098s-0.508,5.078-1.959,4.927c-1.136-0.119-0.339-3.386-1.735-4.697\n                  c-1.397-1.312-4.782-1.058-4.782-2.243s3.47-0.466,4.655-1.82C159.121,46.888,158.613,43.291,159.756,43.291z"/><circle fill="#EEEEEE" cx="64.281" cy="31.878" r="5.536"/><circle fill="#EEEEEE" cx="171.417" cy="125.006" r="3.47"/><g><path fill="#FDFDFD" d="M100.126,174.065c9.155,0,17.779-2.667,25.364-7.358l-0.026-9.411c0,0-1.266-16.018-12.946-19.731\n                    c-0.181-0.057-3.105,3.145-8.393,2.857l-3.393-1.071c-0.349,0.016-0.726,0.518-1.071,0.536c-0.346-0.017-1.615-1.77-1.964-1.786\n                    l-1.786,0.893c-5.287,0.288-8.39-1.646-8.571-1.589c-11.679,3.713-12.554,19.891-12.554,19.891l-0.026,9.411\n                    C82.347,171.398,90.97,174.065,100.126,174.065z"/><path fill="#FDFDFD" d="M137.514,106.35c-0.372-20.316-17.62-36.476-38.523-36.092c-20.903,0.383-37.546,17.164-37.174,37.48\n                    c0.242,13.194,7.966,26,19.074,33.256l39.922-0.732c9.37-6.916,15.646-18.26,16.585-30.122\n                    C137.497,108.881,137.537,107.616,137.514,106.35z M118.707,136.407l-36.769,0.674c-8.589-6.005-14.444-15.821-14.629-25.925\n                    c-0.302-16.461,13.823-30.069,31.547-30.394c17.725-0.325,32.339,12.756,32.64,29.217\n                    C131.682,120.089,126.685,130.099,118.707,136.407z"/><path fill="#B1AFAE" d="M82.471,138.388l35.433-0.65c7.684-6.302,12.493-16.307,12.307-26.415\n                    c-0.302-16.459-14.393-29.548-31.474-29.235c-17.081,0.313-30.683,13.91-30.381,30.369C68.542,122.56,74.19,132.378,82.471,138.388\n                    z"/><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="168.2996" y1="102.5265" x2="168.2996" y2="102.5265" gradientTransform="matrix(0.9989 0.0478 -0.0478 0.9989 -99.1255 22.5725)"><stop offset="0.2225" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#D1D3D4"/></linearGradient><path fill="url(#SVGID_1_)" d="M64.081,133.029"/><path fill="#B1AFAE" d="M119.28,142.246c-4.887,3.822-12.339,3.867-19.35,3.959c-7.157,0.094-13.876,0.162-18.971-3.088\n                    c-1.624-1.036-2.373-3.443-1.676-3.459l41.601-0.945C121.581,138.696,120.509,141.285,119.28,142.246z"/><path fill="#C8C7C6" d="M68.173,112.474c-0.303-16.539,13.35-30.201,30.494-30.515c17.144-0.315,31.288,12.837,31.591,29.376\n                    c0.121,6.633-1.896,13.221-5.457,18.758c4.331-5.82,6.829-12.989,6.696-20.209c-0.303-16.541-14.971-29.685-32.761-29.358\n                    c-17.791,0.327-31.967,14-31.664,30.541c0.112,6.098,2.278,12.091,5.858,17.214C70.016,123.48,68.275,118.02,68.173,112.474z"/><path fill="#FFFFFF" d="M119.682,141.473c-4.977,2.186-12.541,2.075-19.627,2.199c-7.232,0.126-13.988,0.445-19.103-1.319\n                    c-1.63-0.562-2.363-1.9-1.658-1.916l42.044-0.955C122.043,139.465,120.933,140.923,119.682,141.473z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="202.5092" y1="106.0334" x2="202.5092" y2="106.0334" gradientTransform="matrix(0.9989 0.0478 -0.0478 0.9989 -99.1255 22.5725)"><stop offset="0.2225" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#D1D3D4"/></linearGradient><path fill="url(#SVGID_2_)" d="M98.083,138.167"/><path fill="#C1C1C1" d="M121.439,139.53c0,0.986-0.799,1.786-1.786,1.786H80.369c-0.986,0-1.786-0.799-1.786-1.786l0,0\n                    c0-0.986,0.799-1.786,1.786-1.786h39.284C120.639,137.744,121.439,138.544,121.439,139.53L121.439,139.53z"/><path fill="#B1AFAE" d="M110.379,163.06c0,0.443-0.359,0.802-0.802,0.803l-18.895,0.012c-0.443,0-0.802-0.359-0.803-0.802\n                    l-0.008-12.79c0-0.443,0.359-0.802,0.802-0.803l18.895-0.012c0.443,0,0.802,0.359,0.803,0.802L110.379,163.06z"/><path fill="#CCCCCC" d="M108.141,161.487c0,0.334-0.28,0.605-0.627,0.605l-14.77,0.009c-0.346,0-0.627-0.27-0.627-0.604\n                    l-0.006-9.641c0-0.334,0.28-0.605,0.627-0.605l14.77-0.009c0.346,0,0.627,0.27,0.627,0.604L108.141,161.487z"/><rect x="93.925" y="153.125" fill="#FFFFFF" width="5.373" height="2.155"/><rect x="100.947" y="153.121" fill="#FFFFFF" width="5.373" height="2.155"/><rect x="93.928" y="156.897" fill="#FFFFFF" width="12.394" height="3.323"/><g><path fill="#D8D8D8" d="M77.919,107.6c-3.348-2.219,0.721-8.5,4.179-11.977c3.458-3.477,6.203-4.852,8.942-4.143\n                      c1.917,0.496,4.502,4.771-0.062,8.486C85.856,104.135,83.611,111.372,77.919,107.6z"/><circle fill="#D8D8D8" cx="77.466" cy="115.5" r="3.929"/></g></g></svg><div class="info">**MANAGE_ICONS_COLLECTION_PRIVATE**</div></div></div><div class="collection-info mt10 clearfix"><span class="info-item"><i class="iconfont">&#xe617;</i>{{collection.name}}</span> <span class="info-item fr">icons {{collection.all_count}}</span></div><div class="collection-info clearfix"><span class="info-item"><i class="iconfont">&#xe64d;</i>{{collection.lastTime}} </span><span mx-click="editCollection({{collection.id}})" data-spm-click="gostr=/alimama.30;locaid=d7492989f" class="info-item fr cur"><i class="iconfont">&#xe636;</i>**MANAGE_ICONS_COLLECTION_EDIT** </span><span mx-click="delCollection({{collection.id}})" data-spm-click="gostr=/alimama.30;locaid=dc3b7c769" class="info-item fr cur"><i class="iconfont">&#xe643;</i>**MANAGE_ICONS_COLLECTION_DEL**</span></div></div>{{/for}} {{/if}} {{#if(collections.length === 0)}}<div class="block-no-results"><img src="//img.alicdn.com/tfs/TB1PhV7uoY1gK0jSZFMXXaWcVXa-164-142.svg" alt=""><div class="message">**COMMON_NO_RESULT**</div></div>{{/if}}</div>',
		ctor: function () {
			this.observe(['keyword'])
		},
		render: function () {
			var l = this
			l.wrapModel(o).getMyCollections('', function (c) {
				;(c.collections = e.filter(c.collections, function (c) {
					return new RegExp(l.param('keyword')).test(c.name)
				})),
					(l.data = { collections: c.collections }),
					l.setView()
			})
		},
		'detail<click>': function (c) {
			c = c.params
			t.to('/collections/detail', { cid: c })
		},
		'editCollection<click>': function (c) {
			t.to('/manage/index?manage_type=myicons&icontype=collections_handle', {
				collectionId: c.params,
			}),
				c.stopPropagation()
		},
		'delCollection<click>': function (c) {
			var l = this
			e.showConfirm(s.MANAGE_ICONS_COLLECTION_DEL_CONFIRM, function () {
				l.wrapModel(o).delCollection(c.params, function () {
					l.render()
				})
			}),
				c.stopPropagation()
		},
	})
})
