<template>
    <div id="app" class="container">
        <Header/>
        <router-view/>
    </div>
</template>

<script>
import Header from "@/components/Header";
import {mapActions} from 'vuex'

export default {
    name: 'App',
    components: {Header},
    methods: mapActions(['initStockData']),
    created() {
        this.initStockData();
    }
}
</script>

<style>
body {
    padding: 30px;
}
</style>
