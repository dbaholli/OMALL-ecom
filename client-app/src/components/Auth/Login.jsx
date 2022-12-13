import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import "./styles/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='log-in-form-container'>
      <div className='log-in-form-container-content'>
        <div className='form-title-description-container'>
          <h6 className='form-title'>Login</h6>
          <p className='form-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            itaque?
          </p>
        </div>
        <form action='' className='log-in-form'>
          <div className='login-input-container'>
            <label htmlFor='email'>
              <p>Email</p>
            </label>
            <div className='login-input'>
              <label htmlFor='email'>
                <AiOutlineMail />
              </label>
              <input
                id='email'
                type='email'
                placeholder='Enter your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='login-input-container'>
            <label htmlFor='password'>
              <p>Password</p>
            </label>
            <div className='login-input'>
              <label htmlFor='password'>
                <BiLock />
              </label>
              <input
                id='password'
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='remember-me-login'>
            <input type='checkbox' id='remember-checkbox' />
            <label htmlFor='remember-checkbox'>Remember Me</label>
          </div>
          <input type='submit' value='Log In' />
        </form>
        <p className='dont-have-acc'>
          Dont have an account ? <Link to='/signup'>Register</Link>
        </p>
      </div>
      <div className='terms-privacy-contact'>
        <Link>Terms of Policy</Link>
        <Link>Privacy Policy</Link>
        <Link>Contact Us</Link>
      </div>
    </div>
  );
};

export default Login;
