import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './../components/Dashboard.vue';
import Home from './../components/Home.vue';
import Register from './../components/Register.vue';
//import Login from './../components/Login.vue';
import  DefaultContainer from './../containers/DefaultContainer';
import Login from './../views/pages/Login.vue';
import Notfound from './../views/pages/Page404.vue';

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },{
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },{
        path: '/dashboard',
        name: 'dashboard',
        component: DefaultContainer,
        meta: {
            auth: true
        }
    },{
        path: '/404',
        name: '404',
        component: Notfound,
        meta: {
            auth: false
        }
    }]
})
