export type GalleryCategory = 'Mariages' | 'Anniversaires' | 'Corporate' | 'Décoration';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'gallery-01',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    alt: 'Réception de mariage élégante en extérieur',
    category: 'Mariages',
  },
  {
    id: 'gallery-02',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    alt: 'Table de mariage décorée avec des fleurs dorées',
    category: 'Décoration',
  },
  {
    id: 'gallery-03',
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bouquet de mariée raffiné',
    category: 'Mariages',
  },
  {
    id: 'gallery-04',
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Salle de réception avec éclairage doré',
    category: 'Décoration',
  },
  {
    id: 'gallery-05',
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fête d’anniversaire décorée avec soin',
    category: 'Anniversaires',
  },
  {
    id: 'gallery-06',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gâteau d’anniversaire raffiné',
    category: 'Anniversaires',
  },
  {
    id: 'gallery-07',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    alt: 'Séminaire d’entreprise organisé avec élégance',
    category: 'Corporate',
  },
  {
    id: 'gallery-08',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    alt: 'Soirée corporate avec éclairage sur-mesure',
    category: 'Corporate',
  },
  {
    id: 'gallery-09',
    src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Arche florale pour cérémonie de mariage',
    category: 'Décoration',
  },
];
