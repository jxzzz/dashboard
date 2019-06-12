import axios from 'axios'
import router from '../router'
// import qs from 'qs'

import i18n from '../locale'
import iView from 'iview'
const service = axios.create({
  // baseURL: 'http://10.88.66.153:8080/',
  baseURL: 'http://localhost',
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 20000 // request timeout

})
var xueCount
service.interceptors.request.use(
  (request) => {
    // if (request.method === 'post') {
    //   request.data = qs.stringify(request.data)
    // }
    if (localStorage.getItem('token')) {
      request.headers['Authorization'] = localStorage.getItem('token')
    }
    let x = request.url.indexOf('startHttpRequest')
    if (x === -1) {
      return request
    } else {
      request.data.url = request.url1
      request.data.param = {
        method: request.data.method,
        params: request.data.params
      }
      request.data.method = 'POST'
      return request
    }
  },

  (error) => {
    return error
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    let x
    if (response.data.ok) {
      if (response.data.data && response.data.data.error) {
        x = Number(response.data.data.error)
      }
    }
    if (x) {
      response.data.error = i18n.t(`kxLinuxErr.${x}`)
      iView.Notice.error({
        desc: response.data.error
      })
      return response
    } else {
      return response
    }
  },

  error => {
    if (error.response.status === 401) {
      window.clearTimeout(xueCount)
      xueCount = window.setTimeout(() => {
        iView.Notice.info({
          desc: i18n.t('loginTmeOut'),
          duration: 3
        })
      }, 0)
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default service
