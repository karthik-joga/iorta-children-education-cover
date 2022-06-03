<template>
<div>
    <div class="mt-3">
        <div class="grey  d-flex   lighten-3" id="claimbar">
            <p class=" align-center mt-3 mx-5" id="claimnumber">Claim Number - 4340002739</p>
            <v-divider vertical class="my-2"></v-divider>
            <p class=" mt-3 mx-5" id="newclaim">FEATURE CLAIM</p>
            <v-spacer></v-spacer>
            <p class=" mt-3 mr-5" id="viewdetails">View Details</p>
        </div>
        <div class="mt-3">
           <router-link to="/" style="text-decoration:none">
            <v-btn  outlined class="pa-5"  elevation="0" id="notactive"> Claim Details</v-btn></router-link>
            <v-btn class=" pa-5 ml-1 text-subtitle-2" id="activebtn" >Assessment Sheet</v-btn>
            <v-divider class="mr-16"></v-divider>
        </div>
    </div>
    <div class="d-flex mt-5">
        <p id="startheads" >Child Education Cover Assessment Sheets</p>
        <v-spacer></v-spacer>
      <router-link to="/addassessment" style="text-decoration:none">  
      <v-btn  id="assessmentsheetbtn"><v-icon >mdi-plus-box-outline</v-icon>
            <v-divider vertical class="mx-3 grey lighten-5" ></v-divider>
             Add Assessment</v-btn> </router-link>
        </div>
        <div>
            <v-card elevation="2" class="mx-3 mt-5"  flat>
            <v-data-table 
            
            disable-filtering
            disable-pagination
            disable-sort
           hide-default-footer
            :items="item"
            :headers="headers">
           <template v-slot:[`item.action`]="{ item }">
  <v-icon small class="black--text">mdi-dots-vertical</v-icon>{{ item.text }}
</template>
                
            </v-data-table>
            </v-card>
        </div>
</div>
</template>

<script>
export default {
    data( ) {
        return { 
            item:[
                {Settlement:"Standard",Claim:"Cashless to the insured",Transaction:"Partial Payment"
                ,Disability:"0",Deductible:"11,600",Time:"11:00",Copay:"0",PerDay:"1500",Maxno:"6",Claimed:"24,000",Amount:"12,400"
                ,Net:"12,400",Total:"24,000",TotalNon:"11,600"},
                 {Action:":",Settlement:"Standard",Claim:"Cashless to the insured",Transaction:"Partial Payment"
                ,Disability:"0",Deductible:"11,600",Time:"11:00",Copay:"0",PerDay:"1500",Maxno:"6",Claimed:"24,000",Amount:"12,400"
                ,Net:"12,400",Total:"24,000",TotalNon:"11,600"}
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
          { text: 'Disability Amount', value: 'Disability', class:" white--text", width:150, },
           { text: 'Deductible Amount', value: 'Deductible', class:" white--text", width:150, },
          { text: 'Time Deductible (In Hours)', value: 'Time', class:" white--text", width:200, },
          { text: 'Copay%', value: 'Copay', class:" white--text", width:50,border:1 },
          { text: 'Per Day Maximum', value: 'PerDay' , class:" white--text", width:150,},
          { text: 'Max no. of days Payable', value: 'Maxno' , class:" white--text", width:200,},
          { text: 'Claimed Amount', value: 'Claimed', class:" white--text", width:150, },
          { text: 'Amount Payable', value: 'Amount', class:" white--text", width:150, },
          { text: 'Net Payable', value: 'Net', class:" white--text", width:150, },
          { text: 'Total Invoice Amount', value: 'Total', class:" white--text", width:150, },
          { text: 'Total Non Payable Amount', value: 'TotalNon', class:" white--text", width:200, },
          
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
