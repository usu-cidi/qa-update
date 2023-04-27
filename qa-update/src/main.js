import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import LoginComponent from './components/Login.vue'
import BoxLoginComponent from './components/BoxLogin.vue'
import AddInfoComponent from './components/AddInfo.vue'
import BugReportComponent from './components/BugReport.vue'
import SubmittedComponent from './components/Submitted.vue'

import "./assets/style.css";

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: LoginComponent},
        { path: '/box-login', component: BoxLoginComponent},
        { path: '/add-info', component: AddInfoComponent},
        { path: '/bug-report', component: BugReportComponent},
        { path: '/submitted', component: SubmittedComponent},
    ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')

