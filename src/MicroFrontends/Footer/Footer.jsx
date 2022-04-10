/*eslint-disable*/
import React from 'react'
import { Col, Container, Nav, NavItem, NavLink, Row } from 'reactstrap'

import './Footer.css'
const Footer = () => {
  return (
    <>
      <footer className='footer '>
        <Container className='container-lg'>
          <Row>
            <Col md='3'>
              <h2 className='foothead'>ABOUT</h2>
              <Nav className=' ml-lg-auto footlink' navbar>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>How Barganttic </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Investors </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Barganttic for Work </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p> Olympics </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p> Careers </p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md='3'>
              <h2 className='foothead'>COMMUNITY</h2>
              <Nav className=' ml-lg-auto footlink' navbar>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Diversity & Belonging </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Against Discrimination </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Accessibility </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p> Barganttic Associates </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p> Frontline Stays </p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Invite friends </p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md='3'>
              <h2 className='foothead'>SELLER</h2>
              <Nav className=' ml-lg-auto footlink' navbar>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Add your Product </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Host an Online Experience </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Host an Experience </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p> Responsible hosting </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p> Resource Center </p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p> Community Center </p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md='3'>
              <h2 className='foothead'>SUPPORT</h2>
              <Nav className=' ml-lg-auto footlink' navbar>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Our COVID-19 Response </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Help Center </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p>Cancellation options </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p> Neighborhood Support </p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footlink' href='#' target='_blank'>
                    <p> Trust & Safety </p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
        <Container>
          <hr />
          <Row className='align-items-center justify-content-md-between'>
            <Col md='6'>
              <Row>
                <Col md='12'>
                  <div className='copyright'>
                    <Nav
                      className='nav-footer '
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <NavItem>
                        <NavLink>
                          © {new Date().getFullYear()}{' '}
                          <span style={{ color: 'blue', cursor: 'pointer' }}>
                            Barganttic. All rights reserved
                          </span>
                          .
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href='#/privacy-policy'>Privacy</NavLink>
                      </NavItem>
                      <NavItem style={{ fontSize: 7, color: '#a0bcd6' }}>
                        &#x2B24;
                      </NavItem>
                      <NavItem>
                        <NavLink href='#/terms-of-service'>Terms</NavLink>
                      </NavItem>
                      <NavItem style={{ fontSize: 7, color: '#a0bcd6' }}>
                        &#x2B24;
                      </NavItem>
                      <NavItem>
                        <NavLink href='#' target='_blank'>
                          Sitemap
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md='3'>
              <Nav className='align-items-center justify-content-md-between'>
                <NavItem>
                  <NavLink className='footersocial ' href='#' target='_blank'>
                    <i className='fa fa-whatsapp'></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footersocial' href='#' target='_blank'>
                    <i className='fa fa-twitter' />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footersocial' href='#' target='_blank'>
                    <i className='fa fa-instagram' />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='footersocial' href='#' target='_blank'>
                    <i className='fa fa-medium'></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
