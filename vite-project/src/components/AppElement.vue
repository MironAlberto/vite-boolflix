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
                <div class="p-4 ">
                    <p class="fs-6 pb-0 text-danger fw-bold">TITLE</p> {{ title }}
                </div>
                <div class="p-4">
                    <p class="fs-6 pb-0 text-danger fw-bold">ORIGINAL TITLE</p> {{ originalTitle }}
                </div>
                <div class="p-4">
                    <p class="fs-6 pb-0 text-danger fw-bold">ORIGINAL LANGUAGE</p> <img :src="nationalFlags()" :alt="originalLanguage">
                </div>
                <div class="p-4">
                    <p class="fs-6 pb-0 text-danger fw-bold">RATING</p>
                    <i v-for="(star) in voteAverage" :key="star" class="fa-solid fa-star"></i>
                    <i v-for="(star) in (5 - voteAverage)" :key="star" class="fa-regular fa-star"></i>
                </div>
                <!-- <div class="pe-2 ps-2">
                    <p class="fs-6 pb-0 text-danger fw-bold">PLOT</p>
                    {{ overview }}
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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