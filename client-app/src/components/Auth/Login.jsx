import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import "./styles/login.scss";
import Backdrop from "../shared/Navbar/Backdrop/Backdrop";
import Register from "./Register";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div style={{ zIndex: props.zIndex }} className='log-in-form-container'>
      <div className='log-in-form-container-content'>
        <div className='form-title-description-container'>
          <div className='login-title'>
            <h6 className='form-title'>Kyqu</h6>
            <CgClose onClick={props.click} />
          </div>
        </div>
        <form className='log-in-form' onSubmit={handleSubmit}>
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
          Dont have an account ?
          <Link onClick={props.setRegisterModal}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
