import React from "react";
import "./Title.css";

const Title = ({ title, subtitle }) => {
  return (
    <div className="Title">
      <h1>{title}</h1>
      <h3 className="Subtitle">{subtitle}</h3>
    </div>
  );
};

export default Title;
