import Vue from "vue"
import Router from "vue-router"

import index from './view/index.vue'
import tags from './view/tags.vue'
import post from './view/post.vue'
import archive from './view/archive.vue'
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
                path: '/tags',
                name: 'tags', 
                component: tags 
            },
            { 
                path: '/about',
                name: 'about', 
                component: about 
            },
            { 
                path: '/archive',
                name: 'archive', 
                component: archive 
            },
            {
                path: '/post/:id',
                name: 'post',
                component: post
            }
        ]
    })
}
