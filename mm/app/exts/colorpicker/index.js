define('app/exts/colorpicker/index', [
	'magix',
	'$',
	'app/exts/bases/picker',
], function (t, o, e) {
	var s = t('magix'),
		r = t('$'),
		t = t('app/exts/bases/picker')
	s.applyStyle(
		'mp-13c',
		'.mp-13c-cnt{padding:10px}.mp-13c-shortcuts{height:59px;border:1px solid #000;width:223px;overflow:hidden}.mp-13c-shortcuts ul{width:226px;zoom:1}.mp-13c-shortcuts ul:after,.mp-13c-shortcuts ul:before{display:table;content:""}.mp-13c-shortcuts ul:after{clear:both}.mp-13c-shortcuts li{border:1px solid #000;float:left;width:13px;height:14px;line-height:14px;margin:-1px 0 0 -1px;background-color:red;display:inline}.mp-13c-shortcuts li.mp-13c-selected{width:9px;height:10px;margin:1px 2px 2px 1px;font-size:10px;line-height:10px;overflow:hidden}.mp-13c-body{margin:10px 0;height:200px}.mp-13c-cpicker-wrapper{position:relative;float:left}.mp-13c-cpicker{width:196px;height:196px}.mp-13c-cpicker-indicator{position:absolute;left:-3px;top:-3px;width:6px;height:6px;border-radius:6px;border:3px solid #888}.mp-13c-slide-wrapper{position:relative;float:left;margin-left:10px}.mp-13c-slide{width:20px;height:196px}.mp-13c-slide-indicator{position:absolute;left:4px;top:-8px;border:8px solid transparent;border-right-color:#888;width:0;height:0}.mp-13c-foot{height:25px}.mp-13c-foot-btn{vertical-align:middle;height: 26px;line-height: 26px;color: #333;}.mp-13c-foot input{margin-right:5px}.mp-13c-bgcolor,.mp-13c-foot input{width:68px;height: 26px;line-height: 26px !important;vertical-align:middle}.mp-13c-bgcolor{height:23px;line-height:23px;display:inline-block;margin-right:10px;border:1px solid #ddd}'
	)
	function p(t, o, e) {
		var i
		t = (t % 360) / 60
		var e = (s = c = e - (i = e * o)),
			e =
				255 *
				(e += [i, (o = i * (1 - Math.abs((t % 2) - 1))), 0, 0, o, i][
					(t = ~~t)
				]),
			s = 255 * (s += [o, i, i, o, 0, 0][t]),
			c = 255 * (c += [0, 0, o, i, i, o][t])
		return {
			r: e,
			g: s,
			b: c,
			hex: '#' + (16777216 | c | (s << 8) | (e << 16)).toString(16).slice(1),
		}
	}
	var c =
			window.SVGAngle ||
			document.implementation.hasFeature(
				'http://www.w3.org/TR/SVG11/feature#BasicStructure',
				'1.1'
			)
				? 'SVG'
				: 'VML',
		d = 'mp-13c-selected',
		i = 'mp-13c-cnt',
		a = [
			'd81e06',
			'f4ea2a',
			'1afa29',
			'1296db',
			'13227a',
			'd4237a',
			'ffffff',
			'e6e6e6',
			'dbdbdb',
			'cdcdcd',
			'bfbfbf',
			'8a8a8a',
			'707070',
			'515151',
			'2c2c2c',
			'000000',
			'ea986c',
			'eeb174',
			'f3ca7e',
			'f9f28b',
			'c8db8c',
			'aad08f',
			'87c38f',
			'83c6c2',
			'7dc5eb',
			'87a7d6',
			'8992c8',
			'a686ba',
			'bd8cbb',
			'be8dbd',
			'e89abe',
			'e8989a',
			'e16632',
			'e98f36',
			'efb336',
			'f6ef37',
			'afcd51',
			'7cba59',
			'36ab60',
			'1baba8',
			'17ace3',
			'3f81c1',
			'4f68b0',
			'594d9c',
			'82529d',
			'a4579d',
			'db649b',
			'dd6572',
			'd81e06',
			'e0620d',
			'ea9518',
			'f4ea2a',
			'8cbb1a',
			'2ba515',
			'0e932e',
			'0c9890',
			'1295db',
			'0061b2',
			'0061b0',
			'004198',
			'122179',
			'88147f',
			'd3227b',
			'd6204b',
		]
	e.exports = t.extend(
		{
			tmpl:
				'<div class="mp-13c-shortcuts" id="shortcuts_<%=id%>"><ul><%for(var i=0;i<shortcuts.length;i++){%><li id="sc_<%=shortcuts[i]%>_<%=id%>" style="background:#<%=shortcuts[i]%>" mx-click="pickShortcuts({color:\'#<%=shortcuts[i]%>\'})"></li><%}%></ul></div><div class="mp-13c-body"><div class="mp-13c-cpicker-wrapper"><div class="mp-13c-cpicker" id="cpicker_<%=id%>" mx-click="colorZoneClick()"></div><div class="mp-13c-cpicker-indicator" id="ph_<%=id%>" mx-mousedown="dragPicker()"></div></div><div class="mp-13c-slide-wrapper"><div class="mp-13c-slide" id="slide_<%=id%>" mx-click="slideClick()"></div><div class="mp-13c-slide-indicator" mx-mousedown="dragSlide();" id="sh_<%=id%>"></div></div></div><div class="mp-13c-foot"><span class="mp-13c-bgcolor" id="bgcolor_<%=id%>"></span> <input class="input" id="val_<%=id%>"/> <button class="btn btn-size25 mp-13c-foot-btn" mx-click="enter();">\u786e\u5b9a</button></div>',
			ctor: function (t) {
				var o = this
				;(o.$color = t.color || '#ffffff'),
					(o.$hsv = {
						h: 0,
						s: 1,
						v: 1,
					}),
					(o.$picked = t.picked),
					r('#' + o.id).addClass(i)
			},
			render: function () {
				var t = this,
					o = r.tmpl(t.tmpl)({
						id: t.id,
						shortcuts: a,
					})
				t.setHTML(t.id, o)
				var e = r('#slide_' + t.id),
					i = r('#cpicker_' + t.id)
				'SVG' == c
					? ((o = i),
					  e.append(
							'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%"><defs><linearGradient id="gradient-hsv" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#FF0000" stop-opacity="1"></stop><stop offset="13%" stop-color="#FF00FF" stop-opacity="1"></stop><stop offset="25%" stop-color="#8000FF" stop-opacity="1"></stop><stop offset="38%" stop-color="#0040FF" stop-opacity="1"></stop><stop offset="50%" stop-color="#00FFFF" stop-opacity="1"></stop><stop offset="63%" stop-color="#00FF40" stop-opacity="1"></stop><stop offset="75%" stop-color="#0BED00" stop-opacity="1"></stop><stop offset="88%" stop-color="#FFFF00" stop-opacity="1"></stop><stop offset="100%" stop-color="#FF0000" stop-opacity="1"></stop></linearGradient></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-hsv)"></rect></svg>'
					  ),
					  o.append(
							'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%"><defs><lineargradient id="gradient-black" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="#000000" stop-opacity="1"></stop><stop offset="100%" stop-color="#CC9A81" stop-opacity="0"></stop></lineargradient><lineargradient id="gradient-white" x1="0%" y1="100%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"></stop><stop offset="100%" stop-color="#CC9A81" stop-opacity="0"></stop></lineargradient></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-white)"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#gradient-black)"></rect></svg>'
					  ))
					: ((i = i),
					  (e = e),
					  document.namespaces.mxv ||
							document.namespaces.add(
								'mxv',
								'urn:schemas-microsoft-com:vml',
								'#default#VML'
							),
					  e.html(
							'<div style="position: relative; width: 100%; height: 100%"><mxv:rect style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" stroked="f" filled="t"><mxv:fill type="gradient" method="none" angle="0" color="red" color2="red" colors="8519f fuchsia;.25 #8000ff;24903f #0040ff;.5 aqua;41287f #00ff40;.75 #0bed00;57671f yellow"></mxv:fill></mxv:rect></div>'
					  ),
					  i.html(
							'<div style="position: relative; width: 100%; height: 100%"><mxv:rect style="position: absolute; left: -1px; top: -1px; width: 101%; height: 101%" stroked="f" filled="t"><mxv:fill type="gradient" method="none" angle="270" color="#FFFFFF" opacity="100%" color2="#CC9A81" o:opacity2="0%"></mxv:fill></mxv:rect><mxv:rect style="position: absolute; left: 0px; top: 0px; width: 100%; height: 101%" stroked="f" filled="t"><mxv:fill type="gradient" method="none" angle="0" color="#000000" opacity="100%" color2="#CC9A81" o:opacity2="0%"></mxv:fill></mxv:rect></div>'
					  )),
					t.setColor(t.$color),
					t.show()
			},
			setHSV: function (t, o) {
				var e = this,
					i = e.$hsv
				;(i.h = t.h % 360), (i.s = t.s), (i.v = t.v)
				var s = p(t.h, t.s, t.v).hex,
					c = r('#cpicker_' + e.id),
					t = p(t.h, 1, 1)
				c.css('background', t.hex),
					r('#bgcolor_' + e.id).css('background', s),
					r('#val_' + e.id).val(s),
					o ||
						(r('#shortcuts_' + e.id + ' li').removeClass(d),
						(o = Math.round((196 * i.h) / 360 - 8)),
						r('#sh_' + e.id).css({
							top: o,
						}),
						(o = Math.round(196 * (1 - i.v) - 6)),
						(i = Math.round(196 * i.s - 6)),
						r('#ph_' + e.id).css({
							left: i,
							top: o,
						})),
					r('#sc_' + s.substr(1, 6) + '_' + e.id).addClass(d)
			},
			setColor: function (t) {
				var o,
					e = parseInt(t.substr(1, 2), 16),
					i = parseInt(t.substr(3, 2), 16),
					s = parseInt(t.substr(5, 2), 16),
					i =
						((o = e),
						(t = i),
						(e = s),
						(o /= 255),
						(t /= 255),
						(e /= 255),
						{
							h:
								((0 == (s = (i = Math.max(o, t, e)) - Math.min(o, t, e))
									? null
									: i == o
									? (t - e) / s + (t < e ? 6 : 0)
									: i == t
									? (e - o) / s + 2
									: (o - t) / s + 4) %
									6) *
								60,
							s: 0 == s ? 0 : s / i,
							v: i,
						})
				this.setHSV(i)
			},
			'dragSlide<mousedown>': function (t) {
				var e = this,
					i = r(t.current),
					s = parseInt(i.css('top'), 10)
				e.beginDrag(t, t.current, function (t, o) {
					o = t.pageY - o.pageY
					;(o += s) <= -8 ? (o = -8) : 188 <= o && (o = 188),
						i.css({
							top: o,
						}),
						e.setHSV(
							{
								h: ((o + 8) / 196) * 360,
								s: e.$hsv.s,
								v: e.$hsv.v,
							},
							!0
						)
				})
			},
			'dragPicker<mousedown>': function (t) {
				var i = this,
					s = r(t.current),
					c = parseInt(s.css('left'), 10),
					p = parseInt(s.css('top'), 10)
				i.beginDrag(t, t.current, function (t, o) {
					var e = t.pageY - o.pageY,
						o = t.pageX - o.pageX
					;(e += p) <= -6 ? (e = -6) : 190 <= e && (e = 190),
						(o += c) <= -6 ? (o = -6) : 190 <= o && (o = 190),
						s.css({
							top: e,
							left: o,
						}),
						i.setHSV({
							h: i.$hsv.h,
							s: (o + 6) / 196,
							v: (196 - (e + 6)) / 196,
						})
				})
			},
			'slideClick<click>': function (t) {
				var o = r(t.current).offset(),
					o = t.pageY - o.top
				this.setHSV({
					h: (o / 196) * 360,
					s: this.$hsv.s,
					v: this.$hsv.v,
				})
			},
			'colorZoneClick<click>': function (t) {
				var o = r(t.current).offset(),
					e = t.pageX - o.left,
					o = t.pageY - o.top
				this.setHSV({
					h: this.$hsv.h,
					s: e / 196,
					v: (196 - o) / 196,
				})
			},
			'pickShortcuts<click>': function (t) {
				this.setColor(t.params.color), r(t.current).addClass(d)
			},
			'enter<click>': function (t) {
				var o = r('#val_' + this.id)
				this.$picked &&
					s.toTry(this.$picked, {
						color: o.val(),
					}),
					this.hide(),
					t.preventDefault()
			},
		},
		{
			show: function (t, o) {
				var e = o.ownerNodeId,
					i = s.Vframe.get((e = 'cp_' + e))
				i
					? i.invoke('show')
					: (r('body').append('<div id="' + e + '" />'),
					  t.owner.mountVframe(e, 'app/exts/colorpicker/index', o))
			},
		}
	)
})
