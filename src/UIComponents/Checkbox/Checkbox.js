import React, { memo } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import colors from "../../magicdust/colors";
import { baseCSS, dotCSS, getThemeColors } from "../styled";

const StyledCheckbox = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  display: inline-block;
  ${baseCSS};
  background: ${getThemeColors("background")};
  border: 1px solid ${getThemeColors("border_color")};
  border-radius: 4px;
  position: relative;
  margin-right: 4px;
  &:hover {
    background: ${getThemeColors("hover_background")};
  }
  &.checkbox-selected {
    &:after {
      ${dotCSS};
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Checkbox = ({
  options,
  value,
  style,
  className,
  onChange,
  onBlur,
  name,
  label,
  ...others
}) => {
  const classes = classNames({
    [className]: true,
    ["checkbox-selected"]: value,
  });

  const handleClick = (e) => {
    if (name) onChange(e, { [name]: !value });
    else onChange(e, !value);
  };

  return (
    <StyledCheckbox
      name={name}
      style={{ ...style }}
      className={classes}
      onClick={handleClick}
      {...others}
    >
      {label}
    </StyledCheckbox>
  );
};

Checkbox.defaultProps = {
  label: "",
  value: false,
  style: {},
  className: "checkbox",
  size: "md",
  onChange: () => {},
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(Checkbox);
