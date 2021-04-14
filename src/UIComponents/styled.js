import { css } from "styled-components";
import colors from "../magicdust/colors";
import constants from "../magicdust/constants";

const fontSize = css`
  font-size: ${constants.FONT_SIZE};
`;

const borderRadius = css`
  border-radius: ${constants.BORDER_RADIUS};
`;

// Card
const defaultCSS = css`
  ${fontSize};
  ${borderRadius};
  transition: all 0.4s;
  box-sizing: border-box;
  font-family: inherit;
`;

// Input fields
const baseCSS = css`
  cursor: pointer;
  outline: none;
  padding: ${({ size }) =>
    size === "sm" ? "3px 6px" : size === "md" ? "6px 12px" : "10px 20px"};
  ${defaultCSS};
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

const getStyles = ({ color, type, hover }) => {
  const custom = colors[color];
  const applyCustomBg = custom && ["BUTTON"].includes(type);

  const primary = applyCustomBg ? custom : constants.BG;
  const secondary = applyCustomBg ? custom : constants.SECONDARY;

  let styles = `
    background:  ${primary};
    border: 1px solid ${primary};
  `;

  switch (type) {
    case "CARD":
      styles = `
        background: ${colors.white};
        border: 1px solid ${secondary};
      `;

      if (hover) {
        styles += `
        &:hover{
          background: ${colors.featherDark};
        }
        `;
      }
      break;
    // case "RADIO":
    //   styles += `
    //     .radio-item.radio-item-selected{
    //       background: ${primary};
    //       // &:hover:not(.disabled){
    //       //   background: ${secondary}BB;
    //       //   border-color: ${secondary}CC;
    //       // }
    //     }
    //   `;
    //   break;
    case "BUTTON":
    case "CHECKBOX":
      styles += `
         &:hover:not(.disabled){
          background: ${secondary}BB;
          border-color: ${secondary}CC;
        }
      `;
      break;
  }
  console.log("styles::-", styles);

  return styles;
};

export { baseCSS, dotCSS, getStyles, defaultCSS, borderRadius };
