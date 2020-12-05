import React from "react";
import ChatActions from "./ChatActions";
import ContactInfo from "./ContactInfo";

export default function MessageHeader() {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "rgb(193 217 245)",
        borderTop: "none",
        height: "auto",
        boxShadow: "1px 1px 3px",
        marginRight: '0px',
        marginLeft: '0px'
      }}
    >
      <div className="col-md-2 user-status">
        <img
          src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
          alt="user"
          className="rounded-circle"
        />
        <h5 className="user-name">Shirly Cook</h5>
        <h5 className="user-handle">@JohntheD</h5>
      </div>
      <div className="col-md-6 header-data">
        <h5>Inquiry about relocation</h5>
      </div>
      <div className="col-md-4 header-data">
        <ul className="list-inline">
          <li className="list-inline-item">
            <ContactInfo/>
          </li>
          <li className="list-inline-item">
            <ChatActions/>
          </li>
        </ul>
      </div>
    </div>
  );
}
