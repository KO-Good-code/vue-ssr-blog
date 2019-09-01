<template>
  <div class="index">
    <history-list :data="homeList" />
    <ul class="but center">
      <li v-if="$route.query.pageId > 1" class="center previous">
        <router-link :to="{name:`index`,query:{pageId: route - 2 > 0 ? route - 2 : 1 }}">← Newer Posts</router-link>    
      </li>
      <li class="center next" v-show="homeList.length == 8">
        <router-link :to="{name:`index`,query:{pageId:route}}">Older Posts →</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Provide, Vue, Watch} from 'vue-property-decorator'
import historyList from '@/components/historyList.vue'
import { State } from 'vuex-class'

@Component({
  components:{
    historyList,
  }
})

export default class Index extends Vue {

  static asyncData( { store } : any , route) {
    return store.dispatch('isHomeList',route.query.pageId)
  }

  @State('homeList') homeList

  get route(){
    return this.$route.query.pageId ? ~~this.$route.query.pageId+1 : 2
  }

  created () {
    this.$store.dispatch('isHomeList', this.$route.query.pageId)
  }

  @Watch("$route")
  next(to, from){
    if(to.query.pageId !== from.query.pageId){
      this.$store.dispatch('isHomeList', this.$route.query.pageId)
    }
  }

  
}
</script>

<style lang="scss" scoped>
.index{
  .but{
    justify-content: space-between;
    margin: 30px 0;
    li{
      flex: 1;
      &.previous{
        justify-content: flex-start;
      }
      &.next{
        justify-content: flex-end;
      }
      a{
        transition: color 0.4s, background-color 0.4s;
        border: 1px solid #999999;
        line-height: 40px;
        width: 150px;
        height: 40px;
        font-size: 18px;
        color: #999999;
        text-align: center;
        text-decoration: none;
        &:hover{
          color: white;
          background-color: #666666;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .index{
    .but{
      li{
        a{
          line-height: 30px;
          width: 120px;
          height: 30px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
