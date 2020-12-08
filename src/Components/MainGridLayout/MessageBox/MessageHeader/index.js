import React from "react";
import ChatActions from "./ChatActions";
import ContactInfo from "./ContactInfo";
import { MainRow } from "./index.styles";

export default function MessageHeader() {
  return (
    <div
      style={{
        backgroundColor: "rgb(193 217 245)",
        borderRadius: '10px 10px 0px 0px',
      }}
    >
      <MainRow className="row">
        <div className="col-md-2 user-status"
        style={{
          paddingTop:'5px',
          paddingLeft: '10px',
          paddingRight: '10px'
        }}
        >
          <div className="user-metadata"
          style={{
            marginLeft:'2px'
            
          }}
          >
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            alt="user"
            className="rounded-circle"
          />
          <h5 className="user-name">Shirly Cook</h5>
          <h5 className="user-handle">@JohntheD</h5>
          </div>
        </div>
        <div className="col-md-7 header-data">
          <h5
            style={{
              marginTop: "10px",
              paddingRight: "2rem",
              fontSize: '15px'
            }}
          >
            Inquiry about relocation from Nairobi
          </h5>
        </div>
        <div className="col-md-3 header-data">
          <ul className="list-inline">
            <li className="list-inline-item">
              <ContactInfo />
              <span><ChatActions /></span>
            </li>
            
          </ul>
        </div>
      </MainRow>
    </div>
  );
}
