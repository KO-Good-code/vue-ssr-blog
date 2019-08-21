<template>
 <nav class="navbar center" >
   <div class="navbar-def center" :class="{active:active}">
     <div class="center blog">
       <h2>
        Sky Blog
      </h2>
      <img @click="up" src="../assets/images/5.svg" class="option" alt="">
     </div>
    <ul class="center">
      <li class="center"><router-link :to="{name:'index'}">首页</router-link></li>
      <li class="center"><router-link :to="{name:'file'}">文档</router-link></li>
      <li class="center"><router-link :to="{name:'timeLine'}">时间线</router-link></li>
      <li class="center"><router-link :to="{name:'about'}">关于</router-link></li>
    </ul>
   </div>
</nav>
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'

@Component

export default class heads extends Vue {

  active:boolean = false

  up(){
    this.active = !this.active
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  box-shadow: 0 1px 6px rgba(0, 0, 0, .3);
  background: url('../assets/images/lineart.png') center;
  background-size: contain;
  margin-bottom:20px;
  color: #000;
  background-color: #fff;
  a{
    padding:0 20px;
    font-weight: bolder;
    &:hover{
      color: #4990E2;
    }
  }
  .navbar-def{
    justify-content: space-between;
    overflow: hidden;
    transition: height .3s linear;
    height:50px;
    line-height:50px;
    padding:0 20px;
    width: 1200px;
    .option{
      display: none;
    }
    .blog{
      justify-content: space-between;
    }
    ul{
      position: relative;
      @for $i from 1 through 4 {
        li:nth-child(#{$i})::before{
          content: "";
          background-image: url("../assets/images/#{$i}.svg");
          display: inline-block;
          width: 25px;
          height: 25px;
          background-size: cover;
          position: relative;
          left: 10px;
        }
      }
    }
  }
  .router-link-active{
    color: #4990E2;
    transition: color 0.4s;
  }
}
@media (max-width: 768px) {
  .navbar{
    .navbar-def{
      flex-direction: column;
      h2{
        line-height:50px;
      }
      &.active{
        height:210px;
      }
      .blog{
        width: 100%;
        flex-direction: row;
        border-bottom: 1px solid #e1e1e1;
      }
      .option{
        display: inline-block;
      }
      ul{
        flex-direction: column;
        width: 100%;
        li{
          line-height: 40px;
        }
      }
    }
  }
  
}
</style>
