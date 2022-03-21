import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './Header.css'

import searchIcon from './img/search.svg'
import cartIcon from './img/cart.svg'
import userIcon from './img/user.svg'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

/**
 * 
 *     <div className='header-wrapper'>
      <div className='header-logo'>
        <span>BARGANTTIC</span>
      </div>
      <div className='header-buttons'>
        <span>FEATURED</span>
        <span>SHOP</span>
        <span>BLOG</span>
        <span>ABOUT US</span>
      </div>
      <div className='header-icons'>
        <div className='header-icon'>
          <img src={searchIcon} alt='Search Icon In Gray Color' />
        </div>
        <div className='heade-cart-icon'>
          <img src={cartIcon} alt='Cart Icon In Gray Color' />
        </div>
        <div className='header-icon'>
          <img src={userIcon} alt='User Icon In Gray Color' />
        </div>
      </div>
    </div>
 */
