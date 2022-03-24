import { Container, Table } from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import InnerHeader from '../../InnerHeader/InnerHeader'
import ProfileSidebar from '../Sidebar/ProfileSidebar'
import './Details.css'

const Details = () => {
  return (
    <div className='details-wrapper'>
      <Container>
        <InnerHeader />
        <div className='page-top'>
          <div className='breadcrumbs'>
            <a href='/landing' className='breadcrumbs-link'>
              home
            </a>{' '}
            <span>{'>'}</span> <span>details</span>{' '}
          </div>
          <p className='page-subtitle'>MY PROFILE</p>
        </div>
      </Container>
      <hr />
      <Container>
        <div className='details-container'>
          <ProfileSidebar />
          <div className='details-content'>
            <p className='page-subtitle'>DETAILS</p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Details
