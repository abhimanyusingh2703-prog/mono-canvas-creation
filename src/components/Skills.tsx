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
    <div className="space-y-10 md:space-y-2 animate-fade-in p-20">
      <div className="absolute inset-0 bg-secondary/30" />
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
  );
};

export default Skills;
