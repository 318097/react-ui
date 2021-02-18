import React from "react";

const Settings = (props) => {
  return (
    <svg
      height={props.height}
      width={props.width}
      fill={props.fill}
      id="Capa_1"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m482 256c0-4.898-.162-9.85-.483-14.791l27.511-25.177-1.59-8.242c-2.012-10.424-4.692-20.819-7.967-30.896-3.273-10.077-7.216-20.063-11.717-29.683l-3.558-7.602-37.041-4.197c-5.266-8.327-11.092-16.334-17.405-23.92l7.46-36.553-6.129-5.732c-7.751-7.248-16.03-14.083-24.607-20.314-8.574-6.23-17.634-11.993-26.926-17.127l-7.347-4.059-32.402 18.36c-9.176-3.664-18.613-6.728-28.194-9.154l-15.427-33.909-8.33-1.033c-10.538-1.308-21.253-1.971-31.848-1.971s-21.31.663-31.848 1.971l-8.33 1.033-15.427 33.909c-9.581 2.427-19.017 5.49-28.194 9.154l-32.402-18.36-7.347 4.059c-9.292 5.134-18.352 10.896-26.925 17.126-8.578 6.232-16.857 13.067-24.608 20.315l-6.129 5.732 7.46 36.553c-6.315 7.588-12.141 15.593-17.405 23.921l-37.041 4.196-3.558 7.602c-4.5 9.616-8.442 19.603-11.717 29.681-3.276 10.082-5.956 20.478-7.967 30.9l-1.59 8.24 27.511 25.177c-.321 4.941-.483 9.893-.483 14.791 0 4.899.162 9.849.483 14.791l-27.51 25.177 1.59 8.24c2.011 10.423 4.69 20.818 7.967 30.899 3.274 10.079 7.217 20.065 11.717 29.682l3.558 7.602 37.041 4.196c5.265 8.328 11.09 16.333 17.405 23.921l-7.46 36.553 6.129 5.732c7.751 7.248 16.03 14.083 24.607 20.314 8.574 6.23 17.634 11.993 26.926 17.127l7.347 4.059 32.402-18.36c9.178 3.664 18.613 6.728 28.194 9.154l15.427 33.907 8.329 1.034c10.535 1.309 21.249 1.972 31.848 1.972s21.313-.663 31.849-1.972l8.329-1.034 15.427-33.907c9.581-2.427 19.019-5.49 28.194-9.154l32.402 18.36 7.347-4.059c9.292-5.134 18.352-10.896 26.925-17.126 8.578-6.232 16.857-13.067 24.608-20.315l6.129-5.732-7.46-36.553c6.313-7.586 12.14-15.593 17.405-23.92l37.041-4.197 3.558-7.602c4.501-9.619 8.443-19.605 11.716-29.681 3.275-10.079 5.956-20.475 7.968-30.898l1.59-8.241-27.511-25.178c.321-4.942.483-9.892.483-14.791zm-30.957-19.43c.635 6.462.957 12.999.957 19.43s-.322 12.968-.957 19.429l-.734 7.468 25.95 23.749c-1.496 6.478-3.278 12.905-5.321 19.193-2.041 6.285-4.378 12.531-6.975 18.652l-34.942 3.959-3.794 6.477c-6.535 11.152-14.222 21.715-22.845 31.394l-5 5.613 7.042 34.506c-5.016 4.358-10.234 8.512-15.585 12.398-5.349 3.886-10.91 7.566-16.607 10.99l-30.589-17.331-6.886 3.025c-11.854 5.208-24.282 9.243-36.941 11.993l-7.353 1.598-14.566 32.016c-13.246 1.158-26.547 1.158-39.793 0l-14.566-32.016-7.353-1.598c-12.658-2.75-25.088-6.785-36.941-11.993l-6.886-3.025-30.589 17.331c-5.697-3.424-11.26-7.104-16.608-10.991-5.35-3.887-10.568-8.039-15.584-12.397l7.042-34.506-5-5.613c-8.626-9.682-16.312-20.244-22.844-31.394l-3.795-6.477-34.942-3.959c-2.597-6.12-4.934-12.367-6.977-18.654-2.043-6.288-3.824-12.714-5.32-19.19l25.951-23.75-.734-7.468c-.636-6.461-.958-12.998-.958-19.429s.322-12.968.957-19.43l.734-7.468-25.951-23.748c1.496-6.477 3.277-12.902 5.32-19.191 2.043-6.286 4.38-12.533 6.977-18.653l34.942-3.959 3.795-6.477c6.532-11.149 14.218-21.712 22.844-31.394l5-5.613-7.042-34.506c5.016-4.358 10.234-8.512 15.585-12.398 5.349-3.886 10.91-7.566 16.607-10.99l30.589 17.331 6.886-3.025c11.854-5.208 24.283-9.243 36.941-11.993l7.353-1.598 14.566-32.017c13.248-1.156 26.545-1.156 39.793 0l14.566 32.017 7.353 1.598c12.659 2.75 25.088 6.785 36.941 11.993l6.886 3.025 30.589-17.331c5.697 3.424 11.26 7.104 16.608 10.991 5.35 3.887 10.568 8.039 15.584 12.397l-7.042 34.506 5 5.613c8.623 9.679 16.31 20.241 22.845 31.394l3.794 6.477 34.942 3.959c2.597 6.121 4.934 12.367 6.976 18.654 2.043 6.286 3.824 12.714 5.32 19.19l-25.95 23.749z" />
        <path d="m256 90c-91.532 0-166 74.468-166 166s74.468 166 166 166 166-74.468 166-166-74.468-166-166-166zm0 302c-74.99 0-136-61.01-136-136s61.01-136 136-136 136 61.01 136 136-61.01 136-136 136z" />
        <path d="m256 196c-33.084 0-60 26.916-60 60s26.916 60 60 60 60-26.916 60-60-26.916-60-60-60zm0 90c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30z" />
      </g>
    </svg>
  );
};

Settings.defaultProps = {
  height: 16,
  width: 16,
};

export default Settings;
