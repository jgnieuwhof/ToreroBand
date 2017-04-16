
import React from 'react'
import { Button } from 'react-bootstrap'

import { lsSet } from '../helpers/localStorage'

const enterSite = hide => {
  lsSet(`visited`, Date.now())
  hide()
}

export default ({ hide }) => {
  return (
    <div>
      Splash here!
      <Button onClick={() => { enterSite(hide) }}>
        Enter!
      </Button>
    </div>
  )
}
