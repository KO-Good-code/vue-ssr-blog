<template>
 <div @click="up">{{data}}</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component

export default class historyCord extends Vue {
  @Prop() data : any

  get msg() {
    return 2
  }

  up(){
    
  }
}
</script>

<style>
</style>
