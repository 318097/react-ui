import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import { borderRadius, flexCSS, getStyles } from "../../styled";
import colors from "../../../magicdust/colors";

const Wrapper = styled.div`
  ${flexCSS};
  padding: 2px 4px;
  ${borderRadius};
  font-size: 90%;
  transition: 0.2s;
  margin: 2px;
  position: relative;
  cursor: pointer;
  ${(props) => getStyles({ ...props, componentName: "TAG" })};
`;

const Tag = ({
  children,
  className,
  onClick,
  style,
  skipDefaultClass,
  ...others
}) => {
  const classes = classNames({
    tag: !skipDefaultClass,
    [className]: !!className,
  });

  const handleClick = () => {
    if (onClick) onClick(children);
  };

  return (
    <Wrapper
      {...others}
      className={classes}
      onClick={handleClick}
      style={style}
    >
      {children}
    </Wrapper>
  );
};

Tag.defaultProps = {
  style: {},
  color: colors.steel,
  className: null,
  skipDefaultClass: false,
};

Tag.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
};

export default Tag;
