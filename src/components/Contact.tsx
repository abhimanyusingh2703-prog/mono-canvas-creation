const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="space-y-24">
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="h-px w-12 bg-foreground" />
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Get in Touch</p>
            </div>
            
            <h2 className="font-display text-6xl md:text-7xl lg:text-[8rem] font-bold tracking-tight leading-[0.85]">
              Let's Work
              <br />
              Together
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <a 
                  href="https://www.behance.net/fitoore1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center justify-between border-b border-border py-6 transition-all duration-300 group-hover:border-foreground group-hover:pl-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground tracking-wider">PORTFOLIO</p>
                      <span className="font-display text-2xl md:text-3xl font-medium">Behance</span>
                    </div>
                    <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </a>
                
                <div className="block group">
                  <div className="flex items-center justify-between border-b border-border py-6">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground tracking-wider">LOCATION</p>
                      <span className="font-display text-2xl md:text-3xl font-medium">India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 flex flex-col justify-end">
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-light leading-relaxed">
                  Available for freelance projects and creative collaborations.
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Currently open to opportunities in design and visual arts. 
                  Interested in projects that challenge conventions and 
                  push creative boundaries.
                </p>
              </div>
              
              <div className="pt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <p className="text-xs tracking-widest text-muted-foreground">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
