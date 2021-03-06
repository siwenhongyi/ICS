define('app/views/common/login', ['magix', 'jquery'], function(i, a, l) {
    var n = i('magix'),
        s = i('jquery'),
        url = document.getElementById('body').getAttribute('data-href-template')
    l.exports = n.View.extend({
        tmpl: '<div class="login-top"><img class="index-logo" src="//img.alicdn.com/imgextra/i1/O1CN01Bmr3yM1FhkEBIN33V_!!6000000000519-55-tps-93-100.svg"></div><div class="login-choose"><div class="line left"></div><span>**LOGIN_CHOOSE**</span><div class="line right"></div></div><div class="login-div"><ul><li><a vclick-ignore="true" href=' +
            url +
            ' data-spm-click="gostr=/alimama.30;locaid=dc75a7c31"><i class="iconfont github">&#xe61d;</i><span>Github</span></a></li></ul></div><div class="login-failure"><div class="line left"></div><span mx-click="showHelp()" data-spm-click="gostr=/alimama.30;locaid=dff59729f">**LOGIN_WEIBO_FAILURE**</span><div class="line right"></div></div><div class="login-help">**LOGON_WEIBO_TIPS**</div>',
        render: function() {
            this.setView()
        },
        'showHelp<click>': function(i) {
            i = s(i.currentTarget).parent().parent()
            i.find('.login-help').is(':hidden') ?
                (i.find('.login-failure').css('margin-top', '40px'),
                    i.find('.login-help').show()) :
                (i.find('.login-failure').css('margin-top', '60px'),
                    i.find('.login-help').hide())
        },
    })
})