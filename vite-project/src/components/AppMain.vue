<script>
import { store } from '../store.js';
import AppElement from './AppElement.vue';
import AppJumbotron from './AppJumbotron.vue'

export default {
    data() {
        return {
            store
        };
    },
    methods: {
        
    },
    components: {
        AppElement,
        AppJumbotron
    }
}
</script>

<template>
    <main>
        <div class="jumbotron">
            <AppJumbotron/>
        </div>
        <div class="content">
            <div class="row">
                <h2>
                    Movies
                </h2>
                <div class="col-auto" v-for="(movie, i) in store.movies" :key="i">
                    <AppElement 
                        :title="movie.title"
                        :originalTitle="movie.original_title"
                        :image="movie.poster_path"
                        :originalLanguage="movie.original_language"
                        :voteAverage="Math.ceil(movie.vote_average / 2)"
                        :overview="movie.overview"
                    />
                </div>
            </div>
            <div class="row">
                <h2 class="color">
                    Series
                </h2>
                <div class="col-auto" v-for="(serieTv, i) in store.seriesTv" :key="i">
                    <AppElement 
                        :title="serieTv.name"
                        :originalTitle="serieTv.original_name"
                        :image="serieTv.poster_path"
                        :originalLanguage="serieTv.original_language"
                        :voteAverage="Math.ceil(serieTv.vote_average / 2)"
                        :overview="serieTv.overview"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main{
    height: calc(100vh - 85px);
    overflow-y: auto;
    background-color: black;

    .jumbotron{
        width: 100%;

    }
    .content{
        width: 100%;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;

        .movies{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .series{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .row{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 100px;
            align-items: center;
        }

        h2{
            font-size: 50px;
            margin-bottom: 20px;
        }

        .color{
            color: #D91921;
        }

    }
}
</style>