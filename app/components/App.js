
import React from 'react'
import { Grid } from 'react-bootstrap'

import Header from './Header'
import Shows from './Shows'
import Videos from './Videos'

export default () => {
  return (
    <Grid fluid>
      <Header />
      <Shows />
      <Videos />
    </Grid>
  )
}
