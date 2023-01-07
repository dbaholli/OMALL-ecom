import React from "react";

const user = localStorage.getItem("user");

const ProfileComponent = () => {
  return (
    <div className='component-layout profile-component'>
      <h1 className='header-text'>Welcome to your profile {user}</h1>
    </div>
  );
};

export default ProfileComponent;
