<template>
  <div class="container center w100">
    <div class="left">
      <history-list/>
    </div>
    <div class="right"></div>
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

export default class Index extends Vue {
  
}
</script>

<style lang="scss" scoped>
.container{
  .left{
    flex: 1;
  }
  
}
@media (max-width: 768px) {
  .container{
    width: 100%;
  }
}


</style>
