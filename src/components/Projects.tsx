const Projects = () => {
  const projects = [
    {
      title: "MAKEBOX",
      subtitle: "UX/UI and Product Design",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/e4af90235479989.68e2f0d725df5.jpg",
      link: "https://www.behance.net/gallery/235479989/MAKEBOX-UXUI-and-Product-design"
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
    <section id="work" className="min-h-screen px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest mb-2 text-muted-foreground">SELECTED WORK</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display text-2xl md:text-3xl font-medium group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground tracking-wide">
                  {project.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
