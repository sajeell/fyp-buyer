import { toast, ToastContainer } from 'react-toastify'
import cloudinaryConfig from './CloudinaryKey'
import './ImageUploadService.css'

const ImageUploadService = () => {
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: cloudinaryConfig.cloud_name,
      uploadPreset: 'ml_default',
    },
    (error, result) => {
      if (result && result.event === 'success') {
        toast.success(result.info.path)
        return
      }
      if (error) {
        toast.error(error.statusText)
      }
    },
  )

  const showWidget = () => {
    widget.open()
  }

  return (
    <div className='imageuploadservice-wrapper'>
      <h1 onClick={showWidget} style={{ cursor: 'pointer' }}>
        Upload Photo
      </h1>
      <ToastContainer />
    </div>
  )
}

export default ImageUploadService
