import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("writings")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Writings
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("writings")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Writings
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
