import React from 'react'
import { Form, redirect, useNavigation, Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow,Logo } from '../components';
import customFetch from '../utils/customFetch';

export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try{
    await customFetch.post('/auth/register',data);
    return redirect('/login');
  }catch(error){
    console.log(error);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting'
  return <Wrapper>
  <Form method='post' className='form'>
    <Logo/>
    <h4>Register</h4>
    
    <FormRow type="text" name="name" labelText='First Name' defaultValue='irene'/>
    <FormRow type="text" name="lastName" labelText='Last Name' defaultValue='joy'/>
    <FormRow type="text" name="location" labelText='Location'  defaultValue='earth'/>
    <FormRow type="email" name="email" labelText='Email'  defaultValue='irene@gmail.com'/>
    <FormRow type="password" name="password" labelText='Password' defaultValue='irene143143'/>

    <button type='submit' className='btn btn-block' disabled={isSubmitting}>
      {isSubmitting ? 'submitting...':'submit'}
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
