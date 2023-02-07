import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import { saveShippingAddress } from "../../actions/cartActions";
import "./styles/_shipping-component.scss";

const ShippingComponent = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState(shippingAddress.address);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [cityDropdown, setCityDropdown] = useState(
    shippingAddress.cityDropdown
  );
  const [stateDropdown, setStateDropdown] = useState(
    shippingAddress.stateDropdown
  );
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
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

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOrderDetails = (e) => {
    e.preventDefault();
    console.log("handle order details function");
    if (!address && !phone && !cityDropdown && !postalCode && !stateDropdown) {
      console.log("validate");
      setValidateError(true);
    }
    dispatch(
      saveShippingAddress({
        address,
        cityDropdown,
        postalCode,
        stateDropdown,
        phone,
      })
    );
    // navigate("/pagesaa");
  };

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className='component-layout shipping-component'>
      <div className='shipping-left'>
        <h1 className='header-text shipping-header'>Faturim & Dërgim</h1>
        <form className='order-details-form' onSubmit={handleOrderDetails}>
          <div className='inline-inputs'>
            <div className='orderdetails-input-container'>
              <label htmlFor='name'>
                <p>Emri</p>
              </label>
              <div className='orderdetails-input'>
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
            <div className='orderdetails-input-container'>
              <label htmlFor='lastname'>
                <p>Mbiemri</p>
              </label>
              <div className='orderdetails-input'>
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
          <div className='order-details-input-container'>
            <label htmlFor='kodipostal'>
              <p>Numri i Telefonit</p>
            </label>
            <div className='order-details-input'>
              <AiOutlinePhone />
              <input
                id='phone'
                type='phone'
                placeholder='Shkruaj numrin e telefonit tuaj'
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
      <div className='shipping-right'>
        <h1 className='header-text shipping-header'>Porosia juaj</h1>
        <div className='payment-products-container'>
          {cartItems.map((item) => (
            <div key={item.id} className='payment-products-rows'>
              <img
                src={`http://127.0.0.1:8000/${item.image[0].value?.image.original.src}`}
                alt='Othman'
                className='cartproduct-image'
                height='100px'
                width='125px'
              />
              <div className='product-final-details'>
                <p className='product-final-text paragraph-text'>
                  Produkti: {item.name}
                </p>
                <p className='product-final-text paragraph-text'>
                  Sasia: {item.qty}
                </p>
                <p className='product-final-text paragraph-text'>
                  Nentotali: €{item.price * item.qty}
                </p>
              </div>
            </div>
          ))}
          <p className='product-final-text paragraph-text'>Transporti: Falas</p>
          <p className='product-final-text paragraph-text'>
            Totali: €
            {cartItems.reduce(
              (finalPrice, item) => (finalPrice += item.price * item.qty),
              0
            )}
          </p>
        </div>
        <div className='payment-choices'>
          <p className='paragraph-text'>Menyra e pageses:</p>
          <select value={paymentMethod} onChange={handleChange}>
            <option value=''>Zgjedh menyren e pageses</option>
            <option value='Cash'>Cash</option>
            <option value='Kartele'>Kartele</option>
          </select>
          <div className='paragraph-text'>
            {paymentMethod && (
              <p className='paragraph-text'>
                Paguaj me: <span>{paymentMethod}</span>
              </p>
            )}
          </div>
          <div className='terms'>
            <input type='checkbox' id='remember-checkbox' />
            <p className='paragraph-text'>I pranoj Kushtet</p>
          </div>

          <button className='shared-button pay-btn'>Paguaj</button>
        </div>
      </div>
    </div>
  );
};

export default ShippingComponent;
