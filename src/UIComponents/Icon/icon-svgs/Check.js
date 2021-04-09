import React from "react";

const Check = (props) => {
  return (
    <svg
      id="Capa_1"
      enableBackground="new 0 0 515.556 515.556"
      height={props.height}
      width={props.width}
      viewBox="0 0 515.556 515.556"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
    </svg>
  );
};

Check.defaultProps = {
  height: 16,
  width: 16,
};

export default Check;
