<template>
    <div class="dizi">
      <NormalCard>
      </NormalCard>
      <GundemCard></GundemCard>
    </div>
</template>

<script>
import NormalCard from '@/components/Normalcard'
import GundemCard from '@/components/Gundem'
    export default {
        name:"Enyeni",
        components:{            
            NormalCard,
            GundemCard
        }
    }
</script>

<style scoped>
h1{
    color:white;
}
</style>