import { IconProps } from "./Icon.interface";

import { Logo } from "./svg/logo";

const iconMap = {
  logo: Logo,
};

export type IconType = keyof typeof iconMap;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolver: Record<string, any> = {};

// eslint-disable-next-line react-refresh/only-export-components
export const iconNameList = Object.keys(iconMap) as IconType[];

export const Icon = ({
  name,
  size,
  ...props
}: IconProps & { name: IconType }) => {
  const style = size
    ? { height: size, width: size, viewBox: `0 0 ${size * 1.2} ${size * 1.2}` }
    : {};

  for (const [key, icon] of Object.entries(iconMap)) {
    resolver[key] = icon({ size, ...props, ...style });
  }

  return resolver[name];
};
