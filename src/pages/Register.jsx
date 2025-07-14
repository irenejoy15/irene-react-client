import React from 'react'
import { Form, redirect, useNavigation, Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow,Logo } from '../components';

export const action = async (data) => {
  console.log(data);
  return null
};

const Register = () => {
  return <Wrapper>
  <Form method='post' className='form'>
    <Logo/>
    <h4>Register</h4>
    
    <FormRow type="text" name="firstName" labelText='First Name' defaultValue='irene'/>
    <FormRow type="text" name="lastName" labelText='Last Name' defaultValue='joy'/>
    <FormRow type="text" name="location" labelText='Location'  defaultValue='earth'/>
    <FormRow type="email" name="email" labelText='Email'  defaultValue='irene@gmail.com'/>
    <FormRow type="password" name="password" labelText='Password' defaultValue='irene143143'/>

    <button type='submit' className='btn btn-block'>
      SUBMIT
    </button>

    <p>
      Already a Member
      <Link to='/login' className='member-btn'>
        Login
      </Link>
    </p>
  
  </Form>
  </Wrapper>
}

export default Register
