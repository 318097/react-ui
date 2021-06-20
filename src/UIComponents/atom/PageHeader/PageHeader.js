import React, { memo } from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import constants from "../../../magicdust/constants";
import { borderRadius } from "../../styled";

const StyledPageHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0;
  padding: 12px 8px;
  background: ${({ background }) =>
    background ? constants.BG : "transparent"};
  ${borderRadius};
  .title {
    display: flex;
    font-weight: bold;
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 12px;
  }
`;

const PageHeader = ({
  title,
  actions,
  className,
  skipDefaultClass,
  ...others
}) => {
  const classes = classNames({
    "page-header": !skipDefaultClass,
    [className]: !!className,
  });

  return (
    <StyledPageHeader {...others} className={classes}>
      <div className="title">{title}</div>
      <div className="actions">{actions}</div>
    </StyledPageHeader>
  );
};

PageHeader.defaultProps = {
  background: true,
  className: null,
  skipDefaultClass: false,
};

PageHeader.propTypes = {
  className: PropTypes.string,
  // title: PropTypes.string.isRequired,
  // actions: PropTypes.array,
  background: PropTypes.bool,
};

export default memo(PageHeader);
