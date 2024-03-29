import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import './Products.css'

import {
  getAntiques,
  getFeaturedAntiques,
  getFeaturedHandmade,
  getHandmade,
  setPageNumber,
} from '../../redux/product/product.action'

import InnerHeader from '../InnerHeader/InnerHeader'
import Footer from '../Footer/Footer'

import item from './img/itemThree.png'
import { loading } from '../../redux/loader/loader.action'
import constants from '../../constants/constants'

const Products = (props) => {
  const dispatch = useDispatch()
  let token = useSelector((state) => state.user.token)
  const pageNumber = useSelector((state) => state.product.page)

  const navigate = useNavigate()
  const featuredAntiques = useSelector((state) =>
    props.antiques === true
      ? state.product.featuredAntiques
      : state.product.featuredHandmade,
  )
  const antiques = useSelector((state) =>
    props.antiques === true ? state.product.antiques : state.product.handmade,
  )

  useEffect(() => {
    dispatch(loading(true))

    if (props.antiques === true) {
      dispatch(getFeaturedAntiques(token))
    } else {
      dispatch(getFeaturedHandmade(token))
    }

    dispatch(loading(false))
  }, [token, dispatch])

  useEffect(() => {
    dispatch(loading(true))

    if (props.antiques === true) {
      dispatch(getAntiques(token, pageNumber))
    } else {
      dispatch(getHandmade(token, pageNumber))
    }

    dispatch(loading(false))
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
                  <Card
                    key={product._id}
                    className='featured-box'
                    onClick={() => {
                      navigate(`/product/detail/${product._id}`)
                    }}
                  >
                    <div className='featured-box-left'>
                      <span id='featured-name'>{product.title}</span>
                      <span id='featured-time'>bidding in 4 days</span>
                    </div>
                    <div className='featured-box-right'>
                      <span id='featured-time'>starts from 25000/-</span>
                      <img
                        src={
                          product.images && product.images.length > 0
                            ? `${constants.cloudinaryURL}${product.images[0]}`
                            : item
                        }
                        alt='Guitar'
                        id='product-img'
                      />
                    </div>
                  </Card>
                ))
              : ''}
          </div>
          <div className='items-list'>
            {antiques
              ? antiques.map((antique) => (
                  <Card
                    className='item-box'
                    key={antique._id}
                    onClick={() => {
                      navigate(`/product/detail/${antique._id}`)
                    }}
                  >
                    <div className='item-box-top'>
                      <span id='featured-name'>{antique.title}</span>
                      <span id='featured-time'>25000 +</span>
                    </div>
                    <div>
                      <span id='featured-time'>bidding in 2 months</span>
                    </div>
                    <div className='list-img-container'>
                      <img
                        src={
                          antique.images && antique.images.length > 0
                            ? `${constants.cloudinaryURL}${antique.images[0]}`
                            : item
                        }
                        alt='Guitar'
                        id='list-img'
                      />
                    </div>
                  </Card>
                ))
              : ''}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className='pagination-wrapper'>
              <span
                className='pagination-arrow'
                onClick={() => {
                  dispatch(setPageNumber(pageNumber - 1))
                  if (props.antiques === true) {
                    dispatch(getAntiques(token, pageNumber - 1))
                  } else {
                    dispatch(getHandmade(token, pageNumber - 1))
                  }
                }}
              >
                {'<'}
              </span>
              {pageNumber - 1 < 0 ? (
                ''
              ) : (
                <span className='pagination-inactive-item'>
                  {pageNumber - 1}
                </span>
              )}
              <span className='pagination-active-item'>{pageNumber}</span>
              <span className='pagination-inactive-item'>{pageNumber + 1}</span>
              <span
                className='pagination-arrow'
                onClick={() => {
                  dispatch(setPageNumber(pageNumber + 1))
                  if (props.antiques === true) {
                    dispatch(getAntiques(token, pageNumber + 1))
                  } else {
                    dispatch(getHandmade(token, pageNumber + 1))
                  }
                }}
              >
                {'>'}
              </span>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Products
