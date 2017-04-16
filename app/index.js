import 'babel-polyfill'
import 'whatwg-fetch'

import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import ShopifyBuy from 'shopify-buy'

import appConfig from './app.config'
import Routes from './components/Routes'
import ShopifyProvider from './components/ShopifyProvider'

const SHOPIFY = {
  client: ShopifyBuy.buildClient(appConfig.shopify),
  cart: {},
}

window.onload = () => {
  let root = document.createElement(`div`)
  document.body.appendChild(root)
  ReactDOM.render(
    <ShopifyProvider shopify={SHOPIFY}>
      <Router
        onUpdate={() => window.scrollTo(0, 0)}
        history={browserHistory}
      >
        { Routes }
      </Router>
    </ShopifyProvider>,
    root
  )
}
