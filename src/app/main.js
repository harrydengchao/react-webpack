import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import RouterView from './router'
import store from './store'

import HeaderNavbar from '@components/header-navbar'

const Root = () => (
  <Provider store={store}>
    <React.Fragment>
      <HeaderNavbar />
      <RouterView />
    </React.Fragment>
  </Provider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
