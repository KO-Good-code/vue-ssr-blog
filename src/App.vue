<template>
 <div id="app">
   <router-view/>
   <button @click="up">123</button>
   <foo/>
 </div>
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'
import foo from '@/components/foo.vue'

@Component({
  components: {
    foo
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
