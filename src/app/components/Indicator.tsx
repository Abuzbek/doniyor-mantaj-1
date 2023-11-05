import React from "react";

type Props = {};

const Indicator = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle cx="9" cy="9" r="7" stroke="#D9D9D9" strokeWidth="4" />
      <circle
        cx="9"
        cy="9"
        r="7"
        stroke="url(#paint0_linear_52_128)"
        strokeWidth="4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_52_128"
          x1="-1.3411e-07"
          y1="18"
          x2="19.5736"
          y2="16.0851"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6950FF" />
          <stop offset="0.0001" stopColor="#6950FF" />
          <stop offset="1" stopColor="#C631FB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Indicator;
