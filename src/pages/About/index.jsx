import React, { Component } from 'react'
import cls from 'classnames'
import { Link } from '@reach/router'

import './about.scss'

export class Index extends Component {
  render() {
    return (
      <div className={cls('about')}>
        this is about.
        <Link to="/">to index.</Link>
      </div>
    )
  }
}

export default Index
