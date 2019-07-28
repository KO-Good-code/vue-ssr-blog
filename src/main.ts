import Vue from 'vue'
import App from './App.vue'

export const createApp = () => {
    const app = new Vue({
        render: h => h(App)
    })
    return app
}