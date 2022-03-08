import {createRouter, createWebHistory} from 'vue-router';

import {projectAuth} from '../configs/firebase.js';

const requireAuth = (to, from,next) =>{
    const user = projectAuth.currentUser;
    if(!user) next({name: 'Login', params: {}})

    else next();

    
}



const routes = [
    {
        path: '/',
        name:"Home",
        meta:{
            layout:"default",
            text:"Home",
            leading: true,
            isShowBottom:true,
        },
        component: () => import(/* webpackChunkName: "home" */ "../views/index.vue"),
    },
    {
        path: '/register',
        name:"Register",
        meta:{
            layout:"auth"
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/register.vue"),
    },
    {
        path: '/login',
        name:"Login",
        meta:{
            layout:"auth"
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/login.vue"),
    },
    {
        path: '/profile',
        name:"Profile",
        meta:{
            text: "Profile",
            leading: false,
            isShowBottom: true,
        },
        component: () => import(/* webpackChunkName: "profile" */ "../views/profile.vue"),
        beforeEnter: requireAuth
    },
    {
        path: '/logout',
        name:"Logout",
        component: () => import(/* webpackChunkName: "logout" */ "../views/logout.vue"),
    },
    {
        path: '/report',
        name:"Report",
        meta:{
            text: "Report",
            leading: false,
            isShowBottom:true,
        },
        component: () => import(/* webpackChunkName: "report" */ "../views/report.vue"),
        beforeEnter: requireAuth
    },
    {
        path: '/bugget',
        name:"Bugget",
        meta:{
            text: "Bugget",
            leading: false,
            isShowBottom:true,
        },
        component: () => import(/* webpackChunkName: "bugget" */ "../views/bugget.vue"),
        beforeEnter: requireAuth
    },
    {
        path: '/newtransaction',
        name:"newTransaction",
        meta:{
            text: "New Transaction",
            leading: false,
            isShowBottom:true,
        },
        component: () => import(/* webpackChunkName: "newtransaction" */ "../views/newtransaction.vue"),
        beforeEnter: requireAuth
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;
