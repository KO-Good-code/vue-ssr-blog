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
    heads,
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
  background: url('./assets/images/bg.jpg') no-repeat center fixed;
  background-size: center;
  background-attachment: fixed;
}
</style>
