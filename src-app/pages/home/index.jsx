import React, { Component } from 'react'
import cls from 'classnames'
import { Link } from '@reach/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './index.scss'

const prefixCls = 'app-home'

export class Index extends Component {
  static propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func,
    incrementAsync: PropTypes.func
  }

  static defaultProps = {
    count: 0,
    increment() {},
    incrementAsync() {}
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={cls(`${prefixCls}`)}>
        this is index.
        <Link to="/about">to about.</Link>
        <div>
          The count is {this.props.count}
          <button onClick={this.props.increment}>increment</button>
          <button onClick={this.props.incrementAsync}>incrementAsync</button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  count: state.count
})

const mapDispatch = (dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1)
})

export default connect(mapState, mapDispatch)(Index)