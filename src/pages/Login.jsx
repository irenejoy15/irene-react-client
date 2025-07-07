import React from 'react'
import { Link } from 'react-router-dom'
import { FormRow,Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
const Login = () => {
  return <Wrapper>
    <form className='form'>
      <Logo/>
      <h4>login</h4>
      <FormRow type="email" name="email" defaultValue="irene@gmail.com"/>
      <FormRow type="password" name="password" defaultValue="irene143143"/>
      <button type='submit' className='btn btn-block'>
        SUBMIT
      </button>
      <button type='button' className='btn btn-block'>
        EXPLORE THE APP
      </button>
      <p>
       Not a Member Yet?
        <Link to='/register' className='member-btn'>
          Register
        </Link>
      </p>
    </form>
  </Wrapper>
}

export default Login
