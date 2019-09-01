<template>
 <div class="historyCord">
   <div class="post-time">
     {{data.time}}
   </div>
   <div class="post-contant">
     {{data.title}}
   </div>
 </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
// import http from '../config/api'
// import moment from 'moment'

@Component({
  filters: {
    format: (value: number) => (1)
  }
})

export default class historyCord extends Vue {
  @Prop(Object) data: object | any

  mounted() {
    
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
  transition: box-shadow .3s linear;
  &:hover{
    box-shadow: 0 1px 6px rgba(0, 0, 0, .3);
  }
}
</style>
