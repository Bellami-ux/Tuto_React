import { Sparkles } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { CONTACT_INFO, NAV_LINKS, SITE_NAME, SOCIAL_LINKS } from '../utils/constants';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2D2D] text-[#F5F0E8] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-semibold text-xl mb-4">
            <Sparkles size={20} className="text-[#C9A96E]" />
            <span>{SITE_NAME}</span>
          </div>
          <p className="text-sm text-[#F5F0E8]/60 leading-relaxed">
            Une créativité qui mérite une vitrine à la hauteur. Nous concevons des événements
            élégants et sur-mesure à Dakar et partout au Sénégal.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#C9A96E] text-sm uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[#F5F0E8]/60 hover:text-[#C9A96E] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#C9A96E] text-sm uppercase tracking-widest">
            Contact
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-[#F5F0E8]/60">
            <li>{CONTACT_INFO.phone}</li>
            <li>{CONTACT_INFO.email}</li>
            <li>{CONTACT_INFO.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#C9A96E] text-sm uppercase tracking-widest">
            Suivez-nous
          </h4>
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#C9A96E] hover:text-[#2D2D2D] transition-colors"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#C9A96E] hover:text-[#2D2D2D] transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#C9A96E] hover:text-[#2D2D2D] transition-colors"
            >
              <FaTiktok size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 text-center text-xs text-[#F5F0E8]/50">
        © {year} {SITE_NAME}. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
