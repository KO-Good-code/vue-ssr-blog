<template>
  <div class="container center w100">
    <div class="left center">
      <user-info />
    </div>
    <div class="right">
      <history-list :data="homeList" />
    </div>
  </div>
 
</template>

<script lang="ts">
import {Component, Provide, Vue, Model} from 'vue-property-decorator'
import historyList from '@/components/historyList.vue'
import userInfo from '@/components/userInfo.vue'
import { State, Action, Mutation, Getter, namespace } from 'vuex-class'

@Component({
  components:{
    historyList,
    userInfo
  }
})

export default class Index extends Vue {

  static asyncData( { store } : any ) {
    return store.dispatch('isHomeList')
  }

  @State('homeList') homeList
  
}
</script>

<style lang="scss" scoped>
.container{
  .left{
    max-width: 246px;
    margin-right:20px;
    flex: 1;
  }
  .right{
    max-width: 784px;
    flex:3;
  }
  
}
@media (max-width: 768px) {
  .container{
    width: 100%;
  }
}


</style>
