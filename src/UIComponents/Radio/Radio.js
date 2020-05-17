import React from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";
import { baseCSS, dotCSS } from "../styled";

const switchStyles = css`
  background: ${colors.bg};
  border: 1px solid ${colors.bg};
  border-radius: 4px;
  .radio-item {
    position: relative;
    border-radius: 0;
    &:hover {
      background: ${colors.strokeOne};
    }
    &:nth-child(1) {
      border-right: 1px solid ${colors.strokeOne};
    }
    &:nth-child(2) {
      border-left: 1px solid ${colors.strokeOne};
    }
    &.radio-item-selected {
      &:after {
        ${dotCSS};
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

const StyledRadio = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  .radio-item {
    display: inline-block;
    ${baseCSS};
  }
  ${switchStyles};
`;

const Radio = ({
  options,
  value,
  style,
  className,
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
    <StyledRadio
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
            className={`radio-item${
              value === option.value ? " radio-item-selected" : ""
            }`}
          >
            {option.label}
          </div>
        );
      })}
    </StyledRadio>
  );
};

Radio.defaultProps = {
  options: [],
  style: {},
  className: "radio",
  size: "md",
};

export default Radio;
