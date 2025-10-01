import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Writings from "@/components/Writings";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter]">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Writings />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
