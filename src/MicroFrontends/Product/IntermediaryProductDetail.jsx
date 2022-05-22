import jwt_decode from 'jwt-decode'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Container, ToastContainer } from 'react-bootstrap'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import constants from '../../constants/constants'
import {
  getProductBiddingDetails,
  getProductViaIntermediary,
  participantBid,
  verifyBid
} from '../../redux/product/product.action'
import Footer from '../Footer/Footer'
import InnerHeader from '../InnerHeader/InnerHeader'
import guitarImage from './img/itemThree.png'
import orangeStar from './img/orangeStar.svg'
import BiddingDetailsModal from './Modals/BiddingDetailsModal'
import './Product.css'
import BiddingTab from './Tabs/BiddingTab'
import ReviewTab from './Tabs/ReviewTab'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement(document.getElementById('root'))

const IntermediaryProductDetail = () => {
  const dispatch = useDispatch()
  const [tabState, setTabState] = useState(0)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [productID, setProductID] = useState('')
  const [maximumPrice, setMaximumPrice] = useState()
  const [email, setEmail] = useState()
  const productDetail = useSelector((state) => state.product.productDetail)
  const verifyBidding = useSelector((state) => state.product.verifyBidding)

  const productBiddingDetails = useSelector(
    (state) => state.product.productBiddingDetails,
  )
  const token = useSelector((state) => state.user.token)

  const { id } = useParams()

  function openModal() {
    dispatch(getProductBiddingDetails(token, productDetail._id))

    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const fetchVerifyBidding = async () => {
    if (token) {
      const id = jwt_decode(token)._id
      const body = { userID: id, productID: productID }
      dispatch(verifyBid(token, body))
    }
  }

  const bid = () => {
    const id = jwt_decode(token)._id

    if (maximumPrice < productBiddingDetails.minPrice) {
      toast.error(
        'Maximum price should be greater than the bidding minimum price',
      )
      return
    }

    if (email.length < 1) {
      toast.error('Email field is required')
      return
    }

    const body = {
      biddingID: productBiddingDetails._id,
      userID: id,
      email: email,
      maxPrice: maximumPrice,
    }

    dispatch(participantBid(token, body))
    closeModal()
  }

  const getProductViaIntermediaryID = () => {
    dispatch(getProductViaIntermediary(token, id))
    localStorage.setItem('intermediaryID', id)
    fetchVerifyBidding()
  }

  useEffect(() => {
    getProductViaIntermediaryID()
  }, [token])

  return (
    <>
      <Container>
        <div className='productdetail-wrapper'>
          <InnerHeader />
          <ToastContainer />
          <div className='productdetail-top'>
            <div className='breadcrumbs'>
              <a href='/landing' className='breadcrumbs-link'>
                home
              </a>{' '}
              <span>{'>'}</span>{' '}
              <span className='breadcrumbs-link'>antiques</span>{' '}
              <span>{'>'}</span>{' '}
              <span>
                {productDetail
                  ? productDetail.title
                    ? productDetail.title
                    : ''
                  : ''}
              </span>
            </div>
            <div className='productdetail'>
              <div className='productdetail-images'>
                <img
                  src={
                    productDetail.images && productDetail.images.length > 0
                      ? `${constants.cloudinaryURL}${productDetail.images[0]}`
                      : guitarImage
                  }
                  alt='Product'
                />
              </div>
              <div className='productdetail-content'>
                <div className='productdetail-content-left'>
                  <h2>
                    {' '}
                    {productDetail
                      ? productDetail.title
                        ? productDetail.title
                        : ''
                      : ''}
                  </h2>
                  <div className='stars-wrapper'>
                    <div className='stars'>
                      <img src={orangeStar} alt='Review Orange Star' />
                      <img src={orangeStar} alt='Review Orange Star' />
                      <img src={orangeStar} alt='Review Orange Star' />
                      <img src={orangeStar} alt='Review Orange Star' />
                      <img src={orangeStar} alt='Review Orange Star' />
                    </div>
                    <div className='review-text'>
                      <span>5.0 - 5 Reviews</span>
                    </div>
                  </div>
                  <span>
                    Starts from{' '}
                    <strong>
                      {productBiddingDetails && productBiddingDetails.minPrice
                        ? productBiddingDetails.minPrice
                        : 2500}
                    </strong>
                  </span>
                  <p className='productdetail-description'>
                    {productDetail
                      ? productDetail.description
                        ? productDetail.description
                        : ''
                      : ''}
                  </p>
                  <div style={{ marginTop: '3%' }}></div>
                  <span id='warranty-text'>6 months seller warranty</span>
                  <div style={{ marginTop: '3%' }}></div>
                  <p>
                    Bid starts{' '}
                    <strong>
                      {moment(productBiddingDetails.startsOn)
                        .startOf('hour')
                        .fromNow()}{' '}
                    </strong>
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
                    <span className='productdetail-tab'>
                      Product Information
                    </span>
                  </div>
                  <div className='tab-content'>
                    {tabState === 0 ? (
                      <BiddingTab />
                    ) : tabState === 1 ? (
                      <ReviewTab />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className='productdetail-content-right'>
                  <button
                    className='button'
                    onClick={openModal}
                    disabled={verifyBidding}
                    style={{
                      cursor: verifyBidding === true ? 'not-allowed' : 'cursor',
                    }}
                  >
                    Bid
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    onAfterClose={() => console.log(1)}
                    style={customStyles}
                    contentLabel='Example Modal'
                  >
                    <BiddingDetailsModal
                      onClose={closeModal}
                      minPrice={productBiddingDetails.minPrice}
                      maximumPrice={maximumPrice}
                      incrementPrice={productBiddingDetails.incrementPrice}
                      email={email}
                      onEmailChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      onChange={(e) => {
                        setMaximumPrice(e.target.value)
                      }}
                      onClick={bid}
                    />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default IntermediaryProductDetail
