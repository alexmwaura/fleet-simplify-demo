import React from "react";
import "./index.css";
import InboxWindow from "./inboxWindow";
import { InboxChatActive, InboxChatDisabled } from "./inbox.styles";

export default function MainInboxWindow() {
  return (
    <div className="col-md-5">
      <div className="chat_list">
        <div className="container">
          <InboxChatActive className="inbox_chat">
            <InboxWindow />
          </InboxChatActive>
          <InboxChatDisabled className="inbox_chat">
            <InboxWindow />
          </InboxChatDisabled>
          <InboxChatActive className="inbox_chat">
            <InboxWindow />
          </InboxChatActive>
          <InboxChatActive className="inbox_chat">
            <InboxWindow />
          </InboxChatActive>
          <InboxChatActive className="inbox_chat">
            <InboxWindow />
          </InboxChatActive>
          <InboxChatDisabled className="inbox_chat">
            <InboxWindow />
          </InboxChatDisabled>
        </div>
      </div>
    </div>
  );
}
