import React from 'react';
import UserButton from '../UserButton';
import Close from '../../../assets/icons/cerrar.png';
import { Link } from 'react-router-dom';
const NavAddMobile = () => {
  return (
    <>
      <div className="nav-add-desktop">
        <Link to={'/'}>
          <img src={Close} alt="icon close" />
        </Link>
      </div>
      <div className="nav-add-mobile">
        <h1 className="nav-title">
          <span className="bold-text">LITE</span>
          FLIX
        </h1>
        <UserButton />
      </div>
    </>
  );
};
export default NavAddMobile;
