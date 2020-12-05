import React from "react";
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
        <div className="dropdown-menu contact-info-dropdown" style={{ border: "0" }}>
        <div className="filter-dropdown">
          <div className="card-header" style={{textAlign: 'center'}}>
        <i className="fas fa-exclamation" style={{color:'goldenrod'}}></i>&nbsp;&nbsp; Contact Info
          </div>
          <div className="container">
          <div className="row">
            <div className="col-md-4">
            <li className="list-inline-item" style={{fontSize: '10px'}}>
                Mobile Number
              </li>
            </div>
            <div className="col-md-7 contact-info">
            <li className="list-inline-item" style={{fontSize: '12px'}}>
                0712345678
              </li>
            </div>
            </div>
            <br/>
            <br/>
            <div className="row">
            <div className="col-md-4">
            <li className="list-inline-item" style={{fontSize: '10px'}}>
                Email Address
              </li>
            </div>
            <div className="col-md-7 contact-info">
            <li className="list-inline-item" style={{fontSize: '12px'}}>
                johndoe@gmail.com
              </li>
            </div>
            </div>
          </div>
           
        </div>
   
      </div>
      
    </>
  );
}
