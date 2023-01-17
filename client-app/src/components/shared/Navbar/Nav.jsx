import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle, BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
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
import Dropdown from "../Dropdown/Dropdown";
import jwt_decode from "jwt-decode";

const Nav = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [modal, setShowModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [register, setRegister] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log("USER: ", userLogin);

  let navigate = useNavigate();

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

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
            <Link>
              <BsPersonCircle />
              {userInfo ? (
                <Link onClick={() => setDropdown(true)}>
                  {jwt_decode(userInfo.access).first_name}
                </Link>
              ) : (
                <Link onClick={() => setShowModal(true)}>Profili</Link>
              )}
            </Link>
            <Link to={`/shporta/`}>
              <BsFillCartFill />
              <p>Shporta</p>
            </Link>
          </div>
        </div>
        <div onClick={showSidebar} className='hamburger-menu'>
          <div className='hamburger-line' />
          <div className='hamburger-line' />
          <div className='hamburger-line' />
        </div>
      </div>

      {dropdown && <Dropdown setDropdown={showDropdown} zIndex={zIndex} />}

      {modal && (
        <Backdrop click={() => setDropdown(!dropdown)} zIndex={zIndex - 1} />
      )}

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
