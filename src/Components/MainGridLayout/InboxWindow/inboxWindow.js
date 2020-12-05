import React from "react";

export default function InboxWindow() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="float-sm-right id-wrapper">
            <span style={{ marginRight: "10px", marginLeft: "10px" }}>
              Chat Id:324566223
            </span>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col-md-3">
            <img
              src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
              alt="user"
              className="rounded-circle user_img"
            />
            <h5 className="user-name"> 
                Shirly Cook
            </h5>
            <h5 className="user-handle"> 
                @JohntheD
            </h5>
          </div>
          <div className="col-md-9">
            <h5>Inquiry about relocation</h5>
            <code style={{ color: "#000" }}>
              Vacancy adds helps you attract potential investors who are ...
            </code>
          </div>
          <div className="col-md-12">
            <div className="float-sm-right time-wrapper">
              <h6 style={{ color: "green" }}>
                11:04
                <span className="online_icon">
                  <div style={{ textAlign: "center" }}>4</div>
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
