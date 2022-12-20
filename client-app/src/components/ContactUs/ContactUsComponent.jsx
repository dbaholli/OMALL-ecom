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
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact us submitted");
  };
  return (
    <div className='contact-component'>
      {/* <h1 className='header-text contact-header'>Na kontakto</h1> */}
      <div className="contact-map">
        
      </div>
      <div className='contactform-container'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='contact-name-inputs'>
            <div className='contactname-container'>
              <label htmlFor='first-name'>
                <p>First Name</p>
              </label>
              <div className='contact-input-container'>
                <div className='contact-input'>
                  <label htmlFor='first-name'>
                    <BsPerson />
                  </label>
                  <input
                    type='text'
                    id='first-name'
                    placeholder='Enter your first name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='contact-input-container'>
              <label htmlFor='last-name'>
                <p>Lastname</p>
              </label>
              <div className='contact-input'>
                <label htmlFor='last-name'>
                  <BsPerson />
                </label>
                <input
                  type='text'
                  id='last-name'
                  placeholder='Enter your last name'
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='contact-input-container'>
            <label htmlFor='email'>
              <p>Email</p>
            </label>
            <div className='contact-input'>
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
          <div className='contact-input-container'>
            <label htmlFor='mobile'>
              <p>Mobile Number</p>
            </label>
            <div className='contact-input'>
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
          <div className='contact-input-container'>
            <label htmlFor='mobile'>
              <p>Message</p>
            </label>
            <div className='contact-input'>
              <label htmlFor='email'>
                <AiOutlineMessage />
              </label>
              <input
                id='message'
                type='text'
                placeholder='Enter message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
};

export default ContactUsComponent;
