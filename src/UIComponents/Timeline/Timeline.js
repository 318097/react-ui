import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import "./Timeline.scss";

const Timeline = ({ items, renderItem, customStopItem }) => {
  const classList = className({
    timeline: true,
  });

  return (
    <div className={classList}>
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

Timeline.defaultProps = {};

Timeline.propTypes = {
  customStopItem: PropTypes.func,
};

export default Timeline;
