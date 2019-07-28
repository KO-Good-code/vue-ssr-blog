import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export const createRouter = () => {
    return new Router({
        mode: "history",
        routes: [
            { path: '/index', component: () => import('@/components/foo.vue') }
        ]
    })
}
