import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { login } from "../../actions/userAction";
import "./styles/login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateError, setValidateError] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email && !password && error) {
      console.log("validate");
      setValidateError(true);
    } else {
      dispatch(login(email, password));
    }
  };

  if (userInfo) {
    props.setLoginModal();
  }

  return (
    <div style={{ zIndex: props.zIndex }} className='log-in-form-container'>
      {loading ? (
        <h1 className='header-text'>Loading...</h1>
      ) : (
        <div className='log-in-form-container-content'>
          <div className='login-title'>
            <h6 className='form-title'>Kyqu</h6>
            <CgClose onClick={props.click} />
          </div>
          <form className='log-in-form' onSubmit={handleLogin}>
            <div className='login-input-container'>
              <label htmlFor='name'>
                <p>Email</p>
              </label>
              <div className='login-input'>
                <label htmlFor='email'>
                  <AiOutlineMail />
                </label>
                <input
                  id='email'
                  type='name'
                  placeholder='Shkruaj email adresen tuaj'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className='login-input-container'>
              <label htmlFor='password'>
                <p>Fjalekalimi</p>
              </label>
              <div className='login-input'>
                <label htmlFor='password'>
                  <BiLock />
                </label>
                <input
                  id='password'
                  type='password'
                  placeholder='Shkruaj fjalekalimin tuaj'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className='remember-me-login'>
              <input type='checkbox' id='remember-checkbox' />
              <label htmlFor='remember-checkbox'>Remember Me</label>
            </div>

            {validateError ? (
              <p className='error-text'>Ju lutem plotesoni te gjitha fushat!</p>
            ) : null}

            <input type='submit' value='Kyqu' />
          </form>
          <p className='dont-have-acc'>
            Nuk keni llogari ?
            <Link onClick={props.setRegisterModal}> Regjistrohu</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
