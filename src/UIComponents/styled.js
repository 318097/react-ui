import { css } from "styled-components";
import colors from "../magicdust/colors";
import constants from "../magicdust/constants";

const getPadding = ({ size, className }) => {
  if (className === "textarea")
    return size === "sm" ? "3px 6px" : size === "md" ? "6px 12px" : "10px 20px";
  return size === "sm" ? "0 6px" : size === "md" ? "0 12px" : "0px 20px";
};

const getHeight = ({ size, className }) => {
  if (className === "textarea") return "auto";
  return size === "sm" ? "22px" : size === "md" ? "28px" : "36px";
};

const fontSize = css`
  font-size: ${constants.FONT_SIZE};
`;

const borderRadius = css`
  border-radius: ${constants.BORDER_RADIUS};
`;

const defaultCSS = css`
  ${fontSize};
  ${borderRadius};
  transition: all 0.4s;
  box-sizing: border-box;
  font-family: inherit;
`;

const flexCSS = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
`;

// Input fields
const baseCSS = css`
  cursor: pointer;
  outline: none;
  padding: ${getPadding};
  height: ${getHeight};
  ${defaultCSS};
`;

// dropdown item
const itemCSS = css`
  ${flexCSS};
  padding: ${({ size }) =>
    size === "sm" ? "6px 8px" : size === "md" ? "10px 14px" : "14px 18px"};
  justify-content: flex-start;
`;

const dotCSS = css`
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  background: ${constants.PRIMARY};
  position: absolute;
`;

const getStyles = ({ color, fontColor, componentName, hover, type }) => {
  const custom = colors[color] || color;
  const applyCustomBg = custom && ["BUTTON"].includes(componentName);

  const primary = applyCustomBg ? custom : constants.BG;
  const secondary = applyCustomBg ? custom : constants.SECONDARY;

  let styles = `
    background: ${primary};
    border: 1px solid ${primary};
  `;

  if (fontColor) styles += `color: ${color[fontColor] || fontColor};`;

  switch (componentName) {
    case "TAG":
      styles += `
         background: ${custom};
         border-color: ${custom}55;
          color: white;
          `;

      if (hover)
        styles += `&:hover{
          background: ${custom}CC;
        }
        `;
      break;
    case "CARD":
      styles = `
        background: ${colors.white};
        border: 1px solid ${secondary};
        box-shadow: 4px 4px 4px ${secondary};
      `;

      if (hover) {
        styles += `
        &:hover{
          background: ${colors.featherDark};
        }
        `;
      }
      break;
    case "BUTTON":
      if (type === "hollow")
        styles += `
        background: transparent;
        color: ${primary};
         &:hover:not(.disabled){
          background: ${secondary}88;
          border-color: ${secondary}CC;
          color: ${colors.white};
        }
      `;
      else if (type === "link")
        styles += `
        background: transparent;
        border-color: transparent;
        color: ${primary};
         &:hover:not(.disabled){
          text-decoration: underline;
        }
      `;
      else
        styles += `
        &:hover:not(.disabled){
          background: ${secondary}BB;
          border-color: ${secondary}CC;
        }
      `;
      break;
    case "CHECKBOX":
    case "SELECT":
    case "RADIO":
      styles += `
         &:hover:not(.disabled){
          background: ${secondary}BB;
          border-color: ${secondary}CC;
        }
      `;
      break;
  }

  return styles;
};

export {
  baseCSS,
  dotCSS,
  getStyles,
  defaultCSS,
  flexCSS,
  borderRadius,
  itemCSS,
};
