<template>
    <div>
<div id="border" class="mt-1">
            <div class="header" @click="hide = !hide">
          <span class="header-label-basic">Hospitalisation Details </span
          ><v-spacer></v-spacer>
          <v-icon id="tableicon" v-show="hide"
            >mdi-plus-box</v-icon
          >
          <v-icon id="tableicon" v-show="!hide"
            >mdi-minus-box</v-icon
          >
        </div>
                 <div v-show="!hide">
                      <v-form>
              <v-layout wrap class="pt-4 form-group-container">
                <v-flex class="form-group mx-3">
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

                <v-flex class="form-group mx-3">
                  <label class="form-label">
                     <p id="abovetext">PRN (Hospital)</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                    disabled
                  ></v-text-field>
                </v-flex>
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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

                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
                  <label class="form-label">
                     <p id="abovetext">Date of Admission</p> </label>
                  <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      placeholder="DD/MM/YYYY"
                      class="form-control rounded-0"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      solo
                      dense
                      outlined
                    >
                      <template v-slot:prepend-inner>
                        <v-icon class="iconstyle"> mdi-calendar </v-icon>
                      </template>
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
                </v-flex>

                <v-flex class="form-group mx-3">
                  <label class="form-label">
                     <p id="abovetext">Time of Admission</p> </label>
                  <v-select
                    class="input"
                    label="Enter"
                    solo
                    dense
                    outlined
                  ><template v-slot:prepend-inner>
                        <v-icon class="iconstyle"> mdi-clock </v-icon>
                      </template></v-select>
                </v-flex>
                <v-flex class="form-group mx-3">
                  <label class="form-label">
                    <p id="abovetext"> Date Of Discharge </p></label>
                  <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      placeholder="DD/MM/YYYY"
                      class="form-control rounded-0"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      solo
                      dense
                      outlined
                    >
                      <template v-slot:prepend-inner>
                        <v-icon class="iconstyle"> mdi-calendar </v-icon>
                      </template>
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
                </v-flex>
              </v-layout>
              <v-layout wrap class="pt-4 form-group-container">
                <v-flex class="form-group mx-3 ">
                  <label class="form-label">
                     <p id="abovetext">Time of Discharge</p> </label>
                  <v-select
                    class="input"
                    label="Enter"
                    solo
                    dense
                    outlined
                  ><template v-slot:prepend-inner>
                        <v-icon class="iconstyle"> mdi-clock </v-icon>
                      </template></v-select>
                </v-flex>

                <v-flex class="form-group mt-2 mx-3 pt-7">
                  <v-card hide-details class="my-auto" height="63%" style="border-radius:0 ; border:1px solid black">
                  <v-checkbox   color="black" outlined class="pa-0 ma-2 ml-3"
                     v-model="check" label="If PED"> </v-checkbox>
                    <!--  -->
                  </v-card>
                </v-flex>
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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
 <v-text-field label="chronic airway obstruction, not elsewhere classified" solo dense outlined
 class="mt-2" style="align-text:center ;"></v-text-field>{{ item.text }}
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
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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
            hide:false,
            check:true,
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