import '../Product.css'

import userRoundImage from '../img/userRoundImage.png'
import orangeStar from '../img/orangeStar.svg'
import { Container } from 'react-bootstrap'

const ReviewTab = () => {
  return (
    <Container>
      <div className='reviewtab-wrapper'>
        <div className='reviewtab-review'>
          <div className='reviewtab-row-1'>
            <img
              src={userRoundImage}
              alt='User Avatar'
              className='reviewtab-img'
            />
            <span className='reviewtab-name'>Joan Perkins</span>
            <div className='stars-wrapper'>
              <div className='stars'>
                <img src={orangeStar} alt='Review Orange Star' />
                <img src={orangeStar} alt='Review Orange Star' />
                <img src={orangeStar} alt='Review Orange Star' />
                <img src={orangeStar} alt='Review Orange Star' />
                <img src={orangeStar} alt='Review Orange Star' />
              </div>
              <div className='review-text'>
                <span>5.0/5</span>
              </div>
            </div>
          </div>
          <div className='reviewtab-review-content'>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ReviewTab
