import React from "react";

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
        style={{
          border: "0",
          alignItems: "center",
          float: "left",
          marginRight: "60px",
          background:'#fff',
          width: 'fit-content'
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          <button className="btn btn-primary">Close Chat</button>
          <br />
          <br />
          <button className="btn btn-primary">Delete Chat</button>
        </div>
      </div>
    </>
  );
}
