/**
 * Token 操作
 * @class Token
 */
class Token {
  constructor() {
    this.name = 'AUTH_TOKEN'
  }

  get() {
    return window.sessionStorage.getItem(this.name) || ''
  }

  set(token) {
    return window.sessionStorage.setItem(this.name, token)
  }
}

export default Token
