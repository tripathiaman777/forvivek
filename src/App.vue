<template>
<main-body></main-body>
<!-- <entry-page></entry-page> -->

</template>

<script>
import MainBody from './components/MainBody.vue';
// import EntryPage from './components/signup/EntryPage.vue';
export default {
  name: 'App',
  components:{
    MainBody,
    // EntryPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px; 
}
</style>
