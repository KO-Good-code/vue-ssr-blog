<template>
  <div class="container">
    about
  </div>
 
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'
import historyList from '@/components/historyList.vue'

@Component({
  components:{
    historyList
  }
})

export default class about extends Vue {
  
}
</script>

<style lang="scss" scoped>
.container{
  background-color: #FFF;
  margin: 0 auto;
  border-radius: 4px;
}
</style>
