import 'es5-shim'
import 'es5-shim/es5-sham'
import 'babel-polyfill'
import 'console-polyfill'

import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'

import './style/index.css'

// import App from './Pages/App'
import App from './Pages/Index'

ReactDOM.render(<App />, document.getElementById('root'))
