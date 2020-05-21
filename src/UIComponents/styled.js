import { css } from "styled-components";
import colors from "../magicdust/colors";

const borderRadius = "4px";
const fontSize = "1.2rem";

const defaultFontSize = css`
  font-size: ${fontSize};
`;

const defaultBorderRadius = css`
  border-radius: ${borderRadius};
`;

const defaultCSS = css`
  ${defaultFontSize};
  ${defaultBorderRadius};
  transition: all 0.4s;
  box-sizing: border-box;
`;

const baseCSS = css`
  cursor: pointer;
  outline: none;
  padding: ${({ size }) =>
    size === "sm" ? "2px 4px" : size === "md" ? "6px 12px" : "10px 20px"};
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

const getThemeColors = (property) => ({ theme, color = "bg" }) => {
  const currentColor = colors[color];

  let value = {
    border_color: currentColor,
    background: currentColor,
    color: colors.white,
    hover_color: colors.white,
  };
  switch (color) {
    case "strokeOne":
      value = {
        ...value,
        hover_background: colors.strokeTwo,
        hover_border_color: colors.strokeTwo,
        color: colors.bar,
        hover_color: colors.bar,
      };
      break;
    case "bg":
      value = {
        ...value,
        hover_background: colors.strokeOne,
        hover_border_color: colors.strokeOne,
        color: colors.bar,
        hover_color: colors.bar,
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

export {
  baseCSS,
  dotCSS,
  getThemeColors,
  defaultFontSize,
  defaultBorderRadius,
  defaultCSS,
};
