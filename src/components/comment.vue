<template>
  <div class="comments">
    <textarea class="textarea" name="comments" rows="5" v-model="value"></textarea>
    <p class="center">
      <button class="btn a">留言</button>
    </p>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class comments extends Vue {

  value: string | number = ''
    
}
</script>
<style lang='scss' scoped>
.comments{
  padding:10px;
  .textarea{
    width: 100%;
    resize:none;
    padding:10px;
    border: 1px solid #a6e22e;
  }
  .center{
    justify-content: flex-end;
    .btn{
      padding: 5px 20px;
      background-color: #fff;
      border: 1px solid #666;
      &:hover{
        background-color: #eee;
      }
    }
  }
}
</style>