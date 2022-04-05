import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import Footer from '../Footer/Footer'
import InnerHeader from '../InnerHeader/InnerHeader'
import BiddingTab from './Tabs/BiddingTab'
import ReviewTab from './Tabs/ReviewTab'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import guitarImage from './img/itemThree.png'
import orangeStar from './img/orangeStar.svg'
import { getProduct } from '../../redux/product/product.action'

import './Product.css'
import BiddingDetailsModal from './Modals/BiddingDetailsModal'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import constants from '../../constants/constants'

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
  const productDetail = useSelector((state) => state.product.productDetail)
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

  useEffect(() => {
    getProductDetail()
  }, [id])

  return (
    <>
      <Container>
        <div className='productdetail-wrapper'>
          <InnerHeader />
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
                    Starts from <strong>25000/-</strong>
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
                  <div className='button' onClick={openModal}>
                    <span>Bid</span>
                  </div>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    onAfterClose={() => console.log(1)}
                    style={customStyles}
                    contentLabel='Example Modal'
                  >
                    <BiddingDetailsModal onClose={closeModal} />
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
