import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Backdrop = ({
  skipDefaultClass,
  className,
  children,
  type,
  ...others
}) => {
  const classes = classNames({
    backdrop: !skipDefaultClass,
    [`${type}-bg`]: !!type,
    [className]: !!className,
  });

  return (
    <StyledContainer {...others} className={classes}>
      {children}
    </StyledContainer>
  );
};

Backdrop.defaultProps = {
  className: null,
  skipDefaultClass: false,
  type: "black",
};

Backdrop.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  skipDefaultClass: PropTypes.bool,
  type: PropTypes.oneOf(["blur", "white", "black"]),
};

export default Backdrop;
