// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Emptable from '../src/components/profile/EmpTable.vue';
import SalaryHistory from '../src/components/salary/SalaryHistory.vue';
import LeaveHistory from '../src/components/leaves/LeaveHistory.vue'
import EmpDemoTable from '../src/components/profile/EmpDemotable.vue';
// import LogIn from '../src/components/signup/LogIn.vue';
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/profile',component:Emptable },
        {path:'/leave',component:LeaveHistory },
        {path:'/demo',component:EmpDemoTable },
        {path:'/salary',component:SalaryHistory},
    ]
})

const app=createApp(App)
app.use(router);
app.mount('#app')
