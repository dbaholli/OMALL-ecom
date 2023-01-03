import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import "./styles/login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await axios
      .post("http://127.0.0.1:8000/token/", {
        username: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", response.data.access);
        navigate("/llogaria");
      })
      .catch((error) => {
        console.log("handleLogin error: ", error);
      });
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
        <form className='log-in-form' onSubmit={handleLogin}>
          <div className='login-input-container'>
            <label htmlFor='name'>
              <p>Email</p>
            </label>
            <div className='login-input'>
              <label htmlFor='name'>
                <AiOutlineMail />
              </label>
              <input
                id='name'
                type='name'
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
