<template>
    <div class="example">
        <div class="header">
            <h1>Netflix Orjinal İçerikler</h1>
        </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="slider"
        v-for="(slide,i) in swiperSlides"
        :key="i+='t'"
      >
            <div class="image-div"  >
          <img :src="slide" alt="" class="image" @mouseover="showSpan(i)" @mouseleave="dontShow(i)">
          <div class="spans-cardss" :id="i" @mouseover="showSpan(i)" @mouseleave="dontShow(i)" >
             <button class="start-button">
                 <StarIcon class="startIcon"></StarIcon>
             </button>
             <button class="plus-button">
                 <PlusIcon class="plusIcon"></PlusIcon>
             </button>
              <div class="content-span">
                 <h1>Name</h1>
                 <div class="span-user">
                     <span class="green">%98 eşleşme</span>
                     <span>+18</span>
                     <span>1.Sezon</span>
                 </div>
                 <div class="type">
                     <span>Şiddet İçerikli</span>
                     <span>Heyacanlı</span>
                     <span>Destansı</span>
                 </div>
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

    export default {
        name:"Orgcard",
        components:{
            Swiper,
            SwiperSlide,
            StarIcon,
            PlusIcon
        },
        data(){
            return {
              swiperOption: {
          slidesPerView: 5,
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
     methods:{
         showSpan(i){
             console.log(i)
             let spans = document.getElementById(i)
             spans.style.display="block"
         },
         dontShow(i){
             let spans = document.getElementById(i)
             spans.style.display="none"
         }
     } 
        
}
</script>

<style scoped>
.example{
    
    position: relative;
     min-height: 629px;
     width: 100%;
     background-color: rgb(0, 0, 0,.8);
     overflow: hidden;
   
}
.header{
    margin-left: 2rem;
    margin-right: 2rem;
    padding-top: 1rem;
    background-color: transparent;
}
.swiper{
    height: 600px;
    overflow: hidden;
}
.image-div{
    position: relative;
    height: 100%;
    width: 301px;
    
}
.swiper{
    margin:0 2rem 2rem 2rem;
}
.slider{
    height: 590px;
    padding: 0 !important;
    overflow: hidden;
}
.image{
    width: 301px;
    height: 100%;
    transition: all .5s ease-in-out;
}
.image:hover{
    transform: scale(1.2);
    z-index:9999;
}
button {
        flex: 1;
        padding: 0;
        margin: 0;
        border: none;
        border-right: 1px solid grey;
        background-color: grey;
        cursor: pointer;
}
button:last-child{
    border: none;
}
button:hover{
    background-color: rgb(63, 62, 62);
}
.header{
    color:white;
}
.spans-cardss{
    display: none;
    background-color: rgb(22, 22, 22,.5);
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 1s ease-in-out;
}
.startIcon{
    fill: black;
    width: 24px;
}
.start-button{
    position: absolute;
    bottom: 8rem;
    left: 2rem;
    border-radius: 999px;
    background-color: rgb(255, 255, 255);
    width: 2.5rem;
    height: 2.5rem;
}
.plus-button{
   position: absolute;
    bottom: 8rem;
    left: 6rem;
    background-color:transparent;
    border:2px solid white !important;
    border-radius: 999px;
    width: 2.5rem;
    height: 2.5rem;
   
}
.plusIcon{
    width: 24px;
    fill:white;
}
.content-span{
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 60%;
    width: 259px;
    display: flex;
    flex-direction: column;
}
.content-span h1{
    font-size:1.6rem ;
    margin-left: 1rem;
}
.span-user{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1rem 0 1rem 0;
}
.green{
    color:rgb(50, 230, 50)
}
.type{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}


@media (max-width:1200px){
    .header{
        padding-top: 1rem;
        margin:0;
    }
    .image-div{
        height: 70%;
        overflow: hidden;
    }
    .image{
        width:200px ;
        height: 100%;
    }
    
    .start-button{
        bottom:5rem;
    }
    .plus-button{
        bottom:5rem;

    }
    .content-span h1{
        font-size: .7rem;
        margin-top: 1rem;
    }
    .content-span{
        width: 70%;
        display: flex;
        justify-content: space-between;
        
    }
    .span-user{
        margin: 0;
        left: 0;
        flex-direction: row;
        font-size: .6rem;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
    }
    .span-user span{
        margin-left: .5rem;
    }
    .type{
        display: flex;
        justify-content: flex-start;
    }
    .type span{
        margin-left: .5rem;
    }
    .type span{
        font-size: .6rem;
    }
}
</style>