<template>
 <div @click="up">{{msg}}</div>
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'

@Component

export default class App extends Vue {
  msgs : number = 123

  get msg() {
    return 2
  }

  up(){
    this.msgs++
  }
}
</script>

<style>
</style>
