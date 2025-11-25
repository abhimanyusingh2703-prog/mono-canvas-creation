import heroMockup from "@/assets/hero-mockup.jpg";
const Hero = () => {
  return <section className="min-h-screen px-6 md:px-12 lg:px-24 py-16 md:py-20 relative overflow-hidden noise flex items-end">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full pb-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
                Portfolio 2025
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] mb-4">
                ABHIMANYU PANNU
              </h1>
              <p className="text-2xl md:text-3xl font-light tracking-wide leading-tight mb-8">
                Creative Designer
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="h-px w-16 bg-foreground" />
                <div className="h-20 w-px bg-border" />
              </div>
            </div>
            
            <div className="space-y-6 max-w-lg">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                A passionate creative designer specializing in UI/UX design, brand identity, 
                and 3D modeling. Dedicated to crafting meaningful digital experiences through 
                minimalist aesthetics and innovative visual storytelling.
              </p>
              
              <div className="flex gap-12 text-sm pt-4">
                <div>
                  <p className="text-muted-foreground mb-2">Based in</p>
                  <p className="font-medium text-base">India</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Focus</p>
                  <p className="font-medium text-base">Design</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Mockup Image */}
          <div className="relative lg:h-[800px] h-[500px] animate-fade-in">
            <div className="absolute inset-0 flex items-end justify-end">
              <img alt="Creative Design Mockup" className="w-full h-full object-contain object-right-bottom" src="/lovable-uploads/a73d9fa5-c689-4c0a-829d-9ccace66c91d.png" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-6 md:right-12 lg:right-24 text-xs tracking-widest text-muted-foreground uppercase rotate-90 origin-right">
        Scroll
      </div>
    </section>;
};
export default Hero;