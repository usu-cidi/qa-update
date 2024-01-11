import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import BoxLoginComponent from './components/BoxLoginPage.vue'
import AddInfoComponent from './components/AddInfoPage.vue'
import LoadingBoxComponent from './components/LoadingBoxPage.vue'
import InProgressComponent from "./components/InProgressPage.vue";
import AllyLinkComponent from "./components/AllyPage.vue";
import NotFoundComponent from "./components/NotFoundPage.vue";
import AddNewTermComponent from "@/components/AddNewTermPage.vue";

import "./assets/style.css";

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: AllyLinkComponent},
        { path: '/box-login', component: BoxLoginComponent},
        { path: '/add-info', component: AddInfoComponent},
        { path: '/oauth/callback', component: LoadingBoxComponent},
        { path: '/updating', component: InProgressComponent},
        { path: '/add-new-term', component: AddNewTermComponent},
        { path: '/:pathMatch(.*)*', component: NotFoundComponent},
    ]
});

const app = createApp(App)

app.use(router)

app.mount('#app')

