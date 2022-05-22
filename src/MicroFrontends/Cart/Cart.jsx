import jwt_decode from 'jwt-decode'
import { useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  setBidding,
  setBiddingID,
  setBuyerID,
  setPrice,
  setProduct,
  setProductID,
  setSellerID
} from '../../redux/order/order.action'
import { fetchRequests, getBiddingCartDetails } from '../../redux/product/product.action'
import Footer from '../Footer/Footer'
import InnerHeader from '../InnerHeader/InnerHeader'
import './Cart.css'
import guitarImage from './img/itemThree.png'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.user.token)
  const biddingCartData = useSelector(
    (state) => state.product.biddingCartDetails,
  )

  const bargainingCartData = useSelector(
    (state) => state.product.requests,
  )

  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const convertToNormalDate = (dateArg) => {
    const date = new Date(dateArg)

    return `${date.getDate()} ${month[date.getMonth()]},${date.getFullYear()}`
  }

  const fetchBiddingCart = () => {
    if (token) {
      const id = jwt_decode(token)._id
      dispatch(getBiddingCartDetails(token, id))
    }
  }

  const storePaymentData = (
    biddingID,
    productID,
    price,
    product,
    bidding,
    sellerID,
  ) => {
    if (token) {
      const id = jwt_decode(token)._id
      dispatch(setBiddingID(biddingID))
      dispatch(setBuyerID(id))
      dispatch(setProductID(productID))
      dispatch(setPrice(price))
      dispatch(setProduct(product))
      dispatch(setBidding(bidding))
      dispatch(setSellerID(sellerID))

      return navigate('/checkout')
    }
  }

  const fetchRequestsHelper = (token) => {
    dispatch(fetchRequests(token))
  }

  useEffect(() => {
    fetchBiddingCart(token)
  }, [token])

  useEffect(() => {
    fetchRequestsHelper(token)
  }, [token])

  return (
    <div className='cart-wrapper'>
      <Container>
        <InnerHeader />
        <div className='page-top'>
          <div className='breadcrumbs'>
            <a href='/landing' className='breadcrumbs-link'>
              home
            </a>{' '}
            <span>{'>'}</span> <span className='breadcrumbs-link'>cart</span>{' '}
          </div>
          <p className='page-subtitle'>CART</p>
        </div>
      </Container>
      <hr />
      <Container style={{ minHeight: '100vh' }}>
        <div className='cart-container'>
          <p className='page-subtitle'>BID</p>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>S. #</th>
                <th>ITEM</th>
                <th>BIDDED ON</th>
                <th>PAYABLE AMOUNT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {biddingCartData && biddingCartData.length > 0 ? (
                biddingCartData.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td className='table-img-container'>
                      <img
                        src={
                          item.product.images.length > 0
                            ? `https://res.cloudinary.com/barganttic/image/upload/${item.product.images[0]}`
                            : guitarImage
                        }
                        alt='Guitar'
                      />
                      <span>{item.product.title}</span>
                    </td>
                    <td>{convertToNormalDate(item.bidding.createdAt)}</td>
                    <td>{item.bidding.winningPrice}</td>
                    <td>
                      <Button
                        variant='outline-info px-4'
                        style={{ borderRadius: 50 }}
                        onClick={() => {
                          storePaymentData(
                            item.bidding._id,
                            item.product._id,
                            item.bidding.winningPrice,
                            item.product,
                            item.bidding,
                            item.sellerID,
                          )
                        }}
                      >
                        PAYMENT
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>loading...</tr>
              )}
            </tbody>
          </Table>
          <br />
          <p className='page-subtitle'>BARGAIN</p>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>S. #</th>
                <th>ITEM</th>
                <th>REQUESTED ON</th>
                <th>FINAL PRICE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {bargainingCartData && bargainingCartData.length > 0 ? (
                bargainingCartData.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td className='table-img-container'>
                      <img
                        src={
                          item.img && item.img.length > 0
                            ? `https://res.cloudinary.com/barganttic/image/upload/${item.img}`
                            : guitarImage
                        }
                        alt='Guitar'
                      />
                      <span>{item.description ?? 'description'}</span>
                    </td>
                    <td>{convertToNormalDate(item.createdAt)}</td>
                    <td>{item.finalPrice ?? 200}</td>
                    <td>
                      <Button
                        variant='outline-info px-4'
                        style={{ borderRadius: 50 }}
                        onClick={() => {
                          console.log(1)
                        }}
                      >
                        DETAILS
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>loading...</tr>
              )}
            </tbody>
          </Table>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Cart
