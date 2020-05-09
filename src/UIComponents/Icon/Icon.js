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
  Bulb,
  BinaryCode,
  BinaryCode2,
  Check2,
  Coding,
  Electricity,
  Football,
  Heart,
  Innovation,
  Interface,
  Like,
  Menu,
  Menu2,
  Rounded,
  Shape1,
  Shape2,
  Shape3,
  Football2,
  Cancel,
  CancelRed,
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
  height: ${({ size, background }) => (background ? `${size + 10}px` : "auto")};
  width: ${({ size, background }) => (background ? `${size + 10}px` : "auto")};
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
    case "binary-code":
      return <BinaryCode {...props} />;
    case "binary-code-2":
      return <BinaryCode2 {...props} />;
    case "check-2":
      return <Check2 {...props} />;
    case "coding":
      return <Coding {...props} />;
    case "bulb":
      return <Electricity {...props} />;
    case "football":
      return <Football {...props} />;
    case "heart":
      return <Heart {...props} />;
    case "innovation":
      return <Innovation {...props} />;
    case "interface":
      return <Interface {...props} />;
    case "like":
      return <Like {...props} />;
    // case "menu":
    //   return <Menu {...props} />;
    case "menu-2":
      return <Menu2 {...props} />;
    case "rounded":
      return <Rounded {...props} />;
    case "shape-1":
      return <Shape1 {...props} />;
    case "shape-2":
      return <Shape2 {...props} />;
    case "shape-3":
      return <Shape3 {...props} />;
    case "cancel":
      return <Cancel {...props} />;
    case "cancel-red":
      return <CancelRed {...props} />;
    // case "football-2":
    //   return <Football2 {...props} />;
    // case "football-3":
    //   return <Football3 {...props} />;
    default:
      return <span>{type === "-" ? "x" : "-"}</span>;
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
    <SVGIcon type={type} height={size} width={size} />
  </StyledIcon>
);

export default Icon;
