import React, { useState } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";

const StyledSelect = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 1rem;
  .select-text {
    border: 1px solid ${colors.bg};
    border-radius: 4px;
    cursor: pointer;
    background: ${colors.bg};
    min-width: 20px;
    padding: 4px 12px;
    font-size: inherit;
  }
  .dropdown {
    position: absolute;
    width: max-content;
    max-width: 200%;
    bottom: ${({ dropPosition }) =>
      dropPosition === "top" ? "calc(100% + 2px)" : "unset"};
    top: ${({ dropPosition }) =>
      dropPosition === "bottom" ? "calc(100% + 2px)" : "unset"};
    left: 0;
    border: 1px solid ${colors.bg};
    border-radius: 4px;
    background: ${colors.bg};
    max-height: 200px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    .dropdown-item {
      box-sizing: border-box;
      width: 100%;
      transition: all 0.4s;
      cursor: pointer;
      font-size: inherit;
      padding: 4px 12px;
      border-bottom: 1px solid ${colors.bg};
      &:hover {
        background: ${colors.strokeOne};
      }
      &.dropdown-selected {
        position: relative;
        &:after {
          content: "";
          display: inline-block;
          border-radius: 50%;
          width: 4px;
          height: 4px;
          background: ${colors.orchid};
          position: absolute;
          left: 4px;
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
  dropPosition: "top",
};

export default Select;
