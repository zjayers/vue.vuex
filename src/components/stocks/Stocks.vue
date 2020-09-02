<template>
    <div class="row">
        <standard-stock v-for="stock in getStocks" :key="stock.id" :stock="stock"></standard-stock>
    </div>
</template>

<script>
import StandardStock from "@/components/stocks/StandardStock";
import {mapGetters} from "vuex";

export default {
    name: "Stocks",
    components: {StandardStock},
    computed: mapGetters(['getStocks']),
}
</script>

<style scoped>

</style>
