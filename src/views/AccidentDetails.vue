<template>
    <div class="mt-3">
         <div  id="border" >
            <div id="tablehead" height="30" @click="show=!show">
                <div class="d-flex align-center mx-5">
                   <p id="tableheadtext">Accident Details</p>
                 <v-spacer></v-spacer>
                 <v-icon id="tableicon" v-show="show" >mdi-plus-box-outline</v-icon>
                 <v-icon id="tableicon" v-show="!show">mdi-minus-box</v-icon></div>
            </div>
            
            <div v-show="!show">
                 <v-form>
              <v-layout wrap class="pt-4 form-group-container">
                <!-- ------------------------------ROW -1 ------------------------------ -->
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Nature Of Accident<span id="require">*</span></p> </label>
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
                     <p id="abovetext">Others<span id="require">*</span></p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>


                <v-flex class=" ma-3" style="width:220px">
                  <label class="form-label">
                    <p id="abovetext">FIR Registered<span id="require">*</span></p>
                  </label>
                  <v-card  dense flat >
                  <v-radio-group row v-model="check" style="border:1px solid grey;height:40px;padding-top:10px">
                    <v-radio label="Yes"  value="yes" name="check" ></v-radio>
                    <v-radio label="No"  value="no" name="check"></v-radio>
                  </v-radio-group>
                  </v-card>
                </v-flex>


                <v-flex class="form-group ma-3">
                  <label class="form-label">
                    <p id="abovetext">Reason For Not Intimating Police</p>
                  </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                    :counter="100"
                  ></v-text-field>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label">
                    <p id="abovetext">FIR/GD Number<span id="require">*</span></p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <!-- -----------------------------ROW -2 -------------------------- -->
              <v-layout wrap class="pt-4 form-group-container">
                <v-flex class="form-group ma-3">
                  <label class="form-label"> 
                    <p id="abovetext">FIR Date<span id="require">*</span></p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                    prepend-inner-icon="mdi-calendar"
                  ></v-text-field>
                </v-flex>

                <v-flex class="form-group ma-3">
                  <label class="form-label">
                     <p id="abovetext">Police Station Name<span id="require">*</span></p> </label>
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
                    <p id="abovetext">Police Station Address Line 1</p>
                  </label>
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
                    <p id="abovetext">Police Station Address Line 2</p>
                  </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex class="form-group ma-3">
                  <label class="form-label"
                    ><p id="abovetext">Police Station Address Line 3</p>
                  </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <!-- ------------------------------ROW-3-------------------------- -->
              <v-layout wrap class="pt-4 form-group-container">
                <v-flex class="form-group ma-3">
                  <label class="form-label"> <p id="abovetext">Pincode</p> </label>
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
                     <p id="abovetext">City</p> </label>
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
                    <p id="abovetext">District</p>
                  </label>
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
                    <p id="abovetext">State</p>
                  </label>
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
                    <p id="abovetext">Phone</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                    prepend-inner-icon="mdi-phone"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <!-- ----------------------------ROW -4----------------------------------- -->
              <v-layout wrap class="pt-4 form-group-container">
                <v-flex class="form-group ma-3">
                  <label class="form-label"> 
                    <p id="abovetext">Email ID</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                    prepend-inner-icon="mdi-email"
                  ></v-text-field>
                </v-flex>

                <v-flex class="form-group ma-3">
                  <label class="form-label"> 
                    <p id="abovetext">MLC <span id="require">*</span> </p> </label>
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
                    <p id="abovetext">MLC Number<span id="require">*</span></p>
                  </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex  class=" ma-3" style="width:470px">
                  <label class="form-label">
                    <p id="abovetext">Accident Description<span id="require">*</span></p>
                  </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                    :counter="100"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
            </div>
            </div>
    </div>
</template>
<script>
import "../assets/css/main.css"
export default {
  data() {
    return{
      show:false,
      check:"yes"
    }
  }
}
</script>

<style>
.form-group{
  width:220px
}
</style>
