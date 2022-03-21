import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/user/user.action'

import './Header.css'

import searchIcon from './img/search.svg'
import cartIcon from './img/cart.svg'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const InnerHeader = () => {
  const token = useSelector((state) => state.user.token)
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (token === null) {
      return navigate('/')
    }
  }, [token])

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
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default InnerHeader
