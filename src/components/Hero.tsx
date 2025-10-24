const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden noise">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="space-y-12 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-xs tracking-[0.3em] mb-4 text-muted-foreground uppercase">
                Portfolio 2024
              </p>
              <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85]">
                ABHIMANYU
              </h1>
              <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] -mt-2">
                PANNU
              </h1>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="h-px w-16 bg-foreground" />
              <div className="h-24 w-px bg-border" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <p className="text-2xl md:text-3xl font-light tracking-wide leading-tight">
                Student Creative
                <br />
                Designer
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Crafting meaningful digital experiences through UI/UX design, 
                brand identity, and visual storytelling with a minimalist approach.
              </p>
              
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Based in</p>
                  <p className="font-medium">India</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Focus</p>
                  <p className="font-medium">Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-6 md:right-12 lg:right-24 text-xs tracking-widest text-muted-foreground uppercase rotate-90 origin-right">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
