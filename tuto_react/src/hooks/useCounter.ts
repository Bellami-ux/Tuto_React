import { useEffect, useRef, useState } from 'react';

/**
 * Animates a numeric value from 0 to `end` over `duration` ms,
 * starting only once `start` becomes true (e.g. when in viewport).
 */
export const useCounter = (end: number, duration = 2000, start = false): number => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, start]);

  return count;
};
