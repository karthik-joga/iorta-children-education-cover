<template>
<div>
  <v-app>
    <div class="mt-3">
        <div class="d-flex " id="claimbar"  >
            <p class=" align-center font-weight-bold mt-3 mx-5" id="claimnumber" >Claim Number - 4340002739</p>
            <v-divider vertical class="my-2"></v-divider>
            <p class=" font-weight-bold  darken-3 mt-3 mx-5" id="newclaim" >NEW CLAIM</p>
            <v-spacer></v-spacer>
            <p class=" mt-3 mr-5" id="viewdetails">View Details</p>
        </div>
       
    </div>
     <div class="mt-3">
            <v-btn class=" pa-5 mr-1 text-subtitle-2" id="activebtn" elevation="0" > Claim Details</v-btn>
         <router-link to="/assess" style="text-decoration:none">
         <v-btn outlined id="notactive"  
          elevation="0">
         Assessment Sheet</v-btn></router-link>
            <v-divider class="mr-16"></v-divider>
        </div>
        
        <BasicDetails/>
        <HospitalisationDetails/>
       
        <div class="mt-2 mb-10">
           <v-card flat>

        <v-layout>

          <v-btn class="mr-4 btnDanger red--text"  

            ><v-icon class="icon">mdi-backspace-outline</v-icon

            ><v-divider vertical class="red mx-2"></v-divider>Reset</v-btn

          >

 

          <v-btn class="btnDanger red--text"  

            ><v-icon class="icon">mdi-backspace-outline</v-icon

            ><v-divider vertical class="red mx-2"></v-divider>Cancel</v-btn

          >

          <v-spacer></v-spacer>

          <v-btn class="btnSuccess white--text" color="#23b1a9"

            ><v-icon class="icon">mdi-arrow-right-circle</v-icon

            ><v-divider vertical class="white mx-2"></v-divider> Submit</v-btn

          >

        </v-layout>

      </v-card>
        </div>
        </v-app>
    </div>
</template>

<script>
import "../assets/css/main.css"
import HospitalisationDetails from './HospitalisationDetails.vue'
import BasicDetails from './BasicDetails.vue'
    export default {
        components: {
            HospitalisationDetails,
            BasicDetails,
            
        }
    }
</script>

<style scoped>
.kart {
    border-radius: 0px;
}
.bord {
    border:1px solid
}
#new{
  color:#D1121B
}

</style>