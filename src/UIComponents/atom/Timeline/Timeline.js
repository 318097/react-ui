import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Timeline.scss";

const Timeline = ({
  items,
  renderItem,
  customStopItem,
  skipDefaultClass,
  className,
  ...others
}) => {
  const classes = classNames({
    timeline: !skipDefaultClass,
    [className]: !!className,
  });

  return (
    <div {...others} className={classes}>
      {items.map((item) => (
        <div key={item.id} className="timeline-block">
          <div className="timeline-block-stops">
            {customStopItem ? customStopItem() : null}
          </div>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

Timeline.defaultProps = {
  className: null,
  skipDefaultClass: false,
};

Timeline.propTypes = {
  customStopItem: PropTypes.func,
};

export default Timeline;
