
new Vue({
    el: '#vue-app',
    data: {
        name: "melon",
        age: 25
    },
    methods: {
        logName: function () {
            console.log('you enter your name');
        },
        logAge: function () {
            console.log('you enter your age');
        }
    }
});
