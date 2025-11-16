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
  return <section className="min-h-screen px-6 md:px-12 lg:px-24 py-20 md:py-32 relative overflow-hidden noise">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-16 md:space-y-24 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-xs tracking-[0.3em] mb-4 text-muted-foreground uppercase">
                Portfolio 2024
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
                ABHIMANYU PANNU
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
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mx-0 py-0">
                A passionate creative designer specializing in UI/UX design, brand identity, 
                and 3D modeling. Dedicated to crafting meaningful digital experiences through 
                minimalist aesthetics and innovative visual storytelling. Proficient in Adobe 
                Creative Suite, 3D modeling tools, and contemporary design methodologies.
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

          {/* Skills Section */}
          <div className="border-t border-border pt-16 md:pt-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-8 bg-foreground" />
                    <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Expertise</p>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    Skills &<br />Toolkit
                  </h2>
                </div>
                
                <div className="flex gap-8 pt-4">
                  <div>
                    <p className="text-2xl md:text-3xl font-display font-bold">6+</p>
                    <p className="text-xs text-muted-foreground tracking-wider mt-1">SKILLS</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-display font-bold">1+</p>
                    <p className="text-xs text-muted-foreground tracking-wider mt-1">YEARS</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => <div key={skill.name} className="group border border-border hover:border-foreground transition-all duration-300 p-6 hover:bg-secondary/20">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs tracking-widest text-muted-foreground uppercase">
                          {skill.category}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-medium group-hover:text-foreground transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </div>)}
              </div>
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