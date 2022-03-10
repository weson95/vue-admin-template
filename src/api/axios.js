import axios from 'axios'
import { baseURL } from './config'
import { notification } from 'ant-design-vue'
/**
  * 请求函数
  * @param url          请求路径
  * @param data         请求参数
  * @param method       请求类型
  * @param isDownExcel  是否下载Excel
  **/
// 定义私有方法
const _request = Symbol('_request')
const _interceptors = Symbol('_interceptors')
const _getConfig = Symbol('_getConfig')
class HttpRequest {
  [_request] (url, data, method, isDownExcel) {
    const http = axios.create()
    var options = {
      url,
      data,
      method
    }
    options = Object.assign(this[_getConfig](), options)
    this[_interceptors](http, isDownExcel)
    return http(options)
  }
  [_interceptors] (http, isDownExcel) {
    // 请求拦截
    http.interceptors.request.use(config => {
      if (isDownExcel) {
        config.responseType = 'blob'
      }
      config.headers = {
        // 设置请求头
        'Authorization': localStorage.getItem('Authorization')
      }
      return config
    })
    // 响应拦截
    http.interceptors.response.use(res => {
      const { data } = res
      // 返回类型为流形式的文件
      if (res.config.responseType == 'blob') {
        if (res.status === 200) {
          return res
        } else {
          return Promise.reject(new Error('请求异常'))
        }
      }
      // 请求失败
      if (res.status === 403) {
        store.dispatch('loginOut')
        router.push('/login')
        notification.error({
          message: '登录超时',
          description: '请重新登录'
        })
        return Promise.reject(new Error('请重新登录'))
      } else if (res.status === 200 || res.status === 0) {
        return data
      } else {
        notification.error({
          message: '错误',
          description: data.msg
        })
        router.push('/login')
        return Promise.reject(data)
      }
    }, err => {
      notification.error({
        message: '服务器故障',
        description: '请联系IT同事处理'
      })
      router.push('/login')
      return Promise.reject(err)
    })
  }
  // 创建实例时设置配置的默认值
  [_getConfig] () {
    return {
      baseURL,
      timeout: 300000
    }
  }
  // post请求
  post (url, data = {}, isDownExcel = false) {
    return this[_request](url, data, 'post', isDownExcel)
  }
  // get请求
  get (url, data = {}) {
    // 封装get参数
    let dataStr = '?'
    Object.keys(data)
      .forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
    if (dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + dataStr
    }
    return this[_request](url, {}, 'get')
  }
  // delete请求
  delete (url, data = {}) {
    return this[_request](url, data, 'delete')
  }
  // put请求
  put (url, data = {}) {
    return this[_request](url, data, 'put')
  }
}

export default HttpRequest
