import React, { useState } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { FooterData } from "./data";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

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

const Footer = (props) => {
  return (
    <div className='shared-footer'>
      <div className='row1'>
        <div className='col1'>
          <div className='logo-container'>
            <div className='logo'>Othman Mall</div>
          </div>
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

        <div className='main-row'>
          {FooterData.map((props, idx) => {
            return (
              <div className='footer-list' key={idx}>
                <h6>{props.category}</h6>
                <div className='links' key={idx}>
                  {props.links.map((l, i) => {
                    return (
                      <Link key={i} to={l.to} className='footer-item'>
                        {l.link}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className='last-row'>
          <div className='copyright'>
            <p>Copyright © 2023 othmanmall.com | All rights reserved </p>
          </div>
          <div className='select-container'>
            <p>
              <HiOutlineMail /> loremipsum@email.com
            </p>
            {/* <SelectLanguage
            setLanguage={props.setLanguage}
            language={props.language}
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
