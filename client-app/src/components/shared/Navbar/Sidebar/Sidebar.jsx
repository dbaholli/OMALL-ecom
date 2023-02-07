import React, { useState } from "react";
import "./Sidebar.scss";
import "../../styles/shared-styles.scss";

// import { ReactComponent as Logo } from '../../../../assets/shared/logo-no-text.svg';
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import Login from "../../../Auth/Login";
import Backdrop from "../Backdrop/Backdrop";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const [modal, setShowModal] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const showModal = () => {
    setShowModal((prev) => (prev = !modal));
  };

  const zIndex = 5000;

  return (
    <div style={{ zIndex: props.zIndex }} className='side-bar'>
      <div className='sidebar-logo inline spread'>
        <div className='sidebar-icon-title'>
          <Link to='/' className='inline'>
            {/* <div className='sidebar-icon' />
             */}
            <p className='paragraph-text sidebar-text'>Othman Home</p>
          </Link>
        </div>
        <CgClose onClick={props.click} />
      </div>
      <div className='sidebar-links'>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/hotel-line"}>Hotel Line</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/sete"}>Sete</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/jastake"}>Jastake</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/banjo"}>Banjo</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/cajniket"}>Cajniket</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/mbulesa"}>Mbulesa</Link>
            </p>
          </div>
        </div>
        <div className='navigation-link '>
          <div className='main-link inline spread'>
            <p className='mobile-nav-link'>
              <Link to={"kategoria/dysheka"}>Dysheka</Link>
            </p>
          </div>
        </div>
      </div>
      <div className='sidebar-auth'>
        {userInfo ? (
          <div className='login-link-container'>
            <Link to='/profili' className='login-link inline '>
              <AiOutlineUser />
              <p className='user-nav paragraph-text'>
                {jwt_decode(userInfo.access).first_name}
              </p>
            </Link>
          </div>
        ) : (
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
        )}
        {modal && <Login click={showModal} zIndex={zIndex} />}
        {modal && (
          <Backdrop click={() => setShowModal(!modal)} zIndex={zIndex - 1} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
