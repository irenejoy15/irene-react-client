import React from 'react'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo } from '../components';

const Register = () => {
  return <Wrapper>
  <form className='form'>
    <Logo/>
    <h4>Register</h4>
    <div className="form-row">
      <label htmlFor="name" className='form-label'>
        name
      </label>
      <input type="text" id="name" name="name" className='form-input' defaultValue="IRENE" />
      <button type='submit' className='btn btn-block'>
        SUBMIT
      </button>

      <p>
        Already a Member
        <Link to='/login' className='member-btn'>
          Login
        </Link>
      </p>
    </div>
  </form>
  </Wrapper>
}

export default Register
