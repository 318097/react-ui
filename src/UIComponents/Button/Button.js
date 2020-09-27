import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import { baseCSS, getThemeColors } from "../styled";
import { getRandomNoInRange } from "../util";

const StyledButton = styled.button`
  border: 1px solid ${getThemeColors("border_color")};
  background: ${getThemeColors("background")};
  color: ${getThemeColors("color")};
  ${baseCSS};
  &:hover {
    border-color: ${getThemeColors("hover_border_color")};
    background: ${getThemeColors("hover_background")};
    color: ${getThemeColors("hover_color")};
  }
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
