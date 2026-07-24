import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

/**
 * Consistent section heading: small gold eyebrow, bold title, optional
 * description, all revealed with a fade-up animation on scroll.
 */
const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div ref={ref} className={`flex flex-col max-w-2xl mb-14 md:mb-20 ${alignment}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold text-[#C9A96E] mb-3"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight ${
          light ? 'text-[#F5F0E8]' : 'text-[#2D2D2D]'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-[#F5F0E8]/80' : 'text-[#2D2D2D]/70'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
