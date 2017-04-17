
import React from 'react'
import { Grid } from 'react-bootstrap'

import Header from './Header'
import Music from './Music'
import Photos from './Photos'
import Shows from './Shows'
import Videos from './Videos'
import Contact from './Contact'
import Footer from './Footer'

export default () => {
  return (
    <Grid fluid>
      <Header />
      <Shows />
      <Videos />
      <Music />
      <Photos />
      <Contact />
      <Footer />
    </Grid>
  )
}
