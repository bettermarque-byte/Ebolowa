import React from "react";

export const Angle = ({width, stroke}: {width: string, stroke: string}) => {
  return (
    <svg
      width= "18"
      height= "18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{width, height: "auto"}}
    >
      <path
        d="M14.25 6.75L9 12L3.75 6.75"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
