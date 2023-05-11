import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import Login from "../../../Auth/Login";
import { logout } from "../../../../actions/userAction";
import Backdrop from "../Backdrop/Backdrop";
import "./Sidebar.scss";
import "../../styles/shared-styles.scss";

const Sidebar = (props) => {
  const [modal, setShowModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
    props.setDropdown(false);
  };

  const showModal = () => {
    setShowModal((prev) => (prev = !modal));
  };

  const showSideBar = () => {
    setSidebar(!sidebar);
  };

  const zIndex = 5000;

  return (
    <div style={{ zIndex: props.zIndex }} className='side-bar'>
      <div className='sidebar-logo inline spread'>
        <div className='sidebar-icon-title'>
          <Link to='/' className='inline' onClick={props.click}>
            <div className='sidebar-icon' />
          </Link>
        </div>
        <CgClose onClick={props.click} size={20} />
      </div>
      <div className='sidebar-links'>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/hotel-line"} onClick={props.click}>
                Hotel Line
              </Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/sete"} onClick={props.click}>
                Sete
              </Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/jastake"} onClick={props.click}>
                Jastake
              </Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/banjo"} onClick={props.click}>
                Banjo
              </Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/cajniket"} onClick={props.click}>
                Cajniket
              </Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/mbulesa"} onClick={props.click}>
                Mbulesa
              </Link>
            </p>
          </div>
        </div>
        <div className='navigation-link'>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/dysheka"} onClick={props.click}>
                Dysheka
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className='sidebar-auth'>
        {userInfo ? (
          <div className='login-link-container'>
            <div className='sidebar-auth-loggedin-options'>
              <Link
                to='/profili'
                className='login-link inline'
                onClick={props.click}
              >
                <AiOutlineUser />
                <p className='user-nav paragraph-text'>
                  {jwt_decode(userInfo.access).first_name}
                </p>
              </Link>
            </div>
            <Link className='logout-button-sidebar' onClick={handleLogout}>
              Ç'kyçu
            </Link>
          </div>
        ) : (
          <div className='login-link-container'>
            <div className='sidebar-auth-options'>
              <Link onClick={props.showLoginModal} className='login-link'>
                Kyqu
              </Link>
            </div>
            <div className='sidebar-auth-options'>
              <Link onClick={props.showRegisterModal} className='login-link'>
                Regjistrohu
              </Link>
            </div>
          </div>
        )}
        {modal && <Login click={showModal} zIndex={zIndex - 1} />}

        {modal && (
          <Backdrop click={() => setShowModal(!modal)} zIndex={zIndex - 1} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
