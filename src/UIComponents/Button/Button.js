import React from "react";
import styled from "styled-components";
import colors from "../../magicdust/colors";
import { baseCSS, getThemeColors } from "../styled";
import { getRandomNoInRange } from "../util";
import classNames from "classnames";

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
    [`curve-border-${getRandomNoInRange(3)}`]: curved,
  });

  return (
    <StyledButton
      className={`${classes} ${className}`}
      onClick={onClick}
      size={size}
      {...others}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: "md",
  className: "button",
  curved: false,
};

export default Button;
