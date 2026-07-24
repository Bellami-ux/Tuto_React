import { services } from '../data/services';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nos services"
          title="Des prestations sur-mesure"
          description="De la conception à la réalisation, nous couvrons chaque aspect de votre événement pour une expérience fluide et raffinée."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
