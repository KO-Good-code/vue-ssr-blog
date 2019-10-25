<template>
  <div class="about">
    敬情期待！
  </div>
 
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component

export default class about extends Vue {
  //服务端渲染提前请求数据
  // static asyncData( { store } : any , route) {
  //   return store.dispatch('isArchive')
  // }

  // @State('Archive') Archive //标签

  // created () {
  //   this.$store.dispatch('isArchive')
  // }

}
</script>

<style lang="scss" scoped>
.Archive{
  background-color: #FFF;
  margin: 0 auto;
  ul{
    padding: 20px;
    li{
      justify-content: flex-start;
      background-color: #fff;
      border-radius: 8px;
      padding:5px 10px;
      font-size: 16px;
      margin-right:5px;
      span{
        margin-right: 20px;
      }
      &:hover{
        color: #4990E2;
      }
    }
  }
}
</style>
