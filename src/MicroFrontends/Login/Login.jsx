import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Login.css'

import illustration from './img/car-illustration.png'
import background from './img/illustration-bg.png'
import emailIcon from './img/email.png'
import lock from './img/lock.png'
import { buyerLogin } from '../../redux/user/user.action'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)

  const onSubmitForm = async (e) => {
    e.preventDefault()
    const body = { username: email, password }
    dispatch(buyerLogin(body))
    console.log(token)
  }
  return (
    <div className='login-wrapper'>
      <div className='col'>
        <div className='row'>
          <div className='title'>SchooLync</div>
          <div className='sub-title'>The Transport Company</div>
        </div>
        <div className='row'>
          <img
            src={illustration}
            alt='Illustration composed of a car and trees in gray color'
            id='illustration'
          />
          <img
            src={background}
            id='background'
            alt='Simple amoeba shaped background in blue shade'
          />
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <span className='headline'>Sign In</span>
        </div>
        <div className='row'>
          <div className='input-row'>
            <img src={emailIcon} alt='Mail envelope' />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Username'
              required
              value={email}
              onChange={(e) => {
                e.preventDefault()
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className='input-row'>
            <img src={lock} alt='Lock' id='lock' />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              required
              value={password}
              onChange={(e) => {
                e.preventDefault()
                setPassword(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='row'>
          <span>Forgot Password?</span>
        </div>
        <div className='button' onClick={onSubmitForm}>
          Sign In
        </div>
      </div>
    </div>
  )
}

export default Login