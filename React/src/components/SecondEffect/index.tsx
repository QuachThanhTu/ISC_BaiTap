import React, { useEffect, useRef } from "react";
import "../SecondEffect/style.css";

const SecondEffect: React.FC = () => {
  const shapeRef = useRef<HTMLDivElement | null>(null);
  let animationFrame: number;

  useEffect(() => {
    const shape = shapeRef.current;
    if (!shape) return;

    let percentage = 0;
    let speed = 0.3;
    let colorIndex = 0;

    const gradients = [
      "linear-gradient(0deg, white, red)",
      "linear-gradient(0deg, white, blue)",
      "linear-gradient(0deg, white, purple)",
      "linear-gradient(0deg, white, green)",
    ];

    function animate() {
      if (document.hidden) return;

      percentage += speed;
      if (percentage >= 100) {
        percentage = 0;
        colorIndex = (colorIndex + 1) % gradients.length;
        requestAnimationFrame(() => {
          shape.style.background = gradients[colorIndex];
        });
      }

      shape.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${percentage}%, 0% ${percentage}%)`;
      animationFrame = requestAnimationFrame(animate);
    }

    function handleVisibilityChange() {
      if (!document.hidden) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrame);
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <div ref={shapeRef} className="Spiral"></div>;
};

export default SecondEffect;
