import { FC, ReactNode } from "react";
import cls from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={cls.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
