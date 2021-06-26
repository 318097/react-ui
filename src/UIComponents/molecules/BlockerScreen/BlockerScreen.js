import React from "react";
import _ from "lodash";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import colors from "../../../magicdust/colors";

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(2px);
  z-index: 10;
  cursor: not-allowed;
  text-align: center;
  color: ${colors.strokeThree};
`;

const BlockerScreen = ({
  message,
  hasAccess,
  skipDefaultClass,
  className,
  ...others
}) => {
  const classes = classNames({
    "empty-container": !skipDefaultClass,
    [className]: !!className,
  });

  return hasAccess ? null : (
    <StyledContainer {...others} className={classes}>
      {message || ""}
    </StyledContainer>
  );
};

BlockerScreen.defaultProps = {
  className: null,
  skipDefaultClass: false,
};

BlockerScreen.propTypes = {
  className: PropTypes.string,
  hasAccess: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  skipDefaultClass: PropTypes.bool,
  message: PropTypes.string,
};

export default BlockerScreen;
