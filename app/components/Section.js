
import React from 'react'
import { Row, Grid } from 'react-bootstrap'

export default ({ children, className }) => (
  <Row className={`${className} section`}>
    <Grid>
      { children }
    </Grid>
  </Row>
)
