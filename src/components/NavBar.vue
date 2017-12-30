<template>
<div class="navBar">
  <nav class="navbar navbar-expand-lg navbar-dark  bg-success">
    <a class="navbar-brand" href="">V-TRIANGLE</a>
  </nav>
</div>
</template>
<script>
export default {
    data (){
        return {}
    }
}
</script>
<style>

.navBar {
    overflow: hidden;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 998;
}

.navbar-brand {
  color: #222 !important;
}

</style>
