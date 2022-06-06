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
        <div class="mt-3 ">
           <router-link to="/" style="text-decoration:none">
            <v-btn  outlined class="pa-5"  elevation="0" id="notactive"> Claim Details</v-btn></router-link>
            <v-btn class=" pa-5 ml-1 text-subtitle-2" id="activebtn" >Assessment Sheet</v-btn>
            <v-divider class="ml-16"></v-divider>
        </div>
    </div>
    <div class="d-flex mt-1 ">
        <p id="startheads" class="mt-2">Child Education Cover Assessment Sheets</p>
        <v-spacer></v-spacer>
      <router-link to="/addassessment" style="text-decoration:none">  
      <v-btn  id="assessmentsheetbtn"><v-icon >mdi-plus-box-outline</v-icon>
            <v-divider vertical class="mx-3 grey lighten-5" ></v-divider>
             Add Assessment</v-btn> </router-link>
        </div>
        <div>
            <v-card elevation="2" class="mx-1 mt-1"  flat>
            <v-data-table 
            id="datatable"
            disable-filtering
            disable-pagination
            disable-sort
           hide-default-footer
            :items="item"
            :headers="headers">
          
            <template v-slot:[`item.action`]="{ }">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-icon flat slot="activator" v-bind="attrs"
          v-on="on" left>mdi-dots-vertical</v-icon>
        </template>
        <v-list   v-for="link in links" :key="link.text" style="border:1px solid #C1C8CC;width:130px;min-height: 35px;">
          <v-list-item style="min-height: 20px;padding: 0" >
          <template v-if="link.text === 'Modify'">
            <v-icon style="margin:0 10px">mdi-{{link.icon}}</v-icon>
            <v-list-item-title style="color:#23B1A9">{{link.text}}</v-list-item-title>
            </template>
            <template v-else>
               <v-icon style="margin:0 10px">mdi-{{link.icon}}</v-icon>
            <v-list-item-title>{{link.text}}</v-list-item-title>
                        </template>
          </v-list-item>
        
        </v-list>
      </v-menu>
    </template> 
            </v-data-table>
            </v-card>
            
        </div><!--mdi-eye  mdi-pencil-->
</div>
</template>

<script>
export default {
    data( ) {
        return { 
          
         
            item:[
                {Settlement:"Standard",Claim:"Cashless to the insured",Transaction:"Partial Payment"
                ,Disability:"0",Deductible:"11,600",Time:"11:00",Copay:"0",PerDay:"1500",Maxno:"6",Claimed:"24,000",Amount:"12,400"
                ,Net:"12,400",Total:"24,000",TotalNon:"11,600",key:1},

                 {Settlement:"Standard",Claim:"Cashless to the insured",Transaction:"Partial Payment"
                ,Disability:"0",Deductible:"11,600",Time:"11:00",Copay:"0",PerDay:"1500",Maxno:"6",Claimed:"24,000",Amount:"12,400"
                ,Net:"12,400",Total:"24,000",TotalNon:"11,600",key:"2"}
                
            ],
             headers: [
          {
            text: 'Action',
            align: 'start',
            value: 'action',
            class:" white--text",
            
            id:"col",
            width:50,
          },
          { text: 'Settlement Type', value: 'Settlement',  class:" white--text",
            width:150, },
          { text: 'Claim Payment Type', value: 'Claim', class:" white--text", width:200, },
          { text: 'Transaction Type', value: 'Transaction', class:" white--text", width:150, },
          { text: 'Disability Amount', value: 'Disability', class:" white--text", width:140, },
           { text: 'Deductible Amount', value: 'Deductible', class:" white--text", width:150, },
          { text: 'Time Deductible (In Hours)', value: 'Time', class:" white--text", width:180, },
          { text: 'Copay%', value: 'Copay', class:" white--text", width:50,border:1 },
          { text: 'Per Day Maximum', value: 'PerDay' , class:" white--text", width:140,},
          { text: 'Max no. of days Payable', value: 'Maxno' , class:" white--text", width:200,},
          { text: 'Claimed Amount', value: 'Claimed', class:" white--text", width:150, },
          { text: 'Amount Payable', value: 'Amount', class:" white--text", width:150, },
          { text: 'Net Payable', value: 'Net', class:" white--text", width:150, },
          { text: 'Total Invoice Amount', value: 'Total', class:" white--text", width:150, },
          { text: 'Total Non Payable Amount', value: 'TotalNon', class:" white--text", width:200, },
          
        ],
        links:[
        {icon:'eye', text:'View'},
        {icon:'pencil', text:'Modify',}
        ],
        }
    }
   
}
</script>

<style>

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
