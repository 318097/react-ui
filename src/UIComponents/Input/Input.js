import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";

const Wrapper = styled.input`
  background: none;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid ${colors.bg};
  transition: 0.4s;
  outline: none;
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
    "curve-border": curved,
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
    <Wrapper
      name={name}
      style={{ ...style }}
      className={`${classes} ${className}`}
      onChange={handleChange}
      onBlur={handleBlur}
      {...others}
    />
  );
};

export default Input;
