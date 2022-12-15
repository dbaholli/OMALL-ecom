import React, { useState } from "react";
import "./Sidebar.scss";
import "../../styles/shared-styles.scss";

// import { ReactComponent as Logo } from '../../../../assets/shared/logo-no-text.svg';
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import Login from "../../../Auth/Login";
import Backdrop from "../Backdrop/Backdrop";

const Sidebar = (props) => {
  const [modal, setShowModal] = useState(false);

  const showModal = () => {
    setShowModal((prev) => (prev = !modal));
  };

  const zIndex = 5000;

  return (
    <div style={{ zIndex: props.zIndex }} className='side-bar'>
      <div className='sidebar-logo inline spread'>
        <div className='sidebar-icon-title inline spread'>
          {/* <div className='sidebar-icon'>
            Othman Mall
          </div> */}
          <div>
            <Link className='sidebar-title' to='/'>
              Othman Mall
            </Link>
          </div>
        </div>
        <CgClose onClick={props.click} />
      </div>
      <div className='sidebar-links'>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/"}>Home</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>Categories</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>About Us</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>Contact Us</Link>
            </p>
          </div>
        </div>
      </div>
      <div className='sidebar-auth'>
        {/* {context.data.isLoggedIn ? ( */}
        <div className='login-link-container'>
          <Link to='/user' className='login-link signup  inline '>
            <AiOutlineUser />
            <p>Account</p>
          </Link>
        </div>
        {/* ) : ( */}
        <div className='auth-navigations'>
          <div className='login-link-container'>
            <Link onClick={showModal} className='mobile-login-link'>
              Log In
            </Link>
          </div>
          <div className='login-link-container'>
            <Link to='/register' className='mobile-login-link'>
              Register
            </Link>
          </div>
        </div>
        {modal && <Login click={showModal} zIndex={zIndex} />}
        {modal && (
          <Backdrop click={() => setShowModal(!modal)} zIndex={zIndex - 1} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
