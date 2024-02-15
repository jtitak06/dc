import { Link } from "react-router-dom";
import { vehicles } from "src/lists/Vehicles";
import PathConstants from "src/routes/PathConstants";
import "./SearchTables.css";

export default function SearchTables() {
    return (
      <>
        <div className="search-table-section">
          <div className="search-table">
            <h5 className="search-table-title">Cars For Sale By City</h5>
            <ul className="search-table-list cities">
              <li className="search-table-list-item">
                <Link className="search-table-text">Aurora</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Chicago</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Des Plaines</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Elgin</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Evanston</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Glenview</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Hoffman Estates</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Joliet</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Lombard</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Matteson</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Naperville</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Oak Lawn</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Oak Park</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Orland Park</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Palatine</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Park Ridge</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Schaumburg</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Skokie</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Tinley Park</Link>
              </li>
              <li className="search-table-list-item">
                <Link className="search-table-text">Waukegan</Link>
              </li>
            </ul>
            <div className="search-table-link-wrapper">
                <Link className="search-table-link" to={PathConstants.LISTINGS_DEALER}>See All</Link>
            </div>
          </div>
          <div className="search-table">
            <h5 className="search-table-title">Preowned Vehicles</h5>
            <ul className="search-table-list vehicles">
              {vehicles.map((item, i) => {
                return(
                  <li className="search-table-list-item" key={i}>
                    <Link className="search-table-text">{item}</Link>
                  </li>
                )
              })}
            </ul>
            <div className="search-table-link-wrapper">
                <Link className="search-table-link">See All</Link>
            </div>
          </div>
          <div className="search-table">
            <h5 className="search-table-title">New Cars for Sale</h5>
            <ul className="search-table-list vehicles">
            {vehicles.map((item, i) => {
                return(
                  <li className="search-table-list-item" key={i}>
                    <Link className="search-table-text">{item}</Link>
                  </li>
                )
              })}
            </ul>
            <div className="search-table-link-wrapper">
                <Link className="search-table-link">See All</Link>
            </div>
          </div>
        </div>
      </>
    );
}