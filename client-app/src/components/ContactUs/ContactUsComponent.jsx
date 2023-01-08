import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import "./styles/_contact-component.scss";

const ContactUsComponent = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact us submitted");
    // clear states when request 200 ok
  };
  return (
    <div className='contact-component'>
      <div className='contact-map'>
        <h1>Lokacioni jone</h1>
        <iframe
          width='600'
          height='450'
          loading='lazy'
          style={{ border: "none" }}
          allowFullScreen
          src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJR8PpzBifVBMRWNaUBYCD3pk&key=AIzaSyBjBVR3lLPn8iDQ7SpC92FO4HftXQyOMeg'
        ></iframe>
      </div>
      <div className='contactform-container'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='contact-name-inputs'>
            <div className='contactname-container'>
              <label htmlFor='first-name'>
                <p>Emri dhe Mbiemri</p>
              </label>
              <div className='contact-input-container'>
                <div className='contact-input'>
                  <label htmlFor='fullname'>
                    <BsPerson />
                  </label>
                  <input
                    required
                    type='text'
                    id='fullname'
                    placeholder='Shkruani emrin dhe mbiemrin tuaj'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='contact-input-container'>
            <label htmlFor='email'>
              <p>Email adresa juaj</p>
            </label>
            <div className='contact-input'>
              <label htmlFor='email'>
                <AiOutlineMail />
              </label>
              <input
                required
                id='email'
                type='email'
                placeholder='Shkruani email adresen tuaj'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='contact-input-container'>
            <label htmlFor='mobile'>
              <p>Numri juaj kontaktues</p>
            </label>
            <div className='contact-input'>
              <label htmlFor='email'>
                <AiOutlinePhone />
              </label>
              <input
                required
                id='number'
                type='tel'
                placeholder='Shkruani numrin tuaj mobil'
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          </div>
          <div className='contact-input-container'>
            <label htmlFor='mobile'>
              <p>Mesazhi</p>
            </label>
            <div className='contact-input'>
              <label htmlFor='email'>
                <AiOutlineMessage />
              </label>
              <textarea
                required
                id='message'
                type='text'
                placeholder='Shkruani mesazhin tuaj'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <input type='submit' value='DERGO MESAZHIN' />
        </form>
      </div>
    </div>
  );
};

export default ContactUsComponent;
