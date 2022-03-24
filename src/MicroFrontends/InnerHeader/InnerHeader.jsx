import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/user/user.action'

import './Header.css'

import searchIcon from './img/search.svg'
import cartIcon from './img/cart.svg'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const InnerHeader = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(logout())
    return navigate('/')
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='white' variant='light'>
      <Container className='pl-0'>
        <Navbar.Brand href='/'>Barganttic</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <Nav style={{ alignItems: 'center' }}>
            <Nav.Link href=''>Featured</Nav.Link>
            <Nav.Link href='/antiques'>Antiques</Nav.Link>
            <Nav.Link href='/handmade'>Handmade</Nav.Link>
            <Nav.Link href=''>Bargain</Nav.Link>
            <Nav.Link className='header-icon'>
              <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='outline-success'>Search</Button>
              </Form>
            </Nav.Link>
            <Nav.Link className='heade-cart-icon' href='/cart'>
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
