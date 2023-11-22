import { InputStyle, InputWrapper, ErrorMsg } from "./styles";
import { useState } from "react";

export interface IInputProps {
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number" | "file";
  placeholder?: string;
  value?: string;
  name?: string;
  errorMesagge?: string;
}

const Input = ({ errorMesagge, type, ...props }: IInputProps) => {
  const [isShowPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!isShowPassword);
  };
  return (
    <InputWrapper>
      <div>
        <InputStyle
          className={errorMesagge ? "error" : ""}
          type={type === "password" && !isShowPassword ? "password" : "text"}
          {...props}
        />
        {type === "password" && (
          <img
            onClick={togglePassword}
            src={
              isShowPassword
                ? "/images/eyeInvisiblee.svg"
                : "/images/eyeVisible.svg"
            }
            alt="eye"
          />
        )}
      </div>
      {errorMesagge && <ErrorMsg>{errorMesagge}</ErrorMsg>}
    </InputWrapper>
  );
};
export default Input;
