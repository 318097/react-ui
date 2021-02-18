import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import colors from "../../magicdust/colors";
import constants from "../../magicdust/constants";
import { baseCSS } from "../styled";

const StyledTextArea = styled.textarea`
  background: ${colors.white};
  border: 1px solid ${constants.BG};
  display: inline-block;
  ${baseCSS};
  margin: 0;
  &:active,
  &:focus {
    border-color: ${constants.PRIMARY};
  }
`;

const TextArea = ({
  style,
  className,
  curved,
  onChange,
  onBlur,
  name,
  ...others
}) => {
  console.log(others);
  const classes = classNames({
    [className]: true,
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
      name={name}
      style={{ ...style }}
      className={classes}
      onChange={handleChange}
      onBlur={handleBlur}
      {...others}
    />
  );
};

TextArea.defaultProps = {
  className: "textarea",
  style: {},
  size: "md",
  curved: false,
  rows: 2,
};

TextArea.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.string,
  curved: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(TextArea);
