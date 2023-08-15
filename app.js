
let one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue app One'

    },
    methods: {
        

    },
    computed: {
        greets: function(){
            return 'hello one';
        }

    }
});

let two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue app Two'


    },
    methods: {
        changeTitle: function(app){
            one.title = 'change from two';
        }

    },
    computed: {
        greets: function(){
            return 'hello two';
        }

    }
});


