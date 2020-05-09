import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";
import { getRandomNoInRange } from "../util";

const Wrapper = styled.div`
  background: ${colors.white};
  min-height: 100px;
  min-width: 120px;
  display: inline-block;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid ${colors.bg};
  box-sizing: border-box;
  box-shadow: 3px 3px 3px ${colors.bg};
  transition: 0.3s;
  position: relative;
  overflow: auto;
  &:hover {
    background: ${colors.feather};
  }
`;

const Card = ({
  children,
  style,
  className = "card",
  curved = false,
  bottomLine = true,
}) => {
  const classes = classNames({
    [`curve-border-${getRandomNoInRange(3)}`]: curved,
    "bottom-line": bottomLine,
  });

  return <Wrapper className={`${classes} ${className}`}>{children}</Wrapper>;
};

export default Card;
