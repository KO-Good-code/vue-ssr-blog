<template>
 <div class="historyCord">

 </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component

export default class historyCord extends Vue {
  @Prop() data : any

  get msg() {
    return 2
  }

  up(){
    
  }
}
</script>

<style lang="scss" scoped>
.historyCord{
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  &:hover{
    box-shadow: 0 1px 6px rgba(0, 0, 0, .3);
  }
}
</style>
