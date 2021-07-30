import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import colors from "../../../magicdust/colors";
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
  LeftArrow,
  Close,
  Linkedin,
  Bookmark,
} from "./icon-svgs";
import { flexCSS } from "../../styled";

const StyledIcon = styled.span`
  ${flexCSS};
  line-height: 1;
  cursor: pointer;
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
    &:hover {
      fill: ${({ fill, highlight }) => (highlight ? `${fill}aa` : fill)};
      color: ${({ fill, highlight }) => (highlight ? `${fill}aa` : fill)};
    }
  }
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
    case "caret":
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
    case "linkedin":
      return <Linkedin {...props} />;
    case "settings":
      return <Settings {...props} />;
    case "upload":
      return <Upload {...props} />;
    case "home":
      return <Home {...props} />;
    case "copy":
      return <Copy {...props} />;
    case "football-2":
      return <Football2 {...props} />;
    case "arrow":
      return <LeftArrow {...props} />;
    case "close":
      return <Close {...props} />;
    case "bookmark":
      return <Bookmark {...props} />;
    default:
      return <span>{type === "-" ? "x" : "-"}</span>;
  }
};

const Icon = ({
  className,
  onClick,
  background,
  type,
  size,
  fill,
  direction,
  style,
  hover,
  customIcon,
  skipDefaultClass,
  iconType,
  highlight,
  ...others
}) => {
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  const classes = classNames({
    icon: !skipDefaultClass,
    [className]: !!className,
    "icon-bg": hover,
  });

  const combinedStyles = { ...style };

  if (direction) {
    combinedStyles["transform"] =
      direction === "up"
        ? "rotate(90deg)"
        : direction === "right"
        ? "rotate(180deg)"
        : direction === "down"
        ? "rotate(270deg)"
        : "rotate(0deg)";
  }

  const svgProps = {
    type,
    height: size,
    width: size,
    iconType,
  };

  highlight = hover || background ? false : highlight;
  return (
    <StyledIcon
      {...others}
      hover={hover}
      className={classes}
      background={background}
      highlight={highlight}
      size={size}
      onClick={handleClick}
      fill={fill}
      style={combinedStyles}
    >
      {customIcon ? customIcon(svgProps) : <SVGIcon {...svgProps} />}
    </StyledIcon>
  );
};

Icon.defaultProps = {
  background: false,
  hover: false,
  highlight: true,
  size: 16,
  fill: colors.bar,
  className: null,
  skipDefaultClass: false,
};

Icon.propTypes = {
  background: PropTypes.bool, // just background, no changes on hover
  hover: PropTypes.bool, // round up on hover
  highlight: PropTypes.bool, // no background, highlight icon on hover
  size: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
  customIcon: PropTypes.any,
  direction: PropTypes.oneOf(["up", "right", "down", "left"]),
  iconType: PropTypes.oneOf(["outline", "filled"]),
};

export default Icon;
