import cls from "./ToTheTopButton.module.css";
import { useLayoutEffect, useState } from "react";
import Button from "../Button/Button";
import { FaArrowUp } from "react-icons/fa";

const ToTheTopButton: React.FC = () => {
  const [isShowable, setIsShowable] = useState(false);

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeButtonVisibility = () => {
    if (window.scrollY > 1000) {
      setIsShowable(true);
    } else {
      setIsShowable(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", changeButtonVisibility);
    return () => {
      window.removeEventListener("scroll", changeButtonVisibility);
    };
  }, []);

  return (
    <div className={`${cls.toTheTopButton} ${isShowable ? cls._active : ""}`}>
      <Button id="toTheTopButton" onClick={clickHandler}>
        <FaArrowUp />
      </Button>
    </div>
  );
};

export default ToTheTopButton;
