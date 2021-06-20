import React from "react";
import "./Loading.scss";
import classNames from "classnames";

const Loading = ({ center, type, className, ...others }) => {
  const containerClasses = classNames({
    [className]: true,
    [type]: true,
    "center-container": center,
  });

  return <div className={containerClasses} {...others}></div>;
};

Loading.defaultProps = {
  className: "loading",
  center: false,
  type: "default-loader",
};

export default Loading;
