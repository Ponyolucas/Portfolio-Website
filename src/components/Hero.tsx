import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-berkeley-grad.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Lucas Walsh
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-delay">
              UC Berkeley Cognitive Science graduate crafting stories and building digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection("work")}
              >
                View My Work
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

          <div className="animate-fade-in-delay mt-8">
            <img 
              src={heroImage} 
              alt="Lucas Walsh at UC Berkeley graduation"
              className="rounded-lg shadow-card w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("work")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary"
        aria-label="Scroll to work section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
