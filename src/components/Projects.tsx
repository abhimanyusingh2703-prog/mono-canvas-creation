import { Box, Layers, GraduationCap, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MAKEBOX",
      subtitle: "UX/UI and Product Design",
      image: "https://res.cloudinary.com/ddxt2bv5k/image/upload/v1763052022/Screenshot_2025-11-13_220257_jw4xvd.png",
      link: "https://www.behance.net/gallery/235479989/MAKEBOX-UXUI-and-Product-design",
      icon: Box
    },
    {
      title: "INsync",
      subtitle: "Branding Project",
      image: "https://res.cloudinary.com/ddxt2bv5k/image/upload/v1763052022/Screenshot_2025-11-13_220325_xkofca.png",
      link: "https://www.behance.net/gallery/216297297/INsync-branding-project",
      icon: Layers
    },
    {
      title: "InvestEd",
      subtitle: "Branding Guidelines",
      image: "https://res.cloudinary.com/ddxt2bv5k/image/upload/v1763052023/Screenshot_2025-11-13_220436_bcvq9j.png",
      link: "https://www.behance.net/gallery/225403045/InvestEd-branding-guidelines",
      icon: GraduationCap
    },
    {
      title: "AFTERTHOUGHT",
      subtitle: "Brand Identity",
      image: "https://res.cloudinary.com/ddxt2bv5k/image/upload/v1763052023/Screenshot_2025-11-13_220615_ezyk3l.png",
      link: "https://www.behance.net/gallery/175004669/AFTERTHOUGHT-Brand-Identity",
      icon: Sparkles
    }
  ];

  return (
    <section id="work" className="min-h-screen px-6 md:px-12 lg:px-24 py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-6 mb-4">
              <div className="h-px w-12 bg-foreground" />
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Selected Work</p>
            </div>
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Projects
            </h2>
          </div>
          
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs">
            A curated selection of design work spanning branding, 
            UI/UX, and visual identity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="space-y-6">
                  <div className="aspect-[4/3] bg-muted overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-all duration-300" />
                    
                    <div className="absolute top-6 right-6 w-16 h-16 bg-background border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs tracking-widest text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <span className="text-xs tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW →
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
