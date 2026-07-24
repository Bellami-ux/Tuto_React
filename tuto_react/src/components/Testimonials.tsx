import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testimonials } from '../data/testimonials';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';

const AUTOPLAY_DELAY = 6000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (nextIndex: number, dir: number) => {
    setDirection(dir);
    setIndex((nextIndex + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#2D2D2D] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionTitle
          light
          eyebrow="Témoignages"
          title="Ils nous ont fait confiance"
          description="La satisfaction de nos clients est notre plus belle récompense."
        />

        <div className="relative">
          <div className="relative h-[420px] sm:h-[360px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={testimonials[index].id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <TestimonialCard testimonial={testimonials[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
              aria-label="Témoignage précédent"
              onClick={() => goTo(index - 1, -1)}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#F5F0E8]/20 text-[#F5F0E8] hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-[#2D2D2D] transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.id}
                  type="button"
                  aria-label={`Aller au témoignage ${dotIndex + 1}`}
                  onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    dotIndex === index ? 'w-6 bg-[#C9A96E]' : 'w-2 bg-[#F5F0E8]/30'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Témoignage suivant"
              onClick={() => goTo(index + 1, 1)}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#F5F0E8]/20 text-[#F5F0E8] hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-[#2D2D2D] transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
