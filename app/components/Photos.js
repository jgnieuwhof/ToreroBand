
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import Section from './Section'
import api from '../helpers/api'

class Photos extends Component {
  state = {
    photos: [],
  }

  componentWillMount = async () => {
    let { success, photos } = await api(`photos`)
    if (success) {
      this.setState({ photos })
    }
  }

  render = () => {
    let { photos } = this.state
    return (
      <Section id='photos'>
        <Row className='photo-grid'>
          { photos && photos.map(x => (
            <Col key={x.id} xs={12} sm={4} onClick={() => { window.open(x.link, `_blank`)}}>
              <div className='dummy' />
              <div className='in' style={{ backgroundImage: `url(${x.url})` }} />
            </Col>
          ))}
        </Row>
      </Section>
    )
  }
}

export default Photos
