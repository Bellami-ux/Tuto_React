// Icon keys map to lucide-react components inside ServiceCard.tsx
export type ServiceIconKey =
  | 'heart'
  | 'sparkles'
  | 'sofa'
  | 'cake'
  | 'briefcase'
  | 'camera';

export interface Service {
  id: string;
  icon: ServiceIconKey;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'wedding-decor',
    icon: 'heart',
    title: 'Décoration de mariage',
    description:
      "Des décors sur-mesure, raffinés et uniques qui subliment votre union et racontent votre histoire d'amour.",
  },
  {
    id: 'event-planning',
    icon: 'sparkles',
    title: 'Organisation d’événements',
    description:
      'De la conception à la coordination le jour J, nous orchestrons chaque détail pour un événement sans fausse note.',
  },
  {
    id: 'furniture-rental',
    icon: 'sofa',
    title: 'Location de mobilier',
    description:
      'Un large choix de mobilier haut de gamme — tables, chaises, salons lounge — pour habiller votre espace avec élégance.',
  },
  {
    id: 'birthdays-baptisms',
    icon: 'cake',
    title: 'Anniversaires & Baptêmes',
    description:
      'Des célébrations pensées dans les moindres détails pour marquer ces moments précieux en famille.',
  },
  {
    id: 'corporate-events',
    icon: 'briefcase',
    title: 'Événements corporate',
    description:
      'Séminaires, lancements de produits et soirées d’entreprise : une image professionnelle et mémorable.',
  },
  {
    id: 'photo-video',
    icon: 'camera',
    title: 'Photo & Vidéo',
    description:
      'Une équipe créative pour immortaliser chaque instant et sublimer vos souvenirs avec un rendu cinématographique.',
  },
];
