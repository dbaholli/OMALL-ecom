import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/userAction";
import "./_dropdown.scss";

const Dropdown = (props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div style={{ zIndex: props.zIndex }} className='profile-dropdown'>
      <div className='dropdown-links'>
        <Link to={`/profili`}>Profili im</Link>
        <Link to={`/porosite`}>Porosite</Link>
        <Link className='logout-button' onClick={handleLogout}>
          Ç'kyçu
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
