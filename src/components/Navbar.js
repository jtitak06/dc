import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
// import { useDispatch } from "react-redux";
// import { userAuth } from "src/store/authSlice";
import MobileMenu from "./MobileMenu";
// import SearchBar from "./SearchBar";
import Logo from "../images/Drive-Chicago-Logo.png";
import PathConstants from "../routes/PathConstants";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilePen, faCircleUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export default function Navbar() {
//    const { instance } = useMsal();
//    const dispatch = useDispatch();

//    const Logout = async () => {
//      try {
//          await instance.logoutRedirect("/");
//          dispatch(userAuth(""))
//      } catch (error) {
//          console.error(error);
//      }
//  }

    return (
      <>
        <header>
          <MobileMenu />
          <nav className="desktop-header">
            <div className="desktop-header-top">
                <ul className="desktop-header-top__left">
                  <li>
                    <NavLink className="desktop-header-top-link" to={PathConstants.CAR_SEARCH}>
                      Search for Car
                    </NavLink>
                  </li>
                  <li>
                  <NavLink className="desktop-header-top-link" to={PathConstants.LISTINGS_DEALER}>
                    Search by Dealer
                  </NavLink>
                </li>
                  <li>
                    <NavLink className="desktop-header-top-link" to={PathConstants.REVIEWS}>
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
                  <NavLink className="desktop-header-top-link" to={PathConstants.SELL_CAR}>
                    Sell Your Car
                  </NavLink>
                </li>
                <li>
                    <NavLink className="desktop-header-top-link" to={PathConstants.CAR_SHOWS}>
                      Car Shows
                    </NavLink>
                </li>
                <li>
                  <NavLink className="desktop-header-top-link" to={PathConstants.CALCULATOR}>
                    Finance Calculator
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="desktop-header-bottom">
              <div className="desktop-image-wrapper">
                <Link className="desktop-image-link" to={PathConstants.HOME}>
                  <img className="desktop-image" src={Logo} alt="logo"/>
                </Link>
              </div>
              {/*<div className="desktop-header-bottom-left">
              <Link className="drive-chicago-link" to={PathConstants.HOME}>
                  <img className="drive-chicago-logo" src={Logo} alt="logo" />
              </Link>
              </div>
              <div className="desktop-header-bottom-middle">
                <SearchBar />
              </div>
              <div className="desktop-header-bottom-right">
                <ul className="desktop-header-bottom-right-wrapper">
                  <UnauthenticatedTemplate>
                  <li className="desktop-header-bottom-right-list-item">
                    <Link className="desktop-header-bottom-right-link" to={PathConstants.SIGNUP}>
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
                    <Link className="desktop-header-bottom-right-link" to={PathConstants.LOGIN}>
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
                  </UnauthenticatedTemplate>
                  <AuthenticatedTemplate>
                    <li className="desktop-header-bottom-right-list-item">
                    <Link className="desktop-header-bottom-right-link" to={PathConstants.ACCOUNT_SETTINGS}>
                    <FontAwesomeIcon
                      className="desktop-header-bottom-right-icon"
                      icon={faGear}
                    />
                    <div className="desktop-header-bottom-right-text-wrapper">
                      <p className="desktop-header-bottom-right-top-text">
                        Account
                      </p>
                      <h5 className="desktop-header-bottom-right-bottom-text">
                        Settings
                      </h5>
                    </div>
                    </Link>
                  </li>
                  <li className="desktop-header-bottom-right-list-item">
                    <button type="button" className="desktop-header-bottom-right-button" onClick={() => Logout()}>
                    <FontAwesomeIcon
                      className="desktop-header-bottom-right-icon"
                      icon={faRightFromBracket}
                    />
                    <div className="desktop-header-bottom-right-text-wrapper">
                      <p className="desktop-header-bottom-right-top-text">
                        Account
                      </p>
                      <h5 className="desktop-header-bottom-right-bottom-text">
                        Logout
                      </h5>
                    </div>
                    </button>
                  </li>
                  </AuthenticatedTemplate>
                </ul>
              </div>*/}
            </div>
          </nav>
        </header>
      </>
    );
}