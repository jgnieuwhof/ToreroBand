import 'babel-polyfill'
import 'whatwg-fetch'

import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import Routes from './components/Routes'

window.onload = () => {
  let root = document.createElement(`div`)
  document.body.appendChild(root)
  ReactDOM.render(
    <Router
      onUpdate={() => window.scrollTo(0, 0)}
      history={browserHistory}
    >
      { Routes }
    </Router>,
    root
  )
}
