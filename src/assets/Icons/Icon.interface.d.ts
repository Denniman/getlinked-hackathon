import { DefaultTheme } from "styled-components";

export type IconProps = {
  size?: number;
  color?: keyof DefaultTheme["colors"];
} & React.SVGProps<SVGSVGElement>;
