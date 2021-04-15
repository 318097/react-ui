import React from "react";
import "./Spinner.scss";
import className from "classnames";

const Spinner = ({ center, type }) => {
  const containerClasses = className({
    [type]: true,
    "center-container": center,
  });

  return <div className={containerClasses}></div>;
};

Spinner.defaultProps = {
  center: false,
  type: "default-loader",
};

export default Spinner;
