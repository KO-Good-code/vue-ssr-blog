import Vue from "vue"
import Router from "vue-router"

import index from './view/index.vue'

Vue.use(Router)

export const createRouter = () => {
    return new Router({
        mode: "history",
        routes: [
            { path: '/index', component: index }
        ]
    })
}
