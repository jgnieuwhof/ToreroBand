
import React from 'react'
import { Grid } from 'react-bootstrap'

import Header from './Header'
import Shows from './Shows'

export default () => {
  return (
    <Grid fluid>
      <Header />
      <Shows />
    </Grid>
  )
}
