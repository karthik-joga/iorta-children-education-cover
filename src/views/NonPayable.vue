<template>
 <div  id="border" class="mt-1">
             <div class="header" @click="hide = !hide">
          <span id="tableheadtext">Non-Payable Expenses </span
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
            <v-layout wrap class="mx-3 pt-4">
              <!-- ------------------------------ROW -1 ------------------------------ -->
              <v-card class="npe-checkbox rounded-0" outlined elevation="1">
                <v-checkbox label="Non Payable Expense"> </v-checkbox>
              </v-card>
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
 <v-text-field label="1000" outlined solo dense class="mt-2 input" style="align-text:center"></v-text-field>{{ item.text }}
</template>
<template v-slot:[`item.invoicedate`]="{ item }">
 <v-text-field label="1000" outlined solo dense class="mt-2 input" style="align-text:center"></v-text-field>{{ item.text }}
</template>
<template v-slot:[`item.invoicedetails`]="{ item }">
 <v-text-field placeholder="Enter..." outlined solo dense class="mt-2 input" style="align-text:center"></v-text-field>{{ item.text }}
</template>
<template v-slot:[`item.invoiceamount`]="{ item }">
 <v-text-field label="1000" outlined dense solo class="mt-2 input" style="align-text:center"></v-text-field>{{ item.text }}
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
            hide:false,
           
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
.form-group{
  width:250px
}
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
.npe-checkbox {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  width: 220px;
  padding-left: 10px;
  border: 1px solid #c1c8cc;
}
</style>