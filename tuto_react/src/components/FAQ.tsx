import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from './SectionTitle';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Combien de temps à l’avance faut-il réserver Barbachoo Events ?',
    answer:
      'Nous recommandons de nous contacter 3 à 6 mois avant votre événement pour garantir la disponibilité et le temps nécessaire à une préparation soignée. Pour les mariages en haute saison, un délai de 8 à 12 mois est préférable.',
  },
  {
    question: 'Proposez-vous des forfaits sur-mesure ?',
    answer:
      'Oui, chaque prestation est personnalisée selon vos besoins et votre budget. Après notre premier échange, nous vous proposons un devis détaillé adapté à votre projet.',
  },
  {
    question: 'Intervenez-vous en dehors de Dakar ?',
    answer:
      'Absolument. Notre équipe se déplace partout au Sénégal et peut organiser des événements à l’international sur demande, avec des frais de déplacement ajustés.',
  },
  {
    question: 'Puis-je louer du mobilier sans passer par une organisation complète ?',
    answer:
      'Oui, notre service de location de mobilier est disponible indépendamment de nos prestations d’organisation d’événements.',
  },
  {
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer:
      'Nous acceptons les virements bancaires, Wave, Orange Money ainsi que les paiements en espèces. Un acompte est demandé à la signature du contrat.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Questions fréquentes"
          title="Vous avez des questions ?"
          description="Retrouvez les réponses aux questions les plus posées par nos clients."
        />

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#2D2D2D]/5"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-[#2D2D2D]">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#C9A96E]/10 text-[#C9A96E]"
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-[#2D2D2D]/70">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
