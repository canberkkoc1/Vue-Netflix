<template>
    <div class="example">
        <div class="header">
            <h1>Tekrar İzle</h1>
        </div>
    <swiper class="swiper" :options="swiperOption" 
    >
      <swiper-slide class="slider"
        v-for="(slide,x) in swiperSlides"
        :key="x+='a'"
      >       
        <div class="image-div" >
          <img :src="slide" alt="" class="image" @mouseover="showSps(x)" @mouseleave="dontSps(x)">    
           
           <div class="spans-normal-wtch" :id="x"  @mouseover="showSps(x)" @mouseleave="dontSps(x)">
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
            "https://i.pinimg.com/564x/46/58/e5/4658e5125e2c643eb48e897b2daeb1c5.jpg",
            "https://i.pinimg.com/564x/7d/14/97/7d1497d01c390a3a4cee29232b490a3a.jpg",
            "https://i.pinimg.com/564x/1d/a2/f6/1da2f6fffc93043be91ac7c8436a40f2.jpg",
            "https://i.pinimg.com/236x/49/ab/37/49ab376f7cdfca3735888bac94b5741c.jpg",
            "https://i.pinimg.com/564x/f7/e5/0f/f7e50f6434185ecd0702a43b141612ee.jpg",
            "https://i.pinimg.com/564x/85/3e/72/853e725ceec9eb79143216c21c051124.jpg",
            "https://i.pinimg.com/564x/46/4e/2a/464e2a939dd1e56d509e80d0a3ed7d95.jpg",
            "https://i.pinimg.com/564x/46/58/e5/4658e5125e2c643eb48e897b2daeb1c5.jpg",
            "https://i.pinimg.com/564x/7d/14/97/7d1497d01c390a3a4cee29232b490a3a.jpg",
            "https://i.pinimg.com/564x/1d/a2/f6/1da2f6fffc93043be91ac7c8436a40f2.jpg",
            "https://i.pinimg.com/236x/49/ab/37/49ab376f7cdfca3735888bac94b5741c.jpg",
            "https://i.pinimg.com/564x/f7/e5/0f/f7e50f6434185ecd0702a43b141612ee.jpg",
            "https://i.pinimg.com/564x/85/3e/72/853e725ceec9eb79143216c21c051124.jpg",
            "https://i.pinimg.com/564x/46/4e/2a/464e2a939dd1e56d509e80d0a3ed7d95.jpg",
            "https://i.pinimg.com/564x/46/58/e5/4658e5125e2c643eb48e897b2daeb1c5.jpg",
            "https://i.pinimg.com/564x/7d/14/97/7d1497d01c390a3a4cee29232b490a3a.jpg",
            "https://i.pinimg.com/564x/1d/a2/f6/1da2f6fffc93043be91ac7c8436a40f2.jpg",
            "https://i.pinimg.com/236x/49/ab/37/49ab376f7cdfca3735888bac94b5741c.jpg",
            "https://i.pinimg.com/564x/f7/e5/0f/f7e50f6434185ecd0702a43b141612ee.jpg",
            "https://i.pinimg.com/564x/85/3e/72/853e725ceec9eb79143216c21c051124.jpg",
            "https://i.pinimg.com/564x/46/4e/2a/464e2a939dd1e56d509e80d0a3ed7d95.jpg",
        ]
      }
    },
    methods:{
       showSps(x){
         let chs = document.getElementById(x)
         chs.style.display = "block"
         console.log(chs)
         
         
       },     
      dontSps(x){
        let chs = document.getElementById(x)
         chs.style.display = "none"
      }
    }
    }
</script>

<style scoped>
.example{
  width: 100%;
  min-height: 50vh;
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