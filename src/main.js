import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/index"

import "./assets/style/tailwind.css"
import "./assets/style/global.css"
import {projectAuth} from "./configs/firebase.js"

import {registerGlobalComponents} from "./utils/import.js";
let app;

projectAuth.onAuthStateChanged(() =>{
    if(!app){
        app = createApp(App)
        registerGlobalComponents(app);
        app.use(router);
        app.mount("#app");
    }
})
