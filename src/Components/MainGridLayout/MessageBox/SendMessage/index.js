import React from "react";
import "./index.css";

export default function SendMessage() {
  return (
    <div className="container">
      <div className="send_message">
        <div className="card-body">
          <textarea
            name=""
            className="form-control"
            placeholder="Type your message..."
          ></textarea>
          <div className="input-group-append">
            <div className="container" style={{ height: "fit-content" }}>
              <div className="float-left">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fas fa-paperclip"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="far fa-smile"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-microphone"></i>
                  </li>
                </ul>
              </div>
              <div className="float-right">
                <div className="send_btn">
                  <i
                    className="fas fa-paper-plane"
                    style={{ color: "#fff", marginLeft: "1rem" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
