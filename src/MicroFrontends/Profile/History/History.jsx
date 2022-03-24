import { Container, Table } from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import InnerHeader from '../../InnerHeader/InnerHeader'
import ProfileSidebar from '../Sidebar/ProfileSidebar'
import './History.css'

const History = () => {
  return (
    <div className='history-wrapper'>
      <Container>
        <InnerHeader />
        <div className='page-top'>
          <div className='breadcrumbs'>
            <a href='/landing' className='breadcrumbs-link'>
              home
            </a>{' '}
            <span>{'>'}</span> <span>history</span>{' '}
          </div>
          <p className='page-subtitle'>HISTORY</p>
        </div>
      </Container>
      <hr />
      <Container>
        <div className='history-container'>
          <ProfileSidebar />
          <div className='history-content'>
            <p className='page-subtitle'>ORDER HISTORY</p>
            <Table
              responsive
              style={{
                minWidth: '56.5vw',
                maxWidth: '56.5vw',
              }}
            >
              <thead>
                <tr>
                  <th>ORDER</th>
                  <th>DATE</th>
                  <th>PAYMENT STATUS</th>
                  <th>FULFILLMENT STATUS</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='history-orderid'>#1234455535343</td>
                  <td>June 22, 2022</td>
                  <td>Pending</td>
                  <td>Fulfilled</td>
                  <td>PKR 1,470</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default History
