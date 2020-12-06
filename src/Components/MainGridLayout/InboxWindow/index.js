import React from "react";
import "./index.css";
import InboxWindow from "./inboxWindow";

export default function MainInboxWindow() {
  return (
    <div className="col-md-5">
      <div className="chat_list">
        <div className="container">
          <div
            className="inbox_chat"
            style={{
              backgroundColor: "rgb(193 217 245)",
              border: "1px #f5e556 solid",
              borderTop: "none",
            }}
          >
            <InboxWindow />
          </div>
          <br />
          <br />
          <div
            className="inbox_chat"
            style={{
              backgroundColor: "#e9ecef",
              border: "1px rgb(232 221 221) solid",
              borderTop: "none",
            }}
          >
            <InboxWindow />
          </div>
          <br />
          <br />
          <div
            className="inbox_chat"
            style={{
              backgroundColor: "rgb(193 217 245)",
              border: "1px #f5e556 solid",
              borderTop: "none",
            }}
          >
            <InboxWindow />
          </div>
          <br />
          <br />
          <div
            className="inbox_chat"
            style={{
              backgroundColor: "rgb(193 217 245)",
              border: "1px #f5e556 solid",
              borderTop: "none",
            }}
          >
            <InboxWindow />
          </div>
          <br />
          <br />
          <div
            className="inbox_chat"
            style={{
              backgroundColor: "#e9ecef",
              border: "1px rgb(232 221 221) solid",
              borderTop: "none",
            }}
          >
            <InboxWindow />
          </div>
          <br />
          <br />
          <div className="inbox_chat">
            <InboxWindow />
          </div>
        </div>
      </div>
    </div>
  );
}
