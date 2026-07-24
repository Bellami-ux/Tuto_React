import { motion } from 'framer-motion';
import type { ReactNode, MouseEventHandler } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit';
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#C9A96E] text-[#2D2D2D] hover:bg-[#dbbd85] shadow-lg shadow-[#C9A96E]/30',
  secondary: 'bg-[#2D2D2D] text-[#F5F0E8] hover:bg-[#3d3d3d] shadow-lg shadow-black/20',
  outline:
    'bg-transparent border-2 border-[#F5F0E8] text-[#F5F0E8] hover:bg-[#F5F0E8] hover:text-[#2D2D2D]',
};

/**
 * Shared CTA button with a subtle scale/hover animation.
 * Renders as an <a> when `href` is provided, otherwise as a <button>.
 */
const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) => {
  const baseClasses = `inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm md:text-base tracking-wide transition-colors duration-300 cursor-pointer ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.96 },
    transition: { type: 'spring', stiffness: 400, damping: 17 } as const,
  };

  if (href) {
    return (
      <motion.a href={href} className={baseClasses} onClick={onClick} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={baseClasses} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
};

export default Button;
