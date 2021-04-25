import React, { useState, memo, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "../Icon";

import constants from "../../magicdust/constants";
import { baseCSS, dotCSS, getStyles, itemCSS } from "../styled";

const StyledSelect = styled.div`
  position: relative;
  display: inline-flex;
  .select-text-container {
    display: flex;
    align-items: center;
    ${baseCSS};
    ${(props) => getStyles({ ...props, componentName: "SELECT" })};
    .select-text {
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
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
    border-radius: 2px;
    background: ${constants.BG};
    border: 1px solid ${constants.BG};
    z-index: 1;
    .dropdown-item {
      width: 100%;
      word-break: break-all;
      white-space: break-spaces;
      ${baseCSS};
      ${itemCSS};
      border-radius: 0;
      /* overflow: hidden; */
      border-bottom: 1px solid ${constants.SECONDARY};
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background: ${constants.SECONDARY}BB;
        border-color: ${constants.SECONDARY}CC;
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
  disabled,
  ...others
}) => {
  const [visible, setVisibility] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    if (visible)
      document.addEventListener("click", handleOutsideClick, { capture: true });
  }, [visible]);

  const handleOutsideClick = (e) => {
    const ref = containerRef.current;
    const { target } = e;

    // console.log(ref, target, ref.contains(target));

    if (ref && !ref.contains(target)) {
      setVisibility(false);
      document.removeEventListener("click", handleOutsideClick, {
        capture: true,
      });
    }
  };

  const handleChange = (option, e) => {
    if (name) onChange(e, { [name]: option.value });
    else onChange(e, option.value);
    setVisibility(false);
  };

  const toggleVisibility = () => {
    if (disabled) return;
    setVisibility((prev) => !prev);
  };

  const containerClasses = classNames({
    [className]: true,
  });

  const selectedTextClasses = classNames({
    "select-text-container": true,
    disabled,
  });

  const selectedOption = options.find((option) => option.value === value);

  const selectedText = selectedOption ? (
    <>
      {placeholder && <strong className="pr-2">{`${placeholder}:`}</strong>}
      {selectedOption.label}
    </>
  ) : (
    placeholder
  );

  return (
    <StyledSelect
      ref={containerRef}
      name={name}
      style={{ ...style }}
      className={containerClasses}
      dropPosition={dropPosition}
      {...others}
    >
      <div className={selectedTextClasses} onClick={toggleVisibility}>
        <span className="select-text">{selectedText}</span>
        <span className="pl-8">
          <Icon
            size={10}
            style={{ margin: 0, padding: 0 }}
            type="caret"
            direction={visible ? "up" : "down"}
          />
        </span>
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
  color: PropTypes.string,
};

export default memo(Select);
