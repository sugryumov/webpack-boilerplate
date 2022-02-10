import { SVGProps } from 'react';

export const IconWebpack = ({
  width = 35,
  height = 35,
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 256 296"
  >
    <defs>
      <radialGradient fx="50%" fy="50%" id="webpack">
        <stop stopColor="#93B4E7" offset="0%" />
        <stop stopColor="#B9D1F8" offset="59.273%" />
        <stop stopColor="#9CB6E0" offset="100%" />
      </radialGradient>
    </defs>
    <path
      d="M128.032.456.298 74.203v147.495l127.734 73.748 127.735-73.748V74.203L128.032.456z"
      fill="url(#webpack)"
    />
    <path
      d="M128.034 75.263 64.69 111.834v73.144l63.344 36.572 63.344-36.572v-73.144l-63.344-36.571z"
      fill="#6F95DB"
    />
    <path
      d="M128 0 0 74.25l128 69.693 128-69.238L128 0zm0 153.509L0 221.38l128 73.793 127.544-74.249L128 153.51z"
      fill="#FFF"
      fillOpacity={0.1}
    />
  </svg>
);
