<template>
    <div class="dizi">
      <InfoVideo></InfoVideo>  
      <NormalCard></NormalCard>
      <WtchCard></WtchCard>
      <GundemCard></GundemCard>
    </div>
</template>

<script>
import InfoVideo from '@/components/Infovideo'
import NormalCard from '@/components/Normalcard'
import WtchCard from '@/components/Wtchagain'
import GundemCard from '@/components/Gundem'
    export default {
        name:"Diziler",
        components:{
            InfoVideo,NormalCard,
            WtchCard,
            GundemCard
        }
    }
</script>

<style scoped>

h1{
    color:white;
}
</style>