import React from "react";
import "./index.css";
import MessageHeader from "./MessageHeader";
import MessageWindow from "./MessageWindow"

export default function MessageBox() {
  return (
    <div className="col-md-7">
      <div className="container wrapper">
        <MessageHeader />
        <MessageWindow />
      </div>
    </div>
  );
}
