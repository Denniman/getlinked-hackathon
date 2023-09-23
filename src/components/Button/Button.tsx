import React from "react";
import { ButtonProps } from "./Button.interface";
import { ButtonContainer } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};
