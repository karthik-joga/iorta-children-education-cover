<template>

<div>
    <div>
        <div class="my-5 font-weight-bold" id="starthead">
            Child Education Cover
        </div>
        <!-- basic details -->
        <div  id="border" >
            <div id="tablehead" height="30" @click="show=!show">
                <div class="d-flex align-center mx-5">
                 <p class=" mt-1 font-weight-bold" id="tableheadtext">Basic Details</p>
                 <v-spacer></v-spacer>
                 <v-icon id="tableicon" v-show="show" >mdi-plus-box-outline</v-icon>
                 <v-icon id="tableicon" v-show="!show">mdi-minus-box</v-icon>
                 </div>
            </div>
                 <div class="ml-0 "  v-show="!show" color="#FFFFFF">
                    <v-layout wrap class="pt-4 form-group-container">
                        <v-flex class="form-group ma-3">
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

                <v-flex class="form-group ma-3">
                  <label class="form-label"> 
                    <p  id="abovetext">Place Of Death</p> </label>
                    
                  <v-text-field
                    class="input"
                    label="DD/MM/YYYY"
                    solo
                    prepend-inner-icon="mdi-calendar"
                    dense
                    outlined
                    
                  ></v-text-field>
                </v-flex>

                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p  id="abovetext">Time Of Death</p> </label>
                  <v-select
                    
                    label="Enter..."
                    solo
                    prepend-inner-icon="mdi-clock"
                      class="input"
                    dense
                    outlined
                  ></v-select>
                </v-flex>
                <v-flex class="form-group ma-3">
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
                <v-flex class="form-group ma-3">
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

                    
                <div >
                    <v-col cols="12" sm="2" md="2">
                       <p  id="abovetext">Is this an Accident Case?</p>
                       <v-select solo dense
                       label="Yes"></v-select>
                       </v-col>
                   </div>
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
 <v-text-field  class="input mt-2" label="chronic airway obstruction, not elsewhere classified" outlined dense  style="align-text:center"></v-text-field>{{ item.text }}
</template>
<template v-slot:[`item.DependantChild`]="{ item }">
 <v-text-field  class="input mt-2" label="chronic airway obstruction, not elsewhere classified" outlined dense  style="align-text:center"></v-text-field>{{ item.text }}
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
    export default {
        data() {
            return{
                show:false,
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