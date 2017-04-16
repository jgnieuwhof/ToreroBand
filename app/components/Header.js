
import React from 'react'
import { Row, Nav, Navbar, NavItem } from 'react-bootstrap'

export default () => {
  return (
    <div className='header'>
      <Row className='header-img' />
      <Row>
        <Navbar inverse collapseOnSelect className='center'>
          <Navbar.Header>
            <Navbar.Brand>
              <span>Torero</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Shows</NavItem>
              <NavItem eventKey={2} href="#">Videos</NavItem>
              <NavItem eventKey={3} href="#">Music</NavItem>
              <NavItem eventKey={4} href="#">Shop</NavItem>
              <NavItem eventKey={5} href="#">Photos</NavItem>
              <NavItem eventKey={6} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </div>
  )
}
