import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { register } from "../../actions/userAction";
import "./styles/register.scss";

const Register = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cityDropdown, setCityDropdown] = useState([]);
  const [stateDropdown, setStateDropdown] = useState([]);
  const [validateError, setValidateError] = useState(false);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const handleRegister = async (event) => {
    event.preventDefault();

    if (
      !name ||
      !lastName ||
      !email ||
      !address ||
      !postalCode ||
      !phone ||
      !password ||
      !cityDropdown ||
      !stateDropdown
    ) {
      console.log("validate");
      setValidateError(true);
    } else {
      dispatch(
        register(
          name,
          lastName,
          email,
          address,
          postalCode,
          cityDropdown,
          stateDropdown,
          phone,
          password
        )
      );
    }
  };

  if (userInfo) {
    props.setRegisterModal();
  }

  const [cities] = useState([
    {
      label: "Prishtine",
      value: "pr",
    },
    {
      label: "Peja",
      value: "pj",
    },
    {
      label: "Ferizaj",
      value: "fr",
    },
  ]);

  const [states] = useState([
    {
      label: "Kosova",
      value: "ks",
    },
    {
      label: "Shqiperia",
      value: "al",
    },
    {
      label: "Maqedonia",
      value: "mk",
    },
  ]);

  return (
    <div style={{ zIndex: props.zIndex }} className='register-form-container'>
      <div className='register-form-container-content'>
        <div className='register-title'>
          <h6 className='form-title'>Regjistrohu</h6>
          <CgClose onClick={props.click} />
        </div>
        <form className='register-form' onSubmit={handleRegister}>
          <div className='inline-inputs'>
            <div className='register-input-container'>
              <label htmlFor='name'>
                <p>Emri</p>
              </label>
              <div className='register-input'>
                <AiOutlineProfile />
                <input
                  id='name'
                  type='text'
                  placeholder='Shkruaj emrin tuaj'
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className='register-input-container'>
              <label htmlFor='lastname'>
                <p>Mbiemri</p>
              </label>
              <div className='register-input'>
                <AiOutlineProfile />
                <input
                  id='lastname'
                  type='text'
                  placeholder='Shkruaj mbiemrin tuaj'
                  defaultValue={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className='register-input-container'>
            <label htmlFor='email'>
              <p>E-maili</p>
            </label>
            <div className='register-input'>
              <AiOutlineMail />
              <input
                id='email'
                type='text'
                placeholder='Shkruaj email adresen tuaj'
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='register-input-container'>
            <label htmlFor='adresa'>
              <p>Adresa</p>
            </label>
            <div className='register-input'>
              <AiOutlineProfile />
              <input
                id='adress'
                type='text'
                placeholder='Shkruaj adresen tuaj'
                defaultValue={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className='register-input-container'>
            <label htmlFor='kodi-postal'>
              <p>Kodi Postal</p>
            </label>
            <div className='register-input'>
              <AiOutlineMail />
              <input
                id='postal'
                type='text'
                placeholder='Shkruaj kodin postal'
                defaultValue={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>
          <div className='register-input-container'>
            <label htmlFor='password'>
              <p>Fjalekalimi</p>
            </label>
            <div className='register-input'>
              <BiLock />
              <input
                id='password'
                type='password'
                placeholder='Shkruaj fjalekalimin tuaj'
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='register-input-container'>
            <label htmlFor='email'>
              <p>Numri Telefonit</p>
            </label>
            <div className='register-input'>
              <AiOutlinePhone />
              <input
                id='number'
                type='text'
                placeholder='Shkruani numrin e telefonit tuaj'
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className='select-input'>
            <select
              defaultValue={"default"}
              onChange={(e) => setStateDropdown(e.target.value)}
            >
              <option value={"default"} disabled>
                Shteti
              </option>
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>

          <div className='select-input'>
            <select
              defaultValue={"default"}
              onChange={(e) => setCityDropdown(e.target.value)}
            >
              <option value={"default"} disabled>
                Qyteti
              </option>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>

          <div className='remember-me-login'>
            <input type='checkbox' id='remember-checkbox' />
            <label htmlFor='remember-checkbox'>I pranoj Kushtet</label>
          </div>

          {validateError ? (
            <p className='error-text'>Ju lutem plotesoni te gjitha fushat!</p>
          ) : null}

          <input type='submit' value='Regjistrohu' />
        </form>
        <p className='dont-have-acc'>
          Keni llogari ?<Link onClick={props.showLoginModal}> Kyqu</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
