<template>
    <div class="mt-1">
         <div  id="border" >
            <div class="header" @click="hide = !hide">
          <span >Accident Details </span
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
                <!-- ------------------------------ROW -1 ------------------------------ -->
                <v-flex class="form-group mx-3">
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

                <v-flex class="form-group mx-3">
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


                <v-flex class="form-group mx-3">
                  <label class="form-label">
                    <p id="abovetext">FIR Registered<span id="require">*</span></p>
                  </label>
                  <v-card  dense flat style="border-radius:0;">
                  <v-radio-group row v-model="check" class="ma-0 pa-0" style="border:1px solid grey;height:40px;">
                  <v-radio label="Yes" class="ma-2" value="yes" name="check" ></v-radio>
                    <v-radio label="No" value="no" class="ma-2" name="check"></v-radio>
                  </v-radio-group>
                  </v-card>
                </v-flex>


                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
                  <label class="form-label"> 
                    <p id="abovetext">FIR Date<span id="require">*</span></p> </label>
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
                     <p id="abovetext">Police Station Name<span id="require">*</span></p> </label>
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
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
                  <label class="form-label"> <p id="abovetext">Pincode</p> </label>
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
                     <p id="abovetext">City</p> </label>
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
                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
                  <label class="form-label">
                    <p id="abovetext">Phone</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  
                  ><template v-slot:prepend-inner>
                        <v-icon class="iconstyle"> mdi-phone </v-icon>
                      </template></v-text-field>
                </v-flex>
              </v-layout>

              <!-- ----------------------------ROW -4----------------------------------- -->
              <v-layout wrap class="pt-4 form-group-container">
                <v-flex class="form-group mx-3">
                  <label class="form-label"> 
                    <p id="abovetext">Email ID</p> </label>
                  <v-text-field
                    class="input"
                    label="Enter..."
                    solo
                    dense
                    outlined
                  ><template v-slot:prepend-inner>
                        <v-icon class="iconstyle"> mdi-email </v-icon>
                      </template></v-text-field>
                </v-flex>

                <v-flex class="form-group mx-3">
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
                <v-flex class="form-group mx-3">
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
                <v-flex  class=" mx-3" style="width:470px">
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
      hide:false,
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
