import React from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import "./mobilenav.scss";

const MobileNav = (props) => {
  return (
    <div className={props.sidebarValue ? "mobilenav showed" : "mobilenav"}>
      <div>
        <div className='logo-group'>
          <Link to='/' className='logo' onClick={props.click}></Link>
          <button onClick={props.click}>
            <CgClose />
          </button>
        </div>
        <div className='links'>
          <Link
            to='/'
            className='nav-link inline home-link'
            onClick={props.click}
          >
            Home
          </Link>
          <Link
            to='/services-solutions'
            className='nav-link inline services-link'
            onClick={props.click}
          >
            Services and solutions
          </Link>
          <Link
            to='/why-us'
            className='nav-link inline why-us-link'
            onClick={props.click}
          >
            Why us?
          </Link>
          <Link
            to='/contact-us'
            className='nav-link inline contact-link'
            onClick={props.click}
          >
            Contact us
          </Link>
          <Link
            to='/careers'
            className='nav-link inline careers-link'
            onClick={props.click}
          >
            Careers
          </Link>
          <Link
            to='/about'
            className='nav-link inline about-link'
            onClick={props.click}
          >
            About
          </Link>
        </div>
      </div>
      <div className='bottom'>
        <p>info@giskos.com</p>
        <p x-ms-format-detection='none'>+383 49 522 030</p>
      </div>
    </div>
  );
};

export default MobileNav;
