import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import Logo from '../img/logo.png';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} width="100" className="d-inline-block align-text-top img-flex" alt="Anodra" />
        </Link>

        {/* Hamburger menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Maqolalar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/write">
                Yozish
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Biz haqimizda
              </Link>
            </li>
          </ul>
                  {/* Sign Up and Sign In buttons */}
        <div className="d-flex">
          <Link className="btn btn-outline-primary" style={{marginRight:"20px"}}  to="/login">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link className="btn btn-primary text-light" to="/register">
            <FontAwesomeIcon icon={faUserPlus} />
          </Link>
        </div>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
