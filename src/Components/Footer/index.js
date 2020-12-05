/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Section } from "./index.styles";
import "./index.css";

export default function Footer() {
  return (
    <Section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img
              src="https://www.instadriver.co/img/footerlogo.svg"
              alt="footer"
            />
          </div>
          <div className="col-md-3 col-sm-6 text-left spacing">
            <h4 className="service-heading text-left">Useful links</h4>
            <a className="links" href="#">
              About InstaDriver
            </a>
            <br />
            <a className="links" href="#">
              Verified Search (For Employers & Drivers)
            </a>
            <br />
            <a className="links" href="#">
              Top Ad Feature (For Drivers)
            </a>
            <br />
          </div>
          <div className="col-md-2 col-sm-6 text-left spacing">
            <h4 className="service-heading text-left">Useful links</h4>
            <a className="links" href="#">
              Driver Sign In
            </a>
            <br />
            <a className="links" href="#">
              Driver Sign Up
            </a>
          </div>
          <div className="col-md-2 col-sm-6 text-left spacing">
            <h4 className="service-heading text-left">Useful links</h4>
            <a className="links" href="#">
              FAQs
            </a>
            <br />
            <a className="links" href="#">
              Contact Us
            </a>
            <br />
            <a className="links" href="#">
              Terms & Conditions
            </a>
          </div>
          <div className="col-md-3 col-sm-6 text-left spacing">
            <ul>
              <h4 className="service-heading text-left">Social Media</h4>
              <li className="list-inline-item">
                <a href="#">
                  <img
                    src="https://www.instadriver.co/img/facebook.svg"
                    alt="twitter"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img
                    src="https://www.instadriver.co/img/twitter.svg"
                    alt="twitter"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img
                    src="https://www.instadriver.co/img/youtube.svg"
                    alt="twitter"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img
                    src="https://www.instadriver.co/img/instagram.svg"
                    alt="twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 text-left spacing">
            <h4 className="service-heading text-left">Contact Info</h4>
            <a className="links" href="#">
              saysomething@instadriver.co
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
