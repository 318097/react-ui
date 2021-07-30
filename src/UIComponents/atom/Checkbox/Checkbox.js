import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import { baseCSS, flexCSS, dotCSS, getStyles } from "../../styled";

const StyledCheckbox = styled.div`
  width: max-content;
  position: relative;
  ${baseCSS};
  ${flexCSS};
  ${(props) => getStyles({ ...props, componentName: "CHECKBOX" })};
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
  // options,
  value,
  style,
  className,
  onChange,
  // onBlur,
  name,
  label,
  disabled,
  skipDefaultClass,
  ...others
}) => {
  const classes = classNames({
    checkbox: !skipDefaultClass,
    [className]: !!className,
    "checkbox-selected": value,
    disabled,
  });

  const handleClick = (e) => {
    if (disabled) return;

    if (name) onChange(e, { [name]: !value });
    else onChange(e, !value);
  };

  return (
    <StyledCheckbox
      {...others}
      name={name}
      style={style}
      className={classes}
      onClick={handleClick}
    >
      {label}
    </StyledCheckbox>
  );
};

Checkbox.defaultProps = {
  label: "",
  value: false,
  style: {},
  size: "md",
  onChange: () => {},
  className: null,
  skipDefaultClass: false,
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  skipDefaultClass: PropTypes.bool,
};

export default memo(Checkbox);
