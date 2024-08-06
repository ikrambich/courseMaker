import React, { useState } from "react";
import logo from '../images/logo.png';

const Sidebar = () => {
  const [active, setActive] = useState(null);

  const handleClick = (menuItem) => {
    setActive(menuItem);
  };

  return (
    <div className="sidebar">
      <div className="profile">
      <img className='image' src={logo} alt="Hassan Alzahabi" /> 
        <h2>Hassan Alzahabi</h2>
        <p>alzahabi@vixiapp.com</p>
      </div>
      <ul className="menu">
        <li
          className={active === "dashboard" ? "active" : ""}
          onClick={() => handleClick("dashboard")}
        >
          <span role="img" aria-label="dashboard">
            📊
          </span>
          <span>Dashboard</span>
        </li>
        <li
          className={active === "create-course" ? "active" : ""}
          onClick={() => handleClick("create-course")}
        >
          <span role="img" aria-label="create-course">
            ➕
          </span>
          <span>Create Course</span>
        </li>
        <li
          className={active === "avatars" ? "active" : ""}
          onClick={() => handleClick("avatars")}
        >
          <span role="img" aria-label="avatars">
            👤
          </span>
          <span>My avatars</span>
        </li>
        <li
          className={active === "courses" ? "active" : ""}
          onClick={() => handleClick("courses")}
        >
          <span role="img" aria-label="courses">
            📚
          </span>
          <span>My Courses</span>
        </li>
        <li
          className={active === "chat" ? "active" : ""}
          onClick={() => handleClick("chat")}
        >
          <span role="img" aria-label="chat">
            💬
          </span>
          <span>Chat with us</span>
        </li>
      </ul>
      <button className="go-pro">
        <span role="img" aria-label="star">
          ⭐
        </span>
        <span>Go Pro</span>
        <br />
        <span className="upgrade-now">Upgrade now</span>
      </button>
    </div>
  );
};

export default Sidebar;
