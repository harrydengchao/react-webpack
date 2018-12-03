import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import RouterView from './router'
import store from './store'

const Root = () => (
  <Provider store={store}>
    <RouterView />
  </Provider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
