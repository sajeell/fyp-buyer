import './Header.css'

import searchIcon from './img/search.svg'
import cartIcon from './img/cart.svg'
import userIcon from './img/user.svg'

const InnerHeader = () => {
  return (
    <div className='header-wrapper'>
      <div className='header-logo'>
        <span>BARGANTTIC</span>
      </div>
      <div className='header-buttons'>
        <span>HANDICRAFTS</span>
        <span>ANTIQUES</span>
        <span>HELP</span>
      </div>
      <div className='header-icons'>
        <div className='header-icon'>
          <img src={searchIcon} alt='Search Icon In Gray Color' />
        </div>
        <div className='heade-cart-icon'>
          <img src={cartIcon} alt='Cart Icon In Gray Color' />
        </div>
        <div className='header-icon'>
          <img src={userIcon} alt='User Icon In Gray Color' />
        </div>
      </div>
    </div>
  )
}

export default InnerHeader
