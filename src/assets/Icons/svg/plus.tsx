import React from "react";
import { IconProps } from "../Icon.interface";

export const Plus: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={10}
      fill="none"
      {...props}
    >
      <path
        fill="#D434FE"
        d="M4.78 10V6.2H.96V4.32h3.82V.56h1.8v3.76h3.82V6.2H6.58V10h-1.8Z"
      />
    </svg>
  );
};
