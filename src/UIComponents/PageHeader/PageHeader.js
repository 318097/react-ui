import React from "react";
import styled from "styled-components";
import colors from "../../magicdust/colors";

const StyledPageHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 4px 0;
  padding: 12px 8px;
  background: ${({ background }) => (background ? colors.bg : "transparent")};
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

const PageHeader = ({ title, actions, className, ...others }) => (
  <StyledPageHeader className={className} {...others}>
    <div className="title">{title}</div>
    <div className="actions">{actions}</div>
  </StyledPageHeader>
);

PageHeader.defaultProps = {
  className: "page-header",
  background: true,
};

export default PageHeader;
