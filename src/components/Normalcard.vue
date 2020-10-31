<template>
    <div class="example">
        <div class="header">
            <h1>canberk, İzlemeye Devam Et</h1>
        </div>
    <swiper class="swiper" :options="swiperOption" >
      <swiper-slide class="slider"
        v-for="slide in swiperSlides"
        :key="slide"
      >       
        <div class="image-div" >
          <img :src="slide" alt="" class="image" >    
           
           <div class="spans">
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
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>


     <div class="header">
            <h1>Gündemdekiler</h1>
        </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="slider"
        v-for="slide in swiperSlides"
        :key="slide"
      >
            <div class="image-div" >
          <img :src="slide" alt="" class="image"  > 

           <div class="spans" >
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
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
      <br>

      <div class="header">
            <h1>Tekrar İzle</h1>
        </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="slider"
        v-for="slide in swiperSlides"
        :key="slide"
      >
            <div class="image-div">              
                  <img :src="slide" alt="" class="image" >  
          <div class="spans" >
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
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
      <br>
     
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
      

        name:"Normalcard",
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
            "https://i.pinimg.com/564x/46/4e/2a/464e2a939dd1e56d509e80d0a3ed7d95.jpg",
            "https://i.pinimg.com/564x/14/54/c9/1454c9bc156a621823a6013f993c6e67.jpg",
            "https://i.pinimg.com/564x/e8/6a/1b/e86a1b175e6f1d742580373fb1b30cf4.jpg",
            "https://i.pinimg.com/236x/49/ab/37/49ab376f7cdfca3735888bac94b5741c.jpg",
            "https://i.pinimg.com/564x/59/53/eb/5953eb3199a5d46eabeb4332fb408b81.jpg",
            "https://i.pinimg.com/564x/1b/e1/65/1be1655a9d05de72733af54029d65b18.jpg",
            "https://i.pinimg.com/564x/46/4e/2a/464e2a939dd1e56d509e80d0a3ed7d95.jpg",
            "https://i.pinimg.com/564x/14/54/c9/1454c9bc156a621823a6013f993c6e67.jpg",
            "https://i.pinimg.com/564x/e8/6a/1b/e86a1b175e6f1d742580373fb1b30cf4.jpg",
            "https://i.pinimg.com/236x/49/ab/37/49ab376f7cdfca3735888bac94b5741c.jpg",
            "https://i.pinimg.com/564x/59/53/eb/5953eb3199a5d46eabeb4332fb408b81.jpg",
            "https://i.pinimg.com/564x/1b/e1/65/1be1655a9d05de72733af54029d65b18.jpg",
            "https://i.pinimg.com/564x/46/4e/2a/464e2a939dd1e56d509e80d0a3ed7d95.jpg",
            "https://i.pinimg.com/564x/14/54/c9/1454c9bc156a621823a6013f993c6e67.jpg",
            "https://i.pinimg.com/564x/e8/6a/1b/e86a1b175e6f1d742580373fb1b30cf4.jpg",
            "https://i.pinimg.com/236x/49/ab/37/49ab376f7cdfca3735888bac94b5741c.jpg",
            "https://i.pinimg.com/564x/59/53/eb/5953eb3199a5d46eabeb4332fb408b81.jpg",
            "https://i.pinimg.com/564x/1b/e1/65/1be1655a9d05de72733af54029d65b18.jpg",
        ]
      }
    },
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
  .spans{    
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
.image:hover + .spans{
  display: block;
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