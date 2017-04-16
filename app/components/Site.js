import React, { Component } from 'react'
import Helmet from "react-helmet"

import App from './App'
import Splash from './Splash'
import { daysBetween } from '../helpers/date'
import { lsGet } from '../helpers/localStorage'
import favicon from '../img/favicon.ico'

const faviconConfig = [{
  rel: `icon`,
  href: favicon,
  type: `img/ico`,
}]

class Site extends Component {
  state = {
    splash: true,
  }

  componentWillMount = () => {
    let visited = lsGet(`visited`)
    if (visited && daysBetween(Date.now(), visited) <= 1) {
      this.setState({ splash: false })
    }
  }

  hideSplash = () => {
    this.setState({ splash: false })
  }

  render = () => {
    let { splash } = this.state
    return (
      <div className={`site-container`}>
        <Helmet link={faviconConfig} />
        { splash && (
          <Splash hide={this.hideSplash} />
        ) || (
          <App />
        )}
      </div>
    )
  }
}

export default Site
