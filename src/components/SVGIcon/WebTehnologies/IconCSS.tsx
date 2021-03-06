import { SVGProps } from 'react';

export const IconCSS = ({
  width = 35,
  height = 45,
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 63.75 85"
    width={width}
    height={height}
    fill="#fff"
    stroke="#000"
  >
    <use xlinkHref="#a" x={1.875} y={2.5} />
    <symbol id="a" overflow="visible">
      <g stroke="none">
        <path d="M60 15H0l5 57.5L30 80l25-7.5L60 15" fill="#1572b6" />
        <path
          d="m51.739 52.5.435-5 .652-7.5.652-7.5.652-7.5.435-5H30v55l15.179-4.554 5.134-1.54.67-7.701.67-7.701z"
          fill="#33a9dc"
        />
        <path
          d="M22 0h-9v11h9V8h-6V3h6zm13 0v3h-5l5 5v3H25V8h5l-5-5V0zm13 0v3h-5l5 5v3H38V8h5l-5-5V0z"
          fill="#000"
        />
        <path
          d="m24.933 65.98-2.567-.77-8.214-2.464-.67-7.701-.221-2.545h8l.436 5.009 2.567.77L30 60v7.5zM11.522 32.5H30V25H10.87z"
          fill="#ebebeb"
        />
        <path d="m30 60 8.304-2.491.435-5.009.435-5H30V40h9.826l.652-7.5H30V25H49.13l-.652 7.5-.652 7.5-.652 7.5-.435 5-.221 2.545-.67 7.701-8.214 2.464L30 67.5V60z" />
        <path d="M30 47.5h-6.674l-.652-7.5H30z" fill="#ebebeb" />
      </g>
    </symbol>
  </svg>
);
