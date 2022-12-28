import React, { useState } from 'react';
import { USER_LOGOUT } from '../../redux/features/login';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../global/constant';

import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('topnav');

  const logout = () => {
    dispatch(USER_LOGOUT());
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 hideList">
              <li class="nav-item">
                <NavLink className="navlink" to={APP_ROUTES.ROUTE_CHART}>
                  Chart Screen
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="navlink" to={APP_ROUTES.ROUTE_HOME}>
                  Product List
                </NavLink>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Patients
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Department
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  History
                </a>
              </li>
            </ul>

            <div
              className="logout headText"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
