import React from "react";
import _ from "lodash";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import colors from "../../../magicdust/colors";

const StyledContainer = styled.div`
  height: 36px;
  width: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${colors.steel};
  border: 2px solid ${colors.strokeTwo};
  border-radius: 50%;
  background: ${colors.bg};
  transition: 0.4s;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    border-color: ${colors.blue};
  }
  img {
    width: 100%;
  }
`;

const ProfileAvatar = ({
  name,
  url,
  skipDefaultClass,
  className,
  ...others
}) => {
  const classes = classNames({
    "profile-avatar": !skipDefaultClass,
    [className]: !!className,
  });

  const initals = _.map(_.split(name, /\s/), (word) => _.get(word, "0", ""));

  return (
    <StyledContainer {...others} className={classes}>
      {url ? <img src={url} alt={name} /> : initals}
    </StyledContainer>
  );
};

ProfileAvatar.defaultProps = {
  className: null,
  skipDefaultClass: false,
};

ProfileAvatar.propTypes = {
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default ProfileAvatar;
