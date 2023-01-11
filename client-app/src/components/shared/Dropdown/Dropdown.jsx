import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/userAction";
import "./_dropdown.scss";

const Dropdown = (props) => {
  const dispatch = useDispatch();
  console.log(props.setDropdown);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div style={{ zIndex: props.zIndex }} className='profile-dropdown'>
      <div className='dropdown-links'>
        <Link to={`/profili`} onClick={props.setDropdown}>
          Profili im
        </Link>
        <Link to={`/porosite`} onClick={props.setDropdown}>
          Porosite
        </Link>
        <Link className='logout-button' onClick={handleLogout}>
          Ç'kyçu
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
