export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-01',
    name: 'Aïssatou Diop',
    role: 'Mariée, Mariage Diop & Fall',
    quote:
      "Barbachoo Events a transformé notre mariage en un rêve éveillé. Chaque détail était parfait, l'équipe a su capter exactement ce que nous voulions.",
    avatar: '/images/profile-pictures/user1.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-02',
    name: 'Moussa Ndiaye',
    role: 'Directeur Général, TechSN',
    quote:
      'Une organisation impeccable pour notre séminaire annuel. Professionnalisme, créativité et ponctualité au rendez-vous.',
    avatar: '/images/profile-pictures/user2.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-03',
    name: 'Fatou Sarr',
    role: 'Maman comblée',
    quote:
      "Le baptême de ma fille était magnifique grâce à leur créativité. Je recommande Barbachoo Events les yeux fermés.",
    avatar: '/images/profile-pictures/user3.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-04',
    name: 'Ibrahima Ba',
    role: 'Marié, Mariage Ba & Sy',
    quote:
      "Une équipe à l'écoute qui a su respecter notre budget tout en surpassant nos attentes. Merci pour cette journée inoubliable.",
    avatar: '/images/profile-pictures/user4.jpg',
    rating: 4,
  },
  {
    id: 'testimonial-05',
    name: 'Khady Faye',
    role: 'Responsable Événementiel, Groupe Teranga',
    quote:
      'Barbachoo Events est notre partenaire privilégié pour tous nos événements corporate depuis 3 ans. Toujours à la hauteur.',
    avatar: '/images/profile-pictures/user5.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-06',
    name: 'Cheikh Gueye',
    role: 'Père comblé',
    quote:
      "L'anniversaire de mes 50 ans restera gravé dans ma mémoire. Une décoration somptueuse et une organisation sans faille.",
    avatar: '/images/profile-pictures/user6.jpg',
    rating: 5,
  },
];
