import React from "react";
import _ from "lodash";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import colors from "../../../magicdust/colors";

const StyledContainer = styled.div`
  text-align: center;
  width: 100%;
  font-size: 200%;
  color: ${colors.steel};
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
};

EmptyState.propTypes = {
  className: PropTypes.string,
  input: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  skipDefaultClass: PropTypes.bool,
  message: PropTypes.string,
};

export default EmptyState;
