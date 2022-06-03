<template>
<div>
   <router-link to="/assess" style="text-decoration:none"> 
   <v-app-bar app flat dense dark height="60">
    <v-icon color="#23B1A9"  large >mdi-arrow-left-circle</v-icon>
    <p class=" ml-5 mt-2" style="font-size:18px">Add Assessment Sheet</p>
    <v-spacer></v-spacer>
    <p class=" mt-2 " style="font-size:18px">Close</p>
    </v-app-bar></router-link>
    <div class="mt-0">
    <p id="startheads" >Add details to Assessment Sheet</p>
    </div>
    <div>
    <div  id="border" >
            <div id="tablehead" height="30" @click="hide=!hide">
                <div class="d-flex align-center mx-5"> <p id="tableheadtext">Basic Details</p>
                 <v-spacer></v-spacer>
                 <v-icon id="tableicon" v-show="hide" >mdi-plus-box-outline</v-icon>
                 <v-icon id="tableicon" v-show="!hide">mdi-minus-box</v-icon>
                 </div>
            </div>
                 <div v-show="!hide">
                    <div>
                      
                     <v-layout wrap class="pt-4 form-group-container">
                        <v-flex class="form-group ma-3">
                         <label class="form-label">
                            <p id="abovetext">Settlement Type<span id="require">*</span></p> </label>
                        <v-select
                             class="input"
                                 label="Select"
                                 solo
                                 dense
                                 outlined
                                 
                         ></v-select>
                     </v-flex>
                      <v-flex class="form-group ma-3">
                         <label class="form-label"> 
                           <p id="abovetext">Claim Payment Type<span id="require">*</span></p> </label>
                        <v-select
                             class="input"
                                 label="select"
                                 solo
                                 dense
                                 outlined
                                 
                         ></v-select>
                     </v-flex> <v-flex class="form-group ma-3">
                         <label class="form-label"> 
                           <p id="abovetext">Transaction Type<span id="require">*</span></p> </label>
                         <v-select
                             class="input"
                                 label="select"
                                 solo
                                 dense
                                 outlined
                                 
                         ></v-select>
                     </v-flex>
                      <v-flex class="form-group ma-3">
                         <label class="form-label"> 
                           <p id="abovetext">Country Name<span id="require">*</span></p> </label>
                         <v-select
                             class="input"
                                 label="select"
                                 solo
                                 dense
                                 outlined
                                 
                         ></v-select>
                     </v-flex>
                      <v-flex class="form-group ma-3">
                         <label class="form-label">
                            <p id="abovetext">Currency Name
                              <span id="require">*</span></p> </label>
                         <v-select
                             class="input"
                                 label="select"
                                 solo
                                 dense
                                 outlined
                                 
                         ></v-select>

                     </v-flex>
                     
                     <!--second row-->
                     
             <v-flex lg2 class="align mx-3">
                <label class="form-label">
                  <p id="abovetext">Rate Of Exchange
                    <span id="require">*</span></p>
                  
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                  disabled
                ></v-text-field>
              </v-flex>

              <v-flex lg2 class="mx-8" >
                
                <label class="form-label">
                  <p id="abovetext">Rate Of Exchange Date<span id="require">*</span></p>
                  
                </label>
                <v-text-field
                  class="input"
                  label="12/01/2021"
                  solo
                  dense
                  outlined
                  prepend-inner-icon="mdi-calendar"
                  disabled
                ></v-text-field>
              </v-flex>
              <v-flex lg2 class="form-group mx-3">
                <label class="form-label">
                  <p id="abovetext">ROE Updated Manually<span id="require">*</span></p>
                  
                </label>
                <v-text-field
                  class="input"
                  label="Preselected List Item"
                  solo
                  dense
                  outlined
                  disabled
                ></v-text-field>
              </v-flex>
            
          </v-layout> 
        </div>
      </div>
    
    </div>
    </div>
    <!--Amount Details-->
    <AmountDetails/>
         <!--Non-Payable Expenses-->
       
       <!-- ----------------------BUTTONS SECTION-------------------------------- -->
      <!-- --------------------------BUTTONS---------------------------------- -->
      <v-card class=" mt-4 mb-10" flat>
        <v-layout>
          <v-btn class="mr-4 red--text btnDanger"  outlined 
            ><v-icon class="icon">mdi-backspace-outline</v-icon
            ><v-divider vertical class="red mx-2"></v-divider>Reset</v-btn
          >

          <v-spacer></v-spacer>

          <v-btn class=" btnDanger red--text mx-2"  outlined 
            ><v-icon>mdi-backspace-outline</v-icon
            ><v-divider vertical class="red mx-2"></v-divider>Cancel</v-btn
          >

          <router-link to="/datagrid" style="text-decoration:none">
          <v-btn class="btnSuccess white--text" color="#23b1a9"

            ><v-icon class="icon">mdi-arrow-right-circle</v-icon

            ><v-divider vertical class="white mx-2"></v-divider> Submit</v-btn

          ></router-link>
        </v-layout>
      </v-card>


 </div>
      


</template>
<script>
import AmountDetails from './AmountDetails.vue'
import "../assets/css/main.css"

export default {
    data() {
        return{
            hide:false,
           
           
        }
    },
    components:{
      AmountDetails
    }
}
</script>
<style>
#add {
    margin:0px 570px;
}
.add-row-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}
.form-group{
  width:220px
}
.align{
  width:300px
}
</style>