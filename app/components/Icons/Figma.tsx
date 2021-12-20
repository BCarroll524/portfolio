import { SVGProps } from 'react';

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={38}
    height={57}
    viewBox="0 0 38 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z"
        fill="#1ABCFE"
      />
      <path
        d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z"
        fill="#0ACF83"
      />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" fill="#FF7262" />
      <path
        d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z"
        fill="#F24E1E"
      />
      <path
        d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z"
        fill="#A259FF"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h38v57H0z" />
      </clipPath>
    </defs>
  </svg>
);

export { Figma };
