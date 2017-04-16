
import React from 'react'
import { Col, Row, Grid } from 'react-bootstrap'

export default ({ children, id }) => (
  <Row id={id} className={`${id} section`}>
    <Grid>
      <Row>
        <Col sm={8} smOffset={2}>
          { children }
        </Col>
      </Row>
    </Grid>
  </Row>
)
