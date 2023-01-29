import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import "./styles/_shipping-component.scss";

const ShippingComponent = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState();
  const [cityDropdown, setCityDropdown] = useState([]);
  const [stateDropdown, setStateDropdown] = useState([]);
  const [message, setMessage] = useState("");
  const [validateError, setValidateError] = useState(false);
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

  const handleOrderDetails = (e) => {
    e.preventDefault();
    console.log("handle order details function");
    if (!email && !fullName && !message && !mobileNumber) {
      console.log("validate");
      setValidateError(true);
    }
  };

  return (
    <div className='component-layout shipping-component'>
      <h1 className='header-text'>Adresa e dorezimet te porosise</h1>
      <form className='order-details-form' onSubmit={handleOrderDetails}>
        <div className='order-details-input-container'>
          <label htmlFor='adresa'>
            <p>Adresa</p>
          </label>
          <div className='order-details-input'>
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
        <div className='order-details-input-container'>
          <label htmlFor='kodipostal'>
            <p>Kodi Postal</p>
          </label>
          <div className='order-details-input'>
            <AiOutlineMail />
            <input
              id='postal'
              type='text'
              placeholder='Shkruaj kodin postal tuaj'
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
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
        <div className='order-details-input'>
          <label htmlFor='message'>
            <p>Shënime porosie (opsionale)</p>
          </label>
          <textarea
            id='message'
            type='text'
            placeholder='Shkruani mesazhin tuaj'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {validateError ? (
          <p className='error-text'>Ju lutem plotesoni te gjitha fushat!</p>
        ) : null}

        <input type='submit' value='Ruaj ndryshimet' />
      </form>
    </div>
  );
};

export default ShippingComponent;
