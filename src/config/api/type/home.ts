import { baseUrl } from "../baseUrl"
import ajax from "../../ajax"

const home = [
  {
    name:"getBlogList",
    type: "get",
    url:`${baseUrl}/home`
  },
  {
    name:"getBlogPost",
    type: "get",
    url:`${baseUrl}/post`
  },
  {
    name: "getTags",
    type: "get",
    url: `${baseUrl}/tags`
  },
  {
    name: "getArchive",
    type: "get",
    url: `${baseUrl}/archive`
  },
  {
    name: "getUser",
    type: "get",
    url: `${baseUrl}/user`
  },
  { //管理员登录
    name: "login",
    type: "post",
    url: `${baseUrl}/login`
  }
]

export default ajax(home)