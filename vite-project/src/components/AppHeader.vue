<script>
import { store } from '../store.js';
/* import Axios from 'axios' */

export default {
    data() {
        return {
            store,
            selectedNav: 0,
            navBar: [
                {
                    nav: 'Home'
                },
                {
                    nav: 'TV Series'
                },
                {
                    nav: 'Movies'
                },
                {
                    nav: 'Originals'
                },
                {
                    nav: 'Recently added'
                },
                {
                    nav: 'My list'
                }
            ],
        };
    },
    methods: {
        activeClass(i){
            if(this.selectedNav == i){
                return 'active';
            }
            else{
                return '';
            }
        },
        switchActive(i){
            this.selectedNav = i;
        },
    },
}
</script>

<template>
    <header>
        <div class="header-left">
            <div class="img-box">
                <img src="../../public/img/Netflix_2015_logo.svg.png" alt="netflix-logo">
            </div>
            <div class="navbar">
                <ul>
                    <li v-for="(elem, i) in navBar" :key="i">
                        <span class="nav-bar" :class="activeClass(i)" @click="switchActive(i)">
                            {{ elem.nav }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header-right">
            <div class="searching-bar">
                <input class="form-control focus-ring focus-ring-dark" type="text" @keyup.enter="$emit('searchingBar')" v-model="store.searchingText">
                <button class="btn" @click="$emit('searchingBar')">
                    Search
                </button>
            </div>
            <div class="icons">
                <i class="fa-solid fa-bell fa-xl"></i>
            </div>
            <div class="profile">
                <img src="../../public/img/profile.png" alt="">
            </div>
        </div>
    </header>
    
</template>

<style lang="scss" scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 85px;
    background-color: black;

    .img-box{
        max-width: 150px;
        padding: 20px 0px 20px 20px;

        img{
            width: 100%;
        }
    }

    .header-left, .header-right{
        display: flex;
        align-items: center;
    }

    ul{
        list-style: none;

        li{
            padding-top: 12px;
            display: inline-block;
            padding-left: 15px;
            cursor: pointer;
        }
    }

    .nav-bar{
        color: grey;
    }

    .active{
        color: white;
    }

    .icons{
        color: white;
        cursor: pointer;
    }

    .icons:hover{
        color: orange;
    }

    .profile{
        max-width: 40px;
        height: 40px;
        margin: 0 20px;
        cursor: pointer;

        img{
            width: 100%;
            height: 100%;
            border-radius: 10%;
            object-fit: cover;
        }
    }

    .profile:hover{
        max-width: 41px;
        height: 41px;
    }

}

.searching-bar{
    display: flex;
    justify-content: end;
    padding: 30px;
    background-color: black;

    .form-control{
        text-shadow: none;
        transition: none;
        border-radius: 0;
    }

    button{
        border-radius: 0;
        background-color: #D91921;
        color: white;
    }
}
</style>