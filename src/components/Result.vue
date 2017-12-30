<template>
<div class="result">
    <div class="card text-white bg-success mb-3" style="min-height: 485px;">
  <div class="card-header">Result</div>
  <div class="card-body" v-show="this.information.type != 'INVALID'">
    <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    LENGTHS
    <span class="badge badge-danger badge-pill">{{this.sides[0]}} - {{this.sides[1]}} -{{this.sides[2]}}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    TYPE
    <span class="badge badge-danger badge-pill">{{this.information.type}}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    CIRCUMFERENCE
    <span class="badge badge-danger badge-pill">{{this.information.circumference}}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    AREA
    <span class="badge badge-danger badge-pill">{{this.information.area}}</span>
  </li>
</ul>
<ul style="margin-top:5px;" class="list-group">
<li class="list-group-item d-flex justify-content-between align-items-center">
  <main-triangle class="d3Triangle"></main-triangle>
  </li>
</ul>
    
  </div>
  <div class="card-body error" v-show="this.information.type == 'INVALID'">
    <p>Triangle does not exist.</p>
    <img class="svg2" src="../assets/svg/error.svg" alt="ERROR!" srcset="../assets/svg/error.svg">
  </div>
</div>
</div>
</template>
<script>
import { EventBus } from "../EventBus"; // used for communication between parent and child component
import MainTriangle from "./MainTriangle.vue";
import triangle from "../Utils/functions";

export default {
  data() {
    return {
      sides: [], //sides length datas of triangle from inputs
      information: {
        type: "",
        circumference: 0,
        area: 0
      }
    };
  },
  components: { MainTriangle },
  methods: {
    startDrawTriangle(sides) {
      if (sides.length > 0) { // if sides is not empty
        this.sides = sides;
        this.$emit("showResult"); // show Result section
        this.information = {
          sides : sides,
          type: triangle.check(sides), // check triangle type
          circumference: triangle.circumference(sides), // get circumference of triangle
          area: triangle.area(sides) // get area of triangle
        };

        if (this.information.type != 'INVALID') {
           EventBus.$emit("newTriangle",this.information); // triger d3 drawing
        }
      }
    }
  },
  created() {
    EventBus.$on("getSides", sides => {
      // run  when form submited
      this.startDrawTriangle(sides);
    });
  }
};
</script>
<style>

.error {
  text-align: center;
  background-color: #CC0000;
}

.badge-danger {
  background-color: #CC0000 !important;
}

</style>
