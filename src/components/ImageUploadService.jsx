import { AttachmentOutlined } from '@mui/icons-material'
import { toast, ToastContainer } from 'react-toastify'
import Button from './Button'
import cloudinaryConfig from './CloudinaryKey'
import './ImageUploadService.css'

const ImageUploadService = (props) => {
    const widget = window.cloudinary.createUploadWidget(
        {
            cloudName: cloudinaryConfig.cloud_name,
            uploadPreset: 'ml_default',
        },
        (error, result) => {
            if (result && result.event === 'success') {
                props.onUpload(result.info.path)
                return
            }
            if (error) {
                toast.error(error.statusText)
            }
        }
    )

    const showWidget = () => {
        widget.open()
    }

    return (
        <div className='imageuploadservice-wrapper'>
            <Button
                text='Attach Images'
                icon={<AttachmentOutlined />}
                onClick={showWidget}
            />
            <ToastContainer />
        </div>
    )
}

export default ImageUploadService
