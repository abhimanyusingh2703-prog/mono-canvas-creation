const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          AP
        </a>
        
        <div className="flex gap-8 text-sm tracking-wide">
          <a href="#work" className="hover:text-muted-foreground transition-colors">
            Work
          </a>
          <a href="#skills" className="hover:text-muted-foreground transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-muted-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
