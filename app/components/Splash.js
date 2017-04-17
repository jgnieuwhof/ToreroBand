
import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Videos from './Videos'
import { lsSet } from '../helpers/localStorage'

const enterSite = hide => {
  lsSet(`visited`, Date.now())
  hide()
}

export default ({ hide }) => {
  return (
    <div className='splash-container full-size center-content'>
      <Grid className='text-center' style={{ width: `100%` }}>
        <h1 className='splash-header'>CANYON</h1>
        <Videos />
        <Grid>
          <Row>
            <Col sm={8} smOffset={2}>
              <a
                className='pull-right'
                style={{ cursor: `pointer` }}
                onClick={() => { enterSite(hide) }}
              >
                ENTER >>
              </a>
            </Col>
          </Row>
        </Grid>
      </Grid>
    </div>
  )
}
