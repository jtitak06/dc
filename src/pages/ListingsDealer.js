import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  APIProvider,
  Map,
  Marker
} from "@vis.gl/react-google-maps";
import { useDispatch, useSelector } from "react-redux";
import { getDealer, } from "../store/dealerSlice";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faLaptop, faCarSide } from "@fortawesome/free-solid-svg-icons";
// import PathConstants from "src/routes/PathConstants";
import "./ListingsDealer.css";

export default function ListingsDealer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line 
  const [dealerID, setDealerId] = useState("");
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [distance, setDistance] = useState(5);
  const [zipCode, setZipCode] = useState("");
  const [validation, setValidation] = useState(true);
  const [searchInitiated, setSearchInititated] = useState(false);
  const {data: homeSearch} = useSelector(state => state.homeSearch);
  const {data: dealer} = useSelector(state => state.dealer);

  useEffect(() => {
    const uniqueMakes = homeSearch.reduce((accumulator, vehicle) => {
      if (!accumulator.includes(vehicle.make)) {
        accumulator.push(vehicle.make);
      }
      return accumulator;
    }, []);
    setMakes(uniqueMakes);
  }, [homeSearch])

const changeZipCode = (e) => {
  const number = e.target.value.replace(/\D/g, "");
  setZipCode(number)
  }

function validZipCode() {
  if (zipCode.toString().length < 5) {
    setValidation(false)
  } else {
    setValidation(true)
  }
}

const submitDealerSearch = async (e) => {
  e.preventDefault();
  setSearchInititated(true);

  const distanceNumber = parseInt(distance, 10);

  const queryParams = {
    make: selectedMake,
    zip: zipCode,
    distance: distanceNumber,
  };

  const queryString = new URLSearchParams(queryParams).toString();

  dispatch(getDealer(queryString));
};

const viewDealerInventory = async (dealerID) => {
  await setDealerId(dealerID)

  const queryParams = {
    dealerID: dealerID,
    rows: 500
  };
  

  const queryString = new URLSearchParams(queryParams).toString();
  navigate(`/results?${queryString}`);
}

    return (
      <>
        <div className="dealer-listings-top-ad">
          <div className="banner-ad-wrapper">
            <Link className="banner-ad" to="/">
              <img
                className="banner-ad-image"
                src={ToyotaBanner}
                alt="placeholder"
              />
            </Link>
          </div>
        </div>
        <h1 className="dealer-listings-title">Dealer Listings</h1>
        <div className="dealer-listings-content-wrapper">
          <div className="dealer-listings-vertical-ad-wrapper">
            <Link>
              <img src={ToyotaVertical} alt="ad" />
            </Link>
          </div>
          <div className="dealer-listings-search-wrapper">
            <div className="dealer-listings-box">
              <h3 className="dealer-listings-box-title">
                Search for Dealers by Zip Code
              </h3>
              <div className="dealer-listings-select-wrapper">
                <div className="dealer-listings-input-wrapper">
                  <label className="dealer-listings-label">Make</label>
                  <select
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="dealer-listings-input"
                  >
                    {makes
                      ?.sort((a, b) => {
                        return a?.localeCompare(b);
                      })
                      .map((make, i) => {
                        return (
                          <option key={i} value={make}>
                            {make}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="dealer-listings-input-wrapper">
                  <label className="dealer-listings-label">Within</label>
                  <select
                    onChange={(e) => setDistance(e.target.value)}
                    className="dealer-listings-input"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={75}>75</option>
                    <option value={100}>100</option>
                    <option value={250}>250</option>
                  </select>
                </div>
                <div className="dealer-listings-input-wrapper">
                  <label className="dealer-listings-label">Zip Code</label>
                  <input
                    className="dealer-listings-input"
                    type="text"
                    value={zipCode}
                    onChange={changeZipCode}
                    maxLength={5}
                  />
                  {validation ? (
                    <div className="dealer-listings-input-validation"></div>
                  ) : (
                    <div className="dealer-listings-input-validation">
                      <span className="dealer-listings-input-validation-text">
                        Please enter a valid zip code!
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="dealer-listings-box-button-wrapper">
                <button
                  className="dealer-listings-box-button"
                  onClick={(e) => {
                    validZipCode(e);
                    submitDealerSearch(e);
                  }}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="dealer-listings-search-results">
              <h3 className="dealer-listings-search-results-title">
                Search for a Dealer Near You!
              </h3>
              {validation && searchInitiated ? (
                <ul className="dealer-listings-search-list">
                  {[...dealer]
                    .sort((a, b) => a.dealerDistance - b.dealerDistance)
                    .map((item, i) => {
                      const position = {
                        lat: Number(item.dealerLat),
                        lng: Number(item.dealerLong),
                      };
                      return (
                        <li
                          className="dealer-listings-search-list-item"
                          key={i}
                        >
                          <div className="dealer-listings-item-column left">
                            <h5 className="dealer-listings-item-title">
                              {item.dealerName}
                            </h5>
                            <p className="dealer-listings-item-distance">
                              {item.dealerDistance.toFixed(2)} miles
                            </p>
                            <p className="dealer-listings-item-address">
                              {item.dealerStreet}
                              <br />
                              {item.dealerCity}
                              {", "}
                              {item.dealerState} {item.dealerZip}
                            </p>
                            <div className="dealer-listings-item-link-wrapper">
                              <Link className="dealer-listings-item-link">
                                <FontAwesomeIcon
                                  className="dealer-listings-item-icon"
                                  icon={faPhoneVolume}
                                />
                                {item.dealerPhone}
                              </Link>
                              <br />
                              <a
                                className="dealer-listings-item-link"
                                href={item.dealerWebsite}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FontAwesomeIcon
                                  className="dealer-listings-item-icon"
                                  icon={faLaptop}
                                />
                                View Website
                              </a>
                            </div>
                          </div>
                          <div className="dealer-listings-item-column right">
                            <button
                              className="dealer-listings-item-button"
                              onClick={() => { viewDealerInventory(item.dealerID); }}
                            >
                              <FontAwesomeIcon
                                className="dealer-listings-item-icon"
                                icon={faCarSide}
                              />
                              View Inventory
                            </button>
                            <APIProvider
                              apiKey={
                                process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_KEY
                              }
                            >
                              <div className="dealer-listings-item-map">
                                <Map
                                  zoom={15}
                                  center={position}
                                  options={{ disableDefaultUI: true }}
                                >
                                  <Marker position={position}></Marker>
                                </Map>
                              </div>
                            </APIProvider>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="dealer-listings-vertical-ad-wrapper">
            <Link>
              <img src={FordVertical} alt="ad" />
            </Link>
          </div>
        </div>
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/">
            <img
              className="banner-ad-image"
              src={FordBanner}
              alt="placeholder"
            />
          </Link>
        </div>
      </>
    );
}