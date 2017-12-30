<template>
<div id="app">
  <transition name="fade"><loader v-show="loading"></loader></transition>
  <nav-bar></nav-bar>
  <div class="container">
    <div class="row">
      <div class="col-lg-2"><inputs></inputs></div>
      <div class="col-lg-10" v-if="!result"><description></description></div>
      <div class="col-lg-3 result"> <result v-show="result" v-on:showResult="showResult"></result></div>
      <div class="col-lg-7 result"> <latest v-show="result"></latest> </div>
    </div>
    <div class="row">
      <Footer></Footer>
    </div>
  </div>
</div>
</template>

<script>
import Inputs from "./components/Inputs.vue"
import Result from "./components/Result.vue"
import navBar from "./components/NavBar.vue"
import Loader from "./components/Loader.vue"
import Footer from "./components/Footer.vue"
import Latest from "./components/Latest.vue"
import Description from "./components/Description.vue"

export default {
  name: "app",
  components: { Inputs, Result, navBar, Loader,Footer, Latest, Description },
  data() {
    return {
      result: false, // result visibility status
      loading : true
    };
  },
  methods: {
    showResult() {
      // when inputs are okay, show result section
      this.result = true
    },
    Load(){
      this.loading = false
    }
  },
  mounted(){
    setTimeout(this.Load, 3000)
  }
};
</script>

<style lang="scss">
.row {
  margin-top: 70px;
}

.card {
  border: none !important;
  margin-top: 15px;
}

.result {
  margin-bottom: 15px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
