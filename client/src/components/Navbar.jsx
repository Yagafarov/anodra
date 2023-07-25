import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import Logo from '../img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo on the left */}
        <Link className="navbar-brand" to={'/'}>
          <img src={Logo} width="100" className="d-inline-block align-text-top img-flex" alt="Anodra" />
        </Link>

        {/* Menu items centered */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/'}>
                Maqolalar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={'/write'}>
                Yozish
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about'}>
                Biz haqimizda
              </Link>
            </li>
          </ul>
        </div>

        {/* Sign Up and Sign In buttons on the right */}
        <div className='d-flex'>
          <Link className='btn btn-outline-primary mx-3' to={'/login'}>
          <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link className='btn btn-primary text-light' to={'/register'}>
            <FontAwesomeIcon icon={faUserPlus} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
