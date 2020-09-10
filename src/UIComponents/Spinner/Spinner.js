import React from "react";
import "./Spinner.scss";

const Spinner = ({ center }) => {
  return <div className={`spinner ${center ? "center-container" : ""}`}></div>;
};

Spinner.defaultProps = {
  center: false,
};

export default Spinner;
