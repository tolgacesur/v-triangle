<template>
  <div class="triangle">
      <svg id="svghandle" width="200" height="200"></svg>
  </div>
</template>

<script>


import { EventBus } from "../EventBus" // used for communication between parent and child component
import triangle from "../Utils/functions" // functions file about triangle property
import draw from "../Utils/drawTriangle"

export default {
  data(){
    return {
      triangles : [],
      triangle: {
        sides : [0,0,0],
        points : [0,0,0,0,0,0],
        color: '',
        info: {
          type : '',
          area: 0,
          circumference : 0
        }
      }
    }
  },
  methods: {
    newTriangle(info) {
      // start drawing triangle
      let points = triangle.getPoints(info.sides); // get triangle cartesian coordinate dot
      let color = Math.floor(Math.random() * 16777215).toString(16); // generate random color
      if (points.cx > 0 && color) {

        draw.newTriangle(points,color,"#svghandle")

          this.triangle = {
              sides: info.sides,
              points: points,
              color: color,
              info: info
          }

          this.triangles.push(this.triangle); // push old triangle
          EventBus.$emit("latestTriangle", this.triangles) // Emit the triangles to latest component
      }
    }
  },
  created() {
    EventBus.$on("newTriangle", (info) => {
      // start when result is wanted
      this.newTriangle(info)
    });
  }
};
</script>

<style>
.triangle {
  width: 150px;
  height: 150px;
  padding: 10px;
}

.d3triangle {

}
</style>