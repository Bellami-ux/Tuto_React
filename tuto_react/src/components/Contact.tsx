import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { CONTACT_INFO } from '../utils/constants';
import Button from './Button';
import SectionTitle from './SectionTitle';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

const INITIAL_FORM: ContactForm = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof ContactForm) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Parlons de votre projet"
          description="Racontez-nous votre vision, nous vous répondrons sous 24h avec une proposition sur-mesure."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A96E]/10 text-[#C9A96E] flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#2D2D2D]">Téléphone</p>
                <p className="text-sm text-[#2D2D2D]/65">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A96E]/10 text-[#C9A96E] flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#2D2D2D]">Email</p>
                <p className="text-sm text-[#2D2D2D]/65">{CONTACT_INFO.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A96E]/10 text-[#C9A96E] flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#2D2D2D]">Adresse</p>
                <p className="text-sm text-[#2D2D2D]/65">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-[#F5F0E8] rounded-2xl p-6 md:p-10 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                type="text"
                placeholder="Nom complet"
                value={form.name}
                onChange={handleChange('name')}
                className="w-full px-4 py-3 rounded-lg bg-white border border-transparent focus:border-[#C9A96E] outline-none transition-colors text-sm"
              />
              <input
                required
                type="email"
                placeholder="Adresse email"
                value={form.email}
                onChange={handleChange('email')}
                className="w-full px-4 py-3 rounded-lg bg-white border border-transparent focus:border-[#C9A96E] outline-none transition-colors text-sm"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Téléphone"
                value={form.phone}
                onChange={handleChange('phone')}
                className="w-full px-4 py-3 rounded-lg bg-white border border-transparent focus:border-[#C9A96E] outline-none transition-colors text-sm"
              />
              <input
                type="text"
                placeholder="Type d'événement"
                value={form.eventType}
                onChange={handleChange('eventType')}
                className="w-full px-4 py-3 rounded-lg bg-white border border-transparent focus:border-[#C9A96E] outline-none transition-colors text-sm"
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder="Parlez-nous de votre projet..."
              value={form.message}
              onChange={handleChange('message')}
              className="w-full px-4 py-3 rounded-lg bg-white border border-transparent focus:border-[#C9A96E] outline-none transition-colors resize-none text-sm"
            />

            <Button type="submit" variant="primary" className="self-start">
              Envoyer le message
              <Send size={16} />
            </Button>

            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-[#2D2D2D]/70"
              >
                Merci ! Votre message a bien été envoyé, nous revenons vers vous rapidement.
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
