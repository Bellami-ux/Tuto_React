import { useCounter } from '../hooks/useCounter';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

/**
 * Animated numeric counter that starts counting up once it scrolls
 * into view. Used in the About section stats row.
 */
const Counter = ({ end, suffix = '', label, duration = 2000 }: CounterProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const count = useCounter(end, duration, isVisible);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="text-3xl md:text-5xl font-bold text-[#C9A96E]">
        {count}
        {suffix}
      </span>
      <span className="mt-2 text-xs md:text-sm uppercase tracking-widest text-[#2D2D2D]/70">
        {label}
      </span>
    </div>
  );
};

export default Counter;
