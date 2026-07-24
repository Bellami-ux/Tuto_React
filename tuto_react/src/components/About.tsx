import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Counter from './Counter';
import SectionTitle from './SectionTitle';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80';

const STATS = [
  { end: 8, suffix: '+', label: "Années d'expérience" },
  { end: 250, suffix: '+', label: 'Événements réalisés' },
  { end: 98, suffix: '%', label: 'Clients satisfaits' },
  { end: 15, suffix: '', label: 'Membres dans l’équipe' },
];

const About = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -40 }}
          animate={imageVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src={ABOUT_IMAGE}
              alt="L'équipe Barbachoo Events en pleine préparation d'un événement"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#C9A96E] text-[#2D2D2D] rounded-2xl px-6 py-5 shadow-xl hidden sm:block">
            <p className="text-3xl font-bold">8+</p>
            <p className="text-xs uppercase tracking-widest">ans d'expertise</p>
          </div>
        </motion.div>

        <div>
          <SectionTitle
            align="left"
            eyebrow="Qui sommes-nous"
            title="L'art de sublimer chaque instant."
            description="Barbachoo Events est une agence événementielle basée à Dakar, dédiée à la création d'expériences uniques. Depuis notre création, nous accompagnons nos clients dans la conception et la réalisation de mariages, célébrations et événements corporate empreints d'élégance et d'authenticité. Notre équipe de créatifs passionnés met tout son savoir-faire au service de votre vision, en portant une attention particulière à chaque détail — de la décoration à la coordination le jour J."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <Counter key={stat.label} end={stat.end} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
