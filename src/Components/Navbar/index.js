/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ListAnchor } from "./index.styles";
import "./index.css";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.instadriver.co/img/logo.svg"
            alt="instadriver"
          />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <ListAnchor className="btn btn-outline-dark" href="/projects">
                Jobs
              </ListAnchor>
            </li>
            &nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <ListAnchor className="btn btn-outline-dark" href="/about">
                Get Social
              </ListAnchor>
            </li>
            &nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <ListAnchor className="btn btn-outline-dark" href="/contact">
                James Keem
              </ListAnchor>
            </li>
            <li className="nav-item">
              &nbsp;&nbsp;&nbsp;
              <ListAnchor className="btn" href="/contact">
                Menu &nbsp;&nbsp;&nbsp;
                <i className="fas fa-bars"></i>
              </ListAnchor>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
