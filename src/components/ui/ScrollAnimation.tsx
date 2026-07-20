"use client";
// components/ScrollAnimation.tsx
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({
  children,
  className = "",
  animation = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const animations: Record<string, string> = {
    "fade-up": "opacity-0 translate-y-4",
    "fade-left": "opacity-0 -translate-x-4",
    "fade-right": "opacity-0 translate-x-4",
    "zoom-in": "opacity-0 scale-50",
  };

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? "opacity-100 translate-y-0 scale-100" : (animations[animation] ?? "")} 
        transition-all duration-1000 ease-out`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
