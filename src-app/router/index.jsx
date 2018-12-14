// https://reach.tech/router
import React, { Component } from 'react'
import { Router } from '@reach/router'

import Home from '../pages/Home'
import About from '../pages/About'

class RouterView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    )
  }
}

export default RouterView
