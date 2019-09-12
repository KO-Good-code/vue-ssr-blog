<template>
  <div class="tags">
    <p class="post-tags">
      <span class="a" v-for="(item,i) in tags" :key="i">{{item}}</span>
    </p>
    <section>
      
    </section>
  </div>
 
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'
import historyList from '@/components/historyList.vue'
import { State } from 'vuex-class'

@Component({
  components:{
    historyList
  }
})

export default class tags extends Vue {
  //服务端渲染提前请求数据
  static asyncData( { store } : any , route) {
    return store.dispatch('isTags',route.query.pageId)
  }

  @State('tags') tags

  created () {
    this.$store.dispatch('isTags')
  }
}
</script>

<style lang="scss" scoped>
.tags{
  background-color: #FFF;
  margin: 0 auto;
  border-radius: 4px;
  min-height: 750px;
  .post-tags{
    span{
      border: 1px solid #e4e4e4;
      background-color: #fff;
      border-radius: 8px;
      padding:5px 10px;
      font-size: 16px;
      transition: border-color 0.4s;
      margin-right:5px;
      &:hover{
        border-color: #666;
      }
    }
  }
}
</style>
