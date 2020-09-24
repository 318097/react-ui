import React, { useState } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";
import { baseCSS, dotCSS, getThemeColors } from "../styled";

const StyledSelect = styled.div`
  position: relative;
  .select-text {
    background: ${getThemeColors("background")};
    border: 1px solid ${getThemeColors("border_color")};
    ${baseCSS};
    &:hover {
      background: ${getThemeColors("hover_background")};
    }
  }
  .dropdown {
    bottom: ${({ dropPosition }) =>
      dropPosition === "top" ? "calc(100% + 2px)" : "unset"};
    top: ${({ dropPosition }) =>
      dropPosition === "bottom" ? "calc(100% + 2px)" : "unset"};
    max-width: 200%;
    position: absolute;
    width: max-content;
    min-width: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 4px;
    background: ${colors.featherDark};
    border: 1px solid ${colors.featherDark};
    z-index: 1;
    .dropdown-item {
      box-sizing: border-box;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      ${baseCSS};
      border-radius: 0;
      overflow: hidden;
      border: 1px solid transparent;
      border-bottom: 1px solid ${colors.bg};
      &:hover {
        background: ${getThemeColors("hover_background")};
      }
      &.dropdown-selected {
        position: relative;
        &:after {
          ${dotCSS};
          left: 3px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`;

const Select = ({
  options,
  value,
  style,
  className,
  onChange,
  name,
  placeholder,
  dropPosition,
  ...others
}) => {
  const [visible, setVisibility] = useState(false);

  const handleChange = (option, e) => {
    onChange(option.value, e);
    setVisibility(false);
  };

  const toggleVisibility = () => setVisibility((prev) => !prev);

  const classes = classNames({});
  const selectedOption = options.find((option) => option.value === value);

  const selectedText = selectedOption ? (
    <span>
      {placeholder && <strong>{`${placeholder}: `}</strong>}
      {selectedOption.label}
    </span>
  ) : (
    placeholder
  );

  return (
    <StyledSelect
      name={name}
      style={{ ...style }}
      className={`${classes} ${className}`}
      dropPosition={dropPosition}
      {...others}
    >
      <div className="select-text" onClick={toggleVisibility}>
        {selectedText}
      </div>
      {visible && (
        <div className="dropdown">
          {options.map((option) => {
            return (
              <div
                key={option.value}
                onClick={(e) => handleChange(option, e)}
                className={`dropdown-item${
                  value === option.value ? " dropdown-selected" : ""
                }`}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </StyledSelect>
  );
};

Select.defaultProps = {
  placeholder: "Select",
  options: [],
  style: {},
  className: "select",
  dropPosition: "bottom",
  size: "md",
};

export default Select;
