import { AttachmentOutlined, DisabledByDefaultTwoTone } from '@mui/icons-material'
import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import Button from '../../components/Button'
import DropdownMenu from '../../components/DropdownMenu'
import NumberInput from '../../components/NumberInput'
import TextArea from '../../components/TextArea'
import HelpTip from '../../components/Tip'
import Footer from '../Footer/Footer'
import jwt_decode from "jwt-decode"
import InnerHeader from '../InnerHeader/InnerHeader'
import './Bargain.css'
import { postRequest } from '../../redux/product/product.action'
import ImageUploadService from '../../components/ImageUploadService'

const PostRequest = () => {
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')
  const [highestBudget, setHighestBudget] = useState(0)
  const [category, setCategory] = useState('')

  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)

  const postRequestHelper = () => {
    const buyerID = jwt_decode(token)._id

    if (img.length < 1) {
      toast.error('Image required')
      return
    }
    if (description.length < 1) {
      toast.error('Description required')
      return
    }

    if (highestBudget.length < 1) {
      toast.error('Budget required')
      return
    }
    if (category.length < 1) {
      toast.error('Category required')
      return
    }

    const body = {
      buyerID: buyerID,
      description: description,
      img: img,
      highestBudget: highestBudget,
      category: category
    }

    console.log(body)
    dispatch(postRequest(token, body))
  }
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
            <TextArea placeholder={"I'm looking for"} value={description} onChange={(e) => setDescription(e.target.value)} />
            <ImageUploadService onUpload={(url) => setImg(url)} />
            <p className='form-label mt-3'>Choose a category:</p>
            <DropdownMenu title='Select...' options={['Antique', 'Handmade']} onClick={(e) => setCategory(e)} />
            <p className='form-label mt-3'>What is your highest budget ?</p>
            <NumberInput reverse={true} onChange={(e) => setHighestBudget(e.target.value)} />
            <div className='justify-content-end'>
              <Button text='Submit Request' onClick={postRequestHelper} />
            </div>
          </Form>
        </Container>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default PostRequest
