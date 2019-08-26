import Vue from 'vue'

declare module '*.vue' {
  export default Vue
}


// iview 全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $http: any
  }
}