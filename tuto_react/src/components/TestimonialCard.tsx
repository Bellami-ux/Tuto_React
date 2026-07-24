import { Quote, Star } from 'lucide-react';
import type { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg h-full flex flex-col">
      <Quote className="text-[#C9A96E] mb-4" size={32} fill="currentColor" strokeWidth={0} />

      <p className="text-[#2D2D2D]/80 leading-relaxed flex-1 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-1 mt-6 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < testimonial.rating ? 'text-[#C9A96E]' : 'text-[#2D2D2D]/15'}
            fill="currentColor"
            strokeWidth={0}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-[#2D2D2D]">{testimonial.name}</p>
          <p className="text-xs text-[#2D2D2D]/60">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
