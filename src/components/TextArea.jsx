import { Input } from 'reactstrap'
import './Components.css'

const TextArea = (props) => {
  return (
    <div className='textarea'>
      <Input
        type='textarea'
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TextArea
