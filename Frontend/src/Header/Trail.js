import React, { useState } from 'react';
import './Trail.css'; // Import your CSS file for styling

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <input
        type="checkbox"
        id="check"
        checked={menuOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="check" className="checkbtn">
        <span className="material-symbols-outlined">menu</span>
      </label>
      <nav className={menuOpen ? 'show' : ''}>
        <ul>
          <li>furniture</li>
          <li>Sofas & seating</li>
          <li>Mattresses</li>
          <li>Home Decor</li>
          <li>Furnishings</li>
          <li>Kitchen & Dining</li>
          <li>Lamps & Lightning</li>
          <li>Home Utility</li>
          <li>Appliances</li>
          <li>Modular</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
