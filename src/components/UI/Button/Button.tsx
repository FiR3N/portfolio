import cls from "./Button.module.css";

interface IButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: TButtonStyle;
  children: React.ReactNode;
}

type TButtonStyle = "primary" | "secondary";

const Button: React.FC<IButtonProps> = ({
  type = "primary",
  children,
  ...props
}) => {
  return (
    <a className={`${cls.button} ${cls[type]}`} {...props}>
      {children}
    </a>
  );
};

export default Button;
