import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import colors from "../../magicdust/colors";
import { baseCSS, getThemeColors } from "../styled";

const StyledInput = styled.input`
  background: ${colors.white};
  border: 1px solid ${getThemeColors("border_color")};
  display: inline-block;
  ${baseCSS};
  margin: 0;
  &:active,
  &:focus {
    border-color: ${colors.strokeTwo};
  }
`;

const Input = ({
  style,
  className,
  curved,
  onChange,
  onBlur,
  name,
  ...others
}) => {
  const classes = classNames({
    [className]: true,
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
      name={name}
      style={{ ...style }}
      className={`${classes} ${className}`}
      onChange={handleChange}
      onBlur={handleBlur}
      {...others}
    />
  );
};

Input.defaultProps = {
  className: "input",
  style: {},
  size: "md",
  curved: false,
};

Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.string,
  curved: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(Input);
