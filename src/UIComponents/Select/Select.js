import React, { useState } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";
import { baseCSS, dotCSS } from "../styled";

const StyledSelect = styled.div`
  position: relative;
  .select-text {
    border: 1px solid ${colors.bg};
    background: ${colors.bg};
    ${baseCSS};
  }
  .dropdown {
    position: absolute;
    min-width: 100%;
    width: max-content;
    max-width: 200%;
    bottom: ${({ dropPosition }) =>
      dropPosition === "top" ? "calc(100% + 2px)" : "unset"};
    top: ${({ dropPosition }) =>
      dropPosition === "bottom" ? "calc(100% + 2px)" : "unset"};
    left: 0;
    display: flex;
    flex-direction: column;
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid ${colors.bg};
    border-radius: 4px;
    background: ${colors.bg};
    .dropdown-item {
      box-sizing: border-box;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      ${baseCSS};
      border-radius: 0;
      border: 1px solid transparent;
      border-bottom: 1px solid ${colors.bg};
      &:hover {
        background: ${colors.strokeOne};
      }
      &.dropdown-selected {
        position: relative;
        &:after {
          ${dotCSS};
          left: 1px;
          top: 50%;
          /* transform: translateY(-50%); */
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

  const toggleVisibility = () => setVisibility(prev => !prev);

  const classes = classNames({});
  const selectedOption = options.find(option => option.value === value);
  return (
    <StyledSelect
      name={name}
      style={{ ...style }}
      className={`${classes} ${className}`}
      dropPosition={dropPosition}
      {...others}
    >
      <div className="select-text" onClick={toggleVisibility}>
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      {visible && (
        <div className="dropdown">
          {options.map(option => {
            return (
              <div
                key={option.value}
                onClick={e => handleChange(option, e)}
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
  dropPosition: "top",
  size: "md"
};

export default Select;
