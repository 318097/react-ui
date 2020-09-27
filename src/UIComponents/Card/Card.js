import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import colors from "../../magicdust/colors";
import { getRandomNoInRange } from "../util";
import { defaultCSS, getThemeColors } from "../styled";

const StyledCard = styled.div`
  display: inline-block;
  max-width: 100%;
  padding: 10px;
  position: relative;
  overflow: auto;
  background: ${colors.white};
  border: 1px solid ${getThemeColors("border_color")};
  box-shadow: 3px 3px 3px ${getThemeColors("border_color")};
  ${defaultCSS};
  &:hover {
    background: ${({ hover }) => hover && colors.feather};
  }
`;

const Card = ({ children, className, curved, bottomLine, ...others }) => {
  const classes = classNames({
    [className]: true,
    [`curve-border-${getRandomNoInRange(3)}`]: curved,
    "bottom-line": bottomLine,
  });

  return (
    <StyledCard className={classes} {...others}>
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

Card.propTypes = {
  className: PropTypes.string,
  curved: PropTypes.bool,
  bottomLine: PropTypes.bool,
  hover: PropTypes.bool,
};

export default memo(Card);
