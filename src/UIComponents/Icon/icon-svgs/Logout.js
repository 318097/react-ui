import React from "react";

const Logout = props => (
  <svg
    height={props.height}
    width={props.width}
    id="Capa_1"
    enable-background="new 0 0 512 512"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path d="m147.682 173.862c24.86-32.704 64.162-53.862 108.318-53.862 36.326 0 70.479 14.146 96.167 39.833l10.606 10.606 84.853-84.852-10.606-10.606c-48.352-48.352-112.639-74.981-181.02-74.981-68.38 0-132.667 26.629-181.02 74.98-4.389 4.39-8.594 8.914-12.622 13.557z" />
      <path d="m423.462 449.642c4.643-4.028 9.168-8.233 13.558-12.622 48.351-48.353 74.98-112.64 74.98-181.02 0-15.575-1.41-31.179-4.192-46.377l-2.251-12.299h-264.557v120h136.452c-9.437 18.773-22.936 34.779-39.199 47.109z" />
      <path d="m311.602 380.208c-17.091 7.623-35.947 11.792-55.602 11.792-44.156 0-83.458-21.158-108.318-53.862l-85.324 85.324c4.028 4.643 8.233 9.168 12.622 13.557 48.353 48.352 112.64 74.981 181.02 74.981 51.916 0 101.464-15.363 143.479-43.915z" />
      <path d="m131.863 311.531c-7.619-16.965-11.863-35.761-11.863-55.531s4.244-38.566 11.863-55.531l-87.948-87.948c-28.552 42.015-43.915 91.563-43.915 143.479s15.363 101.464 43.915 143.479z" />
    </g>
  </svg>
);

Logout.defaultProps = {
  height: 16,
  width: 16
};

export default Logout;
