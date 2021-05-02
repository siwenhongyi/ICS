define('app/views/home/index', [
	'magix',
	'jquery',
	'app/exts/helper',
	'app/i18n/index',
	'swiper',
], function (t, i, e) {
	var s = t('magix'),
		n = t('jquery'),
		c = t('app/exts/helper'),
		a = t('app/i18n/index'),
		o = t('swiper')
	e.exports = s.View.extend({
		tmpl:
			'<div id="J_planet_wrap" class="planet-wrap"><div class="planet planet-1"></div><div class="planet planet-2"></div><div class="planet planet-3"></div><div class="planet planet-4"></div><div class="planet planet-5"></div><div class="planet planet-6"></div><div class="planet planet-7"></div><div class="planet planet-8"></div></div><div class="page-home"><div class="search-wrap"><div class="search-input-wrap" id="J_search_input_wrap"><div class="search-tab"><div class="search-tab-item active" mx-click="changeSearchType()" data-type="icon">**SEARCH_SELECT_ICON**</div><div class="search-tab-item" mx-click="changeSearchType()" data-type="illustration">**SEARCH_SELECT_ILLUSTRATION**</div><div class="search-tab-item" mx-click="changeSearchType()" data-type="user">**SEARCH_SELECT_USER**</div></div><div class="search-input-wrap-cover" mx-click="clickInputWrap()" data-spm-click="gostr=/alimama.30;locaid=daa04f20b"><span class="icon-tag">**SEARCH_ICON_PLACEHOLDER**</span></div><input type="text" t-model="q" id="J_search_input_index" class="search-input" mx-focusout="outInputWrap()" mx-focusin="inInputWrap()" mx-keydown="startSearch()"/></div>{{#if(swiperList && swiperList.length > 0)}}<div class="section swiper-container" id="swiper-container1"><div class="swiper-wrapper">{{#for(item in swiperList)}} <a mx-click="report()" href="{{item.link}}" title="{{item.title}}" target="_blank" class="swiper-slide"><img src="{{item.img}}" alt="{{item.title}}"> </a>{{/for}}</div><div class="swiper-pagination"></div></div>{{/if}}</div><div class="rec-cards clearfix wrap">{{#for(collection in topCollections)}} <a href="/user/detail?uid={{collection.User.id}}" data-spm-click="gostr=/alimama.30;locaid=dfa9d9a29" style="background:{{collection.bgcolor}}" class="rec-card" t-class:card-middle="__INDEX__ === 1" t-class:hide="topCollections.length === 0"><div class="rec-avatar"><span class="avatar avatar-middle"><img src="{{collection.User.avatar|adaptImg100}}"></span></div><div class="rec-title">{{{collection.User.nickname}}}</div><div class="rec-content"><ul class="rec-lists clearfix">{{#for(icon in collection.icons)}}<li class="rec-icon">{{{icon.show_svg}}}</li>{{/for}}</ul></div></a>{{/for}} {{#for(collection in bottomCollections)}} <a href="/user/detail?userViewType=collections_illustration&uid={{collection.User.id}}" data-spm-click="gostr=/alimama.30;locaid=dfa9d9a29" style="background:{{collection.bgcolor}}" class="rec-card" t-class:card-middle="__INDEX__ === 1" t-class:hide="bottomCollections.length === 0"><div class="rec-avatar"><span class="avatar avatar-middle"><img src="{{collection.User.avatar|adaptImg100}}"></span></div><div class="rec-title">{{{collection.User.nickname}}}</div><div class="rec-content mod-illustrations-wrap"><ul class="rec-lists block-illustration-list">{{#for(icon in collection.icons)}}<li class="rec-icon icon-wrap"><img src="{{{icon.file}}}" loading="lazy" alt="{{icon.name}}"></li>{{/for}}</ul></div></a>{{/for}}</div><div class="section"><div><img width="1440" src="https://img.alicdn.com/tfs/TB1kKyMjRBh1e4jSZFhXXcC9VXa-2880-1040.png" alt=""></div><div class="swiper-container" id="swiper-container2"><div class="swiper-wrapper"><div class="swiper-slide"><img width="1440" src="https://gw.alicdn.com/tfs/TB1.GpVSYr1gK0jSZFDXXb9yVXa-2880-1500.png" alt=""></div><div class="swiper-slide"><img width="1440" src="https://gw.alicdn.com/tfs/TB14WfGdxvbeK8jSZPfXXariXXa-2880-1500.png" alt=""></div></div><div class="swiper-pagination"></div></div><div><img width="1440" src="https://gw.alicdn.com/tfs/TB1JVUKfiDsXe8jSZR0XXXK6FXa-2880-1500.png" alt=""> <img width="1440" src="https://gw.alicdn.com/tfs/TB1lq8OS2b2gK0jSZK9XXaEgFXa-2880-1500.png" alt=""> <img width="1440" src="https://gw.alicdn.com/tfs/TB1MOyyesieb18jSZFvXXaI3FXa-2880-1500.png" alt=""></div></div></div>',
		ctor: function () {
			var t = this
			t.on('destroy', function () {
				t.canvas && n(t.canvas).remove(),
					n(window).off('scroll', t.scrollHandle)
			})
		},
		render: function () {
			var t = this,
				i = c.formateNumber(s.config().iconCount || 681239),
				e = new Date().getHours(),
				a = /yeshen/.test(window.location.href)
			t.data = {
				iconsCount: i,
				q: '',
				searchType: 'icon',
				searchTip: '',
				showNight: !(9 <= e && e < 20 && !a),
			}
			a =
				(a = document.getElementById('J_index_canvas')) ||
				(a = n(
					'<canvas id="J_index_canvas" class="index-canvas"></canvas>'
				).prependTo(n(document.body)))[0]
			;(t.canvas = a),
				t.setView(function () {
					t.drawCanvas(),
						t.loadRecs(),
						t.loadScrollEvent(),
						t.loadSwiper(),
						t.getSwiperLists()
				})
		},
		loadTopSwiper: function (t) {
			var i = {
				loop: !0,
				delay: 5e3,
				direction: 'horizontal',
				autoplay: !0,
				effect: 'slide',
				pagination: {
					el: '.swiper-pagination',
					clickable: !0,
				},
			}
			t && ((i.loop = !1), (i.watchOverflow = !0))
			var e = new o(n('#swiper-container1')[0], i)
			;(e.el.onmouseover = function () {
				e.autoplay.stop()
			}),
				(e.el.onmouseout = function () {
					e.autoplay.start()
				})
		},
		loadSwiper: function () {
			new o(n('#swiper-container2')[0], {
				loop: !0,
				delay: 5e3,
				direction: 'vertical',
				autoplay: !0,
				effect: 'slide',
				pagination: {
					el: '.swiper-pagination',
					clickable: !0,
				},
			})
		},
		scrollHandle: function () {
			var t = n(window).scrollTop()
			10 < t && 0 !== t
				? n('#J_planet_wrap .planet').css('transform', 'scale(0.9)')
				: n('#J_planet_wrap .planet').css('transform', 'scale(1)')
		},
		loadLogoEvent: function () {
			n(document)
				.on('mousemove', '.search-top', function (t) {
					var i = this.clientWidth / 2,
						e = this.clientHeight / 2,
						a = i - (t.pageX - this.offsetLeft),
						i =
							'perspective( 600px ) translate3d( 0, -2px, 0 ) scale(1.1) rotateX(' +
							(((e - (t.pageY - this.offsetTop)) / e) * 10 + 'deg') +
							') rotateY(' +
							((a / i) * -10 + 'deg') +
							')'
					n(this).css('transform', i)
				})
				.on('mouseout', '.search-top', function () {
					n(this).css('transform', '')
				})
		},
		loadRecsEvent: function () {
			n(document)
				.on('mousemove', '.rec-card', function (t) {
					var i = this.clientWidth / 2,
						e = this.clientHeight / 2,
						a = i - (t.pageX - this.offsetLeft),
						i =
							'perspective( 600px ) translate3d( 0, -2px, 0 ) scale(1.1) rotateX(' +
							(((e - (t.pageY - this.offsetTop)) / e) * 10 + 'deg') +
							') rotateY(' +
							((a / i) * -10 + 'deg') +
							')'
					n(this).css('transform', i)
				})
				.on('mouseout', '.rec-card', function () {
					n(this).css('transform', '')
				})
		},
		loadScrollEvent: function () {
			n(window).on('scroll', this.scrollHandle)
		},
		loadRecs: function () {
			var e = this
			e.request().all(
				[
					{
						name: 'index_config',
						params: {},
					},
				],
				function (t, i) {
					i = i.get('data')
					n.extend(e.data, i),
						e.setView().then(function () {
							n('.rec-cards').addClass('show-cards')
						})
				}
			)
		},
		drawCanvas: function () {
			var t,
				i = this.canvas
			function e(t) {
				;(this.size = 2 * Math.random()),
					(this.speed = 0.07 * Math.random()),
					(this.x = t.x),
					(this.y = t.y)
			}
			function a() {
				this.reset()
			}
			;(t =
				window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (t) {
					window.setTimeout(t, 1e3 / 60)
				}),
				(window.requestAnimationFrame = t)
			var i = i,
				s = i.getContext('2d'),
				n = window.innerWidth,
				c = document.body.offsetHeight
			;(i.width = n),
				(i.height = c),
				(s.fillStyle = '#090723'),
				s.fillRect(0, 0, n, c),
				(e.prototype.reset = function () {
					;(this.size = 2 * Math.random()),
						(this.speed = 0.05 * Math.random()),
						(this.x = n),
						(this.y = Math.random() * c)
				}),
				(e.prototype.update = function () {
					;(this.x -= this.speed),
						this.x < 0
							? this.reset()
							: s.fillRect(this.x, this.y, this.size, this.size)
				}),
				(a.prototype.reset = function () {
					;(this.x = Math.random() * n),
						(this.y = 0),
						(this.len = 80 * Math.random() + 10),
						(this.speed = 8 * Math.random() + 4),
						(this.size = +Math.random() + 0.1),
						(this.waitTime = new Date().getTime() + 3e3 * Math.random() + 500),
						(this.active = !1)
				}),
				(a.prototype.update = function () {
					this.active
						? ((this.x -= this.speed),
						  (this.y += this.speed),
						  this.x < 0 || this.y >= c
								? this.reset()
								: ((s.lineWidth = this.size),
								  s.beginPath(),
								  s.moveTo(this.x, this.y),
								  s.lineTo(this.x + this.len, this.y - this.len),
								  s.stroke()))
						: this.waitTime < new Date().getTime() && (this.active = !0)
				})
			for (var o = [], r = 0; r < c; r += 4)
				o.push(
					new e({
						x: Math.random() * n,
						y: Math.random() * c,
					})
				)
			o.push(new a()),
				o.push(new a()),
				(function t() {
					;(s.fillStyle = '#090723'), s.fillRect(0, 0, n, c)
					var i = 'rgba(255, 255, 255, 0.5)'
					;(s.fillStyle = i), (s.strokeStyle = i)
					for (var e = o.length; e--; ) o[e].update()
					window.requestAnimationFrame(t)
				})()
		},
		'changeSearchType<click>': function (t) {
			var i = n(t.target),
				t = i.data('type')
			;(this.data.searchType = t),
				i.parents().find('.search-tab-item').removeClass('active'),
				i.addClass('active')
			i = {
				user: a.SEARCH_USER_PLACEHOLDER,
				illustration: a.SEARCH_ILLUSTRATION_PLACEHOLDER,
				icon: a.SEARCH_ICON_PLACEHOLDER,
			}
			n('.search-input-wrap-cover .icon-tag').html(i[t])
		},
		'startSearch<keydown>': function (t) {
			13 !== t.originalEvent.keyCode ||
				((t = n(t.target).val()) &&
					this.to(
						'/search/index?searchType=' + this.data.searchType + '&q=' + t
					))
		},
		'goDetail<click>': function (t) {
			t = t.params
			this.to('/collections/detail?cid=' + t)
		},
		'outInputWrap<focusout>': function (t) {
			t = n(t.target)
			n.trim(n('#J_search_input_index').val()) ||
				t.parents('#J_search_input_wrap').removeClass('hide-cover')
		},
		'inInputWrap<focusin>': function (t) {
			this.hiddenInputWrap(t)
		},
		'clickInputWrap<click>': function (t) {
			this.hiddenInputWrap(t)
		},
		'report<click>': function (t) {
			var i = t.target
			;(i = 'A' !== t.target.tagName ? t.target.closest('a') : i) &&
				i.href &&
				window.goldlog &&
				window.goldlog.record(
					'/iconfont.banner.click',
					'CLK',
					'link=' + i.href,
					'GET'
				)
		},
		hiddenInputWrap: function (t) {
			n(t.target).parents('#J_search_input_wrap').addClass('hide-cover'),
				setTimeout(function () {
					document.getElementById('J_search_input_index').focus()
				}, 1)
		},
	})
})
