<template>
  <history-list :data="data" />
</template>

<script lang="ts">
import {Component, Provide, Vue, Model} from 'vue-property-decorator'
import historyList from '@/components/historyList.vue'
import { State } from 'vuex-class'

@Component({
  components:{
    historyList,
  }
})

export default class Index extends Vue {

  static asyncData( { store } : any ) {
    return store.dispatch('isHomeList')
  }

  data: object[] | null = null

  @State('homeList') homeList

  created () {
    if(this.homeList) {
          this.data = this.homeList
    }else{
        let params = {
          pageSize:1
      }
      this.$http.home.getBlogList(params)
      .then(res => {
          console.log(res.dta)
          this.data = res.data
      })
    }
  }
  
}
</script>
