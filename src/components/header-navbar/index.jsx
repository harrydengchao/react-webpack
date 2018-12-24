import React, { Component } from 'react'
import cls from 'classnames'

import styles from './index.module.scss'

import {
  NavBar,
  Icon
} from 'antd-mobile'

const prefixCls = 'header-navbar'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={cls(styles[`${prefixCls}`])}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          rightContent={[
            <Icon key="1" type="ellipsis" />
          ]}
        >
          NavBar
        </NavBar>
      </div>
    )
  }
}
