import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Loading = ({ center, type, className, skipDefaultClass, ...others }) => {
  const containerClasses = classNames({
    loading: !skipDefaultClass,
    [className]: !!className,
    [type]: true,
    "center-container": center,
  });

  return <div className={containerClasses} {...others}></div>;
};

Loading.defaultProps = {
  className: null,
  center: false,
  type: "default-loader",
  skipDefaultClass: false,
};

Loading.propTypes = {
  center: PropTypes.bool,
  type: PropTypes.oneOf(["default-loader", "dot-loader"]),
  skipDefaultClass: PropTypes.bool,
};

export default Loading;
