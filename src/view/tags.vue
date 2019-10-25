<template>
  <div class="tags">
    <p class="post-tags">
      <span class="a" v-for="(item,i) in tag" :key="i">{{item}}</span>
    </p>
    <!-- 列表 -->
    <tag-content v-for="(value, key, i) in tags" :data="{key,value}" :key="i" />
  </div>
 
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'
import tagContent from '@/components/tags/tagContent.vue'
import { State } from 'vuex-class'

@Component({
  components:{
    tagContent
  }
})

export default class tags extends Vue {
  //服务端渲染提前请求数据
  static asyncData( { store } : any , route) {
    return store.dispatch('isTags',route.query.pageId)
  }

  @State('tags') tags //标签

  beforeCreate() {
    this.$store.dispatch('isTags')
  }
  get tag(){
    let result: string[] = []
    if( this.tags !== null){
      Object.keys(this.tags).forEach( res => {
        result.push(res)
      })
    }
    return result
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
