import React, { memo } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import { baseCSS, dotCSS, getStyles } from "../styled";

const StyledCheckbox = styled.div`
  width: max-content;
  display: inline-flex;
  position: relative;
  margin-right: 4px;
  margin-bottom: 4px;
  ${baseCSS};
  ${(props) => getStyles({ ...props, type: "CHECKBOX" })};
  &.checkbox-selected {
    &:after {
      ${dotCSS};
      bottom: 1.5px;
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
  disabled,
  ...others
}) => {
  const classes = classNames({
    [className]: true,
    ["checkbox-selected"]: value,
    disabled: disabled,
  });

  const handleClick = (e) => {
    if (disabled) return;

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
  color: PropTypes.string,
};

export default memo(Checkbox);
