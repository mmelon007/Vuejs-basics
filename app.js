
new Vue({
    el: '#vue-app',
    data: {
        name: '',
        age: 25,
        a: 0,
        b: 0
    },
    methods: {
        

    },
    computed: {
        addToA: function () {
            console.log("add a");
            return this.age + this.a;
        },
        addToB: function () {
            console.log("add b");
            return this.age + this.b;
        }
    }
});
