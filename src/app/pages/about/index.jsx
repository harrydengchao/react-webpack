import React, { Component } from 'react'
import cls from 'classnames'
import { Link } from '@reach/router'

import './index.scss'

const prefixCls = 'app-about'

export class Index extends Component {
  render() {
    return (
      <div className={cls(`${prefixCls}`)}>
        this is about.
        <Link to="/">to index.</Link>
      </div>
    )
  }
}

export default Index
