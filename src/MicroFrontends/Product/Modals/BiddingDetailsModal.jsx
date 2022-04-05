import { ToastContainer } from 'react-bootstrap'
import './Modals.css'

const BiddingDetailsModal = (props) => {
  return (
    <div className='biddingmodal-wrapper'>
      <ToastContainer />
      <span className='modal-cross' onClick={() => props.onClose()}>
        X
      </span>
      <div className='biddingmodal-content-wrapper'>
        <h2>Bidding</h2>
        <p>The better you enter the rate, the more you have chances to win</p>

        <div className='modalinput-wrapper'>
          <span className='modalinput-label'>Minimum Price:</span>
          <input
            placeholder={props.minPrice}
            disabled
            className='modaldisabled-input'
          />
        </div>

        <div className='modalinput-wrapper'>
          <span className='modalinput-label'>Increment Price:</span>
          <input
            placeholder={props.incrementPrice}
            disabled
            className='modaldisabled-input'
          />
        </div>

        <div className='modalinput-wrapper'>
          <span className='modalinput-label'>Maximum Price:</span>
          <input
            type='number'
            placeholder='3200'
            className='modal-input'
            min={props.minPrice}
            onChange={props.onChange}
            value={props.maximumPrice}
            required
          />
        </div>

        <div className='modalinput-wrapper'>
          <span className='modalinput-label'>Email:</span>
          <input
            type='email'
            placeholder='abc@abc.com'
            className='modal-input'
            onChange={props.onEmailChange}
            value={props.email}
            required
          />
        </div>

        <div className='modalinput-checks-wrapper'>
          <div className='modalinput-check-wrapper'>
            <input type='checkbox' />
            <span>Notify me if there is any issue in the bidding</span>
          </div>

          <div className='modalinput-check-wrapper'>
            <input type='checkbox' />
            <span>Notify me if bidding happens again due to any reason</span>
          </div>
        </div>

        <button className='button' onClick={() => props.onClick()}>
          BID
        </button>
      </div>
    </div>
  )
}

export default BiddingDetailsModal
