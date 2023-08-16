<template>
    <footer>
        <p v-on:click="changeCopyright">Copyright 2023 {{ title }}</p>
    </footer>
</template>

<script>
import { bus } from '../main'

export default {
    name: 'app-footer',
    props: {
        title_prop: {
            type: String, 
            required: true
        }
    },
    data() {
        return {
            title: this.title_prop
        }
    },    
    computed: {

    },
    methods: {
        changeCopyright: function() {
            // this.$emit('changeTitle', 'Vue mmmelon');
            this.title = 'Vue mmmelon from footer';
            bus.$emit('titleChanged', 'Vue mmmelon from footer');
        }
    },
    created() {
        bus.$on('titleChanged', (data) => {
            this.title = data;
        });
    }
}
</script>

<style scoped>
footer {
    background: #222;
    padding: 6px;
}
p {
    color: lightgreen;
    text-align: center;
}

</style>