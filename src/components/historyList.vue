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

<style>
</style>
