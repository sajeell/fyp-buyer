import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Card, Container } from 'react-bootstrap'

import './Products.css'

import {
  getAntiques,
  getFeaturedAntiques,
  getFeaturedHandmade,
  getHandmade,
} from '../../redux/product/product.action'

import InnerHeader from '../InnerHeader/InnerHeader'
import Footer from '../Footer/Footer'

import item from './img/itemThree.png'

const Products = (props) => {
  const dispatch = useDispatch()
  let token = useSelector((state) => state.user.token)
  const featuredAntiques = useSelector((state) =>
    props.antiques === true
      ? state.product.featuredAntiques
      : state.product.featuredHandmade,
  )
  const antiques = useSelector((state) =>
    props.antiques === true ? state.product.antiques : state.product.handmade,
  )

  useEffect(() => {
    if (props.antiques === true) {
      dispatch(getFeaturedAntiques(token))
    } else {
      dispatch(getFeaturedHandmade(token))
    }
  }, [token, dispatch])

  useEffect(() => {
    if (props.antiques === true) {
      dispatch(getAntiques(token))
    } else {
      dispatch(getHandmade(token))
    }
  }, [token, dispatch])

  return (
    <div className='products-wrapper'>
      <div className='products-top'>
        <InnerHeader />
        <Container>
          <div className='breadcrumbs'>
            <a href='/landing' className='breadcrumbs-link'>
              home
            </a>{' '}
            <span>{'>'}</span>{' '}
            <span>{props.antiques === true ? 'antiques' : 'handmade'}</span>
          </div>
          <div className='featured-list'>
            {featuredAntiques
              ? featuredAntiques.map((product) => (
                  <Card key={product._id} className='featured-box'>
                    <div className='featured-box-left'>
                      <span id='featured-name'>{product.title}</span>
                      <span id='featured-time'>bidding in 4 days</span>
                    </div>
                    <div className='featured-box-right'>
                      <span id='featured-time'>starts from 25000/-</span>
                      <img src={item} alt='Guitar' id='product-img' />
                    </div>
                  </Card>
                ))
              : ''}
          </div>
          <div className='items-list'>
            {antiques
              ? antiques.map((antique) => (
                  <Card className='item-box' key={antique._id}>
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
                  </Card>
                ))
              : ''}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Products
