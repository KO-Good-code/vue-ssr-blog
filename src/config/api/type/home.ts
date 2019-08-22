import { baseUrl } from "../baseUrl"
import ajax from "../../ajax"

const home = [
  {
    name:"getBlogList",
    type: "get",
    url:`${baseUrl}/home`
  }
]

export default ajax(home)