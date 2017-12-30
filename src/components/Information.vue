<template>
<div class="information">
    <table class="table table-hover">
  <thead>
      <tr class="table-active">
        <td scope="row">Lengths</td>
      <td scope="row">Type</td>
      <td scope="row">Circumference</td>
      <td scope="row">Area</td>    
      </tr>
  </thead>
  <tbody>
      <th scope="col">{{sides[1]}}-{{sides[2]}}-{{sides[0]}}</th>
      <th scope="col">{{info.type}}</th>
      <th scope="col">{{info.circumference}}</th>
      <th scope="col">{{info.area.toFixed(2)}}</th>
  </tbody>
</table> 
</div>

</template>
<script>
export default {
    props:['sides','info']
}

</script>
<style>
</style>