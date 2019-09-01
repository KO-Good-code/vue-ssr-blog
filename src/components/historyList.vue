<template>
 <div class="historyList">
   <history-cord v-for="(item, i) in data" :key="i" :data="item"/>
 </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import historyCord from './historyCord.vue'

@Component({
  components:{
    historyCord
  }
})

export default class historyList extends Vue {

  @Prop(Array) data: any;

}
</script>

<style lang="scss" scoped>
@media (min-width: 1000px) and (max-width: 1680px){
  .historyList{
    max-width:600px;
    min-height: 576px;
  }
}

</style>
