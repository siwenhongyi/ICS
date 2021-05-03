define('app/views/common/download_icon', [
	'magix',
	'app/exts/helper',
	'jquery',
	'app/exts/colorpicker/index',
	'app/models/common/index',
	'app/exts/saver/index',
	'app/exts/saver/saver',
	'app/i18n/index',
	'app/exts/clipboardjs/clipboard',
], function (a, t, i) {
	var p = a('magix'),
		f = a('app/exts/helper'),
		g = a('jquery'),
		s = a('app/exts/colorpicker/index'),
		o = a('app/models/common/index'),
		h = a('app/exts/saver/index'),
		e = a('app/exts/saver/saver'),
		n = a('app/i18n/index'),
		c = a('app/exts/clipboardjs/clipboard'),
		l = f.HISTORY_COLOR_KEY,
		r = f.MOST_USE_COLOR,
		v = f.LAST_COLOR_KEY,
		_ = f.LAST_SIZE_KEY
	i.exports = p.View.extend({
		tmpl:
			'<div class="top-title">"{{name}}" {{#if(show_svg)}}icon{{/if}}</div><div class="top-info"><a href="/user/detail?uid={{creater.id}}" data-spm-click="gostr=/alimama.30;locaid=d996e962c" vclick-ignore="true" class="avatar avatar-middle"><img src="{{creater.avatar|adaptImg100}}"></a><div class="top-info-content"><span class="info-text">**MANAGE_ICON_DOWNLOAD_DIALOG_AUTHOR**\uff1a<a href="/user/detail?uid={{creater.id}}" data-spm-click="gostr=/alimama.30;locaid=d214f71f6" vclick-ignore="true" class="link-text">{{creater.nickname}}</a></span> <span class="info-text">**MANAGE_ICON_DOWNLOAD_DIALOG_UPDATED_AT**\uff1a<span class="inner-text">{{updated_at.split(\'T\')[0]}}</span></span></div></div><div class="download-content"><div class="left-stage-container">{{#if(show_svg)}}<div class="stage J_stage" t-class:tbackground="show_svg | tbackground"><span class="iconfont container-reload" mx-click="reload()" data-spm-click="gostr=/alimama.30;locaid=d9a96a0c4" title="reload">&#xe688;</span> {{{show_svg}}}</div>{{/if}} {{^if(show_svg)}}<div class="stage" t-class:tbackground="origin_file | tbackground" style="height: 335px"><img src="{{{origin_file || file}}}" alt=""></div>{{/if}} {{#if(show_svg)}}<div class="block-color-manage statge-manage mt20"><ul class="color-block-lists clearfix">{{#for(c in mostUseColors)}}<li class="color-block" style="background:#{{*c}}" mx-click="selectColor()" data-spm-click="gostr=/alimama.30;locaid=d131476e1">{{*c}}</li>{{/for}}</ul><ul class="color-block-lists clearfix mt15">{{#for(c in historyUseColors)}}<li class="color-block" style="background:#{{*c}}" mx-click="selectColor()" data-spm-click="gostr=/alimama.30;locaid=d9d99b1dd">{{*c}}</li>{{/for}}</ul><div class="manage-mid-wrap"><span class="color-picker-wrap"><input class="input pick-input" value="{{selectedColor || 333}}" type="text" mx-focusout="changeColor()" mx-keydown="changeColor()"/> <span id="J_color_pick_icon" class="color-picker-item" style="background:#{{selectedColor || 333}}" mx-click="showPicker()" data-spm-click="gostr=/alimama.30;locaid=dc018e0ee"></span> </span><span class="size-pick-wrap" id="J_size_pick_wrap_icon"><input class="input size-input" type="text" value="{{selectedSize}}" mx-focusout="changeSize()" mx-keydown="changeSize()"/> <span class="arrow-down iconfont">&#xe607;</span><ul class="size-select"><li class="size-item">16</li><li class="size-item">32</li><li class="size-item">48</li><li class="size-item">64</li><li class="size-item">128</li></ul></span></div></div>{{/if}}</div><div class="right-info">{{^if(type === \'illustration\')}}<div class="info-item cur" t-class:favor="favor" mx-click="addDownloadFavor()" data-spm-click="gostr=/alimama.30;locaid=dd83506b9"><div class="info-item-hd"><span class="iconfont">&#xe63a;</span> <span class="text">**MANAGE_ICON_DOWNLOAD_DIALOG_LIKE**</span> <span class="text num" id="J_download_favorcount">{{favorCount}}</span></div></div>{{/if}}<div class="info-item"><div class="info-item-hd"><span class="iconfont">&#xe635;</span> {{#if(type === \'illustration\')}} <span class="text">**MANAGE_ILLUSTRATION_DOWNLOAD_DIALOG_SETS**</span> {{/if}} {{^if(type === \'illustration\')}} <span class="text">**MANAGE_ICON_DOWNLOAD_DIALOG_SETS**</span> {{/if}} <span class="text num">{{collections.length}}</span></div><div class="info-text collection-list">{{#if(collections.length > 0)}} {{#for(c in collections)}} {{#if(__INDEX__ !== 0)}} <span class="divide">|</span> {{/if}} <a t-if="c.type === \'illustration\'" href="/illustrations/detail?cid={{c.id}}" data-spm-click="gostr=/alimama.30;locaid=da5a778a4" vclick-ignore="true" target="_blank" class="link-text">{{c.name}}</a> <a t-if="c.type !== \'illustration\'" href="/collections/detail?cid={{c.id}}" data-spm-click="gostr=/alimama.30;locaid=da5a778a4" vclick-ignore="true" target="_blank" class="link-text">{{c.name}}</a> {{/for}} {{/if}} {{#if(collections.length === 0)}} <span class="info-empty">**MANAGE_ICON_DOWNLOAD_DIALOG_NO_SETS**</span> {{/if}} {{#if(collections.length > 0 && collections[0].url)}} <i class="iconfont icon-dashang"></i> <a href="{{collections[0].url}}" target="_blank" class="link-text">**MANAGE_ICON_DOWNLOAD_DIALOG_BUSINESS**</a> {{/if}}</div></div>{{#if(show_svg)}}<div class="info-item"><div class="info-item-hd"><span class="iconfont icon-set-tag"></span> <span class="text">**MANAGE_ICON_DOWNLOAD_DIALOG_TAGS**</span></div><div class="info-tags-container">{{#if(tags.length > 0)}} {{#for(tag in tags)}} <span class="tag">{{tag}}</span> {{/for}} {{/if}} {{#if(tags.length === 0)}} <span class="info-empty">**MANAGE_ICON_DOWNLOAD_DIALOG_NO_TAGS**</span> {{/if}}</div></div>{{/if}}</div></div><div class="download-btns">{{#if(file)}} <span class="btn btn-normal mr20" mx-click="downSvg()" data-spm-click="gostr=/alimama.30;locaid=d177b5dcf">**SVG_DOWNLOAD** </span>{{/if}} {{#if(show_svg)}} <span class="btn btn-normal mr20" mx-click="downIcon(\'svg\')" data-spm-click="gostr=/alimama.30;locaid=d177b5dcf">**SVG_DOWNLOAD** </span><span class="btn btn-normal mr20" mx-click="downIcon(\'eps\')" data-spm-click="gostr=/alimama.30;locaid=d7bddc813">**AI_DOWNLOAD** </span><span class="btn btn-normal mr20" mx-click="downIcon(\'png\')" data-spm-click="gostr=/alimama.30;locaid=d8657a9f0">**PNG_DOWNLOAD** </span>{{/if}} {{#if(file)}} <span class="btn btn-normal mr20" mx-click="downIcon(\'svgToPng\')" data-spm-click="gostr=/alimama.30;locaid=d8657a680">**PNG_DOWNLOAD** </span>{{/if}} <span class="btn btn-normal mr20" id="btn-copy-svg" style="position: relative">**COPY_SVG_CODE** </span><span class="show-copyright" mx-click="showDownloadCopyright()">\u7d20\u6750\u7248\u6743\u8bf4\u660e</span></div>',
		ctor: function (a) {
			var t = this
			;(this.opts = a),
				this.on('destroy', function () {
					t.$clipboard && t.$clipboard.destroy()
				})
		},
		render: function () {
			var i = this,
				a = i.opts.isIllustration ? 'svg_info' : 'icon_info'
			;(i.paths = []),
				i
					.request()
					.all(
						[{ name: a, params: { id: i.opts.iconId, pid: i.opts.pId || '' } }],
						function (a, t) {
							t = t.get('data')
							;(i.data = t),
								(i.data.tags = i.data.slug ? i.data.slug.split(',') : []),
								g.extend(i.data, {
									selectedColor: f.getItem(v) || '333333',
									selectedSize: f.getItem(_) || 200,
									mostUseColors: r,
									historyUseColors: f.getItem(l) || [],
								}),
								i.data.show_svg &&
									(i.data.show_svg = i.data.show_svg.replace(
										'<svg',
										'<svg t=' + new Date().getTime()
									)),
								i.setView().then(function () {
									i.listSizeCheck(), i.bind()
								})
						}
					)
		},
		bind: function () {
			var i = this
			g('#' + i.id).delegate('path', 'click', function (a) {
				a = g(a.currentTarget)
				i._selectToggleNode(a[0])
			}),
				i.opts.isIllustration
					? g('#btn-copy-svg').on('click', function (t) {
							var a = i.data.origin_file || i.data.file
							g.get(
								a,
								function (a) {
									navigator.clipboard
										? navigator.clipboard.writeText(a).then(
												function () {
													f.showTip({
														target: t.target,
														msg:
															'<span class="iconfont mr10">&#xe611;</span>' +
															n.MANAGE_PROJECTS_COPY_SUCCESS,
													})
												},
												function (a) {
													console.log(a),
														f.showGlobalTip('\u8bf7\u786e\u8ba4\u6388\u6743')
												}
										  )
										: i.clipboardInit(a, !0)
								},
								'text'
							)
					  })
					: i.clipboardInit()
		},
		clipboardInit: function (a, t) {
			var i = this
			i.$clipboard ||
				((i.$clipboard = new c(
					'#btn-copy-svg',
					t
						? {
								text: function () {
									return a
								},
						  }
						: {
								text: function () {
									var a = g('.download-dialog')
											.find('svg')
											.clone()
											.removeAttr('style'),
										t = i.data.selectedSize
									return (
										a.attr('width', t).attr('height', t), a.prop('outerHTML')
									)
								},
						  }
				)),
				i.$clipboard.on('success', function (a) {
					f.showTip({
						target: a.trigger,
						msg:
							'<span class="iconfont mr10">&#xe611;</span>' +
							n.MANAGE_PROJECTS_COPY_SUCCESS,
					})
				}),
				i.$clipboard.on('error', function (a) {
					f.showGlobalTip(n.TIPS_OLD_BROWSER)
				}))
		},
		walkPaths: function (i) {
			var a = this.paths || []
			0 === a.length && (a = g('.J_stage path').toArray()),
				g.each(a, function (a, t) {
					i && i(t)
				})
		},
		setColor: function (t) {
			var a = this
			;(t = t.replace(/<[^>]+>/g, '')),
				/[^0-9a-fA-F]/.test(t) || 6 !== t.length
					? f.showGlobalTip(
							'\u8bf7\u8f93\u51656\u4f4d\u5408\u6cd516\u8fdb\u5236\u8272\u503c\uff01'
					  )
					: ('FFFFFF' === t || 'ffffff' === t
							? g('.J_stage').addClass('tbackground')
							: (g('.J_stage').css('background', '#ffffff'),
							  g('.J_stage').removeClass('tbackground')),
					  a.walkPaths(function (a) {
							g(a).attr('fill', '#' + t)
					  }),
					  (a.data.selectedColor = t),
					  -1 === g.inArray(t, a.data.historyUseColors) &&
							(a.data.historyUseColors.unshift(t),
							(a.data.historyUseColors = a.data.historyUseColors.slice(0, 8)),
							f.setItem(l, a.data.historyUseColors)),
					  a.setView())
		},
		_selectToggleNode: function (a) {
			var t = this.paths || []
			f.inArray(t, a)
				? (g(a).removeClass('selected'), f.findAndRemove(t, a))
				: (g(a).addClass('selected'), t.push(a)),
				(this.paths = t)
		},
		listSizeCheck: function (a) {
			var t = this
			g('#J_size_pick_wrap_icon .size-input').on('click', function (a) {
				g('#J_size_pick_wrap_icon').addClass('show-size-select')
			}),
				g('#J_size_pick_wrap_icon .arrow-down').on('click', function (a) {
					g('#J_size_pick_wrap_icon').addClass('show-size-select')
				}),
				g(document.body).on('click', function (a) {
					g('#J_size_pick_wrap_icon .size-input')[0] !== a.target &&
						(g('#J_size_pick_wrap_icon').has(a.target).length ||
							g('#J_size_pick_wrap_icon').removeClass('show-size-select'))
				}),
				g('#J_size_pick_wrap_icon .size-item').on('click', function (a) {
					a.preventDefault(),
						g('#J_size_pick_wrap_icon').removeClass('show-size-select')
					a = parseInt(a.target.innerHTML)
					;(t.data.selectedSize = a),
						g('.J_stage')
							.find('svg')
							.css('font-size', a + 'px')
							.attr('width', a)
							.attr('height', a),
						t.setView()
				})
		},
		'selectColor<click>': function (a) {
			a.preventDefault()
			a = a.current.innerHTML
			this.setColor(a)
		},
		'changeColor<keydown>': function (a) {
			13 === a.originalEvent.keyCode &&
				((a = g(a.current).val()), this.setColor(a))
		},
		'changeColor<focusout>': function (a) {
			a.preventDefault()
			a = g(a.current).val()
			this.setColor(a)
		},
		'showPicker<click>': function (a) {
			a.preventDefault()
			var t = this,
				a = a.current
			s.show(this, {
				ownerNodeId: a.id,
				dock: 'left',
				color: t.data.selectedColor,
				picked: function (a) {
					t.setColor(a.color.replace('#', ''))
				},
			})
		},
		'changeSize<keydown>': function (a) {
			13 === a.originalEvent.keyCode &&
				((a = g(a.current).val()),
				(this.data.selectedSize = parseInt(a)),
				g('.J_stage')
					.find('svg')
					.css('font-size', a + 'px')
					.attr('width', a)
					.attr('height', a),
				this.setView())
		},
		'changeSize<focusout>': function (a) {
			a.preventDefault()
			a = g(a.current).val()
			;(this.data.selectedSize = parseInt(a)),
				g('.J_stage')
					.find('svg')
					.css('font-size', a + 'px')
					.attr('width', a)
					.attr('height', a),
				this.setView()
		},
		'addDownloadFavor<click>': function (a) {
			var t = this,
				i = t.opts.iconId,
				s = g(a.currentTarget),
				e = g('#J_download_favorcount')
			s.hasClass('favor')
				? t.wrapModel(o).cancelFavor(i, function (a) {
						s.removeClass('favor'),
							--t.data.favorCount,
							e.html(t.data.favorCount)
				  })
				: t.wrapModel(o).addFavor(i, function (a) {
						s.addClass('favor'),
							(t.data.favorCount += 1),
							e.html(t.data.favorCount)
				  })
		},
		'downSvg<click>': function (a) {
			var t = this.data.origin_file,
				i = this.data.name
			e.saveAs(t, i + '.svg')
		},
		'downIcon<click>': function (a) {
			var i = this,
				t = a.params,
				s = i.data.selectedSize,
				e = i.data.selectedColor,
				o = i.opts.iconId + '|' + (i.opts.pId || '-1'),
				n = []
			if ('svgToPng' === t) {
				var c = i.data.origin_file || i.data.file,
					l = i.data.name
				g.get(
					c,
					function (a) {
						var t = document.createElement('div')
						;(t.innerHTML = a),
							(t = g(t).find('svg')[0]),
							h.saveSvgAsPng(t, l + '.png', {
								width: i.data.width,
								height: i.data.height,
							})
					},
					'text'
				)
			} else {
				c = g('.J_stage path').toArray()
				g.each(c, function (a, t) {
					n.push(f.generateAttrs(t))
				}),
					(n = encodeURIComponent(n.join('|'))),
					(i.data.projectId = i.opts.pId || '-1')
				try {
					f.setItem(v, e), f.setItem(_, s), f.addIconsToHistory(i.data)
				} catch (a) {}
				try {
					if (f.isSafari()) throw new Error('is safari')
					if (f.isIE()) throw new Error('is ie')
					var r = s / i.data.height,
						l = i.data.name,
						d = g('.download-dialog').find('svg').clone()
					if ((d.removeAttr('style'), 'svg' === t))
						return void h.saveSvg(d[0], l + '.svg', {
							scale: r,
							width: i.data.width,
							height: i.data.height,
						})
					if ('png' === t)
						return void h.saveSvgAsPng(d[0], l + '.png', {
							scale: r,
							width: i.data.width,
							height: i.data.height,
						})
				} catch (a) {}
				window.location.href =
					'/api/icon/downloadIcon?type=' +
					t +
					'&ids=' +
					o +
					'&path_attributes=' +
					n +
					'&size=' +
					s +
					'&ctoken=' +
					p.config().ctoken
			}
		},
		'reload<click>': function (a) {
			this.render()
		},
		'confirm<click>': function (a) {
			f.hideDialog()
		},
		'cancel<click>': function (a) {
			f.hideDialog()
		},
		'showDownloadCopyright<click>': function (a) {
			f.showDownloadCopyright()
		},
	})
})
