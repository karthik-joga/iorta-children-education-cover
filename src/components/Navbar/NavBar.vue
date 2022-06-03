<template>

<div>
<v-app-bar app flat dense dark height="70">
    <v-icon color="#20B2AA"  large >mdi-arrow-left-circle</v-icon>
   <div class="d-flex  ml-5" style="width:250px,border:none" >
       <p class="mr-16 mt-5 ">Claim Processing</p>
       <v-icon class="ml-8 align-center">mdi-menu-down</v-icon>
        
   </div>
  
   <v-spacer></v-spacer>
   <div class="d-flex mx-3">
       <v-icon color="#20B2AA">mdi-lightning-bolt</v-icon>
       <p class="mt-5 ml-2">Quick Menu</p>
      
   </div>
   <div class="d-flex mx-3">
       <v-icon color="#20B2AA">mdi-file-document-outline</v-icon>
       <p class="mt-5 ml-2">View/Upload Documents</p>
   </div>
   <div class="d-flex mx-5">
       <v-icon color="#20B2AA">mdi-dots-vertical</v-icon>
       <p class="mt-5 ml-3">Menu</p>
       
   </div>
    
</v-app-bar>

</div>

</template>

<script>
export default {
    name:"NavBar",
    data() {
        return{
            hide:false,
            hide1:false,
            show:false
        }
    }
}
</script>
<style scoped>
#menu{
    position:absolute;
    z-index:1;
    width:250px;
    align-items: center;
}
#menus{
    position:absolute;
    z-index:1;
    width:200px;
    top:0;
    right:30;
    align-items: center;
}
#menuss{
    position:absolute;
    z-index:1;
    width:200px;
    top:0;
    right:0;
    align-items: center;
}
</style>