import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Container, ToastContainer } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import Footer from '../Footer/Footer'
import InnerHeader from '../InnerHeader/InnerHeader'
import BiddingTab from './Tabs/BiddingTab'
import ReviewTab from './Tabs/ReviewTab'

import guitarImage from './img/itemThree.png'
import orangeStar from './img/orangeStar.svg'
import {
  getBiddingParticipants,
  getProduct,
  getProductBiddingDetails,
  participantBid,
  verifyBid,
} from '../../redux/product/product.action'

import './Product.css'
import BiddingDetailsModal from './Modals/BiddingDetailsModal'
import constants from '../../constants/constants'
import { toast } from 'react-toastify'

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

const ProductDetail = () => {
  const dispatch = useDispatch()
  const [tabState, setTabState] = useState(0)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [productID, setProductID] = useState('')
  const [maximumPrice, setMaximumPrice] = useState()
  const [minimumPrice, setMinimumPrice] = useState(0)
  const [email, setEmail] = useState()
  const productDetail = useSelector((state) => state.product.productDetail)
  const verifyBidding = useSelector((state) => state.product.verifyBidding)
  const participants = useSelector((state) => state.product.participants)

  const productBiddingDetails = useSelector(
    (state) => state.product.productBiddingDetails,
  )
  const token = useSelector((state) => state.user.token)

  const { id } = useParams()

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const getProductDetail = async () => {
    setProductID(id)
    dispatch(getProduct(token, id))
  }

  const fetchVerifyBidding = async () => {
    if (token) {
      const id = jwt_decode(token)._id
      const body = { userID: id, productID: productID }
      dispatch(verifyBid(token, body))
    }
  }

  const getProductBiddingDetailsAPI = async () => {
    dispatch(getProductBiddingDetails(token, id))
  }

  const bid = () => {
    const id = jwt_decode(token)._id

    if (maximumPrice <= minimumPrice) {
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

  useEffect(() => {
    getProductBiddingDetailsAPI()
  }, [token])

  useEffect(() => {
    fetchVerifyBidding()
  })

  useEffect(() => {
    getProductDetail()
  }, [id])

  useEffect(() => {
    if (productBiddingDetails) {
      dispatch(getBiddingParticipants(token, productBiddingDetails._id))
    }
  }, [productBiddingDetails])

  useEffect(() => {
    if (participants) {
      let participantsPrices = []
      participants.map((participant) => {
        participantsPrices.push(participant.maxPrice)
      })


      setMinimumPrice(Math.max(...participantsPrices))
    }
  }, [participants])

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
                    Bid Time:{' '}
                    <strong>
                      {moment(productBiddingDetails.startsOn)
                        .format('lll')}{' '}
                    </strong>
                  </p>
                </div>
                <div className='productdetail-content-right'>
                  <button
                    className='button'
                    onClick={openModal}
                    disabled={verifyBidding}
                    style={{
                      cursor: verifyBidding === true ? 'not-allowed' : 'cursor',
                      marginLeft: 40
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
                      minPrice={minimumPrice}
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

export default ProductDetail
