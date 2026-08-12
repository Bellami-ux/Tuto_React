import { useEffect, useState, useCallback } from 'react';

interface UseNavbarReturn {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const SCROLL_THRESHOLD = 40;

/**
 * Tracks page scroll position (for the navbar background transition)
 * and the mobile menu open/close state.
 */
export const useNavbar = (): UseNavbarReturn => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return { isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu };
};
