define('app/exts/dialog/index', ['magix', 'jquery'], function (t, o, i) {
	var a = t('magix'),
		d = t('jquery')
	a.applyStyle(
		'mp-e2e',
		'.mp-e2e-dialog{min-height:100px;position:absolute;top:-99999px;z-index: 9999;}.mp-e2e-mask{width:100%;height:100%;position:fixed;opacity:.3;background:#000;left:0;top:0}.mp-e2e-content{border-radius:5px;background-color:#fff}.mp-e2e-title{font-size:14px;padding:10px}.mp-e2e-body{padding:20px}.mp-e2e-buttons{padding:10px;border-top:1px solid #eee}.mp-e2e-right{box-shadow:-5px 0 10px rgba(0,0,0,.1);border-right:none}.mp-e2e-left{box-shadow:5px 0 10px rgba(0,0,0,.1);border-left:none}.mp-e2e-top{box-shadow:0 5px 10px rgba(0,0,0,.1);border-top:none}.mp-e2e-fr{float:right}'
	),
		(i.exports = a.View.extend(
			{
				tmpl:
					'<div class="mp-e2e-content<%if(options.dockClass){%> <%=options.dockClass%><%}%>" style="width:<%=options.width%>px;height:<%=options.height ? options.height + \'px\' : \'auto\' %>;" id="cnt_<%=id%>"><h1 class="mp-e2e-title"><%- options.title%></h1><div class="mp-e2e-body" <%if(options.view){%> mx-view <%}%> id="body_<%=id%>"><%= options.content%></div><%if(!options.view){%><div class="mp-e2e-buttons clearfix"><%var buttons=options.buttons;for(var i=0;i<buttons.length;i++){%><button class="mp-e2e-button btn <%- buttons[i].dock %>" mx-click="click({index:<%=i%>})"><%-buttons[i].text%></button><%}%></div><%}%></div> <%if(options.hasclose){%> <span mx-click="close()" class="mp-e2e-dialog-close iconfont">&#xe629;</span><% } %>',
				ctor: function (t) {
					var o = this,
						i = d('html')
					o.$options = t
					var e = d(window).width()
					i.addClass('dialog-lock-hide')
					t = d(window).width()
					i.css('margin-right', t - e),
						o.on('destroy', function () {
							i.css('margin-right', '0'),
								i.removeClass('dialog-lock-hide'),
								d('#mask_' + o.id).remove(),
								d('#' + o.id).remove(),
								d(window).off('resize.dialog')
						})
				},
				render: function () {
					var o = this,
						t = o.$options
					t.dock && (t.dockClass = 'mp-e2e-' + t.dock),
						t.view &&
							(t.content =
								'<div class="spinner" style="top:0px;"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div>')
					var i = d.tmpl(o.tmpl)({ id: o.id, options: t })
					o.setHTML(o.id, i)
					var e,
						s = d('#' + o.id)
					function n() {
						o.adjust(s, t)
					}
					!t.view ||
						((e = a.Vframe.get('body_' + o.id)) &&
							e.mountView(t.view, t.viewOptions)),
						t.mask &&
							((e = 0 < d('.mp-e2e-mask').length),
							s.before('<div id="mask_' + o.id + '" class="mp-e2e-mask" />'),
							e &&
								d('#mask_' + o.id).attr(
									'style',
									'opacity: 0 !important; z-index: 9999;'
								),
							t.maskClickClose ||
								d('#mask_' + o.id).on('click', function (t) {
									d.contains(s, t.target) || o.close()
								})),
						o.adjust(s, t),
						d(window)
							.off('resize.dialog')
							.on('resize.dialog', function (t) {
								var o, i
								;(o = n),
									clearTimeout(o.tId),
									(o.tId = setTimeout(function () {
										i ? o.call(i) : o()
									}, 80))
							}),
						d(document)
							.off('keydown.dialog')
							.on('keydown.dialog', function (t) {
								27 == t.keyCode && o.close()
							}),
						s.addClass('show-dialog'),
						o.checkScale()
				},
				checkScale: function () {
					var t,
						o = d(window).height(),
						i = this.$options.height,
						e = d('#' + this.id)
					o < i &&
						((t = ((o - 50) / i).toFixed(2)),
						e.css('transform', 'scale(' + t + ')'),
						e.css('-webkit-transform', 'scale(' + t + ')'),
						e.css('-moz-transform', 'scale(' + t + ')'),
						e.css('-ms-transform', 'scale(' + t + ')'))
				},
				adjust: function (t, o) {
					switch (o.dock) {
						case 'top':
						case 'left':
							t.css({ left: o.left, top: o.top })
							break
						case 'right':
							t.css({ right: o.right, top: o.top })
							break
						default:
							var i = d(window),
								e = Math.max((i.width() - o.width) / 2 + i.scrollLeft(), 0),
								i = Math.max((i.height() - o.height) / 2 + i.scrollTop(), 0)
							t.css({ left: e, top: i })
					}
				},
				close: function () {
					var t = this
					d('#' + t.id).removeClass('show-dialog'),
						setTimeout(function () {
							t.owner.unmountVframe()
						}, 100)
				},
				'close<click>': function () {
					this.close()
				},
				'click<click>': function (t) {
					var o = this.$options,
						t = t.params.index,
						t = o.buttons[t].fn
					t && a.toTry(t), this.close()
				},
			},
			{
				alert: function (t, o, i) {
					this.msgbox(t, {
						mask: !0,
						content: o,
						buttons: [{ text: '\u786e\u5b9a', fn: i }],
					})
				},
				confirm: function (t, o, i, e) {
					this.msgbox(t, {
						mask: !0,
						content: o,
						buttons: [
							{ text: '\u53d6\u6d88', fn: e },
							{ text: '\u786e\u5b9a', fn: i },
						],
					})
				},
				msgbox: function (t) {
					var o = {
						buttons: [],
						title: '\u63d0\u793a',
						content: '',
						view: '',
						viewOptions: '',
						mask: !1,
						hasclose: !0,
						dock: '',
						left: 0,
						top: 0,
						right: 0,
						width: 360,
					}
					a.mix(o, t)
					var i = a.guid('dlg_'),
						t = a.Vframe.root()
					return (
						d('body').append('<div id="' + i + '" class="mp-e2e-dialog" />'),
						t.mountVframe(i, 'app/exts/dialog/index', o).$v
					)
				},
			}
		))
})
