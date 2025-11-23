// src/components/2_molecules/AnimatedCounter.jsx

'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * A component that animates a number counting up when it becomes visible.
 * @param {number} to - The final number to count up to.
 * @param {boolean} isCurrency - If true, formats the number as currency.
 * @param {boolean} isPercentage - If true, appends a '%' sign.
 */
export default function AnimatedCounter({ to, isCurrency = false, isPercentage = false }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [motionValue, isInView, to]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        let displayValue = Math.round(latest).toLocaleString();
        if (isCurrency) {
          // Simple currency formatting, can be enhanced
          displayValue = `$${displayValue}`;
        }
        if (isPercentage) {
          displayValue = `${displayValue}%`;
        }
        ref.current.textContent = displayValue;
      }
    });
    return unsubscribe;
  }, [springValue, isCurrency, isPercentage]);

  // The initial value is set here before animation starts
  const initialDisplay = isCurrency ? `$0` : `0${isPercentage ? '%' : ''}`;

  return <span ref={ref}>{initialDisplay}</span>;
}