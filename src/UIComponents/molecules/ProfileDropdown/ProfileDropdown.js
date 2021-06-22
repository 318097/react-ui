import React from "react";
import _ from "lodash";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import colors from "../../../magicdust/colors";
import Dropdown from "../../atom/Dropdown";
import ProfileAvatar from "../ProfileAvatar";
// import Card from "../../atom/Card";
import Icon from "../../atom/Icon";

const StyledContainer = styled.div`
  .dropdown-container {
    .profile {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .name {
      }
      .email {
        color: ${colors.steel};
        max-width: 120px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .logout {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${colors.iron}10;
    }
  }
`;

const ProfileDropdown = ({
  name,
  email,
  url,
  skipDefaultClass,
  className,
  options,
  ...others
}) => {
  const classes = classNames({
    "profile-dropdown": !skipDefaultClass,
    [className]: !!className,
  });

  const buttonComponent = <ProfileAvatar name={name} url={url} />;

  const dropdownOptions = [
    {
      label: (
        <>
          <span className="name">{name}</span>
          <span className="email">{email}</span>
        </>
      ),
      value: "profile",
    },
    ...options,
    {
      label: (
        <>
          Logout <Icon type="logout" />
        </>
      ),
      value: "logout",
    },
  ];

  return (
    <StyledContainer {...others} className={classes}>
      <Dropdown
        renderButtonComponent={buttonComponent}
        options={dropdownOptions}
      />
    </StyledContainer>
  );
};

ProfileDropdown.defaultProps = {
  className: null,
  skipDefaultClass: false,
  options: [],
};

ProfileDropdown.propTypes = {
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
  options: PropTypes.array,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default ProfileDropdown;
