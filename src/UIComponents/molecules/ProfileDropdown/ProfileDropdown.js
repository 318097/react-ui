import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import colors from "../../../magicdust/colors";
import Dropdown from "../../atom/Dropdown";
import ProfileAvatar from "../ProfileAvatar";
// import Card from "../../atom/Card";
import Icon from "../../atom/Icon";

const StyledContainer = styled.div`
  display: inline-flex;
  .dropdown-container {
    max-width: 140px;
    .profile {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .name {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: pre;
      }
      .email {
        font-size: 1rem;
        line-height: 1.4rem;
        color: ${colors.steel};
        width: 100%;
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
  dropPosition,
  onItemClick,
  profileAvatarProps,
  ...others
}) => {
  const classes = classNames({
    "profile-dropdown": !skipDefaultClass,
    [className]: !!className,
  });

  const buttonComponent = (
    <ProfileAvatar name={name} url={url} {...profileAvatarProps} />
  );

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
          Logout <Icon type="logout" size={12} />
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
        dropPosition={dropPosition}
        onChange={onItemClick}
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
  dropPosition: PropTypes.oneOf(["left", "center", "right"]),
  onItemClick: PropTypes.func.isRequired,
};

export default ProfileDropdown;
