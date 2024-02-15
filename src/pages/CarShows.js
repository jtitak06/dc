import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../images/Car-Shows-Hero-Image.png";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import "./CarShows.css";

export default function CarShows() {
    return (
      <>
        <div className="car-shows-hero-section">
          <img className="car-shows-hero-image" src={HeroImage} alt="freeway" />
          <div className="car-shows-title-wrapper">
            <h1 className="car-shows-title">Car Shows and Cruise Nights</h1>
          </div>
        </div>
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/">
            <img
              className="banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <div className="car-shows-content-wrapper">
          <div className="car-shows-vertical-ad-wrapper">
            <Link>
              <img src={ToyotaVertical} alt="ad" />
            </Link>
          </div>
          <div className="car-shows-middle-section">
            <h2 className="car-shows-middle-title">Featured Car Show</h2>
            <div className="car-shows-feature-wrapper">
              <div className="car-shows-feature-card">
                <h3 className="car-shows-feature-section-title">
                  Saturday, February 10, 2024 in Chicago, IL
                </h3>
                <p className="car-shows-feature-section-text">
                  2301 S. King Dr. The Chicago Auto Show returns to McCormick
                  Place exhibit hall from Saturday, Feb. 10 through Monday, Feb.
                  19. Show opens at 10 am every day. Tickets available for
                  purchase at McCormick Place by credit card only: $17 for
                  adults, $12 for Senior Citizens ages 62 or better, $12 for
                  children ages 4-12. Children three and younger admitted free
                  with paid adult For more information or to purchase tickets in
                  advance, visit:{" "}
                  <a
                    className="car-shows-item-link"
                    href="chicagoautoshow.com"
                    target="_blank"
                  >
                    www.chicagoautoshow.com
                  </a>
                </p>
              </div>
              <div className="car-shows-submit-listing">
                <h3 className="car-shows-feature-section-title">
                  Submit Your Event!
                </h3>
                <p className="car-shows-feature-section-text">
                  Not only is DriveChicago.com a great place to shop for a new
                  or used vehicle, it's Chicago's summertime home for a complete
                  listing of car shows and cruise nights. Click the link below
                  to submit your car show or cruise night for listing on
                  DriveChicago.com.
                </p>
                <div className="car-shows-submit-listing-link-wrapper">
                  <Link
                    className="car-shows-submit-listing-link"
                    // to={PathConstants.LISTINGS_CAR_SHOWS}
                  >
                    Enter Info »
                  </Link>
                </div>
              </div>
            </div>
            <h2 className="car-shows-middle-title">Car Shows</h2>
            <ul className="car-shows-list">
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sat, Feb 10 in Chicago, IL
                </h4>
                <p className="car-shows-item-text">
                  2301 S. King Dr. The Chicago Auto Show returns to McCormick
                  Place exhibit hall from Saturday, Feb. 10 through Monday, Feb.
                  19. Show opens at 10 am every day. Tickets available for
                  purchase at McCormick Place by credit card only: $17 for
                  adults, $12 for Senior Citizens ages 62 or better, $12 for
                  children ages 4-12. Children three and younger admitted free
                  with paid adult For more information or to purchase tickets in
                  advance, visit:{" "}
                  <a
                    className="car-shows-item-link"
                    href="www.chicagoautoshow.com"
                  >
                    www.chicagoautoshow.com
                  </a>
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sat, Feb 17 in Blue Island, IL
                </h4>
                <p className="car-shows-item-text">
                  13357 Olde Western Ave. Romin Chariots Car Club presents
                  'Winter Blues' Scale Model Car Show from 1pm - 4pm at the Blue
                  Island Beer Co. Show is open to all scale models: cars,
                  trucks, planes, motorcycles, spaceships etc. No classes. The
                  club picks first, second and third place kids trophies. Cost:
                  $10 per builder, limit five models per builder.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sun, Feb 18 in St. Charles, IL
                </h4>
                <p className="car-shows-item-text">
                  525 S. Randall Rd. 32nd Annual Buick Olds Pontiac Cadillac
                  Swap Meet and Car Corral indoors from 8am - 2pm at the Kane
                  County Fairgrounds sponsored by the Illinois Valley Olds Club,
                  the Chicagoland Chapter of the Buick Club of America and the
                  Pontiac Oakland Club of Illinois. Public admission :$8.
                  Questions? Call Tony at (847) 521-3130 or visit:
                  <a
                    className="car-shows-item-link"
                    href="www.bopcswap.com"
                    target="_blank"
                  >
                    www.bopcswap.com
                  </a>
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sat, Feb 24 in Crete, IL
                </h4>
                <p className="car-shows-item-text">
                  1329 Commerce Drive. Caffeine and Chrome 9am - Noon sponsored
                  by Gateway Classic Cars. Open to the public and all makes and
                  models welcome. No entry fee or admission charge. Pastries and
                  Coffee while they last.Plenty of parking.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sun, Mar 03 in Milwaukee, WI
                </h4>
                <p className="car-shows-item-text">
                  400 West Wisconsin. The Milwaukee Auto Show runs daily from
                  Saturday, Feb. 24 through Sunday, March 3 at the Baird Center.
                  Tickets are $15 at the door for adults 13 and over
                  (cashless/credit cards only) or $12 online when purchasing
                  prior to Feb. 24, 2024. After Feb. 23rd, online adult tickets
                  are $14. For more information including hours of opperation,
                  visit:{" "}
                  <a
                    className="car-shows-item-link"
                    href="www.autoshowmilwaukee.com"
                    target="_blank"
                  >
                    www.autoshowmilwaukee.com
                  </a>
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sun, Mar 17 in Peotone , IL
                </h4>
                <p className="car-shows-item-text">
                  710 S. West St. Eighth Annual Chicagoland Racing Memorabilia &
                  Collectibles Show 10am - 2pm at the Will County Fairgrounds.
                  For more information, visit:{" "}
                  <a
                    href="www.Chicagolandracersreunion.com"
                    target="_blank"
                    className="car-shows-item-link"
                  >
                    www.Chicagolandracersreunion.com
                  </a>
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sun, Mar 17 in Roselle, IL
                </h4>
                <p className="car-shows-item-text">
                  333 E. Irving Park Rd. Annual Model A Restorers Club Winter
                  Swap Meet at Friendly Ford. All makes, models and automobilia
                  welcome. Coffee, donuts and lunch available. To reserve vendor
                  space, email: nick.clancy@yahoo.com. For general show
                  information, call Ken: 630-697-3906.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sun, May 05 in Gilberts, IL
                </h4>
                <p className="car-shows-item-text">
                  11 Galligan Rd. AY-CAR-AMBA Car, Truck and Cycle show
                  celebrating Cinco de Mayo 9am - 3pm at Crusin' & Pub 72.
                  Authentic Mexican food all day plus Cerveza and Tequila
                  specials. Hosted by Crusing Music Radio. Registration 9am -
                  Noon. Spectators admitted free. Trophies and raffle prizes
                  awarded at 3pm. Entry fee: $20 benefiting Autism research. For
                  more information, visit:
                  <a
                    href="www.cruisingilberts.com"
                    target="_blank"
                    className="car-shows-item-link"
                  >
                    www.cruisingilberts.com
                  </a>
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sat, May 18 in Lockport, IL
                </h4>
                <p className="car-shows-item-text">
                  15056 Archer Ave. Spring Car Show presented by the Midwest
                  Gear Grinders Club and sponsored in part by Turtle Wax 9am -
                  3pm. Food and Beverage sales provided by the American Legion.
                  First and second place trophies in 14 judged categories. Car
                  Care goodie bags for first 100 participants and a 50/50
                  raffle. Registration from 9am - Noon trophies awarded at 3pm.
                  Entry fee:$20 at the gate.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sun, May 19 in Gurnee, IL
                </h4>
                <p className="car-shows-item-text">
                  Gurnee Mills Mall Parking Lot E. Rods for Remembrance Car Show
                  Noon - 5pm. in conjunction with Lake County First Responders
                  Expo 25th Anniversary and Gurnee Mills. The Tunnels to Towers
                  Never Forget mobile exhibit will be on display as part of the
                  Expo. This event is in support of first responders, their
                  families and veterans. Eighteen judged classes with trophies
                  awarded at 4:30 pm. Food vendors on site and a 50/50 raffle.
                  Registration fee: $15 day of show. All proceeds benefit
                  Tunnels to Towers. Registration: 10am. - Noon.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sun, Jun 02 in Big Rock, IL
                </h4>
                <p className="car-shows-item-text">
                  48W508 Hinckley Rd. 14th Annual Car, Truck, Tractor and
                  Motorcycle Show at Plowman's Park 8am - 4pm. This years
                  special feature: orphan vehicles. Registration 8am - 11am,
                  trophies awarded at 3:30pm. Vehicles must be 25 years or
                  older. Free admission, parking and registration. Proceeds
                  benefit the Big Rock HIstorical Society. For more information,
                  call Barb at (630) 768-3251 or visit:
                  <a
                    href="www.bigrockcarshow.org"
                    target="_blank"
                    className="car-shows-item-link"
                  >
                    www.bigrockcarshow.org
                  </a>
                  .
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sun, Jun 09 in Peotone , IL
                </h4>
                <p className="car-shows-item-text">
                  710 S. West St. 52nd Annual Peotone Swap Meet, Car Corral and
                  Show Car Display 7am - 3pm rain or shine at the Will County
                  Fairgrounds sponsored by Phillips Chevrolet. All makes and
                  models welcome. Show car and driver: $15 ($5 for each
                  additional passenger). Please enter the west gate and arrive
                  together to park together. Spectator admission: $5 (Under 15
                  admitted free). Free public parking for spectators in
                  showgrounds. For more information including Car Corral
                  pricing, visit:{" "}
                  <a
                    href="www.peotoneswapmeet.com"
                    target="_blank"
                    className="car-shows-item-link"
                  >
                    www.peotoneswapmeet.com
                  </a>
                </p>
              </li>
            </ul>
            <h2 className="car-shows-middle-title">Cruise Nights</h2>
            <ul className="car-shows-list">
              <h4 className="car-shows-day">Monday</h4>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title"> Wauconda, IL </h4>
                <p className="car-shows-item-text">
                  Route 176 (Liberty St.) between Bangs St. and W. Mill St.
                  Wauconda Cruise Nights 5pm-8pm, third Tuesday of the month
                  from June through September. Dates include June 18, July 16,
                  August 20 and September 17. Enter off Route 176 and W Mill
                  Street. For more information, call (847) 526-9600.{" "}
                  <a
                    className="car-shows-item-link"
                    href="https://waucondacruisenight.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://waucondacruisenight.com
                  </a>
                </p>
              </li>
              <h4 className="car-shows-day">Tuesday</h4>
              <h4 className="car-shows-day">Wednesday</h4>
              <h4 className="car-shows-day">Thursday</h4>
              <h4 className="car-shows-day">Friday</h4>
              <h4 className="car-shows-day">Saturday</h4>
              <h4 className="car-shows-day">Sunday</h4>
            </ul>
          </div>
          <div className="car-shows-vertical-ad-wrapper">
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