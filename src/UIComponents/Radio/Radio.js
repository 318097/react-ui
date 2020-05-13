import React from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";

const switchStyles = css`
  background: ${colors.bg};
  border-radius: 4px;
  .radio {
    padding: 6px 12px;
    border-radius: 0;
    position: relative;
    &:nth-child(1) {
      border-right: 1px solid ${colors.strokeOne};
    }
    &:nth-child(2) {
      border-left: 1px solid ${colors.strokeOne};
    }
    &.radio-selected {
      &:after {
        content: "";
        display: inline-block;
        border-radius: 50%;
        width: 4px;
        height: 4px;
        background: ${colors.orchid};
        position: absolute;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

const Wrapper = styled.div`
  transition: all 0.4s;
  &:active,
  &:focus {
    border-color: ${colors.orchid};
  }
  display: flex;
  align-items: center;
  .radio {
    font-size: 1.2rem;
    display: inline-block;
    border-radius: 4px;
    padding: 2px 4px;
    cursor: pointer;
    &.radio-selected {
    }
  }
  ${switchStyles};
`;

const Radio = ({
  options = [],
  value,
  style = {},
  className = "radio-group",
  onChange,
  onBlur,
  name,
  ...others
}) => {
  const classes = classNames({});
  const handleClick = (option) => {
    if (onChange) {
      if (name) onChange({ [name]: option.value });
      else onChange(option.value);
    }
  };

  return (
    <Wrapper
      name={name}
      style={{ ...style }}
      className={`${classes} ${className}`}
      {...others}
    >
      {options.map((option) => {
        return (
          <div
            key={option.value}
            onClick={(e) => handleClick(option, e)}
            className={`radio${
              value === option.value ? " radio-selected" : ""
            }`}
          >
            {option.label}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Radio;
