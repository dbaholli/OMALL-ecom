import React from "react";
import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

const BathroomData = [
  {
    to: "",
    title: "Llojet",
    icon: <FaHotel />,
  }
];

const PotsMegamenu = () => {
  return (
    <div className='navbar-megamenu hotelline-megamenu'>
      <div className='menu-links'>
        {BathroomData.map((bData, i) => {
          return (
            <Link to={bData.to} key={i} className='megamenu-link'>
              <div className='icon-container'>
                <div className='icon'>{bData.icon}</div>
              </div>
              <div className='block'>
                <h6 className='megamenu-item-title'>{bData.title}</h6>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PotsMegamenu;
