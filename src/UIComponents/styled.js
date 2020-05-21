import { css } from "styled-components";
import colors from "../magicdust/colors";

const borderRadius = "4px";
const fontSize = "1.2rem";

const defaultFontSize = css`
  font-size: ${fontSize};
`;

const defaultCSS = css`
  ${defaultFontSize};
  border-radius: ${borderRadius};
  transition: all 0.4s;
  box-sizing: border-box;
`;

const baseCSS = css`
  cursor: pointer;
  outline: none;
  padding: ${({ size }) =>
    size === "sm" ? "2px 4px" : size === "md" ? "4px 8px" : "8px 16px"};
  ${defaultCSS};
`;

const dotCSS = css`
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  background: ${colors.orchid};
  position: absolute;
`;

const getThemeColors = (property) => ({ theme, color = "strokeOne" }) => {
  const currentColor = colors[color];

  let value = {
    border_color: currentColor,
    background: currentColor,
    color: colors.white,
    hover_color: colors.white,
  };
  switch (color) {
    case "default":
      value = {
        ...value,
        hover_background: `${colors.strokeTwo}`,
      };
      break;
    default:
      value = {
        ...value,
        hover_background: `${currentColor}BB`,
        border_color: `${currentColor}BB`,
      };
      break;
  }
  return value[property];
};

export { baseCSS, dotCSS, getThemeColors, defaultFontSize, defaultCSS };
