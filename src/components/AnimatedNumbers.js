import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useRef, useEffect } from "react";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });

  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    motionValue.set(value);
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{value}</span>;
};

export default AnimatedNumbers;
