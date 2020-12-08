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
      <a className="navbar-brand" href="#">
        <img
          src="https://www.instadriver.co/img/logo.svg"
          alt="instadriver"
          style={{
            maxWidth: "100%",
            marginLeft: "4rem",
            // paddingLeft: "5rem",
          }}
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
        <ul className="navbar-nav ml-auto collapse navbar-collapse" id="navbarResponsive">
          <li className="nav-item" style={{marginLeft: '5rem'}}>
            <ListAnchor className="btn btn-outline-dark" id="btn-navbar" href="#">
              Jobs
            </ListAnchor>
          </li>
          <li className="nav-item" style={{marginLeft: '2rem'}}>
            <ListAnchor className="btn btn-outline-dark" id="btn-navbar" href="#">
              Get Social
            </ListAnchor>
          </li>
          <li className="nav-item" style={{marginLeft: '2rem'}}>
            <ListAnchor className="btn btn-outline-dark" id="btn-navbar" href="#">
              James Keem
            </ListAnchor>
          </li>
          <li className="nav-item">
            <ListAnchor className="btn" id="btn-navbar" href="#">
              Menu &nbsp;
              <span><i className="fas fa-bars"></i></span>
            </ListAnchor>
          </li>
        </ul>
    </nav>
  );
}
