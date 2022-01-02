import './Products.css'

import InnerHeader from '../InnerHeader/InnerHeader'

import item from './img/itemThree.png'

const Products = () => {
  return (
    <div className='products-wrapper'>
      <InnerHeader />
      <div className='breadcrumbs'>
        <span id='breadcrumbs-link'>home</span> <span>{'>'}</span>{' '}
        <span>antiques</span>
      </div>
      <div className='featured-list'>
        <div className='featured-box'>
          <div className='featured-box-left'>
            <span id='featured-name'>Acoustic Guitar</span>
            <span id='featured-time'>bidding in 4 days</span>
          </div>
          <div className='featured-box-right'>
            <span id='featured-time'>starts from 25000/-</span>
            <img src={item} alt='Guitar' id='product-img' />
          </div>
        </div>
        <div className='featured-box'>
          <div className='featured-box-left'>
            <span id='featured-name'>Acoustic Guitar</span>
            <span id='featured-time'>bidding in 4 days</span>
          </div>
          <div className='featured-box-right'>
            <span id='featured-time'>starts from 25000/-</span>
            <img src={item} alt='Guitar' id='product-img' />
          </div>
        </div>
        <div className='featured-box'>
          <div className='featured-box-left'>
            <span id='featured-name'>Acoustic Guitar</span>
            <span id='featured-time'>bidding in 4 days</span>
          </div>
          <div className='featured-box-right'>
            <span id='featured-time'>starts from 25000/-</span>
            <img src={item} alt='Guitar' id='product-img' />
          </div>
        </div>
      </div>
      <div className='items-list'>
        <div className='item-box'>
          <div className='item-box-top'>
            <span id='featured-name'>Acoustic Guitar</span>
            <span id='featured-time'>25000 +</span>
          </div>
          <div>
            <span id='featured-time'>bidding in 2 months</span>
          </div>
          <div className='list-img-container'>
            <img src={item} alt='Guitar' id='list-img' />
          </div>
        </div>
        <div className='item-box'>
          <div className='item-box-top'>
            <span id='featured-name'>Acoustic Guitar</span>
            <span id='featured-time'>25000 +</span>
          </div>
          <div>
            <span id='featured-time'>bidding in 2 months</span>
          </div>
          <div className='list-img-container'>
            <img src={item} alt='Guitar' id='list-img' />
          </div>
        </div>
        <div className='item-box'>
          <div className='item-box-top'>
            <span id='featured-name'>Acoustic Guitar</span>
            <span id='featured-time'>25000 +</span>
          </div>
          <div>
            <span id='featured-time'>bidding in 2 months</span>
          </div>
          <div className='list-img-container'>
            <img src={item} alt='Guitar' id='list-img' />
          </div>
        </div>
        <div className='item-box'>
          <div className='item-box-top'>
            <span id='featured-name'>Acoustic Guitar</span>
            <span id='featured-time'>25000 +</span>
          </div>
          <div>
            <span id='featured-time'>bidding in 2 months</span>
          </div>
          <div className='list-img-container'>
            <img src={item} alt='Guitar' id='list-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
