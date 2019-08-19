<template>
 <div class="index">
   <vue-markdown class="add" :source="msg" />
 </div>
</template>

<script>
import myMarkdown from '../markdown/index.md'
import VueMarkdown from 'vue-markdown'

export default {
  data () {
    return {
      msg:myMarkdown,
      data:12
    }
  },
  components: {
    VueMarkdown
  },
  mounted(){
    
  },
  methods:{
    up(){
      console.log(123)
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
