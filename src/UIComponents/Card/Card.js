import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";
import { getRandomNoInRange } from "../util";
import { defaultCSS } from "../styled";

const StyledCard = styled.div`
  background: ${colors.white};
  min-height: 100px;
  max-width: 100%;
  display: inline-block;
  padding: 10px;
  border: 1px solid ${colors.bg};
  box-shadow: 3px 3px 3px ${colors.bg};
  position: relative;
  overflow: auto;
  ${defaultCSS};
  &:hover {
    background: ${({ hover }) => hover && colors.feather};
  }
`;

const Card = ({ children, className, curved, bottomLine, ...others }) => {
  const classes = classNames({
    [`curve-border-${getRandomNoInRange(3)}`]: curved,
    "bottom-line": bottomLine,
  });

  return (
    <StyledCard className={`${classes} ${className}`} {...others}>
      {children}
    </StyledCard>
  );
};

Card.defaultProps = {
  className: "card",
  curved: false,
  bottomLine: false,
  hover: false,
};

export default Card;
