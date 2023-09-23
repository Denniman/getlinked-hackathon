import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
