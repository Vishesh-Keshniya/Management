import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  function handleadmin()
  {
    navigate("/admin")
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="Logo" />
      </div>

      <ul className="nav-links">
        <li><span className="nav-item">Home</span></li>
        <li><span className="nav-item">Services</span></li>
        <li><span className="nav-item">About Projects</span></li>
        <li><span className="nav-item">Testimonials</span></li>
      </ul>

      <div className="contact-button-a">
        <button className='contact-button '>Contact</button>
        <button className='contact-button ' onClick={handleadmin}>Admin</button>
      </div>
    </nav>
  );
};

export default Navbar;
