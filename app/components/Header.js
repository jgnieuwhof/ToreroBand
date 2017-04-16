
import React, { Component } from 'react'
import { Row, Nav, Navbar, NavItem } from 'react-bootstrap'

const goToId = id => { document.getElementById(id).scrollIntoView() }
const links = [
  `Shows`, `Videos`, `Music`, `Photos`, `Contact`,
].map(x => ({
  name: x,
  onClick: () => { goToId(x.toLowerCase()) },
}))

class Header extends Component {
  state = { fixedTop: false }

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount = () => {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener(`scroll`, this.handleScroll)
  }

  handleScroll = () => {
    let coords = this.navbar.getBoundingClientRect()
    this.setState({ fixedTop: coords.top < 0 })
  }

  render = () => {
    let { fixedTop } = this.state
    return (
      <div className='header'>
        <Row className='header-img' />
        <div ref={x => { this.navbar = x }}>
          <Row>
            <Navbar inverse collapseOnSelect className='center' fluid fixedTop={fixedTop}>
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
      </div>
    )
  }
}

export default Header
