import React, { useState, memo } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import constants from "../../magicdust/constants";
import { baseCSS, dotCSS, getStyles } from "../styled";

const StyledSelect = styled.div`
  position: relative;
  .select-text {
    ${baseCSS};
    ${(props) => getStyles({ ...props, type: "SELECT" })};
  }
  .dropdown {
    position: absolute;
    min-width: 100%;
    width: max-content;
    max-width: 200%;
    left: 0;
    bottom: ${({ dropPosition }) =>
      dropPosition === "top" ? "calc(100% + 2px)" : "unset"};
    top: ${({ dropPosition }) =>
      dropPosition === "bottom" ? "calc(100% + 2px)" : "unset"};

    max-height: 200px;
    min-width: 100%;
    max-width: 200%;
    width: max-content;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 4px;
    background: ${constants.BG};
    border: 1px solid ${constants.BG};
    z-index: 1;
    .dropdown-item {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      ${baseCSS};
      border-radius: 0;
      /* overflow: hidden; */
      border-bottom: 1px solid ${constants.SECONDARY};
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background: ${constants.SECONDARY};
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
    .empty-container {
      padding: 8px 0;
      text-align: center;
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
    if (name) onChange(e, { [name]: option.value });
    else onChange(e, option.value);
    setVisibility(false);
  };

  const toggleVisibility = () => setVisibility((prev) => !prev);

  const classes = classNames({
    [className]: true,
  });

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
      className={classes}
      dropPosition={dropPosition}
      {...others}
    >
      <div className="select-text" onClick={toggleVisibility}>
        {selectedText}
      </div>
      {visible && (
        <div className="dropdown">
          {options.length ? (
            options.map((option) => {
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
            })
          ) : (
            <span className="empty-container">Empty</span>
          )}
        </div>
      )}
    </StyledSelect>
  );
};

Select.defaultProps = {
  className: "select",
  style: {},
  placeholder: "Select",
  options: [],
  dropPosition: "bottom",
  size: "md",
};

Select.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  dropPosition: PropTypes.string,
  size: PropTypes.string,
};

export default memo(Select);
