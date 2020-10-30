<template>
    <div class="video-container">
        <div class="video">
            <video autoplay loop controls class="infoVideo">
                <source src="../assets/video/monster.mp4" type="video/mp4">
            </video>
        </div>
        <div class="video-content">
            <div class="content">
        </div>
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
                <div class="replay">
                    <button class="border-button">
                        <ReplayIcon class="replay-icon"></ReplayIcon>
                    </button>
                </div>
        </div>
    </div>
</template>

<script>
import TopTenIcon from '@/icons/top10.svg'
import StarIcon from '@/icons/start.svg'
import InfoIcon from '@/icons/information.svg'
import ReplayIcon from '@/icons/replay.svg'
    export default {
        name:"Infovideo",
        components:{
            TopTenIcon,
            StarIcon,
            InfoIcon,
            ReplayIcon,
        }
    }
</script>

<style scoped>
.video-container{
    display: block;
}
.video{
width: 100%;
  max-height: 700px;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -100;
}
.infoVideo{
     position: relative;
    width: auto;
    min-width: 100%;
    height: auto;
    /*background: transparent url(video-bg.jpg) no-repeat; */
    /* background-size: cover */
   
}
.video-content{
  width: 40%;
  height: 30rem;
  overflow: hidden;
  position: fixed;
  top: 15rem;
  left: 2rem;
  z-index: -100;
  padding: 2rem 0 0 1rem;
  color: white;
}
.content {
    position: relative;
  color: #f1f1f1;
  height: 10%;
  width: 100%;
  padding: 20px;
}
.replay{
    position: fixed;
    right: 1rem;
    top: 40rem;
    color: #f1f1f1;
    height: 4rem;
    width: 8rem;
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
    width: 45%;
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
.replay-icon{
    width:24px ;
    height:24px ;
}
.border-button{
    position: relative;
    border: 2px solid white;
    border-radius: 999px;
    padding: .5rem;
    color:white;

}
.border-button:hover{
    background-color:rgb(192,192,192,.7) ;
}

@media (max-width:1400px){
    .replay{
    position: fixed;
    right: 1rem;
    top: 30rem;
    color: #f1f1f1;
    height: 4rem;
    width: 8rem;
    padding: 20px;

}
.buttons-view{
    margin-top: 2rem;
    display: flex;
    width: 55%;
    justify-content: space-around;
}
}

</style>