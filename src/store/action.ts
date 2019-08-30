import * as types from "./types"
import http from "../config/api"

export default {
  isHomeList({ commit }: any ) {
    let params = {
      pageSize:1
    }
    return http.home.getBlogList(params)
      .then((res:any) => {
        commit(types.Home,res.data)
      })
  },
  isPost({ commit }: any , post_id: number) {
    let params = {
      post_id: 1
    }
    return http.home.getBlogPost(params)
      .then(res => {
        commit(types.Post, res.data)
      })
  }
}