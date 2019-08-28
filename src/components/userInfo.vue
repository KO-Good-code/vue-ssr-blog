<template>
  <div class="userInfo">
    <div class="avatar-name">
      <div class="avatar">
        <img src="../assets/images/5.jpg" />
      </div>
      <div class="name center">
        <i>sky blog</i>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
    components: {
      
    }
})
export default class userInfo extends Vue {
    
}
</script>
<style lang='scss' scoped >
.userInfo{
  .avatar-name{
    border-bottom: 1px solid #979797;
    .avatar{
      width: 100px;
      height: 100px;
      padding: 10px;
    }
    .name{
      line-height: 40px;
      font-size: 20px;
    }
  }
}

</style>