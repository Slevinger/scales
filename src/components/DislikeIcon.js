import React from "react";

export default () => (
  <svg
    width="128"
    height="128"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <rect x="16" y="8" width="96" height="96" rx="48" fill="white" />
      <rect
        x="18"
        y="10"
        width="92"
        height="92"
        rx="46"
        stroke="#EFEDF2"
        stroke-width="4"
      />
    </g>
    <path
      d="M76 44L52 68"
      stroke="url(#paint0_linear)"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52 44L76 68"
      stroke="url(#paint1_linear)"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="128"
        height="128"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="8" />
        <feGaussianBlur stdDeviation="8" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0509804 0 0 0 0 0 0 0 0 0 0.282353 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="52"
        y1="44"
        x2="76"
        y2="68"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C5388" />
        <stop offset="1" stopColor="#241959" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="52"
        y1="44"
        x2="76"
        y2="68"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5C5388" />
        <stop offset="1" stopColor="#241959" />
      </linearGradient>
    </defs>
  </svg>
);
