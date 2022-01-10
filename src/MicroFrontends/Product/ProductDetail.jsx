import { useState } from 'react'
import Footer from '../Footer/Footer'
import InnerHeader from '../InnerHeader/InnerHeader'

import guitarImage from './img/itemThree.png'
import orangeStar from './img/orangeStar.svg'

import './Product.css'
import BiddingTab from './Tabs/BiddingTab'
import ReviewTab from './Tabs/ReviewTab'

const ProductDetail = () => {
  const [tabState, setTabState] = useState(0)

  return (
    <div className='productdetail-wrapper'>
      <div className='productdetail-top'>
        <InnerHeader />
        <div className='breadcrumbs'>
          <span id='breadcrumbs-link'>home</span> <span>{'>'}</span>{' '}
          <span>antiques</span> <span>{'>'}</span> <span>Acoustic Guitar</span>
        </div>
        <div className='productdetail'>
          <div className='productdetail-images'>
            <img src={guitarImage} alt='Product Image' />
          </div>
          <div className='productdetail-content'>
            <div className='productdetail-content-left'>
              <h2>Acoustic Guitar</h2>
              <div className='stars-wrapper'>
                <div className='stars'>
                  <img src={orangeStar} />
                  <img src={orangeStar} />
                  <img src={orangeStar} />
                  <img src={orangeStar} />
                  <img src={orangeStar} />
                </div>
                <div className='review-text'>
                  <span>5.0 - 5 Reviews</span>
                </div>
              </div>
              <span>
                Starts from <strong>25000/-</strong>
              </span>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et.
              </p>
              <div style={{ marginTop: '3%' }}></div>
              <span id='warranty-text'>6 months seller warranty</span>
              <div style={{ marginTop: '3%' }}></div>
              <p>
                Bid starts in <strong>2 days</strong>
              </p>
              <div className='productdetail-tabs'>
                <div
                  className={
                    tabState === 0
                      ? 'productdetail-tab-active'
                      : 'productdetail-tab'
                  }
                  onClick={() => setTabState(0)}
                >
                  Bidding Information
                </div>
                <span
                  className={
                    tabState === 1
                      ? 'productdetail-tab-active'
                      : 'productdetail-tab'
                  }
                  onClick={() => setTabState(1)}
                >
                  Reviews (1)
                </span>
                <span className='productdetail-tab'>Product Information</span>
              </div>
              <div className='tab-content'>
                {tabState === 0 ? (
                  <BiddingTab />
                ) : tabState == 1 ? (
                  <ReviewTab />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className='productdetail-content-right'>
              <div className='button'>
                <span>Bid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetail
