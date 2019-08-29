import Vue from "vue"
import Router from "vue-router"

import index from './view/index.vue'
import about from './view/about.vue'

Vue.use(Router)

export const createRouter = () => {
    return new Router({
        mode: "history",
        routes: [
            { 
                path: '/index',
                name: 'index',
                component: index 
            },
            { 
                path: '/about',
                name: 'about', 
                component: about 
            },
            { 
                path: '/time',
                name: 'time', 
                component: about 
            },
            { 
                path: '/file',
                name: 'file', 
                component: about 
            },
        ]
    })
}
