import React from "react";
import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

const BathroomData = [
  {
    to: "",
    title: "Tepihat",
    icon: <FaHotel />,
  },
  {
    to: "",
    title: "Peshqirat",
    icon: <FaHotel />,
  },
  {
    to: "",
    title: "Body Mantil",
    icon: <FaHotel />,
  },
  {
    to: "",
    title: "Aksesoret",
    icon: <FaHotel />,
  },
];

const BathroomMegamenu = () => {
  return (
    <div className='navbar-megamenu hotelline-megamenu'>
      <div className='menu-links'>
        <h1 className='paragraph-text megamenu-title'>Banjo</h1>
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

export default BathroomMegamenu;
