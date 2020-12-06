import React from "react";
import "./index.css";
import { DropDownMenu } from "../index.styles";

export default function ChatActions() {
  return (
    <>
      <button
        className="btn btn-link text-dark  dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        type="submit"
        id="chatActions"
      >
        <i className="fas fa-ellipsis-v"></i>
      </button>
      <DropDownMenu className="card-body dropdown-menu" id="dropdown-menu">
        <div className="contact-actions">
          <div className="container" id="container-contact-actions">
            <button className="btn btn-primary">Close Chat</button>
            <br />
            <br />
            <button className="btn btn-primary">Delete Chat</button>
          </div>
        </div>
      </DropDownMenu>
    </>
  );
}
