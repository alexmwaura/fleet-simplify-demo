import React from "react";
import "./index.css";
import InboxMessage from "./InboxMessage";
import { InboxChatActive, InboxChatDisabled } from "./inbox.styles";

export default function MainInboxMessage() {
  return (
    <div className="col-md-5"
    
    >
      <div className="chat_list">
        <div className="container" style={{ height: "10vh" }}>
          <InboxChatActive className="inbox_chat">
            <InboxMessage />
          </InboxChatActive>
          <InboxChatDisabled className="inbox_chat">
            <InboxMessage />
          </InboxChatDisabled>
          <InboxChatActive className="inbox_chat">
            <InboxMessage />
          </InboxChatActive>
          <InboxChatActive className="inbox_chat">
            <InboxMessage />
          </InboxChatActive>
          <InboxChatActive className="inbox_chat">
            <InboxMessage />
          </InboxChatActive>
          <InboxChatDisabled className="inbox_chat">
            <InboxMessage />
          </InboxChatDisabled>
        </div>
      </div>
    </div>
  );
}
