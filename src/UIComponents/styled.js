import { css } from "styled-components";
import colors from "../magicdust/colors";

const baseCSS = css`
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.4s;
  outline: none;
  font-size: 1.2rem;
  padding: ${({ size }) =>
    size === "sm" ? "0px 2px" : size === "md" ? "2px 6px" : "4px 12px"};
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

export { baseCSS, dotCSS };
