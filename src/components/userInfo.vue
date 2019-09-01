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
    <ul class="nav-content center">
      <li>
        <router-link :to="{name:`index`}">
          <i class="iconfont icon-shouye1"></i>
          <span>主页</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:`tags`}">
          <i class="iconfont icon-biaoqian1"></i>
          <span>标签</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:`file`}">
          <i class="iconfont icon-guidang2"></i>
          <span>存档</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:`about`}">
          <i class="iconfont icon-guanyu2"></i>
          <span>关于</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:`time`}">
          <i class="iconfont icon-sousuo1"></i>
          <span>搜索</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class userInfo extends Vue {
    
}
</script>
<style lang='scss' scoped >
.userInfo{
  margin-top: 50px;
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
  .nav-content{
    flex-direction: column;
    font-size: 15px;
    li{
      margin-top:20px;
      a{
        color: #999;
        &:hover{
          color:#3a3a3a;
        }
      }
      .router-link-active{
        color:#3a3a3a;
      }
    }
  }
}

</style>