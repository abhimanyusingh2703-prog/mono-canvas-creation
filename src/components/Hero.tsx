const Hero = () => {
  const skills = [{
    name: "3D Modeling",
    category: "Design"
  }, {
    name: "Adobe Creative Suite",
    category: "Software"
  }, {
    name: "Photography",
    category: "Visual"
  }, {
    name: "Videography",
    category: "Visual"
  }, {
    name: "Brand Identity Creation",
    category: "Strategy"
  }, {
    name: "UI/UX Design",
    category: "Digital"
  }];
  
  return (
    <>
      <section className="min-h-screen px-6 md:px-12 lg:px-24 py-24 md:py-32 relative overflow-hidden noise">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="animate-fade-in mb-20 md:mb-32">
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
                  Portfolio 2025
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] mb-8">
                  ABHIMANYU PANNU
                </h1>
                <div className="flex items-center gap-6">
                  <div className="h-px w-16 bg-foreground" />
                  <div className="h-20 w-px bg-border" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column - Title */}
            <div className="lg:col-span-1">
              <p className="text-2xl md:text-3xl font-light tracking-wide leading-tight sticky top-32">
                Student Creative
                <br />
                Designer
              </p>
            </div>
            
            {/* Right Column - Description & Info */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-8">
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                  A passionate creative designer specializing in UI/UX design, brand identity, 
                  and 3D modeling. Dedicated to crafting meaningful digital experiences through 
                  minimalist aesthetics and innovative visual storytelling. Proficient in Adobe 
                  Creative Suite, 3D modeling tools, and contemporary design methodologies.
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
          </div>
        </div>
        
        <div className="absolute bottom-12 right-6 md:right-12 lg:right-24 text-xs tracking-widest text-muted-foreground uppercase rotate-90 origin-right">
          Scroll
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Skills Header */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                  Skills &<br />Toolkit
                </h2>
                <p className="text-muted-foreground mb-8">
                  A comprehensive set of creative and technical capabilities
                </p>
                
                <div className="flex gap-8">
                  <div>
                    <p className="text-3xl font-bold font-display">6+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Skills</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-display">1+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Years</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Grid */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group p-6 border border-border/50 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-medium mb-2 group-hover:text-foreground transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{skill.category}</p>
                      </div>
                      <div className="h-px w-8 bg-border group-hover:w-12 group-hover:bg-foreground transition-all duration-300 mt-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
