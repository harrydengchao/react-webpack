import axios from 'axios'

import Token from './token'

const token = new Token()

const instance = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  responseType: 'json',
  transformRequest: [function(data, headers) {
    // 请求前，添加 token 
    headers['Authorization'] = token.get()
    return data
  }],
  transformResponse: [function(data) {
    return data
  }]
})

instance.interceptors.request.use(function(config) {
  return config
}, function(error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function(response) {
  let {
    status,
    data
  } = response
  if (status !== 200) {
    return Promise.reject(new Error('网络异常'))
  } else if (!data) {
    return Promise.reject(new Error('服务器异常'))
  } else if (data.code !== '0000') {
    return Promise.reject(new Error(data.msg || '请求失败'))
  } else {
    return data
  }
}, function(error) {
  return Promise.reject(error)
})

export default instance
