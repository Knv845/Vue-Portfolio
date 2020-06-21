<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- {{doneData}} -->
                <img :src="doneData.image" class="image">
            </div>
        </div>
        <h1> Just One Step More... </h1>
        <br>
        
        <div class="row">
            <div class="col-md-6">
                 <h2>Phone : 9817475586 </h2>
            </div>
            <div class="col-md-6">
                <h3> Email : knvkhera30@gmail.com </h3>
            </div>
        </div>

    </div>
</template>


<script>
import profileData from '@/assets/data/done.json'
  export default {
    name:'contactView',
    data:()=>({
      doneData: profileData
    }),
    methods: {
    },
  }
</script>

<style scoped>
.image{

    max-width: 50%;
    margin-top: 10%;

}
</style>