import React from "react";

const Menu = (props) => (
  <svg
    height={props.height}
    width={props.width}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
  >
    <circle style="fill:#303C42;" cx="256" cy="64" r="64" />
    <circle style="fill:#1E88E5;" cx="256" cy="64" r="42.667" />
    <circle style="fill:#303C42;" cx="256" cy="256" r="64" />
    <circle style="fill:#1E88E5;" cx="256" cy="256" r="42.667" />
    <circle style="fill:#303C42;" cx="256" cy="448" r="64" />
    <circle style="fill:#1E88E5;" cx="256" cy="448" r="42.667" />
    <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1="-40.8684"
      y1="637.3581"
      x2="-28.5378"
      y2="631.6107"
      gradientTransform="matrix(21.3333 0 0 -21.3333 996.3334 13791.667)"
    >
      <stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.2" />
      <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
    </linearGradient>
    <path
      style="fill:url(#SVGID_1_);"
      d="M256,128c35.292,0,64-28.708,64-64S291.292,0,256,0s-64,28.708-64,64S220.708,128,256,128z
	 M256,192c-35.292,0-64,28.708-64,64s28.708,64,64,64s64-28.708,64-64S291.292,192,256,192z M256,384c-35.292,0-64,28.708-64,64
	s28.708,64,64,64s64-28.708,64-64S291.292,384,256,384z"
    />
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);

Menu.defaultProps = {
  height: 16,
  width: 16,
};

export default Menu;
