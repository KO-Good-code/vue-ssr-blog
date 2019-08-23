import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action'
import mutations from "./mutations"

Vue.use(Vuex);
const state = {
  homeList:null
}

export const createStore = () => {
  const store = new Vuex.Store({
    state,
    mutations,
    actions
  });

  return store;
}