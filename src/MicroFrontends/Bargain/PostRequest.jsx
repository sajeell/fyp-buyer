import { Container, Form } from 'react-bootstrap'
import { AttachmentOutlined } from '@mui/icons-material'
import Footer from '../Footer/Footer'
import TextArea from '../../components/TextArea'
import InnerHeader from '../InnerHeader/InnerHeader'

import './Bargain.css'
import Button from '../../components/Button'
import DropdownMenu from '../../components/DropdownMenu'
import NumberInput from '../../components/NumberInput'
import HelpTip from '../../components/Tip'

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
              detailed as possible: <HelpTip />
            </p>
            <TextArea placeholder={"I'm looking for"} />
            <Button text='Attach Images' icon={<AttachmentOutlined />} />
            <p className='form-label mt-3'>Choose a category:</p>
            <DropdownMenu title='Select...' options={['Antique', 'Handmade']} />
            <p className='form-label mt-3'>
              What is your budget amount right now ?
            </p>
            <NumberInput reverse={false} />
            <p className='form-label mt-3'>What is your highest budget ?</p>
            <NumberInput reverse={true} />
            <p className='form-label mt-3'>What amount satisfies you well ?</p>
            <NumberInput reverse={false} />
            <div className='justify-content-end'>
              <Button text='Submit Request' />
            </div>
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default PostRequest
