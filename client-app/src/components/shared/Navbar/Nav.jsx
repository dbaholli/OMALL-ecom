import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle, BsFillCartFill } from "react-icons/bs";
import "./nav.scss";
import "../styles/shared-styles.scss";
import "./Megamenus/_megamenu-style.scss";
import Sidebar from "./Sidebar/Sidebar";
import Login from "../../Auth/Login";
import Backdrop from "./Backdrop/Backdrop";
import Register from "../../Auth/Register";
import HotelLineMegamenu from "./Megamenus/HotelLine";
import SetMegamenu from "./Megamenus/Sets";
import BathroomMegamenu from "./Megamenus/Bathroom";
import PotsMegamenu from "./Megamenus/Pots";

const Nav = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [modal, setShowModal] = useState(false);
  const [register, setRegister] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const removeRegisterModal = () => {
    setRegister(false);
  };

  const showModal = () => {
    setShowModal((prev) => (prev = !modal));
  };

  const showRegisterModal = () => {
    setRegister(true);
    setShowModal(false);
  };

  const showLoginModal = () => {
    setShowModal(true);
    setRegister(false);
  };

  const zIndex = 5000;

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
          <Link to='/' className='inline'>
            <div className='nav-icon' />
          </Link>
        </div>
        <div className='navigation'>
          <div className='nav-link-container services-link'>
            <Link to='/' className='nav-link inline'>
              Hotel Line
            </Link>
            <HotelLineMegamenu />
          </div>
          <div className='nav-link-container why-us-link'>
            <Link to='/' className='nav-link inline'>
              Sete
            </Link>
            <SetMegamenu />
          </div>
          <div className='nav-link-container contact-link'>
            <Link to='/' className='nav-link inline'>
              Jastake
            </Link>
          </div>
          <div className='nav-link-container careers-link'>
            <Link to='/' className='nav-link inline'>
              Peshqira
            </Link>
          </div>
          <div className='nav-link-container careers-link'>
            <Link to='/' className='nav-link inline'>
              Banjo
            </Link>
            <BathroomMegamenu />
          </div>
          <div className='nav-link-container careers-link'>
            <Link to='/' className='nav-link inline'>
              Cajniket
            </Link>
            <PotsMegamenu />
          </div>
          <div className='nav-link-container careers-link'>
            <Link to='/' className='nav-link inline'>
              Mbulesa
            </Link>
          </div>
          <div className='nav-link-container careers-link'>
            <Link to='/' className='nav-link inline'>
              Dysheka
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

      {modal && (
        <Login
          setRegisterModal={showRegisterModal}
          click={showModal}
          zIndex={zIndex}
        />
      )}
      {modal && (
        <Backdrop click={() => setShowModal(!modal)} zIndex={zIndex - 1} />
      )}

      {sidebar && <Sidebar click={showSidebar} zIndex={zIndex} />}
      {sidebar && <Backdrop click={showSidebar} zIndex={zIndex - 1} />}

      {register && (
        <Register
          click={removeRegisterModal}
          showLoginModal={showLoginModal}
          zIndex={zIndex}
        />
      )}
      {register && <Backdrop click={removeRegisterModal} zIndex={zIndex - 1} />}
    </div>
  );
};

export default Nav;
