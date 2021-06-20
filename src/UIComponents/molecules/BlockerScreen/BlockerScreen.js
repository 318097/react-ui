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
  background: ${colors.bg};
  z-index: 100;
  cursor: not-allowed;
  opacity: 0.8;
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
