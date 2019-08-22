import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const fetchBar = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(111111);
      resolve('bar 组件返回 ajax 数据');
    }, 1000);
  });
};

export const createStore = () => {
  const store = new Vuex.Store({
    state: {
      bar: '1234'
    },

    mutations: {
      'SET_BAR'(state, data) {
        state.bar = data;
      }
    },

    actions: {
      fetchBar({ commit }) {
        return fetchBar().then((data) => {
          commit('SET_BAR', data);
        }).catch((err) => {
          console.error(err);
        })
      }
    }
  });

  // if (window && typeof window !== 'undefined' && window.__INITIAL_STATE__) {
  //   console.log('window.__INITIAL_STATE__', window.__INITIAL_STATE__);
  //   store.replaceState(window.__INITIAL_STATE__);
  // } else {
  //   // console.log('no browser');
  // }
  
  return store;
}