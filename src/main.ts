import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import  {createStore }  from './store/store';
import http from './config/api'
import moment from 'moment'

Vue.prototype.$http = http;

Vue.filter(
    "date",
    (val: Date) => moment(val).format("YYYY-MM-DD")
)

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

