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
          <Link className='sidebar-title' to='/'>
            Othman Home
          </Link>
        <CgClose onClick={props.click} />
      </div>
      <div className='sidebar-links'>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>Pjata</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>Sete</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>Jastake</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>Peshqira</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>Banjo</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>Batanije</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>Mbulesa</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"/categories"}>Dysheka</Link>
            </p>
          </div>
        </div>
      </div>
      <div className='sidebar-auth'>
        {/* {context.data.isLoggedIn ? ( */}
        <div className='login-link-container'>
          <Link to='/user' className='login-link signup  inline '>
            <AiOutlineUser />
            <p>Profile Name</p>
          </Link>
        </div>
        {/* ) : ( */}
        <div className='auth-navigations'>
          <div className='login-link-container'>
            <Link onClick={showModal} className='mobile-login-link'>
              Kyqu
            </Link>
          </div>
          <div className='login-link-container'>
            <Link to='/register' className='mobile-login-link'>
              Regjistrohu
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
