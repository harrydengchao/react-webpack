import request from './request'

const domain = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3004/'
  : ''

export default {
  login: ({data = {}, params = {}} = {}) => {
    return request({
      url: 'login',
      method: 'get',
      baseURL: domain,
      data,
      params
    })
  },
  upload: ({data = {}, params = {}} = {}) => {
    return request({
      url: '',
      method: 'post',
      baseURL: domain,
      data,
      params
    })
  }
}
