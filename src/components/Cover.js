import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Cover = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && window.VANTA && window.THREE) {
      vantaEffect.current = window.VANTA.DOTS({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        backgroundColor: 0x0f172a,
        size: 5.0,
        spacing: 100.0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <motion.div
    ref={vantaRef}
    className="relative w-full h-32 sm:h-52 md:h-64 lg:h-72"
    />
  );
};

export default Cover;
