<template>
  <div class="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Headers'

  export default {
    name:"app",
    components:{
      Header,
     
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
