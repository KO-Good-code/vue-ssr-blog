import * as types from "./types"


export default {
  [types.Home]( state: object | any, data:string){
    state.homeList = data
  },
  [types.Post]( state: object | any, data:string){
    state.post = data
  }
}