<template>
   <vue-markdown class="add" :source="msg" />
</template>

<script>
import myMarkdown from '@/markdown/2019-8-20-1.md'
import VueMarkdown from 'vue-markdown'
import { filters } from '@/config/tools/untils' 

export default {
  data () {
    return {
      msg:myMarkdown,
    }
  },
  asyncData( { store } ) {
    console.log(store)
    return store.dispatch('fetchBar');
  },
  components: {
    VueMarkdown
  },
  mounted(){
    let res = filters(this.msg)
    console.log(res)
  }
}
</script>

<style lang="scss" scoped>


</style>
