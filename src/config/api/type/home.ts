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
  }
]

export default ajax(home)