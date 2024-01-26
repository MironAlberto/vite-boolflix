import { reactive } from 'vue';

export const store = reactive({
    api: "https://api.themoviedb.org/3/search/movie?api_key=39db4896c50af4614c1557b6bf5d44e2",
    apiSeries: "https://api.themoviedb.org/3/search/tv?api_key=39db4896c50af4614c1557b6bf5d44e2",
    movies: [],
    seriesTv: [],
    searchingText: ''

});