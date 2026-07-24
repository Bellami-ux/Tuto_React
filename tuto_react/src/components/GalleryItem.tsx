import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import type { GalleryImage } from '../data/gallery';

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
  onOpen: (image: GalleryImage) => void;
}

const GalleryItem = ({ image, index, onOpen }: GalleryItemProps) => {
  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onOpen(image)}
      className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#2D2D2D]/0 group-hover:bg-[#2D2D2D]/50 transition-colors duration-300 flex items-center justify-center">
        <Expand
          size={28}
          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </motion.button>
  );
};

export default GalleryItem;
