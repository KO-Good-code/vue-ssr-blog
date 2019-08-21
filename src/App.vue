<template>
  <div id="app">
    <heads />
    <main class="center">
      <h1 :class="{load:flag}"><i>学而不思则罔，思而不学则怠</i></h1>
      <router-view/>
    </main>
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
  flag:boolean = false

  mounted() {
    this.flag = true
  }

  up(){
    console.log(456)
  }
}
</script>

<style lang="scss" src="./assets/scss/markdown">

</style>
