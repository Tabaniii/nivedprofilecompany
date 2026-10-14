"use client";

import { useEffect, useRef, useState, createContext, useContext } from "react";

const StaggerContext = createContext({
  isInView: false,
  stagger: 0.08,
  delayChildren: 0.1,
});

export function ScrollSlideUp({
  children,
  className = "",
  duration = 0.85,
  distance = 38,
  amount = 0.25,
  delay = 0,
  ...props
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: amount }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [amount]);

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : `translateY(${distance}px)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function StaggerGroup({
  as: Component = "div",
  children,
  className = "",
  stagger = 0.08,
  delayChildren = 0.1,
  amount = 0.3,
  ...props
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: amount }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [amount]);

  return (
    <StaggerContext.Provider value={{ isInView, stagger, delayChildren }}>
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    </StaggerContext.Provider>
  );
}

let itemCounter = 0;

export function StaggerItem({
  as: Component = "div",
  children,
  className = "",
  index = 0,
  ...props
}) {
  const { isInView, stagger, delayChildren } = useContext(StaggerContext);

  // If index wasn't explicitly passed, extract from key or fallback
  const calculatedDelay = delayChildren + index * stagger;

  return (
    <Component
      className={`transition-all ${className}`}
      style={{
        transitionDuration: "0.6s",
        transitionDelay: `${calculatedDelay}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(18px)",
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
