import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import { getRandomNoInRange } from "../../util";
import { defaultCSS, getStyles } from "../../styled";

const StyledCard = styled.div`
  display: inline-block;
  max-width: 100%;
  padding: 16px;
  position: relative;
  overflow-y: auto;
  ${(props) => getStyles({ ...props, componentName: "CARD" })};
  ${defaultCSS};
`;

const Card = ({
  children,
  className,
  curved,
  bottomLine,
  skipDefaultClass,
  ...others
}) => {
  const classes = classNames({
    card: !skipDefaultClass,
    [className]: !!className,
    [`curve-border-${getRandomNoInRange(3)}`]: curved,
    "bottom-line": bottomLine,
  });

  return (
    <StyledCard {...others} className={classes}>
      {children}
    </StyledCard>
  );
};

Card.defaultProps = {
  curved: false,
  bottomLine: false,
  hover: true,
  className: null,
  skipDefaultClass: false,
};

Card.propTypes = {
  curved: PropTypes.bool,
  bottomLine: PropTypes.bool,
  hover: PropTypes.bool,
  skipDefaultClass: PropTypes.bool,
};

export default memo(Card);
