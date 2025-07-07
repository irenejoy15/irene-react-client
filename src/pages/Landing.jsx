import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
  <Wrapper>
    <nav> 
      <img src={logo} alt="jobify" className='logo'/>
    </nav>
    <div className="container page">
      <div className="info">
        <h1>job <span>tracking</span> app</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <Link to="/register" className="btn register-link">
          Register
        </Link>
        <Link to="/login" className="btn">
          Login / Demo User
        </Link>
      </div>
       <img src={main} alt='JOB HUNT' className='img main-img'/>
    </div>
  </Wrapper>
  )
}

export default Landing
