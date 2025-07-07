import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';
const Error = () => {
  const error = useRouteError();
  if(error.status === 404){
    return <Wrapper>
      <div>
        <img src={img} alt="Not Found" />
        <h3>Ohh! page not found</h3>
        <p>We Can't Seem to find the page you are looking for</p>
        <Link to='/dashboard'>BACK HOME</Link>
      </div>
    </Wrapper>
  }
  return (
    <Wrapper>
      <div>
        <h3>SOMETHING WEND WRONG</h3>
      </div>
    </Wrapper>
  );
}

export default Error
