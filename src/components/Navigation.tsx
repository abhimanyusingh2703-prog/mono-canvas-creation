const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-8 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-bold tracking-tighter hover:text-muted-foreground transition-colors">
          AP
        </a>
        
        <div className="flex gap-12 text-xs tracking-[0.2em] uppercase">
          <a href="#work" className="hover:text-muted-foreground transition-colors relative group">
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#skills" className="hover:text-muted-foreground transition-colors relative group">
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#contact" className="hover:text-muted-foreground transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
