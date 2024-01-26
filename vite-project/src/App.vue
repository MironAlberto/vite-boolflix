<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import Axios from 'axios';
import { store } from './store.js'

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {
        searchingBar(){
            Axios.get(store.api, {
                    params: {
                        query: store.searchingText
                    }
                }).then((response) => {
                console.log(response.data.results)
                store.movies = response.data.results
                console.log('Movie:', store.movies)
            }),
            Axios.get(store.apiSeries, {
                    params: {
                        query: store.searchingText
                    }
                }).then((response) => {
                console.log(response.data.results)
                store.seriesTv = response.data.results
                console.log('Serie:', store.seriesTv)
            })
        },

    },
}
</script>

<template>
    <AppHeader @searchingBar="searchingBar()"/>

    <AppMain/>

    <AppFooter/>
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
