<template>
 <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Code Boy</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li class="active"><a href="#"><span class="glyphicon glyphicon-home"></span>首页</a></li>
        <li><a href="#">文档</a></li>
        <li><a href="#">时间线</a></li>
        <li><a href="#">关于</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script lang="ts">
import {Component, Provide, Vue} from 'vue-property-decorator'

@Component

export default class heads extends Vue {
  msg = 123
  up(){
    console.log(456)
  }
}
</script>

<style lang="scss" scoped>
.navbar-default{
  background-color:transparent;
  border: none;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .3);
  .nav{
    font-weight: bolder;
    color: #000;
    .active>a{
      background-color: transparent;
      color: #000;
    }
  }
}
</style>
