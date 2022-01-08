<script setup lang="ts">
import Header from "./components/Header.vue";

</script>

<template>
  <div class="global-min-width">
    <Header />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html,body{
  margin:0;
  padding:0;
  background-color: #F7F7F7;
}
.global-min-width{
  min-width: 1400px;
}
</style>
