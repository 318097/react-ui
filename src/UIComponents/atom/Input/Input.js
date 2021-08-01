import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import colors from "../../../magicdust/colors";
import constants from "../../../magicdust/constants";
import { baseCSS } from "../../styled";

const StyledInput = styled.input`
  background: ${colors.white};
  border: 1px solid ${constants.BG};
  ${baseCSS};
  margin: 0;
  &:active:not(.disabled),
  &:focus:not(.disabled) {
    border-color: ${constants.PRIMARY};
  }
  &.disabled {
    background: ${colors.feather};
  }
`;

const Input = ({
  style,
  className,
  curved,
  onChange,
  onBlur,
  name,
  disabled,
  skipDefaultClass,
  ...others
}) => {
  const classes = classNames({
    input: !skipDefaultClass,
    [className]: !!className,
    disabled,
    "curve-border-1": curved,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    if (onChange) {
      if (name) onChange(e, { [name]: value });
      else onChange(e, value);
    }
  };

  const handleBlur = (e) => {
    const { value } = e.target;
    if (onBlur) onBlur(e, value);
  };

  return (
    <StyledInput
      {...others}
      name={name}
      style={style}
      className={classes}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={disabled}
    />
  );
};

Input.defaultProps = {
  style: {},
  size: "md",
  curved: false,
  className: null,
  skipDefaultClass: false,
  type: "input",
};

Input.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  curved: PropTypes.bool,
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["input", "date"]),
};

export default memo(Input);
