<template>

<div>
    <div>
        <div class="my-5 font-weight-bold" id="starthead">
            Child Education Cover
        </div>
        <!-- basic details -->
        <div  id="border" >
            <div class="header" @click="hide = !hide">
          <span >Basic Details </span
          ><v-spacer></v-spacer>
          <v-icon id="tableicon" v-if="hide"
            >mdi-plus-box</v-icon
          >
          <v-icon id="tableicon" v-show="!hide"
            >mdi-minus-box</v-icon
          >
        </div>
                 <div class="ml-0 "  v-show="!hide" color="#FFFFFF">

                    <v-layout wrap class="pt-4 form-group-container">
                        <v-flex class="form-group mx-3 ">
                         <label class="form-label"> 
                           <p  id="abovetext">Incident Details
                             <span id="require">*</span></p> </label>
                        
                        <v-text-field
                             class="input"
                                 label="Enter..."
                                 solo
                                 dense
                                 outlined
                                 counter="50"
                         ></v-text-field>
                     </v-flex>

                <v-flex class="form-group mx-3">
                  <label class="form-label"
                  > <p  id="abovetext">Place Of Death</p> </label>
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
                     <p  id="abovetext">Time Of Death</p> </label>
                  <v-select
                    
                    label="Enter..."
                    solo
                    class="input"
                    dense
                    outlined
                  >
                 <template v-slot:prepend-inner>
                        <v-icon class="iconstyle"> mdi-clock </v-icon>
                      </template></v-select>
                </v-flex>
                <v-flex class="form-group mx-3">
                  <label class="form-label">
                     <p  id="abovetext">Name Of The Claimant
                       <span id="require">*</span></p> </label>
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
                    <p  id="abovetext"> Hospitalisation Required </p></label>
                  <v-select
                    class="input"
                    label="select"
                    solo
                    dense
                    outlined
                  ></v-select>
                </v-flex>
                </v-layout>

                    
                <v-card width="235" flat class="ml-3 " >
                    
                       <p  id="abovetext">Is this an Accident Case?</p>
                       <v-select solo dense outlined class="input"
                       label="Yes"></v-select>
                   </v-card>
            <!--Add Dependent Details-->
                <div >
                  <div class="d-flex">
                       <p class="font-weight-bold ml-5" id="subheading">Add Dependent Details</p>
                   <p class="font-italic" id="subheading">(At Least One Row Is Mandatory)</p>
                   </div>
                   <v-card elevation="2" class="mx-3 mt-5"  flat>
                   <v-data-table
                     disable-filtering
            disable-pagination
            disable-sort
           hide-default-footer
            :items="item"
            :headers="headers">
                    <template v-slot:[`item.DependantName`]="{ item }">
 <v-text-field  class="input mt-2" label="chronic airway obstruction, not elsewhere classified" outlined solo dense  style="align-text:center"></v-text-field>{{ item.text }}
</template>
<template v-slot:[`item.DependantChild`]="{ item }">
 <v-text-field  class="input mt-2" label="chronic airway obstruction, not elsewhere classified" outlined dense  solo style="align-text:center"></v-text-field>{{ item.text }}
</template>
<template v-slot:[`item.action`]="{ item }">
 <v-icon class="red--text">mdi-delete</v-icon>{{ item.text }}
</template>
                   </v-data-table>
                   </v-card>
                   <div class="mt-5 mb-5" id="add" style="color:#23B1A9">
                   <v-icon id="plus">mdi-plus</v-icon> Add Dependant
                   </div>
                   </div>
                </div>
            </div>  <!--     -->
            <!-- form field -->
        
        <!-- //end of basic -->
      </div> 
</div> <!--1-->

</template>

<script>
import "../assets/css/main.css"
    export default {
        data() {
            return{
                hide:false,
                  headers: [
          {
            text: 'Sr No.',
            
            value: 'SrNo',
            class:" white--text",
            width:100,
          },
          { text: 'Dependant Child Name', value: 'DependantName',  class:" white--text", 
            width:500, },
          { text: 'Dependant Child Age', value: 'DependantChild', class:" white--text", width:500 },
           { text: 'Action', value: 'action', class:" white--text", width:100,},
          ],
          item:[{
            SrNo:'1',
          }]
                
            }
        },
       
    }
</script>

<style >
#add {
    margin:0px 555px;
}
.form-group{
    width:220px;
    background-color:#FFFFFF;
    border-color:#C1C8CC;
    
}
.input{
border-radius:0px
}
.hidden-sm-and-down .v-icon{
  color: black ;
  background-color: #C1C8CC;
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