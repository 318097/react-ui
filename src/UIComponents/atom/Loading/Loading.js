import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Loading = ({
  center,
  type,
  className,
  skipDefaultClass,
  background,
  styles,
  ...others
}) => {
  const containerClasses = classNames({
    [`${background}-bg`]: !!background,
  });

  const loaderClasses = classNames({
    loading: !skipDefaultClass,
    [className]: !!className,
    [type]: true,
    "center-container": center || background,
  });

  const customStyles = {
    ...styles,
  };

  // temp hack
  if (background && type === "dot-loader") {
    customStyles["margin"] = "-10px";
  }

  const loader = (
    <div {...others} className={loaderClasses} style={customStyles}></div>
  );

  return background ? <div className={containerClasses}>{loader}</div> : loader;
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
  background: PropTypes.oneOf(["blur"]),
};

export default Loading;
