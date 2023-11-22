import React from "react";
import { ButtonWrapper } from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  style?: React.CSSProperties;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper disabled {...props}>
      {children}
    </ButtonWrapper>
  );
};
export default Button;
