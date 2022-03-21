import { Navbar, Container, Nav, Dropdown, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Header.css'

import searchIcon from './img/search.svg'
import cartIcon from './img/cart.svg'
import userIcon from './img/user.svg'

const InnerHeader = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='white' variant='light'>
      <Container className='pl-0'>
        <Navbar.Brand href='/'>Barganttic</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <Nav>
            <Nav.Link href=''>Featured</Nav.Link>
            <Nav.Link href=''>Shop</Nav.Link>
            <Nav.Link href=''>Bargain</Nav.Link>
            <Nav.Link className='header-icon'>
              <img src={searchIcon} alt='Search Icon In Gray Color' />
            </Nav.Link>
            <Nav.Link className='heade-cart-icon'>
              <img src={cartIcon} alt='Cart Icon In Gray Color' />
            </Nav.Link>
            <NavDropdown title='🧕'>
              <NavDropdown.Item href=''>Profile</NavDropdown.Item>
              <NavDropdown.Item href=''>Help</NavDropdown.Item>
              <NavDropdown.Item href=''>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default InnerHeader
