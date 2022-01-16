import './Landing.css'

import InnerHeader from '../InnerHeader/InnerHeader'

import itemOne from './img/itemOne.png'
import itemTwo from './img/itemTwo.png'
import itemThree from './img/itemThree.png'
import { useSelector } from 'react-redux'

const Landing = () => {
  const token = useSelector((state) => state.user.token)

  return (
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
            <span id='bg-item-name'>GRAMO</span>
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
          <span className='side-item-name'>Acro Guitar</span>
          <span className='side-item-price'>Rs. 1350</span>
        </div>
        <div className='side-item'>
          <img src={itemThree} alt='Item Three' />
          <span className='side-item-name'>Ceramic Vase</span>
          <span className='side-item-price'>Rs. 1350</span>
        </div>
      </div>
    </div>
  )
}

export default Landing
