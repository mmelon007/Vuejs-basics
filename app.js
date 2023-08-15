let data = {
    name: 'melon'
}

Vue.component('greeting', {
    template: '<p>!!Component {{name}}!!<button v-on:click="changeName">ChangeName</button></p>',
    data: function(){
        // return data;
        return {
            name: 'melon'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'mmmelon';
        }
    },
});


new Vue({
    el: '#vue-app-one'
});


new Vue({
    el: '#vue-app-two'
});
