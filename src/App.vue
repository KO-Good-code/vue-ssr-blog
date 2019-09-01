<template>
  <div id="app">
    <!-- <heads /> -->
    <main class="center">
      <p class="p" :class="{load:flag}">
        <i>学而不思则罔，思而不学则怠</i>
      </p>

      <div class="container center w100">
        <div class="left center">
          <user-info />
        </div>
        <div class="right">
          <router-view />
        </div>
      </div>
      <!-- <index/> -->
    </main>
    <footer class="center">
      <ul class="list-inline">
        <li>
          <a target="_blank" href="javascript:;">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-twitter"></i>
            </span>
          </a>
        </li>

        <li>
          <a target="_blank" href="javascript:;">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-zhihu"></i>
            </span>
          </a>
        </li>

        <li>
          <a target="_blank" href="javascript:;">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-weibo"></i>
            </span>
          </a>
        </li>

        <li>
          <a target="_blank" href="javascript:;">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-facebook"></i>
            </span>
          </a>
        </li>

        <li>
          <a target="_blank" href="javascript:;">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-github"></i>
            </span>
          </a>
        </li>

        <li>
          <a target="_blank" href="javascript:;">
            <span class="fa-stack fa-lg">
              <i class="iconfont icon-linkedin"></i>
            </span>
          </a>
        </li>
      </ul>
      <p>
        
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import heads from "@/components/header.vue";
import userInfo from "@/components/userInfo.vue";

@Component({
  components: {
    heads,
    userInfo
  }
})
export default class App extends Vue {
  flag: boolean = false;

  mounted() {
    this.flag = true;
  }

  up() {
    
  }
}
</script>

<style lang="scss" src="./assets/scss/markdown">
</style>
<style lang="scss" scoped>
.container {
  align-items: flex-start;
  .left {
    max-width: 246px;
    margin-right: 20px;
    position: fixed;
    top: 50px;
    left: 50px;
  }
  .right {
    width: 784px;
    padding: 0 35px;
  }
}
footer {
  margin-bottom: 60px;
  .list-inline{
    color: #444444;
    font-size: 20px;
    i{
      line-height: 20px;
      color: white;
    }
  }
  li{
    display: inline-block;
    margin: 0 2px;
    background-color: #979797;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    text-align: center;
    &:hover{
      background-color: #000;
    }
  }
}
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
@media (min-width: 1680px) {
  .container {
    .left {
      left: 20%;
    }
  }
}
@media (min-width: 1000px) and (max-width: 1680px) {
  .container {
    .left {
      left: 10%;
    }
  }
}
</style>
