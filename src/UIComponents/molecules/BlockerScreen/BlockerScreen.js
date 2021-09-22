import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Backdrop from "../../atom/Backdrop";

const BlockerScreen = ({
  message,
  hasAccess,
  skipDefaultClass,
  className,
  ...others
}) => {
  const classes = classNames({
    "blocker-screen": !skipDefaultClass,
    [className]: !!className,
  });

  return hasAccess ? null : (
    <Backdrop
      {...others}
      style={{ cursor: "not-allowed", textAlign: "center" }}
      className={classes}
    >
      <div className={"blocker-screen-text"}>{message}</div>
    </Backdrop>
  );
};

BlockerScreen.defaultProps = {
  className: null,
  skipDefaultClass: false,
  message: "Locked",
  type: "blur",
};

BlockerScreen.propTypes = {
  className: PropTypes.string,
  hasAccess: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  skipDefaultClass: PropTypes.bool,
  message: PropTypes.string,
};

export default BlockerScreen;
