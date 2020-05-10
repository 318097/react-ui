import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import colors from "../../magicdust/colors";

const Wrapper = styled.div`
  background: ${colors.featherDark};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid ${colors.strokeThree};
  font-size: 1rem;
  transition: 0.4s;
  margin: 2px;
  position: relative;
  cursor: pointer;
`;

const Tag = ({ children, className = "tag", onClick, others }) => {
  const classes = classNames({});

  const handleClick = () => {
    if (onClick) onClick(children);
  };

  return (
    <Wrapper
      className={`${classes} ${className}`}
      onClick={handleClick}
      {...others}
    >
      {children}
    </Wrapper>
  );
};

export default Tag;
