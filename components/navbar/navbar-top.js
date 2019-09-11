import React from 'react'
import { Collapse, Nav, Navbar, NavLink, NavItem, NavbarBrand, NavbarToggler } from 'reactstrap'

class NavbarTop extends React.Component {
  constructor (props) {
    super(props)

    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  handleToggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div>
        <Navbar color='dark' dark expand='md'>
          <NavbarBrand className='mx-auto' href='/'>Paul Mowat</NavbarBrand>
          <NavbarToggler onClick={this.handleToggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id='nav' className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#home'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#about'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#cv'>CV</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#recommendations'>Recommendations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#contact'>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export { NavbarTop }
