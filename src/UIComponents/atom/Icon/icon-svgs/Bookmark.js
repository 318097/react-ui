import React from "react";

const Bookmark = (props) =>
  props.iconType === "outline" ? (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="bookmark"
      className="svg-inline--fa fa-bookmark fa-w-12"
      role="img"
      viewBox="0 0 384 512"
      height={props.height}
      width={props.width}
    >
      <path
        fill="currentColor"
        d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
      ></path>
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bookmark"
      className="svg-inline--fa fa-bookmark fa-w-12"
      role="img"
      viewBox="0 0 384 512"
      height={props.height}
      width={props.width}
    >
      <path
        fill="currentColor"
        d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
      ></path>
    </svg>
  );

Bookmark.defaultProps = {
  height: 16,
  width: 16,
};

export default Bookmark;
