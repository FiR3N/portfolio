import { FC, ReactNode } from "react";
import cls from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={cls.button}>{children}</button>;
};

export default Button;
