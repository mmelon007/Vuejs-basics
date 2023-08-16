<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" :key="ninja" v-on:click="ninja.show = !ninja.show">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
        <button v-on:click="deleteNinja">deleteNinja</button>
    </div>
</template>

<script>
export default {
    name: 'ninja-content',
    props: {
        ninjas_prop: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            ninjas: this.ninjas_prop
        }
    },
    methods: {
        deleteNinja: function(){
            this.ninjas.pop();
        }
    },
    // lifecycle hooks
    // beforeCreate() {
    //     alert("before create");
    // },
    // created() {
    //     alert("created");
    // },
    // beforeMount() {
    //     alert("before mount");
    // },
    // mountedount() {
    //     alert("mounted");
    // },
    // beforeUpdate() {
    //     alert("before update");
    // },
    // updated() {
    //     alert("update");
    // }
}
</script>

<style scoped>
#ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

</style>