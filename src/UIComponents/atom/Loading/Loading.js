import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Loading = ({ center, type, className, skipDefaultClass, ...others }) => {
  const classes = classNames({
    loading: !skipDefaultClass,
    [className]: !!className,
    [type]: true,
    "center-container": center,
  });

  return <div {...others} className={classes}></div>;
};

Loading.defaultProps = {
  center: false,
  type: "default-loader",
  className: null,
  skipDefaultClass: false,
};

Loading.propTypes = {
  center: PropTypes.bool,
  type: PropTypes.oneOf(["default-loader", "dot-loader"]),
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
};

export default Loading;
