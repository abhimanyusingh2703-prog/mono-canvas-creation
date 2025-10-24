const Skills = () => {
  const skills = [
    "3D Modeling",
    "Adobe Creative Suite",
    "Photography",
    "Videography",
    "Brand Identity Creation",
    "UI/UX Design",
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-widest mb-2 text-muted-foreground">EXPERTISE</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold">
                Skills
              </h2>
            </div>
          </div>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="group border-b border-border pb-6 transition-all duration-300 hover:border-foreground"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl md:text-3xl font-medium">
                    {skill}
                  </h3>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    0{index + 1}
                  </span>
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
