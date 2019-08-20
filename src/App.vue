<template>
  <div id="app">
    <heads />
    
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'
import heads from '@/components/header.vue'
import banner from '@/components/banner.vue'

@Component({
  components: {
    heads,
    banner
  }
})

export default class App extends Vue {
  msg = 123
  up(){
    console.log(456)
  }
}
</script>

<style lang="scss">
@import url("./assets/scss/markdown");
body{
  background-color: #f6f6f6;
}
</style>
