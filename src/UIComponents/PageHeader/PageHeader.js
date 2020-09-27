import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import colors from "../../magicdust/colors";
import { getThemeColors } from "../styled";

const StyledPageHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 4px 0;
  padding: 12px 8px;
  background: ${(props) =>
    props.background ? getThemeColors("background")(props) : "transparent"};
  width: 100%;
  border-radius: 4px;
  .title {
    display: flex;
    font-weight: bold;
  }
  .actions {
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
  }
`;

const PageHeader = ({ title, actions, className, ...others }) => {
  const classes = classNames({
    [className]: true,
  });

  return (
    <StyledPageHeader className={classes} {...others}>
      <div className="title">{title}</div>
      <div className="actions">{actions}</div>
    </StyledPageHeader>
  );
};

PageHeader.defaultProps = {
  className: "page-header",
  background: true,
};

PageHeader.propTypes = {
  className: PropTypes.string,
  // title: PropTypes.string.isRequired,
  // actions: PropTypes.array,
  background: PropTypes.bool,
};

export default memo(PageHeader);
