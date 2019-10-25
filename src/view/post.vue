<template>
  <div class="posts">
    <vue-markdown v-if="post" class="add" :source="post.contant" />
    <div id="lv-container" data-id="city" data-uid="MTAyMC80NjgxMy8yMzMxNA=="></div>
    <!-- <comments  /> -->
  </div>
</template>

<script lang="ts">
import VueMarkdown from 'vue-markdown'
import {Component, Provide, Vue, Model} from 'vue-property-decorator'
// import titleMixin from '@/mixin' 
import comments from '@/components/comment.vue'
import { State } from 'vuex-class'

declare let Prism:any

@Component({
  components:{
    VueMarkdown,
    comments
  },
  // mixins:[titleMixin]
})

export default class post extends Vue {

  static asyncData( { store } : any ,router) {
    return store.dispatch('isPost',router.params.id)
  }

  beforeCreate() {
    this.$store.dispatch('isPost',this.$route.params.id)
  }

  created() {
    this.serverTitleMixin()
  }

  mounted() {
    setTimeout(()=>{
      Prism.highlightAll()
      },100)
  }

  @State('post') post

  get title(){
    return this.post.title
  }

  serverTitleMixin(){
    const title = this.title
    if (title && this.$ssrContext) { 
      this.$ssrContext.title = title
    }
  }
  
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
