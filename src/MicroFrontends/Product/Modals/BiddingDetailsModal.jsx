import './Modals.css'

const BiddingDetailsModal = (props) => {
  return (
    <div className='biddingmodal-wrapper'>
      <span className='modal-cross' onClick={() => props.onClose()}>
        X
      </span>
      <div className='biddingmodal-content-wrapper'>
        <h2>Bidding</h2>
        <p>The better you enter the rate, the more you have chances to win</p>

        <div className='modalinput-wrapper'>
          <span className='modalinput-label'>Minimum Price:</span>
          <input placeholder='2500' disabled className='modaldisabled-input' />
        </div>

        <div className='modalinput-wrapper'>
          <span className='modalinput-label'>Increment Price:</span>
          <input placeholder='25' disabled className='modaldisabled-input' />
        </div>

        <div className='modalinput-wrapper'>
          <span className='modalinput-label'>Minimum Price:</span>
          <input
            type='number'
            placeholder='3200'
            className='modal-input'
            min={0}
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

        <div className='button'>
          <span>BID</span>
        </div>
      </div>
    </div>
  )
}

export default BiddingDetailsModal
