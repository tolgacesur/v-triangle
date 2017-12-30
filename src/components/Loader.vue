<template>
  <div class="loader">
  <div class="loading">
      <img class="svg" src="../assets/svg/loading.svg" alt="triangle with equal sides" srcset="../assets/svg/loading.svg">
  </div>
  </div>
</template>
<script>
</script>
<style>
/* Absolute Center Spinner */
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: hidden;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ededed;
}

.svg {
  position: fixed;
  z-index: 999;
  overflow: hidden;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

</style>
