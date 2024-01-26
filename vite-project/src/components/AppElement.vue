<script>
export default {
    data() {
        return {
            
        };
    },
    methods: {
        nationalFlags(){
            let fullFlag = 'https://flagicons.lipis.dev/flags/4x3/';

            if(this.originalLanguage == 'en'){
                    fullFlag += 'us';
            }
            else if(this.originalLanguage == 'it'){
                fullFlag += 'it';
            }
            else if(this.originalLanguage == 'es'){
                fullFlag += 'es';
            }
            else if(this.originalLanguage == 'de'){
                fullFlag += 'de';
            }
            else if(this.originalLanguage == 'pt'){
                fullFlag += 'pt';
            }
            else if(this.originalLanguage == 'fr'){
                fullFlag += 'fr';
            }
            else if(this.originalLanguage == 'ja'){
                fullFlag += 'jp';
            }
            else{
                fullFlag += 'un';
            }
                
            fullFlag += '.svg';

            return fullFlag;
        }
    },
    props: {
        title: String,
        image: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: Number,
        overview: String
    },
}
</script>

<template>
    <div class="card-container">
        <div class="card-overview">
            <div class="img-box">
                <img class="loading-image" v-if="image == null" src="../../public/img/netflix.jpg" alt="loading_image">
                <img v-else :src="`https://image.tmdb.org/t/p/original/${image}`" alt="cover">
            </div>
            <div class="info-card">
                <div class="p-4">
                    <p class="d-flex flex-column">
                        <span class="fs-6 text-danger fw-bold">
                            TITLE
                        </span>
                        <span>
                            {{ title }}
                        </span>
                    </p> 
                    <p class="d-flex flex-column">
                        <span class="fs-6 text-danger fw-bold">
                            ORIGINAL TITLE
                        </span>
                        <span>
                            {{ originalTitle }}
                        </span>
                    </p> 
                    <p class="d-flex flex-column">
                        <span class="fs-6 text-danger fw-bold">
                            ORIGINAL LANGUAGE
                        </span>
                        <span>
                            <img :src="nationalFlags()" :alt="originalLanguage">
                        </span>
                    </p> 
                    <p class="d-flex flex-column">
                        <span class="fs-6 text-danger fw-bold">
                            RATING
                        </span>
                        <span>
                            <i v-for="(star) in voteAverage" :key="star" class="fa-solid fa-star"></i>
                            <i v-for="(star) in (5 - voteAverage)" :key="star" class="fa-regular fa-star"></i>
                        </span>
                    </p> 
                    
                </div>
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    More Details
                </button>
            </div>
        </div>
    </div>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">{{ title }}</h5>
        <button type="button" class="btn-close"></button>
        </div>
        <div class="offcanvas-body">
            <p>{{ overview }}</p>
            <div class="img-box">
                <img class="loading-image" v-if="image == null" src="../../public/img/netflix.jpg" alt="loading_image">
                <img v-else :src="`https://image.tmdb.org/t/p/original/${image}`" alt="cover">
            </div>
        </div>
    </div>  
</template>

<style lang="scss" scoped>
.offcanvas{
    background-color: black;
    color: white;
}

img{
    width: 30px;
}

.card-container{
    background-color: transparent;
    width: 300px;
    height: 450px;
    perspective: 900px;
    margin-bottom: 40px;
    cursor: pointer;
}

.card-overview{
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.card-container:hover .card-overview{
    transform: rotateY(180deg);
}

.img-box, .info-card{
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.info-card{
    background-color: black;
    color: white;
    transform: rotateY(180deg);
}

.img-box{
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    .loading-image{
        width: 300px;
        height: 450px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            
        }
    }

    img{
        width: 100%;
    }
}
</style>