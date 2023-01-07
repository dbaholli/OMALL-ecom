import React from "react";
import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

const SetsData = [
  {
    to: "",
    title: "Pjatat",
    icon: <FaHotel />,
  },
  {
    to: "",
    title: "Carcafet",
    icon: <FaHotel />,
  },
  {
    to: "",
    title: "Filxhanat",
    icon: <FaHotel />,
  },
];

const SetMegamenu = () => {
  return (
    <div className='navbar-megamenu hotelline-megamenu'>
      <div className='menu-links'>
        <h1 className='paragraph-text megamenu-title'>Seti</h1>
        {SetsData.map((sData, i) => {
          return (
            <Link to={sData.to} key={i} className='megamenu-link'>
              <div className='icon-container'>
                <div className='icon'>{sData.icon}</div>
              </div>
              <div className='block'>
                <h6 className='megamenu-item-title'>{sData.title}</h6>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SetMegamenu;
