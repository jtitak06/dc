import React from "react";
import { Link } from "react-router-dom";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import ToyotaSquare from "../images/Square-Ad-Toyota.jpg";
import FordSquare from "../images/Square-Ad-Ford.jpg";
import HeroSection from "../components/HeroSection";
import SearchGrid from "../components/SearchGrid";
import Features from "../components/Features";
import CarouselDisplay from "../components/CarouselDisplay";
import Reviews from "../components/Reviews";
import SearchTables from "../components/SearchTables";
import "./Home.css";

export default function Home() {    
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
        <div className="home-ads-wrapper">
          <div className="home-ads-content">
            <div className="home-square-ad-wrapper">
              <Link className="home-square-ad" id="left-ad" to="/">
                <img
                  src={FordSquare}
                  alt="square"
                />
              </Link>
            </div>
            <SearchGrid />
            <div className="home-square-ad-wrapper">
              <Link className="home-square-ad" id="right-ad" to="/">
                <img
                  src={ToyotaSquare}
                  alt="square"
                />
              </Link>
            </div>
          </div>
        </div>
        <Features />
        <div className="carousel-section">
          <div className="carousel-header">
            <h3 className="carousel-title">Featured Vehicles</h3>
          </div>
          <CarouselDisplay />
        </div>
        <Reviews />
        <div className="search-section">
          <h3 className="search-title">Find the Right Car for You Today!</h3>
          <CarouselDisplay />
        </div>
        <SearchTables />
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