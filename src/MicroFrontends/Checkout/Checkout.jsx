import { Container, Form, InputGroup, Row, Col } from 'react-bootstrap'
import { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'
import Button from '../../components/Button'
import TextArea from '../../components/TextArea'
import Footer from '../Footer/Footer'
import InnerHeader from '../InnerHeader/InnerHeader'
import guitarImage from './img/itemThree.png'

import './Checkout.css'
import { checkout } from '../../redux/order/order.action'
import { postDeductIntermediaryCommission } from '../../redux/product/product.action'

const Checkout = () => {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.order.product)
  const bidding = useSelector((state) => state.order.bidding)
  const token = useSelector((state) => state.user.token)

  const [address, setAddress] = useState('')

  const checkoutAPI = () => {
    if (token) {
      const buyerID = jwt_decode(token)._id
      const body = {
        buyerID: buyerID,
        address: address,
        productID: product._id,
        biddingID: bidding._id,
        price: bidding.winningPrice,
        sellerID: product.sellerID,
      }

      const intermediaryID = localStorage.getItem('intermediaryID')
        ? localStorage.getItem('intermediaryID')
        : null
      if (intermediaryID !== null) {
        const intermediaryBody = {
          intermediaryID: intermediaryID,
          totalPrice: bidding.winningPrice,
          sellerID: product.sellerID,
        }
        dispatch(postDeductIntermediaryCommission(token, intermediaryBody))
        localStorage.removeItem('intermediaryID')
      }

      dispatch(checkout(token, body))
    }
  }

  return (
    <div className='checkout-wrapper'>
      <InnerHeader />
      <Container>
        <div className='breadcrumbs'>
          <a href='/landing' className='breadcrumbs-link'>
            home
          </a>{' '}
          <span>{'>'}</span> <span>checkout</span>
        </div>
      </Container>
      <Container className='mt-4'>
        <h4 className='page-heading mb-4'>Checkout</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Form className='postrequest-form p-3 mb-5'>
            <p className='form-label pr-5'>Payment Details</p>
            <InputGroup>
              <Form.Check
                type='radio'
                id={'cod'}
                label={'Cash On Delivery'}
                checked
              />
            </InputGroup>
            <p className='form-label pr-5 mt-3'>Address Details</p>
            <TextArea
              placeholder={'Street Address'}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className='justify-content-end'>
              <Button text='Checkout' onClick={checkoutAPI} />
            </div>
          </Form>
          <Form className='productdetail-form'>
            <p className='form-label pr-5 mb-3'>Payment Details</p>
            <Row
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Col>
                <div className='table-img-container'>
                  <img
                    src={
                      product.images.length > 0
                        ? `https://res.cloudinary.com/barganttic/image/upload/${product.images[0]}`
                        : guitarImage
                    }
                    alt='Guitar'
                  />
                  <span>{product.title ?? 'title'}</span>
                </div>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <span id='text-product-price'>
                  {bidding.winningPrice ?? 0} /-
                </span>
              </Col>
            </Row>
            <Row
              style={{
                height: 0,
                borderTop: '1px solid #cacaca',
                marginLeft: 5,
                marginRight: 5,
                marginTop: 15,
                marginBottom: 15,
              }}
            ></Row>
            <Row>
              <Col>
                <span id='heading-product-price'>Subtotal</span>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <span id='text-product-price'>
                  {bidding.winningPrice ?? 0} /-
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span id='heading-product-price'>Shipping</span>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <span id='text-product-price'>free</span>
              </Col>
            </Row>
            <Row
              style={{
                height: 0,
                borderTop: '1px solid #cacaca',
                marginLeft: 5,
                marginRight: 5,
                marginTop: 15,
                marginBottom: 15,
              }}
            ></Row>
            <Row>
              <Col>
                <span id='heading-product-price'>Total</span>
              </Col>
              <Col style={{ textAlign: 'right' }}>
                <span id='total-product-price'>
                  {bidding.winningPrice ?? 0} PKR
                </span>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Checkout
