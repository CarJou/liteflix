import React from 'react';
import Menu from '../../assets/icons/menu.png';

const Burger = () => {
  return (
    <div className="burger-container">
      <button className="btn-burger">
        <img src={Menu} alt="menu hamburger" />
      </button>
    </div>
  );
};
export default Burger;
