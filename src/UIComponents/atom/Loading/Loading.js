import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Loading = ({
  type,
  className,
  containerClassName,
  skipDefaultClass,
  background,
  style,
  customStyles,
  renderLoadingComponent,
  ...others
}) => {
  const containerClasses = classNames({
    [`${background}-bg`]: !!background,
    [containerClassName]: !!containerClassName,
  });

  const combinedContainerStyles = {
    zIndex: 1000,
    ...(customStyles.container || {}),
  };

  const loaderClasses = classNames({
    loading: !skipDefaultClass,
    [className]: !!className,
    [type]: !!type && !renderLoadingComponent,
  });

  const combinedLoaderStyles = {
    ...(customStyles.loader || {}),
    ...(style || {}),
  };

  const loader = (
    <div {...others} className={loaderClasses} style={combinedLoaderStyles}>
      {renderLoadingComponent || null}
    </div>
  );

  return background ? (
    <div style={combinedContainerStyles} className={containerClasses}>
      {loader}
    </div>
  ) : (
    loader
  );
};

Loading.defaultProps = {
  type: "default-loader",
  className: null,
  skipDefaultClass: false,
  customStyles: {},
  style: {},
};

Loading.propTypes = {
  center: PropTypes.bool,
  type: PropTypes.oneOf(["default-loader", "dot-loader"]),
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
  background: PropTypes.oneOf(["blur", "white", "transparent"]),
  renderLoadingComponent: PropTypes.any,
};

export default Loading;
