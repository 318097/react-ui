import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import { baseCSS, getStyles } from "../styled";
import { getRandomNoInRange } from "../util";

const StyledButton = styled.button`
  ${(props) => getStyles({ ...props, type: "BUTTON" })};
  ${baseCSS};
`;

const Button = ({
  children,
  className,
  onClick,
  size,
  curved,
  disabled,
  ...others
}) => {
  const classes = classNames({
    [className]: true,
    disabled: disabled,
    [`curve-border-${getRandomNoInRange(3)}`]: curved,
  });

  return (
    <StyledButton
      className={classes}
      onClick={onClick}
      size={size}
      disabled={disabled}
      {...others}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  className: "button",
  size: "md",
  curved: false,
};

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  curved: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default memo(Button);
