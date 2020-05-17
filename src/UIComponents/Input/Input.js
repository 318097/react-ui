import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";
import { baseCSS } from "../styled";

const StyledInput = styled.input`
  background: ${colors.white};
  border: 1px solid ${colors.bg};
  display: inline-block;
  ${baseCSS};
  margin: 0;
  &:active,
  &:focus {
    border-color: ${colors.orchid};
  }
`;

const Input = ({
  style = {},
  className = "input",
  curved = false,
  onChange,
  onBlur,
  name,
  ...others
}) => {
  const classes = classNames({
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
  style: {},
  className: "input",
  curved: false,
  size: "md",
};

export default Input;
