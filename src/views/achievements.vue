<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h1>One Should Always grab Opportunities , Thats a difference between a winner and loser.</h1>
      <img :src="obtainData.image" class="pic">
    </div>
  </div>
  <div class="row">
    <div class="col-md-6" v-for="(item,index) in obtainData.ach" :key="index">
     <div class="card" >
       <p><b>{{item.category}}</b></p>
       <p>{{item.prizes}}</p>
       <p>{{item.des}}</p>
     </div>
    </div>
  </div>
  </div>
</template>

<script>
import achievementData from '@/assets/data/obtain.json'
export default {
    name : 'achievementView',
    data:()=>({
      obtainData: achievementData
    }),
    methods: {
     },
  }
</script>
<style scoped>
.pic{
  max-width: 20%;
}
.card:hover{
  background-color: lightskyblue;
  color: black;
}
</style>

 