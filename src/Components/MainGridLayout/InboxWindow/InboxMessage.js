import React from "react";
import { InboxContainer, ChatIdSpan } from "./inbox.styles";
export default function InboxMessage() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="float-sm-right id-wrapper">
            <ChatIdSpan>Chat Id:324566223</ChatIdSpan>
          </div>
        </div>
      </div>
      <InboxContainer className="container" style={{ marginTop: "0px" }}>
        <div className="row">
          <div className="col-md-3">
            <img
              src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
              alt="user"
              className="rounded-circle user_img"
            />
            <h5 className="user-name">Shirly Cook</h5>
            <h5 className="user-handle">@JohntheD</h5>
          </div>
          <div
            className="col-md-9"
            style={{
              marginTop: "20px",
            }}
          >
            <h5>Inquiry about relocation</h5>
            <h5
              style={{
                color: "#000",
                fontSize: "15px",
                opacity: "0.5",
                marginTop: "12px",
              }}
            >
              Vacancy adds helps you attract potential investors who are ...
            </h5>
          </div>
          <div className="col-md-12" style={{ marginTop: "-10px" }}>
            <div className="float-sm-right time-wrapper">
              <h6 style={{ color: "green" }}>
                11:04
                <span className="online_icon">
                  <div style={{ textAlign: "center", marginTop: "2px" }}>4</div>
                </span>
              </h6>
            </div>
          </div>
        </div>
      </InboxContainer>
    </>
  );
}
