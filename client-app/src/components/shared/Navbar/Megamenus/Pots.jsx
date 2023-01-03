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
        <h1 className='paragraph-text megamenu-title'>Cajniket</h1>
        {BathroomData.map((bData) => {
          return (
            <Link to={bData.to} className='megamenu-link'>
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