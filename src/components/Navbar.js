import React from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import Logo from "../images/Drive-Chicago-Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export default function Navbar() {

    return (
      <>
        <header>
          <MobileMenu />
          <nav className="desktop-header">
            <div className="desktop-header-top">
                <ul className="desktop-header-top__left">
                  <li>
                    <NavLink className="desktop-header-top-link" to="/car-search">
                      Search for Car
                    </NavLink>
                  </li>
                  <li>
                  <NavLink className="desktop-header-top-link" to="/dealer-listings">
                    Search by Dealer
                  </NavLink>
                </li>
                  <li>
                    <NavLink className="desktop-header-top-link" to="/reviews">
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              <div className="desktop-header-top__center">
                <span className="desktop-header-top__center-text">
                  cars, trucks, suvs, and more
                </span>
              </div>
              <ul className="desktop-header-top__right">
                <li>
                  <NavLink className="desktop-header-top-link" to="/sell-car">
                    Sell Your Car
                  </NavLink>
                </li>
                <li>
                    <NavLink className="desktop-header-top-link" to="/car-shows">
                      Car Shows
                    </NavLink>
                </li>
                <li>
                  <NavLink className="desktop-header-top-link" to="/calculator">
                    Finance Calculator
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="desktop-header-bottom">
              <div className="desktop-header-bottom-left">
              <Link className="drive-chicago-link" to="/">
                  <img className="drive-chicago-logo" src={Logo} alt="logo" />
              </Link>
              </div>
              <div className="desktop-header-bottom-middle">
                <SearchBar />
              </div>
              <div className="desktop-header-bottom-right">
                <ul className="desktop-header-bottom-right-wrapper">
                  <li className="desktop-header-bottom-right-list-item">
                    <Link className="desktop-header-bottom-right-link" to="/signup">
                    <FontAwesomeIcon
                      className="desktop-header-bottom-right-icon"
                      icon={faFilePen}
                    />
                    <div className="desktop-header-bottom-right-text-wrapper">
                      <p className="desktop-header-bottom-right-top-text">
                        Sign Up
                      </p>
                      <h5 className="desktop-header-bottom-right-bottom-text">
                        Today
                      </h5>
                    </div>
                    </Link>
                  </li>
                  <li className="desktop-header-bottom-right-list-item">
                    <Link className="desktop-header-bottom-right-link" to="/login">
                    <FontAwesomeIcon
                      className="desktop-header-bottom-right-icon"
                      icon={faCircleUser}
                    />
                    <div className="desktop-header-bottom-right-text-wrapper">
                      <p className="desktop-header-bottom-right-top-text">
                        Hello, Log In
                      </p>
                      <h5 className="desktop-header-bottom-right-bottom-text">
                        My Account
                      </h5>
                    </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
}