import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
