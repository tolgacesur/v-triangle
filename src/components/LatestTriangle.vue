<template>
<div class="latest-triangle" v-if="this.lastest.length > 0">
  <ul class="list-group" v-for="(last,index) in lastest">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <svg :id=" 'svghandle' + index" width="100" height="100"></svg>
      <info :sides="last.sides" :info="last.info"></info>
    </li>
  </ul>
</div>
</template>
<script>
import { EventBus } from "../EventBus";
import draw from "../Utils/drawTriangle";
import Info from "./Information.vue";
export default {
  data() {
    return {
        lastest : []
    };
  },
  components: {Info},
  methods: {
    latestTriangle(triangles) {

      this.lastest.unshift(triangles.pop())

      if(this.lastest.length > 3 ){
        this.lastest = this.lastest.slice(0,3)
      }

      for (let index = 0; index < this.lastest.length; index++) {
        console.log(this.lastest[index])
        draw.newTriangle(
          this.lastest[index].points,
          this.lastest[index].color,
          `#svghandle${index}`
        );
      }
    }
  },
  created() {
    EventBus.$on("latestTriangle", triangles => {
      this.latestTriangle(triangles);
    });
  }
};
</script>
<style>
.information {
    text-align: center;
    overflow-x:auto;
        margin-left: 14px;
}

</style>
