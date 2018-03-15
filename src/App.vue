<template>
  <div id="app">
    <my-header></my-header>
    <my-body></my-body>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
  // import Vue from 'vue'

  import Header from '@/components/Header.vue'
  import Body from '@/components/Body.vue'
  

  export default {
    components: {
      myHeader: Header,
      myBody: Body
    }
  }

</script>

<style lang="scss">
  html, body, #app {
    height: 100%;
  } 
</style>
