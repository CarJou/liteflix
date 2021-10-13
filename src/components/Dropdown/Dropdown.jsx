import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <div>
        <h1>VER:</h1>
      </div>
      <nav className="container-drop">
        <ul className="list-container">
          <Link to="/" className="link-to">
            <li className="list-style">POPULARES</li>
          </Link>
          <Link to="/" className="link-to">
            <li className="list-style">MIS PELICULAS</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default Dropdown;