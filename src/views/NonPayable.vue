<template>
 <div  id="border" class="mt-2">
            <div id="tablehead" height="30" @click="show=!show">
                <div class="d-flex align-center mx-5">
                   <p class=" mt-1" id="tableheadtext">Non-Payable Expenses</p>
                 <v-spacer></v-spacer>
                 <v-icon id="tableicon" v-show="show" >mdi-plus-box-outline</v-icon>
                 <v-icon id="tableicon" v-show="!show">mdi-minus-box</v-icon>
                 </div>
            </div>
        
    <div v-show="!show">
                 <v-form>
            <v-layout wrap class="pt-4 form-group-container">
              <!-- ------------------------------ROW -1 ------------------------------ -->
              <v-flex lg2 class="form-group expense-input ma-2">
                  <v-card class="pa-5 xl6"  height="70">
               <input type="checkbox" style="margin-right:5px" ><span style="color:#152F38;font-size:12px">Non payable Expense</span>
                </v-card>
              </v-flex>
            </v-layout>
          </v-form>
          <!-- ------------------------------------NON payable Expense table--------------------- -->
           <v-card elevation="2" class="mx-3 mt-5"  flat>
           <v-data-table
           elevation="2" 
            id="tabl"
            disable-filtering
            disable-pagination
            disable-sort
           hide-default-footer
            :items="item"
            :headers="headers"
            >
            
           <template v-slot:[`item.invoice`]="{ item }">
 <v-text-field label="1000" outlined dense class="mt-2 input" style="align-text:center"></v-text-field>{{ item.text }}
</template>
<template v-slot:[`item.invoicedate`]="{ item }">
 <v-text-field label="1000" outlined dense class="mt-2 input" style="align-text:center"></v-text-field>{{ item.text }}
</template>
<template v-slot:[`item.invoicedetails`]="{ item }">
 <v-text-field placeholder="Enter..." outlined dense class="mt-2 input" style="align-text:center"></v-text-field>{{ item.text }}
</template>
<template v-slot:[`item.invoiceamount`]="{ item }">
 <v-text-field label="1000" outlined dense class="mt-2 input" style="align-text:center"></v-text-field>{{ item.text }}
</template>
<template v-slot:[`item.action`]="{ item }">
 <v-icon class="red--text">mdi-delete</v-icon>{{ item.text }}
</template>
                
            </v-data-table>
            </v-card>
          <div class="add-row-icon">
            <span><v-icon id="plus"> mdi-plus </v-icon></span>
            <span id="plus"> Add Row </span>
          </div>
        

        <!-- -------------------------total non payable amount---------------------------- -->
        <v-form>
          <v-layout wrap class="pt-4 form-group-container">
            <!-- ------------------------------ROW -1 ------------------------------ -->
            <v-flex lg2 class="form-group ma-2">
              <label class="form-label">
                <p id="abovetext">Total Non-Payable Amount</p>
              </label>
              <v-text-field class="input" label="Enter" solo dense outlined disabled>
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-form>
      </div>
</div>
     
    

</template>

<script>
export default {
    data() {
        return{
            show:false,
           
             headers: [
          {
            text: 'Serial Number',
            align: 'center',
            value: 'serialn',
            class:" white--text",
            width:100,
          },
          { text: 'Invoice Number', value: 'invoice',  class:" white--text", align: 'center',
            width:150, },
          { text: 'Invoice Date', value: 'invoicedate', class:" white--text", width:250, align: 'center', },
          { text: 'Invoice Details', value: 'invoicedetails', class:" white--text", width:350, align: 'center', },
          { text: 'Invoice Amount', value: 'invoiceamount', class:" white--text", width:150, align: 'center', },
           { text: 'Action', value: 'action', class:" white--text", width:150,  align: 'center',},
          ],
          item:[{
            serialn:'002434234',
          }]
        }
    }
}
</script>
<style>
.input{
border-radius:0px
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