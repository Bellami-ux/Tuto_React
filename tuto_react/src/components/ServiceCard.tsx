import { motion } from 'framer-motion';
import { Briefcase, Cake, Camera, Heart, Sofa, Sparkles, type LucideIcon } from 'lucide-react';
import type { Service } from '../data/services';

const ICONS: Record<Service['icon'], LucideIcon> = {
  heart: Heart,
  sparkles: Sparkles,
  sofa: Sofa,
  cake: Cake,
  briefcase: Briefcase,
  camera: Camera,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = ICONS[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-[#2D2D2D]/5"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#C9A96E]/10 text-[#C9A96E] mb-6 group-hover:bg-[#C9A96E] group-hover:text-white transition-colors duration-300">
        <Icon size={26} strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-semibold text-[#2D2D2D] mb-3">{service.title}</h3>
      <p className="text-sm leading-relaxed text-[#2D2D2D]/65">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
