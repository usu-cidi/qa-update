import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import BoxLoginComponent from './components/BoxLogin.vue'
import AddInfoComponent from './components/AddInfo.vue'
//import BugReportComponent from './components/BugReport.vue'
//import SubmittedComponent from './components/Submitted.vue'
import LoadingBoxComponent from './components/LoadingBox.vue'
import InProgressComponent from "./components/InProgress.vue";
import AllyLinkComponent from "./components/AllyLink.vue";
import NotFoundComponent from "./components/NotFound.vue";
import AddNewTermComponent from "@/components/AddNewTerm.vue";

import "./assets/style.css";

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: AllyLinkComponent},
        { path: '/box-login', component: BoxLoginComponent},
        { path: '/add-info', component: AddInfoComponent},
//        { path: '/bug-report', component: BugReportComponent},
//        { path: '/submitted', component: SubmittedComponent},
        { path: '/oauth/callback', component: LoadingBoxComponent},
        { path: '/updating', component: InProgressComponent},
        { path: '/add-new-term', component: AddNewTermComponent},
        { path: '/:pathMatch(.*)*', component: NotFoundComponent},
    ]
});

const app = createApp(App)

app.use(router)

app.mount('#app')

