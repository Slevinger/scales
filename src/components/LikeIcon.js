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
      <rect
        x="18"
        y="10"
        width="92"
        height="92"
        rx="46"
        fill="white"
        stroke="#FFF1F0"
        stroke-width="4"
      />
      <path
        d="M81.6801 41.22C80.6586 40.198 79.4457 39.3873 78.1108 38.8342C76.7759 38.281 75.3451 37.9963 73.9001 37.9963C72.4551 37.9963 71.0243 38.281 69.6894 38.8342C68.3545 39.3873 67.1416 40.198 66.1201 41.22L64.0001 43.34L61.8801 41.22C59.8167 39.1566 57.0182 37.9974 54.1001 37.9974C51.182 37.9974 48.3835 39.1566 46.3201 41.22C44.2567 43.2834 43.0975 46.0819 43.0975 49C43.0975 51.9181 44.2567 54.7166 46.3201 56.78L48.4401 58.9L64.0001 74.46L79.5601 58.9L81.6801 56.78C82.7021 55.7585 83.5128 54.5456 84.0659 53.2107C84.6191 51.8758 84.9038 50.445 84.9038 49C84.9038 47.555 84.6191 46.1242 84.0659 44.7893C83.5128 43.4544 82.7021 42.2415 81.6801 41.22Z"
        fill="url(#paint0_linear)"
      />
    </g>
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
          values="0 0 0 0 0.941667 0 0 0 0 0.778988 0 0 0 0 0.74941 0 0 0 0.4 0"
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
        x1="43.0975"
        y1="37.9963"
        x2="79.223"
        y2="79.4148"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE6E2" />
        <stop offset="1" stopColor="#F2BFB7" />
      </linearGradient>
    </defs>
  </svg>
);
