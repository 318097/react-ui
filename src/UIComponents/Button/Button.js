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

const Button = ({ children, className, onClick, size, curved, ...others }) => {
  const classes = classNames({
    [className]: true,
    [`curve-border-${getRandomNoInRange(3)}`]: curved,
  });

  return (
    <StyledButton className={classes} onClick={onClick} size={size} {...others}>
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
};

export default memo(Button);
