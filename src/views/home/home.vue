<template>
    <div>        
      <InfoVideo></InfoVideo>    
      <OrgCard></OrgCard>
      <NormalCard></NormalCard>
    </div>
</template>

<script>
import InfoVideo from '@/components/Infovideo'
import OrgCard from '@/components/Orgcard'
import NormalCard from '@/components/Normalcard'
    export default {
        name:"Home",
        components:{
            InfoVideo,
            OrgCard,
            NormalCard
        }
    }
</script>

<style scoped>

</style>