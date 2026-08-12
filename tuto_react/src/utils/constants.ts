// Global site constants for Barbachoo Events

export const SITE_NAME = 'Barbachoo Events';

export const WHATSAPP_NUMBER = '221771234567';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const CONTACT_INFO = {
  phone: '+221 77 123 45 67',
  email: 'contact@barbachoo-events.com',
  address: 'Almadies, Dakar, Sénégal',
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/barbachoo.events',
  facebook: 'https://facebook.com/barbachoo.events',
  tiktok: 'https://tiktok.com/@barbachoo.events',
};

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Témoignages', href: '#testimonials' },
  { label: 'Processus', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const COLORS = {
  gold: '#C9A96E',
  charcoal: '#2D2D2D',
  ivory: '#F5F0E8',
  white: '#FFFFFF',
} as const;
