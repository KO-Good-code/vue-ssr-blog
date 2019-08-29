<template>
 <div class="historyCord center">
   <div class="post-time">
     {{data.time | date}}
   </div>
   <div class="post-info">
     <router-link :to="{name:'index'}">
       <h3>{{data.title}}</h3>
     </router-link>
     <p class="post-tags">
      <span class="a" v-for="(item,i) in data.tags" :key="i">{{item}}</span>
    </p>
   </div>
 </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'


@Component

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
  // background-color: #fff;
  // border-bottom: 1px solid #e1e1e1;
  margin-top:20px;
  border-radius: 4px;
  align-items: flex-start;
  line-height: 24px;
  .post-info{
    flex:1;
    h3{
      cursor: pointer;
      margin-top: 0;
      margin-bottom: 5px;
      color: #101010;
      font-size: 18px;
      font-weight: 300;
      transition: color 0.4s;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover{
        color: #4990E2;
      }
    }
    .post-tags{
      span{
        border: 1px solid #e4e4e4;
        background-color: #fff;
        border-radius: 4px;
        padding:2px 4px;
        font-size: 12px;
        transition: border-color 0.4s;
        margin-right:5px;
        &:hover{
          border-color: #666;
        }
      }
    }
  }
  .post-time{
    // font-style: oblique;
    color: #999999;
    width: 125px;
    font-weight: 300;
  }
}
</style>
