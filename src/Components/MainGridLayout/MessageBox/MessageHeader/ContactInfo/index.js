import React from "react";
import { DropDownMenu,CardHeader } from "../index.styles";
import "./index.css";

export default function ContactInfo() {
  return (
    <>
      <button
        className="btn btn-primary  dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        type="submit"
        id="contactInfo"
      >
        <i className="fas fa-exclamation"></i>&nbsp;&nbsp; Contact Info
      </button>
      <DropDownMenu
        className="dropdown-menu"
      >
        <div className="contact-info-dropdown">
          <CardHeader
            className="card-header"
          >
            <i
              className="fas fa-exclamation"
              style={{ color: "goldenrod" }}
            ></i>
            &nbsp;&nbsp; Contact Info
          </CardHeader>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="list-inline-item" style={{ fontSize: "10px" }}>
                  Mobile Number
                </span>
              </div>
              <div className="col-md-5 contact-info">
                <span className="list-inline-item" style={{ fontSize: "12px" }}>
                  0712345678
                </span>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-4">
                <span className="list-inline-item" style={{ fontSize: "10px" }}>
                  Email Address
                </span>
              </div>
              <div className="col-md-5 contact-info">
                <span className="list-inline-item" style={{ fontSize: "12px" }}>
                  johndoe@gmail.com
                </span>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </DropDownMenu>
    </>
  );
}
