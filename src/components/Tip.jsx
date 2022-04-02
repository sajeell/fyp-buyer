import { useState } from 'react'
import Modal from 'react-modal'
import { HelpOutlineOutlined, LightbulbOutlined } from '@mui/icons-material'

import './Components.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 244,
    height: 260,
    background: '#ecfcff',
    paddingLeft: '1%',
    paddingRight: '1.5%',
    border: 'none',
    overflow: 'hidden',
  },
}

Modal.setAppElement(document.getElementById('root'))

const HelpTip = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <HelpOutlineOutlined
        fontSize='14'
        className='hover'
        onClick={openModal}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        onAfterClose={() => {}}
        style={customStyles}
        contentLabel='Tips'
      >
        <div className='tip-first-row'>
          <div className='tip-icon'>
            <LightbulbOutlined />
          </div>
          <div className='tip-heading' style={{ marginLeft: 10 }}>
            <span>Define In Detail</span>
          </div>
        </div>
        <div className='border-div'></div>
        <p className='tip-text'>
          Include all the necessary details needed to complete your request.
        </p>
        <div className='tip-heading'>
          <span>Define In Detail</span>
        </div>
        <p className='tip-text mt-2'>
          If you are looking for a guitar, you can specify it's string material,
          etc.
        </p>
      </Modal>
    </>
  )
}

export default HelpTip
