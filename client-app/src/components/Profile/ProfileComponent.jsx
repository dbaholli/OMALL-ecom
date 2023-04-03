import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import jwt_decode from "jwt-decode";
import { getUserDetails, updateUserDetails } from "../../actions/userAction";
import { USER_UPDATE_RESET } from "../../constants/userConstants";
import "./styles/_profile-component.scss";
import MyOrders from "./MyOrders";

const ProfileComponent = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState(null);
  const [cityDropdown, setCityDropdown] = useState([]);
  const [stateDropdown, setStateDropdown] = useState([]);
  const [validateError, setValidateError] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      console.log("You need to login");
    } else {
      if (!user || !user.first_name || success) {
        dispatch({ type: USER_UPDATE_RESET });
        dispatch(getUserDetails(jwt_decode(userInfo.access).user_id));
      } else {
        setName(user.first_name);
        setLastName(user.last_name);
        setAddress(user.address);
        setPhone(user.phone_number);
        setEmail(user.email);
        setPostalCode(user.postal_code);
        setCityDropdown(user.city);
        setStateDropdown(user.state);
      }
    }
  }, [dispatch, userInfo, user, success]);

  const handleProfileUpdate = async (event) => {
    // event.preventDefault();
    dispatch(
      updateUserDetails(
        userInfo.access,
        jwt_decode(userInfo.access).user_id,
        name,
        lastName,
        email,
        address,
        postalCode,
        phone,
        cityDropdown,
        stateDropdown
      )
    );
  };

  const [cities] = useState([
    {
      label: "Prishtine",
      value: "Prishtine",
    },
    {
      label: "Peja",
      value: "Peja",
    },
    {
      label: "Ferizaj",
      value: "Ferizaj",
    },
  ]);

  const [states] = useState([
    {
      label: "Kosova",
      value: "Kosova",
    },
    {
      label: "Shqiperia",
      value: "Shqiperia",
    },
    {
      label: "Maqedonia",
      value: "Maqedonia",
    },
  ]);

  return (
    <div className='component-layout profile-component'>
      <div className='profile-component-left'>
        <h1 className='profile-header header-text'>
          Te dhenat e profilit tuaj
        </h1>
        <form className='profile-form' onSubmit={handleProfileUpdate}>
          <div className='inline-inputs'>
            <div className='profileupdate-input-container'>
              <label htmlFor='name'>
                <p>Emri</p>
              </label>
              <div className='profileupdate-input'>
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
            <div className='profileupdate-input-container'>
              <label htmlFor='lastname'>
                <p>Mbiemri</p>
              </label>
              <div className='profileupdate-input'>
                <AiOutlineProfile />
                <input
                  id='lastname'
                  type='text'
                  placeholder='Shkruaj mbiemrin tuaj'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='profileupdate-input-container'>
            <label htmlFor='adresa'>
              <p>Adresa</p>
            </label>
            <div className='profileupdate-input'>
              <AiOutlineProfile />
              <input
                id='adress'
                type='text'
                placeholder='Shkruaj adresen tuaj'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className='profileupdate-input-container'>
            <label htmlFor='adresa'>
              <p>Kodi Postal</p>
            </label>
            <div className='profileupdate-input'>
              <AiOutlineMail />
              <input
                id='postal'
                type='text'
                placeholder='Shkruaj kodin postal tuaj'
                defaultValue={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>
          <div className='profileupdate-input-container'>
            <label htmlFor='email'>
              <p>E-maili</p>
            </label>
            <div className='profileupdate-input'>
              <AiOutlineMail />
              <input
                id='email'
                type='text'
                placeholder='Shkruaj email adresen tuaj'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='profileupdate-input-container'>
            <label htmlFor='email'>
              <p>Numri i telefonit</p>
            </label>
            <div className='profileupdate-input'>
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
          <p>Qyteti</p>
          <div className='select-input'>
            <select
              value={cityDropdown}
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

          <p>Shteti</p>
          <div className='select-input'>
            <select
              value={stateDropdown}
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

          {validateError ? (
            <p className='error-text'>Ju lutem plotesoni te gjitha fushat!</p>
          ) : null}

          <input type='submit' value='Ruaj ndryshimet' />
        </form>
      </div>
      <div className='profile-component-right'>
        <h1 className='profile-header header-text'>Porosite e juaja</h1>
        <MyOrders />
      </div>
    </div>
  );
};

export default ProfileComponent;
