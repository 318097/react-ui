import React from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import constants from "../../../magicdust/constants";
import { baseCSS, flexCSS, dotCSS, getStyles } from "../../styled";

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
  ${flexCSS};
  .radio-item {
    position: relative;
    ${(props) => getStyles({ ...props, componentName: "RADIO" })};
    ${baseCSS};
    ${flexCSS};
  }
  ${switchStyles};
`;

const Radio = ({
  options,
  value,
  style,
  className,
  onChange,
  name,
  disabled,
  skipDefaultClass,
  ...others
}) => {
  const handleClick = (e, option) => {
    if (disabled) return;

    if (name) onChange(e, { [name]: option.value });
    else onChange(e, option.value);
  };

  const classes = classNames({
    radio: !skipDefaultClass,
    [className]: !!className,
  });

  return (
    <StyledRadio
      {...others}
      name={name}
      style={{ ...style }}
      className={classes}
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
  style: {},
  options: [],
  size: "md",
  className: null,
  skipDefaultClass: false,
};

Radio.propTypes = {
  style: PropTypes.object,
  options: PropTypes.array.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
  onChange: PropTypes.func,
  color: PropTypes.string,
};

export default Radio;
