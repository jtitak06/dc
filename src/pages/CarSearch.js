import React from "react";
import { Link } from "react-router-dom";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import HeroSection from "../components/HeroSection";
import SearchGrid from "../components/SearchGrid";
import SearchTables from "src/components/SearchTables";
import { creditRatings } from "src/lists/CreditRatings";
import { CarSearchQuestions } from "src/faq/CarSearchQuestions";
import { Accordion } from "src/components/Accordion";
import "./CarSearch.css";

export default function CarSearch() {
    return (
      <>
        <HeroSection />
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/"> 
            <img
              className="banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <SearchGrid />
        <div className="car-search-section">
          <SearchTables />
        </div>
        <div className="car-search-section">
          <h3 className="car-search-calculator-title">Auto Loan Rates</h3>
          <table className="car-search-table">
            <thead>
              <tr>
                <th className="car-search-table-cell title">Credit Rating</th>
                <th className="car-search-table-cell title">New Car Rates</th>
                <th className="car-search-table-cell title">Used Car Rates</th>
              </tr>
            </thead>
            <tbody>
            {Object.entries(creditRatings).map(([title, values]) => (
              <tr key={title}>
                <td className="car-search-table-cell">{title}</td>
                <td className="car-search-table-cell">{(values.new * 100).toFixed(2)}%</td>
                <td className="car-search-table-cell">{(values.used * 100).toFixed(2)}%</td>
              </tr>
            ))}
            </tbody>
          </table>
          <p className="car-search-calculator-disclaimer">* Experian's State of the Automotive Finance Market Report: Q3 2023</p>
        </div>
        <div className="car-search-section">
          <h3 className="car-search-dropdown-title">FAQ</h3>
          <Accordion item={CarSearchQuestions} keepOpen={true} />
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