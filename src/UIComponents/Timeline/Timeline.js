import React from "react";
import className from "classnames";
import "./Timeline.scss";

const Timeline = ({ items, renderItem, view }) => {
  const classList = className({
    timeline: true,
    single: view === "SINGLE",
  });
  return (
    <div className={classList}>
      {items.map((item) => (
        <div key={item.id} className="block">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

Timeline.defaultProps = {
  view: "SINGLE",
};

export default Timeline;
