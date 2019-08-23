import { createApp } from './main'

const {app,router,store} = createApp();

if (window && typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
    console.log('window.__INITIAL_STATE__', window.__INITIAL_STATE__);
  } else {
    console.log('no browser');
  }

router.onReady(()=>{
    app.$mount('#app')
})

