import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import InnerHeader from '../InnerHeader/InnerHeader'

import './Bargain.css'
import '../../components/Components.css'

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
        <Container className='mt-4'>
          <h4 className='page-heading'>What Product Are You Looking For?</h4>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default PostRequest
