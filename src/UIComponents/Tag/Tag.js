import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";
import { getThemeColors } from "../styled";

const Wrapper = styled.div`
  background: ${colors.featherDark};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid ${getThemeColors("border_color")};
  font-size: 1rem;
  transition: 0.4s;
  margin: 2px;
  position: relative;
  cursor: pointer;
`;

const Tag = ({ children, className, onClick, style, color, ...others }) => {
  const classes = classNames({});

  const handleClick = () => {
    if (onClick) onClick(children);
  };

  return (
    <Wrapper
      className={`${classes} ${className}`}
      onClick={handleClick}
      style={{
        ...style,
        ...(color
          ? { background: color, borderColor: color, color: "white" }
          : {}),
      }}
      {...others}
    >
      {children}
    </Wrapper>
  );
};

Tag.defaultProps = {
  style: {},
  className: "tag",
};

export default Tag;
