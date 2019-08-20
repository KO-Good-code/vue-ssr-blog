<template>
 <div>
   <history-cord @click.native="up" v-for="(item, i) in history" :key="i" :data="item"/>
   <button @click="up">123132</button>
 </div>
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'
import historyCord from './historyCord.vue'

let { history } = require('@/config/history/type.ts')

@Component({
  components:{
    historyCord
  }
})

export default class historyList extends Vue {
  history : any = history

  get msg() {
    return 2
  }

  up(){
    console.log(this.history)
  }
}
</script>

<style>
</style>
