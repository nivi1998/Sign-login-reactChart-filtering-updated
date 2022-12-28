import React from 'react';
import './sideHeader.scss';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../global/constant';

const index = () => {
  return (
    <div id="sideHeader">
      <div className="container setPadding">
        <div className="headText setPadding">
          <NavLink className="navlink" to={APP_ROUTES.ROUTE_CHART}>
            Chart Screen
          </NavLink>
        </div>
        <div className="headText setPadding">
          <NavLink className="navlink" to={APP_ROUTES.ROUTE_HOME}>
            Product List
          </NavLink>
        </div>
        <div className="headText setPadding">Patients</div>
        <div className="headText setPadding">Department</div>
        <div className="headText setPadding">History</div>
      </div>
    </div>
  );
};

export default index;
