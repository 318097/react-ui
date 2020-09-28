import React from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import constants from "../../magicdust/constants";
import { defaultCSS, baseCSS, dotCSS, getStyles } from "../styled";

const switchStyles = css`
  .radio-item {
    border-radius: 0;
    &:hover {
      background: ${constants.SECONDARY};
    }
    &:first-child {
      border-right: 0.5px solid ${constants.PRIMARY};
    }
    &:last-child {
      border-left: 0.5px solid ${constants.PRIMARY};
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
  ${defaultCSS};
  ${(props) => getStyles({ ...props, type: "RADIO" })};
  .radio-item {
    position: relative;
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
  const handleClick = (e, option) => {
    if (name) onChange(e, { [name]: option.value });
    else onChange(e, option.value);
  };

  const classes = classNames({
    [className]: true,
  });

  return (
    <StyledRadio
      name={name}
      style={{ ...style }}
      className={classes}
      {...others}
    >
      {options.map((option) => {
        return (
          <div
            key={option.value}
            onClick={(e) => handleClick(e, option)}
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
};

export default Radio;
