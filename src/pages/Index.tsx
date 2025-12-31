import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Languages from "@/components/portfolio/Languages";
import Certifications from "@/components/portfolio/Certifications";
import Services from "@/components/portfolio/Services";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Languages />
      <Certifications />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
