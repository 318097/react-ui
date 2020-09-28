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
`;

// Input fields
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
  background: ${constants.PRIMARY};
  position: absolute;
`;

const getStyles = ({ color, type }) => {
  const bg = color ? colors[color] : constants.BG;
  const primary = constants.PRIMARY;
  const secondary = constants.SECONDARY;

  let styles = `
    background: ${bg};
    border: 1px solid ${bg};
  `;

  switch (type) {
    case "CARD":
      styles = `
        background: ${colors.white};
        border: 1px solid ${secondary};
         &:hover{
          background: ${colors.featherDark};
        }
      `;
      break;
    case "BUTTON":
    case "CHECKBOX":
      styles += `
         &:hover{
          background: ${secondary};
          border-color: ${secondary};
        }
      `;
      break;
  }

  return styles;
};

export { baseCSS, dotCSS, getStyles, defaultCSS, borderRadius };
