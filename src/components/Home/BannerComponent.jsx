import React from "react";
import "./styles/_banner-component.scss";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity, MdPayments } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

export const bannerData = [
  {
    icon: <TbTruckDelivery />,
    title: "Transport ne tere Kosoven",
    paragraph:
      "Ne i sjellim produktet deri ne shtepine tuaj, ne te gjitha qytet e Kosoves. Pagesen e ben vetem pas pranimit te porosise",
  },
  {
    icon: <MdOutlineSecurity />,
    title: "Siguri e plote",
    paragraph:
      "Ndihuni te sigurte kur porositni online ne faqet tona. Ne i mbajme te dhenat tuaja te sigurta dhe e respektojme privatesine e cdo klienti",
  },
  {
    icon: <MdPayments />,
    title: "Pagesa pas pranimit te porosise",
    paragraph:
      "Pagesa kryhet kur pranoni porosine tuaj, ose mund ta beni online me sistemin tone te pageses. Ne ju garantojme per siguri.",
  },
  {
    icon: <IoIosCall />,
    title: "Na telefononi",
    paragraph:
      "Per dergesa, anulime te porosive, garanci, reklamacione dhe ankesa ju lutem te na telefononi ne +383 48 555 5555",
  },
];

const BannerComponent = () => {
  return (
    <div className='bannercomponent'>
      <h1 className='bannercomponent-title header-text'>
        Ne ju ofrojme produktet me te mira ne treg dhe garantojme per kualitetin
        e produkteve tona
      </h1>
      <div className='bannercomponent-boxes'>
        {bannerData.map((bData, i) => {
          return (
            <div key={i} className='bannercomponent-box'>
              <div className='bannercomponent-icon'>{bData.icon}</div>
              <div className='bannercard-container'>
                <h6 className='bannercomponent-box-title'>{bData.title}</h6>
                <p className='bannercomponent-paragraph'>{bData.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerComponent;
