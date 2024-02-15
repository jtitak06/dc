import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
// import { userAuth } from "src/store/authSlice";
// import { useDispatch } from "react-redux";
import Logo from "../images/Drive-Chicago-Logo.png";
// import SearchBar from "./SearchBar";
import PathConstants from "../routes/PathConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, 
  // faMagnifyingGlass, 
  // faCircleUser, 
  faAngleRight, 
  faX, 
  // faFilePen, 
  // faGear, 
  // faRightFromBracket 
  } from "@fortawesome/free-solid-svg-icons";
import "./MobileMenu.css";

export default function MobileMenu() {
    const [showMenu, setShowMenu] = useState(false);
//    const [showSearch, setShowSearch] = useState(false);
//    const { instance } = useMsal();
//    const dispatch = useDispatch();

    function displayMenu() {
        setShowMenu(!showMenu)
    }

//    function searchMenu() {
//        setShowSearch(!showSearch)
//    }

//    const Logout = async () => {
//      try {
//          await instance.logoutRedirect(PathConstants.HOME);
//          dispatch(userAuth(""))
//      } catch (error) {
//          console.error(error);
//      }
//  }

    return (
      <>
        <nav className="mobile-header">
          <div className="mobile-header-content">
            <button
              type="button"
              className="mobile-menu-button"
              onClick={displayMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          <div className="mobile-logo-wrapper">
            <Link className="mobile-logo-link" to={PathConstants.HOME}>
              <img className="mobile-logo" src={Logo} alt="logo" />
            </Link>
          </div>
            {/* <SearchBar showSearch={showSearch} searchMenu={searchMenu} />
            <div className="mobile-indicator">
              <Link className="mobile-indicator-link">
                <button
                  onClick={searchMenu}
                  type="button"
                  className="mobile-indicator-button"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <span className="mobile-indicator-text">Search</span>
                </button>
              </Link>
              <AuthenticatedTemplate>
              <NavLink className="mobile-indicator-link" to={PathConstants.ACCOUNT_SETTINGS}>
                <button type="button" className="mobile-indicator-button">
                  <FontAwesomeIcon icon={faGear} />
                  <span className="mobile-indicator-text">Settings</span>
                </button>
              </NavLink>
              <div className="mobile-indicator-button-wrapper">
                <button type="button" className="mobile-indicator-button" onClick={() => Logout()}>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <span className="mobile-indicator-text">Logout</span>
                </button>
              </div>
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
              <NavLink className="mobile-indicator-link" to={PathConstants.LOGIN}>
                <button type="button" className="mobile-indicator-button">
                  <FontAwesomeIcon icon={faCircleUser} />
                  <span className="mobile-indicator-text">Log In</span>
                </button>
              </NavLink>
              <NavLink className="mobile-indicator-link" to={PathConstants.SIGNUP}>
                <button type="button" className="mobile-indicator-button">
                  <FontAwesomeIcon icon={faFilePen} />
                  <span className="mobile-indicator-text">Sign Up</span>
                </button>
              </NavLink>
              </UnauthenticatedTemplate>
            </div>*/}
          </div>
        </nav>
        {showMenu && (
          <div className="mobile-overlay">
            <div className="mobile-menu">
              <div className="mobile-menu-header">
                <h2 className="mobile-menu-title">Menu</h2>
                <button type="button" className="mobile-menu__close">
                  <FontAwesomeIcon
                    className="mobile-menu-indicator-icon"
                    icon={faX}
                    onClick={displayMenu}
                  />
                </button>
              </div>
             {/* <ul className="mobile-menu-indicators">
                <AuthenticatedTemplate>
                <li>
                  <NavLink
                    className="mobile-menu-indicator-link"
                    onClick={displayMenu}
                    to={PathConstants.ACCOUNT_SETTINGS}
                  >
                    <FontAwesomeIcon
                      className="mobile-menu-indicator-icon"
                      icon={faGear}
                    />
                    <span className="mobile-menu-indicator-text">Settings</span>
                  </NavLink>
                </li>
                <li>
                  <button
                    className="mobile-menu-indicator-link-button"
                    onClick={() => Logout() && displayMenu}
                  >
                    <FontAwesomeIcon
                      className="mobile-menu-indicator-icon"
                      icon={faRightFromBracket}
                    />
                    <span className="mobile-menu-indicator-text">Logout</span>
                  </button>
                </li>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                <li>
                  <NavLink
                    className="mobile-menu-indicator-link"
                    onClick={displayMenu}
                    to={PathConstants.SIGNUP}
                  >
                    <FontAwesomeIcon
                      className="mobile-menu-indicator-icon"
                      icon={faFilePen}
                    />
                    <span className="mobile-menu-indicator-text">Sign Up</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="mobile-menu-indicator-link"
                    onClick={displayMenu}
                    to={PathConstants.LOGIN}
                  >
                    <FontAwesomeIcon
                      className="mobile-menu-indicator-icon"
                      icon={faCircleUser}
                    />
                    <span className="mobile-menu-indicator-text">Log In</span>
                  </NavLink>
                </li>
                </UnauthenticatedTemplate>
        </ul>*/}
              <ul className="mobile-menu-links">
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.HOME}
                  >
                    <span className="mobile-menu-text">Home</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.CAR_SEARCH}
                  >
                    <span className="mobile-menu-text">Car Search</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.LISTINGS_DEALER}
                  >
                    <span className="mobile-menu-text">Dealer Search</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.REVIEWS}
                  >
                    <span className="mobile-menu-text">Reviews</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.SELL_CAR}
                  >
                    <span className="mobile-menu-text">Sell Your Car</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.CAR_SHOWS}
                  >
                    <span className="mobile-menu-text">Car Shows</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.CALCULATOR}
                  >
                    <span className="mobile-menu-text">Calculator</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </>
    );
}