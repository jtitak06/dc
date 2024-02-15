import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faPhoneVolume, faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./Features.css";

export default function Features() {
    return (
      <>
        <ul className="features-wrapper">
          <li className="features-item">
            <FontAwesomeIcon className="home-icon" icon={faCarSide} />
            <div className="features-info">
              <h4 className="features-info-title">Updated Inventory</h4>
              <p className="features-info-subtitle">Thousands of Vehicles</p>
            </div>
          </li>
          <li className="features-item">
            <FontAwesomeIcon className="home-icon" icon={faLocationDot} />
            <div className="features-info">
              <h4 className="features-info-title">Chicagoland</h4>
              <p className="features-info-subtitle">Vehicles Near You</p>
            </div>
          </li>
          <li className="features-item">
            <FontAwesomeIcon className="home-icon" icon={faDollarSign} />
            <div className="features-info">
              <h4 className="features-info-title">Great Values</h4>
              <p className="features-info-subtitle">Based on Your Budget</p>
            </div>
          </li>
          <li className="features-item">
            <FontAwesomeIcon className="home-icon" icon={faPhoneVolume} />
            <div className="features-info">
              <h4 className="features-info-title">Responsive Support</h4>
              <p className="features-info-subtitle">Contact us Anytime</p>
            </div>
          </li>
        </ul>
      </>
    );
}