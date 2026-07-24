import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseScrollRevealReturn<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
}

/**
 * Observes an element and reports when it enters the viewport,
 * used to trigger Framer Motion reveal animations on scroll.
 */
export const useScrollReveal = <T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
): UseScrollRevealReturn<T> => {
  const { threshold = 0.15, rootMargin = '0px 0px -80px 0px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(node);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};
