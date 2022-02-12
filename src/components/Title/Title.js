import React from "react";
import "./Title.css";
import { NavLink } from 'react-router-dom'
import RandomSpace from "../RandomSpace/RandomSpace";

const Title = ({ title, subtitle }) => {
  return (
    <div className="Title">
      <h1>{title}</h1>
      <h3 className="Subtitle">{subtitle}</h3>

      <div>
        <NavLink 
	              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
	              to="/">List</NavLink>
        <NavLink 
	              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
	              to="/about">About</NavLink>
        <RandomSpace />
      </div>
    </div>
  );
};


export default Title;
