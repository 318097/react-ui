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
  renderLoadingComponent,
  ...others
}) => {
  const containerClasses = classNames({
    [`${background}-bg`]: !!background,
  });

  const loaderClasses = classNames({
    loading: !skipDefaultClass,
    [className]: !!className,
    [type]: !!type && !renderLoadingComponent,
    "center-container": center || background,
  });

  const combinedStyles = {
    ...styles,
  };

  // temp hack
  if (background && !renderLoadingComponent) {
    if (type === "dot-loader") combinedStyles["margin"] = "-10px";
    else if (type === "default-loader") combinedStyles["margin"] = "-20px";
  }

  const loader = (
    <div {...others} className={loaderClasses} style={combinedStyles}>
      {renderLoadingComponent || null}
    </div>
  );

  return background ? (
    <div style={{ zIndex: 1000 }} className={containerClasses}>
      {loader}
    </div>
  ) : (
    loader
  );
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
  renderLoadingComponent: PropTypes.any,
};

export default Loading;
