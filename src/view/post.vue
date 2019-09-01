<template>
   <div class="posts"><vue-markdown v-if="post" class="add" :source="post.contant" /></div>
</template>

<script lang="ts">
import VueMarkdown from 'vue-markdown'
import {Component, Provide, Vue, Model} from 'vue-property-decorator'
// import { filters } from '@/config/tools/untils' 
import { State } from 'vuex-class'

@Component({
    components:{
        VueMarkdown
    }
})

export default class post extends Vue {

  static asyncData( { store } : any ,router) {
    return store.dispatch('isPost',router.params.id)
  }
  created() {
    this.$store.dispatch('isPost',this.$route.params.id)
  }

  mounted() {
    setTimeout(()=>{
      (window as any).Prism.highlightAll()
      },100)
  }

  @State('post') post
  
}
</script>

<style lang="scss" scoped>
.posts{
  line-height: 30px;
  color: #666;
  padding: 25px;
  font-size: 14px;
}
</style>
<style lang="scss">
.posts{
  p{
    margin: 10px 0;
  }
}
</style>
