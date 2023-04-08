<template>
    <div class="container">
        <div class="card">
          <!-- <div class="header ">
            <h3 class="mx-auto">Menu IU <i class="fas fa-angle-down iconM"></i></h3>
          </div> -->
          <div class="body">
            <ul>
              <li ><button :class="{active: (value=='emp-table')}"  @click="demoFun('emp-table')">Profile</button> </li>
              <li > <button @click="demoFun('salary-history')">Salary History</button> </li>
              <li><button @click="demoFun('leave-history')"> Leave History</button></li>
              <li><button >Apply for Leave</button></li>
              <li> Forms </li>
              <li>Charts</li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>

export default{
    emits:['page'],
    data(){
        return{
            value:'profile',
            
        }
    },
    methods:{
        demoFun(val){
          this.$emit('page',val);
          // return alert(val);
        },
        
    }




}

</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto');
button {
    background: none;
    color: inherit;
    border: none;
}
.container{
 /* margin: 20px;
  width: 30%; */
  border: 2px solid black;
   width: 30%; 
  margin-right: 20px;
  padding: 20px;
}

.active {
    background: white;
    color: black !important;
}

.card{
  width: 300px;
  height: 90vh;
  background-color: #1E2B32;
  border-radius: 10px 10px;
}

.header{
  border-radius: 10px 10px 0px 0px;
  padding: 5px;
  background-color: #2A3942;
}

h3{
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  margin-left: 1rem;
}

.iconM{
  font-size: 18px;
  margin-left: 170px;
  color: #2f89fc;
}

.icon{
  margin-right: 8px;
}

.body li{
  transition: 1s all;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  padding: 25px;
   
  margin-top: 0px;
  color: #fff;
  list-style: none;
  display: block;
  border-top-right-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
}

li:hover{
  transition: 1s all;
  color: #2f89fc;
  background-color: rgba(42, 56, 65, 0.82);
  border-top-right-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
  cursor: pointer;
}

.body > li{
  float: left;
}

.body li ul{
  background: #1E2B32;
  margin-left: 280px;
  margin-top: -38px;
  display: none;
  position: absolute;
  border-top-right-radius: 15px 15px;
  border-bottom-right-radius: 15px 15px;
  padding-left: 0;
}
ul{
    padding-left:0;
}

.body li:hover > ul{
  display: block;
  cursor: pointer;
}

</style>