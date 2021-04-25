import React from "react";
import "./Spinner.scss";
import className from "classnames";

const Spinner = ({ center, type, className, ...others }) => {
  const containerClasses = className({
    [className]: true,
    [type]: true,
    "center-container": center,
  });

  return <div className={containerClasses} {...others}></div>;
};

Spinner.defaultProps = {
  className: "spinner",
  center: false,
  type: "default-loader",
};

export default Spinner;
