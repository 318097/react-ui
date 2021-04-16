import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import { getRandomNoInRange } from "../util";
import { defaultCSS, getStyles } from "../styled";

const StyledCard = styled.div`
  display: inline-block;
  max-width: 100%;
  padding: 16px;
  position: relative;
  overflow-y: auto;
  ${(props) => getStyles({ ...props, componentName: "CARD" })};
  ${defaultCSS};
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
  hover: true,
};

Card.propTypes = {
  className: PropTypes.string,
  curved: PropTypes.bool,
  bottomLine: PropTypes.bool,
  hover: PropTypes.bool,
};

export default memo(Card);
