import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from './Button';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80';

/**
 * Fullscreen hero with dark overlay, animated headline, two CTAs
 * and an animated scroll indicator.
 */
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] w-full flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D2D2D]/70 via-[#2D2D2D]/60 to-[#2D2D2D]/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-xs md:text-sm font-semibold text-[#C9A96E] mb-6"
        >
          Barbachoo Events
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#F5F0E8] leading-tight md:leading-tight"
        >
          Une créativité qui mérite une vitrine à la hauteur.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base md:text-lg text-[#F5F0E8]/80 max-w-2xl"
        >
          Mariages, anniversaires, événements corporate : nous concevons des expériences
          élégantes et sur-mesure, pensées dans les moindres détails.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="#gallery" variant="primary">
            Découvrir nos réalisations
          </Button>
          <Button href="#contact" variant="outline">
            Demander un devis
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#F5F0E8]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
};

export default Hero;
