define('app/models/icons/index', ['app/models/base'], function(a, t, e) {
    a = a('app/models/base').extend({
        getDefault: function(l, g) {
            this.fetchAll(
                [
                    { name: 'default_tags', dataType: 'jsonp' },
                    {
                        name: 'get_uploadings',
                        formParams: {
                            csrfmiddlewaretoken: document.getElementsByName(
                                'csrfmiddlewaretoken'
                            )[0].value,
                        },
                    },
                    { name: 'my_collections_simple', formParams: l },
                    { name: 'project_lists' },
                    {
                        name: 'get_uploading_svgs',
                        formParams: {
                            csrfmiddlewaretoken: document.getElementsByName(
                                'csrfmiddlewaretoken'
                            )[0].value,
                        },
                    },
                ],
                function(a, t, e, o, n, s) {
                    if (!a) {
                        for (
                            var t = t.get('data.tags'),
                                e = ('illustration' === l.type ? s : e).get('data.icons'),
                                i = o.get('data.collections'),
                                o = n.get('data'),
                                n = s.get('data'),
                                c = [],
                                s = o.ownProjects || [],
                                s = Array.prototype.concat.apply(s, o.corpProjects),
                                p = 0; p < i.length; p++
                        ) {
                            var d = i[p]
                            d.name && c.push(d)
                        }
                        g({
                            tags: t,
                            icons: e,
                            svgs: n.icons,
                            collectionList: c,
                            projectList: s,
                        })
                    }
                }
            )
        },
        updateUploadIcons: function(a, e) {
            this.save(
                [{ name: 'update_uploader_icons', formParams: a }],
                function(a, t) {
                    a || e(t.get('data'))
                }
            )
        },
        updateUploadSvgs: function(a, e) {
            this.save(
                [{ name: 'update_uploader_svgs', formParams: a }],
                function(a, t) {
                    a || e(t.get('data'))
                }
            )
        },
        updateIconAiTag: function(a, e, o) {
            this.save(
                [{ name: 'update_icon_ai_tag', formParams: a }],
                function(a, t) {
                    a ? o() : e(t.get('data'))
                }
            )
        },
    })
    e.exports = a
})