import React from "react";

const Cancel = (props) => (
  <svg
    height={props.height}
    width={props.width}
    viewBox="0 -1 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m437.019531 74.914062c-48.355469-48.308593-112.640625-74.914062-181.019531-74.914062s-132.664062 26.605469-181.019531 74.914062c-48.351563 48.3125-74.980469 112.542969-74.980469 180.867188 0 65.1875 24.550781 127.269531 69.128906 174.820312 44.363282 47.324219 104.332032 75.851563 168.859375 80.335938 4.128907.273438 7.714844-2.832031 8.003907-6.960938.285156-4.132812-2.832032-7.714843-6.964844-8.003906-60.738282-4.21875-117.191406-31.078125-158.957032-75.628906-41.960937-44.761719-65.070312-103.203125-65.070312-164.5625 0-64.3125 25.066406-124.777344 70.585938-170.253906 45.519531-45.480469 106.039062-70.527344 170.414062-70.527344s124.894531 25.046875 170.414062 70.523438c45.519532 45.480468 70.585938 105.945312 70.585938 170.257812 0 61.359375-23.109375 119.804688-65.070312 164.5625-41.765626 44.550781-98.21875 71.410156-158.957032 75.628906-4.132812.289063-7.25 3.871094-6.964844 8.003906.277344 3.957032 3.570313 6.980469 7.476563 6.980469.175781 0 .351563-.007812.527344-.019531 64.527343-4.484375 124.496093-33.011719 168.859375-80.335938 44.578125-47.550781 69.128906-109.636718 69.128906-174.820312 0-68.324219-26.628906-132.554688-74.980469-180.867188zm0 0" />
    <path d="m227.851562 353.222656 28.148438-28.125 77.144531 77.082032c9.496094 9.484374 21.972657 14.230468 34.445313 14.230468s24.945312-4.746094 34.441406-14.230468c9.203125-9.195313 14.269531-21.417969 14.269531-34.421876 0-13.003906-5.066406-25.230468-14.269531-34.421874l-77.136719-77.070313 77.136719-77.070313c9.203125-9.191406 14.269531-21.417968 14.269531-34.421874 0-13.003907-5.066406-25.226563-14.269531-34.421876-18.992188-18.972656-49.894531-18.972656-68.886719 0l-24.40625 24.386719c-2.929687 2.925781-2.933593 7.675781-.003906 10.605469 2.925781 2.929688 7.675781 2.933594 10.605469.003906l24.40625-24.382812c13.144531-13.136719 34.535156-13.136719 47.683594 0 6.367187 6.359375 9.871093 14.8125 9.871093 23.808594 0 8.996093-3.503906 17.449218-9.871093 23.8125l-82.449219 82.375c-1.40625 1.40625-2.199219 3.3125-2.199219 5.304687s.792969 3.898437 2.199219 5.304687l82.449219 82.375c6.367187 6.359376 9.871093 14.816407 9.871093 23.8125 0 8.996094-3.503906 17.449219-9.871093 23.808594-13.148438 13.136719-34.539063 13.136719-47.683594 0l-82.445313-82.375c-2.929687-2.925781-7.675781-2.925781-10.605469 0l-33.449218 33.421875c-2.929688 2.929688-2.933594 7.675781-.003906 10.605469 2.929687 2.929688 7.679687 2.933594 10.609374.003906zm0 0" />
    <path d="m168.253906 120.964844 82.445313 82.375c2.929687 2.925781 7.671875 2.925781 10.601562 0l33.441407-33.414063c2.933593-2.929687 2.933593-7.675781.003906-10.605469-2.925782-2.929687-7.675782-2.933593-10.605469-.003906l-28.140625 28.117188-77.144531-77.082032c-18.992188-18.972656-49.894531-18.972656-68.886719 0-9.203125 9.195313-14.273438 21.421876-14.273438 34.421876 0 13.003906 5.070313 25.230468 14.273438 34.421874l77.136719 77.070313-77.136719 77.070313c-9.203125 9.191406-14.273438 21.417968-14.273438 34.421874 0 13.003907 5.070313 25.226563 14.273438 34.421876 9.496094 9.484374 21.96875 14.230468 34.441406 14.230468s24.945313-4.746094 34.441406-14.230468l24.328126-24.308594c2.933593-2.925782 2.933593-7.675782.007812-10.605469-2.929688-2.929687-7.679688-2.933594-10.609375-.003906l-24.324219 24.304687c-13.148437 13.136719-34.539062 13.136719-47.683594 0-6.367187-6.359375-9.875-14.8125-9.875-23.808594 0-8.996093 3.507813-17.449218 9.875-23.8125l82.445313-82.375c1.410156-1.40625 2.199219-3.3125 2.199219-5.304687 0-1.988281-.789063-3.898437-2.199219-5.304687l-82.445313-82.375c-6.367187-6.359376-9.875-14.816407-9.875-23.8125 0-8.996094 3.507813-17.449219 9.875-23.808594 13.144532-13.132813 34.535157-13.136719 47.683594 0zm0 0" />
  </svg>
);

Cancel.defaultProps = {
  height: 16,
  width: 16,
};

export default Cancel;