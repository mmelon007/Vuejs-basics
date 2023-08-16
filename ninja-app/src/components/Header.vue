<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>
  
<script>
import { bus } from '../main'

export default {
    name: 'app-header',
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
        changeTitle: function() {
            // this.$emit('changeTitle', 'Vue mmmelon');
            this.title = 'Vue mmmelon from header';
            bus.$emit('titleChanged', 'Vue mmmelon from header');
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

header {
    background: lightgreen;
    padding: 10px;
}

h1 {
    color: #222;
    text-align: center;
}

</style>
  