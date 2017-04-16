
import React from 'react'
import { Row, Nav, Navbar, NavItem } from 'react-bootstrap'

const goToId = id => { document.getElementById(id).scrollIntoView() }
const links = [
  `Shows`, `Videos`, `Music`, `Shop`, `Photos`, `Contact`,
].map(x => ({
  name: x,
  onClick: () => { goToId(x.toLowerCase()) },
}))

export default () => {
  return (
    <div className='header'>
      <Row className='header-img' />
      <Row>
        <Navbar inverse collapseOnSelect className='center' fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <span>Torero</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              { links.map((x, i) => (
                <NavItem key={x.name} eventKey={i} onClick={x.onClick}>{x.name}</NavItem>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </div>
  )
}
