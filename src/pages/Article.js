import React from "react";
import { Link } from "react-router-dom";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import Headshot from "../images/mark-bilek.jpg";
import "./Article.css";

export default function Article() {
    return (
      <>
        <div className="article-banner-ad-wrapper">
          <Link className="article-banner-ad" to="/">
            <img
              className="article-banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <h1 className="article-title">2024 Subaru Crosstrek Review</h1>
        <h3 className="article-subtitle">
          Refined More Than Refreshed, A Compelling Choice in 2024
        </h3>
        <p className="article-author">by: Mark Bilek</p>
        <div className="article-content-wrapper">
          <div className="article-vertical-ad-wrapper">
            <Link>
              <img src={ToyotaVertical} alt="ad" />
            </Link>
          </div>
          <div className="article-content">
            
          </div>
          <div className="article-vertical-ad-wrapper">
            <Link>
              <img src={FordVertical} alt="ad" />
            </Link>
          </div>
        </div>
        <div className="article-author-box">
          <div className="article-headshot-wrapper">
            <img
              className="article-headshot-image"
              src={Headshot}
              alt="headshot"
            />
            <h5 className="article-headshot-title">Mark Bilek</h5>
          </div>
          <div className="article-author-paragraph-wrapper">
          <p className="article-author-paragraph">
            Mark Bilek is the Senior Director of Communications and Technology
            for the Chicago Auto Trade Association and the General Manager for
            DriveChicago.com. He is also responsible for developing and
            maintaining the <Link className="article-author-link">Chicago Auto Show</Link> Web site.
          </p>
          <p className="article-author-paragraph">
            Mark has been reviewing vehicles for more than two decades.
            Previously, he was associate publisher at Consumer Guide, where he
            oversaw publication of Consumer Guide Car & Truck Test, Consumer
            Guide's Used Car Book, and ConsumerGuide.com. He was also
            responsible for publication of "Collectible Automobile" and various
            hardcover automotive titles. In 2001 and 2002 he served as president
            of a Midwest Automotive Media Association. Mark has appeared on NBC
            TV, ABC TV, Fox News, WGN and MotorTrend TV as an automotive
            consultant. He hosts the Drive Chicago radio show on WLS 890 AM and
            was a regular guest on WGN Radio's Steve & Johnnie show. Mark lives
            in the northwest suburbs with his wife and three sons.
          </p>
          </div>
        </div>
        <div className="article-banner-ad-wrapper">
          <Link className="article-banner-ad" to="/">
            <img
              className="article-banner-ad-image"
              src={FordBanner}
              alt="placeholder"
            />
          </Link>
        </div>
      </>
    );
}