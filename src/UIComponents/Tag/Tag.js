import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import { borderRadius, getStyles } from "../styled";
import colors from "../../magicdust/colors";

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  ${borderRadius};
  font-size: 1rem;
  transition: 0.2s;
  margin: 2px;
  position: relative;
  cursor: pointer;
  ${(props) => getStyles({ ...props, componentName: "TAG" })};
`;

const Tag = ({ children, className, onClick, style, ...others }) => {
  const classes = classNames({});

  const handleClick = () => {
    if (onClick) onClick(children);
  };

  return (
    <Wrapper
      className={`${classes} ${className}`}
      onClick={handleClick}
      style={style}
      {...others}
    >
      {children}
    </Wrapper>
  );
};

Tag.defaultProps = {
  style: {},
  className: "tag",
  color: colors.steel,
};
export default Tag;
