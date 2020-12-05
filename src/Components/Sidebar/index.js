/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { SideBar, SideBarGrid } from "./index.styles";
import "./index.css";

export default function Sidebar() {
  return (
    <SideBarGrid className="col-md-2 mx-auto">
      <div className="container">
        <SideBar className="list-group align-items-center">
          <a
            className="list-group-item list-group-item-action dropdown-toggle"
            id="list-home-list"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href="#list-home"
            role="tab"
            aria-controls="home"
          >
            <i className="far fa-user-circle"></i>
            &nbsp;&nbsp;Employer Profile
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </div>
          <a
            className="list-group-item list-group-item-action"
            id="list-profile-list"
            data-toggle="list"
            href="#list-profile"
            role="tab"
            aria-controls="profile"
          >
            <i className="fas fa-taxi"></i>
            &nbsp;&nbsp;Onboard Your Vehicles
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-messages-list"
            data-toggle="list"
            href="#list-messages"
            role="tab"
            aria-controls="messages"
          >
            <i className="fas fa-search"></i>&nbsp;&nbsp; Search and Hire
            Drivers
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-settings-list"
            data-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="settings"
          >
            <i className="far fa-envelope"></i>
            &nbsp;&nbsp; Recruitment
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-settings-list"
            data-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="settings"
          >
            <i className="fas fa-network-wired"></i>
            &nbsp;&nbsp; My Organisations
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-settings-list"
            data-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="settings"
          >
            <i className="fas fa-star"></i>
            &nbsp;&nbsp; Rate A Driver
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-settings-list"
            data-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="settings"
          >
            <i className="far fa-calendar"></i>
            &nbsp;&nbsp; My Subscription
          </a>
        </SideBar>
      </div>
    </SideBarGrid>
  );
}
