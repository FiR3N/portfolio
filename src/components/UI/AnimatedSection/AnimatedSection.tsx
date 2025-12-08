import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type AnimationType =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom";

export interface IAnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  config?: {
    tension?: number;
    friction?: number;
    mass?: number;
  };
  disableOnMobile?: boolean;
}

const AnimatedSection: React.FC<IAnimatedSectionProps> = ({
  children,
  animation = "fade",
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = "",
  id,
  style,
  config = { tension: 200, friction: 30 },
  disableOnMobile = true,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;

      setIsMobile(isTouchDevice && isSmallScreen);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldAnimate = !(disableOnMobile && isMobile);

  const getAnimationTransform = () => {
    if (!inView) {
      switch (animation) {
        case "slide-up":
          return "translateY(50px)";
        case "slide-down":
          return "translateY(-50px)";
        case "slide-left":
          return "translateX(50px)";
        case "slide-right":
          return "translateX(-50px)";
        case "zoom":
          return "scale(0.9)";
        default:
          return "translateY(0px)";
      }
    }
    return "translateY(0px)";
  };

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: getAnimationTransform(),
    delay: inView ? delay : 0,
    config: shouldAnimate ? config : { duration: 0 },
  });

  if (!shouldAnimate) {
    return (
      <section ref={ref} id={id} className={className} style={style}>
        {children}
      </section>
    );
  }

  return (
    <animated.section
      ref={ref}
      id={id}
      className={className}
      style={{
        ...springProps,
        ...style,
      }}
    >
      {children}
    </animated.section>
  );
};

export default AnimatedSection;
