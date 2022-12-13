import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle, BsFillCartFill } from "react-icons/bs";
import "./nav.scss";
import "../styles/shared-styles.scss";
import MobileNav from "./MobileNav/MobileNav";
import Login from "../../Auth/Login";
import Backdrop from "../Backdrop/Backdrop";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [modal, setShowModal] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  // const showModal = () => {
  //   setShowModal(!modal);
  // };
  function backdropClickHandler() {
    setOpenSideDrawer(false);
  }

  let backdrop;

  if (modal) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  useEffect(() => {
    document.querySelector(".navbar");

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 20 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className='navbar-content'>
        <div className='title-icon inline'>
          <div className='nav-title inline'>
            <Link to='/' className='inline'>
              {/* <div className='nav-icon' /> */}
              Othman Mall
            </Link>
          </div>
        </div>
        <div className='navigation'>
          <div className='nav-link-container home-link'>
            <Link to='/' className='nav-link inline'>
              Home
            </Link>
          </div>
          <div className='nav-link-container services-link'>
            <Link to='/' className='nav-link inline'>
              Lorem ipsum
            </Link>
          </div>
          <div className='nav-link-container why-us-link'>
            <Link to='/' className='nav-link inline'>
              Lorem ipsum
            </Link>
          </div>
          <div className='nav-link-container contact-link'>
            <Link to='/' className='nav-link inline'>
              Lorem ipsum
            </Link>
          </div>
          <div className='nav-link-container careers-link'>
            <Link to='/' className='nav-link inline'>
              Lorem ipsum
            </Link>
          </div>
          <div className='nav-link-actions actions-link '>
            <Link onClick={() => setShowModal(true)}>
              <BsPersonCircle />
            </Link>
            <Link>
              <BsFillCartFill />
            </Link>
          </div>
        </div>
        <div onClick={showSidebar} className='hamburger-menu'>
          <div className='hamburger-line' />
          <div className='hamburger-line' />
          <div className='hamburger-line' />
        </div>
      </div>
      {modal && <Login setShowModal={setShowModal} />}
      <MobileNav sidebarValue={sidebar} click={showSidebar} />
    </div>
  );
};

export default Nav;
