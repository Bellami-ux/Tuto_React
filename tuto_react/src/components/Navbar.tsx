import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Sparkles, X } from 'lucide-react';
import { useNavbar } from '../hooks/useNavbar';
import { NAV_LINKS, SITE_NAME } from '../utils/constants';
import Button from './Button';

const Navbar = () => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavbar();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">
        <a
          href="#hero"
          className="flex items-center gap-2 font-semibold text-xl tracking-wide"
        >
          <Sparkles
            size={22}
            className="text-[#C9A96E]"
            strokeWidth={2}
          />
          <span className={isScrolled ? 'text-[#2D2D2D]' : 'text-[#F5F0E8]'}>
            {SITE_NAME}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#C9A96E] ${
                  isScrolled ? 'text-[#2D2D2D]' : 'text-[#F5F0E8]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            Demander un devis
          </Button>
        </div>

        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Ouvrir le menu"
          className={`lg:hidden p-2 rounded-full transition-colors ${
            isScrolled ? 'text-[#2D2D2D]' : 'text-[#F5F0E8]'
          }`}
        >
          <Menu size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#F5F0E8] z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#2D2D2D]/10">
                <span className="font-semibold text-lg text-[#2D2D2D]">{SITE_NAME}</span>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Fermer le menu"
                  className="p-2 text-[#2D2D2D]"
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="flex flex-col gap-1 px-6 py-8">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block py-3 text-lg font-medium text-[#2D2D2D] hover:text-[#C9A96E] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto px-6 pb-10">
                <Button href="#contact" variant="primary" onClick={closeMobileMenu} className="w-full">
                  Demander un devis
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
