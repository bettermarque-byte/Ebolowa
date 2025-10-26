import React from "react";

export const Angle = ({width, color}: {width: string, color: string}) => {
  return (
    <svg
      width={width}
      height="auto"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.25 6.75L9 12L3.75 6.75"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
