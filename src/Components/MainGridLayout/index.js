import React from "react";
import "./index.css";
import SearchBar from "./SearchBar";
import InboxWindow from "./InboxWindow";
import MessageBox from "./MessageBox";

export default function MainGridLayout() {
  return (
    <div
      className="col-md-10 col-md-10 mx-auto main-grid"
      style={{ marginBottom: "100px", paddingLeft: "35px" }}
    >
      <SearchBar />
      <div className="row">
        <InboxWindow />
        <MessageBox />
      </div>
    </div>
  );
}
