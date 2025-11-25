import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
const Index = () => {
  return <main className="bg-background">
      <Navigation />
      <Hero className="mx-0" />
      <Projects />
      <Skills />
      <Contact />
    </main>;
};
export default Index;