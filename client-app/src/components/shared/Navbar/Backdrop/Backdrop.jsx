import React from "react";
import "./Backdrop.scss";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.click}
      style={{ zIndex: props.zIndex, display: props.display }}
      className='backdrop'
    />
  );
};

export default Backdrop;
