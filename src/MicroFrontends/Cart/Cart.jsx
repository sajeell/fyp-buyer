import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import InnerHeader from '../InnerHeader/InnerHeader'
import './Cart.css'

import guitarImage from './img/itemThree.png'

const Cart = () => {
  return (
    <div className='cart-wrapper'>
      <Container>
        <InnerHeader />
        <div className='page-top'>
          <div className='breadcrumbs'>
            <span className='breadcrumbs-link'>home</span> <span>{'>'}</span>{' '}
            <span className='breadcrumbs-link'>cart</span>{' '}
          </div>
          <p className='page-subtitle'>CART</p>
        </div>
      </Container>
      <hr />
      <Container>
        <div className='cart-container'>
          <p className='page-subtitle'>BARGAIN</p>
          <table>
            <tr>
              <th>ITEM</th>
              <th>REQUESTED ON</th>
              <th>REQUESTS</th>
              <th>ACTIONS</th>
            </tr>
            <tr>
              <td className='table-img-container'>
                <img src={guitarImage} alt='Guitar' />
                <span>Acoustic Guitar</span>
              </td>
              <td>2021-10-12</td>
              <td>12</td>
              <td>View Details</td>
            </tr>
          </table>
          <p className='page-subtitle'>BID</p>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Cart
