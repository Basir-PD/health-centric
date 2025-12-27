import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Personas from './components/Personas';
import RiskDetection from './components/RiskDetection';
import Statistics from './components/Statistics';
import FeatureBento from './components/FeatureBento';
import Workflow from './components/Workflow';
import Comparison from './components/Comparison';
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
        <ValueProposition />
        <Personas />
        <RiskDetection />
        <Statistics />
        <FeatureBento />
        <Workflow />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
