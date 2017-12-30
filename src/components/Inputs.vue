<template>
  <div class="inputs">
    <form class="bs-component">
      <div class="form-group">
        <input type="text" v-model="secondSide" v-bind:class="{ 'is-valid': secondSide.length > 0 ? true : '' , 'is-invalid': secondSide.length == 0 ? true : '' }" class="form-control">
        <div class="invalid-feedback">Shortest Side</div>
        <div class="valid-feedback">Shortest Side</div>
      </div>
      <div class="form-group">
        <input type="text" v-model="thirdSide" v-bind:class="{ 'is-valid': thirdSide.length > 0 ? true : '' , 'is-invalid': thirdSide.length == 0 ? true : '' }" class="form-control">
        <div class="invalid-feedback">Median Side</div>
        <div class="valid-feedback">Median Side</div>
      </div>
      <div class="form-group">
        <input type="text" v-model="firstSide" v-bind:class="{ 'is-valid': firstSide.length > 0 ? true : '' , 'is-invalid': firstSide.length == 0 ? true : '' }" class="form-control">
        <div class="invalid-feedback">Biggest Side</div>
        <div class="valid-feedback">Biggest Side</div>
      </div>
      <div v-if="!validFormState && validFormState !== null" v-bind:class="{ 'fade in' : validFormState && validFormState === null ? true : ''}" class="alert alert-dismissible alert-danger">All fields are <strong>required</strong></div>
      <button v-on:click="handleInputs" type="button" class="btn btn-outline-success btn-lg">Draw</button>
      <button v-on:click="resetInputs" type="button" class="btn btn-outline-danger btn-lg">Clear</button>
    </form>
  </div>
</template>
<script>
import { EventBus } from "../EventBus"; // used for communication between parent and child component

export default {
  data() {
    return {
      firstSide: "",
      secondSide: "",    // < --- form input variables
      thirdSide: "",
      validFormState: null  // form validation status
    };
  },
  methods: {
    handleInputs() {  // get form model and push to an array with parseInt
      let triangleSides = [
        parseInt(this.firstSide),
        parseInt(this.secondSide),
        parseInt(this.thirdSide)
      ];
      if (this.validForm(triangleSides)) { // validation
        EventBus.$emit("getSides", triangleSides);
      }
    },
    validForm(triangleSides) { // validation method
      if (
        triangleSides[0] > 0 &&
        triangleSides[1] > 0 &&
        triangleSides[2] > 0
      ) {
        this.validFormState = true;
        return true;
      } else {
        this.validFormState = false;
        return false;
      }
    },
    resetInputs() { // reset form data
      this.firstSide = "";
      this.secondSide = "";
      this.thirdSide = "";
    }
  }
};
</script>
<style>
.inputs {
  margin-top: 50px;
}
</style>
