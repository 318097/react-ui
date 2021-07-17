import React from "react";
import _ from "lodash";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import colors from "../../../magicdust/colors";

const StyledContainer = styled.div`
  text-align: center;
  width: 100%;
  font-size: ${({ size }) =>
    size === "md" ? "1.6rem" : size === "sm" ? "1rem" : "2.4rem"};
  color: ${colors.steel};
  font-weight: bold;
`;

const EmptyState = ({
  input,
  children,
  message,
  skipDefaultClass,
  className,
  ...others
}) => {
  const classes = classNames({
    "empty-container": !skipDefaultClass,
    [className]: !!className,
  });

  const isEmpty = _.isEmpty(input);

  return isEmpty ? (
    <StyledContainer {...others} className={classes}>
      {message}
    </StyledContainer>
  ) : (
    children
  );
};

EmptyState.defaultProps = {
  message: "Empty",
  className: null,
  skipDefaultClass: false,
  size: "md",
};

EmptyState.propTypes = {
  className: PropTypes.string,
  input: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  skipDefaultClass: PropTypes.bool,
  message: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default EmptyState;
