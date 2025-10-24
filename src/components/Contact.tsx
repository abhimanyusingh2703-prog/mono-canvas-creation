const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-widest mb-2 text-muted-foreground">GET IN TOUCH</p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold">
                Let's Work
                <br />
                Together
              </h2>
            </div>
          </div>
          
          <div className="space-y-8 flex flex-col justify-end">
            <div className="space-y-6">
              <a 
                href="https://www.behance.net/fitoore1" 
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-baseline justify-between border-b border-border pb-4 transition-all duration-300 group-hover:border-foreground">
                  <span className="font-display text-xl md:text-2xl">Behance</span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">↗</span>
                </div>
              </a>
              
              <div className="block group">
                <div className="flex items-baseline justify-between border-b border-border pb-4 transition-all duration-300 group-hover:border-foreground">
                  <span className="font-display text-xl md:text-2xl">India</span>
                  <span className="text-sm text-muted-foreground">Location</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground font-light">
              Available for freelance projects and creative collaborations.
              <br />
              Open to opportunities in design and visual arts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
