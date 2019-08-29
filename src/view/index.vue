<template>
  <history-list :data="homeList" />
</template>

<script lang="ts">
import {Component, Provide, Vue, Model} from 'vue-property-decorator'
import historyList from '@/components/historyList.vue'
import { State, Action, Mutation, Getter, namespace } from 'vuex-class'

@Component({
  components:{
    historyList,
  }
})

export default class Index extends Vue {

  static asyncData( { store } : any ) {
    return store.dispatch('isHomeList')
  }

  @State('homeList') homeList
  
}
</script>
