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
  .dropdown-container {
    position: absolute;
    top: 100%;
    left: -30px;
    min-height: 200px;
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
      .item-value {
        font-family: inherit;
        font-size: 1.2rem;
        padding: 12px;
        border-bottom: 1px solid ${colors.strokeOne};
        margin: 0;
        &:hover {
          background: ${colors.bg};
        }
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
  label,
  iconType,
  options,
  onChange,
  ...others
}) => {
  const containerRef = useRef();
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const classes = classNames({
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

    if (ref && !ref.contains(target) && dropdownVisibility) {
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
    <StyledContainer {...others} className={classes} ref={containerRef}>
      {renderButtonComponent ? (
        renderButtonComponent
      ) : buttonType === "button" ? (
        <Button onClick={toggleDropdown}>{label}</Button>
      ) : (
        <Icon
          className="ant-icon"
          type={iconType}
          hover
          onClick={toggleDropdown}
        />
      )}

      {dropdownVisibility && (
        <Card className="dropdown-container">
          {!_.isEmpty(options)
            ? options.map((option) => {
                const { label, value, subMenu = [] } = option;
                return (
                  <div key={label} className="item">
                    <div
                      onClick={() => handleItemClick(option)}
                      className={`item-value${value ? " link" : ""}`}
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
  iconType: "menu",
  options: [],
};

Dropdown.propTypes = {
  renderButtonComponent: PropTypes.any,
  renderDropdownComponent: PropTypes.any.isRequired,
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
  options: PropTypes.array,
  buttonType: PropTypes.oneOf(["button", "icon"]),
};

export default Dropdown;
