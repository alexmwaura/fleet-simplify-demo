import React from "react";
import { DropDownMenu, CardHeader } from "../index.styles";
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
        style={{
          marginLeft: '-36px'
        }}
      >
        <i
          className="fas fa-exclamation"
        ></i>{" "}
        Contact Info
      </button>
      <DropDownMenu className="dropdown-menu">
        <div className="contact-info-dropdown">
          <CardHeader className="card-header">
            <i
              className="fas fa-exclamation"
              style={{ color: "goldenrod" }}
            ></i>
            &nbsp;&nbsp; Contact Info
          </CardHeader>
          <div
            className="container"
            style={{
              paddingRight: "57px",
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <span
                  className="list-inline-item"
                  style={{
                    fontSize: "13px",
                    opacity: "0.5",
                    marginLeft: "15px",
                  }}
                >
                  Mobile Number
                </span>
              </div>
              <div className="col-md-6">
                <span
                  className="list-inline-item contact-info"
                  style={{ fontSize: "15px" }}
                >
                  0712345678
                </span>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-6">
                <span
                  className="list-inline-item"
                  style={{
                    fontSize: "13px",
                    opacity: "0.5",
                    marginLeft: "15px",
                  }}
                >
                  Email Address
                </span>
              </div>
              <div className="col-md-6">
                <span
                  className="list-inline-item contact-info"
                  style={{ fontSize: "16px" }}
                >
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
