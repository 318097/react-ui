import React from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import constants from "../../magicdust/constants";
import { defaultCSS, baseCSS, dotCSS, getStyles } from "../styled";

const switchStyles = css`
  .radio-item {
    &:first-child::before {
      content: "";
      display: block;
      height: 70%;
      position: absolute;
      width: 1px;
      background: ${constants.SECONDARY};
      top: 50%;
      transform: translateY(-50%);
      right: -1px;
    }
    &:last-child::before {
      content: "";
      display: block;
      height: 70%;
      position: absolute;
      width: 1px;
      background: ${constants.SECONDARY};
      top: 50%;
      transform: translateY(-50%);
      left: -1px;
    }
    &.radio-item-selected {
      &:after {
        ${dotCSS};
        bottom: 1.5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

const StyledRadio = styled.div`
  width: max-content;
  display: inline-flex;
  align-items: center;
  .radio-item {
    position: relative;
    ${(props) => getStyles({ ...props, componentName: "RADIO" })};
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
  disabled,
  ...others
}) => {
  const handleClick = (e, option) => {
    if (disabled) return;

    if (name) onChange(e, { [name]: option.value });
    else onChange(e, option.value);
  };

  const containerClasses = classNames({
    [className]: true,
  });

  return (
    <StyledRadio
      name={name}
      style={{ ...style }}
      className={containerClasses}
      {...others}
    >
      {options.map((option) => {
        const itemClasses = classNames({
          ["radio-item"]: true,
          "radio-item-selected": value === option.value,
          disabled: disabled,
        });
        return (
          <div
            key={option.value}
            onClick={(e) => handleClick(e, option)}
            className={itemClasses}
          >
            {option.label}
          </div>
        );
      })}
    </StyledRadio>
  );
};

Radio.defaultProps = {
  className: "radio",
  style: {},
  options: [],
  size: "md",
};

Radio.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.array,
  size: PropTypes.string,
  onChange: PropTypes.func,
  color: PropTypes.string,
};

export default Radio;
