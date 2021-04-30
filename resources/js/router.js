import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import firstPage from './components/pages/myFirstVuePage'
import newRoute from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks.vue'
const routes = [
    {
        path: '/my-new-vue-route',
        component: firstPage
    },
    {
        path: '/my-route',
        component: newRoute
    },

    // vue hooks
    {
        path: '/hooks',
        component: hooks
    }
]

export default new Router({
    mode: 'history',
    routes
})