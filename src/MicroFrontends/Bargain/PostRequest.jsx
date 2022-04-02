import { Container, Form } from 'react-bootstrap'
import { AttachmentOutlined, HelpOutlineOutlined } from '@mui/icons-material'
import Footer from '../Footer/Footer'
import TextArea from '../../components/TextArea'
import InnerHeader from '../InnerHeader/InnerHeader'

import './Bargain.css'
import Button from '../../components/Button'
import DropdownMenu from '../../components/DropdownMenu'

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
          <h4 className='page-heading mb-4'>
            What Product Are You Looking For?
          </h4>
          <Form className='postrequest-form p-3 mb-5'>
            <p className='form-label pr-5'>
              Describe the product you're looking to purchase - please be as
              detailed as possible:{' '}
              <HelpOutlineOutlined fontSize='14' className='hover' />
            </p>
            <TextArea placeholder={"I'm looking for"} />
            <Button text='Attach Images' icon={<AttachmentOutlined />} />
            <p className='form-label mt-3'>Choose a category:</p>
            <DropdownMenu />
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default PostRequest
