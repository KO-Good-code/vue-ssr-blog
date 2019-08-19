<template>
  <div id="app">
    <heads />
   
    <router-view/>
   
  </div>
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'
import heads from '@/components/header.vue'

@Component({
  components: {
    heads
  }
})

export default class App extends Vue {
  msg = 123
  up(){
    console.log(456)
  }
}
</script>

<style lang="scss" src="./assets/scss/markdown">
button{
  width: 100px;
}
</style>
