"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    damping: 25,
    stiffness: 300,
  });

  const springY = useSpring(mouseY, {
    damping: 25,
    stiffness: 300,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="
        pointer-events-none
        fixed left-0 top-0 z-[9999]
        hidden h-5 w-5
        rounded-full
        bg-white
        mix-blend-difference
        md:block
      "
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}