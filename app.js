new Vue({
    el : '#vue-app',
    data : {
        name : 'melon',
        job : 'superman'
    },
    methods : {
        greet: function (time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});