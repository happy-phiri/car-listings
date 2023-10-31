import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div>
          <h1>
            From Classic to Contemporary – Your Perfect Car is Just a Click
            Away.
          </h1>
          <p>
            Explore a World of Cars and Discover Your Perfect Ride. Whether It's
            a Family Adventure or a Solo Drive, We've Got Your Journey Covered.
          </p>
          <Link className="btn btn-outline-warning" to="cars">
            Find Your Car
          </Link>
        </div>

        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="icon">
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="icon">
            <FontAwesomeIcon icon={faXTwitter} size="2xl" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="icon">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
