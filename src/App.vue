<template>
  <div class="app">
    <Header></Header>
    <div class="InfoVideo">
      <InfoVideo></InfoVideo>
    </div>
      <OrgCard></OrgCard>
  </div>
</template>

<script>
import Header from '@/components/Headers'
import InfoVideo from '@/components/Infovideo'
import OrgCard from '@/components/Orgcard'
  export default {
    name:"app",
    components:{
      Header,
      InfoVideo,
      OrgCard
    }
  }
</script>

<style scoped>
@import './style/app.css';
.InfoVideo{
 position: relative;
  width: 100%;
  height: 700px;
}


</style>
