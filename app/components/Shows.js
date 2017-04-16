
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import Section from './Section'
import { artistEvents } from '../helpers/bandsInTown'

const ShowContent = ({ shows }) => {
  return (
    <div>
      { !shows &&
        <span>Loading ...</span>
      }
      { shows && shows.length === 0 &&
        <span>No Upcoming Shows ...</span>
      }
      { shows && shows.length > 0 &&
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Venue</th>
              <th>Location</th>
              <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            { shows.map(x => (
              <tr key={x.id}>
                <td>{x.date.format(`MMM D`)}</td>
                <td>{x.venue}</td>
                <td className='location'>{x.city}, {x.country}</td>
                <td><a href={x.url}>RSVP</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}

class Shows extends Component {
  state = {
    shows: null,
  }

  componentWillMount = async () => {
    let shows = await artistEvents({ artist: `torero` })
    this.setState({ shows })
  }

  render = () => {
    let { shows } = this.state
    return (
      <Section className='shows'>
        <Row>
          <Col sm={8} smOffset={2}>
            <ShowContent shows={shows} />
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Shows
