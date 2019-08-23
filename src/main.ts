import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import  {createStore }  from './store/store';
// import http from './config/api'
// import Vueaxios from 'vue-axios'

// Vue.use(Vueaxios,http)

// Vue.prototype.$http = http;


export const createApp = () => {
    const router = createRouter()

    const store = createStore()

    const app = new Vue({
        store,
        router,
        render: h => h(App)
    })
    return {app,router,store}
}

