import React from "react";
import styled from "styled-components";
import colors from "../../magicdust/colors";
import {
  Plus,
  Google,
  Logout,
  Login,
  Minus,
  Edit,
  Delete,
  Check,
  Drop,
  CaretLeft,
  Wallet,
} from "./icon-svgs";

const StyledIcon = styled.span`
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border-radius: 50%;
  margin: 2px;
  height: 20px;
  width: 20px;
  background: ${({ background }) => (background ? colors.shade1 : "none")};
  transition: all 0.4s;
  text-rendering: optimizeLegibility;
  svg {
    font-family: initial;
    fill: ${({ fill }) => fill};
  }
  /* &:hover {
    background: ${colors.strokeOne};
  } */
`;

const SVGIcon = ({ type, ...props }) => {
  switch (type) {
    case "plus":
      return <Plus {...props} />;
    case "google":
      return <Google {...props} />;
    case "logout":
      return <Logout {...props} />;
    case "login":
      return <Login {...props} />;
    case "minus":
      return <Minus {...props} />;
    case "edit":
      return <Edit {...props} />;
    case "delete":
      return <Delete {...props} />;
    case "check":
      return <Check {...props} />;
    case "drop":
      return <Drop {...props} />;
    case "caret-left":
      return <CaretLeft {...props} />;
    case "wallet":
      return <Wallet {...props} />;
    default:
      return <Minus {...props} />;
  }
};

const Icon = ({
  className = "icon",
  onClick,
  background = false,
  type,
  size = 16,
  fill = colors.bar,
}) => (
  <StyledIcon
    className={className}
    background={background}
    size={size}
    onClick={onClick}
    fill={fill}
  >
    <SVGIcon
      type={type}
      height={background ? size - 4 : size}
      width={background ? size - 4 : size}
    />
  </StyledIcon>
);

export default Icon;
