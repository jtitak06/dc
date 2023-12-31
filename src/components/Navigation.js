import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import './Navigation.css';

export default function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const website = location.pathname;

    return (
      <>
        <div className="navigation-wrapper">
          <ul className="navigation-list">
            <li className="navigation-list-item">
              <Link
                className={
                  location.pathname === "/account-settings"
                    ? "navigation-link active"
                    : "navigation-link"
                }
                to="/account-settings"
              >
                Account Settings
              </Link>
            </li>
            <li className="navigation-list-item">
              <Link
                className={
                  location.pathname === "/saved-cars"
                    ? "navigation-link active"
                    : "navigation-link"
                }
                to="/saved-cars"
              >
                Saved Cars
              </Link>
            </li>
            {/*<li className="navigation-list-item">
              <Link
                className={
                  location.pathname === "/saved-searches"
                    ? "navigation-link active"
                    : "navigation-link"
                }
                to="/saved-searches"
              >
                Saved Searches
              </Link>
              </li>*/}
            {/*<li className="navigation-list-item">
              <Link
                className={
                  location.pathname === "/garage"
                    ? "navigation-link active"
                    : "navigation-link"
                }
                to="/garage"
              >
                Garage
              </Link>
            </li>*/}
            <li className="navigation-list-item">
              <Link className={location.pathname === "/email-notifications" ? "navigation-link active" : "navigation-link"} to="/email-notifications">E-mail Notifications</Link>
            </li>
          </ul>
        </div>
        <select className="navigation-dropdown" defaultValue={website}>
          <option
            value="/account-settings"
            onClick={() => navigate("/account-settings")}
          >
            Account Settings
          </option>
          <option value="/saved-cars" onClick={() => navigate("/saved-cars")}>
            Saved Cars
          </option>
          {/*<option
            value="/saved-searches"
            onClick={() => navigate("/saved-searches")}
          >
            Saved Searches
          </option>*/}
          {/*<option
            className="navigation-dropdown-option"
            value="/garage"
            onClick={() => navigate("/garage")}
          >
            Garage
        </option>*/}
          <option value="/email-notifications" onClick={() => navigate("/email-notifications")}>E-mail Notifications</option>
        </select>
      </>
    );
}