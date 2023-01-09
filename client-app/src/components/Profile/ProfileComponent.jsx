import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import "./styles/_profile-component.scss";
import { useEffect } from "react";

const user = localStorage.getItem("user");

const ProfileComponent = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cityDropdown, setCityDropdown] = useState([]);
  const [stateDropdown, setStateDropdown] = useState([]);
  const [validateError, setValidateError] = useState(false);

  const [user, setUser] = useState({});

  async function getUser() {
    const data = axios.get("http://127.0.0.1:8000/profile/2").then((data) => {
      console.log(data.data);
      setUser(data.data);
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();

    if (
      !name ||
      !lastName ||
      !email ||
      !address ||
      !phone ||
      !password ||
      !cityDropdown ||
      !stateDropdown
    ) {
      console.log("validate");
      setValidateError(true);
    }
  };

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
    <div className='component-layout profile-component'>
      <div className='profile-component-left'>
        <h1 className='profile-header header-text'>
          Te dhenat e profilit tuaj
        </h1>
        <h1 className='profile-header header-text'>{JSON.stringify(user.first_name)}</h1>
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
                  value={name}
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
            <label htmlFor='password'>
              <p>Fjalekalimi</p>
            </label>
            <div className='profileupdate-input'>
              <BiLock />
              <input
                id='password'
                type='password'
                placeholder='Shkruaj fjalekalimin tuaj'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                type='number'
                placeholder='Shkruani numrin e telefonit tuaj'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <p>Qyteti</p>
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

          <p>Shteti</p>
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

          {validateError ? (
            <p className='error-text'>Ju lutem plotesoni te gjitha fushat!</p>
          ) : null}

          <input type='submit' value='Ruaj ndryshimet' />
        </form>
      </div>
      <div className='profile-component-right'>
        <h1 className='profile-header header-text'>Porosite e juaja</h1>
      </div>
    </div>
  );
};

export default ProfileComponent;
