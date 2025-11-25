import heroMockup from "@/assets/hero-mockup.jpg";
import { useEffect, useState } from "react";
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const parallaxOffset = scrollY * 0.3;
  return <section className="min-h-screen px-6 md:px-12 lg:px-24 py-20 md:py-24 relative overflow-hidden noise flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Portfolio 2025
              </p>
              
              <div className="space-y-3">
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
                  ABHIMANYU
                  <br />
                  PANNU
                </h1>
                <p className="text-xl md:text-2xl font-light tracking-wide text-muted-foreground">
                  Creative Designer
                </p>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="h-px w-20 bg-foreground" />
                
              </div>
            </div>
            
            <div className="space-y-8 max-w-lg">
              <p className="text-base leading-relaxed font-sans md:text-xl font-normal text-left text-zinc-600 px-[5px] py-0 my-0 mx-0">A multidisciplinary designer focused on UI/UX, branding, illustration, and graphic design.
I create intuitive interfaces and expressive visuals that turn ideas into meaningful experiences.
Driven by a long-term aspiration to become a creative director, I’m constantly exploring design strategy, visual storytelling, and innovative thinking to shape more impactful creative work.</p>
              
              <div className="flex gap-16 pt-2">
                <div className="space-y-1">
                  <p className="text-xs tracking-wider text-muted-foreground uppercase">Based in</p>
                  <p className="font-medium text-lg">India</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs tracking-wider text-muted-foreground uppercase">Focus</p>
                  <p className="font-medium text-lg">Design</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Mockup Image */}
          <div className="relative h-[500px] lg:h-[700px] animate-fade-in">
            <div style={{
            transform: `translateY(${parallaxOffset}px)`
          }} className="absolute inset-0 transition-transform duration-100 ease-out py-0 px-[22px] my-0 mx-0 flex items-center justify-end">
              <img alt="Creative Design Mockup showcasing UI/UX work on laptop and mobile devices" src="/lovable-uploads/a73d9fa5-c689-4c0a-829d-9ccace66c91d.png" className="w-full h-full object-center-right object-cover border-slate-50 opacity-90 shadow-2xl rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-24 text-xs tracking-[0.3em] text-muted-foreground uppercase rotate-90 origin-right mx-0">
        Scroll
      </div>
    </section>;
};
export default Hero;