import Vue from "vue"
import Router from "vue-router"

import index from './view/index.vue'
import tags from './view/tags.vue'
import post from './view/post.vue'

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
                name: 'about', 
                component: tags 
            },
            { 
                path: '/tags',
                name: 'tags', 
                component: tags 
            },
            { 
                path: '/time',
                name: 'time', 
                component: tags 
            },
            { 
                path: '/file',
                name: 'file', 
                component: tags 
            },
            {
                path: '/post/:id',
                name: 'post',
                component: post
            }
        ]
    })
}
