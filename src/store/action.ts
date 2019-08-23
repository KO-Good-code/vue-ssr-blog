import * as types from "./types"
import http from "../config/api"

export default {
  isHomeList({ commit }: any ) {
    let params = {
      name:"title",
      time:"time"
    }
    return http.home.getBlogList(params)
      .then((res:any) => {
        commit(types.Home,res.data)
      })
    }
}