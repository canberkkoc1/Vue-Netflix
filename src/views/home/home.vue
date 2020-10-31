<template>
    <div>        
      <InfoVideo></InfoVideo>    
      <OrgCard></OrgCard>
      <NormalCard></NormalCard>
      <WtchCard></WtchCard>
      <GundemCard></GundemCard>
    </div>
</template>

<script>
import InfoVideo from '@/components/Infovideo'
import OrgCard from '@/components/Orgcard'
import NormalCard from '@/components/Normalcard'
import WtchCard from '@/components/Wtchagain'
import GundemCard from '@/components/Gundem'
    export default {
        name:"Home",
        components:{
            InfoVideo,
            OrgCard,
            NormalCard,
            WtchCard,
            GundemCard
        }
    }
</script>

<style scoped>

</style>