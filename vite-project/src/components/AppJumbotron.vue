<script>
export default {
    data() {
        return {
            mute: true,
        };
    },
    methods: {
        toggleMute(){
            this.mute = !this.mute
        },
    }
}
</script>

<template>
    <div class="jumbotron">
        <div class="video">
            <video :muted="mute" autoplay  plays-inline loop width="100%">
                <source src="../../public/img/avengers-video.mp4" type="video/mp4">
            </video>
        </div>

        <div class="content">
            <h1 class="text-white">
                Avengers Infinity War
            </h1>

            <div class="buttons d-flex">
                <button class="btn text-white">
                    <span class="fw-bold fs-5">
                        <i class="fa-solid fa-play fa-l"></i> <span class="ps-2">PLAY</span>
                    </span>
                </button>
                <button class="ms-5 btn text-white">
                    <span class="fw-bold fs-5 p-2">
                        <i class="fa-solid fa-plus fa-l"></i> <span class="ps-1">ADD TO MY LIST</span>
                    </span>
                </button>
            </div>
        </div>

        <button @click="toggleMute()" class="btn icon">
            <span class="audio">
                <i class="fa-solid fa-headphones fa-xl"></i>
            </span>
        </button>
    </div>

    
    
</template>

<style lang="scss" scoped>
.jumbotron{
    position: relative;
    width: 100%;
    height: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;                                   
}

button{
    border-radius: 50%;
    padding: 10px;
    background-color: rgba($color: white, $alpha: 0.1);
}

button:hover{
    border: 1px solid white;
    background-color: rgba($color: white, $alpha: 0.1);
}

.icon{
    position: absolute;
    top: 350px;
    right: 60px;
}

.video{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

}
.content{
        position: absolute;
        top: 200px;
        left: 60px;
        color: white;

        h1{
            color: white;
            font-size: 100px;
        }

        button{
            width: 230px;
            height: 60px;
            border-radius: 0px;
            margin-top: 100px;
            background-color: rgba($color: white, $alpha: 0.1);
            
        }

        button:hover{
            border: 1.5px solid white;
        }
    }
    .audio{
        color: white;
        font-size: 20px;
    }
</style>