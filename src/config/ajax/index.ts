import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加响应拦截器
axios.interceptors.response.use(response =>
  response.status === 200
    ? Promise.resolve(response)
    : Promise.reject(response),
  error => {
  // 对响应错误做点什么
  console.log(error)
});

const ajaxFn = ( arr:object[] ) : any => {
  let result:any = {}
  arr.map( (res: any) => {
    result[res.name] = (params:object) =>axios[res.type](res.url,{params})
  })
  return result
}

export default ajaxFn

