<template>
   <vue-markdown v-if="posts" class="add" :source="posts" />
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

  static asyncData( { store } : any ) {
    return store.dispatch('isPost')
  }
  posts: any = null
  created () {
      if(this.post) {
        this.posts = this.post.contant
      }else{
        let params = {
          post_id: this.$route.params.id
        }
        this.$http.home.getBlogPost(params)
        .then(res => {
          console.log(res.dta)
          this.posts = res.data.contant
        })
      }
      
  }

  @State('post') post
  
}
</script>

<style lang="scss" scoped>


</style>
