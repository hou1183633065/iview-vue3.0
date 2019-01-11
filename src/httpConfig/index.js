/**
 * http配置
 */
import axios from 'axios'
import { Notice } from 'iview'
// 超时时间
axios.defaults.timeout = 15000
axios.defaults.headers.Authorization = !localStorage.getItem('Authorization') ? '' : localStorage.getItem('Authorization').toString()
// http请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// http响应拦截器
axios.interceptors.response.use(
  data => {
    return data.data
  },
  error => {
    return Promise.reject(error)
  }
)
let http = {

  /** get 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  get: function (url, params) {
    return new Promise((resolve) => {
      axios.get(url, {
        params: params
      })
        .then((response) => {
          resolve({
            success: true,
            resData: response.data
          })
        })
        .catch((error) => {
          Notice.error({
            title: error
          })
          resolve({
            success: false,
            resData: null
          })
        })
    })
  },
  /** post 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
  post: function (url, params) {
    return new Promise((resolve) => {
      axios.post(url, params)
        .then((response) => {
          resolve({
            success: true,
            resData: response.data
          })
        })
        .catch((error) => {
          Notice.error({
            title: error
          })
          resolve({
            success: false,
            resData: null
          })
        })
    })
  }
}
export default http
