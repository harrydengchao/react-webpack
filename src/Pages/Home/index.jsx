import React, { Component } from 'react'
import cls from 'classnames'
import { Link } from '@reach/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './home.module.scss'

export class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={cls(styles['index'])}>
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
Index.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  incrementAsync: PropTypes.func
}

const mapState = state => ({
  count: state.count
})

const mapDispatch = (dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1)
})

export default connect(mapState, mapDispatch)(Index)
