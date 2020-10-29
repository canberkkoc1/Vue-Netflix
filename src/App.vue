<template>
  <div class="app">
    <Header></Header>
      <InfoVideo></InfoVideo>
  </div>
</template>

<script>
import Header from '@/components/Headers'
import InfoVideo from '@/components/Infovideo'
  export default {
    name:"app",
    components:{
      Header,
      InfoVideo,
    }
  }
</script>

<style scoped>
@import './style/app.css';

.video-background {
  background: #000;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -99;
}
.video-foreground,
.video-background iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

</style>
