new Vue({
    el : '#vue-app',
    data : {
        name : 'melon',
        job : 'superman',
        website : 'http://baidu.com',
        websiteTag : '<a href="http://baidu.com">baidu page</a>'
    },
    methods : {
        greet: function (time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});