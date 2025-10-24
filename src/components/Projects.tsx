const Projects = () => {
  const projects = [
    {
      title: "MAKEBOX",
      subtitle: "UX/UI and Product Design",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/e4af90235479989.68e2f0d725df5.jpg",
      link: "https://www.behance.net/gallery/235479989/MAKEBOX-UXUI-and-Product-design",
      featured: true
    },
    {
      title: "INsync",
      subtitle: "Branding Project",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/e9d0c8216297297.Y3JvcCw3MjEyLDU2NDEsMCwzMzIw.png",
      link: "https://www.behance.net/gallery/216297297/INsync-branding-project"
    },
    {
      title: "InvestEd",
      subtitle: "Branding Guidelines",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/710018225403045.Y3JvcCw4NzUsNjg0LDEwNiww.jpg",
      link: "https://www.behance.net/gallery/225403045/InvestEd-branding-guidelines"
    },
    {
      title: "AFTERTHOUGHT",
      subtitle: "Brand Identity",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/bc5a99175004669.Y3JvcCwxMTkyLDkzMywxMjQsMA.jpg",
      link: "https://www.behance.net/gallery/175004669/AFTERTHOUGHT-Brand-Identity"
    },
    {
      title: "FLORA",
      subtitle: "Typography",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/024bf4183814961.65e488b58c5b5.jpg",
      link: "https://www.behance.net/gallery/183814961/FLORA-typography"
    },
    {
      title: "DIGITAL NARRATIVE",
      subtitle: "Visual Design",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/a0e3cd225413459.Y3JvcCw2ODEsNTMyLDIwMywyNTg5.jpg",
      link: "https://www.behance.net/gallery/225413459/DIGITAL-NARRATIVE"
    }
  ];

  return (
    <section id="work" className="min-h-screen px-6 md:px-12 lg:px-24 py-32 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex items-end justify-between">
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
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block ${project.featured ? 'md:pr-0' : index % 2 === 0 ? 'md:pr-24' : 'md:pl-24'}`}
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className={`md:col-span-8 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} ${project.featured ? 'md:col-span-9' : ''}`}>
                  <div className="aspect-[16/10] bg-muted overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 border border-foreground opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className={`md:col-span-4 space-y-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} ${project.featured ? 'md:col-span-3' : ''}`}>
                  <div className="space-y-2">
                    <p className="text-xs tracking-widest text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl font-bold group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground tracking-wide leading-relaxed">
                    {project.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs tracking-widest uppercase">View Project</span>
                    <span className="text-sm">→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
