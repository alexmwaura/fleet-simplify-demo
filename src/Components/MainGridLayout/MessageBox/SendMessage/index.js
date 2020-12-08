import React from "react";
import "./index.css";

export default function SendMessage() {
  return (
    <div className="container">
      <div className="send_message">
        <div className="card-body" style={{
          boxShadow: '0px 0px 1px 1px rgb(241, 197, 68)',
          borderRadius: '5px'
          
        }}>
          <textarea
            name=""
            className="form-control"
            placeholder="Type your message..."
          ></textarea>
          <div className="input-group-append"
          style={{
            borderRadius: '0'
          }}
          >
            <div className="container" style={{ height: "fit-content",
            marginTop: '17px'
          }}>
              <div className="float-left"
              >
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fas fa-paperclip"></i>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <li className="list-inline-item">
                    <i className="far fa-smile"></i>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;
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
