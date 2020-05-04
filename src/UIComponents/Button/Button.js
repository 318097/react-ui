import React from "react";
import styled from "styled-components";
import colors from "../../magicdust/colors";

const getThemeColors = (property) => ({ theme, type, color = "blue" }) => {
  let value = {};
  const currentColor = colors[color];
  switch (theme) {
    case "default":
      if (type === "solid") {
        value = {
          border: currentColor,
          background: currentColor,
          color: colors.white,
          background_hover: `${currentColor}DD`,
          color_hover: colors.bg,
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
  outline: none;
  border: 1px solid ${getThemeColors("border")};
  background: ${getThemeColors("background")};
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.3s;
  padding: ${({ size }) =>
    size === "sm" ? "0px 2px" : size === "md" ? "2px 6px" : "4px 12px"};
  color: ${getThemeColors("color")};
  &:hover {
    border-color: ${getThemeColors("border_hover")};
    background: ${getThemeColors("background_hover")};
    color: ${getThemeColors("color_hover")};
  }
`;

const Button = ({
  children,
  theme = "default",
  type = "solid",
  color,
  className,
  style,
  onClick,
  size = "md",
}) => {
  return (
    <StyledButton
      theme={theme}
      type={type}
      className={className}
      style={{ ...(style || {}) }}
      onClick={onClick}
      color={color}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
