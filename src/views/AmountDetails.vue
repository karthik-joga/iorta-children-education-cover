<template>
<div  id="border" class="mt-1">
             
            <div class="header" @click="hide = !hide">
          <span class="header-label-basic">Amount Details </span
          ><v-spacer></v-spacer>
          <v-icon id="tableicon" v-show="hide"
            >mdi-plus-box</v-icon
          >
          <v-icon id="tableicon" v-show="!hide"
            >mdi-minus-box</v-icon
          >
        </div>
            <div v-show="!hide">
                 <v-card elevation="2" class="mx-3 mt-5"  flat>
                   <v-data-table
                     disable-filtering
            disable-pagination
            disable-sort
           hide-default-footer
            :items="item"
            :headers="headers">
                    <template v-slot:[`item.Fees`]="{ item }">
            <v-text-field label="Enter" class="input mt-2" outlined dense solo style="align-text:center"></v-text-field>{{ item.text }}
            </template>
            <template v-slot:[`item.Scholarship`]="{ item }">
            <v-text-field label="Enter"  class="input mt-2" outlined dense solo style="align-text:center"></v-text-field>{{ item.text }}
            </template>
            <template v-slot:[`item.action`]="{ item }">
             <v-icon class="red--text">mdi-delete</v-icon>{{ item.text }}
              </template>
                   </v-data-table>
                   </v-card>
                   <div class=" mt-5" id="add">
                   <v-icon id="plus">mdi-plus</v-icon><span id="plus"> Add Row</span>
                   </div>
                   <v-form>
            <v-layout wrap class="pt-4 form-group-container">
              <!-- ------------------------------ROW -1 ------------------------------ -->
              <v-flex class="form-group mx-2">
                <label class="form-label"> 
                  <p id="abovetext">Copay%</p> </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>

              <v-flex class="form-group mx-2">
                <label class="form-label"> 
                  <p id="abovetext">Deductible Amount</p> </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <p id="abovetext">Claimed Amount</p>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <p id="abovetext">Amount Payable</p>
                </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                  
                ></v-text-field>
              </v-flex>
              <v-flex class="form-group mx-2">
                <label class="form-label">
                  <p id="abovetext">Amount Payable</p> </label>
                <v-text-field
                  class="input"
                  label="Enter..."
                  solo
                  dense
                  outlined
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
            </div>
            <NonPayable/>
        </div>
      
</template>

<script>
import "../assets/css/main.css"
import NonPayable from "./NonPayable.vue"

export default {
  components:{
    NonPayable
  },
  data() {
    return{
       hide:false,
        headers: [
          {
            text: 'Serial Number.',
            
            value: 'SrNo',
            class:" white--text",
            width:150,
          },
          { text: 'Tuition Fees', value: 'Fees',  class:" white--text", 
            width:500, },
          { text: 'Scholarship Amount', value: 'Scholarship', class:" white--text", width:500 },
           { text: 'Action', value: 'action', class:" white--text", width:100,},
          ],
          item:[{
            SrNo:'1',
          }]
    }
  }
}
</script>
<style>
.form-group{
  width:220px
}
.input{
border-radius:0px
}
</style>