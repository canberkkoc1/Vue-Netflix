<template>
    <div>        
      <InfoVideo></InfoVideo>    
      <OrgCard></OrgCard>
    </div>
</template>

<script>
import InfoVideo from '@/components/Infovideo'
import OrgCard from '@/components/Orgcard'
    export default {
        name:"Home",
        components:{
            InfoVideo,
            OrgCard
        }
    }
</script>

<style scoped>

</style>