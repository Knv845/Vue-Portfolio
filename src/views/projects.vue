<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1> Imformations About My Projects.. </h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3" v-for="(item,index) in mainData" :key="index">
            <div class="card m-2 p-3">
            <p class="xoxo">{{item.name}}</p>
            <p>{{item.date}}</p>
            <p>{{item.des}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import projectData from "@/assets/data/projects.json";
export default {
   data:()=>({
        mainData  : projectData
    }),
    methods:{
    }
}
</script>
<style scoped>
.xoxo{
    font-size: 30px;
}
.card:hover{
    background-color: burlywood;
}



</style>
