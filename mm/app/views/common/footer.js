define('app/views/common/footer', ['magix', 'app/exts/helper'], function (
	e,
	r,
	a
) {
	var o = e('magix'),
		i = e('app/exts/helper')
	a.exports = o.View.extend({
		tmpl:
			'<div class="wrap clearfix"><div class="foot-left"><span class="foot-logo"><img width="106" src="//img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg" alt="iconfont Logo"></span><div class="foot-content">**FOOT_DESC**</div><div class="foot-copy-right"><p>&copy;ALIMAMA MUX, powered by alimama THX.</p><p>**FOOT_POWERED**</p><p><a href="javascript:;" class="fa-click" mx-click="showLegal()">**FA_DA_FA**</a> <a href="https://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank">\u6d59ICP\u590709109183\u53f7-25</a> <a rel="noopener noreferrer" target="_blank" href="http://idinfo.zjamr.zj.gov.cn/bscx.do?method=lzxx&id=3301843301002004003505"><img width="20px" src="//gw.alicdn.com/tfs/TB1HxCbreL2gK0jSZPhXXahvXXa-65-70.gif"> </a><a rel="noopener noreferrer" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010002000124"><img src="//gw.alicdn.com/tfs/TB1jwakrbH1gK0jSZFwXXc7aXXa-20-20.png" style="vertical-align: -2px; margin-right: 4px"/>\u6d59\u516c\u7f51\u5b89\u5907 33010002000124\u53f7</a></p></div></div><div class="foot-right"><div class="links-title">**FOOT_LINK**</div><ul mx-click="report()" class="links clearfix"><li><a href="//thx.github.io/" target="_blank" rel="noopener noreferrer">THX</a></li><li><a href="//chuangyi.taobao.com" target="_blank" rel="noopener noreferrer">\u963f\u91cc\u5988\u5988\u521b\u610f\u4e2d\u5fc3</a></li><li><a href="//mux.alimama.com/" target="_blank" rel="noopener noreferrer">\u963f\u91cc\u5988\u5988 MUX</a></li><li><a href="//www.alibabaued.com/background/fronthome/index.htm" target="_blank" rel="noopener noreferrer">\u963f\u91cc\u5df4\u5df4 UED \u5b98\u7f51</a></li><li><a href="//www.uisdc.com" target="_blank" rel="noopener noreferrer">\u4f18\u8bbe\u7f51</a></li><li><a href="//uiiiuiii.com/" target="_blank" rel="noopener noreferrer">\u4f18\u4f18\u6559\u7a0b\u7f51</a></li><li><a href="//www.bootcss.com" target="_blank" rel="noopener noreferrer">Bootstrap \u4e2d\u6587\u7f51</a></li><li><a href="//branding.tmall.com/" target="_blank" rel="noopener noreferrer">\u5929\u732b Tmall Design</a></li><li><a href="//www.ui.cn/" target="_blank" rel="noopener noreferrer">UI \u4e2d\u56fd</a></li><li><a href="//ics.alibaba.com/project/Hn8mXx" target="_blank" rel="noopener noreferrer">Alibaba ICS Design</a></li><li><a href="//www.teambition.com/?utm_source=iconfont&utm_content=footer" target="_blank" rel="noopener noreferrer">Teambition</a></li></ul><div class="share-logos"><a href="//weibo.com/u/3541697272" class="share-logo iconfont">&#xe654;</a> <a href="javascript:;" class="share-logo iconfont share-weixin">&#xe653; <span class="weixin-code"><img src="//img.alicdn.com/imgextra/i1/O1CN01Uin4X81E6ofhghSvb_!!6000000000303-0-tps-430-430.jpg"></span></a><a href="mailto:zy99945@alibaba-inc.com" class="share-logo iconfont">&#xe603;</a></div></div></div>',
		render: function () {
			this.setView()
		},
		'showLegal<click>': function (e) {
			i.showLegal({
				noButton: !1,
				hasclose: !0,
			})
		},
		'report<click>': function (e) {
			'A' === e.target.tagName &&
				window.goldlog &&
				window.goldlog.record(
					'/iconfont.footer_links.click',
					'CLK',
					'link=' + (e.target.href || '').replace(/\?.*/, ''),
					'GET'
				)
		},
	})
})
