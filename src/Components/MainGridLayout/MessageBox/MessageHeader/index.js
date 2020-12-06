import React from "react";
import ChatActions from "./ChatActions";
import ContactInfo from "./ContactInfo";
import { MainRow } from "./index.styles";

export default function MessageHeader() {
  return (
    <MainRow className="row">
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
            <ContactInfo />
          </li>
          <li className="list-inline-item">
            <ChatActions />
          </li>
        </ul>
      </div>
    </MainRow>
  );
}
