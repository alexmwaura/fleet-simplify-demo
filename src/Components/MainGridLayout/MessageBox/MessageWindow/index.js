import React from "react";
import "./index.css";
import SendMessage from "../SendMessage";

export default function MessageWindow() {
  return (
    <div
      style={{
        boxShadow: "0px 1px 1px 0px rgb(175, 173, 173)",
        borderRadius: "0px 0px 10px 10px",
        marginLeft: "1px",
        marginRight: "1px",
      }}
    >
      <div className="message-box">
        <div className="col-md-12">
          <div className="float-sm-right id-wrapper2">
            <span>Chat Id:324566223</span>
          </div>
        </div>
        <br />
        <div className="col-md-12">
          <div className="card-body">
            <div className="msg_container_inbox">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </div>
            <span className="msg_time">11:00 a.m.</span>
          </div>
          <div className="card-body">
            <div className="msg_container_inbox2">
              Lorem Ipsum is simply dummy
            </div>
            <span className="msg_time2">
              11:30 a.m.
              <i
                className="fas fa-check-double"
                style={{ color: "#d39e00" }}
              ></i>
            </span>
          </div>
          <div className="card-body">
            <div className="msg_container_inbox">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>
            <span className="msg_time">11:45 a.m.</span>
          </div>
          <div className="card-body">
            <div className="msg_container_inbox2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </div>
            <span className="delete_icon">
              <i className="far fa-trash-alt"></i>
            </span>
            <span className="msg_time2">
              11:50 a.m. <i className="fas fa-check-double"></i>
            </span>
          </div>
          <div className="card-body">
            <div className="msg_container_inbox2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <span className="delete_icon">
              <i className="far fa-trash-alt"></i>
            </span>
            <span className="msg_time2">
              11:50 a.m. <i className="fas fa-check"></i>
            </span>
          </div>
        </div>
      </div>
      <SendMessage />
    </div>
  );
}
