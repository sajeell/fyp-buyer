import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import InnerHeader from '../InnerHeader/InnerHeader'
import './Bargain.css'

const PostRequest = () => {
  return (
    <div className='postrequest-wrapper'>
      <div>
        <InnerHeader />
        <Container>
          <div className='breadcrumbs'>
            <a href='/landing' className='breadcrumbs-link'>
              home
            </a>{' '}
            <span>{'>'}</span> <span>post a request</span>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default PostRequest
