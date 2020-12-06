import React from "react";
import "./index.css";

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
      <div
        className="card-body dropdown-menu"
        id="dropdown-menu"
        style={{ background: "inherit", border: "none" }}
      >
        <div className="contact-actions">
          <div className="container" id="container-contact-actions">
            <button className="btn btn-primary">Close Chat</button>
            <br />
            <br />
            <button className="btn btn-primary">Delete Chat</button>
          </div>
        </div>
      </div>
    </>
  );
}
