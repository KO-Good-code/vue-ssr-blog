import * as types from "./types"
import http from "../config/api"

export default {
  isHomeList({ commit }: any, pageSize: number = 1 ) {
    let params = {
      pageSize:pageSize
    }
    return http.home.getBlogList(params)
      .then((res:any) => {
        commit(types.Home,res.data)
      })
  },
  isPost({ commit }: any , post_id: number) {
    let params = {
      post_id: post_id
    }
    return http.home.getBlogPost(params)
      .then(res => {
        commit(types.Post, res.data)
      })
  }
}