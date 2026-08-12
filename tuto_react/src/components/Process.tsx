import { motion } from 'framer-motion';
import { CalendarCheck, MessageCircle, PartyPopper, Palette, ClipboardList } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from './SectionTitle';

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Consultation',
    description: 'Un premier échange pour comprendre votre vision, vos envies et votre budget.',
  },
  {
    icon: Palette,
    title: 'Conception',
    description: 'Création d’un concept sur-mesure : ambiance, décor, moodboard personnalisé.',
  },
  {
    icon: ClipboardList,
    title: 'Planification',
    description: 'Coordination des prestataires, logistique et rétroplanning détaillé.',
  },
  {
    icon: CalendarCheck,
    title: 'Réalisation',
    description: 'Installation, mise en place et derniers réglages avant votre grand jour.',
  },
  {
    icon: PartyPopper,
    title: 'Jour J',
    description: 'Nous orchestrons chaque instant pour que vous puissiez profiter pleinement.',
  },
];

const ProcessStep = ({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center flex-1"
    >
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A96E] text-[#2D2D2D] shadow-lg z-10">
        <Icon size={26} strokeWidth={1.75} />
      </div>
      <span className="absolute -top-3 -right-1 sm:right-4 md:right-8 text-5xl font-bold text-[#2D2D2D]/5 select-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-5 font-semibold text-[#2D2D2D]">{step.title}</h3>
      <p className="mt-2 text-sm text-[#2D2D2D]/65 max-w-[220px]">{step.description}</p>
    </motion.div>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Notre processus"
          title="Comment nous travaillons"
          description="Une méthode éprouvée en 5 étapes pour transformer votre vision en un événement mémorable."
        />

        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-4 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[#2D2D2D]/10" />
          {STEPS.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
