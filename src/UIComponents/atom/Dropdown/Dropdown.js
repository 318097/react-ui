import React, { useRef, useState, useEffect } from "react";
import _ from "lodash";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import colors from "../../../magicdust/colors";
import Icon from "../Icon";
import Card from "../Card";
import Button from "../Button";

const StyledContainer = styled.div`
  position: relative;
  display: inline-flex;
  span.button-component-wrapper {
    display: inline-flex;
  }
  .dropdown-container {
    position: absolute;
    top: calc(100% + 4px);
    left: ${({ dropPosition }) => (dropPosition === "right" ? "0" : "unset")};
    right: ${({ dropPosition }) => (dropPosition === "left" ? "0" : "unset")};
    /* min-height: 200px; */
    height: auto;
    z-index: 100;
    max-height: 450px;
    min-width: 150px;
    max-width: 400px;
    cursor: pointer;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0;
    .item {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    .item-value {
      font-family: inherit;
      font-size: 1.2rem;
      padding: 0 12px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid ${colors.strokeOne};
      margin: 0;
      &:hover,
      &.selected {
        background: ${colors.bg};
      }
    }
  }
`;

const Dropdown = ({
  renderButtonComponent,
  renderDropdownComponent,
  className,
  skipDefaultClass,
  buttonType,
  options,
  onChange,
  value: dropdownValue,
  iconProps,
  buttonProps,
  ...others
}) => {
  const containerRef = useRef();
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const containerClasses = classNames({
    "menu-dropdown": !skipDefaultClass,
    [className]: !!className,
  });

  useEffect(() => {
    if (dropdownVisibility)
      document.addEventListener("click", handleOutsideClick, { capture: true });
  }, [dropdownVisibility]);

  const toggleDropdown = () => setDropdownVisibility((prev) => !prev);

  const handleOutsideClick = (e) => {
    const ref = containerRef.current;
    const { target } = e;
    const outsideNode = ref && !ref.contains(target);

    if (outsideNode && dropdownVisibility) {
      setDropdownVisibility(false);
      document.removeEventListener("click", handleOutsideClick, {
        capture: true,
      });
    }
  };

  const handleItemClick = (option) => {
    onChange(option);
    toggleDropdown();
  };

  return (
    <StyledContainer
      {...others}
      className={containerClasses}
      ref={containerRef}
    >
      {renderButtonComponent ? (
        <span className="button-component-wrapper" onClick={toggleDropdown}>
          {renderButtonComponent}
        </span>
      ) : buttonType === "button" ? (
        <Button onClick={toggleDropdown} {...buttonProps}>
          {buttonProps.label}
        </Button>
      ) : (
        <Icon onClick={toggleDropdown} {...iconProps} />
      )}

      {dropdownVisibility && (
        <Card
          className="dropdown-container"
          onClick={() => (renderDropdownComponent ? toggleDropdown() : null)}
        >
          {!_.isEmpty(options)
            ? options.map((option) => {
                const { label, value, subMenu = [], styles } = option;
                const selected = value === dropdownValue;
                const itemClasses = classNames({
                  "item-value": true,
                  selected,
                });
                return (
                  <div key={label} className="item">
                    <div
                      onClick={() => handleItemClick(option)}
                      className={itemClasses}
                      style={styles}
                    >
                      {label}
                    </div>
                    {/* {!_.isEmpty(subMenu) &&
                      subMenu.map(({ label, subText, value }, index) => {
                        return (
                          <div
                            onClick={toggleDropdown}
                            key={label}
                            className="sub-menu-item-wrapper"
                            to={value}
                          >
                            <span className="index">{index + 1}.</span>
                            <h4 className="item-value">{label}</h4>
                            {subText && <p className="sub-text">{subText}</p>}
                          </div>
                        );
                      })} */}
                  </div>
                );
              })
            : renderDropdownComponent}
        </Card>
      )}
    </StyledContainer>
  );
};

Dropdown.defaultProps = {
  className: null,
  skipDefaultClass: false,
  options: [],
  dropPosition: "left",
  iconProps: {
    type: "menu",
    hover: false,
  },
  buttonProps: { label: "Menu" },
};

Dropdown.propTypes = {
  renderButtonComponent: PropTypes.any,
  renderDropdownComponent: PropTypes.any,
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
  options: PropTypes.array,
  buttonType: PropTypes.oneOf(["button", "icon"]),
  dropPosition: PropTypes.oneOf(["left", "center", "right"]),
  value: PropTypes.string,
  iconProps: PropTypes.object,
  buttonProps: PropTypes.object,
};

export default Dropdown;
