import './Landing.css'

import InnerHeader from '../InnerHeader/InnerHeader'

import itemOne from './img/itemOne.png'
import itemTwo from './img/itemTwo.png'
import itemThree from './img/itemThree.png'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getFeaturedProducts } from '../../redux/product/product.action'
import { useNavigate } from 'react-router-dom'

import { loading } from '../../redux/loader/loader.action'

const Landing = () => {
  const dispatch = useDispatch()
  const [productOne, setProductOne] = useState({})
  const [productTwo, setProductTwo] = useState({})
  const [productThree, setProductThree] = useState({})

  const token = useSelector((state) => state.user.token)
  const products = useSelector((state) =>
    state.product ? state.product.featuredProducts : [],
  )

  const navigate = useNavigate()
  useEffect(() => {
    if (
      typeof token === null ||
      typeof token === 'undefined' ||
      token === null
    ) {
      return navigate('/')
    }
  }, [token])

  useEffect(() => {
    dispatch(loading(true))
    dispatch(getFeaturedProducts(token))
    dispatch(loading(false))
  }, [token, dispatch])

  useEffect(() => {
    setProductOne(products[0])
    setProductTwo(products[1])
    setProductThree(products[2])
  }, [products])

  return (
    <>
      <div className='landing-wrapper'>
        <div className='left-landing'>
          <div className='header'>
            <InnerHeader />
          </div>
          <div className='middle'>
            <div className='side-buttons'>
              <div className='side-page-buttons'>
                <span>Shipping</span>
                <span>Team</span>
                <span>History</span>
              </div>
              <div className='social-buttons'>
                <span>fb</span>
                <span>insta</span>
                <span>in</span>
              </div>
            </div>
            <div className='middle-right'>
              <span id='bg-item-name'>
                {productOne ? productOne.title : 'GRAMO'}
              </span>
              <img src={itemTwo} alt='Item Two' />
            </div>
          </div>
          <div className='bottom'>
            <span className='bottom-contact'>Contact Us</span>
            <span className='bottom-button'>BUY NOW</span>
          </div>
        </div>
        <div className='right-landing'>
          <div className='side-item'>
            <img src={itemOne} alt='Item One' />
            <span className='side-item-name'>
              {productTwo ? productTwo.title : 'Acoustic Guitar'}
            </span>
            <span className='side-item-price'>Rs. 1350</span>
          </div>
          <div className='side-item'>
            <img src={itemThree} alt='Item Three' />
            <span className='side-item-name'>
              {productThree ? productThree.title : 'Handmade Vase'}
            </span>
            <span className='side-item-price'>Rs. 1350</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
