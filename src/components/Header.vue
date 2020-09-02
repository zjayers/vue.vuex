<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link :to="HOME_ROUTE" class="navbar-brand">Stock Trader</router-link>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link
                    :to="PORTFOLIO_ROUTE"
                    active-class="active"
                    class="nav-item"
                    tag="li">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link
                    :to="STOCKS_ROUTE"
                    active-class="active"
                    class="nav-item"
                    tag="li">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
            <div class="form-inline my-2 my-lg-0">
                <button class="end-day-btn btn btn-outline-success my-2 my-sm-0" type="submit"
                        @click="randomizeStockPrices">
                    End Day
                </button>
            </div>
        </div>
    </nav>
</template>

<script>

import {HOME_ROUTE, PORTFOLIO_ROUTE, STOCKS_ROUTE} from "@/routes/routes";
import {mapActions} from "vuex";

export default {
    name: "Header",
    methods: mapActions(['randomizeStockPrices']),
    data() {
        return {
            PORTFOLIO_ROUTE,
            HOME_ROUTE,
            STOCKS_ROUTE
        }
    }
}
</script>

<style scoped>
.end-day-btn {
    margin-right: 20px;
}
</style>
