<template>
<div>
    <div class="mt-3">
        <div class="grey  d-flex   lighten-3" id="claimbar">
            <p class=" align-center mt-3 mx-5" id="claimnumber">Claim Number - 4340002739</p>
            <v-divider vertical class="my-2"></v-divider>
            <p class=" mt-3 mx-5" id="newclaim">FEATURE CLAIM</p>
            <v-spacer></v-spacer>
            <p class=" mt-4 mr-5" id="viewdetails">View Details</p>
        </div>
        <div class="mt-3">
           <router-link to="/" style="text-decoration:none">
            <v-btn  outlined class="pa-5"  elevation="0" id="notactive"> Claim Details</v-btn></router-link>
            <v-btn id="activebtn" class="ml-1 pa-5">Assessment Sheet</v-btn>
            <v-divider class="ml-16"></v-divider>
        </div>
    </div>
     <div  class="mt-16">
            <v-img src='../assets/Screenshot 2022-05-30 184620.jpg' height="200" width="300" class="mx-auto " />
            <div class="img">
            
           <router-link to="/addassessment" style="text-decoration:none">
            <v-btn  id="assessmentsheetbtn">
                <v-icon>mdi-plus-box-outline</v-icon>
            <v-divider vertical class="mx-3 grey lighten-5" ></v-divider>
             Add Assessment</v-btn></router-link>
             </div>
        </div>
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style >
.img {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>