import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import './Products.css'

import {
  getAntiques,
  getFeaturedAntiques,
} from '../../redux/product/product.action'
import InnerHeader from '../InnerHeader/InnerHeader'
import Footer from '../Footer/Footer'

import item from './img/itemThree.png'

const Products = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const featuredAntiques = useSelector(
    (state) => state.product.featuredAntiques,
  )
  const antiques = useSelector((state) => state.product.antiques)

  useEffect(() => {
    dispatch(getFeaturedAntiques(token))
  }, [token, dispatch])

  useEffect(() => {
    dispatch(getAntiques(token))
  }, [token, dispatch])

  return (
    <div className='products-wrapper'>
      <div className='products-top'>
        <InnerHeader />
        <div className='breadcrumbs'>
          <span id='breadcrumbs-link'>home</span> <span>{'>'}</span>{' '}
          <span>antiques</span>
        </div>
        <div className='featured-list'>
          {featuredAntiques
            ? featuredAntiques.map((product) => (
                <div className='featured-box' key={product._id}>
                  <div className='featured-box-left'>
                    <span id='featured-name'>{product.title}</span>
                    <span id='featured-time'>bidding in 4 days</span>
                  </div>
                  <div className='featured-box-right'>
                    <span id='featured-time'>starts from 25000/-</span>
                    <img src={item} alt='Guitar' id='product-img' />
                  </div>
                </div>
              ))
            : ''}
        </div>
        <div className='items-list'>
          {antiques
            ? antiques.map((antique) => (
                <div className='item-box' key={antique._id}>
                  <div className='item-box-top'>
                    <span id='featured-name'>{antique.title}</span>
                    <span id='featured-time'>25000 +</span>
                  </div>
                  <div>
                    <span id='featured-time'>bidding in 2 months</span>
                  </div>
                  <div className='list-img-container'>
                    <img src={item} alt='Guitar' id='list-img' />
                  </div>
                </div>
              ))
            : ''}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products
