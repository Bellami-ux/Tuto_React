import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { galleryImages, type GalleryCategory, type GalleryImage } from '../data/gallery';
import GalleryItem from './GalleryItem';
import SectionTitle from './SectionTitle';

const CATEGORIES: Array<GalleryCategory | 'Tout'> = [
  'Tout',
  'Mariages',
  'Anniversaires',
  'Corporate',
  'Décoration',
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'Tout'>('Tout');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === 'Tout'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Portfolio"
          title="Notre galerie de réalisations"
          description="Un aperçu de nos plus belles créations, où chaque détail a été pensé pour créer un moment inoubliable."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-[#2D2D2D] text-[#F5F0E8]'
                  : 'bg-white text-[#2D2D2D]/70 hover:bg-[#2D2D2D]/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <GalleryItem key={image.id} image={image} index={index} onOpen={setSelectedImage} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-[#2D2D2D]/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.button
              type="button"
              aria-label="Fermer"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <X size={28} />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
