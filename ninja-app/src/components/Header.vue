<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>
  
<script>
export default {
    name: 'app-header',
    data() {
        return {
            title: 'Welcome to Melon Ninja Site'
        }
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
  