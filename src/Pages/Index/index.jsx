import './index.scss'
import React, { Component } from 'react'
import { Link } from 'router'

class Index extends Component {
  render () {
    return (
      <div className="page-index">
        <h2 className="index-title">This is Index.</h2>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default Index
