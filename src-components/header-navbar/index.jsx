import React, { Component } from 'react'
import cls from 'classnames'

import styles from './index.module.scss'

const prefixCls = 'header-navbar'

class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={cls(styles[`${prefixCls}`])}>
        <ul>
          <li className={cls(styles[`${prefixCls}-item`])}></li>
        </ul>
      </div>
    )
  }
}