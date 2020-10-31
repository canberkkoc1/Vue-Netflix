<template>
    <header class="header">

            <div class="left">
                <!-- LOGO -->
                <router-link to="/" class="logo">
                    <NetflixIcon></NetflixIcon>
                </router-link>
                <!-- NAV -->
                    <nav class="navigation">
                        <router-link to="/" class="anaSayfa">Ana Sayfa</router-link>
                        <router-link to="/dizi" >Diziler</router-link>
                        <router-link to="/film" >Filmler</router-link>
                        <router-link to="/enyeni" >En Yeni</router-link>
                        <router-link to="/listem" >Listem</router-link>

                    </nav>

            </div>
            <div class="right">
                <!-- SEARCH -->
                <div class="search">
                    <!-- <input type="text" name="" id="" v-show="show" class="inputSearch" > -->
                        <button class="search-button" @click="show ^= true" vue>
                            <SearchIcon class="icon-search" ></SearchIcon>
                        </button>

                </div>
                <!-- OTHER -->
                <router-link to="/" class="cocuk">Çocuk</router-link>
                <router-link to="/gift" class="gift">
                    <GiftIcon class="gift-icon"></GiftIcon>
                </router-link>
                <router-link to="/" class="alrm">
                    <AlarmIcon class="alrm-icon" @mousemove="hover"></AlarmIcon>
                </router-link>
                <router-link to="/account" >
                    <img src="https://occ-0-3727-300.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaPolEEq5s2QRP_CDO2Y0XKN6lbRAkH-S-B5XcfR-7xdSV2k-1VPzx54xaySu7czNLu8U4t5Q8lhLZMzIBPgxcA.png?r=a41" alt="">
                </router-link>
        </div>
      

    </header>
</template>

<script>

import SearchIcon from '@/icons/search.svg'
import GiftIcon from '@/icons/gift.svg'
import AlarmIcon from '@/icons/alrm.svg'
import NetflixIcon from '@/icons/netflix.svg'
    
    export default {
        name:'Headers',
        components:{
            SearchIcon,
            GiftIcon,
            AlarmIcon,
            NetflixIcon
        },
        data:()=>{
            return {
                show:false,
                hover:false
            }
        }
    }
                    
</script>

<style >
.header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    height: 65px;
    background-color:rgba(110, 110, 110, 0.3) ;
}

.left{
    display: flex;
    align-items: center;
    color: rgb(255, 255, 255);    
}

.navigation{
    width: 25rem;
    display: flex;
    justify-content: space-evenly;
}
.anaSayfa{
    font-weight: 600;
}
.right{
    position: relative;
    width: 30rem; 
    display: flex;
    align-items: center;   
}

.search{
    position: relative;
    width: 10rem;
    margin-right:28px;
    text-align: end;
}

.cocuk{
    width: 3rem;
    text-align: center;
    margin-right: 28px;
}
.gift{
    margin-right: 28px;
}
.alrm{
    margin-right: 28px;
}
.icon-search{
    fill:white;
}
.gift-icon{
    fill: white;
}
.alrm-icon{
    fill:white;
}


</style>