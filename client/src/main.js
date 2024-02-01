import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import MaintainersView from "@/views/MaintainersView.vue";
import AddBoardView from "@/views/AddBoardView.vue";
import NewMaintainerView from "@/views/NewMaintainerView.vue";

import './assets/main.css'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: HomeView },
        { path: '/maintainers', component: MaintainersView },
        { path: '/maintainers/add', component: NewMaintainerView },
        { path: '/add', component: AddBoardView },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
