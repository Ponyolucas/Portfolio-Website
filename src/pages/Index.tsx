import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
