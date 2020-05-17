import React from "react";
import styled from "styled-components";
import colors from "../../magicdust/colors";
import { baseCSS } from "../styled";

const getThemeColors = (property) => ({ theme, type, color = "strokeOne" }) => {
  let value = {};
  const currentColor = colors[color];
  switch (theme) {
    case "default":
      if (type === "solid") {
        value = {
          border: currentColor,
          background: currentColor,
          color: colors.bar,
          background_hover: `${colors.orchid}`,
          color_hover: colors.white,
        };
      } else if (type === "hollow") {
        value = {
          border_hover: currentColor,
          border: colors.bg,
          background: colors.bg,
        };
      }
      break;
    default:
      return;
  }
  return value[property];
};

const StyledButton = styled.button`
  border: 1px solid ${getThemeColors("border")};
  background: ${getThemeColors("background")};
  color: ${getThemeColors("color")};
  ${baseCSS};
  &:hover {
    border-color: ${getThemeColors("border_hover")};
    background: ${getThemeColors("background_hover")};
    color: ${getThemeColors("color_hover")};
  }
`;

const Button = ({
  children,
  theme,
  type,
  color,
  className,
  onClick,
  size,
  ...others
}) => {
  return (
    <StyledButton
      theme={theme}
      type={type}
      className={className}
      onClick={onClick}
      color={color}
      size={size}
      {...others}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  theme: "default",
  type: "solid",
  size: "md",
};

export default Button;
