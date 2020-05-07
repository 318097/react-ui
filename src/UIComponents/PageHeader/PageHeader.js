import React from "react";
import styled from "styled-components";
import colors from "../../magicdust/colors";

const StyledPageHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 4px 0;
  padding: 8px;
  background: ${colors.bg};
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

const PageHeader = ({ title, actions, className = "page-header" }) => (
  <StyledPageHeader className={className}>
    <div className="title">{title}</div>
    <div className="actions">{actions}</div>
  </StyledPageHeader>
);

export default PageHeader;
