<template>
    
<div class="example">
        <div class="header">
            <h1>Gündemdekiler</h1>
        </div>
    <swiper class="swiper" :options="swiperOption" 
    >
      <swiper-slide class="slider"
        v-for="(slide,x) in swiperSlides"
        :key="x+='b'"
      >       
        <div class="image-div" >
          <img :src="slide" alt="" class="image" @mouseover="showSpy(x)" @mouseleave="dontSpy(x)">    
           
           <div class="spans-normal-wtch" :id="x"  @mouseover="showSpy(x)" @mouseleave="dontSpy(x)">
            <div class="buttons-card-icons">
             <button class="start-button">
               <md-avatar>
                 <StarIcon class="startIcon"></StarIcon>      
                  <md-tooltip md-direction="bottom">Oynat</md-tooltip>
                </md-avatar>
             </button>
             <button class="plus-button">
               <md-avatar>
                 <PlusIcon class="plusIcon"></PlusIcon>
                 <md-tooltip md-direction="bottom">Listeme Ekle</md-tooltip>
                </md-avatar>
             </button>
             <button class="like-button">
               <md-avatar>
                 <LikeIcon class="likeIcon"></LikeIcon>
                 <md-tooltip md-direction="bottom">Bunu Sevdim</md-tooltip>
                </md-avatar>
             </button>
             <button class="dislike-button">
               <md-avatar>
                 <DislikeIcon class="dislikeIcon"></DislikeIcon>
                 <md-tooltip md-direction="bottom">Bana Göre Değil</md-tooltip>
                </md-avatar>
             </button>
            </div>
             <div class="content-span">
              <md-progress-bar class="md-accent" md-mode="determinate" :md-value="amount"></md-progress-bar>
                 
             </div> 
          </div>  
          
      
       </div>
      </swiper-slide>
    </swiper>


     
     
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import StarIcon from '@/icons/start.svg'
import PlusIcon from '@/icons/plus.svg'
import LikeIcon from '@/icons/like.svg'
import DislikeIcon from '@/icons/dislike.svg'
    export default {
        name:"wtch",
        components:{
            Swiper,
            SwiperSlide,
            StarIcon,
            PlusIcon,
            LikeIcon,
            DislikeIcon
        },
        data(){
            return {
              hover:false,
              amount: 40,
              swiperOption: {
          slidesPerView: 6,
          centeredSlides: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperSlides: [
            "https://i.pinimg.com/564x/2b/96/85/2b9685062de3e5064f739ce24a2c2dfa.jpg",
            "https://i.pinimg.com/564x/83/0a/13/830a137e7000afb6090125666e91939c.jpg",
            "https://i.pinimg.com/564x/2d/73/ba/2d73bafe2380467f7d26ecb155b81c9e.jpg",
            "https://i.pinimg.com/564x/f6/3e/ed/f63eedf4bf47c65a127327d34d67ccbe.jpg",
            "https://i.pinimg.com/564x/ef/98/74/ef98746f852a4a451b8f7d0228858a44.jpg",
            "https://i.pinimg.com/564x/2e/84/00/2e8400ce946dbf1bead0689d9a2d3acd.jpg",
            "https://i.pinimg.com/564x/89/8d/84/898d84e8181969fef40fb98f391094f9.jpg",
            "https://i.pinimg.com/564x/2b/96/85/2b9685062de3e5064f739ce24a2c2dfa.jpg",
            "https://i.pinimg.com/564x/83/0a/13/830a137e7000afb6090125666e91939c.jpg",
            "https://i.pinimg.com/564x/2d/73/ba/2d73bafe2380467f7d26ecb155b81c9e.jpg",
            "https://i.pinimg.com/564x/f6/3e/ed/f63eedf4bf47c65a127327d34d67ccbe.jpg",
            "https://i.pinimg.com/564x/ef/98/74/ef98746f852a4a451b8f7d0228858a44.jpg",
            "https://i.pinimg.com/564x/2e/84/00/2e8400ce946dbf1bead0689d9a2d3acd.jpg",
            "https://i.pinimg.com/564x/89/8d/84/898d84e8181969fef40fb98f391094f9.jpg",
            "https://i.pinimg.com/564x/2b/96/85/2b9685062de3e5064f739ce24a2c2dfa.jpg",
            "https://i.pinimg.com/564x/83/0a/13/830a137e7000afb6090125666e91939c.jpg",
            "https://i.pinimg.com/564x/2d/73/ba/2d73bafe2380467f7d26ecb155b81c9e.jpg",
            "https://i.pinimg.com/564x/f6/3e/ed/f63eedf4bf47c65a127327d34d67ccbe.jpg",
            "https://i.pinimg.com/564x/ef/98/74/ef98746f852a4a451b8f7d0228858a44.jpg",
            "https://i.pinimg.com/564x/2e/84/00/2e8400ce946dbf1bead0689d9a2d3acd.jpg",
            "https://i.pinimg.com/564x/89/8d/84/898d84e8181969fef40fb98f391094f9.jpg",
            
        ]
      }
    },
    methods:{
       showSpy(x){
         let chs = document.getElementById(x)
         chs.style.display = "block"
         console.log(chs)
         
         
       },     
      dontSpy(x){
        let chs = document.getElementById(x)
         chs.style.display = "none"
      }
    }
    }
</script>

<style scoped>
.example{
  width: 100%;
  min-height: 100vh;
  position: relative;
 
}
.header{
  background-color: transparent;
}
.header h1{
  color:white;
  margin:2rem 1rem;
}
.swiper{
  height: 20rem;
  margin-bottom: 5rem;  
  
}
.image-div{
  height: 100%;
  position: relative;
  background-color: blue;
  overflow: hidden;
  z-index: 9999;
}
.image{
  height: 100%;
  width: 100%;
  transition: all .5s ease-in-out;
  position: relative;
}
.md-progress-bar {
    margin: 14px;
  }
  .spans-normal-wtch{    
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0; 
    width: 100%;
    height: 30%;
    background-color: #181818;
    color:white;
    transition: all 1s ease-in-out;

  }  
  img:hover + .spans-normal{
    
  }
  
  .start-button{
    width: 2rem;
    border-radius: 999px;
    background-color: rgb(255, 255, 255);
    width: 2.5rem;
    height: 2.5rem;
  }
  .startIcon{
    fill: black;
    width: 24px;
}
.plus-button{
    background-color:transparent;
    border:2px solid white !important;
    border-radius: 999px;
    width: 2.5rem;
    height: 2.5rem;
   
}
.plusIcon{
  position: absolute;
  top: 6px;
  right: 9px;
    width: 24px;
    fill:white;
}
.like-button{
    background-color:transparent;
    border:2px solid white !important;
    border-radius: 999px;
    width: 2.5rem;
    height: 2.5rem;
   
}
.likeIcon{
    width: 24px;
    fill:white;
}
.dislike-button{
    background-color:transparent;
    border:2px solid white !important;
    border-radius: 999px;
    width: 2.5rem;
    height: 2.5rem;
   
}
.dislikeIcon{
    width: 24px;
    fill:white !important;
}
.content-span{
  position: absolute;
  width: 100%;
  bottom: 0;
}
.buttons-card-icons{
  position: relative;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
}
.images{
  position: relative;
  width: 100%;
  height: 100%;
}


 .image:hover{
    transform: scale(1.4)
}  


@media (max-width:1200px){
 
  .buttons-card-icons{
    width: 100%;
    justify-content: space-evenly;
}
  .start-button{
   width: 2rem;
    height: 2rem;
  }
  .startIcon{
    fill: black;
    position: absolute;
  left: 4px;
  top: 4px;
}
.likeIcon{
   position: absolute;
  left: 4px;
  top: 2px;
}
.plusIcon{
     position: absolute;
  left: 3px;
  top: 4px;

}
.plus-button{
  width: 2rem;
    height: 2rem;
}
.like-button{
 width: 2rem;
    height: 2rem;
}
.dislike-button{
  width: 2rem;
    height: 2rem;
}
.dislikeIcon{
  position: absolute;
  left: 4px;
  top: 4px;
    
} 
}
</style>