<template>
    <div>
<div id="border" class="mt-2">
            <div id="tablehead" height="30" @click="show=!show">
                <div class="d-flex align-center mx-5">
                   <p id="tableheadtext">Hospitalisation Details</p>
                 <v-spacer></v-spacer>
                 <v-icon id="tableicon" v-show="show" >mdi-plus-box-outline</v-icon>
                 <v-icon id="tableicon" v-show="!show">mdi-minus-box</v-icon>
                 
                 </div>
                 </div>
                 <div v-show="!show">
                      <v-form>
              <v-layout wrap class="pt-4 form-group-container">
                <v-flex class="form-group ma-3">
                  <label class="form-label"> 
                    <p id="abovetext">Hospital Name</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>

                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">PRN (Hospital)</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Hospital Alias Name</p> </label>
                  <v-select
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-select>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Rohini Code</p> </label>
                  <v-select
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-select>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                    <p id="abovetext"> Hospital Status </p></label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap class="pt-4 form-group-container">
                <v-flex class="form-group ma-3">
                  <label class="form-label"> 
                    <p id="abovetext">Hospital Flag</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>

                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Hospital Type</p> </label>
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
                     <p id="abovetext">Date of Admission</p> </label>
                  <v-text-field
                    class="input"
                    label="DD/MM/YYYY"
                    prepend-inner-icon="mdi-calendar"
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Time of Admission</p> </label>
                  <v-select
                    class="input"
                    label="Enter"
                    prepend-inner-icon="mdi-clock"
                    solo
                    dense
                    outlined
                  ></v-select>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                    <p id="abovetext"> Date Of Discharge </p></label>
                  <v-text-field
                    class="input"
                    label="DD/MM/YYYY"
                    prepend-inner-icon="mdi-calendar"
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout wrap class="pt-4 form-group-container">
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Time of Discharge</p> </label>
                  <v-select
                    class="input"
                    label="Enter"
                    prepend-inner-icon="mdi-clock"
                    solo
                    dense
                    outlined
                  ></v-select>
                </v-flex>

                <v-flex class="form-group ma-2 px-10 pt-2">
                  <!-- <label class="form-label"> <b>PRN (Hospital)</b> </label> -->
                  <v-card width="150"><input type="checkbox"  class="ma-6" color="black"
                   checked/>if PED
                        
                  
                    
                  </v-card>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Icd Code</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter"
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Short Description</p> </label>
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
                    <p id="abovetext">Long Description </p></label>
                  <v-select
                    class="input"
                    label="select"
                    solo
                    dense
                    outlined
                  ></v-select>
                </v-flex>
              </v-layout>
                </v-form>
                <div>
                <p id="subsubheading" class="ml-5">Diagnosis</p>
                <v-card elevation="2" class="mx-3 mt-5"  flat>
                   <v-data-table
                     disable-filtering
            disable-pagination
            disable-sort
           hide-default-footer
            :items="item"
            :headers="headers">
                    <template v-slot:[`item.Diagnosis`]="{ item }">
 <v-text-field label="chronic airway obstruction, not elsewhere classified" outlined dense class="mt-2" style="align-text:center"></v-text-field>{{ item.text }}
</template>

<template v-slot:[`item.action`]="{ item }">
 <v-icon class="red--text">mdi-delete</v-icon>{{ item.text }}
</template>
                   </v-data-table>
                   </v-card>
                   <div class=" teal--text mt-5 mb-5" id="add">
                   <v-icon id="plus">mdi-plus</v-icon> Add Diagnosis
                   </div>
            </div>
            <div>
                <p id="subsubheading" class="ml-5">Procedure Codes</p>
                <v-layout wrap class="pt-3 form-group-container">
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Procedure Code Level 1 & Text</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Procedure Code Level 2 & Text</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Procedure Code Level 3 & Text</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
                </v-layout>
                 <v-layout wrap class="pt-4 form-group-container">
                <v-flex class="form-group ma-3">
                  <label class="form-label"> 
                    <p id="abovetext">Medical History <span class="red--text">*</span> </p></label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex></v-layout>
            </div>
             </div>
            
        </div><!----end border-->
        <AccidentDetails/>
    </div>
</template>

<script>
import "../assets/css/main.css"
import AccidentDetails from "./AccidentDetails.vue"
    export default {
      components:{
        AccidentDetails
      },
        data () {
          return {
            show:false,
             headers: [
          {
            text: 'Sr No.',
            
            value: 'SrNo',
            class:" white--text",
            width:100,
          },
          { text: 'Diagnosis', value: 'Diagnosis',  class:" white--text",
            width:500, },
         
           { text: 'Action', value: 'action', class:" white--text", width:100  },
          ],
          item:[{
            SrNo:'1',
          }]
          }
        }
    }
</script>

<style >
#add {
    margin:0px 555px;
}
.form-group{
  width:220px
}
.hidden-sm-and-down .v-icon{
  color: grey ;
  background-color: grey;
  font-size:30px;
  padding: 0;
}
.v-data-table-header tr{
  background-color:#23B1A9;
 
}
.v-data-table-header tr th{
 border:1px solid #C1C8CC;
 font-size:14px;
 font-weight:bold
}
/* .kar{
  border:1px solid black
} */
.v-data-table__wrapper table tbody tr td{
   border-left:1px solid #C1C8CC;
   height:20px
}
</style>