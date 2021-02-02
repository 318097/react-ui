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
  Facebook,
  Twitter,
  Instagram,
  Settings,
  Upload,
  Home,
  Copy,
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
    case "tag":
      return <Coding {...props} />;
    case "bulb":
      return <Electricity {...props} />;
    case "football":
      return <Football {...props} />;
    case "heart-2":
      return <Heart {...props} />;
    case "bulb-2":
      return <Innovation {...props} />;
    case "triangle-2":
      return <Interface {...props} />;
    case "heart":
      return <Like {...props} />;
    case "menu":
      return <Menu {...props} />;
    case "menu-2":
      return <Menu2 {...props} />;
    case "circle":
      return <Rounded {...props} />;
    case "circle-3":
      return <Shape1 {...props} />;
    case "circle-2":
      return <Shape2 {...props} />;
    case "triangle":
      return <Shape3 {...props} />;
    case "cancel":
      return <Cancel {...props} />;
    case "cancel-2":
      return <CancelRed {...props} />;
    case "facebook":
      return <Facebook {...props} />;
    case "twitter":
      return <Twitter {...props} />;
    case "instagram":
      return <Instagram {...props} />;
    case "settings":
      return <Settings {...props} />;
    case "upload":
      return <Upload {...props} />;
    case "home":
      return <Home {...props} />;
    case "copy":
      return <Copy {...props} />;
    // case "football-2":
    //   return <Football2 {...props} />;
    // case "football-3":
    //   return <Football3 {...props} />;
    default:
      return <span>{type === "-" ? "x" : "-"}</span>;
  }
};

const Icon = ({ className, onClick, background, type, size, fill }) => (
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

Icon.defaultProps = {
  className: "icon",
  background: false,
  size: 16,
  fill: colors.bar,
};

export default Icon;
