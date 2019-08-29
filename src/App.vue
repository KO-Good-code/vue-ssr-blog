<template>
  <div id="app">
    <!-- <heads /> -->
    <main class="center">
      <p class="p" :class="{load:flag}"><i>学而不思则罔，思而不学则怠</i></p>

      <div class="container center w100">
        <div class="left center">
          <user-info />
        </div>
        <div class="right">
          <router-view/>
        </div>
      </div>
      <!-- <index/> -->
    </main>
  </div>
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'
import heads from '@/components/header.vue'
import userInfo from '@/components/userInfo.vue'

@Component({
  components: {
    heads,
    userInfo
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
<style lang="scss" scoped>
.container{
  align-items: flex-start;
  .left{
    max-width: 246px;
    margin-right:20px;
    flex: 1;
  }
  .right{
    max-width: 784px;
    flex:3;
  }
  
}
@media (max-width: 768px) {
  .container{
    width: 100%;
  }
}
</style>
