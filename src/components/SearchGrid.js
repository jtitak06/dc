import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Convertible from "../images/Black-Convertible.png";
import Hatchback from "../images/Black-Hatchback.png";
import Minivan from "../images/Black-Minivan.png";
import Suv from "../images/Black-SUV.png";
import Coupe from "../images/Black-Coupe.png";
import Pickup from "../images/Black-Pickup.png";
import Sedan from "../images/Black-Sedan.png";
import Wagon from "../images/Black-Wagon.png";
import PathConstants from "src/routes/PathConstants";
// import { bodyTypes } from "src/lists/BodyTypes";
import "./SearchGrid.css";

export default function SearchGrid() {
  const navigate = useNavigate();
  const [body, setBody] = useState("");

  const changeBodyType = (e) => {
    e.preventDefault();

    const buttonValue = e.target.value;
    setBody(buttonValue)
  }

  const handleBodySearch = async (e) => {
    e.preventDefault();

    const queryParams = {
      dealerZip: "60616",
      dealerDistance: 10,
      bodyStyles: body
    };

    const queryString = new URLSearchParams(queryParams).toString();
    navigate(`/results?${queryString}`);
  };

    return (
      <>
        <div className="body-grid">
          <h3 className="body-grid-title">Search by Body Style</h3>
          <ul className="body-grid-list">
            <li className="body-grid-list-item">
              <Link className="body-grid-link" to="#"/*PathConstants.RESULTS*/>
                <button value="Convertible" className="body-grid-button" onClick={(e) => changeBodyType(e)} >
                  <figure className="body-grid-figure">
                    <img
                      className="body-grid-image"
                      src={Convertible}
                      alt="convertible"
                    />
                    <figcaption className="body-grid-text">
                      Convertible
                    </figcaption>
                  </figure>
                </button>
              </Link>
            </li>
            <li className="body-grid-list-item">
              <Link className="body-grid-link" to={PathConstants.RESULTS}>
                <button className="body-grid-button">
                  <figure className="body-grid-figure">
                    <img
                      className="body-grid-image"
                      src={Hatchback}
                      alt="hatchback"
                    />
                    <figcaption className="body-grid-text">
                      Hatchback
                    </figcaption>
                  </figure>
                </button>
              </Link>
            </li>
            <li className="body-grid-list-item">
              <Link className="body-grid-link" to={PathConstants.RESULTS}>
                <button className="body-grid-button" onClick={handleBodySearch}>
                  <figure className="body-grid-figure">
                    <img
                      className="body-grid-image"
                      src={Minivan}
                      alt="minivan"
                    />
                    <figcaption className="body-grid-text">Minivan</figcaption>
                  </figure>
                </button>
              </Link>
            </li>
            <li className="body-grid-list-item">
              <Link className="body-grid-link" to={PathConstants.RESULTS}>
                <button className="body-grid-button" onClick={handleBodySearch}>
                  <figure className="body-grid-figure">
                    <img className="body-grid-image" src={Suv} alt="SUV" />
                    <figcaption className="body-grid-text">SUV</figcaption>
                  </figure>
                </button>
              </Link>
            </li>
            <li className="body-grid-list-item">
              <Link className="body-grid-link" to={PathConstants.RESULTS}>
                <button className="body-grid-button" onClick={handleBodySearch}>
                  <figure className="body-grid-figure">
                    <img className="body-grid-image" src={Coupe} alt="Coupe" />
                    <figcaption className="body-grid-text">Coupe</figcaption>
                  </figure>
                </button>
              </Link>
            </li>
            <li className="body-grid-list-item">
              <Link className="body-grid-link" to={PathConstants.RESULTS}>
                <button className="body-grid-button" onClick={handleBodySearch}>
                  <figure className="body-grid-figure">
                    <img
                      className="body-grid-image"
                      src={Pickup}
                      alt="Pickup"
                    />
                    <figcaption className="body-grid-text">Pickup</figcaption>
                  </figure>
                </button>
              </Link>
            </li>
            <li className="body-grid-list-item">
              <Link className="body-grid-link" to={PathConstants.RESULTS}>
                <button className="body-grid-button" onClick={handleBodySearch}>
                  <figure className="body-grid-figure">
                    <img className="body-grid-image" src={Sedan} alt="Sedan" />
                    <figcaption className="body-grid-text">Sedan</figcaption>
                  </figure>
                </button>
              </Link>
            </li>
            <li className="body-grid-list-item">
              <Link className="body-grid-link" to={PathConstants.RESULTS}>
                <button className="body-grid-button" onClick={handleBodySearch}>
                  <figure className="body-grid-figure">
                    <img className="body-grid-image" src={Wagon} alt="Coupe" />
                    <figcaption className="body-grid-text">Wagon</figcaption>
                  </figure>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
}