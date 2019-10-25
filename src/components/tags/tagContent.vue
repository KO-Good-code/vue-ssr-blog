<template>
  <section class="tag">
      <h3>{{data.key}}</h3>
      <ul>
        <li v-for="(v, i) in data.value" :key="i" class="tag-post-title a">
          <router-link :to="{name:'post',params:{id:v.id}}">
            <strong>{{v.title}}</strong>
          </router-link>
      </li>
      </ul>
  </section>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class tag extends Vue {
    @Prop() data
    
}
</script>
<style lang='scss' scoped>
.tag{
  margin-top: 30px;
  line-height: 40px;
  .tag-post-title a{
    color: #000;
    &:hover{
      color: #4990E2;
    }
  }
    
}
</style>