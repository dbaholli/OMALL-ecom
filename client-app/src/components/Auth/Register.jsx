import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
<<<<<<< HEAD
=======
import Backdrop from "../shared/Navbar/Backdrop/Backdrop";
>>>>>>> 9b428a5 (Merge branch 'main' into feature/productdetails-frontend-15)

const Register = (props) => {
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
<<<<<<< HEAD
            <h6 className='form-title'>Regjistrohu</h6>
            <CgClose onClick={props.click} />
          </div>
=======
            <h6 className='form-title'>Register</h6>
            <CgClose onClick={props.click} />
          </div>
          <p className='form-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
>>>>>>> 9b428a5 (Merge branch 'main' into feature/productdetails-frontend-15)
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
            <label htmlFor='email'>
              <p>Username</p>
            </label>
            <div className='login-input'>
              <label htmlFor='email'>
                <AiOutlineProfile />
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
            <label htmlFor='email'>
              <p>Mobile Number</p>
            </label>
            <div className='login-input'>
              <label htmlFor='email'>
                <AiOutlinePhone />
              </label>
              <input
                id='number'
                type='number'
                placeholder='Enter your mobile number'
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
          <input type='submit' value='Register' />
        </form>
        <p className='dont-have-acc'>
          Already have an account ? <Link onClick={props.showLoginModal}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
