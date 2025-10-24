const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              ABHIMANYU
              <br />
              PANNU
            </h1>
            <div className="h-px w-32 bg-foreground" />
          </div>
          
          <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl">
            Student Creative Designer
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
            Specializing in UI/UX design, brand identity, and visual storytelling 
            through a minimalist lens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
