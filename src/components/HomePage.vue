<template>
  <div class="mainbox">
<div class="profilepic">
<img src="../utils/images/img2.jpeg" alt="" srcset="">

</div>

<component :is="this.property"></component>
</div>
  
</template>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Poppins&family=Roboto:wght@700&display=swap" rel="stylesheet">

<script>
import EmpTable from './EmpTable.vue';
import SalaryHistory from './SalaryHistory.vue';
import LeaveHistory from './LeaveHistory.vue';
export default{
  props:['property'],
  data(){
    return{
      showPage:this.property
    }
  },
  components:{EmpTable,SalaryHistory,LeaveHistory}
}

</script>

<style>
.mainbox{
  border: 2px solid black;
  width: 100%;
  margin-right: 20px;
  padding: 20px;

}

.profilepic{
  /* border: 2px solid black; */ 
  display: inline-block;
  
}

img{
  border-radius: 50%;
  height: 200px;
  width: 200px;
}


</style>
