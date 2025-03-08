'use client'
import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  const [enableCursor, setEnableCursor] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setEnableCursor(!isTouchDevice && window.innerWidth >= 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return enableCursor ? (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0}
      outerStyle={{
        border: "2px solid var(--cursor-color)",
      }}
      innerStyle={{
        backgroundColor: "var(--cursor-color)",
      }}
    />
  ) : null;
}
