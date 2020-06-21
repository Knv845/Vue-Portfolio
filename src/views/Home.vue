<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <img :src="mainData.image" class="imgpic" >
      </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h1 style="font-size: 200%">{{mainData.name}}</h1>
        </div>
      </div>
        
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <p>{{mainData.des}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
     
      </div>
    </div>
    
        <!--<p class="mt-5" style="font-size:200%">
          <b>{{mainData.name}}</b>
        </p>
        <p style="p-2">
          <b>{{mainData.des}}</b><br>
        </p>
      </div>
    </div>-->
      <!--<div class="row">
        <div class="col-md-12 col-sm-12">
          <h1>Social</h1>
        </div>
      </div>
       
        <div class="row">
          <div class="col-md-12">
            <span v-for="(item,index) in mainData.social" :key="index">
          <a class="social " :href="item.link">{{item.name}}</a>
        </span>
        </div>
        </div>-->
      <div class="row">
      <div class="col-md-12 col-sm-12">
        <h2>Education</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4" v-for="(item,index) in mainData.edu" :key="index">
        <div class="card m-3 p-2n">
          <p>{{item.orgname}}</p>
          <p>{{item.year}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileData from "@/assets/data/main.json";

export default {
  name: "HomeView",
  data: () => ({
    mainData: profileData
    
  }),
  methods: {}
};
</script>



<style scoped>
.imgpic {
  border-radius: 50%;
  width: 50%;
  height: 70%;
  border: blueviolet solid 2px;
}
.social {
  color: magenta;
  border-block: 6;
  font-display: none;
  font-style: italic;
  background-color: lightcyan;
  font-size: 20px;
}

.card:hover {
  background-color: seagreen;
  color: black;
}
h2 {
  font-size: 40px;
}
.parallax{
  background-image: "mainData.image1";
  height: 100%;
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>