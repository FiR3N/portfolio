import { animated, useSpring } from "@react-spring/web";
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
}) => {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

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
    config,
  });

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
