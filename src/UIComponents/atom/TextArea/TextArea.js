import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import colors from "../../../magicdust/colors";
import constants from "../../../magicdust/constants";
import { baseCSS } from "../../styled";

const StyledTextArea = styled.textarea`
  background: ${colors.white};
  border: 1px solid ${constants.BG};
  display: inline-block;
  resize: none;
  ${baseCSS};
  margin: 0;
  &:active:not(.disabled),
  &:focus:not(.disabled) {
    border-color: ${constants.PRIMARY};
  }
  &.disabled {
    background: ${colors.feather};
  }
`;

const TextArea = ({
  style,
  className,
  curved,
  onChange,
  onBlur,
  name,
  disabled,
  skipDefaultClass,
  ...others
}) => {
  const classes = classNames({
    textarea: !skipDefaultClass,
    [className]: !!className,
    disabled,
    "curve-border-1": curved,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    if (onChange) {
      if (name) onChange(e, { [name]: value });
      else onChange(e, value);
    }
  };

  const handleBlur = (e) => {
    const { value } = e.target;
    if (onBlur) onBlur(e, value);
  };

  return (
    <StyledTextArea
      {...others}
      name={name}
      style={style}
      className={classes}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={disabled}
    />
  );
};

TextArea.defaultProps = {
  style: {},
  size: "md",
  curved: false,
  rows: 2,
  className: null,
  skipDefaultClass: false,
};

TextArea.propTypes = {
  style: PropTypes.object,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  curved: PropTypes.bool,
  rows: PropTypes.number,
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(TextArea);
