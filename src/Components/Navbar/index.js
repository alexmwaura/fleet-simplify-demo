import React from "react";
import {MainDiv} from "./index.styles"

export default function Navbar() {
  return (
    <MainDiv className="container">
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
        <img src="https://www.instadriver.co/img/logo.svg" alt="instadriver" />
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
                      <a
                        className="btn btn-outline-dark"
                        href="/projects"
                      >
                        View Projects
                      </a>
                    </li>
                    &nbsp;&nbsp;&nbsp;
                    <li className="nav-item">
                      <a
                        className="btn btn-outline-dark"
                        href="/about"
                      >
                        About Me
                      </a>
                    </li>
                    &nbsp;&nbsp;&nbsp;
                    <li className="nav-item">
                      <a
                        className="btn btn-outline-dark"
                        href="/contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
          {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
    </MainDiv>
  );
}
