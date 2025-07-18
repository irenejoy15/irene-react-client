import { Link, Form, redirect, useNavigation, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import customFetch from '../utils/customFetch';
import sanctumFetch from '../utils/sanctum';
import { toast } from 'react-toastify';
import { useActionData } from 'react-router-dom';
import axios from "axios";


export const action = async ({ request }) => {
  
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: '' };
  if (data.password.length < 3) {
    errors.msg = 'password too short';
    return errors;
  }
  try {
    // START LARAVEL
    // await sanctumFetch.get();
    // await customFetch.post('/auth/login', data).then((response)=>{
    //   localStorage.setItem('user', JSON.stringify(response.data));
    // });
    // END LARAVEL
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
    // setTimeout(function() {
    //   // LARAVEL
    //   // window.location.replace('/dashboard');
      
    // }, 3000);
  } catch (error) {
    // toast.error(error?.response?.data?.msg);
    errors.msg = error.response.data.msg;
    return errors;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const errors = useActionData();
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>login</h4>
        {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <FormRow type='email' name='email' defaultValue='irenejoy15@gmail.com' />
        <FormRow type='password' name='password' defaultValue='irene143143' />
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
        <button type='button' className='btn btn-block'>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login
