import { Button as ButtonBootstrap } from 'react-bootstrap'

import './Components.css'

const Button = (props) => {
  return (
    <div className='button-component mt-3'>
      <ButtonBootstrap className='page-button' color='#707070'>
        {props.text} {props.icon ? props.icon : ''}
      </ButtonBootstrap>
    </div>
  )
}

export default Button
