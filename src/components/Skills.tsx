const Skills = () => {
  const skills = [
    { name: "3D Modeling", category: "Design" },
    { name: "Adobe Creative Suite", category: "Software" },
    { name: "Photography", category: "Visual" },
    { name: "Videography", category: "Visual" },
    { name: "Brand Identity Creation", category: "Strategy" },
    { name: "UI/UX Design", category: "Digital" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-32 relative noise">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-6 mb-6">
                <div className="h-px w-12 bg-foreground" />
                <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Expertise</p>
              </div>
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
                Skills &<br />Toolkit
              </h2>
            </div>
            
            <div className="hidden lg:block space-y-6 pt-8">
              <p className="text-muted-foreground leading-relaxed">
                A diverse skill set combining technical proficiency 
                with creative vision across multiple disciplines.
              </p>
              
              <div className="flex gap-12 pt-4">
                <div>
                  <p className="text-3xl font-display font-bold">6+</p>
                  <p className="text-xs text-muted-foreground tracking-wider mt-1">SKILLS</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">3+</p>
                  <p className="text-xs text-muted-foreground tracking-wider mt-1">YEARS</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-1">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group border-b border-border hover:border-foreground transition-all duration-300"
              >
                <div className="flex items-center justify-between py-8 px-6 hover:px-8 transition-all duration-300">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-6">
                      <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="text-xs tracking-widest text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
