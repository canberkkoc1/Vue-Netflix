<template>
    <div class="lstcard">
 <md-card class="card">
      <md-card-media-cover md-solid class="card-media"
      v-for="(img, i) in 14"
      :key="i+='c'"
      
      >
        <md-card-media class="image-card" >
          <img src="../assets/img/movie2.jpg" alt="movie" v-if="img %2 === 0" @mouseover="showSph(i)" @mouseleave="dontSph(i)">
          <img src="../assets/img/movie1.jpg" alt="movie" v-else @mouseover="showSph(i)" @mouseleave="dontSph(i)">

        <md-card-area class="area" :id="i" >
          <md-card-header >
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
              <md-progress-bar class="md-accent" md-mode="determinate" :md-value="10"></md-progress-bar>
                 
             </div> 
            
          
           </div>
          </md-card-header>
        </md-card-area>
    </md-card-media>
      </md-card-media-cover>   
      

      
    </md-card>
    </div>
</template>

<script>
import StarIcon from '@/icons/start.svg'
import PlusIcon from '@/icons/plus.svg'
import LikeIcon from '@/icons/like.svg'
import DislikeIcon from '@/icons/dislike.svg'
    export default {
        name:"Lstcard",
        components:{
            StarIcon,
            PlusIcon,
            LikeIcon,
            DislikeIcon
        },
        methods:{
       showSph(i){
         let hhs = document.getElementById(i)
         hhs.style.display = "block"
         console.log(i)        
         
         
       },     
      dontSph(i){
        let hhs = document.getElementById(i)
         hhs.style.display = "none"
      }
    }
    }
</script>

<style scoped>
.lstcard{
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
}
.card{
    background-color: black;
    min-height: 100vh;
    width: 100%;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right:5rem ;
    display: grid;
    grid-template-columns: 20% 20%  20% 20% 20%;
    grid-row-gap: 5rem;
}
.image-card{
    overflow: hidden;
    width: 100%;
}
img{
    width: 391px;
    height: 266px;
    transition: all 1s ease-in-out;
}
img:hover{
    transform: scale3d(2,2,2);
}
.area{
    display: none;
    height: 40%;
    width: 100%;
    background-color: rgb(88, 90, 90);
    position: absolute;
    bottom: 0;
}

.buttons-card-icons{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1.5rem;
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
  top: 4px;
  left: 5px;
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
    position: absolute;
  top: 4px;
  left: 5px;
  right: 9px;
}
.dislike-button{
    background-color:transparent;
    border:2px solid white !important;
    border-radius: 999px;
    width: 2.5rem;
    height: 2.5rem;
   
}
.dislikeIcon{
    position: absolute;
  top: 6px;
  left: 5px;
  right: 9px;
    width: 24px;
    fill:white !important;
}


</style>