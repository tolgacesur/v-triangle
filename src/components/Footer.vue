<template>
  <div class="footer">
        <p>Tolga Cesur <img class="wp-icon" src="../assets/img/wp.png" alt="whatsapp">  05072293584</p>
        <p><a href="https://vuejs.org/">@Vue.js</a> <a href="https://getbootstrap.com/">@bootstrap</a> <a href="https://d3js.org/">@d3.js</a>  </p>
        <p>For <a style="color: #222;" href="https://www.edelkrone.com/tr/">Edelkrone</a> © 2017</p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    height: 15%;
    background-color: #ffffff;
    text-align: center;
}

.footer a, .footer a:link, .footer a:visited, .footer a:active, .footer a:hover {
	color: #CC0000;
}
.footer p {
    margin-bottom: 0rem;
}

.wp-icon {
    width: 16px;
    height: 16px;
}
</style>

