<template>
    <div class="video-container">
        <div class="video">
            <video autoplay loop class="infoVideo">
                <source src="../assets/video/monster.mp4" type="video/mp4">
            </video>
        </div>       
            
            <div class="spans">               
                <h1>Monsters, Inc. 3D</h1>
                <span class="spanTen">
                    <TopTenIcon class="topten"></TopTenIcon> <h2>Türkiye'de Bugün Bir Numara </h2>
                </span>                
                    <p class="info-movie">
                    Canavarlar Dünyası adlı kendilerine has bir diyarda yaşayan ve enerji toplamak
                    için arada bir insanların bulunduğu ortamlara gelmek zorunda kalan canavarların 
                    öyküsünü anlatıyor.    
                    </p>
                    <div class="buttons-view">
                        <button class="play-button">
                            <StarIcon class="start-icon"></StarIcon>Oynat</button>
                        <button class="Info-button">
                            <InfoIcon class="info-icon"></InfoIcon>Daha Fazla Bilgi</button>

                
            </div>
        </div>
                <div class="replay">
                    <button class="border-button" @click="open ^= true" vue>
                        <MuteIcon class="mute-icon" v-show="!open"></MuteIcon>
                        <LoudIcon class="mute-icon" v-show="open"></LoudIcon>
                    </button>
                </div>
        
    </div>
</template>

<script>
import TopTenIcon from '@/icons/top10.svg'
import StarIcon from '@/icons/start.svg'
import InfoIcon from '@/icons/information.svg'
import MuteIcon from '@/icons/mute.svg'
import LoudIcon from '@/icons/loud.svg'
    export default {
        name:"Infovideo",
        components:{
            TopTenIcon,
            StarIcon,
            InfoIcon,
            MuteIcon,
            LoudIcon
        },
        data:()=>{
            return {
                open:false
            }
        }
    }
</script>

<style scoped>
.video-container{
    display: inline-block;
    width: 100%;
  height: 780px;
  overflow: hidden;
  position: relative;
    
    }
.video{
    position: absolute; 
    top: 0; left:0;
    width: 100%; height: 100%; 
    
}
.infoVideo{
     position: relative;
    width: auto;
    min-width: 100%;
    height: auto;
}

.spans {
  position: relative;
  top: 30%;
  width: 50%;
  height: 50%;
  color: #f1f1f1;
  padding: 20px;
  
}
.topten{
    width: 45px;
    height:45px;
}
.spanTen{
    margin-top: 2rem;
    display: flex;
    width: 60%;
    justify-content: space-evenly;
}
.info-movie{
    margin-top: 2rem;
    width: 60%;
}
.buttons-view{
    margin-top: 2rem;
    display: flex;
    width: 60%;
    justify-content: space-around;
}
.play-button {
    width: 107px;
    height: 32px;
    background-color: #ffff;
    color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: 600;
    position: relative;

}
.play-button:hover{
    background-color:rgb(192,192,192) ;
}

.start-icon {
    width:20px ;
    height:20px ;
    margin-right: .5rem;    
}
.Info-button{
    width: 201px;
    height: 32px;
    background-color: rgb(77, 77, 77,.9);
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: 600;
    position: relative;
}
.info-icon{
    width:24px ;
    height:24px ;
    margin-right: .5rem;
}
.replay{
    position: absolute !important;
    right: 1rem;
    top: 30rem;
    color: #f1f1f1;
    height: 4rem;
    width: 8rem;
    padding: 20px;
}
.mute-icon{
    width:24px ;
    height:24px ;
    fill:white !important;
}
.border-button{
    position: absolute;
    top: 12px;
    border: 2px solid white;
    border-radius: 999px;
    padding: .5rem;
    color:white;

}
.border-button:hover{
    background-color:rgb(192,192,192,.7) ;
}

@media (max-width:1200px){
    .video-container{
        height: 500px;
        top: 0;
        
    }
    .spans{
        position: absolute;
        top: 5rem;
        
    }
    .spans h1{
        font-size: 1.2rem;
        margin: 0;
    }
    .topten{
        width: 20px;
    }
    .replay{
    position: absolute;
    right: 1rem;
    top: 20rem;
    color: #f1f1f1;
    height: 4rem;
    width: 8rem;
    padding: 20px;


}
.border-button{
    position: absolute;
    top: 0;
}
.spanTen{
    display: flex;
    align-items: center;
}
.spanTen h2{
    font-size: 1rem;
}
.buttons-view{
    position: absolute;
    margin-top: 2rem;
    display: flex;
    width: 60%;
    justify-content: space-around;
}
.play-button{
    font-size: .6rem;
    width: 100px;
}
.Info-button{
    font-size: .6rem;
    width: 150px;
}
}



</style>