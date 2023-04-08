<template>
    <div class="mainbody">

        <nav-bar @page="func"></nav-bar>
        <home-page :property="values"></home-page>
       
    
    </div>

</template>

<script>
import NavBar from './layout/NavBar.vue'
import  HomePage from './HomePage.vue'
export default{
  components: { NavBar,HomePage },
  data(){
    return{
        values:'emp-table'
    }
  },
  methods:{
    func(val){
        return this.values=val;
        // alert(this.values,)
    }
  }
}

</script>

<style>
*{
   padding: 0;
   margin: 0;

}
html, body {margin: 0; height: 100%; overflow-x: hidden}
.mainbody{
    padding: 0px;
    margin: 0;
    margin-left: 10px;
    box-sizing: border-box;
    list-style: none;
    width: 100%;
    height:100vh;
    display: flex;
    text-align: center;
}

</style>