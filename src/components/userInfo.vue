<template>
  <div class="userInfo">
    <div class="avatar-name">
      <div class="avatar">
        <img src="../assets/images/5.jpg" />
      </div>
      <div class="name center">
        <i>Negri blog</i>
      </div>
    </div>
    <nav class="nav center" :class="{active:active}">
      <button @click="active = !active">
        <span class="btn-bar"></span>
        <span class="btn-bar"></span>
        <span class="btn-bar"></span>
      </button>
      <ul class="nav-content center" @click="active = !active">
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
          <router-link :to="{name:`archive`}">
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
        <!-- <li>
          <router-link :to="{name:`time`}">
            <i class="iconfont icon-sousuo1"></i>
            <span>搜索</span>
          </router-link>
        </li> -->
    </ul>
    </nav>
    
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class userInfo extends Vue {

  active: boolean = false

  close(){

  }
    
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
@media (max-width: 768px) {
  .nav{
    position: fixed;
    z-index: 2;
    top:0;
    left: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
    height:40px;
    transition: height .4s ,background-color .4s;
    overflow: hidden;
    .nav-content{
      opacity: 0;
      transition: opacity .4s linear;
      width:100%;
      align-items: flex-start;
      padding: 0 10px;
      padding-bottom: 20px; 
    }
    &.active{
      background-color: #fff;
      height:264px;
      .nav-content{
        opacity: 1;
        border-bottom: 1px solid #ccc; 
        border-top: 1px solid #ccc; 
      }
    }
    button{
      outline: none;
      margin: 4px;
      padding: 9px 10px;
      background: transparent;
      border: none;
      user-select: none
    }
    button .btn-bar + .btn-bar {
      margin-top: 4px;
    }
  }
  .btn-bar{
    display: block;
    width: 22px;
    height: 2px;
    background: #666666;
    border-radius: 1px;
  }
}
</style>