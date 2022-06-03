<template>
<v-app>
<NavBar/>

<v-main class="mx-7">
<router-view></router-view>
<!-- <DataGrid/> -->

</v-main>
</v-app>

</template>

<script>
import NavBar from './components/Navbar/NavBar.vue'
// import DataGrid from './views/DataGrid.vue'




export default {
  components: {
    NavBar,
  //  DataGrid
  }
}
</script>

<style>
* {
  text-transform: none !important;
  letter-spacing: 0;
}
</style>
