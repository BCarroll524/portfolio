import { SVGProps } from 'react';

const Twitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={124}
    height={144}
    viewBox="0 0 124 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M113.143 66.857 92.571 87.43H72l-18 18v-18H30.857V10.286h82.286v56.571Z"
        fill="#fff"
      />
      <path
        d="M25.714 0 0 25.714v92.572h30.857V144l25.714-25.714h20.572L123.429 72V0H25.714Zm87.429 66.857L92.571 87.43H72l-18 18v-18H30.857V10.286h82.286v56.571Z"
        fill="#9146FF"
      />
      <path
        d="M97.714 28.286H87.43v30.857h10.285V28.286ZM69.428 28.286H59.144v30.857h10.285V28.286Z"
        fill="#9146FF"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h123.429v144H0z" />
      </clipPath>
    </defs>
  </svg>
);

export { Twitch };
