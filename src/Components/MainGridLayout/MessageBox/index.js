import React from "react";
import "./index.css";
import MessageHeader from "./MessageHeader";
import MessageWindow from "./MessageWindow";

export default function MessageBox() {
  return (
    <div className="col-md-7" style={{bottom: '39px'}}>
      <div className="container">
        <MessageHeader />
        <MessageWindow />
      </div>
    </div>
  );
}
