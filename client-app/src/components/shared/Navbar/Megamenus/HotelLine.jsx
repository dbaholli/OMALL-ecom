import React from "react";
import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

const HotelLineData = [
  {
    to: "",
    title: "Textil",
    icon: <FaHotel />,
  },
  {
    to: "",
    title: "Enet",
    icon: <FaHotel />,
  },
  {
    to: "",
    title: "Aksesoret",
    icon: <FaHotel />,
  },
];

const HotelLineMegamenu = () => {
  return (
    <div className='navbar-megamenu hotelline-megamenu'>
      <div className='menu-links'>
        <h1 className='paragraph-text megamenu-title'>Hotel Line</h1>
        {HotelLineData.map((hData, i) => {
          return (
            <Link to={hData.to} key={i} className='megamenu-link'>
              <div className='icon-container'>
                <div className='icon'>{hData.icon}</div>
              </div>
              <div className='block'>
                <h6 className='megamenu-item-title'>{hData.title}</h6>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HotelLineMegamenu;
