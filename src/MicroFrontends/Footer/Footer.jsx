import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-cols'>
        <div className='col'>
          <span className='col-title'>BARGANTTIC</span>
          <p className='col-content'>
            Find best antiques and best handicrafts in the town
          </p>
          <p className='col-content'>Call Us: 9075 1234 5678</p>
        </div>
        <div className='col'>
          <span className='col-title'>Useful Links</span>
          <p className='col-content'>Product Categories</p>
          <p className='col-content'>Affiliate Support</p>
          <p className='col-content'>Shipping & Returns</p>
        </div>
        <div className='col'>
          <span className='col-title'>Information</span>
          <p className='col-content'>About Us</p>
          <p className='col-content'>Privacy & Policy</p>
          <p className='col-content'>Join Us</p>
        </div>
        <div className='col'>
          <span className='col-title'>Support</span>
          <p className='col-content'>FAQs</p>
          <p className='col-content'>Support Center</p>
          <p className='col-content'>Contact Us</p>
        </div>
        <div className='col'>
          <span className='col-title'>Social Media</span>
          <p className='col-content'>Facebook</p>
          <p className='col-content'>Instagram</p>
          <p className='col-content'>Twitter</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p className='col-content'>Barganttic, 2021 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
