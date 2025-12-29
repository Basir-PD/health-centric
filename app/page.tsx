import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Awards from './components/Awards';
import HowItWorks from './components/HowItWorks';
import ValueProposition from './components/ValueProposition';
import TrustSection from './components/TrustSection';
import MedicalTeam from './components/MedicalTeam';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Awards />
        <HowItWorks />
        <ValueProposition />
        <TrustSection />
        <MedicalTeam />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
