import '../Product.css'

import userRoundImage from '../img/userRoundImage.png'
import orangeStar from '../img/orangeStar.svg'

const ReviewTab = () => {
  return (
    <div className='reviewtab-wrapper'>
      <div className='reviewtab-review'>
        <img src={userRoundImage} alt='User Avatar' className='reviewtab-img' />
        <div className='reviewtab-review-content'>
          <span className='reviewtab-name'>Joan Perkins</span>
          <div className='reviewtab-stars-wrapper'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className='stars' style={{ marginRight: 10 }}>
                <img src={orangeStar} alt='Review Orange Star' />
                <img src={orangeStar} alt='Review Orange Star' />
                <img src={orangeStar} alt='Review Orange Star' />
                <img src={orangeStar} alt='Review Orange Star' />
                <img src={orangeStar} alt='Review Orange Star' />
              </div>
              <div className='review-text'>
                <span>5.0</span>
              </div>
            </div>
            <div className='review-time'>
              <span>1 day ago</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewTab
