import React from "react";
import _ from "lodash";
import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import colors from "../../../magicdust/colors";
import { flexCSS } from "../../styled";

const StyledContainer = styled.div`
  ${flexCSS};
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  font-size: 16px;
  color: ${colors.steel};
  border: 1px solid ${colors.strokeOne};
  border-radius: 50%;
  background: ${colors.bg};
  transition: 0.4s;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    border-color: ${colors.strokeTwo};
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
  size: 28,
};

ProfileAvatar.propTypes = {
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default ProfileAvatar;
