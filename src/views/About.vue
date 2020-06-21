<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h1> I'm A Developer..</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="(item,index) in mainData" :key="index">
        <div class="card">
         <p><b>{{item.name}}</b></p>
         <p>{{item.date}}</p>
         <p>{{item.des}}</p>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutData from "@/assets/data/ohk.json";
export default {
    data:()=>({
       mainData : aboutData
    }),
    methods:{
    }
    
}
   
</script>

<style scoped>
h1{
  font-size: 700%;
  color: sandybrown;
}
.card:hover{
  background-color: rgb(160, 95, 125);
  color: antiquewhite;
}
</style>
