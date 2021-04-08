import React from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import constants from "../../magicdust/constants";
import { defaultCSS, baseCSS, dotCSS, getStyles } from "../styled";

const switchStyles = css`
  .radio-item {
    border-radius: 0;
    &:hover:not(.disabled) {
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
        bottom: 1.5px;
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
};

export default Radio;
