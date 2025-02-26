import React, { useEffect, useRef } from "react";
import "../FirstEffect/style.css";

const FirstEffect: React.FC = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    function animateCircle() {
      circle.style.transform = "scale(10)";
      setTimeout(() => {
        circle.style.transition = "none";
        circle.style.transform = "scale(1)";
        setTimeout(() => {
          circle.style.transition = "transform 1.5s ease-in-out";
          animateCircle();
        }, 100);
      }, 1500);
    }
    animateCircle();
  }, []);

  return <div ref={circleRef} className="circle"></div>;
};

export default FirstEffect;
