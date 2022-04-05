import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import { baseCSS, getStyles, flexCSS } from "../../styled";
import { getRandomNoInRange } from "../../util";

const StyledButton = styled.button`
  ${(props) => getStyles({ ...props, componentName: "BUTTON" })};
  ${baseCSS};
  ${flexCSS};
`;

const Button = ({
  children,
  className,
  onClick,
  size,
  curved,
  disabled,
  skipDefaultClass,
  ...others
}) => {
  const classes = classNames({
    button: !skipDefaultClass,
    [className]: !!className,
    disabled,
    [`curve-border-${getRandomNoInRange(3)}`]: curved,
  });

  return (
    <StyledButton
      {...others}
      className={classes}
      onClick={onClick}
      size={size}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: "md",
  curved: false,
  type: "solid",
  className: null,
  skipDefaultClass: false,
  testProp: "Delete later",
};

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  curved: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  fontColor: PropTypes.string,
  type: PropTypes.oneOf(["hollow", "solid", "link"]),
  skipDefaultClass: PropTypes.bool,
};

export default memo(Button);
