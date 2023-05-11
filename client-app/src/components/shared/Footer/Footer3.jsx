import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import "./footer3.scss";

const SocialMedia = [
  {
    to: "/",
    icon: <AiOutlineFacebook />,
  },
  {
    to: "/",
    icon: <AiOutlineInstagram />,
  },
  {
    to: "/",
    icon: <AiOutlineTwitter />,
  },
  {
    to: "/",
    icon: <AiOutlineYoutube />,
  },
];

const Footer3 = () => {
  return (
    <div className='shared-footer2'>
      <div className='row1'>
        <div className='main-row'>
          <div className='logo-container'>
            <div className='logo'>Othman Home</div>
          </div>

          <div className='footer-list'>
            <h6>Keni pyetje ?</h6>
            <div className='links'>
              <Link className='footer-item'>+383 49 325 154</Link>
              <Link className='footer-item'>info@othmanhome.com</Link>
              <Link className='footer-item'>Prishtine, Kosove</Link>
              <Link className='footer-item'>Prishtina Mall, Central Park</Link>
            </div>
          </div>
          <div className='footer-list'>
            <h6>Profili</h6>
            <div className='links'>
              <Link onClick={() => setShowModal()} className='footer-item'>
                Kyqu
              </Link>
              <Link className='footer-item'>Regjistrohu</Link>
            </div>
          </div>
          <div className='footer-list'>
            <h6>Sherbimi ndaj klientve</h6>
            <div className='links'>
              <Link to={`/profili`} className='footer-item'>
                Profili im
              </Link>
              <Link to={`/porosite`} className='footer-item'>
                Porosite
              </Link>
              <Link to={`/kontakto`} className='footer-item'>
                Kontakti
              </Link>
            </div>
          </div>
          <div className='footer-list'>
            <h6>Ndihma</h6>
            <div className='links'>
              <Link to={`/siguria`} className='footer-item'>
                Siguria dhe Privatesia
              </Link>
              <Link to={`/termat`} className='footer-item'>
                Termat dhe Kushtet
              </Link>
              <Link to={`/faq`} className='footer-item'>
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className='last-row'>
          <div className='copyright'>
            <p>Copyright © 2023 othmanhome.com | All rights reserved </p>
          </div>
          <div className='col2'>
            <div className='second'>
              {SocialMedia.map((props, i) => {
                return (
                  <div key={i}>
                    <Link to={props.to}>{props.icon}</Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='select-container'>
            <p>
              <HiOutlineMail /> info@othmanhome.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
