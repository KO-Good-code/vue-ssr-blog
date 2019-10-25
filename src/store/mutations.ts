import * as types from "./types"


export default {
  [types.Home]( state: object | any, data:string){
    state.homeList = data
  },
  [types.Post]( state: object | any, data:string){
    state.post = data
  },
  [types.Tags]( state: object | any, data:string){
    state.tags = data
  },
  [types.Archive]( state: object | any, data:string){
    state.Archive = data
  },
  [types.userInfo]( state: object | any, data:string){
    state.userInfo = data
  }
}