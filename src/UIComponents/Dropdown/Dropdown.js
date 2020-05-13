import React, { useState } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";

const Wrapper = styled.div`
  transition: all 0.4s;
  display: inline-flex;
  min-width: 20px;
  padding: 6px 12px;
  align-items: center;
  position: relative;
  border: 1px solid ${colors.bg};
  border-radius: 4px;
  cursor: pointer;
  background: ${colors.bg};
  .dropdown-text {
    font-size: 1.2rem;
  }
  .dropdown {
    position: absolute;
    bottom: ${({ dropPosition }) =>
      dropPosition === "top" ? "calc(100% + 2px)" : "unset"};
    top: ${({ dropPosition }) =>
      dropPosition === "bottom" ? "calc(100% + 2px)" : "unset"};
    left: 0;
    border: 1px solid ${colors.bg};
    border-radius: 4px;
    .dropdown-item {
      font-size: 1.2rem;
      display: inline-block;
      width: max-content;
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

const Dropdown = ({
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
    <Wrapper
      name={name}
      style={{ ...style }}
      className={`${classes} ${className}`}
      {...others}
      dropPosition={dropPosition}
    >
      <div className="dropdown-text" onClick={toggleVisibility}>
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
    </Wrapper>
  );
};

Dropdown.defaultProps = {
  placeholder: "Select",
  options: [],
  style: {},
  className: "dropdown-container",
  dropPosition: "top",
};

export default Dropdown;
