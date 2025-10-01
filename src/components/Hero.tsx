import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Developer & Writer
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-delay">
            Building elegant solutions and crafting compelling stories.
            <br />
            Exploring the intersection of code and creativity.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("projects")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary"
        aria-label="Scroll to projects"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
