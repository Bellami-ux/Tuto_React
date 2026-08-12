import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
};

export default App;
